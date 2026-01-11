'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/LanguageContext'

export default function Comparison() {
  const { t } = useLanguage()

  const cards = [
    {
      icon: '📋',
      key: 'ettn',
      bgGradient: 'from-orange-600 to-red-600',
      borderColor: 'border-orange-500',
      badgeColor: 'bg-orange-500',
    },
    {
      icon: '🌅',
      key: 'transparency',
      bgGradient: 'from-blue-600 to-cyan-600',
      borderColor: 'border-blue-500',
      badgeColor: 'bg-blue-500',
    },
    {
      icon: '🌐',
      key: 'standards',
      bgGradient: 'from-green-600 to-emerald-600',
      borderColor: 'border-green-500',
      badgeColor: 'bg-green-500',
    },
    {
      icon: '🤖',
      key: 'automation',
      bgGradient: 'from-purple-600 to-violet-600',
      borderColor: 'border-purple-500',
      badgeColor: 'bg-purple-500',
    },
  ]

  return (
    <section id="comparison" className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
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
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {t.comparison.title}
            </span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl">
            {t.comparison.subtitle}
          </p>
        </motion.div>

        {/* Cards Grid - 4 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const cardData = t.comparison.cards[card.key]
            return (
              <motion.div
                key={card.key}
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
                  {/* Icon */}
                  <div className="text-5xl mb-4">{card.icon}</div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                    {cardData.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-100 text-sm leading-relaxed">
                    {cardData.description}
                  </p>
                </div>

                {/* Badge */}
                <div className="relative z-10 mt-6">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${card.badgeColor} animate-pulse`}></div>
                    <span className="text-xs text-slate-100 font-semibold">{cardData.badge}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
