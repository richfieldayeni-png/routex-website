import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--body',
})

export const metadata: Metadata = {
  title: 'RouteX — Corporate Transport Platform',
  description:
    "RouteX — Smart corporate transport for Abuja's business district. Book reliable, trackable, seat-based commutes for your team.",
  keywords: 'corporate transport, Abuja, commute, bus booking, B2B transport Nigeria',
  openGraph: {
    title: 'RouteX — Corporate Transport Platform',
    description: 'Smart, reliable corporate commutes for Abuja businesses.',
    url: 'https://routexgo.co',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
