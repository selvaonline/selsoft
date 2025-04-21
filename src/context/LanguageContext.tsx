"use client";
import React, { createContext, useState, useContext, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

type Language = 'en' | 'es' | 'fr' | 'ko' | 'bn';

type LanguageContextType = {
  language: Language;
  changeLanguage: (lang: Language) => void;
  languageNames: Record<Language, string>;
};

const languageNames: Record<Language, string> = {
  en: 'English',
  es: 'Spanish',
  fr: 'French',
  ko: 'Korean',
  bn: 'Bangla'
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Set initial language based on browser locale or saved preference
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && Object.keys(languageNames).includes(savedLanguage)) {
        setLanguage(savedLanguage);
      } else {
        const browserLang = navigator.language.split('-')[0] as Language;
        if (Object.keys(languageNames).includes(browserLang)) {
          setLanguage(browserLang);
        }
      }
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
    // In App Router, we don't change the URL for language changes
    // Instead, we rely on the context to provide translations
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, languageNames }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
