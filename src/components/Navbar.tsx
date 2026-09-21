import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Video,
  FileText,
  Bot,
  ShieldAlert,
  Sparkles,
  User as UserIcon,
  Wifi,
  WifiOff,
  Download,
  CreditCard,
  Layers,
  ChevronDown
} from 'lucide-react';
import { User } from '../types';
import { ADMIN_EMAIL } from '../data/initialData';

interface NavbarProps {
  activeTab: 'questions' | 'videos' | 'notes' | 'ai-tutor' | 'admin' | 'subscription' | 'profile';
  setActiveTab: (tab: 'questions' | 'videos' | 'notes' | 'ai-tutor' | 'admin' | 'subscription' | 'profile') => void;
  currentUser: User;
  onOpenAuthModal: () => void;
  onOpenSubscriptionModal: () => void;
  onOpenInstallModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  currentUser,
  onOpenAuthModal,
  onOpenSubscriptionModal,
  onOpenInstallModal
}) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const isAdmin = currentUser.email.toLowerCase() === ADMIN_EMAIL.toLowerCase() || currentUser.role === 'admin';
  const hasActiveSub = currentUser.subscription?.status === 'active';

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2 sm:gap-4">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab(isAdmin ? 'admin' : 'questions')}
              className="flex items-center gap-2.5 text-left group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-md shadow-indigo-600/30 group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-extrabold text-base sm:text-lg text-white tracking-tight">
                    Smart Study
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                    PWA
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-medium hidden sm:block">Tutorial & Practice Portal</p>
              </div>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-950/50 p-1 rounded-xl border border-slate-800">
            <button
              id="nav-questions"
              onClick={() => setActiveTab('questions')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'questions'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Questions</span>
            </button>

            <button
              id="nav-videos"
              onClick={() => setActiveTab('videos')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'videos'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Videos</span>
            </button>

            <button
              id="nav-notes"
              onClick={() => setActiveTab('notes')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'notes'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Notes</span>
            </button>

            <button
              id="nav-ai-tutor"
              onClick={() => setActiveTab('ai-tutor')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'ai-tutor'
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Bot className="w-3.5 h-3.5 text-violet-300" />
              <span>AI Tutor</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </button>

            {/* Admin Dashboard Tab (or Switchable) */}
            <button
              id="nav-admin"
              onClick={() => setActiveTab('admin')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'admin'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : isAdmin
                  ? 'text-amber-400 hover:text-amber-300 hover:bg-amber-500/10 border border-amber-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Admin Panel</span>
              {isAdmin && (
                <span className="text-[9px] bg-amber-400/30 text-amber-200 px-1.5 py-0.2 rounded font-bold">
                  ADMIN
                </span>
              )}
            </button>
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Online / Offline status indicator */}
            <div
              className={`hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium border ${
                isOnline
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                  : 'bg-rose-500/10 text-rose-400 border-rose-500/30'
              }`}
              title={isOnline ? 'Online - Full features active' : 'Offline - PWA cached materials accessible'}
            >
              {isOnline ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
              <span>{isOnline ? 'Online' : 'Offline'}</span>
            </div>

            {/* Install PWA Button with Badge & Questions trigger */}
            <button
              id="header-install-app-btn"
              onClick={onOpenInstallModal}
              className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600/25 hover:bg-indigo-600/40 text-indigo-200 border border-indigo-500/40 transition-all cursor-pointer shadow-xs"
              title="Install App & View Questions"
            >
              <Download className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden sm:inline">Install App</span>
              <span className="sm:hidden">Install</span>
              <span className="text-[9px] bg-indigo-500 text-white font-black px-1 rounded-xs">
                PWA
              </span>
            </button>

            {/* Subscription Button (for Students) */}
            {!isAdmin && (
              <button
                id="header-subscription-btn"
                onClick={onOpenSubscriptionModal}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  hasActiveSub
                    ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/25'
                    : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20 animate-pulse'
                }`}
              >
                <CreditCard className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">
                  {hasActiveSub ? 'Pro Active' : 'Subscribe'}
                </span>
                {!hasActiveSub && (
                  <span className="text-[10px] px-1 rounded bg-slate-950/20 text-slate-900 font-extrabold ml-0.5">
                    FEE
                  </span>
                )}
              </button>
            )}

            {/* User Account / Role Switcher Profile */}
            <button
              id="user-account-btn"
              onClick={onOpenAuthModal}
              className="flex items-center gap-2 p-1 sm:px-2.5 sm:py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 transition-all text-left group"
            >
              <div className="relative">
                <img
                  src={currentUser.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'}
                  alt={currentUser.name}
                  className="w-7 h-7 rounded-lg object-cover border border-slate-600"
                />
                {isAdmin && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full border-2 border-slate-900"></span>
                )}
              </div>
              
              <div className="hidden lg:block">
                <div className="flex items-center gap-1.5">
                  <p className="text-xs font-semibold text-white max-w-[120px] truncate">
                    {currentUser.name}
                  </p>
                  {isAdmin && (
                    <span className="text-[9px] px-1 py-0.2 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40">
                      ADMIN
                    </span>
                  )}
                </div>
                <p className="text-[10px] text-slate-400 truncate max-w-[120px]">
                  {currentUser.email}
                </p>
              </div>

              <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-200 ml-0.5 hidden sm:block" />
            </button>
          </div>
        </div>

        {/* Mobile Sub-Navigation Bar */}
        <div className="flex md:hidden items-center justify-around py-2 border-t border-slate-800/80 text-[11px] font-medium">
          <button
            onClick={() => setActiveTab('questions')}
            className={`flex flex-col items-center gap-1 py-1 px-2 rounded-lg ${
              activeTab === 'questions' ? 'text-indigo-400 font-bold' : 'text-slate-400'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Questions</span>
          </button>
          
          <button
            onClick={() => setActiveTab('videos')}
            className={`flex flex-col items-center gap-1 py-1 px-2 rounded-lg ${
              activeTab === 'videos' ? 'text-indigo-400 font-bold' : 'text-slate-400'
            }`}
          >
            <Video className="w-4 h-4" />
            <span>Videos</span>
          </button>

          <button
            onClick={() => setActiveTab('notes')}
            className={`flex flex-col items-center gap-1 py-1 px-2 rounded-lg ${
              activeTab === 'notes' ? 'text-indigo-400 font-bold' : 'text-slate-400'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Notes</span>
          </button>

          <button
            onClick={() => setActiveTab('ai-tutor')}
            className={`flex flex-col items-center gap-1 py-1 px-2 rounded-lg ${
              activeTab === 'ai-tutor' ? 'text-violet-400 font-bold' : 'text-slate-400'
            }`}
          >
            <Bot className="w-4 h-4" />
            <span>AI Tutor</span>
          </button>

          <button
            onClick={() => setActiveTab('admin')}
            className={`flex flex-col items-center gap-1 py-1 px-2 rounded-lg ${
              activeTab === 'admin' ? 'text-amber-400 font-bold' : isAdmin ? 'text-amber-400/70' : 'text-slate-400'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span>Admin</span>
          </button>
        </div>
      </div>
    </header>
  );
};
