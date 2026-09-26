'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TICKET_URL } from '@/lib/config'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Media', href: '#media' },
  // { name: 'Updates', href: '#updates' },
  // { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((link) => link.href.substring(1))
    const observers: IntersectionObserver[] = []

    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (!element) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-ivory-light/95 backdrop-blur-md shadow-[0_1px_0_rgba(201,169,110,0.2)]'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3" aria-label="Big Ant - Home">
            <span className={`text-2xl font-heading font-bold tracking-wide ${isScrolled ? 'text-charcoal' : 'text-ivory'}`}>BIG</span>
            <span className="w-px h-5 bg-gold" />
            <span className="text-2xl font-heading font-bold italic text-gold">ANT</span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1)
              const isActive = activeSection === sectionId
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm tracking-wider uppercase font-medium transition-colors duration-300 ${
                    isActive ? 'text-gold' : isScrolled ? 'text-warm-gray hover:text-charcoal' : 'text-warm-gray-light hover:text-ivory'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-gold"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
            <a
              href={TICKET_URL}
              target='_blank'
              className="bg-charcoal hover:bg-charcoal-light text-gold px-6 py-2.5 text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 border border-gold/20 hover:border-gold/40"
            >
              Book Now
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className={`w-full h-px rounded-full origin-left ${isScrolled ? 'bg-charcoal' : 'bg-ivory'}`}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className={`w-full h-px rounded-full ${isScrolled ? 'bg-charcoal' : 'bg-ivory'}`}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className={`w-full h-px rounded-full origin-left ${isScrolled ? 'bg-charcoal' : 'bg-ivory'}`}
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-ivory-light border-t border-gold/10 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link, i) => {
                const sectionId = link.href.substring(1)
                const isActive = activeSection === sectionId
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3 px-4 text-sm tracking-wider uppercase font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-gold'
                        : 'text-warm-gray hover:text-charcoal'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                )
              })}
              <motion.a
                href={TICKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block mt-6 bg-charcoal text-gold px-6 py-3 text-xs tracking-[0.2em] uppercase font-semibold text-center border border-gold/20"
              >
                Book Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
