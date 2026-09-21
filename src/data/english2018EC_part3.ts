import { Question } from '../types';
import { ADMIN_EMAIL } from './constants';

const PASSAGE_1_TEXT = `Passage 1: The Importance of Mental Health
(1) Mental health is a crucial component of overall well-being, yet it is frequently neglected in modern society. While physical health issues are easily identified and treated, mental health struggles often remain hidden due to societal stigma. Many individuals suffer in silence, believing that acknowledging their emotional or psychological pain is a sign of weakness. However, mental health is just as important as physical health, and neglecting it can severely impact a person's quality of life, relationships, and professional success.
(2) Various factors can negatively affect one's psychological well-being. Chronic stress from work, unresolved childhood trauma, and unhealthy relationships are known to aggravate underlying mental health conditions. Furthermore, in today's fast-paced digital world, excessive use of social media often leads to feelings of inadequacy and isolation. When these issues are left unaddressed, they can escalate into severe anxiety disorders or clinical depression, making everyday tasks feel insurmountable.
(3) Addressing mental health requires a proactive approach. Regular exercise, a balanced diet, and sufficient sleep form a strong foundation for emotional resilience. Additionally, engaging in mindfulness practices such as meditation can help manage stress. However, self-care is sometimes not enough. When individuals feel overwhelmed, it is vital to seek professional support. Ultimately, consulting therapists or counselors is the most effective way to navigate deep-rooted psychological challenges and achieve long-term mental stability.`;

export const ENGLISH_2018_EC_PART3: Question[] = [
  // Language Focus Continued (51–65)
  {
    id: 'eng-2018-q51',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Phrasal Verbs with Prepositional Gerunds (look forward to)',
    questionText: '51. I am looking forward ______ you soon.',
    options: [
      'to see',
      'seeing',
      'to seeing',
      'see'
    ],
    correctOptionIndex: 2,
    explanation: `In the expression "look forward to", "to" functions as a preposition (not part of an infinitive).
Because prepositions are followed by nouns or gerunds (-ing form), it must be followed by "seeing":
"I am looking forward to seeing you soon."`,
    hint: '"Look forward to" requires the gerund (-ing form) because "to" is a preposition here.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q52',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: "Be used to" + Gerund (Accustomed to)',
    questionText: '52. They are used to ______ up early in the morning.',
    options: [
      'wake',
      'waking',
      'woke',
      'waken'
    ],
    correctOptionIndex: 1,
    explanation: `Grammar distinction:
• "be used to + -ing" means to be accustomed to something:
"They are used to waking up early in the morning."
• (Contrast with "used to + base verb", which describes a past habit that no longer happens: "They used to wake up early").`,
    hint: '"Be used to" is followed by a gerund (-ing form) meaning accustomed to.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q53',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Concessive Clauses (Although vs. Because)',
    questionText: '53. ______ he was tired, he finished his assignment.',
    options: [
      'Because',
      'Although',
      'However',
      'Since'
    ],
    correctOptionIndex: 1,
    explanation: `The two clauses express a contrast/concession: being tired would normally hinder finishing, yet he finished.
• "Although" is the subordinating conjunction of concession that introduces an adverbial clause of contrast:
"Although he was tired, he finished his assignment."
• "Because" and "Since" denote cause/reason.
• "However" is a conjunctive adverb that cannot connect subordinate clauses this way without semicolon/period.`,
    hint: 'Choose the subordinating conjunction that shows contrast.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q54',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Subjunctive with "Would rather + Subject"',
    questionText: '54. I would rather you ______ home now; it is getting dark.',
    options: [
      'go',
      'went',
      'going',
      'gone'
    ],
    correctOptionIndex: 1,
    explanation: `When "would rather" has a different subject following it (would rather + subject), it takes the past subjunctive (past simple form) to express a preference regarding present or future action:
"I would rather you went home now."
(Contrast: "I would rather go home now" when the subject does not change).`,
    hint: 'When "would rather" is followed by another subject (you), use the past form "went".',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q55',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Degree Modifiers (so... that vs such... that)',
    questionText: '55. Selam is ______ intelligent that she easily solved the puzzle.',
    options: [
      'such',
      'too',
      'so',
      'very'
    ],
    correctOptionIndex: 2,
    explanation: `Structure comparison:
• so + adjective + that clause: "so intelligent that..."
• such + (a/an) + adjective + noun + that clause: "such an intelligent girl that..."
Since "intelligent" is an adjective without a following noun, "so" is the correct intensifier.`,
    hint: 'Use "so + adjective + that" to show cause and effect.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q56',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Indirect Questions & Word Order',
    questionText: '56. He asked me where ______ going.',
    options: [
      'was I',
      'I was',
      'am I',
      'I am'
    ],
    correctOptionIndex: 1,
    explanation: `In embedded / indirect reported questions:
• Inversion is removed and normal affirmative word order (Subject + Verb) is restored.
• Because the reporting verb "asked" is past tense, the verb backshifts from present to past ("I was"):
"He asked me where I was going."`,
    hint: 'Indirect questions use statement word order (Subject + Verb) with backshifted past tense: "I was".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q57',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Past Passive Voice',
    questionText: '57. The house ______ last year by a famous architect.',
    options: [
      'builds',
      'built',
      'was built',
      'has built'
    ],
    correctOptionIndex: 2,
    explanation: `• The subject ("The house") is the recipient of the action, requiring passive voice (be + past participle).
• The specific past time marker "last year" requires past simple passive: "was built".
Sentence: "The house was built last year by a famous architect."`,
    hint: 'Use the past passive structure "was + past participle (built)".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q58',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Semi-Modals (had better + bare infinitive)',
    questionText: '58. You had better ______ an umbrella. It looks like it will rain.',
    options: [
      'take',
      'to take',
      'taking',
      'took'
    ],
    correctOptionIndex: 0,
    explanation: `The semi-modal idiom "had better" is always followed directly by a bare infinitive (base form of the verb without "to"):
had better + bare verb ⟹ "had better take an umbrella."`,
    hint: '"Had better" is followed by the base form of the verb without "to".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q59',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Prepositional Phrases of Reason (Because of + Noun Phrase)',
    questionText: '59. ______ of the heavy rain, the football match was postponed.',
    options: [
      'Because',
      'In spite',
      'Due to the fact',
      'Because of'
    ],
    correctOptionIndex: 3,
    explanation: `• "Because of" is a two-word preposition followed by a noun phrase ("the heavy rain").
(Note: The sentence prompt provides "______ of the heavy rain", where "Because" completes the prepositional phrase "Because of", and in option D "Because of" is the standard target connector).
Therefore, Option D is correct.`,
    hint: '"Because of" precedes a noun phrase to give a reason.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q60',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Negative Inversion & Correlative Pairs (Scarcely... when)',
    questionText: '60. Scarcely had she finished the exam ______ the bell rang.',
    options: [
      'than',
      'when',
      'then',
      'while'
    ],
    correctOptionIndex: 1,
    explanation: `Correlative pairs in inverted negative constructions:
• "Hardly / Scarcely had + subject + past participle ... WHEN ..."
• "No sooner had + subject + past participle ... THAN ..."
Because the sentence begins with "Scarcely had", it must be paired with "when".`,
    hint: '"Scarcely had..." always pairs with "when" (unlike "No sooner had...", which pairs with "than").',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q61',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Prepositions of Time (since vs. for)',
    questionText: '61. She has been living in Addis Ababa ______ 2015.',
    options: [
      'for',
      'since',
      'in',
      'from'
    ],
    correctOptionIndex: 1,
    explanation: `• "Since" is used with the present perfect continuous to indicate the specific starting point of an action that continues into the present (e.g., "since 2015").
• "For" is used for a duration or period of time (e.g., "for ten years").`,
    hint: 'Use "since" with a specific starting year like 2015.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q62',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Phrasal Verbs (point out)',
    questionText: "62. I didn't mean to offend you; I just wanted to point ______ the error.",
    options: [
      'in',
      'up',
      'out',
      'on'
    ],
    correctOptionIndex: 2,
    explanation: `The phrasal verb "point out" means to draw attention to something, indicate, or identify a mistake or fact:
"point out the error."`,
    hint: 'To indicate or show an error is to "point out".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q63',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Phrasal Verbs with Electrical Appliances (turn off)',
    questionText: '63. Could you please turn ______ the lights before leaving the room?',
    options: [
      'off',
      'out',
      'down',
      'up'
    ],
    correctOptionIndex: 0,
    explanation: `The phrasal verb "turn off" means to deactivate or switch off electric lights or appliances:
"turn off the lights."`,
    hint: 'To switch off electrical lights, use "turn off".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q64',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Causative Verbs (make + object + bare infinitive)',
    questionText: '64. The teacher made the students ______ the exercise again.',
    options: [
      'to do',
      'doing',
      'do',
      'did'
    ],
    correctOptionIndex: 2,
    explanation: `Causative "make" in active voice follows the pattern:
make + person / object + bare infinitive (base verb without "to")
"The teacher made the students do the exercise again."`,
    hint: 'The causative verb "make" takes a bare infinitive without "to".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q65',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Grammar: Mixed Conditionals (Past Condition with Present Result)',
    questionText: "65. If he ______ the truth, I wouldn't be angry now. (Mixed conditional context)",
    options: [
      'tells',
      'told',
      'has told',
      'had told'
    ],
    correctOptionIndex: 3,
    explanation: `This is a mixed conditional combining a past unreal condition with a present result:
• "If" clause refers to the past (unreal past action: he didn't tell the truth) ⟹ past perfect ("had told").
• Main clause refers to the present ("wouldn't be angry now") ⟹ would + bare infinitive.
Structure: If + had told, I wouldn't be angry now.`,
    hint: 'For an unreal past event with a present outcome ("now"), the "if" clause takes the past perfect: "had told".',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // III. Comprehension (Questions 66–85)
  // Section One: Sentence Comprehension (66–68)
  {
    id: 'eng-2018-q66',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Comprehension: Paraphrasing Conditional Obligations',
    questionText: '66. Choose the sentence with the closest meaning to the head sentence:\n"You will not receive your pension unless you give a written notice prior to your retirement."',
    options: [
      'A written notice is mandatory before retiring in order to get your pension.',
      'You can get your pension without a written notice if you retire early.',
      'You must give written notice after retiring to receive your pension.',
      'Written notice is optional for receiving your pension.'
    ],
    correctOptionIndex: 0,
    explanation: `Analysis:
• "unless" means "if not", establishing a necessary prerequisite.
• "prior to" means "before".
• Therefore, submitting written notice before retiring is an absolute, mandatory requirement to qualify for the pension.
Option A accurately captures this exact meaning.`,
    hint: '"Unless... prior to retirement" means giving notice before retiring is mandatory.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q67',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Comprehension: Interpreting Modals of Past Regret (should not have)',
    questionText: '67. Choose the sentence with the closest meaning to the head sentence:\n"When I was younger, I should not have taken my education for granted."',
    options: [
      'I am proud of how I handled my education when I was young.',
      'I regret that I did not value my education properly in my youth.',
      'My education was granted to me when I was young.',
      'I did not have any education when I was younger.'
    ],
    correctOptionIndex: 1,
    explanation: `Analysis:
• "should not have [done something]" expresses past regret or criticism about a past choice.
• "to take something for granted" means to fail to appreciate or properly value something.
• Thus, the speaker regrets that they did not value their education properly in their youth (Option B).`,
    hint: '"Should not have taken for granted" expresses regret for failing to value something.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q68',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Comprehension: Paraphrasing Necessary Conditions',
    questionText: '68. Choose the sentence with the closest meaning to the head sentence:\n"You will not get time off work unless you present a valid doctor\'s note."',
    options: [
      "A doctor's note guarantees you will be fired from work.",
      'You can take time off without seeing a doctor.',
      "Presenting a doctor's note is a necessary condition for getting time off.",
      'Doctors are not allowed to give notes for time off work.'
    ],
    correctOptionIndex: 2,
    explanation: `Analysis:
• "Will not [happen] unless [condition]" means that the condition is strictly required (a necessary condition).
• Without presenting the note, time off cannot be granted.
Hence, presenting a doctor's note is a necessary condition (Option C).`,
    hint: '"Not X unless Y" means Y is a required/necessary condition for X.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },

  // Section Two: Reading Comprehension (69–75)
  {
    id: 'eng-2018-q69',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Reading Comprehension: Central Theme Identification',
    questionText: `${PASSAGE_1_TEXT}\n\n69. What is the central theme of Passage 1?`,
    options: [
      'The benefits of social media on relationships.',
      'The physical health challenges of the modern world.',
      'The importance of recognizing and addressing mental health.',
      'How to become a professional therapist.'
    ],
    correctOptionIndex: 2,
    explanation: `The entire passage discusses why mental health is crucial, why it is neglected due to stigma, what factors harm it, and how people can proactively address it through self-care and professional therapy.
Therefore, the central theme is "The importance of recognizing and addressing mental health."`,
    hint: 'Consider the overall subject of the entire passage from definition to treatment.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q70',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Reading Comprehension: Directly Stated Facts',
    questionText: `${PASSAGE_1_TEXT}\n\n70. According to paragraph 1, why do many individuals hide their mental health struggles?`,
    options: [
      'They enjoy suffering in silence.',
      'They believe physical health is less important.',
      'They fear the societal stigma and being seen as weak.',
      'They cannot afford medical treatment.'
    ],
    correctOptionIndex: 2,
    explanation: `Paragraph 1 states: "mental health struggles often remain hidden due to societal stigma. Many individuals suffer in silence, believing that acknowledging their emotional or psychological pain is a sign of weakness."
This directly corresponds to Option C.`,
    hint: 'Look for the explanation given in paragraph 1 about stigma and weakness.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q71',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Reading Comprehension: Contextual Vocabulary (aggravate)',
    questionText: `${PASSAGE_1_TEXT}\n\n71. In paragraph 2, the word "aggravate" most likely means:`,
    options: [
      'To improve or heal.',
      'To make a problem worse or more severe.',
      'To completely ignore.',
      'To diagnose quickly.'
    ],
    correctOptionIndex: 1,
    explanation: `In paragraph 2, the sentence states that chronic stress and trauma "are known to aggravate underlying mental health conditions."
In this medical context, "aggravate" means to worsen, intensify, or make more severe (Option B).`,
    hint: '"Aggravate" means to make an existing negative condition worse.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q72',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Reading Comprehension: Pronoun Reference Analysis',
    questionText: `${PASSAGE_1_TEXT}\n\n72. In paragraph 2, the pronoun "they" in the sentence "When these issues are left unaddressed, they can escalate..." refers to:`,
    options: [
      'Social media platforms.',
      'Individuals.',
      'These issues (factors affecting mental health).',
      'Childhood traumas.'
    ],
    correctOptionIndex: 2,
    explanation: `Tracing the reference in the sentence:
"When these issues are left unaddressed, they can escalate into severe anxiety disorders..."
The pronoun "they" immediately refers back to its grammatical antecedent "these issues" (the chronic stress, unresolved trauma, and social media impacts discussed earlier).`,
    hint: 'Identify the plural subject "these issues" that precedes "they can escalate".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q73',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Reading Comprehension: Stated Details',
    questionText: `${PASSAGE_1_TEXT}\n\n73. According to the passage, what effect does excessive social media use have on individuals?`,
    options: [
      'It builds strong emotional resilience.',
      'It leads to feelings of isolation and inadequacy.',
      'It helps cure clinical depression.',
      'It replaces the need for professional therapy.'
    ],
    correctOptionIndex: 1,
    explanation: `Paragraph 2 explicitly states: "...excessive use of social media often leads to feelings of inadequacy and isolation."
This directly supports Option B.`,
    hint: 'Check the direct statement in paragraph 2 regarding the impact of excessive social media.',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q74',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Reading Comprehension: Inference from Text',
    questionText: `${PASSAGE_1_TEXT}\n\n74. What can be inferred from the passage about the relationship between physical and mental health?`,
    options: [
      'Physical health is much easier to diagnose and treat than mental health.',
      'Mental health is dependent solely on physical exercises.',
      'Physical health is entirely unrelated to emotional well-being.',
      'Mental health is more important than physical health.'
    ],
    correctOptionIndex: 0,
    explanation: `Paragraph 1 states: "While physical health issues are easily identified and treated, mental health struggles often remain hidden due to societal stigma."
This contrast directly implies that physical health problems are much simpler to recognize, identify, and clinically treat compared to hidden mental struggles (Option A).`,
    hint: 'Paragraph 1 contrasts easily identified physical issues with hidden mental struggles.',
    difficulty: 'medium',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  },
  {
    id: 'eng-2018-q75',
    subject: 'English',
    year: '2018 E.C.',
    topic: 'Reading Comprehension: Contextual Vocabulary (Ultimately)',
    questionText: `${PASSAGE_1_TEXT}\n\n75. In paragraph 3, the word "Ultimately" most closely means:`,
    options: [
      'In the beginning.',
      'Partially.',
      'In the end; fundamentally.',
      'Rarely.'
    ],
    correctOptionIndex: 2,
    explanation: `The adverb "ultimately" means at the most basic or fundamental level, or in the end after all other considerations:
"In the end; fundamentally."`,
    hint: '"Ultimately" means "in the final analysis" or "fundamentally".',
    difficulty: 'easy',
    points: 10,
    isFreePreview: false,
    createdAt: '2026-09-21',
    createdBy: ADMIN_EMAIL
  }
];
