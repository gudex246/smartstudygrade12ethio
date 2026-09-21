import React, { useState, useMemo } from 'react';
import {
  Layers,
  CheckCircle,
  XCircle,
  HelpCircle,
  Sparkles,
  Timer,
  Award,
  RotateCcw,
  Lock,
  ArrowRight,
  ChevronRight,
  Filter,
  Search,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Question, User } from '../../types';
import { ALL_SUBJECTS, AVAILABLE_YEARS } from '../../data/initialData';
import { saveQuizAttempt } from '../../utils/storage';
import { TrilingualExplanation } from '../common/TrilingualExplanation';
import { cleanTutorText } from '../../utils/textFormatter';

interface QuestionsViewProps {
  questions: Question[];
  currentUser: User;
  onOpenSubscriptionModal: () => void;
  onAskAITutor: (prompt: string, context?: string) => void;
  onOpenInstallModal?: () => void;
}

export const QuestionsView: React.FC<QuestionsViewProps> = ({
  questions,
  currentUser,
  onOpenSubscriptionModal,
  onAskAITutor,
  onOpenInstallModal
}) => {
  const isSubscribed = currentUser.subscription?.status === 'active' || currentUser.role === 'admin';

  // Mode: 'practice' or 'timed-exam' or 'exam-result'
  const [viewMode, setViewMode] = useState<'practice' | 'exam' | 'result'>('practice');
  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Practice state
  const [userSelectedAnswers, setUserSelectedAnswers] = useState<Record<string, number>>({});
  const [showHints, setShowHints] = useState<Record<string, boolean>>({});
  const [aiExplainingQId, setAiExplainingQId] = useState<string | null>(null);
  const [aiDeepExplanations, setAiDeepExplanations] = useState<Record<string, string>>({});

  // Exam state
  const [examSubject, setExamSubject] = useState(ALL_SUBJECTS[0]);
  const [examYear, setExamYear] = useState('All');
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentExamIdx, setCurrentExamIdx] = useState(0);
  const [examAnswers, setExamAnswers] = useState<Record<string, number>>({});
  const [examTimeRemaining, setExamTimeRemaining] = useState(300); // 5 mins default
  const [examScore, setExamScore] = useState<{ score: number; total: number; percentage: number } | null>(null);

  // Filter and sort practice questions
  const filteredQuestions = useMemo(() => {
    const list = questions.filter((q) => {
      const matchesSubject =
        selectedSubject === 'All' ||
        q.subject === selectedSubject ||
        (selectedSubject === 'Smart Study Model Exam' && (
          q.subject === 'Smart Study Model Exam' ||
          (q.year && q.year.toLowerCase().includes('model')) ||
          (q.topic && q.topic.toLowerCase().includes('model'))
        ));
      const matchesYear =
        selectedYear === 'All' ||
        q.year === selectedYear ||
        (selectedYear && q.year && (q.year.includes(selectedYear.replace(' E.C.', '')) || selectedYear.includes(q.year.replace(' E.C.', '')))) ||
        (!q.year && selectedYear === 'General Practice') ||
        (selectedYear === '2017 E.C. Model Exam' && (q.year?.toLowerCase().includes('model') || q.subject === 'Smart Study Model Exam'));
      const matchesSearch =
        q.questionText.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (q.year && q.year.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (q.subject && q.subject.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesSubject && matchesYear && matchesSearch;
    });

    const parseQuestionNum = (q: Question) => {
      const match = q.questionText.match(/^(\d+)\./);
      if (match) return parseInt(match[1], 10);
      const idMatch = q.id.match(/-q0*(\d+)$/);
      if (idMatch) return parseInt(idMatch[1], 10);
      return 9999;
    };

    return [...list].sort((a, b) => {
      // If same subject & year, sort by question number starting strictly from 1
      if (a.subject === b.subject && a.year === b.year) {
        const numA = parseQuestionNum(a);
        const numB = parseQuestionNum(b);
        if (numA !== numB) return numA - numB;
      }
      return 0;
    });
  }, [questions, selectedSubject, selectedYear, searchQuery]);

  const handleSelectOption = (questionId: string, optionIdx: number) => {
    setUserSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIdx
    }));
  };

  const handleToggleHint = (questionId: string) => {
    setShowHints((prev) => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const handleAskAIDeepExplain = async (q: Question) => {
    setAiExplainingQId(q.id);
    try {
      const res = await fetch('/api/ai/explain-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionText: q.questionText,
          options: q.options,
          correctOptionIndex: q.correctOptionIndex,
          userSelectedOptionIndex: userSelectedAnswers[q.id],
          explanation: q.explanation,
          subject: q.subject
        })
      });
      const data = await res.json();
      if (data && data.explanation) {
        setAiDeepExplanations((prev) => ({
          ...prev,
          [q.id]: cleanTutorText(data.explanation)
        }));
      } else {
        setAiDeepExplanations((prev) => ({
          ...prev,
          [q.id]: `Solution Breakdown\n\nCorrect Option: ${String.fromCharCode(65 + q.correctOptionIndex)} (${q.options[q.correctOptionIndex]})\n\n${q.explanation || 'Refer to the curriculum notes for this question.'}`
        }));
      }
    } catch (e) {
      console.error('Failed to get AI explanation', e);
      setAiDeepExplanations((prev) => ({
        ...prev,
        [q.id]: `Solution Breakdown\n\nCorrect Option: ${String.fromCharCode(65 + q.correctOptionIndex)} (${q.options[q.correctOptionIndex]})\n\n${q.explanation || 'Refer to the curriculum notes for this question.'}`
      }));
    } finally {
      setAiExplainingQId(null);
    }
  };

  // Start Exam
  const handleStartExam = (customSubject?: string) => {
    const subjectToUse = customSubject || examSubject;
    let pool = questions.filter((q) => {
      if (subjectToUse === 'All') return true;
      if (subjectToUse === 'Smart Study Model Exam') {
        return (
          q.subject === 'Smart Study Model Exam' ||
          (q.year && q.year.toLowerCase().includes('model')) ||
          (q.topic && q.topic.toLowerCase().includes('model'))
        );
      }
      return q.subject === subjectToUse;
    });
    if (!isSubscribed) {
      pool = pool.filter((q) => q.isFreePreview);
    }
    if (pool.length === 0) {
      pool = questions.slice(0, 5);
    }
    // Shuffle and pick up to 10
    const shuffled = [...pool].sort(() => 0.5 - Math.random()).slice(0, Math.min(pool.length, 10));
    setExamSubject(subjectToUse);
    setExamQuestions(shuffled);
    setExamAnswers({});
    setCurrentExamIdx(0);
    setExamTimeRemaining(shuffled.length * 60); // 1 min per question
    setViewMode('exam');
  };

  const handleSubmitExam = () => {
    let correctCount = 0;
    examQuestions.forEach((q) => {
      if (examAnswers[q.id] === q.correctOptionIndex) {
        correctCount += 1;
      }
    });

    const total = examQuestions.length;
    const percentage = Math.round((correctCount / total) * 100);
    const scoreObj = { score: correctCount, total, percentage };
    setExamScore(scoreObj);

    // Save to storage
    saveQuizAttempt({
      userId: currentUser.id,
      subject: examSubject,
      score: correctCount,
      totalQuestions: total,
      percentage,
      timeSpentSec: examQuestions.length * 60 - examTimeRemaining,
      answers: examAnswers
    });

    if (percentage >= 70) {
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }

    setViewMode('result');
  };

  return (
    <div className="space-y-6">
      
      {/* Mode Selector & Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-4 sm:p-5 rounded-2xl">
        <div>
          <h2 className="text-xl font-bold font-display text-white">Interactive Practice & Question Bank</h2>
          <p className="text-xs text-slate-400">Master problem solving with instant feedback, hints, and AI explanations.</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            id="mode-practice-btn"
            onClick={() => setViewMode('practice')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              viewMode === 'practice'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            Practice Mode
          </button>

          <button
            id="mode-exam-btn"
            onClick={() => {
              if (viewMode !== 'exam' && viewMode !== 'result') {
                handleStartExam();
              } else {
                setViewMode('exam');
              }
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === 'exam' || viewMode === 'result'
                ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-sm'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Timer className="w-3.5 h-3.5" />
            <span>Timed Exam Test</span>
          </button>

          {onOpenInstallModal && (
            <button
              onClick={onOpenInstallModal}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5 transition-all cursor-pointer"
              title="Install PWA for Offline Practice"
            >
              <span>📲</span>
              <span className="hidden md:inline">Install Offline App</span>
              <span className="md:hidden">Install</span>
            </button>
          )}
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* PRACTICE MODE */}
      {/* ------------------------------------------------------------- */}
      {viewMode === 'practice' && (
        <div className="space-y-4">
          
          {/* Filters Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800">
            <div className="flex flex-wrap items-center gap-2 flex-1">
              <div className="relative flex-1 min-w-[180px] max-w-xs">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions by keyword or topic..."
                  className="w-full pl-9 pr-3 py-1.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <select
                id="question-subject-select"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="bg-slate-800 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-1.5 focus:outline-none focus:border-indigo-500 font-medium"
              >
                <option value="All">All Subjects</option>
                <option value="Smart Study Model Exam" className="text-amber-400 font-bold bg-slate-900">
                  ⭐ Smart Study Model Exam
                </option>
                {ALL_SUBJECTS.filter((s) => s !== 'Smart Study Model Exam').map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>

              <select
                id="question-year-select"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-slate-800 border border-slate-700 text-xs text-amber-300 font-semibold rounded-xl px-3 py-1.5 focus:outline-none focus:border-amber-500"
              >
                <option value="All">All Exam Years</option>
                {AVAILABLE_YEARS.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>

            <div className="text-xs text-slate-400 flex items-center gap-1.5">
              <span>Total: <strong className="text-white">{filteredQuestions.length}</strong> questions</span>
              {selectedYear !== 'All' && (
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold text-[10px]">
                  {selectedYear}
                </span>
              )}
            </div>
          </div>

          {/* Subject Pills: Directly UNDER the subject filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 pt-0.5 scrollbar-thin scrollbar-thumb-slate-700">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
              <Layers className="w-3 h-3 text-indigo-400" />
              <span>Subject:</span>
            </span>

            <button
              id="subject-pill-all"
              type="button"
              onClick={() => setSelectedSubject('All')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedSubject === 'All'
                  ? 'bg-slate-700 text-white shadow-xs'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
              }`}
            >
              All Subjects
            </button>

            {/* Smart Study Model Exam Pill (Right below / after All Subjects) */}
            <button
              id="subject-pill-model-exam"
              type="button"
              onClick={() => setSelectedSubject('Smart Study Model Exam')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-all cursor-pointer shadow-sm ${
                selectedSubject === 'Smart Study Model Exam'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 ring-2 ring-amber-400/50 scale-[1.02]'
                  : 'bg-gradient-to-r from-amber-500/15 to-indigo-500/15 text-amber-300 hover:bg-amber-500/25 border border-amber-500/30'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Smart Study Model Exam</span>
              <span className="px-1.5 py-0.2 bg-amber-950/70 text-amber-200 text-[10px] rounded-full border border-amber-500/40 font-black">
                MODEL
              </span>
            </button>

            {ALL_SUBJECTS.filter((s) => s !== 'Smart Study Model Exam').map((s) => (
              <button
                key={s}
                id={`subject-pill-${s.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                type="button"
                onClick={() => setSelectedSubject(s)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedSubject === s
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Smart Study Model Exam Simulation Showcase Banner */}
          {selectedSubject === 'Smart Study Model Exam' && (
            <div className="bg-gradient-to-r from-amber-500/15 via-indigo-500/10 to-purple-500/15 border border-amber-500/30 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold text-[11px] border border-amber-500/30 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>SMART STUDY MODEL EXAM</span>
                  </span>
                  <span className="text-xs text-slate-400">2017 E.C. Ethiopian University Entrance Examination (EUEE) Standard</span>
                </div>
                <h3 className="text-base font-bold text-white">Full-Length National Model Examination</h3>
                <p className="text-xs text-slate-300 max-w-xl">
                  Hand-crafted, authentic model exam questions covering Mathematics, Physics, Chemistry, Biology, Economics, English, and Scholastic Aptitude with step-by-step trilingual explanations (English, አማርኛ, Afaan Oromoo).
                </p>
              </div>
              <button
                id="launch-model-exam-timer-btn"
                type="button"
                onClick={() => handleStartExam('Smart Study Model Exam')}
                className="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-md cursor-pointer flex items-center gap-2 shrink-0 transition-transform active:scale-95"
              >
                <Timer className="w-4 h-4 text-slate-950" />
                <span>Take Timed Model Exam</span>
              </button>
            </div>
          )}

          {/* Question Cards */}
          <div className="space-y-4">
            {filteredQuestions.length === 0 ? (
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center text-slate-400">
                <BookOpen className="w-10 h-10 text-slate-600 mx-auto mb-2" />
                <p className="font-semibold text-slate-200">No questions found for the selected filter.</p>
                <p className="text-xs text-slate-500 mt-1">Try switching to "All Subjects" or "All Exam Years".</p>
              </div>
            ) : (
              filteredQuestions.map((q, qIndex) => {
                const isLocked = !isSubscribed && !q.isFreePreview;
                const selectedOpt = userSelectedAnswers[q.id];
                const isAnswered = selectedOpt !== undefined;
                const isCorrect = isAnswered && selectedOpt === q.correctOptionIndex;

                return (
                  <div
                    key={q.id}
                    className={`bg-slate-900 border rounded-2xl p-5 transition-all relative ${
                      isLocked
                        ? 'border-slate-800/60 opacity-90'
                        : isAnswered
                        ? isCorrect
                          ? 'border-emerald-500/40 bg-emerald-950/10'
                          : 'border-rose-500/40 bg-rose-950/10'
                        : 'border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {/* Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="w-6 h-6 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center font-bold text-xs">
                          {qIndex + 1}
                        </span>
                        <span className="text-xs px-2.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-500/30">
                          {q.subject}
                        </span>
                        {q.year && (
                          <span className="text-xs px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                            {q.year}
                          </span>
                        )}
                        <span className="text-xs text-slate-400">{q.topic}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-md font-bold uppercase ${
                            q.difficulty === 'easy'
                              ? 'bg-emerald-500/20 text-emerald-400'
                              : q.difficulty === 'medium'
                              ? 'bg-amber-500/20 text-amber-400'
                              : 'bg-rose-500/20 text-rose-400'
                          }`}
                        >
                          {q.difficulty} • {q.points} pts
                        </span>

                        {q.isFreePreview && (
                          <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-bold border border-sky-500/30">
                            FREE PREVIEW
                          </span>
                        )}
                      </div>
                    </div>

                  {/* Question Text */}
                  <p className="text-sm sm:text-base font-semibold text-white mb-4 leading-relaxed">
                    {q.questionText}
                  </p>

                  {/* Locked Paywall Overlay for Non-Subscribers */}
                  {isLocked ? (
                    <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-center space-y-2">
                      <div className="w-9 h-9 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
                        <Lock className="w-4 h-4" />
                      </div>
                      <p className="text-xs font-semibold text-white">This question is part of the Smart Study Pro Curriculum</p>
                      <p className="text-[11px] text-slate-400">Unlock complete question explanations, video lectures, and notes with a subscription fee.</p>
                      <button
                        onClick={onOpenSubscriptionModal}
                        className="px-4 py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow-md cursor-pointer hover:from-amber-400 hover:to-amber-500"
                      >
                        Unlock Full Access
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Options Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
                        {q.options.map((opt, optIdx) => {
                          const isOptionSelected = selectedOpt === optIdx;
                          const isOptionCorrect = optIdx === q.correctOptionIndex;

                          let optionClass = 'bg-slate-800/70 border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600';
                          if (isAnswered) {
                            if (isOptionCorrect) {
                              optionClass = 'bg-emerald-500/20 border-emerald-500 text-emerald-200 font-semibold';
                            } else if (isOptionSelected && !isOptionCorrect) {
                              optionClass = 'bg-rose-500/20 border-rose-500 text-rose-200 font-semibold';
                            } else {
                              optionClass = 'bg-slate-950/40 border-slate-800/80 text-slate-500';
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={isAnswered}
                              onClick={() => handleSelectOption(q.id, optIdx)}
                              className={`p-3 rounded-xl border text-left text-xs sm:text-sm flex items-start gap-3 transition-all cursor-pointer ${optionClass}`}
                            >
                              <span className="w-6 h-6 rounded-lg bg-slate-900/80 border border-slate-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                                {String.fromCharCode(65 + optIdx)}
                              </span>
                              <span className="flex-1">{opt}</span>
                              {isAnswered && isOptionCorrect && (
                                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                              )}
                              {isAnswered && isOptionSelected && !isOptionCorrect && (
                                <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Action Bar (Hint, AI Explain, Reset) */}
                      <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 flex-wrap gap-2 text-xs">
                        <div className="flex items-center gap-2">
                          {q.hint && (
                            <button
                              onClick={() => handleToggleHint(q.id)}
                              className="text-slate-400 hover:text-amber-400 flex items-center gap-1.5 transition-colors cursor-pointer"
                            >
                              <HelpCircle className="w-3.5 h-3.5" />
                              <span>{showHints[q.id] ? 'Hide Hint' : 'View Hint'}</span>
                            </button>
                          )}

                          <button
                            onClick={() => handleAskAIDeepExplain(q)}
                            disabled={aiExplainingQId === q.id}
                            className="text-violet-400 hover:text-violet-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>{aiExplainingQId === q.id ? 'Explaining...' : 'Ask AI Tutor to Explain'}</span>
                          </button>
                        </div>

                        {isAnswered && (
                          <button
                            onClick={() => {
                              const copy = { ...userSelectedAnswers };
                              delete copy[q.id];
                              setUserSelectedAnswers(copy);
                            }}
                            className="text-slate-400 hover:text-slate-200 flex items-center gap-1 cursor-pointer"
                          >
                            <RotateCcw className="w-3 h-3" />
                            <span>Retry</span>
                          </button>
                        )}
                      </div>

                      {/* Hint Card */}
                      {showHints[q.id] && q.hint && (
                        <div className="mt-3 bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 text-xs text-amber-200">
                          <strong className="text-amber-300">💡 Hint:</strong> {q.hint}
                        </div>
                      )}

                      {/* Standard Explanation */}
                      {isAnswered && q.explanation && (
                        <div className="mt-3">
                          <TrilingualExplanation explanation={q.explanation} subject={q.subject} />
                        </div>
                      )}

                      {/* AI Deep Breakdown */}
                      {aiDeepExplanations[q.id] && (
                        <div className="mt-3 bg-violet-950/30 border border-violet-500/40 rounded-xl p-3.5 text-xs text-violet-200 space-y-1.5">
                          <p className="font-bold text-violet-300 flex items-center gap-1.5 border-b border-violet-500/20 pb-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                            <span>Gemini AI Tutor Explanation:</span>
                          </p>
                          <div className="whitespace-pre-line leading-relaxed text-slate-200 text-xs sm:text-[13px] pt-1">
                            {cleanTutorText(aiDeepExplanations[q.id])}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            }))}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* TIMED EXAM MODE */}
      {/* ------------------------------------------------------------- */}
      {viewMode === 'exam' && examQuestions.length > 0 && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6">
          {/* Exam Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300">
                {examSubject} Mock Exam
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                Question {currentExamIdx + 1} of {examQuestions.length}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 text-amber-300 font-mono text-sm font-bold border border-slate-700">
                <Timer className="w-4 h-4 text-amber-400" />
                <span>
                  {Math.floor(examTimeRemaining / 60)}:
                  {String(examTimeRemaining % 60).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>

          {/* Current Question */}
          {examQuestions[currentExamIdx] && (
            <div className="space-y-4">
              <p className="text-base sm:text-lg font-semibold text-white leading-relaxed">
                {examQuestions[currentExamIdx].questionText}
              </p>

              <div className="space-y-2.5">
                {examQuestions[currentExamIdx].options.map((opt, optIdx) => {
                  const currentQId = examQuestions[currentExamIdx].id;
                  const isSelected = examAnswers[currentQId] === optIdx;

                  return (
                    <button
                      key={optIdx}
                      onClick={() =>
                        setExamAnswers((prev) => ({
                          ...prev,
                          [currentQId]: optIdx
                        }))
                      }
                      className={`w-full p-3.5 rounded-2xl border text-left text-sm flex items-center gap-3 transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-600/30 border-indigo-500 text-white font-semibold'
                          : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs ${
                          isSelected
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-900 text-slate-400'
                        }`}
                      >
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Exam Navigation Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <button
              disabled={currentExamIdx === 0}
              onClick={() => setCurrentExamIdx((prev) => Math.max(0, prev - 1))}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-300 text-xs font-semibold rounded-xl"
            >
              Previous Question
            </button>

            {currentExamIdx < examQuestions.length - 1 ? (
              <button
                onClick={() => setCurrentExamIdx((prev) => Math.min(examQuestions.length - 1, prev + 1))}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5"
              >
                <span>Next Question</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmitExam}
                className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-emerald-600/30"
              >
                Submit Exam Answers
              </button>
            )}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* EXAM RESULT REPORT */}
      {/* ------------------------------------------------------------- */}
      {viewMode === 'result' && examScore && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white flex items-center justify-center mx-auto shadow-xl shadow-indigo-500/20">
            <Award className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs uppercase font-extrabold text-indigo-400 tracking-wider">
              Exam Complete
            </span>
            <h3 className="text-3xl font-extrabold text-white mt-1">
              Score: {examScore.percentage}%
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              You answered <strong className="text-emerald-400">{examScore.score}</strong> out of <strong className="text-white">{examScore.total}</strong> questions correctly.
            </p>
          </div>

          {/* Breakdown Review */}
          <div className="space-y-4 text-left max-w-2xl mx-auto">
            <h4 className="text-xs font-bold uppercase text-slate-400">Answer Review & Explanations</h4>
            {examQuestions.map((q, idx) => {
              const studentChoice = examAnswers[q.id];
              const isCorrect = studentChoice === q.correctOptionIndex;

              return (
                <div key={q.id} className="bg-slate-950/60 border border-slate-800 rounded-2xl p-4 text-xs space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                    <span className="font-semibold text-white">Question {idx + 1} ({q.subject})</span>
                    <span
                      className={`font-bold px-2 py-0.5 rounded-md text-[11px] ${
                        isCorrect ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                      }`}
                    >
                      {isCorrect ? 'Correct (+10 pts)' : 'Incorrect (0 pts)'}
                    </span>
                  </div>
                  <p className="text-slate-200 font-medium leading-relaxed">{q.questionText}</p>
                  <div className="bg-slate-900/80 rounded-xl p-2.5 border border-slate-800 space-y-1 text-[11px]">
                    <p className="text-slate-300">
                      Your Choice: <span className={isCorrect ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>{studentChoice !== undefined ? `${String.fromCharCode(65 + studentChoice)}. ${q.options[studentChoice]}` : 'Unanswered'}</span>
                    </p>
                    <p className="text-emerald-400 font-semibold">
                      Correct Answer: {String.fromCharCode(65 + q.correctOptionIndex)}. {q.options[q.correctOptionIndex]}
                    </p>
                  </div>
                  {q.explanation && (
                    <div className="pt-1">
                      <TrilingualExplanation explanation={q.explanation} subject={q.subject} showHeading={false} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={() => handleStartExam()}
              className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Mock Exam</span>
            </button>
            <button
              onClick={() => setViewMode('practice')}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl"
            >
              Back to Practice Bank
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
