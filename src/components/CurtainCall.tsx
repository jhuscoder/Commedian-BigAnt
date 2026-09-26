import type { CSSProperties } from 'react'
import FadeIn from './FadeIn'
import { TICKET_URL } from '@/lib/config'

const SCRIPT_FONT: CSSProperties = {
  fontFamily: 'var(--font-script), "Comic Sans MS", cursive',
}

const SPARKS = [
  'left-[6%]  bottom-20  w-3  h-3  bg-gold-dark/70',
  'left-[14%] bottom-9   w-5  h-5  bg-gold-light/60',
  'left-[26%] bottom-28  w-3  h-3  bg-gold/70',
  'left-[38%] bottom-6   w-4  h-4  bg-gold-dark/40',
  'left-[48%] bottom-12  w-2.5 h-2.5 bg-gold-light/80',
  'left-[58%] bottom-32  w-3.5 h-3.5 bg-gold/70',
  'left-[68%] bottom-16  w-4  h-4  bg-gold-dark/50',
  'left-[80%] bottom-7   w-3  h-3  bg-gold-light/70',
  'left-[88%] bottom-24  w-5  h-5  bg-gold/50',
]

export default function CurtainCall() {
  return (
    <section className="relative overflow-hidden bg-ivory-light py-24 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/25 bg-ivory text-center shadow-[0_30px_80px_-30px_rgba(26,26,26,0.45)]">
            <div className="relative mx-auto max-w-3xl px-6 pb-28 pt-16 sm:pb-32 sm:pt-20 md:pt-24">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
                The Final Laugh
              </span>

              <h1
                style={SCRIPT_FONT}
                className="mt-4 text-[clamp(2.75rem,7.5vw,5.5rem)] font-normal leading-[1.15] text-charcoal"
              >
                You Must Be Joking.
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-[clamp(1rem,2vw,1.125rem)] font-medium leading-relaxed text-charcoal/70">
                Join the fans who trust Big Ant for timeless, side-splitting
                comedy nights. Your seat starts with a single click.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#media"
                  className="w-full rounded-xl bg-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-charcoal shadow-[0_10px_24px_-10px_rgba(201,169,110,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-dark hover:shadow-[0_14px_28px_-10px_rgba(201,169,110,0.75)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:w-auto"
                >
                  Watch Clips
                </a>

                <a
                  href={TICKET_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-xl bg-charcoal px-8 py-3.5 text-sm font-semibold tracking-wide text-ivory shadow-[0_10px_24px_-10px_rgba(26,26,26,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-charcoal-light hover:shadow-[0_14px_28px_-10px_rgba(26,26,26,0.7)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal sm:w-auto">
                  Get Tickets
                </a>
              </div>
            </div>
            {SPARKS.map((spark, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`pointer-events-none absolute rounded-full ${spark}`}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}