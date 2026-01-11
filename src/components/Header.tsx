'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/LanguageContext'

export default function Header() {
  const { t, language, setLanguage } = useLanguage()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/95 border-b border-slate-800/50"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2 cursor-pointer bg-none border-none"
              aria-label="Go to homepage"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                T
              </div>
              <span className="text-white font-bold text-xl hidden sm:block">
                Trexim
              </span>
            </motion.button>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-1 sm:gap-8" aria-label="Main navigation">
            {[
              { label: t.header.comparison, id: 'comparison' },
              { label: t.header.features, id: 'features' },
              { label: t.header.ecosystem, id: 'ecosystem' },
              { label: t.header.tools, id: 'tools' },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-sm sm:text-base text-white px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950"
                whileHover={{ scale: 1.05 }}
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
                {language === 'en' ? (
                  <span className="absolute inset-0 rounded-lg border-2 border-transparent hover:border-cyan-400/50"></span>
                ) : null}
              </motion.button>
            ))}
          </nav>

          {/* Language Switcher & CTA */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language Toggle */}
            <div className="flex items-center bg-slate-800/50 rounded-lg p-1" role="group" aria-label="Language selection">
              {['en', 'uk'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang as 'en' | 'uk')}
                  className={`px-3 py-1 rounded text-xs sm:text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${language === lang
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:text-white'
                    }`}
                  aria-label={`Switch to ${lang === 'en' ? 'English' : 'Ukrainian'}`}
                  aria-pressed={language === lang}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('hero')}
              className="px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg font-semibold text-white text-xs sm:text-sm hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              aria-label="Get started with Trexim"
            >
              {t.header.getStarted}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
