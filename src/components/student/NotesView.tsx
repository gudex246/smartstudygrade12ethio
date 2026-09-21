import React, { useState } from 'react';
import {
  FileText,
  Clock,
  Lock,
  Sparkles,
  BookOpen,
  Bookmark,
  Share2,
  Search,
  Check,
  CheckCircle,
  Download
} from 'lucide-react';
import { StudyNote, User } from '../../types';
import { ALL_SUBJECTS } from '../../data/initialData';

interface NotesViewProps {
  notes: StudyNote[];
  currentUser: User;
  onOpenSubscriptionModal: () => void;
  onAskAITutor: (prompt: string, context?: string) => void;
}

export const NotesView: React.FC<NotesViewProps> = ({
  notes,
  currentUser,
  onOpenSubscriptionModal,
  onAskAITutor
}) => {
  const isSubscribed = currentUser.subscription?.status === 'active' || currentUser.role === 'admin';
  const [selectedNote, setSelectedNote] = useState<StudyNote>(notes[0]);
  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [savedOfflineNotes, setSavedOfflineNotes] = useState<string[]>([]);
  const [copiedNote, setCopiedNote] = useState(false);

  const filteredNotes = notes.filter((n) => {
    const matchesSub = selectedSubject === 'All' || n.subject === selectedSubject;
    const matchesSearch =
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSub && matchesSearch;
  });

  const isCurrentNoteLocked = !isSubscribed && !selectedNote.isFreePreview;

  const handleToggleOfflineSave = (noteId: string) => {
    if (savedOfflineNotes.includes(noteId)) {
      setSavedOfflineNotes(savedOfflineNotes.filter((id) => id !== noteId));
    } else {
      setSavedOfflineNotes([...savedOfflineNotes, noteId]);
    }
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(`${selectedNote.title}\n\nSummary:\n${selectedNote.summary}\n\nKey Takeaways:\n${selectedNote.keyTakeaways.join('\n')}`);
    setCopiedNote(true);
    setTimeout(() => setCopiedNote(false), 2000);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900 border border-slate-800 p-4 sm:p-5 rounded-2xl">
        <div>
          <h2 className="text-xl font-bold font-display text-white">Study Notes & Cheat Sheets</h2>
          <p className="text-xs text-slate-400">High-yield revision summaries, formulas & exam preparation guides.</p>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="bg-slate-800 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-2 focus:outline-none"
          >
            <option value="All">All Subjects</option>
            {ALL_SUBJECTS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Notes Reading Pane */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative">
            
            {isCurrentNoteLocked ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mx-auto animate-pulse">
                  <Lock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Study Note Locked</h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                  This study guide and formula sheet requires a Smart Study active subscription. Subscribe now to read all notes offline & online.
                </p>
                <button
                  onClick={onOpenSubscriptionModal}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs rounded-xl shadow-lg cursor-pointer"
                >
                  Pay Subscription Fee & Read All Notes
                </button>
              </div>
            ) : (
              <>
                {/* Note Header */}
                <div className="border-b border-slate-800 pb-5 space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 font-semibold">
                        {selectedNote.subject}
                      </span>
                      <span className="text-xs text-slate-400">{selectedNote.topic}</span>
                      <span className="text-xs text-slate-500 flex items-center gap-1 font-mono">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{selectedNote.readTimeMinutes} min read</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleToggleOfflineSave(selectedNote.id)}
                        className={`p-2 rounded-xl text-xs flex items-center gap-1.5 transition-colors ${
                          savedOfflineNotes.includes(selectedNote.id)
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                        title="Available for offline PWA studying"
                      >
                        <Bookmark className="w-4 h-4" />
                        <span className="hidden sm:inline">
                          {savedOfflineNotes.includes(selectedNote.id) ? 'Saved Offline' : 'Save for Offline'}
                        </span>
                      </button>

                      <button
                        onClick={handleCopySummary}
                        className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
                        title="Copy Summary"
                      >
                        {copiedNote ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                    {selectedNote.title}
                  </h1>

                  <p className="text-xs sm:text-sm text-slate-300 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                    <strong className="text-indigo-400">Executive Summary:</strong> {selectedNote.summary}
                  </p>
                </div>

                {/* Key Takeaways Box */}
                {selectedNote.keyTakeaways && selectedNote.keyTakeaways.length > 0 && (
                  <div className="bg-indigo-950/20 border border-indigo-500/30 rounded-2xl p-4 sm:p-5 space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Exam High-Yield Takeaways</span>
                    </h3>
                    <div className="space-y-1.5">
                      {selectedNote.keyTakeaways.map((takeaway, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0"></span>
                          <span>{takeaway}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Note Content Display */}
                <div className="prose prose-invert max-w-none text-slate-300 text-xs sm:text-sm space-y-3 leading-relaxed">
                  <div className="whitespace-pre-line font-sans">
                    {selectedNote.contentMarkdown}
                  </div>
                </div>

                {/* AI Tutor Assistant CTA */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between flex-wrap gap-2">
                  <div className="text-xs text-slate-400 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-violet-400" />
                    <span>Need deeper clarification on this topic?</span>
                  </div>
                  <button
                    onClick={() =>
                      onAskAITutor(
                        `I am studying the note "${selectedNote.title}" in ${selectedNote.subject}. Could you create a 3-question quiz for me to test my understanding?`,
                        selectedNote.contentMarkdown
                      )
                    }
                    className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-semibold rounded-xl shadow-md cursor-pointer"
                  >
                    Quiz Me on this Note
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Notes Sidebar Directory */}
        <div className="space-y-3">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
            <h3 className="font-bold text-sm text-white mb-1">Study Guide Catalog</h3>
            <p className="text-xs text-slate-400 mb-3">{filteredNotes.length} notes available</p>

            <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
              {filteredNotes.map((n) => {
                const isActive = n.id === selectedNote.id;
                const isLocked = !isSubscribed && !n.isFreePreview;

                return (
                  <div
                    key={n.id}
                    onClick={() => setSelectedNote(n)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer space-y-1.5 ${
                      isActive
                        ? 'bg-indigo-950/50 border-indigo-500 shadow-md shadow-indigo-500/10'
                        : 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] text-indigo-300 font-semibold">{n.subject}</span>
                      <div className="flex items-center gap-1">
                        {n.isFreePreview && (
                          <span className="text-[9px] px-1 rounded bg-sky-500/20 text-sky-300 font-bold">
                            FREE
                          </span>
                        )}
                        {isLocked && <Lock className="w-3 h-3 text-amber-400" />}
                      </div>
                    </div>

                    <h4 className={`text-xs font-semibold line-clamp-1 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                      {n.title}
                    </h4>

                    <p className="text-[11px] text-slate-400 line-clamp-2">{n.summary}</p>

                    <div className="flex items-center justify-between pt-1 text-[10px] text-slate-500">
                      <span>{n.readTimeMinutes} min read</span>
                      {savedOfflineNotes.includes(n.id) && (
                        <span className="text-emerald-400 flex items-center gap-0.5">
                          <CheckCircle className="w-3 h-3" /> Offline
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
