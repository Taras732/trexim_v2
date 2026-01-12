'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/LanguageContext'
import Link from 'next/link'

export default function PricingPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#131311] via-[#1a1a18] to-[#131311]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#f84100]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#f84100]/3 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {t.pricing.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-[#f3f0fa]/80 max-w-3xl mx-auto"
          >
            {t.pricing.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Pilot Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#1a1a18] border-2 border-[#f84100] rounded-2xl p-8 md:p-12 mb-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="text-5xl">💎</div>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
                  {t.pricing.pilot.title}
                </h2>
                <p className="text-[#f3f0fa]/80 text-base md:text-lg leading-relaxed">
                  {t.pricing.pilot.description}
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {Object.entries(t.pricing.pilot.features).map(([key, feature]) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-[#131311] border border-[#2a2a28] rounded-xl p-6"
                >
                  <h3 className="text-white font-bold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#f3f0fa]/70 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              {t.pricing.stages.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['stage1', 'stage2', 'stage3'].map((stageKey, index) => {
                const stage = t.pricing.stages[stageKey as 'stage1' | 'stage2' | 'stage3']
                return (
                  <motion.div
                    key={stageKey}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[#1a1a18] border-2 border-[#2a2a28] hover:border-[#f84100] transition-all duration-300 rounded-2xl p-8"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#f84100]/10 border-2 border-[#f84100] flex items-center justify-center">
                        <span className="text-[#f84100] font-bold">{stage.number}</span>
                      </div>
                      <div className="text-xs text-[#f84100] font-semibold bg-[#f84100]/10 px-3 py-1 rounded-full">
                        {stage.duration}
                      </div>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-white mb-4">
                      {stage.title}
                    </h3>

                    <div className="space-y-3">
                      {stage.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#f84100] mt-2 flex-shrink-0"></div>
                          <span className="text-[#f3f0fa]/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Future Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1a1a18] to-[#131311] border border-[#2a2a28] rounded-2xl p-8 md:p-12"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
              {t.pricing.future.title}
            </h2>
            <p className="text-[#f3f0fa]/80 text-base md:text-lg leading-relaxed mb-6">
              {t.pricing.future.description}
            </p>

            <div className="space-y-3">
              {t.pricing.future.principles.map((principle, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#f84100] mt-2 flex-shrink-0"></div>
                  <span className="text-[#f3f0fa]/80 text-base">{principle}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              {t.pricing.cta.title}
            </h2>
            <Link href="/demo">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-10 py-4 bg-[#f84100] rounded-xl font-bold text-white hover:bg-[#e63900] transition-all duration-300 whitespace-nowrap hover:scale-[1.02] shadow-lg hover:shadow-[#f84100]/50"
              >
                {t.pricing.cta.button}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
