import React, { useState } from 'react';
import { BookOpen, Check, Copy, Globe, Languages, Sparkles } from 'lucide-react';

interface TrilingualExplanationProps {
  explanation: string;
  subject?: string;
  className?: string;
  defaultLang?: 'all' | 'en' | 'am' | 'om';
  showHeading?: boolean;
}

interface LanguageSection {
  code: 'en' | 'am' | 'om' | 'other';
  title: string;
  nativeTitle: string;
  flagEmoji: string;
  badgeColor: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
  content: string;
}

export const parseExplanationLanguages = (rawExplanation: string, subject?: string): LanguageSection[] => {
  if (!rawExplanation || typeof rawExplanation !== 'string') return [];

  const text = rawExplanation.trim();

  // If subject is Mathematics, return solely English Mathematical Solution
  if (subject && subject.toLowerCase().includes('math')) {
    const enRegex = /(?:🇬🇧\s*English(?:\s*\([^)]*\))?:\s*|^English:\s*)([\s\S]*?)(?=(?:🇪🇹|🌳|Afaan Oromoo|አማርኛ|Amharic:|$))/i;
    const enMatch = text.match(enRegex);
    const mathContent = enMatch && enMatch[1] && enMatch[1].trim() ? enMatch[1].trim() : text;

    return [
      {
        code: 'en',
        title: 'English',
        nativeTitle: 'English Mathematical Solution',
        flagEmoji: '📐',
        badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
        bgClass: 'bg-slate-900/80',
        borderClass: 'border-indigo-500/30',
        textClass: 'text-slate-100',
        content: mathContent
      }
    ];
  }

  // Markers pattern
  // Matches: 🇬🇧 English: ... 🇪🇹 አማርኛ (Amharic): ... 🌳 Afaan Oromoo: ...
  const enRegex = /(?:🇬🇧\s*English(?:\s*\([^)]*\))?:\s*|^English:\s*)([\s\S]*?)(?=(?:🇪🇹|🌳|Afaan Oromoo|አማርኛ|Amharic:|$))/i;
  const amRegex = /(?:🇪🇹\s*(?:አማርኛ|Amharic)(?:\s*\([^)]*\))?:\s*|^አማርኛ:\s*|^Amharic:\s*)([\s\S]*?)(?=(?:🌳|Afaan Oromoo|Oromiffa:|$))/i;
  const omRegex = /(?:🌳\s*(?:Afaan Oromoo|Oromoo|Oromiffa)(?:\s*\([^)]*\))?:\s*|^Afaan Oromoo:\s*|^Oromiffa:\s*)([\s\S]*?)$/i;

  const enMatch = text.match(enRegex);
  const amMatch = text.match(amRegex);
  const omMatch = text.match(omRegex);

  const sections: LanguageSection[] = [];

  if (enMatch && enMatch[1] && enMatch[1].trim()) {
    sections.push({
      code: 'en',
      title: 'English',
      nativeTitle: 'English Explanation',
      flagEmoji: '🇬🇧',
      badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
      bgClass: 'bg-sky-950/20',
      borderClass: 'border-sky-500/30',
      textClass: 'text-sky-100',
      content: enMatch[1].trim()
    });
  }

  if (amMatch && amMatch[1] && amMatch[1].trim()) {
    sections.push({
      code: 'am',
      title: 'አማርኛ',
      nativeTitle: 'የአማርኛ ማብራሪያ (Amharic)',
      flagEmoji: '🇪🇹',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      bgClass: 'bg-emerald-950/20',
      borderClass: 'border-emerald-500/30',
      textClass: 'text-emerald-100',
      content: amMatch[1].trim()
    });
  }

  if (omMatch && omMatch[1] && omMatch[1].trim()) {
    sections.push({
      code: 'om',
      title: 'Afaan Oromoo',
      nativeTitle: 'Ibsa Afaan Oromoo (Oromo)',
      flagEmoji: '🌳',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      bgClass: 'bg-amber-950/20',
      borderClass: 'border-amber-500/30',
      textClass: 'text-amber-100',
      content: omMatch[1].trim()
    });
  }

  // Fallback: If not parsed into trilingual sections, return the full text as single section
  if (sections.length === 0) {
    sections.push({
      code: 'other',
      title: 'Solution',
      nativeTitle: 'Solution Explanation',
      flagEmoji: '📖',
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
      bgClass: 'bg-slate-900/60',
      borderClass: 'border-slate-800',
      textClass: 'text-slate-200',
      content: text
    });
  }

  return sections;
};

export const TrilingualExplanation: React.FC<TrilingualExplanationProps> = ({
  explanation,
  subject,
  className = '',
  defaultLang = 'all',
  showHeading = true
}) => {
  const [selectedLang, setSelectedLang] = useState<'all' | 'en' | 'am' | 'om'>(defaultLang);
  const [copied, setCopied] = useState(false);

  const sections = parseExplanationLanguages(explanation, subject);
  const isTrilingual = sections.length > 1;
  const isMath = subject && subject.toLowerCase().includes('math');

  const handleCopy = () => {
    navigator.clipboard.writeText(explanation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const visibleSections =
    selectedLang === 'all'
      ? sections
      : sections.filter((s) => s.code === selectedLang || sections.length === 1);

  return (
    <div
      className={`rounded-2xl border border-slate-800 bg-slate-950/70 p-4 sm:p-5 shadow-inner transition-all ${className}`}
    >
      {/* Top Header & Tab Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 border-b border-slate-800/80">
        {showHeading && (
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
              <BookOpen className="w-3.5 h-3.5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white tracking-wide flex items-center gap-1.5">
                <span>{isMath ? 'Mathematical Solution (English)' : 'Detailed Explanation'}</span>
                {isMath && (
                  <span className="text-[10px] font-normal px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20">
                    English Only
                  </span>
                )}
                {!isMath && isTrilingual && (
                  <span className="text-[10px] font-normal px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    Trilingual (3 Languages)
                  </span>
                )}
              </h5>
            </div>
          </div>
        )}

        {/* Language Switcher Tabs */}
        {isTrilingual && (
          <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-[11px] font-medium">
            <button
              onClick={() => setSelectedLang('all')}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                selectedLang === 'all'
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <Globe className="w-3 h-3" />
              <span>All 3 Languages</span>
            </button>

            {sections.map((s) => (
              <button
                key={s.code}
                onClick={() => setSelectedLang(s.code as any)}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                  selectedLang === s.code
                    ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <span>{s.flagEmoji}</span>
                <span>{s.title}</span>
              </button>
            ))}
          </div>
        )}

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="ml-auto text-[11px] text-slate-400 hover:text-slate-200 flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all cursor-pointer"
          title="Copy explanation"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Language Explanation Cards with Generous Spacing / Gaps */}
      <div className="mt-4 space-y-4">
        {visibleSections.map((sec, idx) => (
          <div
            key={sec.code}
            className={`rounded-xl border ${sec.borderClass} ${sec.bgClass} p-3.5 sm:p-4 transition-all space-y-2.5`}
          >
            {/* Language Tag Header */}
            <div className="flex items-center justify-between gap-2 border-b border-slate-800/40 pb-2">
              <div className="flex items-center gap-2">
                <span className="text-base">{sec.flagEmoji}</span>
                <span className="text-xs font-bold text-white tracking-wide">
                  {sec.nativeTitle}
                </span>
              </div>
              <span
                className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-md border ${sec.badgeColor}`}
              >
                {sec.title}
              </span>
            </div>

            {/* Language Content with Clean Typography and Spacing */}
            <div
              className={`text-xs sm:text-[13px] leading-relaxed whitespace-pre-line ${sec.textClass}`}
            >
              {sec.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TrilingualExplanation;
