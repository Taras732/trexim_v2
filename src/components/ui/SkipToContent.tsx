'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

/**
 * Skip to Content Link
 * Improves keyboard navigation accessibility
 */
export default function SkipToContent() {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Focus main content on Alt+M
            if (e.altKey && e.key === 'm') {
                e.preventDefault()
                const main = document.querySelector('main')
                if (main) {
                    main.focus()
                    main.scrollIntoView({ behavior: 'smooth' })
                }
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    return (
        <motion.a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            onClick={(e) => {
                e.preventDefault()
                const main = document.getElementById('main-content')
                if (main) {
                    main.focus()
                    main.scrollIntoView({ behavior: 'smooth' })
                }
            }}
        >
            Skip to main content
        </motion.a>
    )
}
