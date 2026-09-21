import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, HelpCircle } from 'lucide-react';
import { safeSessionStorage } from '../utils/safeStorage';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

interface PWAInstallBannerProps {
  onOpenInstallModal: () => void;
  deferredPrompt: BeforeInstallPromptEvent | null;
}

export const PWAInstallBanner: React.FC<PWAInstallBannerProps> = ({
  onOpenInstallModal,
  deferredPrompt
}) => {
  const [isStandalone, setIsStandalone] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if running standalone
    let isRunningStandalone = false;
    try {
      isRunningStandalone =
        (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(display-mode: standalone)')?.matches) ||
        (typeof window !== 'undefined' && (window.navigator as unknown as { standalone?: boolean })?.standalone === true);
    } catch {
      isRunningStandalone = false;
    }
    setIsStandalone(isRunningStandalone);

    const dismissed = safeSessionStorage.getItem('pwa_banner_dismissed') === 'true';
    if (dismissed) {
      setIsDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    safeSessionStorage.setItem('pwa_banner_dismissed', 'true');
  };

  // If running in standalone mode or dismissed for this session, hide the banner
  if (isStandalone || isDismissed) {
    return null;
  }

  return (
    <div
      id="pwa-install-banner"
      className="bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 border-b border-indigo-500/30 px-3 sm:px-4 py-2 text-xs text-slate-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2.5">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0 shadow-md shadow-indigo-600/30 text-white">
            <Smartphone className="w-4 h-4" />
          </div>
          <div className="truncate">
            <span className="font-semibold text-white">Install Smart Study Tutorial</span>
            <span className="text-slate-400 hidden sm:inline ml-1.5">
              • Practice questions & study revision notes offline anytime
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            id="banner-install-questions-btn"
            onClick={onOpenInstallModal}
            className="hidden xs:inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors text-xs font-medium cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
            <span>Questions & FAQ</span>
          </button>

          <button
            id="install-pwa-banner-btn"
            onClick={onOpenInstallModal}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors shadow-sm cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Install App</span>
          </button>

          <button
            onClick={handleDismiss}
            className="p-1 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
            title="Dismiss banner"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
