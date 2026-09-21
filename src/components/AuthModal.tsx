import React, { useState } from 'react';
import { X, ShieldCheck, GraduationCap, User as UserIcon, Check, ArrowRight, Sparkles } from 'lucide-react';
import { User } from '../types';
import { ADMIN_EMAIL, INITIAL_ADMIN_USER, INITIAL_STUDENT_USER } from '../data/initialData';
import { setCurrentUser, getStudents, saveStudents } from '../utils/storage';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: User;
  onUserChange: (user: User) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onUserChange
}) => {
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [roleSelection, setRoleSelection] = useState<'student' | 'admin'>('student');

  if (!isOpen) return null;

  const handleSelectPredefined = (type: 'admin' | 'student') => {
    if (type === 'admin') {
      const adminUser: User = {
        ...INITIAL_ADMIN_USER,
        email: ADMIN_EMAIL
      };
      setCurrentUser(adminUser);
      onUserChange(adminUser);
      onClose();
    } else {
      const studentUser = INITIAL_STUDENT_USER;
      setCurrentUser(studentUser);
      onUserChange(studentUser);
      onClose();
    }
  };

  const handleCustomLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;

    const email = emailInput.trim().toLowerCase();
    const isAdmin = email === ADMIN_EMAIL.toLowerCase();

    const newUser: User = {
      id: 'user-' + Date.now(),
      email,
      name: nameInput.trim() || (isAdmin ? 'Guduru Alemayehu (Admin)' : email.split('@')[0]),
      role: isAdmin ? 'admin' : roleSelection,
      subscription: isAdmin
        ? {
            status: 'active',
            planName: 'Super Admin Lifetime Pass',
            activatedAt: '2025-01-01',
            expiresAt: '2099-12-31'
          }
        : {
            status: 'none'
          },
      createdAt: new Date().toISOString().split('T')[0]
    };

    if (!isAdmin) {
      const existingStudents = getStudents();
      const existing = existingStudents.find((s) => s.email.toLowerCase() === email);
      if (existing) {
        setCurrentUser(existing);
        onUserChange(existing);
        onClose();
        return;
      }
      saveStudents([newUser, ...existingStudents]);
    }

    setCurrentUser(newUser);
    onUserChange(newUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-md w-full p-6 text-slate-100 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
            <UserIcon className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold font-display text-white">Switch User / Account</h2>
            <p className="text-xs text-slate-400">Test as Admin or Student subscriber</p>
          </div>
        </div>

        {/* Quick Profiles Switcher */}
        <div className="space-y-2.5 mb-6">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Quick Switch Profiles</p>

          {/* Admin Account Button */}
          <button
            id="switch-to-admin-btn"
            onClick={() => handleSelectPredefined('admin')}
            className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${
              currentUser.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()
                ? 'bg-amber-500/10 border-amber-500/50 shadow-md shadow-amber-500/5'
                : 'bg-slate-800/60 border-slate-700/60 hover:bg-slate-800 hover:border-slate-600'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm text-white">Admin Account</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                    SUPER ADMIN
                  </span>
                </div>
                <p className="text-xs text-amber-200/80 font-mono mt-0.5">{ADMIN_EMAIL}</p>
                <p className="text-[11px] text-slate-400 mt-1">Full control to add questions, videos, notes & manage fees</p>
              </div>
            </div>
            {currentUser.email.toLowerCase() === ADMIN_EMAIL.toLowerCase() && (
              <Check className="w-5 h-5 text-amber-400 shrink-0" />
            )}
          </button>

          {/* Demo Student Account Button */}
          <button
            id="switch-to-student-btn"
            onClick={() => handleSelectPredefined('student')}
            className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${
              currentUser.role === 'student'
                ? 'bg-indigo-500/10 border-indigo-500/50 shadow-md shadow-indigo-500/5'
                : 'bg-slate-800/60 border-slate-700/60 hover:bg-slate-800 hover:border-slate-600'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/40 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm text-white">Sample Student</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-medium border border-indigo-500/30">
                    STUDENT
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-mono mt-0.5">student.sample@smartstudy.edu</p>
                <p className="text-[11px] text-slate-400 mt-1">Experience subscription fee paywall & tutorial learner flow</p>
              </div>
            </div>
            {currentUser.role === 'student' && <Check className="w-5 h-5 text-indigo-400 shrink-0" />}
          </button>
        </div>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-700"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-2 bg-slate-900 text-slate-500 font-medium">Or enter any custom email</span>
          </div>
        </div>

        {/* Custom Login Form */}
        <form onSubmit={handleCustomLogin} className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
            <input
              type="email"
              required
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="e.g. yourname@example.com"
              className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <p className="text-[11px] text-slate-400 mt-1">
              Tip: Logging in with <code className="text-amber-400">{ADMIN_EMAIL}</code> instantly gives Super Admin rights.
            </p>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Full Name (Optional)</label>
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder="e.g. John Doe"
              className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-medium rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-600/30 cursor-pointer"
          >
            <span>Continue to App</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
