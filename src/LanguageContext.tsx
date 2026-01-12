'use client'
import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react'
import en from '@/locales/en.json'
import uk from '@/locales/uk.json'

type Language = 'en' | 'uk'
type Translations = typeof en

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Language, Translations> = {
  en,
  uk,
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    // Initialize language from localStorage or browser after hydration
    try {
      const saved = localStorage.getItem('language')
      if (saved === 'en' || saved === 'uk') {
        setLanguageState(saved as Language)
      } else if (typeof navigator !== 'undefined' && navigator.language && navigator.language.startsWith('uk')) {
        setLanguageState('uk')
      }
    } catch {
      // fallback to default 'en'
    }
  }, [])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem('language', lang)
    } catch {
      // ignore write errors
    }
  }, [])

  const value = useMemo(() => ({
    language,
    setLanguage,
    t: translations[language],
  }), [language, setLanguage])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
