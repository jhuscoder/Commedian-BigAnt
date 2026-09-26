'use client'

import Image from 'next/image'
import FadeIn from './FadeIn'
import { motion, useReducedMotion } from 'framer-motion'
import { SHOW_START, useCountdown } from '@/hooks/useCountdown'
import { TICKET_URL } from '@/lib/config'

interface Show {
  id: number
  title: string
  date: string
  day: string
  time: string
  venue: string
  address: string
  status: string
  poster: string
}

const events: Show[] = [
  {
    id: 1,
    title: 'You Must Be Joking',
    date: 'Oct 25, 2026',
    day: 'Sunday',
    time: '8:00 PM',
    venue: 'D\'Hall Event Center',
    address: 'Musa Y\'aradua Street, Victoria Island, Lagos',
    status: 'Almost Sold Out',
    poster: '/images/BigAnt-You must be joking.jpeg',
  },
]

function CountdownCell({ value, label }: { value: number; label: string }) {
  const padded = String(value).padStart(2, '0')
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 sm:w-[4.5rem] py-3 sm:py-3.5 bg-charcoal-lighter/60 border border-gold/15 text-center">
        <span className="font-heading text-2xl sm:text-3xl font-bold text-gold tabular-nums">{padded}</span>
      </div>
      <span className="mt-2 text-[10px] tracking-[0.25em] uppercase text-warm-gray">{label}</span>
    </div>
  )
}

function buildGoogleCalendarUrl(event: Show): string {
  const fmtUTC = (d: Date) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  const start = new Date(`${SHOW_START}+01:00`) // 8:00 PM WAT = 7:00 PM UTC (Lagos, no DST)
  const end = new Date(start.getTime() + 2 * 60 * 60 * 1000)
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `Big Ant — ${event.title}`,
    details: 'Save the date! Big Ant brings a night of timeless comedy to Lagos. Don\u2019t be the one who hears about it from somebody else.',
    location: `${event.venue}, ${event.address}`,
    dates: `${fmtUTC(start)}/${fmtUTC(end)}`,
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

export default function Events() {
  const featured = events[0]
  const rest = events.slice(1)
  const { days, hours, minutes, seconds, isLive } = useCountdown(SHOW_START)
  const reduceMotion = useReducedMotion()

  return (
    <section id="events" className="py-32 bg-charcoal relative overflow-hidden">
     
      <div
        className="absolute -top-40 right-0 w-[40rem] h-[40rem] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C9A96E 0%, transparent 65%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Live Performances</span>
            <h2 className="font-heading text-5xl sm:text-6xl font-bold text-ivory mt-4">
              Upcoming <span className="italic text-gold">Shows</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className="w-14 h-px bg-gradient-to-r from-transparent to-gold/50" />
              <svg className="w-2.5 h-2.5 text-gold/60" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
              </svg>
              <span className="w-14 h-px bg-gradient-to-l from-transparent to-gold/50" />
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <article className="group relative border border-gold/20 bg-charcoal-light/40">
            <div className="pointer-events-none absolute -top-2.5 -left-2.5 h-7 w-7 border-t-2 border-l-2 border-gold/50" />
            <div className="pointer-events-none absolute -top-2.5 -right-2.5 h-7 w-7 border-t-2 border-r-2 border-gold/50" />
            <div className="pointer-events-none absolute -bottom-2.5 -left-2.5 h-7 w-7 border-b-2 border-l-2 border-gold/50" />
            <div className="pointer-events-none absolute -bottom-2.5 -right-2.5 h-7 w-7 border-b-2 border-r-2 border-gold/50" />

            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[300px] lg:min-h-full min-w-0">
                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : { opacity: [0.06, 0.12, 0.06] }
                  }
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0"
                  style={{ background: 'radial-gradient(circle at 50% 40%, #C9A96E 0%, transparent 60%)' }}
                />
                <div className="relative aspect-[2/3] lg:aspect-auto lg:h-full min-w-0 overflow-hidden bg-charcoal-lighter/40">
                  <Image
                    src={featured.poster}
                    alt={`${featured.title} event poster`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 92vw"
                    className="object-contain object-center lg:object-cover lg:object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent lg:from-charcoal lg:via-charcoal/10 lg:to-transparent" />
                </div>
                <div className="absolute left-5 bottom-5 flex items-center gap-2.5 bg-charcoal/90 border border-gold/30 px-5 py-2.5">
                  <motion.span
                    animate={{ scale: [1, 1.35, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1.5 h-1.5 bg-gold rounded-full"
                  />
                  <span className="text-gold text-[10px] tracking-[0.25em] uppercase font-semibold">
                    {featured.status}
                  </span>
                </div>
              </div>

              <div className="p-8 sm:p-10 lg:p-14 min-w-0">
                <div className="flex items-center gap-4">
                  <span className="text-gold text-xs tracking-[0.3em] uppercase">Next Performance</span>
                  <span className="flex-1 h-px bg-gold/20" />
                </div>

                <h3 className="font-heading text-4xl sm:text-5xl font-bold text-ivory mt-6 leading-[1.05]">
                  {featured.title.split(' ').slice(0, -1).join(' ')}{' '}
                  <span className="italic text-gold">{featured.title.split(' ').slice(-1)}</span>
                </h3>

                <p className="text-warm-gray text-sm sm:text-base leading-relaxed mt-5 max-w-md">
                  One night only. One stage. Lagos prepares to laugh.
                </p>

                <dl className="mt-9 space-y-4 border-t border-gold/15 pt-7">
                  <div className="flex items-baseline gap-6 flex-wrap">
                    <dt className="w-14 shrink-0 text-[11px] tracking-[0.25em] uppercase text-gold/60 font-semibold">Date</dt>
                    <dd className="text-sm sm:text-base text-ivory/90">{featured.day} &middot; {featured.date}</dd>
                  </div>
                  <div className="flex items-baseline gap-6 flex-wrap">
                    <dt className="w-14 shrink-0 text-[11px] tracking-[0.25em] uppercase text-gold/60 font-semibold">Time</dt>
                    <dd className="text-sm sm:text-base text-ivory/90">{featured.time} WAT</dd>
                  </div>
                  <div className="flex items-baseline gap-6 flex-wrap">
                    <dt className="w-14 shrink-0 text-[11px] tracking-[0.25em] uppercase text-gold/60 font-semibold">Venue</dt>
                    <dd className="text-sm sm:text-base text-ivory/90">
                      {featured.venue} &mdash; {featured.address}
                    </dd>
                  </div>
                </dl>

                <div className="flex flex-wrap items-center gap-1.5 mt-8" aria-hidden="true">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <span key={i} className="w-1 h-1 rounded-full bg-gold/25" />
                  ))}
                </div>

                <div className="mt-8">
                  <p className="text-[11px] tracking-[0.25em] uppercase text-warm-gray">
                    {isLive ? 'Show starts now' : 'Show opens in'}
                  </p>
                  <div className="flex items-start gap-2 mt-4">
                    <CountdownCell value={days} label="Days" />
                    <CountdownCell value={hours} label="Hours" />
                    <CountdownCell value={minutes} label="Minutes" />
                    <CountdownCell value={seconds} label="Seconds" />
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href={TICKET_URL || '#'}
                    className="inline-flex items-center gap-2.5 bg-gold hover:bg-gold-dark text-charcoal px-8 py-4 font-body font-semibold tracking-[0.12em] uppercase text-xs transition-all duration-300 border border-gold hover:border-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    Get Tickets
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href={buildGoogleCalendarUrl(featured)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-gold/70 hover:text-gold px-6 py-4 font-body font-medium tracking-[0.12em] uppercase text-xs transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Save the Date
                  </a>
                </div>
              </div>
            </div>
          </article>
        </FadeIn>

        {rest.length > 0 && (
          <div className="mt-6 space-y-4">
            {rest.map((event, i) => (
              <FadeIn key={event.id} delay={0.15 + i * 0.1}>
                <div className="group border border-gold/10 hover:border-gold/25 bg-charcoal-light/50 hover:bg-charcoal-light transition-all duration-500 px-6 md:px-8 py-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="flex-shrink-0 md:w-44">
                    <div className="font-heading text-xl font-bold text-gold">{event.date}</div>
                    <div className="text-warm-gray text-[11px] tracking-wider uppercase mt-1">
                      {event.day} &middot; {event.time}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading text-xl font-bold text-ivory group-hover:text-gold transition-colors duration-300">
                      {event.title}
                    </h4>
                    <p className="text-warm-gray text-sm mt-0.5">
                      {event.venue} &mdash; {event.address}
                    </p>
                  </div>
                  <a
                    href={TICKET_URL || '#'}
                    className="self-start md:self-auto px-6 py-2.5 text-xs tracking-wider uppercase font-semibold transition-all duration-300 bg-gold hover:bg-gold-dark text-charcoal border border-gold hover:border-gold-dark"
                  >
                    Get Tickets
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}