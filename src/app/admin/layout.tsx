import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Panel | Trexim",
  description: "Trexim Admin Panel - Content Management System",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
