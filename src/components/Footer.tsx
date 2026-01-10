'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const links = [
    {
      title: 'Platform',
      items: [
        { name: 'Route Optimizer', href: '#' },
        { name: 'Cost Management', href: '#' },
        { name: 'Financial Hub', href: '#' },
        { name: 'Ecosystem API', href: '#' },
        { name: 'Security', href: '#' },
      ],
    },
    {
      title: 'Company',
      items: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#', badge: 'Hiring' },
        { name: 'Blog', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Legal',
      items: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Settings', href: '#' },
      ],
    },
  ]

  const socials = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800/50">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white font-bold">
                T
              </div>
              <span className="text-white font-bold text-lg">
                Trexim
                <span className="text-cyan-400">.ai</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              The world's first Neural Logistics Operating System. We connect shippers, carriers, and financial institutions in one seamless, AI-driven ecosystem.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2 }}
                  className="p-2 rounded-lg bg-slate-800/40 hover:bg-slate-800/60 transition-colors text-slate-400 hover:text-cyan-400"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {links.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <motion.a
                      href={item.href}
                      whileHover={{ x: 4 }}
                      className="text-slate-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2"
                    >
                      {item.name}
                      {item.badge && (
                        <span className="px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold">
                          {item.badge}
                        </span>
                      )}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              >
                →
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/50 my-8"></div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400"
        >
          <p>© 2026 Trexim.ai Inc. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>All Systems Operational</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
