'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/LanguageContext'

export default function DesignedForEveryRole() {
  const { t } = useLanguage()

  const roles = [
    {
      icon: '🚚',
      key: 'carriers' as const,
    },
    {
      icon: '🏢',
      key: 'shippers' as const,
    },
    {
      icon: '🏭',
      key: 'logistics' as const,
    },
  ]

  return (
    <section id="features" className="relative py-16 md:py-20 px-6 bg-[#131311]">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#f84100]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#f84100]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-[1.2]">
            {t.features.title}
          </h2>
          <p className="text-lg text-[#f3f0fa]/70 max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </motion.div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role, index) => {
            const roleData = t.features.roles[role.key]
            return (
              <motion.div
                key={role.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group p-8 rounded-2xl bg-[#1a1a18] border-2 border-[#2a2a28] hover:border-[#f84100] transition-all duration-300 hover:shadow-xl hover:shadow-[#f84100]/20"
              >
                {/* Icon */}
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {role.icon}
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                  {roleData.title}
                </h3>

                {/* Description */}
                <p className="text-[#f3f0fa]/70 text-sm md:text-base leading-relaxed mb-6">
                  {roleData.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  {roleData.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#f84100] mt-2 flex-shrink-0"></div>
                      <span className="text-[#f3f0fa]/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Decorative element */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f84100] to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
