import Link from 'next/link'
import { jokes } from '@/lib/jokes'

export default function NotFound() {
  const joke = jokes[Math.floor(Math.random() * jokes.length)]

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span
          className="font-heading italic font-bold text-transparent text-[12rem] sm:text-[18rem] md:text-[24rem] leading-none opacity-[0.04]"
          style={{ WebkitTextStroke: '2px rgba(201,169,110,0.5)' }}
        >
          404
        </span>
      </div>

      <div className="relative text-center max-w-lg">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-ivory mb-4">
          This joke didn&rsquo;t <span className="italic text-gold">land.</span>
        </h1>

        <p className="text-warm-gray text-sm sm:text-base leading-relaxed mb-3">
          The page you&rsquo;re looking for has left the stage.
        </p>

        <div className="border-l-2 border-gold/25 pl-5 text-left my-8">
          <p className="text-gold/80 text-sm italic leading-relaxed">
            &ldquo;{joke}&rdquo;
          </p>
          <p className="text-warm-gray text-[10px] tracking-[0.2em] uppercase mt-2">— Big Ant</p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2.5 bg-gold hover:bg-gold-dark text-black px-8 py-3.5 font-body font-semibold tracking-[0.12em] uppercase text-xs transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          Back on stage
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </main>
  )
}