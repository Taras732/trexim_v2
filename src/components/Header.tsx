'use client'

import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/95 border-b border-slate-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
              T
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">
              Trexim
              <span className="text-cyan-400">.ai</span>
            </span>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { name: 'Platform', href: '#' },
              { name: 'Solutions', href: '#' },
              { name: 'Company', href: '#' },
              { name: 'Resources', href: '#' },
            ].map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ color: '#06b6d4' }}
                className="text-slate-300 hover:text-cyan-400 transition-colors text-sm"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-slate-300 hover:text-white transition-colors text-sm hidden sm:block"
            >
              Sign In
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
