import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Starlight - Official Website',
  description: 'Welcome to Starlight - Innovation starts here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
