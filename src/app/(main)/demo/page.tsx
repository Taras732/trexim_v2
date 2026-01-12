'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/LanguageContext'
import { useState } from 'react'

export default function DemoPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    fleet: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // TODO: Replace with actual API call
    setTimeout(() => {
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        role: '',
        fleet: '',
        message: '',
      })
      setIsLoading(false)
    }, 1000)
  }

  const benefits = [
    {
      key: 'access' as const,
      icon: t.demo.benefits.items.access.icon,
    },
    {
      key: 'support' as const,
      icon: t.demo.benefits.items.support.icon,
    },
    {
      key: 'free' as const,
      icon: t.demo.benefits.items.free.icon,
    },
    {
      key: 'results' as const,
      icon: t.demo.benefits.items.results.icon,
    },
  ]

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
            {t.demo.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-[#f3f0fa]/80 max-w-3xl mx-auto"
          >
            {t.demo.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          >
            {t.demo.benefits.title}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => {
              const item = t.demo.benefits.items[benefit.key]
              return (
                <motion.div
                  key={benefit.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#1a1a18] border-2 border-[#2a2a28] hover:border-[#f84100] transition-all duration-300 rounded-xl p-6 text-center"
                >
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#f3f0fa]/70 text-sm">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form and Process Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#1a1a18] border-2 border-[#2a2a28] rounded-2xl p-8"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">
                {t.demo.form.title}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder={t.demo.form.namePlaceholder}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#131311] border-2 border-[#2a2a28] text-white placeholder-[#666] focus:outline-none focus:border-[#f84100] transition-all"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder={t.demo.form.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#131311] border-2 border-[#2a2a28] text-white placeholder-[#666] focus:outline-none focus:border-[#f84100] transition-all"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder={t.demo.form.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#131311] border-2 border-[#2a2a28] text-white placeholder-[#666] focus:outline-none focus:border-[#f84100] transition-all"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder={t.demo.form.companyPlaceholder}
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#131311] border-2 border-[#2a2a28] text-white placeholder-[#666] focus:outline-none focus:border-[#f84100] transition-all"
                  />
                </div>

                <div>
                  <select
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#131311] border-2 border-[#2a2a28] text-white focus:outline-none focus:border-[#f84100] transition-all"
                  >
                    <option value="" disabled>
                      {t.demo.form.rolePlaceholder}
                    </option>
                    <option value="carrier">
                      {t.demo.form.roleOptions.carrier}
                    </option>
                    <option value="shipper">
                      {t.demo.form.roleOptions.shipper}
                    </option>
                    <option value="logistics">
                      {t.demo.form.roleOptions.logistics}
                    </option>
                    <option value="other">{t.demo.form.roleOptions.other}</option>
                  </select>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder={t.demo.form.fleetPlaceholder}
                    value={formData.fleet}
                    onChange={(e) =>
                      setFormData({ ...formData, fleet: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-[#131311] border-2 border-[#2a2a28] text-white placeholder-[#666] focus:outline-none focus:border-[#f84100] transition-all"
                  />
                </div>

                <div>
                  <textarea
                    placeholder={t.demo.form.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg bg-[#131311] border-2 border-[#2a2a28] text-white placeholder-[#666] focus:outline-none focus:border-[#f84100] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-4 bg-[#f84100] rounded-lg font-bold text-white hover:bg-[#e63900] transition-all duration-300 disabled:opacity-50 hover:scale-[1.02] shadow-lg hover:shadow-[#f84100]/50"
                >
                  {isLoading ? 'Sending...' : t.demo.form.submit}
                </button>

                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-400 text-sm text-center"
                  >
                    {t.demo.form.success}
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-sm text-center"
                  >
                    {t.demo.form.error}
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-8">
                {t.demo.process.title}
              </h2>

              {['step1', 'step2', 'step3'].map((stepKey, index) => {
                const step = t.demo.process.steps[stepKey as 'step1' | 'step2' | 'step3']
                return (
                  <motion.div
                    key={stepKey}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[#1a1a18] border-2 border-[#2a2a28] hover:border-[#f84100] transition-all duration-300 rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#f84100]/10 border-2 border-[#f84100] flex items-center justify-center flex-shrink-0">
                        <span className="text-[#f84100] font-bold">
                          {step.number}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg mb-2">
                          {step.title}
                        </h3>
                        <p className="text-[#f3f0fa]/70 text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
