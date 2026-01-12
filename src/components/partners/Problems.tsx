'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/LanguageContext'

export default function Problems() {
  const { t } = useLanguage()

  const problems = [
    { key: 'shadow', color: 'from-slate-800 to-slate-900' },
    { key: 'ettn', color: 'from-slate-700 to-slate-800' },
    { key: 'fragmented', color: 'from-slate-800 to-slate-900' },
    { key: 'ai', color: 'from-slate-700 to-slate-800' },
  ]

  return (
    <section className="relative py-16 md:py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-10 max-w-4xl mx-auto text-center leading-[1.2]"
        >
          {t.partners.problems.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((problem, index) => {
            const card = t.partners.problems.cards[problem.key as keyof typeof t.partners.problems.cards]
            return (
              <motion.div
                key={problem.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-10 rounded-2xl bg-gradient-to-br ${problem.color} text-white overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}
              >
                {/* Decorative number */}
                <div className="absolute top-6 right-6 text-7xl font-bold opacity-10">
                  {card.number}
                </div>

                <div className="relative z-10">
                  <div className="text-orange-400 text-base font-bold mb-4">
                    {card.number}
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold leading-tight">
                    {card.title}
                  </h3>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
