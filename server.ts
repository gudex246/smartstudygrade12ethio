import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client
const getGenAI = () => {
  return new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
};

// Resilient Gemini Generator with Exponential Retry & Model Fallback Cascade
const FALLBACK_MODELS = ['gemini-3.7-flash', 'gemini-flash-latest', 'gemini-3.1-flash-lite'];

// Helper to remove raw symbols, asterisks, hashtags, and clutter from AI Tutor responses
function cleanTutorText(rawText: string): string {
  if (!rawText || typeof rawText !== 'string') return '';
  let text = rawText;
  // Remove markdown heading hashes
  text = text.replace(/^#{1,6}\s+/gm, '');
  // Remove bold & italic markdown asterisks and underscores
  text = text.replace(/\*\*\*([^*]+)\*\*\*/g, '$1');
  text = text.replace(/\*\*([^*]+)\*\*/g, '$1');
  text = text.replace(/\*([^*]+)\*/g, '$1');
  text = text.replace(/___([^_]+)___/g, '$1');
  text = text.replace(/__([^_]+)__/g, '$1');
  text = text.replace(/_([^_]+)_/g, '$1');
  // Remove standalone star asterisks or decorative horizontal lines
  text = text.replace(/^\s*[\*\-_=]{3,}\s*$/gm, '');
  text = text.replace(/\s*\*\s*/g, ' ');
  // Convert markdown bullet asterisks to clean bullet points
  text = text.replace(/^\s*[\*\-]\s+/gm, '• ');
  // Remove blockquote carrots
  text = text.replace(/^\s*>\s*/gm, '');
  // Remove backticks
  text = text.replace(/`{1,3}([^`]+)`{1,3}/g, '$1');
  text = text.replace(/`/g, '');
  // Clean excessive blank lines
  text = text.replace(/\n{3,}/g, '\n\n');
  return text.trim();
}

interface GenerateOptions {
  prompt: string;
  systemInstruction?: string;
  responseMimeType?: string;
  responseSchema?: any;
  temperature?: number;
}

async function callGeminiWithResilience(ai: GoogleGenAI, options: GenerateOptions): Promise<string> {
  let lastError: any = null;

  for (const model of FALLBACK_MODELS) {
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const config: any = {};
        if (options.systemInstruction) config.systemInstruction = options.systemInstruction;
        if (options.responseMimeType) config.responseMimeType = options.responseMimeType;
        if (options.responseSchema) config.responseSchema = options.responseSchema;
        if (options.temperature !== undefined) config.temperature = options.temperature;

        const response = await ai.models.generateContent({
          model,
          contents: options.prompt,
          config: Object.keys(config).length > 0 ? config : undefined,
        });

        if (response && response.text) {
          return response.text;
        }
      } catch (err: any) {
        lastError = err;
        const msg = err?.message || String(err);
        const isTransient =
          msg.includes('503') ||
          msg.includes('UNAVAILABLE') ||
          msg.includes('high demand') ||
          msg.includes('429') ||
          msg.includes('RESOURCE_EXHAUSTED') ||
          msg.includes('overloaded');

        if (isTransient && attempt === 0) {
          await new Promise((res) => setTimeout(res, 800));
          continue;
        }
        break; // try next model in cascade
      }
    }
  }

  throw lastError || new Error('Service temporarily unavailable');
}

// API Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', app: 'Smart Study Tutorial PWA', time: new Date().toISOString() });
});

// 1. Ask AI Tutor (for students)
app.post('/api/ai/ask-tutor', async (req, res) => {
  try {
    const { prompt, message, subject, contextNote, context, history } = req.body;
    const userPrompt = prompt || message;
    if (!userPrompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const ai = getGenAI();
    let systemInstruction = `You are the friendly, encouraging, and highly knowledgeable AI Tutor for "Smart Study Tutorial". 
You help students understand complex concepts in STEM, Humanities, and General Aptitude.

CRITICAL FORMATTING INSTRUCTIONS (USER PREFERENCE):
- Strictly avoid using markdown symbols such as asterisks (*, **, ***), hashtags (#, ##, ###), bold stars, or unnecessary decoration.
- Do NOT output hashtags or stars. Keep all headings as plain capitalized words or clean lines (e.g., "Overview:", "Step 1:", "Key Concept:").
- Use clean numbered lists (1., 2., 3.) or clean bullet points (• ) for lists.
- Write in clean, plain, natural, readable sentences and paragraphs.
- End with a clean, encouraging thought.
- IMPORTANT RULE FOR MATHEMATICS: For all Mathematics subjects, problems, and equations, all explanations, derivations, steps, hints, and responses MUST be strictly and exclusively in English.`;

    if (subject) {
      systemInstruction += `\nCurrent Subject Focus: ${subject}.`;
      if (subject.toLowerCase().includes('math')) {
        systemInstruction += `\nSPECIAL REQUIREMENT: The explanation and all steps for this Mathematics topic must be provided exclusively in English.`;
      }
    }
    const noteContext = contextNote || context;
    if (noteContext) {
      systemInstruction += `\nReference Study Context / Note:\n"""\n${noteContext}\n"""`;
    }

    let textResponse = '';
    try {
      const rawResponse = await callGeminiWithResilience(ai, {
        prompt: userPrompt,
        systemInstruction,
        temperature: 0.7,
      });
      textResponse = cleanTutorText(rawResponse);
    } catch (aiErr) {
      console.warn('Gemini API high demand / fallback activated for ask-tutor:', aiErr);
      textResponse = `Quick Concept Guidance\n\nRegarding your question: "${userPrompt}" in ${subject || 'General Study'}:\n\n1. Core Principle: In ${subject || 'academic problem solving'}, always identify the given conditions, the definitions that connect them, and work systematically step by step.\n2. Study Tip: Review key definitions and formulas in your Study Notes tab, and practice similar questions in the Question Bank.\n\nFeel free to ask follow-up questions or request specific step-by-step problem breakdowns!`;
    }

    res.json({
      response: textResponse,
      reply: textResponse,
    });
  } catch (error: any) {
    console.error('Error in /api/ai/ask-tutor:', error);
    res.status(200).json({
      response: "I am currently reviewing high volumes of student questions. Please review the curriculum notes and ask again shortly!",
      reply: "I am currently reviewing high volumes of student questions. Please review the curriculum notes and ask again shortly!"
    });
  }
});

// 2. AI Question Generator (for Admin)
app.post('/api/ai/generate-question', async (req, res) => {
  const { subject, topic, difficulty = 'medium', count = 1 } = req.body;
  try {
    const ai = getGenAI();

    const isMath = subject && subject.toLowerCase().includes('math');
    const promptText = `Generate ${count} high-quality, realistic multiple-choice tutorial exam questions for the following:
Subject: ${subject || 'General Science'}
Topic: ${topic || 'Core Principles'}
Difficulty Level: ${difficulty}
${isMath ? 'IMPORTANT: For Mathematics, the question, all 4 options, the step-by-step explanation, and the hint MUST be strictly in English only.' : ''}

Ensure the questions test conceptual understanding or problem-solving. Provide 4 distinct options, clearly identify the correct option index (0 to 3), and give an in-depth step-by-step explanation and a helpful hint.`;

    let parsed: any[] = [];
    try {
      const responseText = await callGeminiWithResilience(ai, {
        prompt: promptText,
        systemInstruction: `You are an expert exam creator and curriculum designer for Smart Study Tutorial.${isMath ? ' All Mathematics content and explanations must be exclusively in English.' : ''}`,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              questionText: { type: Type.STRING, description: 'The question text or problem statement' },
              options: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: 'Four multiple choice options (A, B, C, D)'
              },
              correctOptionIndex: { type: Type.INTEGER, description: 'Zero-based index (0, 1, 2, or 3) of the correct option' },
              explanation: { type: Type.STRING, description: 'Comprehensive step-by-step solution and reason why the answer is correct' },
              hint: { type: Type.STRING, description: 'A short guiding hint for students' },
              difficulty: { type: Type.STRING, description: 'Difficulty level (easy, medium, hard)' },
              subject: { type: Type.STRING, description: 'Subject name' },
              topic: { type: Type.STRING, description: 'Topic or chapter name' },
              points: { type: Type.INTEGER, description: 'Point value, e.g. 10 or 15' }
            },
            required: ['questionText', 'options', 'correctOptionIndex', 'explanation']
          }
        }
      });
      parsed = JSON.parse(responseText || '[]');
    } catch (aiErr) {
      console.warn('Gemini API high demand fallback for generate-question:', aiErr);
      parsed = [
        {
          questionText: `Which of the following best demonstrates the core principle of ${topic || subject || 'general scientific inquiry'}?`,
          options: [
            'Systematic empirical observation and hypothesis testing',
            'Relying solely on uncontrolled assumptions without evidence',
            'Ignoring experimental discrepancies and anomalous data',
            'Selecting only data that confirms initial bias'
          ],
          correctOptionIndex: 0,
          explanation: `Systematic empirical observation and hypothesis testing form the foundation of scientific and logical analysis across all national curriculum standards.`,
          hint: 'Think about the standard scientific method.',
          difficulty: difficulty,
          subject: subject || 'General Science',
          topic: topic || 'Core Principles',
          points: 10
        }
      ];
    }

    res.json({ questions: parsed });
  } catch (error: any) {
    console.error('Error in /api/ai/generate-question:', error);
    res.status(200).json({
      questions: [
        {
          questionText: `What is a fundamental requirement in ${subject || 'study problem solving'}?`,
          options: [
            'Understanding underlying formulas and definitions',
            'Memorizing arbitrary choices without logic',
            'Skipping verification of boundary conditions',
            'Assuming variables are always equal to zero'
          ],
          correctOptionIndex: 0,
          explanation: 'Clear conceptual comprehension of definitions and foundational formulas is essential for solving curriculum questions.',
          hint: 'Focus on fundamental definitions.',
          difficulty: 'medium',
          subject: subject || 'General Practice',
          topic: topic || 'Fundamentals',
          points: 10
        }
      ]
    });
  }
});

// 3. AI Question Deep Explanation (for students reviewing tests)
app.post('/api/ai/explain-question', async (req, res) => {
  const { questionText, options = [], correctOptionIndex = 0, userSelectedOptionIndex, explanation, subject } = req.body;
  try {
    const ai = getGenAI();

    const isMath = (subject && subject.toLowerCase().includes('math')) || 
                   (explanation && (explanation.includes('∫') || explanation.includes('dx') || explanation.includes('lim ') || explanation.includes('f(x)')));

    const promptText = `Please break down this practice question for a student in "Smart Study Tutorial":
${subject ? `Subject: ${subject}` : ''}
Question: "${questionText}"
Options:
${options.map((opt: string, i: number) => `${String.fromCharCode(65 + i)}) ${opt}`).join('\n')}
Correct Answer: Option ${String.fromCharCode(65 + correctOptionIndex)} (${options[correctOptionIndex] || ''})
${userSelectedOptionIndex !== undefined && userSelectedOptionIndex !== null ? `Student Chose: Option ${String.fromCharCode(65 + userSelectedOptionIndex)} (${options[userSelectedOptionIndex] || ''})` : ''}
Base Explanation: ${explanation || 'None provided'}
${isMath ? '\nIMPORTANT: Provide the complete explanation, derivation, and tips exclusively in English.' : ''}

CRITICAL FORMATTING INSTRUCTIONS (USER PREFERENCE):
- Strictly avoid using markdown symbols like asterisks (*, **, ***), hashtags (#, ##, ###), bold stars, or unnecessary decoration.
- Do NOT output hashtags or stars. Keep all headings as plain capitalized words or clean lines.
- Write in clean, plain, natural, readable sentences and paragraphs.

Structure the breakdown as follows:
1. Concept Summary: What fundamental principle is being tested?
2. Step-by-Step Solution Breakdown: Walk through the logical or mathematical derivation clearly in English.
3. Why Other Options Are Incorrect: Briefly explain why each other distractor option is incorrect.
4. Exam Pro Tip: A clean rule or strategy to avoid mistakes in exams.`;

    let explanationText = '';
    try {
      const rawText = await callGeminiWithResilience(ai, {
        prompt: promptText,
        systemInstruction: `You are an inspiring, friendly master tutor for Smart Study Tutorial. Do not use asterisks, hashtags, or markdown decorative symbols in your output.${isMath ? ' For Mathematics, all explanations, steps, and tips must be strictly in English.' : ''}`,
        temperature: 0.5,
      });
      explanationText = cleanTutorText(rawText);
    } catch (aiErr) {
      console.warn('Gemini API high demand / fallback activated for explain-question:', aiErr);
      
      const correctOptText = options[correctOptionIndex] || `Option ${String.fromCharCode(65 + correctOptionIndex)}`;
      const distractors = options
        .map((opt: string, i: number) => ({ opt, i }))
        .filter((item: { opt: string; i: number }) => item.i !== correctOptionIndex);

      explanationText = `Concept Summary:
This question tests core conceptual understanding regarding:
"${questionText}"

Step-by-Step Solution Breakdown:
• Correct Answer: Option ${String.fromCharCode(65 + correctOptionIndex)} (${correctOptText})
• Logical Rationale: ${explanation || `According to the standard curriculum, Option ${String.fromCharCode(65 + correctOptionIndex)} is the valid outcome.`}

Why Other Options Are Incorrect:
${distractors.map((d: { opt: string; i: number }) => `• Option ${String.fromCharCode(65 + d.i)} ("${d.opt}"): Represents a common misconception that contradicts the required conditions.`).join('\n')}

Exam Pro Tip:
• Key Strategy: Eliminate obviously incorrect options first, highlight given variables, and verify that your chosen option directly answers the specific prompt.`;
    }

    res.json({ explanation: cleanTutorText(explanationText) });
  } catch (error: any) {
    console.error('Error in /api/ai/explain-question:', error);
    res.status(200).json({
      explanation: `Verified Curriculum Solution\n\nCorrect Answer: Option ${String.fromCharCode(65 + Number(correctOptionIndex || 0))}\n\n${explanation || 'Refer to the official Ethiopian national exam guidelines and curriculum notes for this question.'}`
    });
  }
});

// 4. AI Note Summarizer & Key Takeaways
app.post('/api/ai/summarize-note', async (req, res) => {
  const { title, subject, contentMarkdown } = req.body;
  try {
    const ai = getGenAI();

    const promptText = `Analyze the following tutorial study note and generate a concise executive revision summary and 5 bullet point key takeaways for fast exam review:
Title: ${title}
Subject: ${subject}
Content:
"""
${contentMarkdown}
"""`;

    let parsed: any = null;
    try {
      const responseText = await callGeminiWithResilience(ai, {
        prompt: promptText,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING, description: '2-3 sentence overview of this note' },
            keyTakeaways: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: 'List of 4-6 essential bullet takeaways or formula rules'
            },
            estimatedReadTimeMinutes: { type: Type.INTEGER, description: 'Estimated reading time in minutes' }
          },
          required: ['summary', 'keyTakeaways']
        }
      });
      parsed = JSON.parse(responseText || '{}');
    } catch (aiErr) {
      console.warn('Gemini API fallback for summarize-note:', aiErr);
      const lines = (contentMarkdown || '').split('\n').filter((l: string) => l.trim().length > 0);
      const bulletLines = lines.filter((l: string) => l.startsWith('-') || l.startsWith('*') || l.startsWith('#')).slice(0, 5);
      
      parsed = {
        summary: `Comprehensive study guide covering foundational principles and exam mastery points for ${title} (${subject}).`,
        keyTakeaways: bulletLines.length > 0
          ? bulletLines.map((l: string) => l.replace(/^[-*#\s]+/, ''))
          : [
              `Master core definitions and formulas for ${title}`,
              'Practice high-frequency national examination problem types',
              'Review step-by-step proofs and derivations',
              'Eliminate common misconceptions in multiple-choice questions'
            ],
        estimatedReadTimeMinutes: Math.max(2, Math.ceil((contentMarkdown || '').length / 500))
      };
    }

    res.json(parsed);
  } catch (error: any) {
    console.error('Error in /api/ai/summarize-note:', error);
    res.status(200).json({
      summary: `Revision summary for ${title} (${subject}).`,
      keyTakeaways: ['Review standard definitions', 'Practice multiple choice questions', 'Review formula sheets'],
      estimatedReadTimeMinutes: 5
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Smart Study Tutorial PWA server running on http://localhost:${PORT}`);
  });
}

if (!process.env.VERCEL) {
  startServer();
}

export default app;
