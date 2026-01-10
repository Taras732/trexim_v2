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
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden bg-slate-950">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-slate-950 to-cyan-600/20 -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-3xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-block"
        >
          <span className="px-4 py-2 rounded-full bg-slate-800/60 border border-blue-500/30 text-blue-300 text-sm font-medium inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            ✨ Trusted by 200+ Logistics Leaders
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">The </span>
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Neural Connect
          </span>
          <span className="text-white"> for </span>
          <span className="text-white">Global Logistics</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Automate 70% of routine operations. Unite shippers, carriers, and banks in one trusted digital ecosystem driven by AI.
        </motion.p>

        {/* CTA Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-12"
        >
          <input
            type="email"
            placeholder="Enter business email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-5 py-4 rounded-lg bg-slate-800/80 border border-slate-700/50 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/30 transition-all"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-white hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-50 whitespace-nowrap"
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
