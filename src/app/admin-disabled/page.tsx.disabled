'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import ImageUpload from '@/components/ImageUpload'
import {
  BLOG_CATEGORIES,
  BLOG_STATUSES,
  TRANSPORT_TYPES,
  CARGO_TYPES,
  DOCUMENT_TYPES,
  REQUEST_STATUSES,
  PRIORITY_LEVELS,
  getReferenceLabel,
  type ReferenceValue
} from '@/config/references'

type BlogPost = {
  title: string
  excerpt: string
  category: string
  date: string
  readTime: number
  status: 'published' | 'draft' | 'scheduled'
  scheduledDate?: string
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [activeTab, setActiveTab] = useState<'blog' | 'content' | 'references'>('blog')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'trexim2026') {
      setIsAuthenticated(true)
      localStorage.setItem('adminAuth', 'true')
    } else {
      alert('Невірний пароль')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('adminAuth')
  }

  useEffect(() => {
    if (localStorage.getItem('adminAuth') === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#131311] via-[#1a1a18] to-[#131311] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#1a1a18] border-2 border-[#2a2a28] rounded-2xl p-8 max-w-md w-full"
        >
          <h1 className="font-heading text-3xl font-bold text-white mb-6 text-center">
            Адмін-панель Trexim
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-[#f3f0fa]/70 text-sm mb-2 block">
                Пароль
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Введіть пароль"
                className="w-full px-4 py-3 rounded-lg bg-[#131311] border-2 border-[#2a2a28] text-white placeholder-[#666] focus:outline-none focus:border-[#f84100] transition-all"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-4 bg-[#f84100] rounded-lg font-bold text-white hover:bg-[#e63900] transition-all duration-300"
            >
              Увійти
            </button>
          </form>
          <p className="text-[#f3f0fa]/50 text-xs text-center mt-4">
            Demo password: trexim2026
          </p>
        </motion.div>
      </main>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#131311] border-r border-[#2a2a28] flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-[#2a2a28]">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#f84100] to-[#e63900] flex items-center justify-center text-white font-bold text-lg">
              T
            </div>
            <div>
              <h1 className="font-bold text-white text-lg">Trexim</h1>
              <p className="text-xs text-[#f3f0fa]/50">Admin Panel</p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => setActiveTab('blog')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              activeTab === 'blog'
                ? 'bg-[#f84100] text-white'
                : 'text-[#f3f0fa]/70 hover:bg-[#1a1a18] hover:text-white'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="font-semibold">Блог</span>
          </button>

          <button
            onClick={() => setActiveTab('content')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              activeTab === 'content'
                ? 'bg-[#f84100] text-white'
                : 'text-[#f3f0fa]/70 hover:bg-[#1a1a18] hover:text-white'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <span className="font-semibold">Контент</span>
          </button>

          <button
            onClick={() => setActiveTab('references')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              activeTab === 'references'
                ? 'bg-[#f84100] text-white'
                : 'text-[#f3f0fa]/70 hover:bg-[#1a1a18] hover:text-white'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            <span className="font-semibold">Довідники</span>
          </button>
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-[#2a2a28] space-y-2">
          <Link
            href="/"
            target="_blank"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-[#f3f0fa]/70 hover:bg-[#1a1a18] hover:text-white transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span className="font-semibold">На сайт</span>
          </Link>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span className="font-semibold">Вийти</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {activeTab === 'blog' && <BlogManagement />}
        {activeTab === 'content' && <ContentManagement />}
        {activeTab === 'references' && <ReferencesManagement />}
      </main>
    </div>
  )
}

function BlogManagement() {
  const [blogData, setBlogData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [editingPost, setEditingPost] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterCategory, setFilterCategory] = useState<string>('all')
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  useEffect(() => {
    loadBlogData()
  }, [])

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, filterCategory, filterStatus])

  const loadBlogData = async () => {
    try {
      const res = await fetch('/api/blog')
      const data = await res.json()
      setBlogData(data)
      setLoading(false)
    } catch (error) {
      console.error('Failed to load blog data:', error)
      setLoading(false)
    }
  }

  const handleDelete = async (postId: string) => {
    if (!confirm('Ви впевнені що хочете видалити цю статтю?')) return

    try {
      const res = await fetch(`/api/blog?postId=${postId}`, {
        method: 'DELETE',
      })

      if (res.ok) {
        alert('✓ Статтю видалено!')
        loadBlogData()
      }
    } catch (error) {
      alert('Помилка видалення')
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f84100] mx-auto mb-4"></div>
          <p>Завантаження...</p>
        </div>
      </div>
    )
  }

  const posts = blogData?.uk?.posts || {}

  // Filter posts
  const filteredPosts = Object.entries(posts).filter(([key, post]: [string, any]) => {
    const matchesSearch =
      searchQuery === '' ||
      post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory =
      filterCategory === 'all' || post.category === filterCategory

    const matchesStatus = filterStatus === 'all' || post.status === filterStatus

    return matchesSearch && matchesCategory && matchesStatus
  })

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex)

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Управління блогом</h1>
            <p className="text-[#f3f0fa]/60">
              Всього статей: {Object.keys(posts).length} | Показано: {filteredPosts.length}
            </p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-6 py-3 bg-[#f84100] rounded-lg font-bold text-white hover:bg-[#e63900] transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Створити статтю
          </button>
        </div>

        {/* Search and Filters */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f3f0fa]/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Пошук за назвою або описом..."
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#131311] border border-[#2a2a28] text-white placeholder-[#f3f0fa]/50 focus:outline-none focus:border-[#f84100] transition-all"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="w-full md:w-48">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#131311] border border-[#2a2a28] text-white focus:outline-none focus:border-[#f84100] transition-all"
            >
              <option value="all">Всі категорії</option>
              {BLOG_CATEGORIES.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label_uk}
                </option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div className="w-full md:w-48">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#131311] border border-[#2a2a28] text-white focus:outline-none focus:border-[#f84100] transition-all"
            >
              <option value="all">Всі статуси</option>
              {BLOG_STATUSES.map((status) => (
                <option key={status.value} value={status.value}>
                  {status.label_uk}
                </option>
              ))}
            </select>
          </div>
        </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#131311] border border-[#2a2a28] rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#1a1a18] border-b border-[#2a2a28]">
            <tr>
              <th className="text-left px-6 py-4 text-[#f3f0fa]/80 font-semibold text-sm">
                Назва
              </th>
              <th className="text-left px-6 py-4 text-[#f3f0fa]/80 font-semibold text-sm">
                Категорія
              </th>
              <th className="text-left px-6 py-4 text-[#f3f0fa]/80 font-semibold text-sm">
                Статус
              </th>
              <th className="text-left px-6 py-4 text-[#f3f0fa]/80 font-semibold text-sm">
                Дата
              </th>
              <th className="text-right px-6 py-4 text-[#f3f0fa]/80 font-semibold text-sm">
                Дії
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedPosts.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center">
                  <div className="text-[#f3f0fa]/50">
                    <svg
                      className="w-16 h-16 mx-auto mb-4 opacity-50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-lg">Статей не знайдено</p>
                    <p className="text-sm mt-2">Спробуйте змінити параметри пошуку або фільтри</p>
                  </div>
                </td>
              </tr>
            ) : (
              paginatedPosts.map(([key, post]: [string, any]) => (
              <tr
                key={key}
                className="border-b border-[#2a2a28] hover:bg-[#1a1a18] transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    {/* Image or Icon */}
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 rounded-lg object-cover border border-[#2a2a28]"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#1a1a18] to-[#0a0a0a] border border-[#2a2a28] flex items-center justify-center text-3xl">
                        {post.icon || '📝'}
                      </div>
                    )}
                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium truncate">{post.title}</p>
                      <p className="text-[#f3f0fa]/50 text-sm mt-1 line-clamp-2">
                        {post.excerpt?.substring(0, 80)}...
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500">
                    {getReferenceLabel(BLOG_CATEGORIES, post.category, 'uk')}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500">
                    {getReferenceLabel(BLOG_STATUSES, post.status, 'uk')}
                  </span>
                </td>
                <td className="px-6 py-4 text-[#f3f0fa]/70 text-sm">
                  {post.date}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => setEditingPost(key)}
                      className="p-2 text-[#f3f0fa]/70 hover:text-[#f84100] hover:bg-[#f84100]/10 rounded-lg transition-all"
                      title="Редагувати"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDelete(key)}
                      className="p-2 text-[#f3f0fa]/70 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                      title="Видалити"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            )))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-[#2a2a28]">
            {/* Left: Items per page */}
            <div className="flex items-center gap-3">
              <span className="text-[#f3f0fa]/70 text-sm">Записів на сторінці:</span>
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value))
                  setCurrentPage(1)
                }}
                className="px-3 py-2 rounded-lg bg-[#0a0a0a] border border-[#2a2a28] text-white text-sm focus:outline-none focus:border-[#f84100] transition-all"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
            </div>

            {/* Center: Page numbers */}
            <div className="flex items-center gap-2">
              {/* Previous button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg bg-[#1a1a18] text-white font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#2a2a28] transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Page numbers */}
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                  // Show first page, last page, current page, and pages around current
                  const showPage =
                    pageNum === 1 ||
                    pageNum === totalPages ||
                    (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)

                  if (!showPage) {
                    // Show ellipsis
                    if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
                      return (
                        <span key={pageNum} className="px-2 text-[#f3f0fa]/50">
                          ...
                        </span>
                      )
                    }
                    return null
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`min-w-[40px] px-3 py-2 rounded-lg font-semibold transition-all ${
                        currentPage === pageNum
                          ? 'bg-[#f84100] text-white'
                          : 'bg-[#1a1a18] text-[#f3f0fa]/70 hover:bg-[#2a2a28] hover:text-white'
                      }`}
                    >
                      {pageNum}
                    </button>
                  )
                })}
              </div>

              {/* Next button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg bg-[#1a1a18] text-white font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#2a2a28] transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Right: Page info */}
            <div className="text-[#f3f0fa]/70 text-sm">
              Показано {startIndex + 1}-{Math.min(endIndex, filteredPosts.length)} з{' '}
              {filteredPosts.length}
            </div>
          </div>
        )}
      </div>

      {/* Create/Edit Modal */}
      {(showCreateModal || editingPost) && (
        <CreateEditModal
          postId={editingPost}
          onClose={() => {
            setShowCreateModal(false)
            setEditingPost(null)
            loadBlogData()
          }}
          existingData={editingPost ? posts[editingPost] : null}
        />
      )}
    </div>
  )
}

function CreateEditModal({
  postId,
  onClose,
  existingData,
}: {
  postId: string | null
  onClose: () => void
  existingData: any
}) {
  const [formData, setFormData] = useState({
    postId: postId || '',
    ukTitle: existingData?.title || '',
    ukExcerpt: existingData?.excerpt || '',
    ukContent: existingData?.content || '',
    enTitle: '',
    enExcerpt: '',
    enContent: '',
    category: existingData?.category || 'news',
    readTime: existingData?.readTime || 5,
    status: 'published' as 'published' | 'draft' | 'scheduled',
    scheduledDate: '',
    icon: existingData?.icon || '📝',
    imageUrl: existingData?.image || '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          postId: formData.postId,
          ukData: {
            title: formData.ukTitle,
            excerpt: formData.ukExcerpt,
            content: formData.ukContent,
            category: formData.category,
            date: new Date().toLocaleDateString('uk-UA', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }),
            readTime: formData.readTime,
            icon: formData.icon,
            image: formData.imageUrl,
          },
          enData: {
            title: formData.enTitle || formData.ukTitle,
            excerpt: formData.enExcerpt || formData.ukExcerpt,
            content: formData.enContent || formData.ukContent,
            category: formData.category,
            date: new Date().toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }),
            readTime: formData.readTime,
            icon: formData.icon,
            image: formData.imageUrl,
          },
        }),
      })

      if (res.ok) {
        alert('✓ Збережено успішно!')
        onClose()
      }
    } catch (error) {
      alert('Помилка збереження')
    }
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#131311] border border-[#2a2a28] rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-auto"
      >
        <h2 className="text-2xl font-bold text-white mb-6">
          {postId ? 'Редагувати статтю' : 'Створити нову статтю'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Post ID */}
          {!postId && (
            <div>
              <label className="block text-[#f3f0fa]/70 text-sm mb-2">
                ID статті (унікальний)
              </label>
              <input
                type="text"
                value={formData.postId}
                onChange={(e) => setFormData({ ...formData, postId: e.target.value })}
                placeholder="new-article-2026"
                className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a28] text-white focus:outline-none focus:border-[#f84100]"
                required
              />
            </div>
          )}

          {/* Ukrainian Title */}
          <div>
            <label className="block text-[#f3f0fa]/70 text-sm mb-2">
              Заголовок (українською)
            </label>
            <input
              type="text"
              value={formData.ukTitle}
              onChange={(e) => setFormData({ ...formData, ukTitle: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a28] text-white focus:outline-none focus:border-[#f84100]"
              required
            />
          </div>

          {/* Ukrainian Excerpt */}
          <div>
            <label className="block text-[#f3f0fa]/70 text-sm mb-2">
              Короткий опис (українською)
            </label>
            <textarea
              value={formData.ukExcerpt}
              onChange={(e) => setFormData({ ...formData, ukExcerpt: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a28] text-white focus:outline-none focus:border-[#f84100] h-24 resize-none"
              required
            />
          </div>

          {/* Ukrainian Content */}
          <div>
            <label className="block text-[#f3f0fa]/70 text-sm mb-2">
              Повний текст статті (українською, Markdown)
            </label>
            <textarea
              value={formData.ukContent}
              onChange={(e) => setFormData({ ...formData, ukContent: e.target.value })}
              placeholder="## Заголовок&#10;&#10;Текст статті...&#10;&#10;### Підзаголовок&#10;&#10;- Пункт списку&#10;- **Жирний текст**"
              className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a28] text-white focus:outline-none focus:border-[#f84100] h-64 resize-y font-mono text-sm"
            />
            <p className="text-[#f3f0fa]/50 text-xs mt-1">
              Використовуйте Markdown для форматування: ## для заголовків, ** для жирного тексту, - для списків
            </p>
          </div>

          {/* Category */}
          <div>
            <label className="block text-[#f3f0fa]/70 text-sm mb-2">Категорія</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a28] text-white focus:outline-none focus:border-[#f84100]"
            >
              {BLOG_CATEGORIES.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.icon} {cat.label_uk}
                </option>
              ))}
            </select>
          </div>

          {/* Icon */}
          <div>
            <label className="block text-[#f3f0fa]/70 text-sm mb-2">
              Іконка (emoji)
            </label>
            <input
              type="text"
              value={formData.icon}
              onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
              placeholder="📝"
              className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a28] text-white focus:outline-none focus:border-[#f84100]"
              maxLength={2}
            />
            <p className="text-[#f3f0fa]/50 text-xs mt-1">
              Вставте emoji (📋, 🤖, 💡, 🔗, 🚀, 🔮)
            </p>
          </div>

          {/* Image Upload */}
          <ImageUpload
            currentImage={formData.imageUrl}
            onImageChange={(url) => setFormData({ ...formData, imageUrl: url })}
            label="Зображення статті (опціонально)"
          />

          {/* Read Time */}
          <div>
            <label className="block text-[#f3f0fa]/70 text-sm mb-2">
              Час читання (хвилини)
            </label>
            <input
              type="number"
              value={formData.readTime}
              onChange={(e) =>
                setFormData({ ...formData, readTime: parseInt(e.target.value) })
              }
              className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a28] text-white focus:outline-none focus:border-[#f84100]"
              min="1"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-[#f3f0fa]/70 text-sm mb-2">Статус</label>
            <select
              value={formData.status}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  status: e.target.value as 'published' | 'draft' | 'scheduled',
                })
              }
              className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a28] text-white focus:outline-none focus:border-[#f84100]"
            >
              {BLOG_STATUSES.map((status) => (
                <option key={status.value} value={status.value}>
                  {status.icon} {status.label_uk}
                </option>
              ))}
            </select>
          </div>

          {/* Scheduled Date */}
          {formData.status === 'scheduled' && (
            <div>
              <label className="block text-[#f3f0fa]/70 text-sm mb-2">
                Дата публікації
              </label>
              <input
                type="datetime-local"
                value={formData.scheduledDate}
                onChange={(e) =>
                  setFormData({ ...formData, scheduledDate: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a28] text-white focus:outline-none focus:border-[#f84100]"
              />
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-[#f84100] rounded-lg font-bold text-white hover:bg-[#e63900] transition-all"
            >
              {postId ? 'Оновити' : 'Створити'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 bg-[#2a2a28] rounded-lg font-bold text-white hover:bg-[#3a3a38] transition-all"
            >
              Скасувати
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

function ContentManagement() {
  const [ukContent, setUkContent] = useState<any>(null)
  const [enContent, setEnContent] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [selectedPage, setSelectedPage] = useState<string | null>(null)
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null)
  const [editedUk, setEditedUk] = useState<any>(null)
  const [editedEn, setEditedEn] = useState<any>(null)

  useEffect(() => {
    loadContent()
  }, [])

  const loadContent = async () => {
    try {
      const ukRes = await import('@/locales/uk.json')
      const enRes = await import('@/locales/en.json')
      setUkContent(ukRes.default)
      setEnContent(enRes.default)
      setLoading(false)
    } catch (error) {
      console.error('Failed to load content:', error)
      setLoading(false)
    }
  }

  const pages = [
    {
      key: 'home',
      name: 'Головна сторінка',
      icon: '🏠',
      path: '/',
      blocks: ['hero', 'comparison', 'features', 'ecosystem']
    },
    {
      key: 'tools',
      name: 'Інструменти',
      icon: '🔧',
      path: '/tools',
      blocks: ['tools']
    },
    {
      key: 'pricing',
      name: 'Ціни',
      icon: '💰',
      path: '/pricing',
      blocks: ['pricing']
    },
    {
      key: 'contact',
      name: 'Контакти',
      icon: '📞',
      path: '/contact',
      blocks: ['contact']
    },
    {
      key: 'about',
      name: 'Про нас',
      icon: 'ℹ️',
      path: '/about',
      blocks: ['about']
    },
    {
      key: 'partners',
      name: 'Партнерам',
      icon: '🤝',
      path: '/partners',
      blocks: ['partners']
    },
    {
      key: 'blog',
      name: 'Блог',
      icon: '📝',
      path: '/blog',
      blocks: ['blog']
    },
  ]

  const blockNames: Record<string, string> = {
    hero: 'Hero секція',
    comparison: 'Порівняння',
    features: 'Можливості',
    ecosystem: 'Екосистема',
    tools: 'Інструменти',
    pricing: 'Ціни',
    contact: 'Контакти',
    about: 'Про нас',
    partners: 'Партнери',
    blog: 'Блог'
  }

  const handleEditBlock = (blockKey: string) => {
    setSelectedBlock(blockKey)
    setEditedUk(JSON.parse(JSON.stringify(ukContent[blockKey])))
    setEditedEn(JSON.parse(JSON.stringify(enContent[blockKey])))
  }

  const handleSave = async () => {
    try {
      alert('⚠️ API endpoint буде додано в наступній версії для збереження змін.')
    } catch (error) {
      alert('⚠️ Помилка збереження.')
    }
  }

  const renderField = (path: string, valueUk: any, valueEn: any, depth: number = 0): any => {
    if (valueUk === null || valueUk === undefined) return null

    if (typeof valueUk === 'string') {
      return (
        <div key={path} className="mb-6" style={{ marginLeft: `${depth * 20}px` }}>
          <label className="block text-white font-semibold text-sm mb-3">
            {path.split('.').pop()}
          </label>

          {/* Ukrainian field */}
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">🇺🇦 Українська</span>
            </div>
            {valueUk.length > 100 ? (
              <textarea
                value={valueUk}
                onChange={(e) => {
                  const keys = path.split('.')
                  const newData = JSON.parse(JSON.stringify(editedUk))
                  let current = newData
                  for (let i = 0; i < keys.length - 1; i++) {
                    current = current[keys[i]]
                  }
                  current[keys[keys.length - 1]] = e.target.value
                  setEditedUk(newData)
                }}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a28] text-white focus:outline-none focus:border-blue-500 resize-y"
              />
            ) : (
              <input
                type="text"
                value={valueUk}
                onChange={(e) => {
                  const keys = path.split('.')
                  const newData = JSON.parse(JSON.stringify(editedUk))
                  let current = newData
                  for (let i = 0; i < keys.length - 1; i++) {
                    current = current[keys[i]]
                  }
                  current[keys[keys.length - 1]] = e.target.value
                  setEditedUk(newData)
                }}
                className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a28] text-white focus:outline-none focus:border-blue-500"
              />
            )}
          </div>

          {/* English field */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">🇬🇧 English</span>
            </div>
            {(valueEn || '').length > 100 ? (
              <textarea
                value={valueEn || ''}
                onChange={(e) => {
                  const keys = path.split('.')
                  const newData = JSON.parse(JSON.stringify(editedEn))
                  let current = newData
                  for (let i = 0; i < keys.length - 1; i++) {
                    current = current[keys[i]]
                  }
                  current[keys[keys.length - 1]] = e.target.value
                  setEditedEn(newData)
                }}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a28] text-white focus:outline-none focus:border-green-500 resize-y"
              />
            ) : (
              <input
                type="text"
                value={valueEn || ''}
                onChange={(e) => {
                  const keys = path.split('.')
                  const newData = JSON.parse(JSON.stringify(editedEn))
                  let current = newData
                  for (let i = 0; i < keys.length - 1; i++) {
                    current = current[keys[i]]
                  }
                  current[keys[keys.length - 1]] = e.target.value
                  setEditedEn(newData)
                }}
                className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a28] text-white focus:outline-none focus:border-green-500"
              />
            )}
          </div>
        </div>
      )
    }

    if (Array.isArray(valueUk)) {
      return (
        <div key={path} className="mb-6" style={{ marginLeft: `${depth * 20}px` }}>
          <label className="block text-[#f3f0fa] font-semibold text-sm mb-3">
            {path.split('.').pop()} (масив)
          </label>
          <div className="border-l-2 border-[#f84100] pl-4">
            {valueUk.map((item, index) => {
              const enItem = Array.isArray(valueEn) ? valueEn[index] : undefined
              return renderField(`${path}.${index}`, item, enItem, depth + 1)
            })}
          </div>
        </div>
      )
    }

    if (typeof valueUk === 'object') {
      return (
        <div key={path} className="mb-8" style={{ marginLeft: `${depth * 20}px` }}>
          <label className="block text-white font-bold text-lg mb-4 border-b border-[#2a2a28] pb-3">
            {path.split('.').pop()}
          </label>
          <div className="space-y-4">
            {Object.entries(valueUk).map(([key, valUk]) => {
              const valEn = valueEn ? valueEn[key] : undefined
              return renderField(`${path}.${key}`, valUk, valEn, depth + 1)
            })}
          </div>
        </div>
      )
    }

    return null
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f84100] mx-auto mb-4"></div>
          <p>Завантаження контенту...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Управління контентом</h1>
        <p className="text-[#f3f0fa]/70">
          Редагуйте контент сторінок українською та англійською мовами
        </p>
      </div>

      {!selectedPage ? (
        /* Pages Selection */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pages.map((page) => (
            <motion.div
              key={page.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#131311] border border-[#2a2a28] rounded-xl p-6 hover:border-[#f84100] transition-all group cursor-pointer"
              onClick={() => setSelectedPage(page.key)}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{page.icon}</div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#f84100] transition-colors">
                    {page.name}
                  </h3>
                  <p className="text-[#f3f0fa]/50 text-sm mb-3">{page.path}</p>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-1 bg-[#f84100]/10 text-[#f84100] rounded">
                      {page.blocks.length} {page.blocks.length === 1 ? 'блок' : 'блоків'}
                    </span>
                  </div>
                </div>
                <svg className="w-5 h-5 text-[#f3f0fa]/30 group-hover:text-[#f84100] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      ) : !selectedBlock ? (
        /* Blocks Selection */
        <div>
          <button
            onClick={() => setSelectedPage(null)}
            className="mb-6 flex items-center gap-2 text-[#f3f0fa]/70 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Назад до сторінок
          </button>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              {pages.find(p => p.key === selectedPage)?.name}
            </h2>
            <p className="text-[#f3f0fa]/70">Виберіть блок для редагування</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pages.find(p => p.key === selectedPage)?.blocks.map((blockKey) => {
              const blockData = ukContent[blockKey]
              const fieldCount = blockData ? Object.keys(blockData).length : 0

              return (
                <motion.div
                  key={blockKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#131311] border border-[#2a2a28] rounded-xl p-6 hover:border-[#f84100] transition-all group cursor-pointer"
                  onClick={() => handleEditBlock(blockKey)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#f84100] transition-colors">
                        {blockNames[blockKey] || blockKey}
                      </h3>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded flex items-center gap-1">
                          🇺🇦 {fieldCount} полів
                        </span>
                        <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded flex items-center gap-1">
                          🇬🇧 {fieldCount} полів
                        </span>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-[#f3f0fa]/30 group-hover:text-[#f84100] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      ) : (
        /* Block Editor */
        <div>
          <button
            onClick={() => {
              setSelectedBlock(null)
              setEditedUk(null)
              setEditedEn(null)
            }}
            className="mb-6 flex items-center gap-2 text-[#f3f0fa]/70 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Назад до блоків
          </button>

          <div className="bg-[#131311] border border-[#2a2a28] rounded-xl overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-[#2a2a28] bg-[#1a1a18]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {blockNames[selectedBlock] || selectedBlock}
                  </h2>
                  <p className="text-[#f3f0fa]/50 text-sm">
                    {pages.find(p => p.key === selectedPage)?.name}
                  </p>
                </div>
                <button
                  onClick={handleSave}
                  className="px-6 py-3 bg-[#f84100] text-white rounded-lg font-bold hover:bg-[#e63900] transition-all flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Зберегти обидві мови
                </button>
              </div>
            </div>

            {/* Content Fields */}
            <div className="p-6 max-h-[calc(100vh-300px)] overflow-y-auto">
              {editedUk && editedEn && renderField(selectedBlock, editedUk, editedEn, 0)}
            </div>
          </div>

          {/* Info */}
          <div className="mt-6 bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">Двомовне редагування</h4>
                <p className="text-[#f3f0fa]/70 text-sm leading-relaxed">
                  Редагуйте контент одночасно українською та англійською мовами. Зміни зберігаються у відповідні файли локалізації (uk.json та en.json).
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


function ReferencesManagement() {
  const [selectedReference, setSelectedReference] = useState<string>('blog_categories')
  const [editingItem, setEditingItem] = useState<ReferenceValue | null>(null)
  const [showAddModal, setShowAddModal] = useState(false)

  const references = {
    blog_categories: { name: 'Категорії блогу', data: BLOG_CATEGORIES, icon: '📰' },
    blog_statuses: { name: 'Статуси публікацій', data: BLOG_STATUSES, icon: '✅' },
    transport_types: { name: 'Типи транспорту', data: TRANSPORT_TYPES, icon: '🚛' },
    cargo_types: { name: 'Типи вантажів', data: CARGO_TYPES, icon: '📦' },
    document_types: { name: 'Типи документів', data: DOCUMENT_TYPES, icon: '📄' },
    request_statuses: { name: 'Статуси заявок', data: REQUEST_STATUSES, icon: '🔔' },
    priority_levels: { name: 'Рівні пріоритету', data: PRIORITY_LEVELS, icon: '⚡' }
  }

  const currentRef = references[selectedReference as keyof typeof references]

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Управління довідниками</h1>
        <p className="text-[#f3f0fa]/70">
          Керуйте випадаючими списками та довідковими даними для всього сайту
        </p>
      </div>

      <div className="flex gap-6">
        {/* Sidebar with reference list */}
        <div className="w-80 space-y-2">
          {Object.entries(references).map(([key, ref]) => (
            <button
              key={key}
              onClick={() => setSelectedReference(key)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                selectedReference === key
                  ? 'bg-[#f84100] text-white'
                  : 'bg-[#131311] text-[#f3f0fa]/70 hover:bg-[#1a1a18] hover:text-white border border-[#2a2a28]'
              }`}
            >
              <span className="text-2xl">{ref.icon}</span>
              <div className="flex-1">
                <div className="font-semibold">{ref.name}</div>
                <div className="text-xs opacity-70">{ref.data.length} записів</div>
              </div>
            </button>
          ))}
        </div>

        {/* Main content area */}
        <div className="flex-1">
          <div className="bg-[#131311] border border-[#2a2a28] rounded-xl overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-[#2a2a28] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{currentRef.icon}</span>
                <div>
                  <h2 className="text-xl font-bold text-white">{currentRef.name}</h2>
                  <p className="text-sm text-[#f3f0fa]/50">
                    {currentRef.data.length} {currentRef.data.length === 1 ? 'запис' : 'записів'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowAddModal(true)}
                className="px-4 py-2 bg-[#f84100] text-white rounded-lg font-semibold hover:bg-[#e63900] transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Додати
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#1a1a18] border-b border-[#2a2a28]">
                  <tr>
                    <th className="text-left px-6 py-4 text-[#f3f0fa]/80 font-semibold text-sm">
                      Іконка
                    </th>
                    <th className="text-left px-6 py-4 text-[#f3f0fa]/80 font-semibold text-sm">
                      Значення
                    </th>
                    <th className="text-left px-6 py-4 text-[#f3f0fa]/80 font-semibold text-sm">
                      Українська
                    </th>
                    <th className="text-left px-6 py-4 text-[#f3f0fa]/80 font-semibold text-sm">
                      Англійська
                    </th>
                    {currentRef.data[0]?.color && (
                      <th className="text-left px-6 py-4 text-[#f3f0fa]/80 font-semibold text-sm">
                        Колір
                      </th>
                    )}
                    <th className="text-right px-6 py-4 text-[#f3f0fa]/80 font-semibold text-sm">
                      Дії
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2a2a28]">
                  {currentRef.data.map((item, index) => (
                    <tr
                      key={item.value}
                      className="hover:bg-[#1a1a18]/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <span className="text-2xl">{item.icon}</span>
                      </td>
                      <td className="px-6 py-4">
                        <code className="px-2 py-1 bg-[#0a0a0a] rounded text-sm text-[#f84100] font-mono">
                          {item.value}
                        </code>
                      </td>
                      <td className="px-6 py-4 text-white">{item.label_uk}</td>
                      <td className="px-6 py-4 text-[#f3f0fa]/70">{item.label_en}</td>
                      {item.color && (
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-6 h-6 rounded border border-[#2a2a28]"
                              style={{ backgroundColor: item.color }}
                            />
                            <code className="text-xs text-[#f3f0fa]/50">{item.color}</code>
                          </div>
                        </td>
                      )}
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setEditingItem(item)}
                            className="p-2 text-[#f3f0fa]/70 hover:text-[#f84100] hover:bg-[#f84100]/10 rounded-lg transition-all"
                            title="Редагувати"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => {
                              if (confirm(`Видалити "${item.label_uk}"?`)) {
                                alert('Функція видалення буде додана в наступній версії')
                              }
                            }}
                            className="p-2 text-[#f3f0fa]/70 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                            title="Видалити"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Empty state */}
            {currentRef.data.length === 0 && (
              <div className="p-12 text-center">
                <div className="text-6xl mb-4">📋</div>
                <h3 className="text-xl font-semibold text-white mb-2">Немає записів</h3>
                <p className="text-[#f3f0fa]/50 mb-6">
                  Додайте перший запис до цього довідника
                </p>
                <button
                  onClick={() => setShowAddModal(true)}
                  className="px-6 py-3 bg-[#f84100] text-white rounded-lg font-semibold hover:bg-[#e63900] transition-all"
                >
                  Додати запис
                </button>
              </div>
            )}
          </div>

          {/* Info card */}
          <div className="mt-6 bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">Інформація про довідник</h4>
                <p className="text-[#f3f0fa]/70 text-sm leading-relaxed">
                  Ці дані використовуються в випадаючих списках по всьому сайту. Зміни відразу
                  відобразяться в адмін-панелі, формах та інших компонентах. Для повного застосування
                  змін може знадобитися перезавантаження сторінки.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {editingItem && (
        <ReferenceEditModal
          item={editingItem}
          referenceType={currentRef.name}
          onClose={() => setEditingItem(null)}
          onSave={(updatedItem) => {
            alert('Функція збереження буде додана в наступній версії')
            setEditingItem(null)
          }}
        />
      )}

      {/* Add Modal */}
      {showAddModal && (
        <ReferenceEditModal
          item={null}
          referenceType={currentRef.name}
          onClose={() => setShowAddModal(false)}
          onSave={(newItem) => {
            alert('Функція додавання буде додана в наступній версії')
            setShowAddModal(false)
          }}
        />
      )}
    </div>
  )
}

function ReferenceEditModal({
  item,
  referenceType,
  onClose,
  onSave,
}: {
  item: ReferenceValue | null
  referenceType: string
  onClose: () => void
  onSave: (item: ReferenceValue) => void
}) {
  const [formData, setFormData] = useState<ReferenceValue>({
    value: item?.value || '',
    label_uk: item?.label_uk || '',
    label_en: item?.label_en || '',
    icon: item?.icon || '',
    color: item?.color || '',
    description_uk: item?.description_uk || '',
    description_en: item?.description_en || '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#131311] border border-[#2a2a28] rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-auto"
      >
        <h2 className="text-2xl font-bold text-white mb-6">
          {item ? 'Редагувати запис' : 'Додати новий запис'} - {referenceType}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Value */}
          <div>
            <label className="block text-[#f3f0fa]/70 text-sm mb-2">
              Значення (value) *
            </label>
            <input
              type="text"
              value={formData.value}
              onChange={(e) => setFormData({ ...formData, value: e.target.value })}
              placeholder="news"
              className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a28] text-white focus:outline-none focus:border-[#f84100] font-mono"
              required
              disabled={!!item}
            />
            <p className="text-[#f3f0fa]/50 text-xs mt-1">
              Унікальний ідентифікатор (англійською, lowercase, без пробілів)
            </p>
          </div>

          {/* Icon */}
          <div>
            <label className="block text-[#f3f0fa]/70 text-sm mb-2">Іконка (emoji)</label>
            <input
              type="text"
              value={formData.icon}
              onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
              placeholder="📰"
              className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a28] text-white focus:outline-none focus:border-[#f84100]"
              maxLength={2}
            />
          </div>

          {/* Ukrainian Label */}
          <div>
            <label className="block text-[#f3f0fa]/70 text-sm mb-2">
              Назва українською *
            </label>
            <input
              type="text"
              value={formData.label_uk}
              onChange={(e) => setFormData({ ...formData, label_uk: e.target.value })}
              placeholder="Новини"
              className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a28] text-white focus:outline-none focus:border-[#f84100]"
              required
            />
          </div>

          {/* English Label */}
          <div>
            <label className="block text-[#f3f0fa]/70 text-sm mb-2">
              Назва англійською *
            </label>
            <input
              type="text"
              value={formData.label_en}
              onChange={(e) => setFormData({ ...formData, label_en: e.target.value })}
              placeholder="News"
              className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a28] text-white focus:outline-none focus:border-[#f84100]"
              required
            />
          </div>

          {/* Color */}
          <div>
            <label className="block text-[#f3f0fa]/70 text-sm mb-2">
              Колір (опціонально)
            </label>
            <div className="flex gap-3">
              <input
                type="color"
                value={formData.color || '#3b82f6'}
                onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                className="h-12 w-20 rounded-lg bg-[#0a0a0a] border border-[#2a2a28] cursor-pointer"
              />
              <input
                type="text"
                value={formData.color}
                onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                placeholder="#3b82f6"
                className="flex-1 px-4 py-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a28] text-white focus:outline-none focus:border-[#f84100] font-mono"
              />
            </div>
            <p className="text-[#f3f0fa]/50 text-xs mt-1">
              Використовується для статусів та міток
            </p>
          </div>

          {/* Ukrainian Description */}
          <div>
            <label className="block text-[#f3f0fa]/70 text-sm mb-2">
              Опис українською (опціонально)
            </label>
            <textarea
              value={formData.description_uk}
              onChange={(e) => setFormData({ ...formData, description_uk: e.target.value })}
              placeholder="Короткий опис для підказок та довідки"
              className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a28] text-white focus:outline-none focus:border-[#f84100] h-20 resize-none"
            />
          </div>

          {/* English Description */}
          <div>
            <label className="block text-[#f3f0fa]/70 text-sm mb-2">
              Опис англійською (опціонально)
            </label>
            <textarea
              value={formData.description_en}
              onChange={(e) => setFormData({ ...formData, description_en: e.target.value })}
              placeholder="Short description for hints and help"
              className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a28] text-white focus:outline-none focus:border-[#f84100] h-20 resize-none"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-[#f84100] rounded-lg font-bold text-white hover:bg-[#e63900] transition-all"
            >
              {item ? 'Зберегти зміни' : 'Додати запис'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-lg border border-[#2a2a28] text-[#f3f0fa]/70 hover:bg-[#1a1a18] hover:text-white transition-all"
            >
              Скасувати
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}
