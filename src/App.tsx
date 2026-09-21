import React, { useState, useEffect } from 'react';
import { safeSessionStorage } from './utils/safeStorage';
import { Navbar } from './components/Navbar';
import { PWAInstallBanner } from './components/PWAInstallBanner';
import { AuthModal } from './components/AuthModal';
import { SubscriptionPaywall } from './components/SubscriptionPaywall';
import { InstallAppModal } from './components/InstallAppModal';
import { QuestionsView } from './components/student/QuestionsView';
import { VideosView } from './components/student/VideosView';
import { NotesView } from './components/student/NotesView';
import { AITutorView } from './components/student/AITutorView';

const AdminDashboard = React.lazy(() =>
  import('./components/admin/AdminDashboard').then((m) => ({ default: m.AdminDashboard }))
);
import { User, Question, VideoLesson, StudyNote } from './types';
import { ADMIN_EMAIL, DEMO_STUDENT, ADMIN_USER } from './data/initialData';
import {
  getCurrentUser,
  setCurrentUser,
  getQuestions,
  getVideos,
  getNotes
} from './utils/storage';
import {
  Sparkles,
  BookOpen,
  ShieldCheck,
  CreditCard,
  Layers,
  Video,
  FileText,
  Bot,
  Zap,
  CheckCircle2,
  Lock,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [currentUser, setUserState] = useState<User>(getCurrentUser());
  const [activeTab, setActiveTab] = useState<'questions' | 'videos' | 'notes' | 'ai-tutor' | 'admin' | 'subscription' | 'profile'>('questions');

  // Content state from storage
  const [questions, setQuestions] = useState<Question[]>(getQuestions());
  const [videos, setVideos] = useState<VideoLesson[]>(getVideos());
  const [notes, setNotes] = useState<StudyNote[]>(getNotes());

  // Modal states
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isStandalone, setIsStandalone] = useState(false);

  // AI Tutor context forwarding
  const [aiTutorPrompt, setAiTutorPrompt] = useState<string>('');
  const [aiTutorContext, setAiTutorContext] = useState<string>('');

  const isAdmin = currentUser.email.toLowerCase() === ADMIN_EMAIL.toLowerCase() || currentUser.role === 'admin';
  const isSubscribed = currentUser.subscription?.status === 'active' || isAdmin;

  // Listen for PWA beforeinstallprompt & handle automatic entrance prompt when people enter by link
  useEffect(() => {
    let isRunningStandalone = false;
    try {
      isRunningStandalone =
        (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(display-mode: standalone)')?.matches) ||
        (typeof window !== 'undefined' && (window.navigator as unknown as { standalone?: boolean })?.standalone === true);
    } catch {
      isRunningStandalone = false;
    }
    setIsStandalone(isRunningStandalone);

    const handleBeforeInstall = (e: Event) => {
      try {
        e.preventDefault();
        setDeferredPrompt(e);
      } catch {
        // ignore
      }
    };

    const handleAppInstalled = () => {
      setIsStandalone(true);
      setDeferredPrompt(null);
      setIsInstallModalOpen(false);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('beforeinstallprompt', handleBeforeInstall);
      window.addEventListener('appinstalled', handleAppInstalled);
    }

    // When people enter by this link (e.g. GitHub or web link):
    // Prompt the install app questions dialogue after 1.2s if not already running standalone
    if (!isRunningStandalone) {
      const alreadyPrompted = safeSessionStorage.getItem('smart_study_install_prompt_shown');
      if (!alreadyPrompted) {
        const timer = setTimeout(() => {
          setIsInstallModalOpen(true);
          safeSessionStorage.setItem('smart_study_install_prompt_shown', 'true');
        }, 1200);
        return () => clearTimeout(timer);
      }
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
        window.removeEventListener('appinstalled', handleAppInstalled);
      }
    };
  }, []);

  // Refresh content from storage on tab change or updates
  const refreshContent = () => {
    setQuestions(getQuestions());
    setVideos(getVideos());
    setNotes(getNotes());
    setUserState(getCurrentUser());
  };

  const handleUserChange = (newUser: User) => {
    setUserState(newUser);
    if (newUser.role === 'admin' || newUser.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
      setActiveTab('admin');
    } else {
      setActiveTab('questions');
    }
  };

  const handleSubscriptionSuccess = (updatedUser: User) => {
    setUserState(updatedUser);
    refreshContent();
  };

  const handleAskAITutor = (prompt: string, context?: string) => {
    setAiTutorPrompt(prompt);
    setAiTutorContext(context || '');
    setActiveTab('ai-tutor');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* PWA Install Notification Bar */}
      <PWAInstallBanner
        onOpenInstallModal={() => setIsInstallModalOpen(true)}
        deferredPrompt={deferredPrompt}
      />

      {/* Main Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentUser={currentUser}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        onOpenSubscriptionModal={() => setIsSubscriptionModalOpen(true)}
        onOpenInstallModal={() => setIsInstallModalOpen(true)}
      />

      {/* Hero Welcome / Subscription Ribbon for Students without active sub */}
      {!isAdmin && !isSubscribed && (
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-indigo-700 text-slate-950 px-4 py-2.5 shadow-md">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2 font-bold">
              <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping"></span>
              {currentUser.subscription?.status === 'pending_verification' ? (
                <span>
                  ⏳ Payment Screenshot Uploaded & Submitted! Awaiting Admin verification on CBE / Telebirr.
                </span>
              ) : (
                <span>
                  Membership Fee: <strong className="underline">300 ETB for ONE SEMESTER</strong> (CBE: <span className="font-mono font-black">1000521750255</span> | Telebirr / E-Birr: <span className="font-mono font-black">0953201048</span>)
                </span>
              )}
            </div>
            <button
              onClick={() => setIsSubscriptionModalOpen(true)}
              className="px-3.5 py-1 bg-slate-950 text-amber-300 rounded-lg font-extrabold hover:bg-slate-900 transition-colors shadow-xs shrink-0 cursor-pointer"
            >
              {currentUser.subscription?.status === 'pending_verification' ? 'View Payment Receipt Slip' : 'Pay 300 ETB Fee'}
            </button>
          </div>
        </div>
      )}

      {/* Main App Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Admin Dashboard */}
        {activeTab === 'admin' && (
          <React.Suspense
            fallback={
              <div className="flex items-center justify-center min-h-[50vh]">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                  <span className="text-sm text-slate-400">Loading Admin Dashboard...</span>
                </div>
              </div>
            }
          >
            <AdminDashboard
              currentUser={currentUser}
              onPreviewAsStudent={() => {
                const demo = DEMO_STUDENT;
                setCurrentUser(demo);
                setUserState(demo);
                setActiveTab('questions');
              }}
            />
          </React.Suspense>
        )}

        {/* Questions Tab */}
        {activeTab === 'questions' && (
          <QuestionsView
            questions={questions}
            currentUser={currentUser}
            onOpenSubscriptionModal={() => setIsSubscriptionModalOpen(true)}
            onAskAITutor={handleAskAITutor}
            onOpenInstallModal={() => setIsInstallModalOpen(true)}
          />
        )}

        {/* Videos Tab */}
        {activeTab === 'videos' && (
          <VideosView
            videos={videos}
            currentUser={currentUser}
            onOpenSubscriptionModal={() => setIsSubscriptionModalOpen(true)}
            onAskAITutor={handleAskAITutor}
          />
        )}

        {/* Notes Tab */}
        {activeTab === 'notes' && (
          <NotesView
            notes={notes}
            currentUser={currentUser}
            onOpenSubscriptionModal={() => setIsSubscriptionModalOpen(true)}
            onAskAITutor={handleAskAITutor}
          />
        )}

        {/* AI Tutor Tab */}
        {activeTab === 'ai-tutor' && (
          <AITutorView
            currentUser={currentUser}
            onOpenSubscriptionModal={() => setIsSubscriptionModalOpen(true)}
            initialPrompt={aiTutorPrompt}
            initialContext={aiTutorContext}
          />
        )}
      </main>

      {/* Footer with App Info & Offline PWA badge */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-6 text-slate-400 text-xs mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-[10px]">
              SST
            </div>
            <span className="font-semibold text-slate-200">Smart Study Tutorial PWA</span>
            <span className="text-slate-600">•</span>
            <span>Admin: <strong className="text-indigo-400 font-mono">{ADMIN_EMAIL}</strong></span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <button
              onClick={() => {
                setUserState(ADMIN_USER);
                setCurrentUser(ADMIN_USER);
                setActiveTab('admin');
              }}
              className="text-amber-400/80 hover:text-amber-300 underline"
            >
              Switch to Admin View
            </button>
            <span>•</span>
            <button
              onClick={() => setIsInstallModalOpen(true)}
              className="text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              📲 Install App & Questions
            </button>
            <span>•</span>
            <button
              onClick={() => setIsSubscriptionModalOpen(true)}
              className="text-slate-400 hover:text-slate-200"
            >
              Subscription Plans
            </button>
            <span>•</span>
            <span className="text-emerald-400 font-medium">Offline PWA Ready</span>
          </div>
        </div>
      </footer>

      {/* Auth & Switch Role Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        currentUser={currentUser}
        onUserChange={handleUserChange}
      />

      {/* Subscription Fee Paywall Modal */}
      <SubscriptionPaywall
        isOpen={isSubscriptionModalOpen}
        onClose={() => setIsSubscriptionModalOpen(false)}
        currentUser={currentUser}
        onSubscriptionSuccess={handleSubscriptionSuccess}
        onFreePreviewContinue={() => {
          setIsSubscriptionModalOpen(false);
          setActiveTab('questions');
        }}
      />

      {/* Install PWA & Questions FAQ Modal */}
      <InstallAppModal
        isOpen={isInstallModalOpen}
        onClose={() => setIsInstallModalOpen(false)}
        deferredPrompt={deferredPrompt}
        onInstallSuccess={() => {
          setIsStandalone(true);
          setDeferredPrompt(null);
        }}
      />
    </div>
  );
}
