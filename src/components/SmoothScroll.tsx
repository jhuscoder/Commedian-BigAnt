'use client'

import { useEffect } from 'react'

const NAV_OFFSET = 80
const SCROLL_DURATION = 1000

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export default function SmoothScroll() {
  useEffect(() => {
    if (!window.matchMedia) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    let raf = 0

    const animate = (startY: number, targetY: number) => {
      const start = performance.now()
      const diff = targetY - startY

      const step = (now: number) => {
        const progress = Math.min(1, (now - start) / SCROLL_DURATION)
        window.scrollTo(0, startY + diff * easeInOutCubic(progress))
        if (progress < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }

    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      if (!event.target) return

      const anchor = (event.target as HTMLElement).closest?.('a[href^="#"]') as HTMLAnchorElement | null
      if (!anchor) return

      const hash = anchor.getAttribute('href')
      if (!hash || hash === '#') return

      const target = document.getElementById(hash.slice(1))
      if (!target) return

      event.preventDefault()

      if (reduceMotion.matches) {
        target.scrollIntoView()
        return
      }

      cancelAnimationFrame(raf)
      const y = Math.max(0, target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET)
      animate(window.scrollY, y)
      history.replaceState(null, '', hash)
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
      cancelAnimationFrame(raf)
    }
  }, [])

  return null
}