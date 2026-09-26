'use client'

import Image from 'next/image'
import FadeIn from './FadeIn'
import { useCountUp } from '@/hooks/useCountUp'

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value)
  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-heading font-bold text-charcoal">
        {count}
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="text-warm-gray text-xs tracking-[0.2em] uppercase mt-2">{label}</div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-32 bg-ivory-light relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-y-0 right-0 w-full sm:w-2/3 lg:w-1/2 pointer-events-none">
        <Image
          src="/images/profile.jpeg"
          alt=""
          fill
          sizes="(max-width: 1024px) 66vw, 50vw"
          className="object-cover object-top opacity-[0.08] mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-ivory-light/40 to-ivory-light" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-gold text-xs tracking-[0.3em] uppercase">The Story</span>
            <h2 className="font-heading text-5xl sm:text-6xl font-bold text-charcoal mt-4">
              Behind <span className="italic text-gold">the Laughs</span>
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn direction="left">
            <div className="relative">
              <div className="relative aspect-[4/5] bg-cream rounded-none overflow-hidden vintage-border">
                <Image
                  src="/images/profile.jpeg"
                  alt="Big Anthony portrait"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-charcoal text-gold px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold">
                10+ Years
              </div>
              <div className="absolute top-6 -left-6 w-24 h-24 border border-gold/20" />
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div>
              <span className="text-gold text-xs tracking-[0.3em] uppercase">About Me</span>
              <h3 className="font-heading text-4xl sm:text-5xl font-bold text-charcoal mt-4 mb-8">
                A Story Written in<br />
                <span className="italic text-gold">Laughter</span>
              </h3>

              <div className="space-y-6 text-warm-gray leading-relaxed">
                <p>
                  Big Anthony has been commanding stages and cracking jokes for over a decade.
                  From local open mics to sold-out venues, his unique blend of observational
                  humor and storytelling has earned him a loyal following that spans
                  generations.
                </p>
                <p>
                  Known for his energetic delivery and relatable content, Big Ant connects
                  with audiences from all walks of life. His comedy isn&apos;t just about laughs
                  &mdash; it&apos;s about creating moments that people remember long after the
                  show ends.
                </p>
                <p>
                  When he&apos;s not on stage, you can find him working on new material,
                  collaborating with other comedians, or engaging with his growing online
                  community.
                </p>
              </div>

              {/* <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-gold/20">
                <StatCounter value={500} suffix="+" label="Shows Performed" />
                <StatCounter value={50} suffix="K+" label="Fans Worldwide" />
                <StatCounter value={10} suffix="+" label="Years Active" />
              </div> */}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
