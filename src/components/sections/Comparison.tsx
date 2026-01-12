'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/LanguageContext'

export default function Comparison() {
  const { t } = useLanguage()

  const cards = [
    {
      icon: '📋',
      key: 'ettn' as const,
    },
    {
      icon: '💡',
      key: 'transparency' as const,
    },
    {
      icon: '🤖',
      key: 'automation' as const,
    },
    {
      icon: '🎯',
      key: 'platform' as const,
    },
  ]

  return (
    <section id="comparison" className="relative py-16 md:py-20 px-6 bg-gradient-to-b from-[#f3f0fa] to-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#131311] mb-4 leading-[1.2]">
            {t.comparison.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.comparison.subtitle}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((card, index) => {
            const cardData = t.comparison.cards[card.key]
            return (
              <motion.div
                key={card.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group p-8 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#f84100] transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              >
                {/* Icon */}
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl md:text-2xl font-bold text-[#131311] mb-4 leading-tight">
                  {cardData.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                  {cardData.description}
                </p>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f84100]/10 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-[#f84100]"></div>
                  <span className="text-xs font-bold text-[#f84100]">{cardData.badge}</span>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#f84100] to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
