import FadeIn from './FadeIn'
import { PROPOSAL_URL } from '@/lib/config'

const stats = [
  ['10+', 'Years on stage'],
  ['1M+', 'Audience reach'],
  ['5+', 'Nollywood films'],
]

export default function Proposal() {
  return (
    <section id="proposal" className="relative overflow-hidden bg-ivory-light py-28 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-6 -translate-x-1/2 font-heading font-bold uppercase tracking-[0.22em] whitespace-nowrap text-transparent select-none pointer-events-none text-[clamp(2.5rem,8vw,7.5rem)]"
        style={{ WebkitTextStroke: '1px rgba(201,169,110,0.18)' }}
      >
        Man · Mind · Method
      </div>

      <div className="relative mx-auto max-w-3xl px-6 sm:px-8">
        <FadeIn direction="up">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="w-10 h-px bg-gold/40" aria-hidden="true" />
              <svg className="w-2.5 h-2.5 text-gold" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
              </svg>
              <p className="text-xs tracking-[0.25em] uppercase text-charcoal-light font-semibold">
                Partnership proposal
              </p>
              <svg className="w-2.5 h-2.5 text-gold" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
              </svg>
              <span className="w-10 h-px bg-gold/40" aria-hidden="true" />
            </div>

            <h2 className="mt-6 font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal leading-[1.05]">
              Partner with the <span className="italic text-gold">poster boy</span> of Nigerian comedy.
            </h2>

            <p className="mt-6 mx-auto max-w-2xl text-charcoal-light/80 leading-relaxed">
              From Lagos stages to national screens, Big Ant has spent 10+ years earning the trust of
              multinationals &mdash; LG, Bournvita, Smirnoff Ice and more &mdash; across banking, telecom,
              and FMCG. Man. Mind. Method. &mdash; the discipline behind the laughs.
            </p>

            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto border-t border-gold/20 pt-8">
              {stats.map(([value, label]) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd className="font-heading text-3xl sm:text-4xl font-bold text-gold">{value}</dd>
                  <dd className="mt-1 text-[10px] sm:text-xs tracking-[0.18em] uppercase text-charcoal-light/70">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={PROPOSAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-black px-8 py-4 font-body font-semibold tracking-[0.12em] uppercase text-xs transition-all duration-300 border border-gold hover:border-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9l-6-6H7a2 2 0 00-2 2v14a2 2 0 002 2zM14 3v6h6" />
                </svg>
                Read the Proposal
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <span className="text-xs tracking-[0.2em] uppercase text-charcoal-light/60">
                Partnership deck &middot; PDF
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}