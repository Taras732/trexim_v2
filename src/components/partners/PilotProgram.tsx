'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/LanguageContext'

export default function PilotProgram() {
  const { t } = useLanguage()

  const stages = ['stage1', 'stage2', 'stage3']

  return (
    <section className="relative py-16 md:py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {t.partners.pilot.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t.partners.pilot.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {stages.map((stageKey, index) => {
            const stage = t.partners.pilot.stages[stageKey as keyof typeof t.partners.pilot.stages]
            return (
              <motion.div
                key={stageKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connection line (desktop) */}
                {index < stages.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-orange-500 to-transparent -ml-4 z-0"></div>
                )}

                <div className="relative bg-white p-8 rounded-3xl border-2 border-slate-200 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl group h-full">
                  {/* Stage number badge */}
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 text-white text-xl font-bold rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {stage.number}
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-slate-900 mb-6 leading-tight">
                    {stage.title}
                  </h3>

                  <ul className="space-y-3">
                    {stage.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-600 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
