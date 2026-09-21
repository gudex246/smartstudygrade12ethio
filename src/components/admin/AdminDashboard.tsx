import React, { useState, useMemo } from 'react';
import {
  Layers,
  Video,
  FileText,
  Users,
  Plus,
  Trash2,
  Edit,
  Sparkles,
  Search,
  Filter,
  CheckCircle,
  Eye,
  CreditCard,
  DollarSign,
  Tag,
  ShieldCheck,
  TrendingUp,
  BookOpen,
  ArrowUpRight,
  RefreshCw,
  Clock,
  Play,
  Check
} from 'lucide-react';
import {
  Question,
  VideoLesson,
  StudyNote,
  User,
  SubscriptionPlan,
  PromoCode,
  PaymentTransaction
} from '../../types';
import { ALL_SUBJECTS, ADMIN_EMAIL, PAYMENT_ACCOUNTS, AVAILABLE_YEARS } from '../../data/initialData';
import { TrilingualExplanation } from '../common/TrilingualExplanation';
import { ReceiptViewerModal } from '../common/ReceiptViewerModal';
import {
  getQuestions,
  saveQuestions,
  addQuestion,
  updateQuestion,
  deleteQuestion,
  deleteQuestionsBySubject,
  deleteQuestionsByYear,
  clearAllQuestions,
  resetQuestionsToDefault,
  getVideos,
  saveVideos,
  addVideo,
  updateVideo,
  deleteVideo,
  getNotes,
  saveNotes,
  addNote,
  updateNote,
  deleteNote,
  getPlans,
  savePlans,
  updatePlanPrice,
  getPromoCodes,
  addPromoCode,
  savePromoCodes,
  getStudents,
  saveStudents,
  updateStudentSubscription,
  getTransactions,
  approveStudentPayment,
  rejectStudentPayment
} from '../../utils/storage';

interface AdminDashboardProps {
  currentUser: User;
  onPreviewAsStudent: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  currentUser,
  onPreviewAsStudent
}) => {
  const [adminTab, setAdminTab] = useState<'overview' | 'questions' | 'videos' | 'notes' | 'subscriptions'>('overview');

  // State collections
  const [questions, setQuestions] = useState<Question[]>(getQuestions());
  const [videos, setVideos] = useState<VideoLesson[]>(getVideos());
  const [notes, setNotes] = useState<StudyNote[]>(getNotes());
  const [plans, setPlans] = useState<SubscriptionPlan[]>(getPlans());
  const [promoCodes, setPromoCodes] = useState<PromoCode[]>(getPromoCodes());
  const [students, setStudents] = useState<User[]>(getStudents());
  const [transactions, setTransactions] = useState<PaymentTransaction[]>(getTransactions());

  // Search and filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');

  // Modals state
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [editingVideo, setEditingVideo] = useState<VideoLesson | null>(null);

  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState<StudyNote | null>(null);

  const [isAIQuestionModalOpen, setIsAIQuestionModalOpen] = useState(false);
  const [aiSubject, setAiSubject] = useState(ALL_SUBJECTS[0]);
  const [aiTopic, setAiTopic] = useState('');
  const [aiDifficulty, setAiDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [aiCount, setAiCount] = useState(2);
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);

  // Promo code form state
  const [newPromoCode, setNewPromoCode] = useState('');
  const [newPromoDiscount, setNewPromoDiscount] = useState(50);
  const [newPromoDesc, setNewPromoDesc] = useState('');

  const [approvalNotification, setApprovalNotification] = useState<string | null>(null);
  const [inspectingTx, setInspectingTx] = useState<PaymentTransaction | null>(null);

  // Question form state
  const [qForm, setQForm] = useState({
    subject: ALL_SUBJECTS[0],
    year: '2015 E.C.',
    topic: '',
    questionText: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    correctOptionIndex: 0,
    explanation: '',
    hint: '',
    difficulty: 'easy' as 'easy' | 'medium' | 'hard',
    points: 10,
    isFreePreview: false
  });

  // Video form state
  const [vForm, setVForm] = useState({
    title: '',
    subject: ALL_SUBJECTS[0],
    language: 'Amharic',
    topic: '',
    videoUrl: '',
    thumbnailUrl: '',
    duration: '15:00',
    description: '',
    notesSummary: '',
    isFreePreview: false
  });

  // Note form state
  const [nForm, setNForm] = useState({
    title: '',
    subject: ALL_SUBJECTS[0],
    topic: '',
    summary: '',
    readTimeMinutes: 5,
    keyTakeawaysText: '',
    contentMarkdown: '',
    isFreePreview: false
  });

  // -------------------------------------------------------------
  // QUESTION HANDLERS
  // -------------------------------------------------------------

  const handleOpenAddQuestion = () => {
    setEditingQuestion(null);
    setQForm({
      subject: selectedSubject !== 'All' ? selectedSubject : ALL_SUBJECTS[0],
      year: selectedYear !== 'All' ? selectedYear : '2015 E.C.',
      topic: '',
      questionText: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      correctOptionIndex: 0,
      explanation: '',
      hint: '',
      difficulty: 'medium',
      points: 10,
      isFreePreview: false
    });
    setIsQuestionModalOpen(true);
  };

  const handleOpenEditQuestion = (q: Question) => {
    setEditingQuestion(q);
    setQForm({
      subject: q.subject,
      year: q.year || '2015 E.C.',
      topic: q.topic,
      questionText: q.questionText,
      optionA: q.options[0] || '',
      optionB: q.options[1] || '',
      optionC: q.options[2] || '',
      optionD: q.options[3] || '',
      correctOptionIndex: q.correctOptionIndex,
      explanation: q.explanation,
      hint: q.hint || '',
      difficulty: q.difficulty,
      points: q.points,
      isFreePreview: !!q.isFreePreview
    });
    setIsQuestionModalOpen(true);
  };

  const handleSaveQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    const options = [qForm.optionA, qForm.optionB, qForm.optionC, qForm.optionD].filter(Boolean);
    if (options.length < 2) return;

    if (editingQuestion) {
      const updated = updateQuestion(editingQuestion.id, {
        subject: qForm.subject,
        year: qForm.year,
        topic: qForm.topic || 'General Topic',
        questionText: qForm.questionText,
        options,
        correctOptionIndex: qForm.correctOptionIndex,
        explanation: qForm.explanation,
        hint: qForm.hint,
        difficulty: qForm.difficulty,
        points: Number(qForm.points),
        isFreePreview: qForm.isFreePreview
      });
      setQuestions(updated);
    } else {
      const created = addQuestion({
        subject: qForm.subject,
        year: qForm.year,
        topic: qForm.topic || 'General Topic',
        questionText: qForm.questionText,
        options,
        correctOptionIndex: qForm.correctOptionIndex,
        explanation: qForm.explanation,
        hint: qForm.hint,
        difficulty: qForm.difficulty,
        points: Number(qForm.points),
        isFreePreview: qForm.isFreePreview,
        createdBy: ADMIN_EMAIL
      });
      setQuestions([created, ...questions]);
    }
    setIsQuestionModalOpen(false);
  };

  const handleDeleteQuestion = (id: string) => {
    if (window.confirm('Are you sure you want to delete this question?')) {
      const remaining = deleteQuestion(id);
      setQuestions(remaining);
    }
  };

  // Bulk Question Management Handlers (Admin control over question bank)
  const handleResetToDefaultQuestions = () => {
    if (window.confirm('Restore all official default questions (including 100 questions for 2015 E.C. Biology and other subjects)?')) {
      const reset = resetQuestionsToDefault();
      setQuestions(reset);
      setApprovalNotification('✅ Reset question bank to official Ethiopian curriculum and national exam questions.');
      setTimeout(() => setApprovalNotification(null), 4000);
    }
  };

  const handleDeleteCurrentSubjectQuestions = () => {
    if (selectedSubject === 'All') {
      alert('Please select a specific subject first to remove all its questions.');
      return;
    }
    if (window.confirm(`Are you sure you want to delete ALL questions under "${selectedSubject}"?`)) {
      const remaining = deleteQuestionsBySubject(selectedSubject);
      setQuestions(remaining);
      setApprovalNotification(`🗑️ Deleted all questions for ${selectedSubject}.`);
      setTimeout(() => setApprovalNotification(null), 4000);
    }
  };

  const handleDeleteCurrentYearQuestions = () => {
    if (selectedYear === 'All') {
      alert('Please select a specific year first to remove all questions for that year.');
      return;
    }
    if (window.confirm(`Are you sure you want to delete ALL questions for year "${selectedYear}"?`)) {
      const remaining = deleteQuestionsByYear(selectedYear);
      setQuestions(remaining);
      setApprovalNotification(`🗑️ Deleted all questions for year ${selectedYear}.`);
      setTimeout(() => setApprovalNotification(null), 4000);
    }
  };

  const handleClearAllQuestionsList = () => {
    if (window.confirm('⚠️ WARNING: This will delete ALL questions currently in the app. Are you sure?')) {
      clearAllQuestions();
      setQuestions([]);
      setApprovalNotification('🗑️ All questions cleared from database.');
      setTimeout(() => setApprovalNotification(null), 4000);
    }
  };

  // AI Question Generator Handler
  const handleAIGenerateQuestions = async () => {
    setIsGeneratingAI(true);
    try {
      const res = await fetch('/api/ai/generate-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: aiSubject,
          topic: aiTopic || 'Comprehensive Curriculum',
          difficulty: aiDifficulty,
          count: aiCount
        })
      });
      const data = await res.json();
      if (data.questions && Array.isArray(data.questions)) {
        const addedList: Question[] = [];
        for (const genQ of data.questions) {
          const newQ = addQuestion({
            subject: genQ.subject || aiSubject,
            topic: genQ.topic || aiTopic || 'General Topic',
            questionText: genQ.questionText,
            options: genQ.options || ['Option A', 'Option B', 'Option C', 'Option D'],
            correctOptionIndex: genQ.correctOptionIndex || 0,
            explanation: genQ.explanation || 'Step by step derivation provided.',
            hint: genQ.hint || 'Carefully review the core formula.',
            difficulty: genQ.difficulty || aiDifficulty,
            points: genQ.points || 15,
            isFreePreview: false,
            createdBy: ADMIN_EMAIL
          });
          addedList.push(newQ);
        }
        setQuestions([...addedList, ...questions]);
        setIsAIQuestionModalOpen(false);
      }
    } catch (err) {
      console.error('AI question generation error:', err);
    } finally {
      setIsGeneratingAI(false);
    }
  };

  // -------------------------------------------------------------
  // VIDEO HANDLERS
  // -------------------------------------------------------------

  const handleOpenAddVideo = () => {
    setEditingVideo(null);
    setVForm({
      title: '',
      subject: ALL_SUBJECTS[0],
      language: 'Amharic',
      topic: '',
      videoUrl: 'https://www.youtube.com/watch?v=kqtD5dpn9C8',
      thumbnailUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80',
      duration: '15:00',
      description: '',
      notesSummary: '',
      isFreePreview: false
    });
    setIsVideoModalOpen(true);
  };

  const handleOpenEditVideo = (v: VideoLesson) => {
    setEditingVideo(v);
    setVForm({
      title: v.title,
      subject: v.subject,
      language: v.language || 'English',
      topic: v.topic,
      videoUrl: v.videoUrl,
      thumbnailUrl: v.thumbnailUrl || '',
      duration: v.duration,
      description: v.description,
      notesSummary: v.notesSummary || '',
      isFreePreview: !!v.isFreePreview
    });
    setIsVideoModalOpen(true);
  };

  const handleSaveVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vForm.title.trim() || !vForm.videoUrl.trim()) return;

    if (editingVideo) {
      const updated = updateVideo(editingVideo.id, {
        title: vForm.title,
        subject: vForm.subject,
        language: vForm.language,
        topic: vForm.topic,
        videoUrl: vForm.videoUrl,
        thumbnailUrl: vForm.thumbnailUrl,
        duration: vForm.duration,
        description: vForm.description,
        notesSummary: vForm.notesSummary,
        isFreePreview: vForm.isFreePreview
      });
      setVideos(updated);
    } else {
      const created = addVideo({
        title: vForm.title,
        subject: vForm.subject,
        language: vForm.language,
        topic: vForm.topic,
        videoUrl: vForm.videoUrl,
        thumbnailUrl: vForm.thumbnailUrl,
        duration: vForm.duration,
        durationSec: 900,
        description: vForm.description,
        notesSummary: vForm.notesSummary,
        isFreePreview: vForm.isFreePreview,
        orderIndex: videos.length + 1
      });
      setVideos([created, ...videos]);
    }
    setIsVideoModalOpen(false);
  };

  const handleDeleteVideo = (id: string) => {
    if (window.confirm('Delete this video lecture?')) {
      const rem = deleteVideo(id);
      setVideos(rem);
    }
  };

  // -------------------------------------------------------------
  // NOTES HANDLERS
  // -------------------------------------------------------------

  const handleOpenAddNote = () => {
    setEditingNote(null);
    setNForm({
      title: '',
      subject: ALL_SUBJECTS[0],
      topic: '',
      summary: '',
      readTimeMinutes: 5,
      keyTakeawaysText: 'Key formula 1\nHigh priority exam trap\nDefinition summary',
      contentMarkdown: `# Title\n\n## 1. Overview\nWrite tutorial study note content here in clean Markdown.`,
      isFreePreview: false
    });
    setIsNoteModalOpen(true);
  };

  const handleOpenEditNote = (n: StudyNote) => {
    setEditingNote(n);
    setNForm({
      title: n.title,
      subject: n.subject,
      topic: n.topic,
      summary: n.summary,
      readTimeMinutes: n.readTimeMinutes,
      keyTakeawaysText: n.keyTakeaways.join('\n'),
      contentMarkdown: n.contentMarkdown,
      isFreePreview: !!n.isFreePreview
    });
    setIsNoteModalOpen(true);
  };

  const handleSaveNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nForm.title.trim() || !nForm.contentMarkdown.trim()) return;

    const takeaways = nForm.keyTakeawaysText
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);

    if (editingNote) {
      const updated = updateNote(editingNote.id, {
        title: nForm.title,
        subject: nForm.subject,
        topic: nForm.topic,
        summary: nForm.summary,
        readTimeMinutes: Number(nForm.readTimeMinutes),
        keyTakeaways: takeaways,
        contentMarkdown: nForm.contentMarkdown,
        isFreePreview: nForm.isFreePreview
      });
      setNotes(updated);
    } else {
      const created = addNote({
        title: nForm.title,
        subject: nForm.subject,
        topic: nForm.topic,
        summary: nForm.summary,
        readTimeMinutes: Number(nForm.readTimeMinutes),
        keyTakeaways: takeaways,
        tags: [nForm.subject, nForm.topic],
        contentMarkdown: nForm.contentMarkdown,
        isFreePreview: nForm.isFreePreview
      });
      setNotes([created, ...notes]);
    }
    setIsNoteModalOpen(false);
  };

  const handleDeleteNote = (id: string) => {
    if (window.confirm('Delete this study note?')) {
      const rem = deleteNote(id);
      setNotes(rem);
    }
  };

  // AI Note Summarizer
  const handleAISummarizeNote = async () => {
    if (!nForm.contentMarkdown.trim()) return;
    try {
      const res = await fetch('/api/ai/summarize-note', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: nForm.title || 'Untitled Study Guide',
          subject: nForm.subject,
          contentMarkdown: nForm.contentMarkdown
        })
      });
      const data = await res.json();
      if (data.summary) {
        setNForm((prev) => ({
          ...prev,
          summary: data.summary,
          keyTakeawaysText: (data.keyTakeaways || []).join('\n'),
          readTimeMinutes: data.estimatedReadTimeMinutes || prev.readTimeMinutes
        }));
      }
    } catch (e) {
      console.error('Failed to summarize note with AI', e);
    }
  };

  // -------------------------------------------------------------
  // SUBSCRIPTION & PRICING HANDLERS
  // -------------------------------------------------------------
  const handleUpdatePrice = (planId: string, currentPrice: number) => {
    const input = prompt(`Enter new subscription fee price for this plan:`, currentPrice.toString());
    if (input !== null) {
      const num = parseFloat(input);
      if (!isNaN(num) && num >= 0) {
        const updated = updatePlanPrice(planId, num);
        setPlans(updated);
      }
    }
  };

  const handleCreatePromoCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPromoCode.trim()) return;
    const codeObj: PromoCode = {
      code: newPromoCode.trim().toUpperCase(),
      discountPercentage: Number(newPromoDiscount),
      description: newPromoDesc || `${newPromoDiscount}% Discount Pass`,
      isActive: true
    };
    const updated = addPromoCode(codeObj);
    setPromoCodes([...updated]);
    setNewPromoCode('');
    setNewPromoDesc('');
  };

  const handleTogglePromoStatus = (code: string) => {
    const updated = promoCodes.map((p) => (p.code === code ? { ...p, isActive: !p.isActive } : p));
    savePromoCodes(updated);
    setPromoCodes(updated);
  };

  const handleToggleStudentAccess = (studentId: string, currentStatus: string) => {
    const newStatus = currentStatus === 'active' ? 'expired' : 'active';
    const sub = {
      status: newStatus as any,
      planName: newStatus === 'active' ? 'Admin Manual Grant Pass' : undefined,
      activatedAt: new Date().toISOString().split('T')[0],
      expiresAt: '2027-01-01'
    };
    updateStudentSubscription(studentId, sub);
    setStudents(getStudents());
  };

  const handleApprovePayment = (txId: string) => {
    const res = approveStudentPayment(txId);
    if (res.success) {
      setTransactions(getTransactions());
      setStudents(getStudents());
      setApprovalNotification(`✅ Verified! Approved ${res.tx?.userName}'s transfer of ${res.tx?.currency}${res.tx?.amount}. One Semester Full Pass activated.`);
      setTimeout(() => setApprovalNotification(null), 5000);
    }
  };

  const handleRejectPayment = (txId: string) => {
    const res = rejectStudentPayment(txId);
    if (res.success) {
      setTransactions(getTransactions());
      setStudents(getStudents());
      setApprovalNotification(`⚠️ Transfer reference rejected.`);
      setTimeout(() => setApprovalNotification(null), 4000);
    }
  };

  // Filtered queries
  const filteredQuestions = useMemo(() => {
    const list = questions.filter((q) => {
      const matchesSub =
        selectedSubject === 'All' ||
        q.subject === selectedSubject ||
        (selectedSubject === 'Smart Study Model Exam' && (
          q.subject === 'Smart Study Model Exam' ||
          (q.year && q.year.toLowerCase().includes('model'))
        ));
      const matchesYear =
        selectedYear === 'All' ||
        q.year === selectedYear ||
        (!q.year && selectedYear === 'General Practice') ||
        (selectedYear === '2017 E.C. Model Exam' && (q.year?.toLowerCase().includes('model') || q.subject === 'Smart Study Model Exam'));
      const matchesSearch =
        q.questionText.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (q.year && q.year.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (q.subject && q.subject.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesSub && matchesYear && matchesSearch;
    });

    const parseQuestionNum = (q: Question) => {
      const match = q.questionText.match(/^(\d+)\./);
      if (match) return parseInt(match[1], 10);
      const idMatch = q.id.match(/-q0*(\d+)$/);
      if (idMatch) return parseInt(idMatch[1], 10);
      return 9999;
    };

    return [...list].sort((a, b) => {
      if (a.subject === b.subject && a.year === b.year) {
        const numA = parseQuestionNum(a);
        const numB = parseQuestionNum(b);
        if (numA !== numB) return numA - numB;
      }
      return 0;
    });
  }, [questions, selectedSubject, selectedYear, searchQuery]);

  const filteredVideos = videos.filter((v) => {
    const matchesSub = selectedSubject === 'All' || v.subject === selectedSubject;
    const matchesSearch =
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.topic.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSub && matchesSearch;
  });

  const filteredNotes = notes.filter((n) => {
    const matchesSub = selectedSubject === 'All' || n.subject === selectedSubject;
    const matchesSearch =
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.topic.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSub && matchesSearch;
  });

  // Calculate stats
  const totalRevenue = transactions.reduce((sum, t) => sum + (t.status === 'completed' ? t.amount : 0), 0);
  const activeSubsCount = students.filter((s) => s.subscription?.status === 'active').length;
  const pendingTransactions = transactions.filter((t) => t.status === 'pending');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Toast Notification */}
      {approvalNotification && (
        <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm font-semibold flex items-center justify-between shadow-lg animate-fade-in">
          <span>{approvalNotification}</span>
          <button
            onClick={() => setApprovalNotification(null)}
            className="text-emerald-400 hover:text-white ml-3"
          >
            ✕
          </button>
        </div>
      )}

      {/* Admin Top Banner */}
      <div className="bg-gradient-to-r from-amber-500/15 via-indigo-900/40 to-slate-900 border border-amber-500/30 rounded-3xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center shadow-lg shadow-amber-500/10 shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold font-display text-white">Smart Study Admin Portal</h1>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 font-extrabold uppercase">
                  Super Admin
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Admin Email: <strong className="text-amber-300 font-mono">{ADMIN_EMAIL}</strong> • Full control over curriculum, questions, videos, notes & subscription fees.
              </p>
            </div>
          </div>

          {/* Quick Preview As Student Switcher */}
          <div className="flex items-center gap-3">
            <button
              onClick={onPreviewAsStudent}
              className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl flex items-center gap-2 shadow-md shadow-indigo-600/30 transition-all cursor-pointer"
              title="See what students see"
            >
              <Eye className="w-4 h-4" />
              <span>Preview Student Experience</span>
            </button>
          </div>
        </div>
      </div>

      {/* Admin Tab Navigation */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2 overflow-x-auto">
        <button
          onClick={() => setAdminTab('overview')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            adminTab === 'overview'
              ? 'bg-amber-500 text-slate-950 font-bold'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>Overview & Revenue</span>
        </button>

        <button
          id="admin-tab-questions"
          onClick={() => setAdminTab('questions')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            adminTab === 'questions'
              ? 'bg-indigo-600 text-white'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Questions ({questions.length})</span>
        </button>

        <button
          id="admin-tab-videos"
          onClick={() => setAdminTab('videos')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            adminTab === 'videos'
              ? 'bg-indigo-600 text-white'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <Video className="w-4 h-4" />
          <span>Video Lectures ({videos.length})</span>
        </button>

        <button
          id="admin-tab-notes"
          onClick={() => setAdminTab('notes')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            adminTab === 'notes'
              ? 'bg-indigo-600 text-white'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Study Notes ({notes.length})</span>
        </button>

        <button
          id="admin-tab-subscriptions"
          onClick={() => setAdminTab('subscriptions')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            adminTab === 'subscriptions'
              ? 'bg-indigo-600 text-white'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <CreditCard className="w-4 h-4" />
          <span>Fee Plans & Students ({students.length})</span>
          {pendingTransactions.length > 0 && (
            <span className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-500 text-slate-950 animate-pulse">
              {pendingTransactions.length} Pending
            </span>
          )}
        </button>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 1. OVERVIEW TAB */}
      {/* ------------------------------------------------------------- */}
      {adminTab === 'overview' && (
        <div className="space-y-6">
          {/* Key Metrics Bento */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                <span>Total Questions</span>
                <Layers className="w-4 h-4 text-indigo-400" />
              </div>
              <p className="text-2xl font-bold text-white">{questions.length}</p>
              <p className="text-[11px] text-slate-500 mt-1">Across 7 core subjects</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                <span>Video Lessons</span>
                <Video className="w-4 h-4 text-violet-400" />
              </div>
              <p className="text-2xl font-bold text-white">{videos.length}</p>
              <p className="text-[11px] text-slate-500 mt-1">HD Tutorial streaming</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                <span>Study Notes</span>
                <FileText className="w-4 h-4 text-sky-400" />
              </div>
              <p className="text-2xl font-bold text-white">{notes.length}</p>
              <p className="text-[11px] text-slate-500 mt-1">Revision cheat sheets</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                <span>Active Subscriptions</span>
                <Users className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-2xl font-bold text-emerald-400">{activeSubsCount}</p>
              <p className="text-[11px] text-slate-500 mt-1">Total revenue: ${totalRevenue.toFixed(2)}</p>
            </div>
          </div>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              onClick={handleOpenAddQuestion}
              className="bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 rounded-2xl p-5 cursor-pointer transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Plus className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-white mb-1">Add New Question</h3>
              <p className="text-xs text-slate-400">Create multiple choice tutorial questions with hints & explanations.</p>
            </div>

            <div
              onClick={() => setIsAIQuestionModalOpen(true)}
              className="bg-gradient-to-br from-violet-950/40 to-slate-900 border border-violet-500/30 rounded-2xl p-5 cursor-pointer hover:border-violet-500/60 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-600/20 text-violet-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-white mb-1">AI Question Generator</h3>
              <p className="text-xs text-slate-400">Auto-generate multiple exam-ready questions using Gemini AI.</p>
            </div>

            <div
              onClick={handleOpenAddVideo}
              className="bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 rounded-2xl p-5 cursor-pointer transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-600/20 text-sky-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-white mb-1">Publish Video Lecture</h3>
              <p className="text-xs text-slate-400">Embed YouTube/video links with chapter timestamps and notes.</p>
            </div>
          </div>

          {/* Recent Transactions Table */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <h3 className="font-bold text-base text-white mb-3">Recent Student Subscription Payments</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="py-2.5 px-3">Student</th>
                    <th className="py-2.5 px-3">Plan</th>
                    <th className="py-2.5 px-3">Amount</th>
                    <th className="py-2.5 px-3">Method</th>
                    <th className="py-2.5 px-3">Payment Receipt</th>
                    <th className="py-2.5 px-3">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {transactions.slice(0, 5).map((t) => (
                    <tr key={t.id} className="hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-medium text-white">{t.userName} <span className="text-slate-400 block text-[10px]">{t.userEmail}</span></td>
                      <td className="py-2.5 px-3 text-indigo-300">{t.planName}</td>
                      <td className="py-2.5 px-3 font-bold text-emerald-400">{t.currency}{t.amount}</td>
                      <td className="py-2.5 px-3 text-slate-400">{t.paymentMethod}</td>
                      <td className="py-2.5 px-3">
                        {t.screenshotUrl ? (
                          <button
                            type="button"
                            onClick={() => setInspectingTx(t)}
                            className="inline-flex items-center gap-1.5 px-2 py-1 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer"
                          >
                            <Eye className="w-3 h-3 text-amber-400" />
                            <span>View Screenshot</span>
                          </button>
                        ) : (
                          <span className="font-mono text-slate-500 text-[11px]">{t.referenceNo || 'Legacy'}</span>
                        )}
                      </td>
                      <td className="py-2.5 px-3 text-slate-400">{t.createdAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 2. QUESTIONS TAB */}
      {/* ------------------------------------------------------------- */}
      {adminTab === 'questions' && (
        <div className="space-y-4">
          <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2 flex-1">
                <div className="relative flex-1 min-w-[200px] max-w-xs">
                  <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search questions, topics, years..."
                    className="w-full pl-9 pr-3 py-1.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                {/* Subject Selector */}
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="bg-slate-800 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-1.5 focus:outline-none focus:border-indigo-500"
                >
                  <option value="All">All Subjects</option>
                  <option value="Smart Study Model Exam" className="text-amber-400 font-bold bg-slate-900">
                    ⭐ Smart Study Model Exam
                  </option>
                  {ALL_SUBJECTS.filter((s) => s !== 'Smart Study Model Exam').map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>

                {/* Year Selector */}
                <select
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

              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={() => setIsAIQuestionModalOpen(true)}
                  className="px-3 py-1.5 bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 border border-violet-500/40 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI Generate</span>
                </button>

                <button
                  id="admin-add-question-btn"
                  onClick={handleOpenAddQuestion}
                  className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Question</span>
                </button>
              </div>
            </div>

            {/* Quick Bulk Management Strip */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/80 text-xs">
              <div className="text-slate-400 flex items-center gap-2">
                <span>Showing <strong className="text-white">{filteredQuestions.length}</strong> of <strong className="text-slate-200">{questions.length}</strong> total questions</span>
                {selectedSubject !== 'All' && (
                  <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-semibold text-[11px]">
                    {selectedSubject}
                  </span>
                )}
                {selectedYear !== 'All' && (
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold text-[11px]">
                    {selectedYear}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleResetToDefaultQuestions}
                  title="Reload all official Ethiopian curriculum & 2015 E.C. Biology questions"
                  className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg text-[11px] font-medium transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3 text-indigo-400" />
                  <span>Reset / Reload Official Bank (100+ Qs)</span>
                </button>

                {selectedSubject !== 'All' && (
                  <button
                    onClick={handleDeleteCurrentSubjectQuestions}
                    className="px-2.5 py-1 bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 border border-rose-800/50 rounded-lg text-[11px] font-medium transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Delete All {selectedSubject} Qs</span>
                  </button>
                )}

                {selectedYear !== 'All' && (
                  <button
                    onClick={handleDeleteCurrentYearQuestions}
                    className="px-2.5 py-1 bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 border border-rose-800/50 rounded-lg text-[11px] font-medium transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Delete All {selectedYear} Qs</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Questions List */}
          <div className="space-y-3">
            {filteredQuestions.length === 0 ? (
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center text-slate-400">
                <BookOpen className="w-10 h-10 text-slate-600 mx-auto mb-2" />
                <p className="font-semibold text-slate-200">No questions found matching your filter criteria.</p>
                <p className="text-xs text-slate-500 mt-1">Try selecting "All Subjects" or click "Reset / Reload Official Bank" to load the complete 2015 E.C. Biology question bank.</p>
              </div>
            ) : (
              filteredQuestions.map((q, idx) => (
                <div
                  key={q.id}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-4 hover:border-slate-700 transition-all space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-500/30">
                        {q.subject}
                      </span>
                      {q.year && (
                        <span className="text-xs px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                          {q.year}
                        </span>
                      )}
                      <span className="text-xs px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
                        {q.topic}
                      </span>
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
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-sky-500/20 text-sky-300 font-bold border border-sky-500/30">
                          FREE PREVIEW
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => handleOpenEditQuestion(q)}
                        className="p-1.5 text-slate-400 hover:text-indigo-400 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                        title="Edit question"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteQuestion(q.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                        title="Delete question"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-white whitespace-pre-line">{q.questionText}</p>

                  {/* Options List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {q.options.map((opt, optIdx) => {
                      const isCorrect = optIdx === q.correctOptionIndex;
                      return (
                        <div
                          key={optIdx}
                          className={`px-3 py-2 rounded-xl text-xs flex items-center gap-2 border ${
                            isCorrect
                              ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300 font-semibold'
                              : 'bg-slate-950/40 border-slate-800 text-slate-400'
                          }`}
                        >
                          <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-300 shrink-0">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span className="flex-1">{opt}</span>
                          {isCorrect && <CheckCircle className="w-3.5 h-3.5 text-emerald-400 ml-auto shrink-0" />}
                        </div>
                      );
                    })}
                  </div>

                  {q.explanation && (
                    <div className="pt-1">
                      <TrilingualExplanation explanation={q.explanation} showHeading={true} />
                    </div>
                  )}

                  {q.hint && (
                    <div className="bg-slate-950/30 rounded-xl px-2.5 py-1.5 border border-slate-800/60 text-[11px] text-slate-400">
                      <strong className="text-amber-400">Student Hint:</strong> {q.hint}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 3. VIDEOS TAB */}
      {/* ------------------------------------------------------------- */}
      {adminTab === 'videos' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900 p-4 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-2 flex-1">
              <div className="relative flex-1 max-w-xs">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search video lectures..."
                  className="w-full pl-9 pr-3 py-1.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none"
                />
              </div>

              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="bg-slate-800 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-1.5 focus:outline-none"
              >
                <option value="All">All Subjects</option>
                {ALL_SUBJECTS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <button
              id="admin-add-video-btn"
              onClick={handleOpenAddVideo}
              className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Video Lecture</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredVideos.map((v) => (
              <div
                key={v.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-video bg-slate-950 overflow-hidden group">
                    <img
                      src={v.thumbnailUrl || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80'}
                      alt={v.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-indigo-600/90 text-white flex items-center justify-center shadow-lg">
                        <Play className="w-5 h-5 ml-0.5 fill-white" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-white">
                      {v.duration}
                    </span>
                    {v.isFreePreview && (
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-sky-500 text-slate-950 text-[10px] font-extrabold uppercase">
                        Free Preview
                      </span>
                    )}
                  </div>

                  <div className="p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 font-semibold">
                        {v.subject}
                      </span>
                      <span className="text-[10px] text-slate-400">{v.topic}</span>
                    </div>

                    <h3 className="font-bold text-sm text-white line-clamp-1">{v.title}</h3>
                    <p className="text-xs text-slate-400 line-clamp-2">{v.description}</p>
                  </div>
                </div>

                <div className="p-4 pt-0 flex items-center justify-between border-t border-slate-800/80 mt-2">
                  <span className="text-[11px] text-slate-500 font-mono truncate max-w-[200px]">
                    {v.videoUrl}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleOpenEditVideo(v)}
                      className="p-1.5 text-slate-400 hover:text-indigo-400 rounded-lg hover:bg-slate-800"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteVideo(v.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-400 rounded-lg hover:bg-slate-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 4. NOTES TAB */}
      {/* ------------------------------------------------------------- */}
      {adminTab === 'notes' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900 p-4 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-2 flex-1">
              <div className="relative flex-1 max-w-xs">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search study notes..."
                  className="w-full pl-9 pr-3 py-1.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none"
                />
              </div>

              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="bg-slate-800 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-1.5 focus:outline-none"
              >
                <option value="All">All Subjects</option>
                {ALL_SUBJECTS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <button
              id="admin-add-note-btn"
              onClick={handleOpenAddNote}
              className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Study Note</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredNotes.map((n) => (
              <div
                key={n.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 font-semibold">
                        {n.subject}
                      </span>
                      <span className="text-xs text-slate-400">{n.topic}</span>
                    </div>

                    {n.isFreePreview && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-bold border border-sky-500/30">
                        FREE PREVIEW
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-base text-white">{n.title}</h3>
                  <p className="text-xs text-slate-400 line-clamp-2">{n.summary}</p>

                  <div className="space-y-1 bg-slate-950/40 p-3 rounded-xl border border-slate-800/80">
                    <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Key Takeaways:</p>
                    {n.keyTakeaways.slice(0, 3).map((t, idx) => (
                      <p key={idx} className="text-xs text-slate-300 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                        <span className="truncate">{t}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800 mt-4">
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{n.readTimeMinutes} min read</span>
                  </span>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleOpenEditNote(n)}
                      className="p-1.5 text-slate-400 hover:text-indigo-400 rounded-lg hover:bg-slate-800"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteNote(n.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-400 rounded-lg hover:bg-slate-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 5. SUBSCRIPTIONS & STUDENT MANAGEMENT TAB */}
      {/* ------------------------------------------------------------- */}
      {adminTab === 'subscriptions' && (
        <div className="space-y-6">
          
          {/* Active Payment Receiving Accounts Banner */}
          <div className="bg-gradient-to-r from-amber-500/10 via-indigo-500/10 to-slate-900 border border-amber-500/30 rounded-2xl p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div>
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">Active Payment Destination</span>
                <h3 className="font-bold text-base text-white">Student Membership Fee Receiving Accounts</h3>
                <p className="text-xs text-slate-300">
                  Standard Student Rate: <strong className="text-amber-300">300 ETB for ONE SEMESTER</strong> (Account Holder: {PAYMENT_ACCOUNTS.accountHolder})
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                  Receiving Payments Active
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800">
              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-purple-400">CBE Bank Account</span>
                  <p className="font-mono text-base font-bold text-white">{PAYMENT_ACCOUNTS.cbeAccount}</p>
                  <p className="text-[10px] text-slate-400">Commercial Bank of Ethiopia</p>
                </div>
              </div>

              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-400">Telebirr & E-Birr Number</span>
                  <p className="font-mono text-base font-bold text-emerald-300">{PAYMENT_ACCOUNTS.telebirrPhone}</p>
                  <p className="text-[10px] text-slate-400">Ethio Telecom Telebirr / E-Birr</p>
                </div>
              </div>
            </div>
          </div>

          {/* PENDING APPROVALS QUEUE (Admin Verification Section) */}
          <div className="bg-slate-900 border-2 border-amber-500/40 rounded-2xl p-5 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-base text-white">Pending Student Payment Verifications</h3>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-500 text-slate-950">
                      {pendingTransactions.length} Pending
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Review student CBE / Telebirr transfer references, verify against your account, and approve semester access
                  </p>
                </div>
              </div>
            </div>

            {pendingTransactions.length === 0 ? (
              <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-6 text-center text-slate-400 text-xs">
                <ShieldCheck className="w-8 h-8 text-emerald-400 mx-auto mb-2 opacity-80" />
                <p className="font-semibold text-slate-200">No Pending Student Payments</p>
                <p className="text-slate-500 text-[11px] mt-0.5">All student transfers have been reviewed and verified.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {pendingTransactions.map((tx) => (
                  <div
                    key={tx.id}
                    className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-white">{tx.userName}</span>
                        <span className="text-xs text-slate-400">({tx.userEmail})</span>
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-amber-500/20 text-amber-400 border border-amber-500/30 uppercase">
                          Awaiting Admin Approval
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300">
                        <span>Plan: <strong className="text-indigo-300">{tx.planName}</strong></span>
                        <span>Amount: <strong className="text-emerald-400 font-bold">{tx.currency || 'ETB '}{tx.amount}</strong></span>
                        <span>Via: <strong className="text-slate-200">{tx.paymentMethod}</strong></span>
                        <span>Submitted: <strong className="text-slate-400">{tx.createdAt}</strong></span>
                      </div>

                      {tx.screenshotUrl ? (
                        <div className="pt-2 flex flex-wrap items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setInspectingTx(tx)}
                            className="flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-indigo-500/20 hover:from-amber-500/30 hover:to-indigo-500/30 text-amber-300 border border-amber-500/40 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer group shadow-sm"
                          >
                            <div className="w-6 h-6 rounded overflow-hidden bg-slate-900 border border-slate-700 shrink-0">
                              <img
                                src={tx.screenshotUrl}
                                alt="Receipt slip"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <Eye className="w-3.5 h-3.5 text-amber-400" />
                            <span>Inspect Payment Screenshot</span>
                          </button>
                          <span className="text-[11px] text-slate-400">
                            {tx.screenshotName || 'Screenshot attached by student'}
                          </span>
                        </div>
                      ) : (
                        <div className="pt-1 flex items-center gap-2">
                          <span className="text-[11px] text-slate-500">
                            No screenshot attached (Ref: <span className="font-mono text-slate-400">{tx.referenceNo}</span>)
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleRejectPayment(tx.id)}
                        className="px-3 py-2 bg-slate-800 hover:bg-rose-900/30 text-rose-300 hover:text-rose-200 border border-slate-700 hover:border-rose-700/50 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                      >
                        Reject Transfer
                      </button>

                      <button
                        onClick={() => handleApprovePayment(tx.id)}
                        className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-emerald-600/20 flex items-center gap-1.5 transition-all cursor-pointer"
                      >
                        <Check className="w-4 h-4" />
                        <span>Verify & Grant Access</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Subscription Fee Pricing Manager */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-base text-white">Student Subscription Fee Plans</h3>
                <p className="text-xs text-slate-400">Set and edit the access fees charged to new students</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {plans.map((p) => (
                <div key={p.id} className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-sm text-white">{p.name}</h4>
                      {p.badge && (
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 font-bold">
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-1 my-2">
                      <span className="text-2xl font-extrabold text-white">{p.currency}{p.price}</span>
                      <span className="text-xs text-slate-400">/ {p.billingCycle}</span>
                    </div>
                    <p className="text-xs text-slate-400 mb-3">{p.description}</p>
                  </div>

                  <button
                    onClick={() => handleUpdatePrice(p.id, p.price)}
                    className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Edit Price ({p.currency}{p.price})
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Promo Codes & Scholarship Coupons */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <h3 className="font-bold text-base text-white mb-2">Discount & Scholarship Promo Codes</h3>
            <p className="text-xs text-slate-400 mb-4">Create coupons for students to reduce or waive tutorial subscription fee.</p>

            <form onSubmit={handleCreatePromoCode} className="grid grid-cols-1 sm:grid-cols-4 gap-2 mb-4">
              <input
                type="text"
                required
                value={newPromoCode}
                onChange={(e) => setNewPromoCode(e.target.value)}
                placeholder="Code (e.g. VIP100)"
                className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white uppercase font-mono"
              />
              <input
                type="number"
                min="1"
                max="100"
                required
                value={newPromoDiscount}
                onChange={(e) => setNewPromoDiscount(Number(e.target.value))}
                placeholder="Discount % (e.g. 50)"
                className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
              />
              <input
                type="text"
                value={newPromoDesc}
                onChange={(e) => setNewPromoDesc(e.target.value)}
                placeholder="Description / note"
                className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
              />
              <button
                type="submit"
                className="py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Code</span>
              </button>
            </form>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {promoCodes.map((c) => (
                <div key={c.code} className="bg-slate-950/40 border border-slate-800 rounded-xl p-3 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-sm text-indigo-400">{c.code}</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                        {c.discountPercentage}% OFF
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">{c.description}</p>
                  </div>
                  <button
                    onClick={() => handleTogglePromoStatus(c.code)}
                    className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-colors ${
                      c.isActive
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-slate-800 text-slate-500'
                    }`}
                  >
                    {c.isActive ? 'Active' : 'Disabled'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Students Access Control Table */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <h3 className="font-bold text-base text-white mb-1">Registered Students & Access Roster</h3>
            <p className="text-xs text-slate-400 mb-4">View enrolled students, subscription dates, or grant manual access.</p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="py-2.5 px-3">Student Name</th>
                    <th className="py-2.5 px-3">Email</th>
                    <th className="py-2.5 px-3">Subscription Status</th>
                    <th className="py-2.5 px-3">Plan Details</th>
                    <th className="py-2.5 px-3">Expires At</th>
                    <th className="py-2.5 px-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {students.map((s) => {
                    const isSubscribed = s.subscription?.status === 'active';
                    return (
                      <tr key={s.id} className="hover:bg-slate-800/40">
                        <td className="py-2.5 px-3 font-semibold text-white">{s.name}</td>
                        <td className="py-2.5 px-3 font-mono text-slate-300">{s.email}</td>
                        <td className="py-2.5 px-3">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${
                              isSubscribed
                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                : 'bg-slate-800 text-slate-400 border border-slate-700'
                            }`}
                          >
                            {isSubscribed ? 'Active Pro' : 'No Sub'}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-slate-400">{s.subscription?.planName || 'None'}</td>
                        <td className="py-2.5 px-3 text-slate-400">{s.subscription?.expiresAt || 'N/A'}</td>
                        <td className="py-2.5 px-3 text-right">
                          <button
                            onClick={() => handleToggleStudentAccess(s.id, s.subscription?.status || 'none')}
                            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                              isSubscribed
                                ? 'bg-rose-500/20 text-rose-300 hover:bg-rose-500/30'
                                : 'bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30'
                            }`}
                          >
                            {isSubscribed ? 'Revoke Access' : 'Grant Pro Pass'}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Student Payment & Transfer Receipts Log */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-bold text-base text-white">Student Payment Receipts & Verification</h3>
                <p className="text-xs text-slate-400">All student CBE & Telebirr transfer submissions</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                {transactions.length} Recorded Payments
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="py-2 px-3">Date</th>
                    <th className="py-2 px-3">Student Name</th>
                    <th className="py-2 px-3">Plan</th>
                    <th className="py-2 px-3">Amount</th>
                    <th className="py-2 px-3">Payment Channel</th>
                    <th className="py-2 px-3">Payment Screenshot</th>
                    <th className="py-2 px-3 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono">
                  {transactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 text-slate-400 text-[11px]">{tx.createdAt}</td>
                      <td className="py-2.5 px-3 font-sans font-semibold text-white">{tx.userName}</td>
                      <td className="py-2.5 px-3 font-sans text-indigo-300">{tx.planName}</td>
                      <td className="py-2.5 px-3 text-emerald-400 font-bold font-sans">
                        {tx.currency || 'ETB '}{tx.amount}
                      </td>
                      <td className="py-2.5 px-3 font-sans text-slate-300">{tx.paymentMethod}</td>
                      <td className="py-2.5 px-3 font-sans">
                        {tx.screenshotUrl ? (
                          <button
                            type="button"
                            onClick={() => setInspectingTx(tx)}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer"
                          >
                            <Eye className="w-3 h-3 text-amber-400" />
                            <span>View Screenshot</span>
                          </button>
                        ) : (
                          <span className="text-slate-500 font-mono text-[11px]">{tx.referenceNo || 'None'}</span>
                        )}
                      </td>
                      <td className="py-2.5 px-3 text-right">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-sans font-bold uppercase ${
                          tx.status === 'completed'
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : tx.status === 'pending'
                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                            : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                        }`}>
                          {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODAL: ADD / EDIT QUESTION */}
      {/* ------------------------------------------------------------- */}
      {isQuestionModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs overflow-y-auto">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 text-slate-100 shadow-2xl relative my-auto">
            <h3 className="text-lg font-bold text-white mb-4">
              {editingQuestion ? 'Edit Question' : 'Add Tutorial Practice Question'}
            </h3>

            <form onSubmit={handleSaveQuestion} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Subject</label>
                  <select
                    value={qForm.subject}
                    onChange={(e) => setQForm({ ...qForm, subject: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
                  >
                    {ALL_SUBJECTS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Exam Year</label>
                  <select
                    value={qForm.year}
                    onChange={(e) => setQForm({ ...qForm, year: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-amber-300 font-semibold"
                  >
                    {AVAILABLE_YEARS.map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Topic / Chapter</label>
                  <input
                    type="text"
                    required
                    value={qForm.topic}
                    onChange={(e) => setQForm({ ...qForm, topic: e.target.value })}
                    placeholder="e.g. Genetics, Human Biology"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Question Problem Statement</label>
                <textarea
                  required
                  rows={3}
                  value={qForm.questionText}
                  onChange={(e) => setQForm({ ...qForm, questionText: e.target.value })}
                  placeholder="Enter the problem statement clearly..."
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* 4 Multiple Choice Options */}
              <div className="space-y-2">
                <label className="block text-xs font-medium text-slate-300">Answer Options & Correct Key</label>
                
                {[
                  { key: 'optionA', label: 'Option A', idx: 0 },
                  { key: 'optionB', label: 'Option B', idx: 1 },
                  { key: 'optionC', label: 'Option C', idx: 2 },
                  { key: 'optionD', label: 'Option D', idx: 3 }
                ].map(({ key, label, idx }) => (
                  <div key={key} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="correctOption"
                      checked={qForm.correctOptionIndex === idx}
                      onChange={() => setQForm({ ...qForm, correctOptionIndex: idx })}
                      className="w-4 h-4 text-indigo-600 bg-slate-800 border-slate-700 focus:ring-0 cursor-pointer"
                    />
                    <span className="text-xs font-bold text-slate-400 w-16">{label}:</span>
                    <input
                      type="text"
                      required
                      value={(qForm as any)[key]}
                      onChange={(e) => setQForm({ ...qForm, [key]: e.target.value })}
                      placeholder={`Text for ${label}...`}
                      className="flex-1 px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
                    />
                  </div>
                ))}
                <p className="text-[11px] text-slate-400">Select the radio button next to the correct answer.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Step-by-Step Explanation</label>
                  <textarea
                    rows={2}
                    value={qForm.explanation}
                    onChange={(e) => setQForm({ ...qForm, explanation: e.target.value })}
                    placeholder="Explain why the answer is correct..."
                    className="w-full px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Student Hint (Optional)</label>
                  <textarea
                    rows={2}
                    value={qForm.hint}
                    onChange={(e) => setQForm({ ...qForm, hint: e.target.value })}
                    placeholder="Short guiding hint for practice mode..."
                    className="w-full px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300">
                    <input
                      type="checkbox"
                      checked={qForm.isFreePreview}
                      onChange={(e) => setQForm({ ...qForm, isFreePreview: e.target.checked })}
                      className="rounded bg-slate-800 border-slate-700 text-indigo-600"
                    />
                    <span>Free Trial Preview Question</span>
                  </label>

                  <select
                    value={qForm.difficulty}
                    onChange={(e) => setQForm({ ...qForm, difficulty: e.target.value as any })}
                    className="bg-slate-800 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-1"
                  >
                    <option value="easy">Easy (10 pts)</option>
                    <option value="medium">Medium (15 pts)</option>
                    <option value="hard">Hard (20 pts)</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsQuestionModalOpen(false)}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition-colors shadow-sm"
                  >
                    {editingQuestion ? 'Update Question' : 'Save Question'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODAL: AI QUESTION GENERATOR */}
      {/* ------------------------------------------------------------- */}
      {isAIQuestionModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs">
          <div className="bg-slate-900 border border-violet-500/40 rounded-2xl max-w-md w-full p-6 text-slate-100 shadow-2xl relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">AI Question Generator</h3>
                <p className="text-xs text-slate-400">Generate exam questions automatically with Gemini</p>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Subject</label>
                <select
                  value={aiSubject}
                  onChange={(e) => setAiSubject(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
                >
                  {ALL_SUBJECTS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Specific Topic or Concept</label>
                <input
                  type="text"
                  value={aiTopic}
                  onChange={(e) => setAiTopic(e.target.value)}
                  placeholder="e.g. Integration by Parts, Ohm's Law, Algorithms"
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Difficulty</label>
                  <select
                    value={aiDifficulty}
                    onChange={(e) => setAiDifficulty(e.target.value as any)}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Number of Questions</label>
                  <select
                    value={aiCount}
                    onChange={(e) => setAiCount(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
                  >
                    <option value={1}>1 Question</option>
                    <option value={2}>2 Questions</option>
                    <option value={3}>3 Questions</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setIsAIQuestionModalOpen(false)}
                  disabled={isGeneratingAI}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleAIGenerateQuestions}
                  disabled={isGeneratingAI}
                  className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-semibold rounded-xl flex items-center gap-2 shadow-md shadow-violet-600/30 cursor-pointer disabled:opacity-50"
                >
                  {isGeneratingAI ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Generating with Gemini...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Generate Now</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODAL: ADD / EDIT VIDEO */}
      {/* ------------------------------------------------------------- */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs overflow-y-auto">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-xl w-full p-6 text-slate-100 shadow-2xl relative my-auto">
            <h3 className="text-lg font-bold text-white mb-4">
              {editingVideo ? 'Edit Video Lecture' : 'Add New Video Lecture'}
            </h3>

            <form onSubmit={handleSaveVideo} className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Lecture Title</label>
                <input
                  type="text"
                  required
                  value={vForm.title}
                  onChange={(e) => setVForm({ ...vForm, title: e.target.value })}
                  placeholder="e.g. Calculus Fundamentals & Derivative Applications"
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Subject</label>
                  <select
                    value={vForm.subject}
                    onChange={(e) => setVForm({ ...vForm, subject: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
                  >
                    {ALL_SUBJECTS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Language</label>
                  <select
                    value={vForm.language}
                    onChange={(e) => setVForm({ ...vForm, language: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-amber-300 font-semibold"
                  >
                    <option value="Amharic">🇪🇹 Amharic (አማርኛ)</option>
                    <option value="English">🇬🇧 English</option>
                    <option value="Bilingual">Bilingual</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Topic</label>
                  <input
                    type="text"
                    value={vForm.topic}
                    onChange={(e) => setVForm({ ...vForm, topic: e.target.value })}
                    placeholder="e.g. Organic Chemistry"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Video URL (YouTube embed or MP4)</label>
                <input
                  type="url"
                  required
                  value={vForm.videoUrl}
                  onChange={(e) => setVForm({ ...vForm, videoUrl: e.target.value })}
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Thumbnail Image URL</label>
                  <input
                    type="url"
                    value={vForm.thumbnailUrl}
                    onChange={(e) => setVForm({ ...vForm, thumbnailUrl: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Duration</label>
                  <input
                    type="text"
                    value={vForm.duration}
                    onChange={(e) => setVForm({ ...vForm, duration: e.target.value })}
                    placeholder="e.g. 18:45"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Description & Outline</label>
                <textarea
                  rows={2}
                  value={vForm.description}
                  onChange={(e) => setVForm({ ...vForm, description: e.target.value })}
                  placeholder="Summary of what this lecture teaches..."
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300">
                  <input
                    type="checkbox"
                    checked={vForm.isFreePreview}
                    onChange={(e) => setVForm({ ...vForm, isFreePreview: e.target.checked })}
                    className="rounded bg-slate-800 border-slate-700 text-indigo-600"
                  />
                  <span>Free Preview Video (Non-subscribers can watch)</span>
                </label>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsVideoModalOpen(false)}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl"
                  >
                    Save Video
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODAL: ADD / EDIT NOTE */}
      {/* ------------------------------------------------------------- */}
      {isNoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs overflow-y-auto">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full p-6 text-slate-100 shadow-2xl relative my-auto max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold text-white mb-4">
              {editingNote ? 'Edit Study Note' : 'Create Tutorial Study Note'}
            </h3>

            <form onSubmit={handleSaveNote} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-slate-300 mb-1">Note Title</label>
                  <input
                    type="text"
                    required
                    value={nForm.title}
                    onChange={(e) => setNForm({ ...nForm, title: e.target.value })}
                    placeholder="e.g. Complete Calculus Formula Sheet"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Subject</label>
                  <select
                    value={nForm.subject}
                    onChange={(e) => setNForm({ ...nForm, subject: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
                  >
                    {ALL_SUBJECTS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-medium text-slate-300">Markdown Content</label>
                  <button
                    type="button"
                    onClick={handleAISummarizeNote}
                    className="text-[11px] text-violet-400 hover:text-violet-300 flex items-center gap-1 cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>AI Generate Summary & Takeaways</span>
                  </button>
                </div>
                <textarea
                  required
                  rows={8}
                  value={nForm.contentMarkdown}
                  onChange={(e) => setNForm({ ...nForm, contentMarkdown: e.target.value })}
                  placeholder="# Enter Markdown here..."
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-200 font-mono focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Executive Summary</label>
                  <textarea
                    rows={3}
                    value={nForm.summary}
                    onChange={(e) => setNForm({ ...nForm, summary: e.target.value })}
                    placeholder="Quick 2-sentence summary for revision..."
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Key Takeaways (1 per line)</label>
                  <textarea
                    rows={3}
                    value={nForm.keyTakeawaysText}
                    onChange={(e) => setNForm({ ...nForm, keyTakeawaysText: e.target.value })}
                    placeholder="Key formula 1&#10;Key rule 2"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white font-mono"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300">
                  <input
                    type="checkbox"
                    checked={nForm.isFreePreview}
                    onChange={(e) => setNForm({ ...nForm, isFreePreview: e.target.checked })}
                    className="rounded bg-slate-800 border-slate-700 text-indigo-600"
                  />
                  <span>Free Preview Note</span>
                </label>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsNoteModalOpen(false)}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl"
                  >
                    Save Note
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Admin Payment Screenshot Lightbox Modal */}
      {inspectingTx && (
        <ReceiptViewerModal
          isOpen={Boolean(inspectingTx)}
          onClose={() => setInspectingTx(null)}
          imageUrl={inspectingTx.screenshotUrl || ''}
          title="Student Payment Screenshot Slip"
          studentName={inspectingTx.userName}
          studentEmail={inspectingTx.userEmail}
          amount={inspectingTx.amount}
          currency={inspectingTx.currency || 'ETB '}
          paymentMethod={inspectingTx.paymentMethod}
          date={inspectingTx.createdAt}
          isPending={inspectingTx.status === 'pending'}
          onApprove={() => handleApprovePayment(inspectingTx.id)}
          onReject={() => handleRejectPayment(inspectingTx.id)}
        />
      )}
    </div>
  );
};
