'use client'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { loaderCaptions } from '@/lib/jokes'

export default function Loader() {
  const reduceMotion = useReducedMotion()
  const [loading, setLoading] = useState(true)
  const [caption, setCaption] = useState(loaderCaptions[0])

  useEffect(() => {
    setCaption(loaderCaptions[Math.floor(Math.random() * loaderCaptions.length)])
  }, [])

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('loader-shown')
    if (alreadyShown) {
      setLoading(false)
      return
    }
    const t = setTimeout(() => {
      setLoading(false)
      sessionStorage.setItem('loader-shown', '1')
    }, reduceMotion ? 800 : 2100)
    return () => clearTimeout(t)
  }, [reduceMotion])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          role="status"
          aria-label="Loading"
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(4px)' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-black"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(700px 700px at 50% 42%, rgba(201,169,110,0.12) 0%, transparent 60%)' }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(135% 115% at 50% 45%, transparent 60%, rgba(0,0,0,0.45) 100%)' }}
          />

          <div className="relative flex flex-col items-center">
            <div className="relative w-28 h-28 grid place-items-center">
              <motion.span
                aria-hidden="true"
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={reduceMotion ? undefined : { duration: 1.3, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-gold/15 border-t-gold"
              />
              <span aria-hidden="true" className="absolute -inset-3 rounded-full border border-dashed border-gold/20" />

              <motion.div
                animate={reduceMotion ? undefined : { scale: [1, 1.1, 1] }}
                transition={reduceMotion ? undefined : { duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
                className="w-20 h-20 rounded-full bg-charcoal-light border border-gold/25 grid place-items-center text-5xl"
              >
                <span aria-hidden="true">😆</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-8 flex items-center gap-3"
            >
              <span className="font-heading font-bold text-ivory tracking-wide text-xl">BIG</span>
              <span className="w-px h-5 bg-gold/40" />
              <span className="font-heading font-bold italic text-gold text-xl">ANT</span>
            </motion.div>

            <div className="mt-5 w-44 h-px bg-charcoal-lighter overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: reduceMotion ? 0.6 : 1.9, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light"
              />
            </div>

            <p className="mt-4 text-[10px] tracking-[0.25em] uppercase text-warm-gray">{caption}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}