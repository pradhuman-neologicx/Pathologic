import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'PATHOLOGIC | Structured veterinary diagnostics', template: '%s' },
  description: 'PATHOLOGIC supports veterinary diagnostic decision-making through structured postmortem analysis.',
  generator: 'PATHOLOGIC',
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f4f7f4' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
