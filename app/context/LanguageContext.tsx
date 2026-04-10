'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('summit-lang', lang);
      document.documentElement.lang = lang;
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem('summit-lang');
    if (stored === 'en' || stored === 'es') {
      setLanguageState(stored);
      document.documentElement.lang = stored;
      return;
    }
    const navLang = navigator.language.toLowerCase();
    if (navLang.startsWith('es')) {
      setLanguageState('es');
      document.documentElement.lang = 'es';
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
