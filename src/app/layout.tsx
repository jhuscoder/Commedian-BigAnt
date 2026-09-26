import type { Metadata, Viewport } from 'next'
import { Playfair_Display, DM_Sans, Pacifico } from 'next/font/google'
import './globals.css'
import Loader from '@/components/Loader'
import SmoothScroll from '@/components/SmoothScroll'
import { SITE_URL, SHOW, TICKET_URL, CONTACT } from '@/lib/config'

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

const FALLBACK_TITLE = 'Big Ant | The Art of Timeless Comedy'
const description = 'The official website of Big Ant — Comedian, Performer, and Entertainer. A decade of commanding stages with observational humor and storytelling that transcends generations.'

const [startDate, startTime] = SHOW.startIso.split('T')
const [shY, shM, shD] = startDate.split('-').map(Number)
const [shHh, shMm, shSs] = startTime.split(':').map(Number)
const pad = (n: number) => String(n).padStart(2, '0')
const startInstantUtc = Date.UTC(shY, shM - 1, shD, shHh, shMm, shSs) - 3600 * 1000 // 20:00 WAT = 19:00 UTC
const endLocal = new Date(startInstantUtc + SHOW.durationHours * 3600 * 1000 + 3600 * 1000)
const eventStartDate = `${SHOW.startIso}${SHOW.tzOffset}`
const eventEndDate = `${endLocal.getUTCFullYear()}-${pad(endLocal.getUTCMonth() + 1)}-${pad(endLocal.getUTCDate())}T${pad(endLocal.getUTCHours())}:${pad(endLocal.getUTCMinutes())}:00${SHOW.tzOffset}`

const posterUrl = `${SITE_URL}/images/BigAnt-You must be joking.jpeg`
const ogUrl = `${SITE_URL}/og-image.png`

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Big Ant',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.svg` },
      sameAs: [CONTACT.facebook, CONTACT.instagram],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: FALLBACK_TITLE,
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'Event',
      '@id': `${SITE_URL}/#event`,
      name: `Big Ant — ${SHOW.title}`,
      description,
      url: SITE_URL,
      image: [posterUrl],
      startDate: eventStartDate,
      endDate: eventEndDate,
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: {
        '@type': 'Place',
        name: SHOW.venue,
        address: {
          '@type': 'PostalAddress',
          streetAddress: SHOW.address.split(',')[0],
          addressLocality: 'Victoria Island',
          addressRegion: 'Lagos',
          addressCountry: SHOW.country,
        },
      },
      organizer: { '@id': `${SITE_URL}/#organization` },
      performer: { '@type': 'Person', name: 'Big Ant' },
      offers: {
        '@type': 'Offer',
        url: TICKET_URL,
        name: 'General Admission',
        priceCurrency: 'NGN',
        availability: 'https://schema.org/InStock',
        validFrom: '2026-01-01T00:00:00+01:00',
        validThrough: eventEndDate,
      },
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: 'Big Ant',
  title: FALLBACK_TITLE,
  description,
  keywords: [
    'Big Ant',
    'Big Ant comedian',
    'You Must Be Joking',
    'Lagos comedy',
    'stand-up comedy Lagos',
    'Nigerian comedian',
    'comedy show Lagos 2026',
    'comedy tickets Lagos',
    'comedy',
    'comedian',
    'entertainment',
  ],
  authors: [{ name: 'Big Ant' }],
  creator: 'Big Ant',
  category: 'entertainment',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: SITE_URL,
    siteName: 'Big Ant',
    title: FALLBACK_TITLE,
    description,
    images: [
      {
        url: ogUrl,
        width: 1200,
        height: 630,
        alt: `${FALLBACK_TITLE} — ${SHOW.title}. Sunday, Oct 25, 2026 at 8:00 PM, ${SHOW.venue}, Lagos.`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: FALLBACK_TITLE,
    description,
    images: [ogUrl],
  },
  appleWebApp: {
    capable: true,
    title: 'Big Ant',
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
    url: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#1A1A1A',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${pacifico.variable}`}>
      <body className="font-body antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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