'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [validationError, setValidationError] = useState('')

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setValidationError(t.hero.validation)
      return
    }

    if (!validateEmail(email)) {
      setValidationError('Please enter a valid email address')
      return
    }

    setValidationError('')
    setIsLoading(true)

    // TODO: Replace with actual API call
    setTimeout(() => {
      setMessage(t.hero.success)
      setEmail('')
      setIsLoading(false)
    }, 1000)
  }

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 pt-24 relative overflow-hidden bg-[#131311]"
      id="hero"
      aria-labelledby="hero-title"
    >
      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a18] via-[#131311] to-[#0f0f0e] -z-10" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#f84100]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#f84100]/3 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight"
        >
          <span className="block text-white mb-2">
            {t.hero.title.split('AI')[0]}
          </span>
          <span className="block text-[#f84100]">
            AI {t.hero.title.split('AI')[1]}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-[#f3f0fa]/80 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-8"
          aria-label="Early access signup form"
        >
          <input
            type="email"
            placeholder={t.hero.placeholder}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setValidationError('')
            }}
            className="flex-1 px-6 py-4 rounded-xl bg-[#1a1a18] border-2 border-[#2a2a28] text-white placeholder-[#666] focus:outline-none focus:border-[#f84100] transition-all"
            aria-label="Email address"
            aria-required="true"
            aria-invalid={!!validationError}
            aria-describedby={validationError ? 'email-error' : undefined}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-10 py-4 bg-[#f84100] rounded-xl font-bold text-white hover:bg-[#e63900] transition-all duration-300 disabled:opacity-50 whitespace-nowrap hover:scale-[1.02] shadow-lg hover:shadow-[#f84100]/50"
            aria-label="Submit email for early access"
          >
            {isLoading ? 'Sending...' : t.hero.cta}
          </button>
        </motion.form>

        {validationError && (
          <motion.div
            id="email-error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 text-sm mb-4 flex items-center justify-center gap-2"
            role="alert"
            aria-live="polite"
          >
            <span className="text-lg">⚠️</span>
            {validationError}
          </motion.div>
        )}
        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 text-sm"
            role="status"
            aria-live="polite"
          >
            {message}
          </motion.p>
        )}
      </div>
    </section>
  )
}
