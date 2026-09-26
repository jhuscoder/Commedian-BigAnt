'use client'

import FadeIn from './FadeIn'
import { CONTACT } from '@/lib/config'

const SOCIAL_LINKS = [
  {
    name: 'WhatsApp',
    href: '#',
    icon: <path d="M21 11.5a8.5 8.5 0 0 1-1.3 4.6 8.5 8.5 0 0 1-7.2 3.9 8.4 8.4 0 0 1-3.6-.8L3 21l1.8-5.6a8.4 8.4 0 0 1-.8-3.9A8.5 8.5 0 0 1 8.5 4.3 8.5 8.5 0 0 1 21 11v.5Z" />,
  },
  {
    name: 'Facebook',
    href: CONTACT.facebook,
    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  },
  {
    name: 'Instagram',
    href: CONTACT.instagram,
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37a4 4 0 1 1-1.1-2.9 4 4 0 0 1 1.1 2.9z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden py-12">
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-1/2 bottom-0 -translate-x-1/2 z-0 font-black leading-[0.8] whitespace-nowrap text-[clamp(5rem,30vw,30rem)] text-white/5">
        bigant
      </span>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <FadeIn>
          <div className="flex flex-wrap justify-between items-end gap-10">
            <p className="max-w-lg text-sm md:text-base leading-[1.6] text-white/90">
              {/* The art of timeless comedy — sharp wit, real stories, and nights
              you&rsquo;ll still be quoting in the morning. */}
            </p>

            <div className="flex flex-col items-start md:items-end gap-3">
              <p id="footer-social-label" className="text-[11px] font-semibold tracking-[0.24em] uppercase text-white/70">
                Follow us
              </p>
              <nav aria-labelledby="footer-social-label">
                <ul className="flex items-center gap-2.5">
                  {SOCIAL_LINKS.map((social) => (
                    <li key={social.name}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="group inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/35 text-white transition-all duration-300 hover:bg-white/15 hover:border-white/70 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        <svg
                          className="w-[18px] h-[18px] fill-none stroke-current [stroke-width:1.7] [stroke-linecap:round] [stroke-linejoin:round]"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          {social.icon}
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-10 md:mt-20 pt-6 border-t border-white/25 flex flex-col md:grid md:grid-cols-3 items-center gap-2.5 md:gap-4 text-center">
            <p className="text-white/75 text-xs tracking-wide md:justify-self-start">
              &copy; 2026 Big Ant Comedy. All rights reserved.
            </p>
            <p className="text-white/75 text-xs tracking-wide">
              Website by{' '}
              <a
                href="#"
                rel="noopener"
                className="text-white underline underline-offset-[3px] decoration-white/40 transition-colors duration-300 hover:decoration-white"
              >
                the3prime
              </a>
            </p>
            <a
              href="#"
              className="group md:justify-self-end inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] text-white border-b border-transparent transition-colors duration-300 hover:border-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Back to top
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5"
              >
                &uarr;
              </span>
            </a>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}