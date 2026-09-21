import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  Send,
  Sparkles,
  User as UserIcon,
  Trash2,
  Lightbulb,
  Zap,
  BookOpen,
  ArrowRight,
  RefreshCw
} from 'lucide-react';
import { User, AIChatMessage } from '../../types';
import { ALL_SUBJECTS } from '../../data/initialData';
import { getChatHistory, saveChatMessage, clearChatHistory } from '../../utils/storage';
import { cleanTutorText } from '../../utils/textFormatter';

interface AITutorViewProps {
  currentUser: User;
  onOpenSubscriptionModal: () => void;
  initialPrompt?: string;
  initialContext?: string;
}

export const AITutorView: React.FC<AITutorViewProps> = ({
  currentUser,
  onOpenSubscriptionModal,
  initialPrompt,
  initialContext
}) => {
  const [messages, setMessages] = useState<AIChatMessage[]>(getChatHistory());
  const [inputMessage, setInputMessage] = useState(initialPrompt || '');
  const [selectedSubject, setSelectedSubject] = useState<string>(ALL_SUBJECTS[0]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // If initialPrompt is passed, set input
  useEffect(() => {
    if (initialPrompt) {
      setInputMessage(initialPrompt);
    }
  }, [initialPrompt]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    const userMsg: AIChatMessage = {
      id: 'msg-' + Date.now(),
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      subject: selectedSubject
    };

    const updatedHistory = [...messages, userMsg];
    setMessages(updatedHistory);
    saveChatMessage(userMsg);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Build conversation context
      const chatHistoryPayload = updatedHistory.slice(-6).map((m) => ({
        role: m.role,
        content: m.content
      }));

      const res = await fetch('/api/ai/ask-tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          subject: selectedSubject,
          context: initialContext,
          history: chatHistoryPayload
        })
      });

      const data = await res.json();
      const aiReply = cleanTutorText(data.reply || data.response || "I am here to help you master this concept! Let's break it down together.");

      const botMsg: AIChatMessage = {
        id: 'msg-' + (Date.now() + 1),
        role: 'assistant',
        content: aiReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        subject: selectedSubject
      };

      const finalHistory = [...updatedHistory, botMsg];
      setMessages(finalHistory);
      saveChatMessage(botMsg);
    } catch (e) {
      console.error('AI Chat error', e);
      const errorMsg: AIChatMessage = {
        id: 'msg-' + (Date.now() + 1),
        role: 'assistant',
        content: "I'm having a slight connection issue. Please check your internet or try asking again in a moment.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        subject: selectedSubject
      };
      setMessages([...updatedHistory, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    if (window.confirm('Clear your conversation history with AI Tutor?')) {
      clearChatHistory();
      setMessages([]);
    }
  };

  const quickPrompts = [
    { title: 'Explain Step-by-Step', prompt: `Explain the fundamental concept of this subject step-by-step with an intuitive real-world example.` },
    { title: 'Test My Knowledge', prompt: `Ask me 1 challenging conceptual question in ${selectedSubject} and wait for my answer before revealing the solution.` },
    { title: 'Exam Trap Warnings', prompt: `What are the 3 most common mistakes students make in ${selectedSubject} exams and how can I avoid them?` },
    { title: 'Formula Derivation', prompt: `Can you show me the key formula breakdown for this topic and explain what each variable represents?` }
  ];

  return (
    <div className="space-y-4 max-w-5xl mx-auto">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-violet-950/50 via-slate-900 to-indigo-950/50 border border-violet-500/30 rounded-3xl p-4 sm:p-6 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-violet-600/30 shrink-0">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold font-display text-white">Smart Study 24/7 AI Tutor</h2>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                Active
              </span>
            </div>
            <p className="text-xs text-slate-300">
              Personalized academic coaching powered by Gemini. Ask any question, verify steps, or practice problems.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="bg-slate-800 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-2 focus:outline-none"
          >
            {ALL_SUBJECTS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          {messages.length > 0 && (
            <button
              onClick={handleClearChat}
              className="p-2 text-slate-400 hover:text-rose-400 bg-slate-800/80 hover:bg-slate-800 rounded-xl transition-colors"
              title="Clear Chat"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Quick Prompts Carousel */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {quickPrompts.map((qp, i) => (
          <button
            key={i}
            onClick={() => handleSendMessage(qp.prompt)}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-violet-500/50 hover:bg-slate-800/60 text-left transition-all group cursor-pointer"
          >
            <div className="flex items-center justify-between text-violet-400 mb-1">
              <Sparkles className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-xs font-semibold text-white">{qp.title}</p>
            <p className="text-[10px] text-slate-400 truncate mt-0.5">{qp.prompt}</p>
          </button>
        ))}
      </div>

      {/* Chat Messages Container */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-6 min-h-[420px] max-h-[550px] overflow-y-auto flex flex-col justify-between space-y-4">
        
        {/* Messages List */}
        <div className="space-y-4">
          {messages.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-violet-600/10 border border-violet-500/20 text-violet-400 flex items-center justify-center mx-auto">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-base text-white">How can I assist your study session today?</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Ask me to break down difficult formulas, guide you through problem derivations, or explain complex ideas simply.
              </p>
            </div>
          ) : (
            messages.map((m) => {
              const isUser = m.role === 'user';
              return (
                <div
                  key={m.id}
                  className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!isUser && (
                    <div className="w-8 h-8 rounded-xl bg-violet-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-violet-600/30 mt-1">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 space-y-1.5 shadow-sm ${
                      isUser
                        ? 'bg-indigo-600 text-white rounded-br-xs'
                        : 'bg-slate-950/80 border border-slate-800 text-slate-200 rounded-bl-xs'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 text-[10px] opacity-70">
                      <span className="font-semibold">{isUser ? currentUser.name : 'Smart Study AI'}</span>
                      <span>{m.timestamp}</span>
                    </div>

                    <div className="text-xs sm:text-sm whitespace-pre-line leading-relaxed">
                      {isUser ? m.content : cleanTutorText(m.content)}
                    </div>
                  </div>

                  {isUser && (
                    <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 flex items-center justify-center shrink-0 mt-1">
                      <UserIcon className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })
          )}

          {isLoading && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-violet-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl px-4 py-3 text-xs text-violet-300 flex items-center gap-2">
                <div className="w-3.5 h-3.5 border-2 border-violet-400/40 border-t-violet-400 rounded-full animate-spin"></div>
                <span>Tutor is thinking and generating step-by-step guidance...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="pt-3 border-t border-slate-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={`Ask anything about ${selectedSubject} (e.g. How does chain rule work?)...`}
              className="flex-1 px-4 py-3 bg-slate-950 border border-slate-700 rounded-2xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
            />

            <button
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              className="px-5 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 disabled:opacity-50 text-white font-bold rounded-2xl text-xs sm:text-sm flex items-center gap-1.5 shadow-lg shadow-violet-600/30 transition-all shrink-0 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Ask Tutor</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
