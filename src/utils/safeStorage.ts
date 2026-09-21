// Bulletproof storage wrapper that never throws in restricted mobile browsers
// (e.g. Safari Private Browsing, iOS WebViews, Telegram/WhatsApp in-app browsers)

const inMemoryStore: Record<string, string> = {};

export const safeSessionStorage = {
  getItem: (key: string): string | null => {
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        return window.sessionStorage.getItem(key);
      }
    } catch {
      // Storage access blocked or restricted
    }
    return inMemoryStore[key] || null;
  },

  setItem: (key: string, value: string): void => {
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        window.sessionStorage.setItem(key, value);
        return;
      }
    } catch {
      // Storage access blocked or restricted
    }
    inMemoryStore[key] = value;
  },

  removeItem: (key: string): void => {
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        window.sessionStorage.removeItem(key);
      }
    } catch {
      // Storage access blocked or restricted
    }
    delete inMemoryStore[key];
  }
};
