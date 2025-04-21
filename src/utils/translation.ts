"use client";
import { useContext, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';

// Simple translation function that uses the language context
export const useAppTranslation = () => {
  const { language } = useLanguage();
  
  // Cache translations to avoid reloading them on every render
  const translations = useMemo(() => {
    try {
      // Dynamically import the translation file based on the current language
      return require(`../../public/locales/${language}/common.json`);
    } catch (error) {
      console.error(`Failed to load translations for language "${language}":`, error);
      // Fallback to English if the requested language file can't be loaded
      try {
        return require('../../public/locales/en/common.json');
      } catch (fallbackError) {
        console.error('Failed to load fallback translations:', fallbackError);
        return {};
      }
    }
  }, [language]);
  
  // Function to get translations based on the current language
  const t = (key: string, replacements?: Record<string, string>) => {
    try {
      // Split the key by dots to access nested properties
      const keys = key.split('.');
      
      // Access the nested property using the keys
      let result = translations;
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          // If the key doesn't exist, return the key itself
          return key;
        }
      }
      
      // If the result is a string and we have replacements, apply them
      if (typeof result === 'string' && replacements) {
        return Object.entries(replacements).reduce(
          (text, [key, value]) => text.replace(new RegExp(`{{${key}}}`, 'g'), value),
          result
        );
      }
      
      return result || key;
    } catch (error) {
      // If there's an error, return the key itself
      console.error(`Translation error for key "${key}":`, error);
      return key;
    }
  };
  
  return { t, language };
};
