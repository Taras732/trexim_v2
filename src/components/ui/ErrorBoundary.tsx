'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Props {
    children: ReactNode
    fallback?: ReactNode
}

interface State {
    hasError: boolean
    error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error caught by boundary:', error, errorInfo)
        // TODO: Log to error reporting service (e.g., Sentry)
    }

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback
            }

            return (
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-md w-full text-center"
                    >
                        <div className="mb-8">
                            <div className="text-6xl mb-4">⚠️</div>
                            <h1 className="text-3xl font-bold text-white mb-4">
                                Oops! Something went wrong
                            </h1>
                            <p className="text-slate-400 mb-8">
                                We're sorry for the inconvenience. Please try refreshing the page.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <button
                                onClick={() => window.location.reload()}
                                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                            >
                                Refresh Page
                            </button>

                            <button
                                onClick={() => window.location.href = '/'}
                                className="w-full px-6 py-3 bg-slate-800/60 rounded-lg font-semibold text-white hover:bg-slate-800/80 transition-all duration-300"
                            >
                                Go to Homepage
                            </button>
                        </div>

                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <div className="mt-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-left">
                                <p className="text-red-400 text-sm font-mono">
                                    {this.state.error.message}
                                </p>
                            </div>
                        )}
                    </motion.div>
                </div>
            )
        }

        return this.props.children
    }
}
