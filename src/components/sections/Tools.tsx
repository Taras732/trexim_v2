'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

interface Tool {
  id: string
  icon: string
  title: string
  subtitle: string
  description: string
  fields: Array<{
    label: string
    placeholder: string
    icon: string
  }>
  image?: string
  cta: string
}

export default function SmartLogisticsTools() {
  const [activeTool, setActiveTool] = useState<string>('route-optimizer')

  const tools: Tool[] = [
    {
      id: 'route-optimizer',
      icon: '🗺️',
      title: 'Route Optimizer',
      subtitle: 'AI Traffic & Weather',
      description: 'Calculate optimal routes considering real-time traffic, weather, and road restrictions.',
      fields: [
        { label: 'ORIGIN', placeholder: 'Kyiv', icon: '📍' },
        { label: 'DESTINATION', placeholder: 'Warsaw', icon: '🏁' },
        { label: 'SHIPMENT TYPE', placeholder: 'Full Truck Load (FTL)', icon: '📦' },
      ],
      image: '🗺️',
      cta: 'Run Analysis',
    },
    {
      id: 'cost-estimator',
      icon: '📊',
      title: 'Cost Estimator',
      subtitle: 'Pricing & Savings',
      description: 'Get accurate cost estimates based on route, distance, and current market rates.',
      fields: [
        { label: 'ORIGIN', placeholder: 'Kyiv', icon: '📍' },
        { label: 'DESTINATION', placeholder: 'Warsaw', icon: '🏁' },
        { label: 'CARGO WEIGHT', placeholder: '20 tons', icon: '⚖️' },
      ],
      image: '💰',
      cta: 'Calculate Cost',
    },
    {
      id: 'finance-hub',
      icon: '💳',
      title: 'Finance Hub',
      subtitle: '0% Fee Settlements',
      description: 'Manage payments, settlements, and financial operations with zero transaction fees.',
      fields: [
        { label: 'ACCOUNT TYPE', placeholder: 'Business', icon: '🏦' },
        { label: 'AMOUNT', placeholder: '10,000 USD', icon: '💵' },
        { label: 'SETTLEMENT DATE', placeholder: 'Immediate', icon: '📅' },
      ],
      image: '💳',
      cta: 'Process Payment',
    },
  ]

  const currentTool = tools.find((t) => t.id === activeTool) || tools[0]

  return (
    <section id="tools" className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 -z-10" />
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-purple-600/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white">Smart Logistics</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Tools
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto px-4">
            Experience the power of Trexim AI algorithms. Optimize routes, estimate costs, and handle finances instantly.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left: Tool Selection */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="rounded-2xl p-6 bg-slate-800/40 border border-slate-700/40 backdrop-blur-sm">
              <p className="text-slate-400 text-xs font-semibold mb-6 uppercase tracking-wider">
                SELECT MODULE
              </p>

              <div className="space-y-3">
                {tools.map((tool) => (
                  <motion.button
                    key={tool.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveTool(tool.id)}
                    className={`w-full text-left rounded-xl p-4 transition-all duration-300 ${
                      activeTool === tool.id
                        ? 'bg-gradient-to-r from-blue-600 to-blue-500 border border-blue-400 shadow-lg shadow-blue-500/50'
                        : 'bg-slate-800/40 border border-slate-700/40 hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{tool.icon}</span>
                      <div>
                        <p
                          className={`font-semibold ${
                            activeTool === tool.id
                              ? 'text-white'
                              : 'text-slate-200'
                          }`}
                        >
                          {tool.title}
                        </p>
                        <p
                          className={`text-xs ${
                            activeTool === tool.id
                              ? 'text-blue-100'
                              : 'text-slate-400'
                          }`}
                        >
                          {tool.subtitle}
                        </p>
                      </div>
                      {activeTool === tool.id && (
                        <ArrowRight className="w-4 h-4 ml-auto text-white" />
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Info Box */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 pt-8 border-t border-slate-700/40"
              >
                <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-700/20">
                  <span className="text-lg mt-1">ℹ️</span>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    These tools connect directly to Trexim's Neural Core. Results are based on real-time network data.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Tool Details */}
          <motion.div
            key={activeTool}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl p-8 bg-slate-800/40 border border-slate-700/40 backdrop-blur-sm">
              {/* Title */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{currentTool.icon}</span>
                  <div>
                    <h3 className="text-3xl font-bold text-white">
                      {currentTool.title}
                    </h3>
                    <p className="text-slate-400">{currentTool.description}</p>
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4 mb-8">
                {currentTool.fields.map((field, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                  >
                    <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2 block">
                      {field.icon} {field.label}
                    </label>
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Image/Icon area */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="relative w-full h-32 sm:h-40 rounded-xl bg-gradient-to-br from-slate-700/20 to-slate-900/40 border border-slate-700/40 flex items-center justify-center mb-8 overflow-hidden"
              >
                <span className="text-6xl opacity-30">{currentTool.image}</span>
              </motion.div>

              {/* Status Box */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="mb-8 p-4 rounded-lg bg-slate-700/20 border border-slate-700/40"
              >
                <p className="text-slate-400 text-sm">
                  <span className="text-cyan-400 font-semibold">Ready to {currentTool.cta.toLowerCase()}</span>
                </p>
                <p className="text-slate-500 text-xs mt-1">
                  ENTER ORIGIN & DESTINATION
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2"
              >
                {currentTool.cta}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
