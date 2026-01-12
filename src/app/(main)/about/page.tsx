'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/LanguageContext'
import Link from 'next/link'

export default function AboutPage() {
  const { t } = useLanguage()

  const teamMembers = [
    { key: 'andriy' as const, icon: '👔' },
    { key: 'taras' as const, icon: '💻' },
    { key: 'olena' as const, icon: '📊' },
    { key: 'iryna' as const, icon: '🚛' },
    { key: 'myroslava' as const, icon: '✅' },
    { key: 'itua' as const, icon: '⚙️' },
  ]

  const values = [
    { key: 'transparency' as const, icon: '🔍' },
    { key: 'innovation' as const, icon: '🚀' },
    { key: 'partnership' as const, icon: '🤝' },
    { key: 'reliability' as const, icon: '🛡️' },
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
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            {t.about.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-[#f3f0fa]/80 max-w-3xl mx-auto"
          >
            {t.about.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1a1a18] to-[#131311] border-2 border-[#f84100] rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">
              {t.about.mission.title}
            </h2>
            <p className="text-[#f3f0fa]/80 text-base md:text-lg leading-relaxed">
              {t.about.mission.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          >
            {t.about.values.title}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const item = t.about.values.items[value.key]
              return (
                <motion.div
                  key={value.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#1a1a18] border-2 border-[#2a2a28] hover:border-[#f84100] transition-all duration-300 rounded-xl p-6 text-center"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
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

      {/* Team Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          >
            {t.about.team.title}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              const memberData = t.about.team.members[member.key]
              return (
                <motion.div
                  key={member.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#1a1a18] border-2 border-[#2a2a28] hover:border-[#f84100] transition-all duration-300 rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl">{member.icon}</div>
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        {memberData.name}
                      </h3>
                      <p className="text-[#f84100] text-sm font-semibold">
                        {memberData.position}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#f3f0fa]/70 text-sm leading-relaxed">
                    {memberData.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1a1a18] to-[#131311] border border-[#2a2a28] rounded-2xl p-8 md:p-12"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              {t.about.vision.title}
            </h2>
            <p className="text-[#f3f0fa]/80 text-base md:text-lg leading-relaxed mb-8 text-center">
              {t.about.vision.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#131311] border border-[#2a2a28] rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#f84100] mb-2">
                  {t.about.vision.stats.companies}
                </div>
                <p className="text-[#f3f0fa]/70 text-sm">
                  {t.about.vision.stats.companies.includes('компан') ? 'Компанії' : 'Companies'}
                </p>
              </div>
              <div className="bg-[#131311] border border-[#2a2a28] rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#f84100] mb-2">
                  {t.about.vision.stats.trips}
                </div>
                <p className="text-[#f3f0fa]/70 text-sm">
                  {t.about.vision.stats.trips.includes('рейс') ? 'Рейси' : 'Trips'}
                </p>
              </div>
              <div className="bg-[#131311] border border-[#2a2a28] rounded-xl p-6 text-center">
                <div className="text-lg font-bold text-[#f84100] mb-2">📈</div>
                <p className="text-[#f3f0fa]/70 text-sm">
                  {t.about.vision.stats.growth}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              {t.about.cta.title}
            </h2>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-10 py-4 bg-[#f84100] rounded-xl font-bold text-white hover:bg-[#e63900] transition-all duration-300 whitespace-nowrap hover:scale-[1.02] shadow-lg hover:shadow-[#f84100]/50"
              >
                {t.about.cta.button}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
