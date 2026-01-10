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
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Load language from localStorage on mount
    const savedLanguage = localStorage.getItem('language') as Language | null
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'uk')) {
      setLanguageState(savedLanguage)
    } else {
      // Detect browser language
      const browserLang = navigator.language.startsWith('uk') ? 'uk' : 'en'
      setLanguageState(browserLang)
    }
    setMounted(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  if (!mounted) {
    return <>{children}</>
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
