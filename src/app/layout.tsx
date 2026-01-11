import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { LanguageProvider } from '@/LanguageContext'
import { ErrorBoundary } from '@/components/ui/ErrorBoundary'
import SkipToContent from '@/components/ui/SkipToContent'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://trexim.ai'),
  title: {
    default: "Trexim - AI Logistics OS | The Neural Connect for Global Logistics",
    template: "%s | Trexim"
  },
  description: "Automate 70% of routine operations. Unite shippers, carriers, and banks in one trusted digital ecosystem driven by AI. The world's first Neural Logistics Operating System.",
  keywords: ["logistics", "AI", "automation", "supply chain", "carriers", "shippers", "freight", "transportation", "logistics platform", "digital logistics"],
  authors: [{ name: "Trexim.ai" }],
  creator: "Trexim.ai",
  publisher: "Trexim.ai",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['uk_UA'],
    url: 'https://trexim.ai',
    siteName: 'Trexim',
    title: 'Trexim - AI Logistics OS',
    description: 'Automate 70% of routine operations. Unite shippers, carriers, and banks in one trusted digital ecosystem driven by AI.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Trexim - AI Logistics Operating System',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Trexim - AI Logistics OS',
    description: 'Automate 70% of routine operations with AI-driven logistics platform',
    images: ['/og-image.png'],
    creator: '@trexim_ai',
  },

  // Additional
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Trexim',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              description: 'AI-powered logistics operating system that automates 70% of routine operations',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '127',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <SkipToContent />
        <ErrorBoundary>
          <LanguageProvider>
            <Header />
            <main className="pt-16 sm:pt-20" id="main-content" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
