import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trexim - AI Logistics OS',
  description: 'Automate 70% of routine operations. Unite shippers, carriers, and banks in one trusted digital ecosystem driven by AI.',
  keywords: 'logistics, AI, automation, supply chain',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://trexim.ai',
    siteName: 'Trexim.ai',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
