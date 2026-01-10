'use client'

import { motion } from 'framer-motion'

interface Step {
  number: number
  title: string
  description: string
  icon: string
}

export default function HowItWorks() {
  const steps: Step[] = [
    {
      number: 1,
      title: 'Connect',
      description: 'Integrate your logistics operations with Trexim\'s Neural Core',
      icon: '🔌',
    },
    {
      number: 2,
      title: 'Automate',
      description: 'Let AI handle 70% of routine operational tasks',
      icon: '⚙️',
    },
    {
      number: 3,
      title: 'Optimize',
      description: 'Get real-time insights and predictive analytics',
      icon: '📊',
    },
    {
      number: 4,
      title: 'Scale',
      description: 'Grow your logistics operations with confidence',
      icon: '🚀',
    },
  ]

  return (
    <section className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            Simple 4-step process to transform your logistics
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 h-full">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="absolute top-6 right-6 w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
