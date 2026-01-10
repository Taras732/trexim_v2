'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-900/50 to-slate-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-cyan-600/10" />
      
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
            Ready to Transform Your Logistics?
          </h2>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
            Join 200+ logistics leaders who are already using Trexim to automate 70% of their operations and reduce costs by up to 40%.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-slate-800/50 border border-slate-700 rounded-lg font-semibold text-white hover:bg-slate-800/80 transition-all duration-300"
            >
              Watch Demo
            </motion.button>
          </div>
          
          <p className="text-sm text-slate-400 mt-6">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  )
}
