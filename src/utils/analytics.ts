/**
 * Analytics utilities for Trexim v2
 * Prepared for Google Analytics, Meta Pixel, or other analytics services
 */

// Types
export interface AnalyticsEvent {
    action: string
    category: string
    label?: string
    value?: number
}

export interface PageViewEvent {
    path: string
    title: string
}

// Google Analytics 4 (GA4) helper
export const trackPageView = (event: PageViewEvent) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
            page_path: event.path,
            page_title: event.title,
        })
    }
}

// Track custom events
export const trackEvent = (event: AnalyticsEvent) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', event.action, {
            event_category: event.category,
            event_label: event.label,
            value: event.value,
        })
    }
}

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean) => {
    trackEvent({
        action: success ? 'form_submit_success' : 'form_submit_error',
        category: 'engagement',
        label: formName,
    })
}

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
    trackEvent({
        action: 'button_click',
        category: 'engagement',
        label: `${buttonName} - ${location}`,
    })
}

// Track section views (intersection observer)
export const trackSectionView = (sectionName: string) => {
    trackEvent({
        action: 'section_view',
        category: 'engagement',
        label: sectionName,
    })
}

// Track language change
export const trackLanguageChange = (from: string, to: string) => {
    trackEvent({
        action: 'language_change',
        category: 'user_preference',
        label: `${from} -> ${to}`,
    })
}

// Track errors
export const trackError = (errorMessage: string, errorLocation: string) => {
    trackEvent({
        action: 'error',
        category: 'technical',
        label: `${errorLocation}: ${errorMessage}`,
    })
}

// Initialize analytics (call this in layout or _app)
export const initAnalytics = () => {
    // Add GA4 script
    if (process.env.NEXT_PUBLIC_GA_ID && typeof window !== 'undefined') {
        const script = document.createElement('script')
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`
        script.async = true
        document.head.appendChild(script)

        const configScript = document.createElement('script')
        configScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
        page_path: window.location.pathname,
      });
    `
        document.head.appendChild(configScript)
    }
}

// Usage example:
// import { trackEvent, trackPageView } from '@/utils/analytics'
//
// trackPageView({ path: '/about', title: 'About Us' })
// trackEvent({ action: 'click', category: 'button', label: 'CTA' })
