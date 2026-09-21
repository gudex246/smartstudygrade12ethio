import React, { useState } from 'react';
import {
  Video,
  Play,
  CheckCircle,
  Clock,
  Lock,
  Sparkles,
  BookOpen,
  ChevronRight,
  List,
  Search,
  ExternalLink,
  Languages,
  Filter,
  FlaskConical
} from 'lucide-react';
import { VideoLesson, User } from '../../types';
import { ALL_SUBJECTS } from '../../data/initialData';
import { setCurrentUser } from '../../utils/storage';

interface VideosViewProps {
  videos: VideoLesson[];
  currentUser: User;
  onOpenSubscriptionModal: () => void;
  onAskAITutor: (prompt: string, context?: string) => void;
}

export const VideosView: React.FC<VideosViewProps> = ({
  videos,
  currentUser,
  onOpenSubscriptionModal,
  onAskAITutor
}) => {
  const isSubscribed = currentUser.subscription?.status === 'active' || currentUser.role === 'admin';
  const [selectedVideo, setSelectedVideo] = useState<VideoLesson>(videos[0] || {} as VideoLesson);
  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<'all' | 'amharic' | 'organic' | 'free'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [completedVideos, setCompletedVideos] = useState<string[]>(currentUser.completedVideoIds || []);

  const filteredVideos = videos.filter((v) => {
    // Subject filter
    const matchesSub = selectedSubject === 'All' || v.subject === selectedSubject;
    
    // Language filter
    const matchesLang =
      selectedLanguage === 'All' ||
      (selectedLanguage === 'Amharic' && (v.language === 'Amharic' || v.title.includes('Amharic') || v.title.includes('🇪🇹'))) ||
      (selectedLanguage === 'English' && v.language !== 'Amharic');

    // Quick tag filters
    let matchesCategory = true;
    if (activeCategoryFilter === 'amharic') {
      matchesCategory = v.language === 'Amharic' || v.title.includes('Amharic') || v.title.includes('🇪🇹');
    } else if (activeCategoryFilter === 'organic') {
      matchesCategory =
        v.subject === 'Chemistry' &&
        (v.topic.toLowerCase().includes('organic') ||
          v.title.toLowerCase().includes('organic') ||
          v.description.toLowerCase().includes('organic'));
    } else if (activeCategoryFilter === 'free') {
      matchesCategory = !!v.isFreePreview;
    }

    // Search query
    const matchesSearch =
      !searchQuery.trim() ||
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSub && matchesLang && matchesCategory && matchesSearch;
  });

  const isCurrentVideoLocked = !isSubscribed && !selectedVideo.isFreePreview;

  const handleToggleComplete = (videoId: string) => {
    const next = completedVideos.includes(videoId)
      ? completedVideos.filter((id) => id !== videoId)
      : [...completedVideos, videoId];
    setCompletedVideos(next);
    const updatedUser = { ...currentUser, completedVideoIds: next };
    setCurrentUser(updatedUser);
  };

  // Convert youtube watch URL to embed URL if needed
  const getEmbedUrl = (url: string, startTimeSec?: number) => {
    let embedBase = '';
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      embedBase = `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      embedBase = `https://www.youtube.com/embed/${videoId}`;
    } else {
      embedBase = url;
    }

    const params: string[] = ['autoplay=0', 'rel=0'];
    if (startTimeSec && startTimeSec > 0) {
      params.push(`start=${startTimeSec}`);
    }
    return `${embedBase}?${params.join('&')}`;
  };

  const [embedStartTime, setEmbedStartTime] = useState<number | undefined>(undefined);

  const handleSelectChapter = (timeSec: number) => {
    setEmbedStartTime(timeSec);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header & Filter Controls */}
      <div className="bg-slate-900 border border-slate-800 p-4 sm:p-5 rounded-2xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold font-display text-white">HD Video Tutorial Lectures</h2>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {videos.length} Lectures
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Structured video lessons with chapter markers, formulas & conceptual breakdowns in English and Amharic.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Subject Selector */}
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="bg-slate-800 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:border-indigo-500"
            >
              <option value="All">All Subjects</option>
              {ALL_SUBJECTS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            {/* Language Selector */}
            <div className="flex items-center gap-1.5 bg-slate-800 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-slate-200">
              <Languages className="w-3.5 h-3.5 text-indigo-400" />
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="bg-transparent text-xs text-slate-200 focus:outline-none cursor-pointer"
              >
                <option value="All" className="bg-slate-900">All Languages</option>
                <option value="Amharic" className="bg-slate-900">🇪🇹 Amharic (አማርኛ)</option>
                <option value="English" className="bg-slate-900">🇬🇧 English</option>
              </select>
            </div>
          </div>
        </div>

        {/* Quick Filter Badges & Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-800/80">
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setActiveCategoryFilter('all')}
              className={`px-3 py-1 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeCategoryFilter === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              All Videos
            </button>
            <button
              onClick={() => setActiveCategoryFilter('organic')}
              className={`px-3 py-1 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeCategoryFilter === 'organic'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                  : 'bg-slate-800 text-emerald-300/80 hover:text-emerald-200 border border-emerald-500/20'
              }`}
            >
              <FlaskConical className="w-3 h-3" />
              <span>🧪 Organic Chemistry</span>
            </button>
            <button
              onClick={() => setActiveCategoryFilter('amharic')}
              className={`px-3 py-1 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeCategoryFilter === 'amharic'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-500/20'
                  : 'bg-slate-800 text-amber-300/80 hover:text-amber-200 border border-amber-500/20'
              }`}
            >
              <span>🇪🇹 አማርኛ (Amharic)</span>
            </button>
            <button
              onClick={() => setActiveCategoryFilter('free')}
              className={`px-3 py-1 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeCategoryFilter === 'free'
                  ? 'bg-sky-600 text-white'
                  : 'bg-slate-800 text-sky-300/80 hover:text-sky-200 border border-sky-500/20'
              }`}
            >
              Free Preview
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[220px]">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search lectures, topics, mechanisms..."
              className="w-full pl-8 pr-3 py-1.5 bg-slate-800/80 border border-slate-700/80 text-xs text-slate-200 placeholder-slate-500 rounded-xl focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* Main Video Theater Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Active Video Player Column */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            
            {/* Embedded Player or Lock Screen */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              {isCurrentVideoLocked ? (
                <div className="absolute inset-0 bg-slate-950/90 flex flex-col items-center justify-center p-6 text-center space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center animate-pulse">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Full Video Lesson Locked</h3>
                  <p className="text-xs text-slate-400 max-w-sm">
                    This video tutorial requires a Smart Study Student Subscription fee. Subscribe now for unlimited access.
                  </p>
                  <button
                    onClick={onOpenSubscriptionModal}
                    className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg cursor-pointer"
                  >
                    Unlock Pro Membership
                  </button>
                </div>
              ) : (
                <iframe
                  key={`${selectedVideo.id}-${embedStartTime || 0}`}
                  src={getEmbedUrl(selectedVideo.videoUrl, embedStartTime)}
                  title={selectedVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            {/* Video Details */}
            <div className="p-5 space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs px-2.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 font-semibold">
                      {selectedVideo.subject}
                    </span>
                    {selectedVideo.language === 'Amharic' ? (
                      <span className="text-xs px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                        🇪🇹 አማርኛ (Amharic)
                      </span>
                    ) : (
                      <span className="text-xs px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 font-medium">
                        🇬🇧 English
                      </span>
                    )}
                    <span className="text-xs text-slate-400">{selectedVideo.topic}</span>
                    <span className="text-xs text-slate-500 flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3" />
                      <span>{selectedVideo.duration}</span>
                    </span>
                  </div>
                  <h1 className="text-lg sm:text-xl font-bold font-display text-white">
                    {selectedVideo.title}
                  </h1>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={selectedVideo.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                    title="Open on YouTube"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => handleToggleComplete(selectedVideo.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      completedVideos.includes(selectedVideo.id)
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                    }`}
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>{completedVideos.includes(selectedVideo.id) ? 'Completed' : 'Mark Watched'}</span>
                  </button>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                {selectedVideo.description}
              </p>

              {/* Notes Summary If Available */}
              {selectedVideo.notesSummary && (
                <div className="p-3.5 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-slate-300 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-indigo-300">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Key Lesson Takeaways & Formulas</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {selectedVideo.notesSummary}
                  </p>
                </div>
              )}

              {/* Video Chapters List */}
              {selectedVideo.chapters && selectedVideo.chapters.length > 0 && (
                <div className="bg-slate-950/60 rounded-2xl p-4 border border-slate-800/80 space-y-2">
                  <h4 className="text-xs font-bold uppercase text-slate-400 flex items-center gap-1.5">
                    <List className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Lesson Chapters & Timestamps (Click to Jump)</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedVideo.chapters.map((ch, i) => (
                      <button
                        key={i}
                        onClick={() => handleSelectChapter(ch.time)}
                        className="flex items-center gap-2 p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:border-indigo-500/60 hover:bg-indigo-950/30 transition-all text-left cursor-pointer"
                      >
                        <span className="font-mono text-indigo-400 text-[11px] font-bold bg-indigo-950/80 px-1.5 py-0.5 rounded border border-indigo-500/30">
                          {Math.floor(ch.time / 60)}:{String(ch.time % 60).padStart(2, '0')}
                        </span>
                        <span className="truncate">{ch.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Ask AI about this video */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-gradient-to-r from-violet-950/40 to-indigo-950/40 border border-violet-500/30 text-xs">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  <span className="text-slate-300">Have a question about this lecture?</span>
                </div>
                <button
                  onClick={() =>
                    onAskAITutor(
                      `I am watching the lecture "${selectedVideo.title}" in ${selectedVideo.subject}. Could you explain the main takeaways and give me 1 practical problem to test my understanding?`,
                      selectedVideo.notesSummary || selectedVideo.description
                    )
                  }
                  className="px-3 py-1.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  Ask AI Tutor
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Playlist Sidebar */}
        <div className="space-y-3">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-sm text-white">Tutorial Video Playlist</h3>
              <span className="text-xs text-slate-400 font-medium">
                {filteredVideos.length} / {videos.length} videos
              </span>
            </div>

            {filteredVideos.length === 0 ? (
              <div className="text-center py-8 text-slate-500 text-xs">
                No videos match your filter. Try selecting "All Subjects" or clearing the search.
              </div>
            ) : (
              <div className="space-y-2 max-h-[620px] overflow-y-auto pr-1">
                {filteredVideos.map((v) => {
                  const isActive = v.id === selectedVideo.id;
                  const isCompleted = completedVideos.includes(v.id);
                  const isLocked = !isSubscribed && !v.isFreePreview;
                  const isAmharic = v.language === 'Amharic' || v.title.includes('Amharic') || v.title.includes('🇪🇹');
                  const isOrganic = v.subject === 'Chemistry' && (v.topic.toLowerCase().includes('organic') || v.title.toLowerCase().includes('organic'));

                  return (
                    <div
                      key={v.id}
                      onClick={() => {
                        setSelectedVideo(v);
                        setEmbedStartTime(undefined);
                      }}
                      className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                        isActive
                          ? 'bg-indigo-950/50 border-indigo-500 shadow-md shadow-indigo-500/10 ring-1 ring-indigo-500/30'
                          : 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800'
                      }`}
                    >
                      <div className="relative w-18 h-14 rounded-xl bg-slate-950 overflow-hidden shrink-0 border border-slate-700/50">
                        <img
                          src={v.thumbnailUrl || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&auto=format&fit=crop&q=80'}
                          alt={v.title}
                          className="w-full h-full object-cover"
                        />
                        {isLocked ? (
                          <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-amber-400">
                            <Lock className="w-4 h-4" />
                          </div>
                        ) : (
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white">
                            <Play className="w-4 h-4 fill-white" />
                          </div>
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-1 mb-0.5">
                          <span className="text-[10px] text-indigo-300 font-semibold">{v.subject}</span>
                          {isAmharic && (
                            <span className="text-[9px] px-1 rounded bg-amber-500/20 text-amber-300 font-bold">
                              🇪🇹 አማርኛ
                            </span>
                          )}
                          {isOrganic && (
                            <span className="text-[9px] px-1 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                              🧪 Organic
                            </span>
                          )}
                          {v.isFreePreview && (
                            <span className="text-[9px] px-1 rounded bg-sky-500/20 text-sky-300 font-bold">
                              FREE
                            </span>
                          )}
                        </div>
                        <p className={`text-xs font-semibold line-clamp-2 leading-tight ${isActive ? 'text-white' : 'text-slate-300'}`}>
                          {v.title}
                        </p>
                        <p className="text-[10px] text-slate-500 font-mono mt-1 flex items-center gap-1">
                          <Clock className="w-2.5 h-2.5" />
                          <span>{v.duration}</span>
                        </p>
                      </div>

                      {isCompleted && (
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
