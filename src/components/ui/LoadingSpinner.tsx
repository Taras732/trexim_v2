'use client'

import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg'
    text?: string
    fullScreen?: boolean
}

export default function LoadingSpinner({
    size = 'md',
    text,
    fullScreen = false
}: LoadingSpinnerProps) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
    }

    const content = (
        <div className="flex flex-col items-center justify-center gap-4">
            <Loader2
                className={`${sizeClasses[size]} animate-spin text-blue-500`}
                aria-label="Loading"
            />
            {text && (
                <p className="text-slate-400 text-sm">{text}</p>
            )}
        </div>
    )

    if (fullScreen) {
        return (
            <div
                className="fixed inset-0 bg-slate-950/95 backdrop-blur-sm flex items-center justify-center z-50"
                role="status"
                aria-live="polite"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {content}
                </motion.div>
            </div>
        )
    }

    return (
        <div role="status" aria-live="polite">
            {content}
        </div>
    )
}
