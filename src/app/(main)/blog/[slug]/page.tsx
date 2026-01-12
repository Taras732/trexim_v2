'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/LanguageContext'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

export default function BlogPostPage() {
  const { t } = useLanguage()
  const params = useParams()
  const slug = params.slug as string

  // Get post data
  const post = t.blog.posts[slug as keyof typeof t.blog.posts]

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#131311] to-[#0a0a0a] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Статтю не знайдено</h1>
          <Link href="/blog" className="text-[#f84100] hover:underline">
            Повернутися до блогу
          </Link>
        </div>
      </div>
    )
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'news':
        return 'bg-blue-500/10 text-blue-400 border-blue-500'
      case 'insights':
        return 'bg-purple-500/10 text-purple-400 border-purple-500'
      case 'technology':
        return 'bg-green-500/10 text-green-400 border-green-500'
      case 'industry':
        return 'bg-orange-500/10 text-orange-400 border-orange-500'
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#131311] to-[#0a0a0a]">
      {/* Hero Section with Image */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Image */}
        {('image' in post && post.image) && (
          <div className="absolute inset-0 z-0">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
          </div>
        )}

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="text-[#f3f0fa]/60 hover:text-[#f84100] transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Назад до блогу
            </Link>
          </motion.div>

          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <span className={`px-4 py-2 rounded-full text-sm font-bold border ${getCategoryColor(post.category)}`}>
              {t.blog.categories[post.category as keyof typeof t.blog.categories]}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {post.title}
          </motion.h1>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6 text-[#f3f0fa]/60"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readTime} {t.blog.minuteRead}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-[#1a1a18] border-2 border-[#2a2a28] rounded-2xl p-8 md:p-12">
            <div className="prose prose-invert prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-bold text-white mt-12 mb-6 first:mt-0">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-bold text-white mt-8 mb-4">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-[#f3f0fa]/80 text-lg leading-relaxed mb-6">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside space-y-3 mb-6 text-[#f3f0fa]/80">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="text-lg leading-relaxed">{children}</li>
                  ),
                  strong: ({ children }) => (
                    <strong className="text-[#f84100] font-bold">{children}</strong>
                  ),
                }}
              >
                {('content' in post ? post.content : post.excerpt) as string}
              </ReactMarkdown>
            </div>
          </div>
        </motion.article>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-[#f84100]/10 to-transparent border-2 border-[#f84100] rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            Готові спробувати Trexim?
          </h2>
          <p className="text-[#f3f0fa]/80 text-base md:text-lg mb-6">
            Приєднуйтесь до пілотної програми та автоматизуйте вашу логістику
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/demo"
              className="px-8 py-4 bg-[#f84100] rounded-full font-bold text-white hover:bg-[#e63900] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Отримати демо
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white/20 rounded-full font-bold text-white hover:border-[#f84100] hover:text-[#f84100] transition-all duration-300"
            >
              Зв'язатися з нами
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Related Posts */}
      <section className="py-20 px-6 border-t border-[#2a2a28]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          >
            Читайте також
          </motion.h2>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a18] border-2 border-[#2a2a28] rounded-full font-bold text-white hover:border-[#f84100] hover:text-[#f84100] transition-all duration-300"
            >
              Всі статті блогу
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
