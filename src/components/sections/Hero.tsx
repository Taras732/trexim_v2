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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setValidationError(t.hero.validation)
      return
    }
    
    setValidationError('')
    setIsLoading(true)
    
    setTimeout(() => {
      setMessage(t.hero.success)
      setEmail('')
      setIsLoading(false)
    }, 1000)
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden" id="hero">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 -z-10" />
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-white"
        >
          {t.hero.title.split(' ').map((word, i) => {
            if (word === 'Neural' || word === 'Connect') {
              return (
                <span key={i} className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {word}{' '}
                </span>
              )
            }
            return <span key={i}>{word} </span>
          })}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-12"
        >
          <input
            type="email"
            placeholder={t.hero.placeholder}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setValidationError('')
            }}
            className="flex-1 px-5 py-3 rounded-lg bg-slate-800/60 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-50 whitespace-nowrap"
          >
            {isLoading ? 'Sending...' : t.hero.cta}
          </button>
        </motion.form>
        {validationError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 text-sm mb-4 flex items-center justify-center gap-2"
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
          >
            {message}
          </motion.p>
        )}
      </div>
    </section>
  )
}
