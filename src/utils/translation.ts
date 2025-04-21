"use client";
import { useContext } from 'react';
import { useLanguage } from '../context/LanguageContext';

// Simple translation function that uses the language context
export const useAppTranslation = () => {
  const { language } = useLanguage();
  
  // Function to get translations based on the current language
  const t = (key: string) => {
    try {
      // Split the key by dots to access nested properties
      const keys = key.split('.');
      
      // Dynamically import the translation file based on the current language
      const translations = require(`../../public/locales/${language}/common.json`);
      
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
      
      return result || key;
    } catch (error) {
      // If there's an error (e.g., translation file not found), return the key itself
      console.error(`Translation error for key "${key}":`, error);
      return key;
    }
  };
  
  return { t };
};
