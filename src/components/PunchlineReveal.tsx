'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import FadeIn from './FadeIn'
import { punchlineReveal } from '@/lib/jokes'

export default function PunchlineReveal() {
  const [revealed, setRevealed] = useState(false)
  const reduceMotion = useReducedMotion()

  return (
    <section className="py-28 lg:py-36 bg-black relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(700px 520px at 20% 30%, rgba(201,169,110,0.10) 0%, transparent 65%)' }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(135% 115% at 50% 50%, transparent 55%, rgba(0,0,0,0.4) 100%)' }}
      />

      <div
        aria-hidden="true"
        className="absolute left-[-8%] sm:left-[-4%] top-1/2 -translate-y-1/2 pointer-events-none select-none"
      >
        <span
          className="font-heading italic font-bold text-transparent text-[18rem] sm:text-[26rem] lg:text-[34rem] leading-none opacity-[0.035]"
          style={{ WebkitTextStroke: '1px rgba(201,169,110,0.55)' }}
        >
          &ldquo;
        </span>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-16 lg:gap-20 items-center min-h-[440px]">
          <FadeIn direction="left">
            <div className="relative">
              <span className="text-gold text-[10px] tracking-[0.3em] uppercase font-semibold block mb-5">
                {punchlineReveal.eyebrow}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-ivory leading-snug">
                &ldquo;{punchlineReveal.setup}&rdquo;
              </h2>
              <div className="flex items-center gap-3 mt-7">
                <span className="w-10 h-px bg-gradient-to-r from-gold/60 to-transparent" />
                <svg className="w-2 h-2 text-gold/50" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
                </svg>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <div className="relative">
              <div className="absolute -top-3 -left-3 h-7 w-7 border-t-2 border-l-2 border-gold/40" aria-hidden="true" />
              <div className="absolute -top-3 -right-3 h-7 w-7 border-t-2 border-r-2 border-gold/40" aria-hidden="true" />
              <div className="absolute -bottom-3 -left-3 h-7 w-7 border-b-2 border-l-2 border-gold/40" aria-hidden="true" />
              <div className="absolute -bottom-3 -right-3 h-7 w-7 border-b-2 border-r-2 border-gold/40" aria-hidden="true" />

              <div className="border border-gold/15 bg-charcoal-light/50 p-8 sm:p-10 lg:p-12">
                <div className="min-h-[10rem] flex flex-col items-center justify-center text-center">
                  <AnimatePresence mode="wait">
                    {!revealed ? (
                      <motion.button
                        key="reveal"
                        type="button"
                        onClick={() => setRevealed(true)}
                        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                        whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-black px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                      >
                        {punchlineReveal.action}
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M12 3v18M3 12h18" />
                        </svg>
                      </motion.button>
                    ) : (
                      <motion.div
                        key="punchline"
                        className="flex flex-col items-center gap-8"
                        initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        <div className="flex items-center justify-center gap-3 w-full">
                          <span className="w-10 h-px bg-gradient-to-r from-transparent to-gold/50" />
                          <svg className="w-2 h-2 text-gold" viewBox="0 0 12 12" fill="currentColor">
                            <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
                          </svg>
                          <span className="w-10 h-px bg-gradient-to-l from-transparent to-gold/50" />
                        </div>

                        <p className="font-heading italic text-gold text-xl sm:text-2xl lg:text-[1.75rem] font-bold leading-snug max-w-lg">
                          &ldquo;{punchlineReveal.punchline}&rdquo;
                        </p>

                        <button
                          type="button"
                          onClick={() => setRevealed(false)}
                          className="text-warm-gray hover:text-gold text-[10px] tracking-[0.25em] uppercase font-semibold transition-colors duration-300 mt-2"
                        >
                          Reveal again
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" aria-hidden="true" />
    </section>
  )
}