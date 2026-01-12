'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/LanguageContext'

export default function MarketData() {
  const { t } = useLanguage()

  return (
    <section className="relative py-16 md:py-20 px-6 bg-slate-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold mb-16 text-center max-w-4xl mx-auto leading-tight"
        >
          {t.partners.market.title}
        </motion.h2>

        {/* Market segments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* TAM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700"
          >
            <div className="text-xs font-bold text-orange-400 mb-2 tracking-wider">TAM</div>
            <div className="font-heading text-4xl font-bold mb-4 text-white">
              {t.partners.market.tam.value}
            </div>
            <div className="text-sm text-slate-300 mb-2">
              {t.partners.market.tam.label}
            </div>
            <div className="text-xs text-slate-500">
              {t.partners.market.tam.description}
            </div>
          </motion.div>

          {/* SAM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-3xl shadow-xl"
          >
            <div className="text-xs font-bold text-orange-100 mb-2 tracking-wider">SAM</div>
            <div className="font-heading text-4xl font-bold mb-4 text-white">
              {t.partners.market.sam.value}
            </div>
            <div className="text-sm text-orange-50">
              {t.partners.market.sam.label}
            </div>
          </motion.div>

          {/* SOM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700"
          >
            <div className="text-xs font-bold text-orange-400 mb-2 tracking-wider">SOM</div>
            <div className="font-heading text-4xl font-bold mb-4 text-white">
              {t.partners.market.som.value}
            </div>
            <div className="text-sm text-slate-300">
              {t.partners.market.som.label}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6 mb-8"
        >
          <div className="flex-1 bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
            <div className="font-heading text-3xl font-bold text-orange-400 mb-2">36%</div>
            <div className="text-sm text-slate-300">{t.partners.market.stats.transport}</div>
          </div>
          <div className="flex-1 bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
            <div className="font-heading text-3xl font-bold text-orange-400 mb-2">70%</div>
            <div className="text-sm text-slate-300">{t.partners.market.stats.shadow}</div>
          </div>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-sm text-slate-400 text-center max-w-4xl mx-auto leading-relaxed"
        >
          {t.partners.market.note}
        </motion.p>
      </div>
    </section>
  )
}
