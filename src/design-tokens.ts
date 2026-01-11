/**
 * Design System Tokens for Trexim v2
 * Central source of truth for colors, spacing, typography, and other design values
 */

export const colors = {
    // Brand colors
    brand: {
        primary: '#3B82F6', // blue-600
        primaryLight: '#60A5FA', // blue-500
        primaryDark: '#2563EB', // blue-700
    },

    // Accent colors
    accent: {
        purple: '#9333EA', // purple-600
        cyan: '#06B6D4', // cyan-500
        teal: '#14B8A6', // teal-500
        emerald: '#10B981', // emerald-500
    },

    // Gradients
    gradients: {
        primary: 'linear-gradient(to right, #3B82F6, #60A5FA)',
        accent: 'linear-gradient(to right, #9333EA, #3B82F6)',
        success: 'linear-gradient(to right, #10B981, #14B8A6)',
        hero: 'linear-gradient(to right, #A78BFA, #60A5FA, #22D3EE)', // purple-400 -> blue-400 -> cyan-400
    },

    // Slate palette (dark theme)
    slate: {
        50: '#F8FAFC',
        100: '#F1F5F9',
        200: '#E2E8F0',
        300: '#CBD5E1',
        400: '#94A3B8',
        500: '#64748B',
        600: '#475569',
        700: '#334155',
        800: '#1E293B',
        900: '#0F172A',
        950: '#020617',
    },

    // Semantic colors
    semantic: {
        success: '#10B981', // green-500
        warning: '#F59E0B', // amber-500
        error: '#EF4444', // red-500
        info: '#3B82F6', // blue-600
    },

    // Background colors
    background: {
        primary: '#0A0A0A',
        secondary: '#0F172A', // slate-900
        tertiary: '#1E293B', // slate-800
        card: 'rgba(30, 41, 59, 0.6)', // slate-800/60
        cardHover: 'rgba(30, 41, 59, 0.8)', // slate-800/80
    },

    // Text colors
    text: {
        primary: '#EDEDED',
        secondary: '#CBD5E1', // slate-300
        tertiary: '#94A3B8', // slate-400
        muted: '#64748B', // slate-500
    },

    // Border colors
    border: {
        default: 'rgba(51, 65, 85, 0.5)', // slate-700/50
        light: 'rgba(148, 163, 184, 0.2)', // slate-400/20
        accent: 'rgba(59, 130, 246, 0.5)', // blue-600/50
    },
} as const

export const spacing = {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
    '4xl': '6rem',    // 96px
    '5xl': '8rem',    // 128px
} as const

export const typography = {
    fontFamily: {
        sans: "'Inter', sans-serif",
        mono: "'Courier New', monospace",
    },

    fontSize: {
        xs: '0.75rem',      // 12px
        sm: '0.875rem',     // 14px
        base: '1rem',       // 16px
        lg: '1.125rem',     // 18px
        xl: '1.25rem',      // 20px
        '2xl': '1.5rem',    // 24px
        '3xl': '1.875rem',  // 30px
        '4xl': '2.25rem',   // 36px
        '5xl': '3rem',      // 48px
        '6xl': '3.75rem',   // 60px
        '7xl': '4.5rem',    // 72px
    },

    fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },

    lineHeight: {
        tight: 1.25,
        normal: 1.5,
        relaxed: 1.75,
    },
} as const

export const borderRadius = {
    sm: '0.375rem',   // 6px
    md: '0.5rem',     // 8px
    lg: '0.75rem',    // 12px
    xl: '1rem',       // 16px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem',// 30px
    full: '9999px',
} as const

export const shadows = {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    glow: {
        blue: '0 0 20px rgba(59, 130, 246, 0.5)',
        purple: '0 0 20px rgba(147, 51, 234, 0.5)',
        cyan: '0 0 20px rgba(6, 182, 212, 0.5)',
    },
} as const

export const transitions = {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out',
} as const

export const breakpoints = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
} as const

export const zIndex = {
    base: 0,
    dropdown: 10,
    sticky: 20,
    fixed: 30,
    modalBackdrop: 40,
    modal: 50,
    popover: 60,
    tooltip: 70,
} as const

// Animation variants for Framer Motion
export const animations = {
    fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.6 },
    },

    fadeInUp: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    },

    fadeInDown: {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    },

    scaleIn: {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.4 },
    },

    slideInLeft: {
        initial: { opacity: 0, x: -30 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6 },
    },

    slideInRight: {
        initial: { opacity: 0, x: 30 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6 },
    },
} as const

export type Colors = typeof colors
export type Spacing = typeof spacing
export type Typography = typeof typography
export type BorderRadius = typeof borderRadius
export type Shadows = typeof shadows
export type Transitions = typeof transitions
export type Breakpoints = typeof breakpoints
export type ZIndex = typeof zIndex
export type Animations = typeof animations
