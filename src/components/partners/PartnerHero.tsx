'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/LanguageContext'

export default function PartnerHero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-slate-900/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-[1.1]">
            <span className="block text-slate-900">
              {t.partners.hero.title.split(' ').slice(0, 3).join(' ')}
            </span>
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mt-2">
              {t.partners.hero.title.split(' ').slice(3).join(' ')}
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {t.partners.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="px-10 py-4 bg-orange-500 text-white text-base font-semibold rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl">
            {t.partners.hero.cta}
          </button>
          <button className="px-10 py-4 bg-white text-slate-900 text-base font-semibold rounded-full border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 hover:scale-[1.02]">
            {t.partners.hero.contact}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
