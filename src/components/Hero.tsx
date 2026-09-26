'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef, useState } from 'react'
import { useCountdown } from '@/hooks/useCountdown'
import { TICKET_URL } from '@/lib/config'
import Toast from './Toast'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, reduceMotion ? 1 : 0])
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '18%'])
  const { days, hours, minutes, seconds } = useCountdown()

  const pad = (n: number) => String(n).padStart(2, '0')

  const [toast, setToast] = useState<string | null>(null)
  const [antShaking, setAntShaking] = useState(false)

  const triggerAntEasterEgg = () => {
    if (antShaking) return
    setAntShaking(true)
    setToast('Ba dum tss — na you qualify for front row.')
    setTimeout(() => setAntShaking(false), 700)
  }

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <motion.div aria-hidden="true" style={{ y: bgY }} className="absolute inset-0 pointer-events-none will-change-transform">
        <div
          className="absolute -top-1/4 left-[12%] w-40 lg:w-56 h-[160%] rotate-12"
          style={{ background: 'linear-gradient(to bottom, rgba(201,169,110,0.14), transparent 65%)' }}
        />
        <div
          className="absolute -top-1/4 right-[10%] w-40 lg:w-56 h-[160%] -rotate-12"
          style={{ background: 'linear-gradient(to bottom, rgba(201,169,110,0.10), transparent 65%)' }}
        />
      </motion.div>

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(900px 620px at 74% 12%, rgba(201,169,110,0.12) 0%, transparent 62%)' }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(720px 520px at 12% 55%, rgba(245,240,232,0.05) 0%, transparent 65%)' }}
      />

      <div aria-hidden="true" className="absolute inset-x-0 bottom-[4%] flex justify-center pointer-events-none select-none">
        <span
          className="font-heading italic font-bold whitespace-nowrap leading-none text-transparent text-[9rem] sm:text-[16rem] lg:text-[24rem] xl:text-[30rem] opacity-[0.05]"
          style={{ WebkitTextStroke: '1px rgba(201,169,110,0.65)' }}
        >
          JOKING
        </span>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(135% 115% at 50% 45%, transparent 55%, rgba(0,0,0,0.5) 100%)' }}
      />

      <motion.div style={{ y: textY, opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 will-change-transform">
        <div className="grid lg:grid-cols-[7fr_5fr] gap-14 lg:gap-10 items-center min-h-[80vh] py-24">
          <div className="order-2 lg:order-1">
            <motion.a
              href="#events"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-2.5 border border-gold/25 bg-charcoal-light px-4 py-2 mb-9 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <motion.span
                animate={reduceMotion ? undefined : { scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-gold rounded-full"
              />
              <span className="text-gold text-[10px] tracking-[0.25em] uppercase font-semibold">
                Almost Sold Out
              </span>
            </motion.a>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.4 }}
              className="font-heading font-bold leading-[0.85]"
            >
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="block text-ivory text-base sm:text-lg lg:text-xl tracking-[0.5em] uppercase mb-3 lg:mb-4">
                Big
              </motion.span>
              <motion.button
                type="button"
                onClick={triggerAntEasterEgg}
                aria-label="Big Ant — try the punchline"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className={`block text-gold italic text-[5.5rem] sm:text-[7rem] md:text-[8rem] lg:text-[10.5rem] -mt-3 sm:-mt-4 md:-mt-5 cursor-pointer select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-gold ${
                  antShaking ? 'shake-anim' : ''
                }`}>
                ANT
              </motion.button>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="origin-left mt-7 mb-6">
              <div className="flex items-center gap-3">
                <span className="w-12 sm:w-20 h-px bg-gradient-to-r from-gold/50 to-transparent" />
                <svg className="w-2.5 h-2.5 text-gold/50" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
                </svg>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-gold/70">The Comeback Show</span>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-ivory mt-3 leading-[1.05]">
                You Must Be <span className="italic text-gold">Joking</span>
              </h2>
              <p className="text-warm-gray text-sm sm:text-base mt-5 max-w-md leading-relaxed font-light">
                Big Anthony returns to the stage for one night at D&rsquo;Hall Event Center,
                Victoria Island. The room is almost full already.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-8 border-l border-gold/25 pl-5 flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="text-xs tracking-[0.2em] uppercase text-warm-gray-light">Sunday &middot; Oct 25</span>
              <span className="w-1 h-1 rounded-full bg-gold/30" aria-hidden="true" />
              <span className="text-xs tracking-[0.2em] uppercase text-warm-gray-light">8:00 PM WAT</span>
              <span className="w-1 h-1 rounded-full bg-gold/30" aria-hidden="true" />
              <span className="text-xs tracking-[0.2em] uppercase text-warm-gray-light">Victoria Island, Lagos</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={TICKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gold hover:bg-gold-dark text-black px-8 py-3.5 font-body font-semibold tracking-[0.12em] uppercase text-xs transition-all duration-300 flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
                Get Tickets
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#media"
                className="group text-gold/70 hover:text-gold px-6 py-3.5 font-body font-medium tracking-[0.12em] uppercase text-xs transition-all duration-300 flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Clips
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-1 lg:order-2 flex flex-col items-center lg:items-start justify-center relative">
            <div className="relative w-[290px] h-[362px] sm:w-[340px] sm:h-[425px] lg:w-[400px] lg:h-[500px]">
              <motion.div
                animate={reduceMotion ? undefined : { opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 40%, #C9A96E 0%, transparent 62%)' }}
              />
              <div className="absolute -right-3 -top-3 w-full h-full border border-gold/20" aria-hidden="true" />

              <motion.div
                animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full h-full overflow-hidden bg-charcoal-light">
                <Image
                  src="/images/mic.jpeg"
                  alt="Big Anthony on the microphone"
                  fill
                  sizes="(max-width: 1024px) 80vw, 400px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/5 to-black/20" />
                <div className="absolute left-4 bottom-4 flex items-center gap-2 bg-charcoal/85 border border-gold/25 px-4 py-2">
                  <svg className="w-3 h-3 text-gold" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
                  </svg>
                  <span className="text-gold text-[9px] tracking-[0.25em] uppercase font-semibold">Victoria Island &middot; Lagos</span>
                </div>
              </motion.div>

              <div className="pointer-events-none absolute -top-2 -left-2 h-6 w-6 border-t-2 border-l-2 border-gold/60" aria-hidden="true" />
              <div className="pointer-events-none absolute -top-2 -right-2 h-6 w-6 border-t-2 border-r-2 border-gold/60" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-2 -left-2 h-6 w-6 border-b-2 border-l-2 border-gold/60" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-gold/60" aria-hidden="true" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="mt-6 w-[290px] sm:w-[340px] lg:w-[400px] border border-gold/20 bg-charcoal-light px-5 py-3.5 flex items-center gap-3">
              <span className="text-gold text-[9px] tracking-[0.25em] uppercase font-semibold whitespace-nowrap">Show opens in</span>
              <span className="h-px flex-1 bg-gold/15" aria-hidden="true" />
              <span className="text-gold font-heading text-sm sm:text-base font-bold tabular-nums whitespace-nowrap">
                {pad(days)}d&ensp;{pad(hours)}h&ensp;{pad(minutes)}m&ensp;{pad(seconds)}s
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-warm-gray text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
          <svg className="w-3.5 h-3.5 text-gold/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" aria-hidden="true" />

      {toast && <Toast message={toast} type="success" onClose={() => setToast(null)} />}
    </section>
  )
}