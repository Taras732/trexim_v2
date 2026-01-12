'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/LanguageContext'
import { useState } from 'react'
import Link from 'next/link'

type Category = 'all' | 'news' | 'insights' | 'technology' | 'industry'

export default function BlogPage() {
  const { t, language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')

  const posts = [
    { key: 'ettn2026' as const, icon: '📋' },
    { key: 'aiLogistics' as const, icon: '🤖' },
    { key: 'shadowEconomy' as const, icon: '💡' },
    { key: 'ecosystem' as const, icon: '🔗' },
    { key: 'pilotProgram' as const, icon: '🚀' },
    { key: 'futureLogistics' as const, icon: '🔮' },
  ]

  const categories: Category[] = ['all', 'news', 'insights', 'technology', 'industry']

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

  const filteredPosts = posts.filter((post) => {
    const postData = t.blog.posts[post.key]
    return selectedCategory === 'all' || postData.category === selectedCategory
  })

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
            {t.blog.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-[#f3f0fa]/80 max-w-3xl mx-auto"
          >
            {t.blog.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="relative py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#f84100] text-white'
                    : 'bg-[#1a1a18] text-[#f3f0fa]/70 border border-[#2a2a28] hover:border-[#f84100]'
                }`}
              >
                {t.blog.categories[category]}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-[#f3f0fa]/70 text-lg"
            >
              {t.blog.noResults}
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => {
                const postData = t.blog.posts[post.key]
                return (
                  <Link key={post.key} href={`/blog/${post.key}`}>
                    <motion.article
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-[#1a1a18] border-2 border-[#2a2a28] hover:border-[#f84100] transition-all duration-300 rounded-xl overflow-hidden group cursor-pointer h-full"
                    >
                    {/* Post Image/Icon Header */}
                    <div className="bg-gradient-to-br from-[#131311] to-[#1a1a18] border-b border-[#2a2a28] relative overflow-hidden h-48">
                      {'image' in postData && postData.image ? (
                        <img
                          src={postData.image}
                          alt={postData.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                            {('icon' in postData ? postData.icon : null) || post.icon}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Post Content */}
                    <div className="p-6">
                      {/* Category Badge */}
                      <div className="mb-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(
                            postData.category
                          )}`}
                        >
                          {t.blog.categories[postData.category as Category]}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-white font-bold text-xl mb-3 group-hover:text-[#f84100] transition-colors duration-300">
                        {postData.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-[#f3f0fa]/70 text-sm mb-4 leading-relaxed">
                        {postData.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-[#f3f0fa]/50 text-xs">
                        <span>{postData.date}</span>
                        <span>
                          {postData.readTime} {t.blog.minuteRead}
                        </span>
                      </div>

                      {/* Read More Link */}
                      <div className="mt-4 pt-4 border-t border-[#2a2a28]">
                        <span className="text-[#f84100] text-sm font-semibold group-hover:underline">
                          {t.blog.readMore} →
                        </span>
                      </div>
                    </div>
                  </motion.article>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#f84100]/10 to-transparent border-2 border-[#f84100] rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
              {language === 'uk'
                ? 'Хочете дізнатися більше про Trexim?'
                : 'Want to learn more about Trexim?'}
            </h2>
            <p className="text-[#f3f0fa]/80 text-base md:text-lg mb-6">
              {language === 'uk'
                ? 'Приєднуйтесь до пілотної програми та отримайте доступ до AI операційної системи'
                : 'Join our pilot program and get access to AI operating system'}
            </p>
            <a href="/demo">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-10 py-4 bg-[#f84100] rounded-xl font-bold text-white hover:bg-[#e63900] transition-all duration-300 whitespace-nowrap hover:scale-[1.02] shadow-lg hover:shadow-[#f84100]/50"
              >
                {t.hero.cta}
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
