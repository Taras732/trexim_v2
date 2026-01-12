'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/LanguageContext'

export default function PartnerTypes() {
  const { t } = useLanguage()

  const types = ['banks', 'insurance', 'fuel', 'edo', 'legal', 'tech']

  return (
    <section className="relative py-16 md:py-20 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-[1.2]">
            {t.partners.partnerTypes.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.partners.partnerTypes.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {types.map((type, index) => {
            const partnerType = t.partners.partnerTypes.types[type as keyof typeof t.partners.partnerTypes.types]
            return (
              <motion.div
                key={type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-orange-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  {partnerType.icon}
                </div>

                <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">
                  {partnerType.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {partnerType.benefit}
                </p>

                {/* Decorative element */}
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
