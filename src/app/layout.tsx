import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, Pacifico } from 'next/font/google'
import './globals.css'
import Loader from '@/components/Loader'
import SmoothScroll from '@/components/SmoothScroll'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-script',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://comedianbigant.com'),
  title: 'Big Ant | The Art of Timeless Comedy',
  description: 'The official website of Big Ant — Comedian, Performer, and Entertainer. A decade of commanding stages with observational humor and storytelling that transcends generations.',
  keywords: ['comedy', 'comedian', 'Big Ant', 'stand-up', 'entertainment', 'live shows', 'timeless comedy'],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Big Ant | The Art of Timeless Comedy',
    description: 'A decade of commanding stages with observational humor and storytelling that transcends generations.',
    images: ['/images/mic.jpeg'],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${pacifico.variable}`}>
      <body className="font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:text-charcoal focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
        >
          Skip to content
        </a>
        <Loader />
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
