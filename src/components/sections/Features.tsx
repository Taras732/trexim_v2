'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

interface RoleCard {
  icon: string
  title: string
  subtitle: string
  description: string
  features: string[]
  bgGradient: string
  borderColor: string
}

export default function DesignedForEveryRole() {
  const roles: RoleCard[] = [
    {
      icon: '🚚',
      title: 'Перевізникам',
      subtitle: 'Carriers & Drivers',
      description: 'Maximize fleet efficiency and get paid faster.',
      features: [
        'Route optimization',
        'Fast payments & fuel programs',
        'Verified shippers only',
      ],
      bgGradient: 'from-slate-800 to-slate-800',
      borderColor: 'border-slate-700',
    },
    {
      icon: '🏢',
      title: 'Бізнесу',
      subtitle: 'Shippers & Companies',
      description: 'Total control over your supply chain.',
      features: [
        '24/7 Supply chain transparency',
        'Automated security checks',
        'Cost reduction with AI',
      ],
      bgGradient: 'from-purple-600 to-blue-600',
      borderColor: 'border-purple-500',
    },
    {
      icon: '🏦',
      title: 'Партнерам',
      subtitle: 'Banks, Insurance & Legal',
      description: 'Banks, Insurance & Legal partners.',
      features: [
        'Verified client pool',
        'Minimal risk (KEP Signatures)',
        'New sales channels',
      ],
      bgGradient: 'from-slate-800 to-slate-800',
      borderColor: 'border-slate-700',
    },
  ]

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 -z-10" />

      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Designed for</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Every Role
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Whether you drive, ship, or finance, Trexim optimizes your workflow.
          </p>
        </motion.div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group rounded-3xl p-8 min-h-[450px] flex flex-col justify-between backdrop-blur-md border ${role.borderColor} bg-gradient-to-br ${role.bgGradient} overflow-hidden transition-all duration-300 hover:shadow-2xl`}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent)]"></div>
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-6xl mb-6">{role.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {role.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4">{role.subtitle}</p>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-8">
                  {role.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  {role.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
