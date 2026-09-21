import React, { useState, useEffect } from 'react';
import {
  Download,
  X,
  Smartphone,
  Laptop,
  CheckCircle2,
  HelpCircle,
  Share,
  Wifi,
  Zap,
  HardDrive,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

interface InstallAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  deferredPrompt: BeforeInstallPromptEvent | null;
  onInstallSuccess: () => void;
}

export const InstallAppModal: React.FC<InstallAppModalProps> = ({
  isOpen,
  onClose,
  deferredPrompt,
  onInstallSuccess
}) => {
  const [deviceTab, setDeviceTab] = useState<'auto' | 'android' | 'ios' | 'desktop' | 'github'>('auto');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [isCopied, setIsCopied] = useState(false);
  const [detectedPlatform, setDetectedPlatform] = useState<'android' | 'ios' | 'desktop'>('android');
  const [isStandalone, setIsStandalone] = useState(false);
  const [installing, setInstalling] = useState(false);

  useEffect(() => {
    // Detect environment safely
    let isStandaloneMode = false;
    try {
      isStandaloneMode = (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(display-mode: standalone)')?.matches) ||
        (typeof window !== 'undefined' && (window.navigator as unknown as { standalone?: boolean })?.standalone === true);
    } catch {
      isStandaloneMode = false;
    }
    setIsStandalone(isStandaloneMode);

    try {
      const ua = (typeof window !== 'undefined' ? window.navigator.userAgent : '').toLowerCase();
      if (/iphone|ipad|ipod/.test(ua)) {
        setDetectedPlatform('ios');
        setDeviceTab('ios');
      } else if (/android/.test(ua)) {
        setDetectedPlatform('android');
        setDeviceTab('android');
      } else {
        setDetectedPlatform('desktop');
        setDeviceTab('desktop');
      }
    } catch {
      setDetectedPlatform('android');
      setDeviceTab('android');
    }
  }, []);

  if (!isOpen) return null;

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      setInstalling(true);
      try {
        await deferredPrompt.prompt();
        const choice = await deferredPrompt.userChoice;
        if (choice.outcome === 'accepted') {
          onInstallSuccess();
          onClose();
        }
      } catch (err) {
        console.error('PWA install prompt error:', err);
      } finally {
        setInstalling(false);
      }
    } else {
      // If browser does not support programmatic prompt (like iOS Safari or Firefox), guide the user
      if (detectedPlatform === 'ios') {
        setDeviceTab('ios');
      } else if (detectedPlatform === 'desktop') {
        setDeviceTab('desktop');
      } else {
        setDeviceTab('android');
      }
    }
  };

  const handleCopyLink = async () => {
    try {
      const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(currentUrl);
      } else {
        // Fallback for older mobile webviews
        const textArea = document.createElement('textarea');
        textArea.value = currentUrl;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    } catch {
      // ignore
    }
  };

  const faqs = [
    {
      q: 'Why should I install the app instead of just using the link in a browser?',
      a: 'Installing adds Smart Study directly to your device Home Screen or Desktop like a native mobile app. It opens with 1 tap, gives you full-screen study space without distracting address bars, loads 3x faster, and enables full offline practice for questions and summary notes even when you have no data or Wi-Fi.'
    },
    {
      q: 'How do people install it when I share my GitHub or deployed link?',
      a: 'When anyone opens your link on their phone or computer, their browser recognizes it as a Progressive Web App (PWA). They can either tap the "Install App" button right on the page, or tap their browser menu (⋮ in Chrome, or Share ⎋ in Safari) and select "Add to Home Screen" or "Install App". It installs in under 5 seconds with zero app store delays.'
    },
    {
      q: 'How do I install on Android (Chrome, Samsung Internet, Brave, Opera)?',
      a: '1. Tap the "Install App Now" button below.\n2. If your browser does not pop up automatically, tap the three dots (⋮) in the top-right corner of Chrome.\n3. Tap "Install app" or "Add to Home screen".\n4. Confirm by tapping "Install". The Smart Study icon will appear on your phone screen.'
    },
    {
      q: 'How do I install on iPhone or iPad (Apple iOS Safari)?',
      a: 'Apple requires using Safari to install web apps:\n1. Open your link in Safari.\n2. Tap the "Share" button (the box with an upward arrow ⎋) at the bottom navigation bar.\n3. Scroll down the menu and tap "Add to Home Screen".\n4. Tap "Add" in the top-right corner. Smart Study is now on your iPhone home screen.'
    },
    {
      q: 'How do I install on Windows PC, Mac, or Chromebook?',
      a: '1. In Google Chrome or Microsoft Edge, look at the right side of the URL address bar.\n2. Click the install icon (a small computer screen with a down arrow or a "+" symbol).\n3. Click "Install". Smart Study will launch in its own dedicated window and add a desktop shortcut.'
    },
    {
      q: 'Does it cost any money to install, or require storage space?',
      a: 'Installing is 100% free! It takes less than 3 MB of storage (unlike heavy Play Store apps that take 100MB+), and it never slows down your device.'
    },
    {
      q: 'Can I study questions and notes offline without internet data?',
      a: 'Yes! The installed app caches practice questions, solutions, and revision notes on your device. Once installed and loaded once, you can open and practice anytime even when you turn off mobile data.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div
        id="install-app-modal-card"
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto text-slate-100"
      >
        {/* Top Header Banner */}
        <div className="relative bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 px-6 py-6 border-b border-indigo-500/30">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-950/40 hover:bg-slate-950/70 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 p-2 flex items-center justify-center shadow-lg shadow-indigo-950/50 shrink-0">
              <img
                src="/apple-touch-icon.png"
                alt="Smart Study App Icon"
                className="w-full h-full rounded-xl object-cover shadow"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/icon-192.svg';
                }}
              />
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight">
                  Install Smart Study App
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[11px] font-bold uppercase tracking-wider">
                  PWA Ready
                </span>
              </div>
              <p className="text-xs sm:text-sm text-indigo-200 mt-1">
                Install on your device for instant offline questions, tutorials, and notes
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-4 bg-slate-950/50 border-b border-slate-800 text-xs">
          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-2">
            <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Instant Launch</p>
              <p className="text-[11px] text-slate-400">1 tap from home screen</p>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-2">
            <Wifi className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Offline Study</p>
              <p className="text-[11px] text-slate-400">Works without data</p>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-2">
            <Smartphone className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Full Screen</p>
              <p className="text-[11px] text-slate-400">No browser URL bars</p>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-2">
            <HardDrive className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Lightweight</p>
              <p className="text-[11px] text-slate-400">&lt; 3 MB, no app store</p>
            </div>
          </div>
        </div>

        {/* Main CTA Install Button */}
        <div className="p-5 border-b border-slate-800 bg-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <p className="text-sm font-bold text-white">
              {isStandalone
                ? '✅ App is already installed and running in native standalone mode!'
                : deferredPrompt
                ? 'Click below to install Smart Study directly to this device:'
                : `Ready to install on ${detectedPlatform === 'ios' ? 'iPhone/iPad' : detectedPlatform === 'android' ? 'Android' : 'Desktop'}!`}
            </p>
            <p className="text-xs text-slate-400 mt-0.5">
              No Play Store or Apple ID password required. Safe & verified.
            </p>
          </div>

          {!isStandalone && (
            <button
              id="modal-direct-install-btn"
              onClick={handleInstallClick}
              disabled={installing}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all transform active:scale-95 cursor-pointer shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>{installing ? 'Prompting Install...' : 'Install App Now'}</span>
            </button>
          )}
        </div>

        {/* Interactive Device Tabs & Questions Guide */}
        <div className="p-5 space-y-5 max-h-[60vh] overflow-y-auto">
          {/* Device Tabs */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
                <span>How to Install on Your Device</span>
              </h3>
              <span className="text-[11px] text-indigo-400 font-medium">Select device:</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => setDeviceTab('android')}
                className={`py-2 px-2.5 rounded-lg font-medium flex items-center justify-center gap-1.5 transition-all ${
                  deviceTab === 'android'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <span>🤖</span>
                <span>Android</span>
              </button>

              <button
                onClick={() => setDeviceTab('ios')}
                className={`py-2 px-2.5 rounded-lg font-medium flex items-center justify-center gap-1.5 transition-all ${
                  deviceTab === 'ios'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <span>🍎</span>
                <span>iPhone / iPad</span>
              </button>

              <button
                onClick={() => setDeviceTab('desktop')}
                className={`py-2 px-2.5 rounded-lg font-medium flex items-center justify-center gap-1.5 transition-all ${
                  deviceTab === 'desktop'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <span>💻</span>
                <span>PC / Mac</span>
              </button>

              <button
                onClick={() => setDeviceTab('github')}
                className={`py-2 px-2.5 rounded-lg font-medium flex items-center justify-center gap-1.5 transition-all ${
                  deviceTab === 'github'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <span>🐙</span>
                <span>GitHub Link</span>
              </button>
            </div>
          </div>

          {/* Device Guide Content Card */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300">
            {deviceTab === 'android' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-indigo-300 font-bold text-sm">
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                  <span>Android Installation Steps (Google Chrome / Brave / Samsung)</span>
                </div>
                <div className="grid gap-2 text-xs">
                  <div className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-900 border border-slate-800/80">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-[11px] shrink-0">1</span>
                    <p>Tap the <strong className="text-white">"Install App Now"</strong> button above, or look for the "Add Smart Study to Home screen" banner.</p>
                  </div>
                  <div className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-900 border border-slate-800/80">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-[11px] shrink-0">2</span>
                    <p>If not prompted, tap the <strong className="text-white">three dots menu (⋮)</strong> at the top-right corner of Chrome.</p>
                  </div>
                  <div className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-900 border border-slate-800/80">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-[11px] shrink-0">3</span>
                    <p>Select <strong className="text-white">"Install app"</strong> or <strong className="text-white">"Add to Home screen"</strong> and confirm. Done!</p>
                  </div>
                </div>
              </div>
            )}

            {deviceTab === 'ios' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-indigo-300 font-bold text-sm">
                  <Smartphone className="w-4 h-4 text-indigo-400" />
                  <span>iPhone & iPad Installation Steps (Safari)</span>
                </div>
                <p className="text-slate-400 text-[11px]">
                  Note: Apple requires using the default <strong className="text-white">Safari</strong> browser to install web apps to your Home Screen.
                </p>
                <div className="grid gap-2 text-xs">
                  <div className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-900 border border-slate-800/80">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-[11px] shrink-0">1</span>
                    <p>Open this link in <strong className="text-white">Safari</strong> on your iPhone or iPad.</p>
                  </div>
                  <div className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-900 border border-slate-800/80">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-[11px] shrink-0">2</span>
                    <p>Tap the <strong className="text-white">Share</strong> icon (<Share className="w-3.5 h-3.5 inline mx-1 text-indigo-400" /> box with up arrow) in the bottom toolbar.</p>
                  </div>
                  <div className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-900 border border-slate-800/80">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-[11px] shrink-0">3</span>
                    <p>Scroll down the share sheet and tap <strong className="text-white">"Add to Home Screen"</strong>.</p>
                  </div>
                  <div className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-900 border border-slate-800/80">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-[11px] shrink-0">4</span>
                    <p>Tap <strong className="text-white">"Add"</strong> at the top right. Smart Study will now appear as an app on your home screen.</p>
                  </div>
                </div>
              </div>
            )}

            {deviceTab === 'desktop' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-indigo-300 font-bold text-sm">
                  <Laptop className="w-4 h-4 text-purple-400" />
                  <span>Desktop Installation Steps (Chrome, Edge, Brave on Windows/Mac)</span>
                </div>
                <div className="grid gap-2 text-xs">
                  <div className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-900 border border-slate-800/80">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-[11px] shrink-0">1</span>
                    <p>In Google Chrome or Microsoft Edge, look at the right end of the URL address bar.</p>
                  </div>
                  <div className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-900 border border-slate-800/80">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-[11px] shrink-0">2</span>
                    <p>Click the <strong className="text-white">Install App</strong> icon (a computer monitor with an arrow ⤓ or ⊕ symbol).</p>
                  </div>
                  <div className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-900 border border-slate-800/80">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-[11px] shrink-0">3</span>
                    <p>Click <strong className="text-white">"Install"</strong> in the confirmation popup. The app will launch in its own window and add a desktop shortcut.</p>
                  </div>
                </div>
              </div>
            )}

            {deviceTab === 'github' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-indigo-300 font-bold text-sm">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Deploying to GitHub Pages & Sharing Links</span>
                </div>
                <p className="text-slate-300 text-xs">
                  When you deploy this project to GitHub Pages (or any custom domain), anyone who visits your link can install it immediately:
                </p>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <p className="font-semibold text-white mb-1">1. Automatic HTTPS Security</p>
                    <p className="text-slate-400 text-[11px]">
                      GitHub Pages provides free SSL/HTTPS by default, which is required for browsers to enable Service Workers and PWA installation.
                    </p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <p className="font-semibold text-white mb-1">2. Auto-Prompting on First Visit</p>
                    <p className="text-slate-400 text-[11px]">
                      When students click your shared link, this exact "Install App Questions" modal pops up automatically so they can add it to their phone right away.
                    </p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between gap-2">
                    <div>
                      <p className="font-semibold text-white">Share Current Link</p>
                      <p className="text-slate-400 text-[11px]">Copy and send this tutorial link to students</p>
                    </div>
                    <button
                      onClick={handleCopyLink}
                      className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs flex items-center gap-1.5 cursor-pointer shrink-0"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCopied ? 'Link Copied!' : 'Copy Link'}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Frequently Asked Questions Accordion */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Installation Questions & Answers (FAQ)</span>
            </h3>

            <div className="space-y-2">
              {faqs.map((faq, index) => {
                const isOpenFaq = activeFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpenFaq ? null : index)}
                      className="w-full p-3 text-left flex items-center justify-between gap-2 text-xs font-semibold text-white hover:bg-slate-800/40 transition-colors cursor-pointer"
                    >
                      <span className="text-slate-200">{faq.q}</span>
                      {isOpenFaq ? (
                        <ChevronUp className="w-4 h-4 text-indigo-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isOpenFaq && (
                      <div className="px-3 pb-3 pt-1 text-xs text-slate-300 border-t border-slate-800/60 leading-relaxed whitespace-pre-line bg-slate-900/40">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Smart Study Tutorial Progressive Web App</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition-colors cursor-pointer"
            >
              Continue in Browser
            </button>
            {!isStandalone && (
              <button
                onClick={handleInstallClick}
                className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Install Now</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
