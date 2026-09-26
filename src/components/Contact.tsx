'use client'

import { useState } from 'react'
import FadeIn from './FadeIn'
import Toast from './Toast'
import { CONTACT } from '@/lib/config'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email'
    if (!formData.subject) newErrors.subject = 'Please select a subject'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 1500))
    setIsSubmitting(false)
    setToast({ message: 'Message sent successfully! We\'ll get back to you soon.', type: 'success' })
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-32 bg-ivory-light">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Get in Touch</span>
            <h2 className="font-heading text-5xl sm:text-6xl font-bold text-charcoal mt-4">
              Contact & <span className="italic text-gold">Booking</span>
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-20">
          <FadeIn direction="left">
            <div>
              <h3 className="font-heading text-3xl font-bold text-charcoal mb-6">
                Let&apos;s Work Together
              </h3>
              <p className="text-warm-gray mb-10 leading-relaxed">
                For booking inquiries, press requests, or collaborations,
                reach out through the form or use the contact details below.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-gold/10 flex items-center justify-center flex-shrink-0 border border-gold/20">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal text-sm tracking-wider uppercase">Booking Inquiries</h4>
                    <p className="text-warm-gray mt-1">{CONTACT.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-wine/10 flex items-center justify-center flex-shrink-0 border border-wine/20">
                    <svg className="w-5 h-5 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal text-sm tracking-wider uppercase">Management</h4>
                    <p className="text-warm-gray mt-1">{CONTACT.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-sage/10 flex items-center justify-center flex-shrink-0 border border-sage/20">
                    <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal text-sm tracking-wider uppercase">Press & Media</h4>
                    <p className="text-warm-gray mt-1">{CONTACT.email}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-semibold text-charcoal text-sm tracking-wider uppercase mb-5">Follow Big Ant</h4>
                <div className="flex gap-3">
                  {[
                    { name: 'Facebook', href: CONTACT.facebook, icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                    { name: 'Instagram', href: CONTACT.instagram, icon: 'M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm3.5-7a.75.75 0 110-1.5.75.75 0 010 1.5z' },
                    { name: 'TikTok', href:'https://www.tiktok.com/@_biganttt_', icon: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13a8.28 8.28 0 005.58 2.17v-3.45a4.85 4.85 0 01-5.58-2.74V6.69h5.58z' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-cream hover:bg-gold flex items-center justify-center transition-all duration-300 border border-gold/20 hover:border-gold group"
                      aria-label={`Follow on ${social.name}`}
                    >
                      <svg className="w-4 h-4 text-warm-gray group-hover:text-charcoal transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="bg-cream border border-gold/10 p-10">
              <form onSubmit={handleSubmit} className="space-y-7" noValidate>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-charcoal tracking-wider uppercase mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-ivory-light border px-5 py-3.5 text-charcoal placeholder-warm-gray-light focus:outline-none focus:border-gold transition-colors ${
                        errors.name ? 'border-wine' : 'border-gold/15'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-wine text-xs mt-1.5">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-charcoal tracking-wider uppercase mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-ivory-light border px-5 py-3.5 text-charcoal placeholder-warm-gray-light focus:outline-none focus:border-gold transition-colors ${
                        errors.email ? 'border-wine' : 'border-gold/15'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-wine text-xs mt-1.5">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-charcoal tracking-wider uppercase mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full bg-ivory-light border px-5 py-3.5 text-charcoal focus:outline-none focus:border-gold transition-colors appearance-none ${
                      errors.subject ? 'border-wine' : 'border-gold/15'
                    } ${!formData.subject ? 'text-warm-gray-light' : ''}`}
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="press">Press / Media Request</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="general">General Inquiry</option>
                  </select>
                  {errors.subject && <p className="text-wine text-xs mt-1.5">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-charcoal tracking-wider uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    maxLength={500}
                    className={`w-full bg-ivory-light border px-5 py-3.5 text-charcoal placeholder-warm-gray-light focus:outline-none focus:border-gold transition-colors resize-none ${
                      errors.message ? 'border-wine' : 'border-gold/15'
                    }`}
                    placeholder="Tell us about your inquiry..."
                  />
                  {errors.message && <p className="text-wine text-xs mt-1.5">{errors.message}</p>}
                  <p className="text-warm-gray-light text-xs mt-1.5 text-right">{formData.message.length}/500</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-charcoal hover:bg-charcoal-light text-gold py-4 text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 border border-gold/20 hover:border-gold/40 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </section>
  )
}
