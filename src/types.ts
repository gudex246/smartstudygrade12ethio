export type UserRole = 'admin' | 'student';

export interface UserSubscription {
  status: 'active' | 'expired' | 'trial' | 'pending_verification' | 'none';
  planId?: string;
  planName?: string;
  activatedAt?: string;
  expiresAt?: string;
  transactionId?: string;
  paymentMethod?: string;
  amountPaid?: number;
  screenshotUrl?: string;
  screenshotName?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  subscription: UserSubscription;
  createdAt: string;
  quizScoreHistory?: QuizAttempt[];
  bookmarkedNoteIds?: string[];
  completedVideoIds?: string[];
}

export interface Question {
  id: string;
  subject: string;
  year?: string;
  topic: string;
  questionText: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  hint?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  isFreePreview?: boolean;
  createdAt: string;
  createdBy?: string;
}

export interface VideoChapter {
  time: number; // in seconds
  title: string;
}

export interface VideoLesson {
  id: string;
  title: string;
  subject: string;
  topic: string;
  language?: 'Amharic' | 'English' | 'Afaan Oromoo' | 'Bilingual' | string;
  videoUrl: string; // YouTube, Vimeo, or direct MP4
  thumbnailUrl?: string;
  duration: string; // e.g. "18:45"
  durationSec: number;
  description: string;
  chapters?: VideoChapter[];
  notesSummary?: string;
  isFreePreview?: boolean;
  orderIndex: number;
  createdAt: string;
}

export interface StudyNote {
  id: string;
  title: string;
  subject: string;
  topic: string;
  summary: string;
  contentMarkdown: string;
  readTimeMinutes: number;
  keyTakeaways: string[];
  tags: string[];
  isFreePreview?: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface QuizAttempt {
  id: string;
  userId: string;
  subject: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  timeSpentSec: number;
  completedAt: string;
  answers: Record<string, number>;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  durationMonths: number;
  billingCycle: string;
  description: string;
  features: string[];
  popular?: boolean;
  badge?: string;
}

export interface PaymentTransaction {
  id: string;
  userId: string;
  userEmail: string;
  userName: string;
  planId: string;
  planName: string;
  amount: number;
  currency: string;
  paymentMethod: string;
  status: 'completed' | 'pending' | 'failed' | 'rejected';
  referenceNo?: string;
  screenshotUrl?: string;
  screenshotName?: string;
  createdAt: string;
}

export interface PromoCode {
  code: string;
  discountPercentage: number;
  description: string;
  expiresAt?: string;
  isActive: boolean;
}

export interface AIChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  subject?: string;
}

