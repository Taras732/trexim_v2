'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Імітація відправки (заміни на реальний API)
    setTimeout(() => {
      setMessage('✓ Success! Check your email.')
      setEmail('')
      setIsLoading(false)
    }, 1000)
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-cyan-600/10 -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        {/*
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium">
            ✨ Trusted by 200+ Logistics Leaders
          </span>
        </motion.div>
        */}

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-cyan-300 bg-clip-text text-transparent"
        >
          The Neural Connect for Global Logistics
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Automate 70% of routine operations. Unite shippers, carriers, and banks in one trusted digital ecosystem driven by AI.
        </motion.p>

        {/* CTA Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-12"
        >
          <input
            type="email"
            placeholder="your@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-5 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 disabled:opacity-50"
          >
            {isLoading ? 'Sending...' : 'Get Early Access'}
          </button>
        </motion.form>

        {/* Success message */}
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
