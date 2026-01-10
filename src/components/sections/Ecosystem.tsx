'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X } from 'lucide-react'

interface EcosystemNode {
  icon: string
  title: string
  subtitle: string
  position: { top: string; left: string }
  details: {
    heading: string
    description: string
    features: string[]
  }
}

export default function EcosystemSection() {
  const [selectedNode, setSelectedNode] = useState<EcosystemNode | null>(null)

  const nodes: EcosystemNode[] = [
    {
      icon: '🏢',
      title: 'Logistics Companies',
      subtitle: 'Operations',
      position: { top: '60%', left: '50%' },
      details: {
        heading: 'LOGISTICS OPERATIONS',
        description: 'Streamline your fleet operations with real-time tracking.',
        features: ['Route Optimization', 'Fleet Management', 'Real-time Tracking'],
      },
    },
    {
      icon: '🏛️',
      title: 'State / Analytics',
      subtitle: 'Regulation',
      position: { top: '75%', left: '55%' },
      details: {
        heading: 'REGULATORY COMPLIANCE',
        description: 'Stay compliant with all regulations and analytics.',
        features: ['Compliance Tracking', 'Analytics Reports', 'Audit Trails'],
      },
    },
    {
      icon: '🏦',
      title: 'Banks / Finance',
      subtitle: 'Capital',
      position: { top: '65%', left: '40%' },
      details: {
        heading: 'FINANCIAL INTEGRATION',
        description: 'Seamless financial operations and capital management.',
        features: ['Payment Processing', 'Capital Management', 'Finance Reports'],
      },
    },
    {
      icon: '⛽',
      title: 'Fuel / Petrol',
      subtitle: 'Energy',
      position: { top: '38%', left: '35%' },
      details: {
        heading: 'ENERGY MANAGEMENT',
        description: 'Optimize fuel consumption and energy efficiency.',
        features: ['Fuel Tracking', 'Cost Optimization', 'Consumption Reports'],
      },
    },
    {
      icon: '🔐',
      title: 'EDI / QES',
      subtitle: 'Security',
      position: { top: '48%', left: '28%' },
      details: {
        heading: 'SECURITY & SIGNATURES',
        description: '100% verified digital signatures and secure exchange.',
        features: ['KEP Signatures', 'Data Encryption', 'Secure Exchange'],
      },
    },
    {
      icon: '🛡️',
      title: 'Insurance',
      subtitle: 'Protection',
      position: { top: '28%', left: '30%' },
      details: {
        heading: 'INSURANCE PROTECTION',
        description: 'Comprehensive insurance and risk management.',
        features: ['Risk Assessment', 'Coverage Management', 'Claims Processing'],
      },
    },
    {
      icon: '📡',
      title: 'Tech Partners',
      subtitle: 'IoT / GPS',
      position: { top: '20%', left: '45%' },
      details: {
        heading: 'TECHNOLOGY PARTNERS',
        description: 'Integration with IoT sensors and GPS systems.',
        features: ['IoT Integration', 'GPS Tracking', 'Real-time Data'],
      },
    },
    {
      icon: '⚖️',
      title: 'Legal',
      subtitle: 'Compliance',
      position: { top: '25%', left: '60%' },
      details: {
        heading: 'LEGAL FRAMEWORK',
        description: 'Ensure legal compliance and contractual obligations.',
        features: ['Contract Management', 'Legal Compliance', 'Document Verification'],
      },
    },
    {
      icon: '🏭',
      title: 'Customers / Business',
      subtitle: 'Orders',
      position: { top: '38%', left: '68%' },
      details: {
        heading: 'CUSTOMER MANAGEMENT',
        description: 'Manage customer orders and business relationships.',
        features: ['Order Management', 'Customer Portal', 'Performance Metrics'],
      },
    },
    {
      icon: '🚚',
      title: 'Carriers / Drivers',
      subtitle: 'Transport',
      position: { top: '55%', left: '65%' },
      details: {
        heading: 'TRANSPORT OPERATIONS',
        description: 'Optimize carrier operations and driver management.',
        features: ['Driver Management', 'Load Planning', 'Route Optimization'],
      },
    },
  ]

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 -z-10" />
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-purple-600/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white">The Central Hub</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Modern Logistics
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto px-4">
            Connecting every stakeholder in real-time.
          </p>
        </motion.div>

        <div className="relative">
          {/* Full width diagram area */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full h-[700px] sm:h-[800px] flex items-center justify-center"
          >
            {/* Center TREXIM */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute z-20 text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="w-28 sm:w-36 h-28 sm:h-36 rounded-full border border-purple-500/40 flex items-center justify-center mb-4 relative"
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border border-blue-500/30"
                />
              </motion.div>
              <h3 className="text-3xl font-bold text-white">TREXIM</h3>
              <p className="text-slate-400 text-sm mt-1">Neural Core</p>
            </motion.div>

            {/* All nodes */}
            {nodes.map((node, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                style={{
                  position: 'absolute',
                  top: node.position.top,
                  left: node.position.left,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  onClick={() => setSelectedNode(node)}
                  className={`transition-all duration-300 ${
                    selectedNode?.title === node.title
                      ? 'ring-2 ring-purple-500 ring-offset-2 ring-offset-slate-900'
                      : ''
                  }`}
                >
                  <div
                    className={`w-14 sm:w-16 h-14 sm:h-16 rounded-lg sm:rounded-xl flex items-center justify-center text-xl sm:text-2xl shadow-lg transition-all duration-300 ${
                      selectedNode?.title === node.title
                        ? 'bg-purple-600/40 border border-purple-400'
                        : 'bg-slate-800/60 border border-slate-700/60 hover:shadow-purple-500/50'
                    }`}
                  >
                    {node.icon}
                  </div>
                </motion.button>
                <div className="text-center mt-2 pointer-events-none">
                  <p className="text-white text-xs font-semibold whitespace-nowrap">
                    {node.title}
                  </p>
                  <p className="text-slate-400 text-xs">{node.subtitle}</p>
                </div>
              </motion.div>
            ))}

            {/* Modal Panel - Left side, middle */}
            <AnimatePresence>
              {selectedNode && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-full sm:w-auto sm:max-w-sm"
                >
                  <motion.div className="rounded-2xl p-6 bg-slate-800/80 border border-purple-500/40 backdrop-blur-sm mx-4 sm:mx-0">
                    <button
                      onClick={() => setSelectedNode(null)}
                      className="absolute top-4 right-4 p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700"
                    >
                      <X className="w-4 h-4 text-slate-400" />
                    </button>

                    <div className="text-4xl mb-4">{selectedNode.icon}</div>
                    <h4 className="text-white font-bold text-lg mb-3 pr-8">
                      {selectedNode.details.heading}
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {selectedNode.details.description}
                    </p>

                    <div className="space-y-2">
                      {selectedNode.details.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-purple-500" />
                          <span className="text-slate-300 text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Technology Core - Static info bottom right */}
          {!selectedNode && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute right-0 bottom-0 w-full sm:w-auto sm:max-w-sm"
            >
              <div className="rounded-2xl p-6 bg-slate-800/80 border border-slate-700/40 backdrop-blur-sm mx-4 sm:mx-0">
                <h4 className="text-white font-bold text-lg mb-6">TECHNOLOGY CORE</h4>
                <div className="space-y-6">
                  <div className="pb-6 border-b border-slate-700/50">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 mt-1" />
                      <h5 className="text-white font-bold text-sm">AI-OPTIMIZATION</h5>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Smart routing & predictive analytics.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mt-1" />
                      <h5 className="text-white font-bold text-sm">DIGITAL INTEGRATION</h5>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      API / EDO & secure transactions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
