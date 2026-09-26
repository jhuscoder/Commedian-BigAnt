'use client'

import { useState } from 'react'
import { jokes } from '@/lib/jokes'

export default function JokeTicker() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyJoke = async (joke: string, i: number) => {
    try {
      await navigator.clipboard.writeText(`${joke} — Big Ant`)
      setCopiedIndex(i)
      setTimeout(() => setCopiedIndex(null), 1600)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <section className="relative bg-black border-y border-gold/15 py-4 overflow-hidden" aria-label="Comedy one-liners from Big Ant">
      <div className="marquee-track flex whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center shrink-0" aria-hidden={copy === 1}>
            {jokes.map((joke, i) => (
              <button
                key={`${copy}-${i}`}
                type="button"
                onClick={() => copyJoke(joke, i)}
                className="group flex items-center gap-8 pr-8 cursor-pointer"
                aria-label={`Copy joke: ${joke}`}
              >
                <span className="text-gold/90 text-sm sm:text-base font-light italic">
                  &ldquo;{joke}&rdquo;
                </span>
                <span className="w-2 h-2 rotate-45 bg-gold/25 shrink-0" />
                <span className="relative text-[10px] tracking-[0.2em] uppercase text-warm-gray transition-opacity duration-200 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {copiedIndex === i ? 'Copied!' : 'Copy'}
                </span>
              </button>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}