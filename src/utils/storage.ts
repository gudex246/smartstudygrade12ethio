import {
  Question,
  VideoLesson,
  StudyNote,
  SubscriptionPlan,
  User,
  PaymentTransaction,
  PromoCode,
  QuizAttempt,
  AIChatMessage
} from '../types';
import {
  INITIAL_ADMIN_USER,
  INITIAL_STUDENT_USER,
  INITIAL_PLANS,
  INITIAL_PROMO_CODES,
  INITIAL_QUESTIONS,
  INITIAL_VIDEOS,
  INITIAL_NOTES,
  INITIAL_TRANSACTIONS,
  ADMIN_EMAIL
} from '../data/initialData';

const KEYS = {
  CURRENT_USER: 'sst_current_user',
  QUESTIONS: 'sst_questions',
  VIDEOS: 'sst_videos',
  NOTES: 'sst_notes',
  PLANS: 'sst_plans',
  PROMO_CODES: 'sst_promo_codes',
  TRANSACTIONS: 'sst_transactions',
  STUDENTS: 'sst_students',
  QUIZ_ATTEMPTS: 'sst_quiz_attempts',
  OFFLINE_SAVED: 'sst_offline_saved'
};

function getStorage<T>(key: string, defaultValue: T): T {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return defaultValue;
    }
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (e) {
    console.warn(`Error reading ${key} from storage:`, e);
    return defaultValue;
  }
}

function setStorage<T>(key: string, value: T): void {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return;
    }
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn(`Storage quota exceeded or restricted for ${key}:`, e);
  }
}

// Current User management
export function getCurrentUser(): User {
  const user = getStorage<User | null>(KEYS.CURRENT_USER, null);
  if (!user) {
    // Default to admin user for owner or allow switching
    setStorage(KEYS.CURRENT_USER, INITIAL_ADMIN_USER);
    return INITIAL_ADMIN_USER;
  }
  // Check if current user is admin email to ensure admin privileges
  if (user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
    user.role = 'admin';
  }
  return user;
}

export function setCurrentUser(user: User): void {
  if (user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
    user.role = 'admin';
    user.subscription = {
      status: 'active',
      planName: 'Super Admin Lifetime Pass',
      activatedAt: '2025-01-01',
      expiresAt: '2099-12-31'
    };
  }
  setStorage(KEYS.CURRENT_USER, user);
}

// Questions
export function getQuestions(): Question[] {
  const stored = getStorage<Question[] | null>(KEYS.QUESTIONS, null);
  if (!stored || stored.length === 0) {
    return INITIAL_QUESTIONS;
  }
  // Normalize any legacy subject names and strip unwanted asterisks from explanations
  let hasChanges = false;
  const initialMap = new Map(INITIAL_QUESTIONS.map(q => [q.id, q]));

  // Filter out removed legacy question IDs (q-3, q-4, and old 2017 math placeholders)
  const nonDeleted = stored.filter(q => q.id !== 'q-3' && q.id !== 'q-4' && q.id !== 'math-2017-q1' && q.id !== 'math-2017-q2');
  if (nonDeleted.length !== stored.length) {
    hasChanges = true;
  }

  const normalized = nonDeleted.map((q) => {
    let updated = q;
    const initialMatch = initialMap.get(q.id);
    if (initialMatch) {
      // Keep question up to date with initial data attributes (year, subject, formatting)
      if (
        updated.year !== initialMatch.year ||
        updated.subject !== initialMatch.subject ||
        updated.explanation !== initialMatch.explanation ||
        updated.questionText !== initialMatch.questionText
      ) {
        updated = {
          ...updated,
          subject: initialMatch.subject,
          year: initialMatch.year,
          questionText: initialMatch.questionText,
          options: initialMatch.options,
          explanation: initialMatch.explanation,
          hint: initialMatch.hint
        };
        hasChanges = true;
      }
    }
    if (updated.subject === 'Computer Science') {
      hasChanges = true;
      updated = { ...updated, subject: 'Aptitude' };
    }
    if (updated.subject === 'English & Aptitude') {
      hasChanges = true;
      updated = { ...updated, subject: 'English' };
    }
    // Clean asterisks if present in explanation
    if (updated.explanation && (updated.explanation.includes('**') || updated.explanation.includes('***'))) {
      hasChanges = true;
      const cleanExp = updated.explanation
        .replace(/🇬🇧 \*\*English:\*\*/g, '🇬🇧 English:')
        .replace(/🇪🇹 \*\*አማርኛ \(Amharic\):\*\*/g, '🇪🇹 አማርኛ (Amharic):')
        .replace(/🌳 \*\*Afaan Oromoo:\*\*/g, '🌳 Afaan Oromoo:')
        .replace(/\*\*\*/g, '')
        .replace(/\*\*/g, '');
      updated = { ...updated, explanation: cleanExp };
    }
    return updated;
  });

  // If stored exists from earlier session, merge missing initial questions
  const existingIds = new Set(normalized.map((q) => q.id));
  const missingInitial = INITIAL_QUESTIONS.filter((q) => !existingIds.has(q.id));
  let combined = normalized;
  if (missingInitial.length > 0) {
    combined = [...normalized, ...missingInitial];
    hasChanges = true;
  }

  // Ensure physics questions are present
  const physicsCount = combined.filter((q) => q.subject === 'Physics').length;
  if (physicsCount === 0) {
    const physicsQuestions = INITIAL_QUESTIONS.filter((q) => q.subject === 'Physics');
    if (physicsQuestions.length > 0) {
      combined = [...combined, ...physicsQuestions];
      hasChanges = true;
    }
  }

  // Canonical ordering based on INITIAL_QUESTIONS sequence, with custom questions placed at the end
  const initialIndexMap = new Map<string, number>();
  INITIAL_QUESTIONS.forEach((q, idx) => {
    initialIndexMap.set(q.id, idx);
  });

  const sorted = [...combined].sort((a, b) => {
    const idxA = initialIndexMap.has(a.id) ? initialIndexMap.get(a.id)! : 999999;
    const idxB = initialIndexMap.has(b.id) ? initialIndexMap.get(b.id)! : 999999;
    if (idxA !== idxB) return idxA - idxB;
    return 0;
  });

  if (stored.length !== sorted.length || sorted.some((q, i) => q.id !== stored[i]?.id)) {
    hasChanges = true;
  }

  if (hasChanges) {
    setStorage(KEYS.QUESTIONS, sorted);
    return sorted;
  }
  return sorted;
}

export function saveQuestions(questions: Question[]): void {
  setStorage(KEYS.QUESTIONS, questions);
}

export function addQuestion(question: Omit<Question, 'id' | 'createdAt'>): Question {
  const questions = getQuestions();
  const newQuestion: Question = {
    ...question,
    id: 'q-' + Date.now(),
    createdAt: new Date().toISOString().split('T')[0]
  };
  questions.unshift(newQuestion);
  saveQuestions(questions);
  return newQuestion;
}

export function updateQuestion(id: string, updates: Partial<Question>): Question[] {
  const questions = getQuestions();
  const updated = questions.map((q) => (q.id === id ? { ...q, ...updates } : q));
  saveQuestions(updated);
  return updated;
}

export function deleteQuestion(id: string): Question[] {
  const questions = getQuestions();
  const filtered = questions.filter((q) => q.id !== id);
  saveQuestions(filtered);
  return filtered;
}

export function deleteQuestionsBySubject(subject: string): Question[] {
  const questions = getQuestions();
  const filtered = questions.filter((q) => q.subject !== subject);
  saveQuestions(filtered);
  return filtered;
}

export function deleteQuestionsByYear(year: string): Question[] {
  const questions = getQuestions();
  const filtered = questions.filter((q) => q.year !== year);
  saveQuestions(filtered);
  return filtered;
}

export function clearAllQuestions(): Question[] {
  saveQuestions([]);
  return [];
}

export function resetQuestionsToDefault(): Question[] {
  saveQuestions(INITIAL_QUESTIONS);
  return INITIAL_QUESTIONS;
}

// Videos
export function getVideos(): VideoLesson[] {
  const stored = getStorage<VideoLesson[] | null>(KEYS.VIDEOS, null);
  if (!stored || stored.length === 0) {
    return INITIAL_VIDEOS;
  }
  const initialMap = new Map(INITIAL_VIDEOS.map((v) => [v.id, v]));
  const existingIds = new Set(stored.map((v) => v.id));
  const missingInitial = INITIAL_VIDEOS.filter((v) => !existingIds.has(v.id));

  let hasChanges = false;
  let updated = stored.map((v) => {
    let item = v;
    const init = initialMap.get(v.id);
    if (init) {
      if (
        item.title !== init.title ||
        item.language !== init.language ||
        item.videoUrl !== init.videoUrl ||
        item.topic !== init.topic ||
        item.description !== init.description
      ) {
        item = { ...item, ...init };
        hasChanges = true;
      }
    }
    if (item.subject === 'Computer Science') {
      hasChanges = true;
      item = { ...item, subject: 'Aptitude' };
    }
    if (item.subject === 'English & Aptitude') {
      hasChanges = true;
      item = { ...item, subject: 'English' };
    }
    return item;
  });

  if (missingInitial.length > 0) {
    updated = [...updated, ...missingInitial];
    hasChanges = true;
  }

  if (hasChanges) {
    setStorage(KEYS.VIDEOS, updated);
  }
  return updated;
}

export function saveVideos(videos: VideoLesson[]): void {
  setStorage(KEYS.VIDEOS, videos);
}

export function addVideo(video: Omit<VideoLesson, 'id' | 'createdAt'>): VideoLesson {
  const videos = getVideos();
  const newVideo: VideoLesson = {
    ...video,
    id: 'vid-' + Date.now(),
    createdAt: new Date().toISOString().split('T')[0]
  };
  videos.push(newVideo);
  saveVideos(videos);
  return newVideo;
}

export function updateVideo(id: string, updates: Partial<VideoLesson>): VideoLesson[] {
  const videos = getVideos();
  const updated = videos.map((v) => (v.id === id ? { ...v, ...updates } : v));
  saveVideos(updated);
  return updated;
}

export function deleteVideo(id: string): VideoLesson[] {
  const videos = getVideos();
  const filtered = videos.filter((v) => v.id !== id);
  saveVideos(filtered);
  return filtered;
}

// Notes
export function getNotes(): StudyNote[] {
  const stored = getStorage<StudyNote[] | null>(KEYS.NOTES, null);
  if (!stored || stored.length === 0) {
    return INITIAL_NOTES;
  }
  const initialMap = new Map(INITIAL_NOTES.map((n) => [n.id, n]));
  const existingIds = new Set(stored.map((n) => n.id));
  const missingInitial = INITIAL_NOTES.filter((n) => !existingIds.has(n.id));

  let updated = stored.map((n) => {
    // If it is an initial note, sync its latest content
    if (initialMap.has(n.id)) {
      const fresh = initialMap.get(n.id)!;
      return { ...n, ...fresh };
    }
    if (n.subject === 'Computer Science') {
      return { ...n, subject: 'Aptitude' };
    }
    if (n.subject === 'English & Aptitude') {
      return { ...n, subject: 'English' };
    }
    return n;
  });

  if (missingInitial.length > 0) {
    updated = [...updated, ...missingInitial];
  }

  setStorage(KEYS.NOTES, updated);
  return updated;
}

export function saveNotes(notes: StudyNote[]): void {
  setStorage(KEYS.NOTES, notes);
}

export function addNote(note: Omit<StudyNote, 'id' | 'createdAt'>): StudyNote {
  const notes = getNotes();
  const newNote: StudyNote = {
    ...note,
    id: 'note-' + Date.now(),
    createdAt: new Date().toISOString().split('T')[0]
  };
  notes.unshift(newNote);
  saveNotes(notes);
  return newNote;
}

export function updateNote(id: string, updates: Partial<StudyNote>): StudyNote[] {
  const notes = getNotes();
  const updated = notes.map((n) => (n.id === id ? { ...n, ...updates, updatedAt: new Date().toISOString().split('T')[0] } : n));
  saveNotes(updated);
  return updated;
}

export function deleteNote(id: string): StudyNote[] {
  const notes = getNotes();
  const filtered = notes.filter((n) => n.id !== id);
  saveNotes(filtered);
  return filtered;
}

// Plans
export function getPlans(): SubscriptionPlan[] {
  return getStorage<SubscriptionPlan[]>(KEYS.PLANS, INITIAL_PLANS);
}

export function savePlans(plans: SubscriptionPlan[]): void {
  setStorage(KEYS.PLANS, plans);
}

export function updatePlanPrice(id: string, newPrice: number): SubscriptionPlan[] {
  const plans = getPlans();
  const updated = plans.map(p => p.id === id ? { ...p, price: newPrice } : p);
  savePlans(updated);
  return updated;
}

// Promo codes
export function getPromoCodes(): PromoCode[] {
  return getStorage<PromoCode[]>(KEYS.PROMO_CODES, INITIAL_PROMO_CODES);
}

export function savePromoCodes(codes: PromoCode[]): void {
  setStorage(KEYS.PROMO_CODES, codes);
}

export function addPromoCode(code: PromoCode): PromoCode[] {
  const codes = getPromoCodes();
  codes.unshift(code);
  savePromoCodes(codes);
  return codes;
}

// Transactions
export function getTransactions(): PaymentTransaction[] {
  return getStorage<PaymentTransaction[]>(KEYS.TRANSACTIONS, INITIAL_TRANSACTIONS);
}

export function saveTransactions(txs: PaymentTransaction[]): void {
  setStorage(KEYS.TRANSACTIONS, txs);
}

export function addTransaction(tx: Omit<PaymentTransaction, 'id' | 'createdAt'>): PaymentTransaction {
  const txs = getTransactions();
  const newTx: PaymentTransaction = {
    ...tx,
    id: 'tx-' + Date.now(),
    createdAt: new Date().toISOString().split('T')[0]
  };
  txs.unshift(newTx);
  saveTransactions(txs);
  return newTx;
}

export function updateTransactionStatus(
  id: string,
  status: 'completed' | 'pending' | 'failed' | 'rejected'
): PaymentTransaction[] {
  const txs = getTransactions();
  const updated = txs.map((t) => (t.id === id ? { ...t, status } : t));
  saveTransactions(updated);
  return updated;
}

export function approveStudentPayment(txId: string): { success: boolean; tx?: PaymentTransaction } {
  const txs = getTransactions();
  const tx = txs.find((t) => t.id === txId);
  if (!tx) return { success: false };

  tx.status = 'completed';
  saveTransactions(txs);

  // Activate student subscription
  const expireDate = new Date();
  expireDate.setMonth(expireDate.getMonth() + 4); // 1 semester / 4 months

  const activeSub: User['subscription'] = {
    status: 'active',
    planId: tx.planId,
    planName: tx.planName,
    amountPaid: tx.amount,
    paymentMethod: tx.paymentMethod,
    transactionId: tx.referenceNo,
    screenshotUrl: tx.screenshotUrl,
    screenshotName: tx.screenshotName,
    activatedAt: new Date().toISOString().split('T')[0],
    expiresAt: expireDate.toISOString().split('T')[0]
  };

  updateStudentSubscription(tx.userId, activeSub);

  // If current logged-in user matches, update current user too
  const current = getCurrentUser();
  if (current.id === tx.userId || current.email.toLowerCase() === tx.userEmail.toLowerCase()) {
    setCurrentUser({
      ...current,
      subscription: activeSub
    });
  }

  return { success: true, tx };
}

export function rejectStudentPayment(txId: string): { success: boolean; tx?: PaymentTransaction } {
  const txs = getTransactions();
  const tx = txs.find((t) => t.id === txId);
  if (!tx) return { success: false };

  tx.status = 'rejected';
  saveTransactions(txs);

  // Set student subscription to none or expired
  const rejectedSub: User['subscription'] = {
    status: 'none'
  };

  updateStudentSubscription(tx.userId, rejectedSub);

  const current = getCurrentUser();
  if (current.id === tx.userId || current.email.toLowerCase() === tx.userEmail.toLowerCase()) {
    setCurrentUser({
      ...current,
      subscription: rejectedSub
    });
  }

  return { success: true, tx };
}

// Students
export function getStudents(): User[] {
  const defaultStudents: User[] = [
    INITIAL_STUDENT_USER,
    {
      id: 'student-2',
      email: 'alex.tadesse@example.com',
      name: 'Alex Tadesse',
      role: 'student',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      subscription: {
        status: 'active',
        planName: 'Annual VIP Mastery',
        activatedAt: '2026-08-12',
        expiresAt: '2027-08-12'
      },
      createdAt: '2026-08-12'
    },
    {
      id: 'student-3',
      email: 'marcus.vance@school.org',
      name: 'Marcus Vance',
      role: 'student',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      subscription: {
        status: 'active',
        planName: 'Monthly Pro Pass',
        activatedAt: '2026-08-14',
        expiresAt: '2026-09-14'
      },
      createdAt: '2026-08-14'
    }
  ];
  return getStorage<User[]>(KEYS.STUDENTS, defaultStudents);
}

export function saveStudents(students: User[]): void {
  setStorage(KEYS.STUDENTS, students);
}

export function updateStudentSubscription(
  userId: string,
  subscription: User['subscription']
): void {
  const students = getStudents();
  const updated = students.map((s) => (s.id === userId ? { ...s, subscription } : s));
  saveStudents(updated);
}

// Quiz attempts
export function getQuizAttempts(userId?: string): QuizAttempt[] {
  const attempts = getStorage<QuizAttempt[]>(KEYS.QUIZ_ATTEMPTS, []);
  if (userId) {
    return attempts.filter(a => a.userId === userId);
  }
  return attempts;
}

export function saveQuizAttempt(attempt: Omit<QuizAttempt, 'id' | 'completedAt'>): QuizAttempt {
  const attempts = getStorage<QuizAttempt[]>(KEYS.QUIZ_ATTEMPTS, []);
  const newAttempt: QuizAttempt = {
    ...attempt,
    id: 'attempt-' + Date.now(),
    completedAt: new Date().toISOString()
  };
  attempts.unshift(newAttempt);
  setStorage(KEYS.QUIZ_ATTEMPTS, attempts);
  return newAttempt;
}

// AI Chat History
const CHAT_KEY = 'sst_ai_chat_history';

export function getChatHistory(): AIChatMessage[] {
  return getStorage<AIChatMessage[]>(CHAT_KEY, []);
}

export function saveChatMessage(msg: AIChatMessage): AIChatMessage[] {
  const history = getChatHistory();
  history.push(msg);
  // Keep last 30 messages
  const trimmed = history.slice(-30);
  setStorage(CHAT_KEY, trimmed);
  return trimmed;
}

export function clearChatHistory(): void {
  setStorage(CHAT_KEY, []);
}

