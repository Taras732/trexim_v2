'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/LanguageContext'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const { t, language, setLanguage } = useLanguage()
  const pathname = usePathname()
  const isPartnersPage = pathname === '/partners'
  const isToolsPage = pathname === '/tools'
  const isPricingPage = pathname === '/pricing'
  const isContactPage = pathname === '/contact'
  const isAboutPage = pathname === '/about'
  const isBlogPage = pathname === '/blog'

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
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 cursor-pointer"
                aria-label="Go to homepage"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                  T
                </div>
                <span className="text-white font-bold text-xl hidden sm:block">
                  Trexim
                </span>
              </motion.div>
            </Link>
          </div>
          {/* Navigation */}
          <nav className="flex items-center gap-1 sm:gap-6" aria-label="Main navigation">
            {/* Tools link */}
            <Link href="/tools">
              <motion.div
                className={`relative text-sm sm:text-base px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 hover:bg-slate-800/50 ${
                  isToolsPage ? 'text-blue-400 font-semibold' : 'text-white'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {t.header.tools}
              </motion.div>
            </Link>

            {/* Partners link */}
            <Link href="/partners">
              <motion.div
                className={`relative text-sm sm:text-base px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 hover:bg-slate-800/50 ${
                  isPartnersPage ? 'text-orange-400 font-semibold' : 'text-white'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {t.header.partners}
              </motion.div>
            </Link>

            {/* Pricing link */}
            <Link href="/pricing">
              <motion.div
                className={`relative text-sm sm:text-base px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 hover:bg-slate-800/50 ${
                  isPricingPage ? 'text-blue-400 font-semibold' : 'text-white'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {t.header.pricing}
              </motion.div>
            </Link>

            {/* Contact link */}
            <Link href="/contact">
              <motion.div
                className={`relative text-sm sm:text-base px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 hover:bg-slate-800/50 ${
                  isContactPage ? 'text-blue-400 font-semibold' : 'text-white'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {t.header.contact}
              </motion.div>
            </Link>

            {/* About link */}
            <Link href="/about">
              <motion.div
                className={`relative text-sm sm:text-base px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 hover:bg-slate-800/50 ${
                  isAboutPage ? 'text-blue-400 font-semibold' : 'text-white'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {t.header.about}
              </motion.div>
            </Link>

            {/* Blog link */}
            <Link href="/blog">
              <motion.div
                className={`relative text-sm sm:text-base px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 hover:bg-slate-800/50 ${
                  isBlogPage ? 'text-blue-400 font-semibold' : 'text-white'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {t.header.blog}
              </motion.div>
            </Link>

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
            <Link href="/demo">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg font-semibold text-white text-xs sm:text-sm hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                aria-label="Get started with Trexim"
              >
                {t.header.getStarted}
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
