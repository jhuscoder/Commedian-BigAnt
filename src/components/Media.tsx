'use client'

import Image from 'next/image'
import FadeIn from './FadeIn'
import { motion } from 'framer-motion'
import { mediaPunchlines } from '@/lib/jokes'

const photos = [
  { id: 1, caption: 'Live on Stage', image: '/images/show.jpeg' },
  { id: 2, caption: 'Mic Check', image: '/images/mic.jpeg' },
  { id: 3, caption: 'The Portrait', image: '/images/profile.jpeg' },
  { id: 4, caption: 'You Must Be Joking', image: '/images/BigAnt-You must be joking.jpeg' },
]

export default function Media() {
  return (
    <section id="media" className="py-32 bg-ivory-light">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Watch & See</span>
            <h2 className="font-heading text-5xl sm:text-6xl font-bold text-charcoal mt-4">
              Media <span className="italic text-gold">Gallery</span>
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </div>
        </FadeIn>

         <div className='mb-20'>
          <FadeIn>
            <h3 className="font-heading text-3xl font-bold text-charcoal mb-8">
              Photos <span className="italic text-gold">&amp; Moments</span>
            </h3>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.map((photo, i) => (
              <FadeIn key={photo.id} delay={i * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="aspect-square bg-cream border border-gold/10 hover:border-gold/30 transition-all duration-500 cursor-pointer group relative overflow-hidden"
                >
                  <Image
                    src={photo.image}
                    alt={photo.caption}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs text-ivory tracking-wider uppercase">{photo.caption}</p>
                    {mediaPunchlines[photo.caption] && (
                      <p className="text-[11px] text-gold/80 mt-2 leading-snug max-w-[14rem]">{mediaPunchlines[photo.caption]}</p>
                    )}
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* <FadeIn>
          <div className="mb-20">
            <h3 className="font-heading text-3xl font-bold text-charcoal mb-8">
              Featured <span className="italic text-gold">Video</span>
            </h3>
            <div className="relative aspect-video bg-black rounded-none overflow-hidden vintage-border">
              <video
                src="/videos/BigAnt - Live event.mp4"
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-contain"
              />
              <div className="absolute top-0 left-0 right-0 h-6 flex gap-px pointer-events-none">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="flex-1 bg-gold/10" />
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-6 flex gap-px pointer-events-none">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="flex-1 bg-gold/10" />
                ))}
              </div>
            </div>
          </div>
        </FadeIn> */}
      </div>
    </section>
  )
}
