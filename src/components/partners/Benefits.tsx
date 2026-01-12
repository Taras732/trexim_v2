'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/LanguageContext'

export default function Benefits() {
  const { t } = useLanguage()

  const benefits = [
    { key: 'access', gradient: 'from-orange-500 to-orange-600' },
    { key: 'growth', gradient: 'from-slate-700 to-slate-900' },
    { key: 'clients', gradient: 'from-orange-500 to-orange-600' },
    { key: 'integration', gradient: 'from-slate-700 to-slate-900' },
  ]

  return (
    <section className="relative py-16 md:py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-10 text-center"
        >
          {t.partners.benefits.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => {
            const card = t.partners.benefits.cards[benefit.key as keyof typeof t.partners.benefits.cards]
            return (
              <motion.div
                key={benefit.key}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-10 rounded-3xl bg-gradient-to-br ${benefit.gradient} text-white overflow-hidden group hover:scale-105 transition-all duration-300`}
              >
                {/* Large number background */}
                <div className="absolute -top-4 -right-4 text-9xl font-bold opacity-10">
                  {card.number}
                </div>

                <div className="relative z-10">
                  <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
                    {card.number}
                  </div>

                  <h3 className="font-heading text-2xl md:text-3xl font-bold leading-tight">
                    {card.title}
                  </h3>
                </div>

                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
