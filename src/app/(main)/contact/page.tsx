'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/LanguageContext'
import { useState } from 'react'

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
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
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
      setIsLoading(false)
    }, 1000)
  }

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
            {t.contact.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-[#f3f0fa]/80 max-w-3xl mx-auto"
          >
            {t.contact.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-[#1a1a18] border-2 border-[#2a2a28] hover:border-[#f84100] transition-all duration-300 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">📞</div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">
                        {t.contact.info.phone.label}
                      </h3>
                      <a
                        href={`tel:${t.contact.info.phone.value}`}
                        className="text-[#f84100] text-base hover:underline"
                      >
                        {t.contact.info.phone.value}
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#1a1a18] border-2 border-[#2a2a28] hover:border-[#f84100] transition-all duration-300 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">📧</div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">
                        {t.contact.info.email.label}
                      </h3>
                      <a
                        href={`mailto:${t.contact.info.email.value}`}
                        className="text-[#f84100] text-base hover:underline"
                      >
                        {t.contact.info.email.value}
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-[#1a1a18] border-2 border-[#2a2a28] hover:border-[#f84100] transition-all duration-300 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">📍</div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">
                        {t.contact.info.address.label}
                      </h3>
                      <p className="text-[#f3f0fa]/80 text-base">
                        {t.contact.info.address.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Contact Person */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#f84100]/10 to-transparent border border-[#f84100] rounded-xl p-6"
              >
                <h3 className="text-white font-bold text-lg mb-3">
                  {t.contact.contact.title}
                </h3>
                <p className="text-[#f3f0fa]/90 text-base font-semibold mb-1">
                  {t.contact.contact.name}
                </p>
                <p className="text-[#f3f0fa]/70 text-sm">
                  {t.contact.contact.position}
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#1a1a18] border-2 border-[#2a2a28] rounded-2xl p-8"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">
                {t.contact.form.title}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder={t.contact.form.namePlaceholder}
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
                    placeholder={t.contact.form.emailPlaceholder}
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
                    placeholder={t.contact.form.phonePlaceholder}
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
                    placeholder={t.contact.form.companyPlaceholder}
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-[#131311] border-2 border-[#2a2a28] text-white placeholder-[#666] focus:outline-none focus:border-[#f84100] transition-all"
                  />
                </div>

                <div>
                  <textarea
                    placeholder={t.contact.form.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-[#131311] border-2 border-[#2a2a28] text-white placeholder-[#666] focus:outline-none focus:border-[#f84100] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-4 bg-[#f84100] rounded-lg font-bold text-white hover:bg-[#e63900] transition-all duration-300 disabled:opacity-50 hover:scale-[1.02] shadow-lg hover:shadow-[#f84100]/50"
                >
                  {isLoading ? 'Sending...' : t.contact.form.submit}
                </button>

                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-400 text-sm text-center"
                  >
                    {t.contact.form.success}
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-sm text-center"
                  >
                    {t.contact.form.error}
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
