'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/LanguageContext'

export default function Solution() {
  const { t } = useLanguage()

  return (
    <section className="relative py-16 md:py-20 px-6 bg-slate-900 text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-[1.2]"
        >
          {t.partners.solution.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto"
        >
          {t.partners.solution.subtitle}
        </motion.p>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Participants */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300"
          >
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-lg font-bold mb-3 text-orange-400">Всі зацікавлені</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t.partners.solution.features.participants}
            </p>
          </motion.div>

          {/* Data */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300"
          >
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-lg font-bold mb-3 text-orange-400">Trexim фіксує</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t.partners.solution.features.data}
            </p>
          </motion.div>

          {/* AI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300"
          >
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-lg font-bold mb-3 text-orange-400">Аналітика ШІ</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t.partners.solution.features.ai}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
