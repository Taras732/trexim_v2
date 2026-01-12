'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/LanguageContext'
import { useState } from 'react'

export default function PartnerCTA() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    partnerType: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement API call
    console.log('Form submitted:', formData)
    setStatus('success')
    setTimeout(() => setStatus('idle'), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section className="relative py-16 md:py-20 px-6 bg-slate-900 text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column - CTA text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t.partners.cta.title}
            </h2>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              {t.partners.cta.subtitle}
            </p>

            <p className="text-sm text-slate-400 mb-12 leading-relaxed">
              {t.partners.cta.note}
            </p>

            {/* Contact info */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700">
              <div className="font-heading text-2xl font-bold mb-2">{t.partners.cta.contact.name}</div>
              <div className="text-orange-400 text-sm mb-6">{t.partners.cta.contact.position}</div>

              <div className="space-y-3">
                <a
                  href={`tel:${t.partners.cta.contact.phone}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-orange-400 transition-colors"
                >
                  <span className="text-xl">📞</span>
                  <span>{t.partners.cta.contact.phone}</span>
                </a>
                <a
                  href={`mailto:${t.partners.cta.contact.email}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-orange-400 transition-colors"
                >
                  <span className="text-xl">✉️</span>
                  <span>{t.partners.cta.contact.email}</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-2xl">
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.partners.cta.form.namePlaceholder}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.partners.cta.form.emailPlaceholder}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.partners.cta.form.phonePlaceholder}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t.partners.cta.form.companyPlaceholder}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <select
                    name="partnerType"
                    value={formData.partnerType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  >
                    <option value="">{t.partners.cta.form.typePlaceholder}</option>
                    <option value="banks">🏦 {t.partners.partnerTypes.types.banks.title}</option>
                    <option value="insurance">🛡️ {t.partners.partnerTypes.types.insurance.title}</option>
                    <option value="fuel">⛽ {t.partners.partnerTypes.types.fuel.title}</option>
                    <option value="edo">📝 {t.partners.partnerTypes.types.edo.title}</option>
                    <option value="legal">⚖️ {t.partners.partnerTypes.types.legal.title}</option>
                    <option value="tech">💻 {t.partners.partnerTypes.types.tech.title}</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.partners.cta.form.messagePlaceholder}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {t.partners.cta.form.submit}
                </button>

                {status === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm">
                    {t.partners.cta.form.success}
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-sm">
                    {t.partners.cta.form.error}
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
