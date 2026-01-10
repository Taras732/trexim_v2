'use client'

import { motion } from 'framer-motion'

export default function Comparison() {
  const cards = [
    {
      number: '70%',
      title: 'Automation',
      description: 'AI handles operational tasks (invoices, matching), freeing your team for strategic growth. Like a superpower for logistics.',
      badge: 'AI Autopilot: ON',
      badgeColor: 'bg-green-500',
      bgGradient: 'from-slate-800 to-slate-800',
      borderColor: 'border-slate-700',
    },
    {
      icon: '🛡️',
      title: 'Digital Integrity',
      description: 'Access the power of 100% verified KEP signatures. Zero manipulation.',
      button: 'Try to Fake it (Impossible)',
      bgGradient: 'from-purple-600 to-blue-600',
      borderColor: 'border-purple-500',
    },
    {
      icon: '⚡',
      title: 'Instant Sync',
      description: 'Banks & Carriers in one loop.',
      bgGradient: 'from-slate-800 to-slate-800',
      borderColor: 'border-slate-700',
    },
    {
      icon: '⚡',
      title: 'The New Standard for Logistics',
      description: 'Lightweight, high-speed, and secure.',
      button: 'Learn more →',
      bgGradient: 'from-emerald-500 to-teal-500',
      borderColor: 'border-emerald-400',
    },
  ]

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 -z-10" />

      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="text-white">Old Logistics vs</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Trexim World
            </span>
          </h2>
        </motion.div>

        {/* Cards Grid - 4 в одному ряду */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group rounded-3xl p-8 min-h-[380px] flex flex-col justify-between backdrop-blur-md border ${card.borderColor} bg-gradient-to-br ${card.bgGradient} overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105`}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent)]"></div>
              </div>

              <div className="relative z-10">
                {/* Icon or Number */}
                {card.number && (
                  <div className="text-6xl font-bold text-white mb-2">{card.number}</div>
                )}
                {card.icon && (
                  <div className="text-5xl mb-4">{card.icon}</div>
                )}

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Badge or Button */}
              <div className="relative z-10 mt-6">
                {card.badge && (
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${card.badgeColor} animate-pulse`}></div>
                    <span className="text-xs text-slate-300">{card.badge}</span>
                  </div>
                )}

                {card.button && (
                  <button className="mt-4 px-5 py-2 bg-white/15 hover:bg-white/25 text-white font-semibold text-sm rounded-full border border-white/20 transition-all duration-300">
                    {card.button}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
