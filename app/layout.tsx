import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
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
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
