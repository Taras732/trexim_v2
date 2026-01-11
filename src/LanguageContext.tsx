'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
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
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Initialize language from localStorage or browser after hydration
    try {
      const saved = localStorage.getItem('language') as Language | null
      if (saved === 'en' || saved === 'uk') {
        setLanguageState(saved)
      } else if (typeof navigator !== 'undefined' && navigator.language.startsWith('uk')) {
        setLanguageState('uk')
      }
    } catch {
      // fallback to default 'en'
    }
    setIsInitialized(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem('language', lang)
    } catch {
      // ignore write errors
    }
  }

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      t: translations[language],
    }}>
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
