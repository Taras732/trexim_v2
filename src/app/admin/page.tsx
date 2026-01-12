'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AdminRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to home for static export
    // Admin panel requires server-side functionality
    router.push('/')
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#131311] via-[#1a1a18] to-[#131311] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-4">
          Адмін-панель недоступна в статичній версії
        </h1>
        <p className="text-[#f3f0fa]/70 mb-6">
          Для використання адмін-панелі потрібен серверний режим Next.js
        </p>
        <a href="/" className="px-6 py-3 bg-[#f84100] text-white rounded-lg font-bold hover:bg-[#e63900] transition-all inline-block">
          Повернутися на головну
        </a>
      </div>
    </div>
  )
}
