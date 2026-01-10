'use client'

import { motion } from 'framer-motion'

interface Testimonial {
  name: string
  company: string
  role: string
  text: string
  avatar: string
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: 'Ihor Kovalenko',
      company: 'Logix Solutions',
      role: 'Operations Manager',
      text: 'Trexim reduced our operational costs by 40% in just 6 months. The AI routing is incredibly accurate.',
      avatar: '👨‍💼',
    },
    {
      name: 'Marina Petrov',
      company: 'EuroShip Carriers',
      role: 'Fleet Director',
      text: 'The platform unified our entire supply chain. Real-time transparency is a game changer.',
      avatar: '👩‍💼',
    },
    {
      name: 'Andriy Bondarenko',
      company: 'FastFreight Ukraine',
      role: 'CEO',
      text: 'Integration was seamless and support was exceptional. Trexim is worth every penny.',
      avatar: '👨‍💼',
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Loved by Logistics Leaders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            Real feedback from real customers
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                  <p className="text-sm text-blue-400">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
