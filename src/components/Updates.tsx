'use client'

import FadeIn from './FadeIn'

const updates = [
  {
    id: 1,
    date: 'Mar 10, 2026',
    category: 'Tour',
    title: 'Spring Tour 2026 Announced!',
    excerpt: 'Big Ant is hitting the road this spring with a brand new tour. 20 cities, 20 nights of non-stop laughs. Check out the full schedule and grab your tickets before they sell out.',
    featured: true,
  },
  {
    id: 2,
    date: 'Mar 5, 2026',
    category: 'Media',
    title: 'New Netflix Special Coming Soon',
    excerpt: 'Big Ant just finished filming his first Netflix special. Stay tuned for the release date announcement.',
    featured: false,
  },
  {
    id: 3,
    date: 'Feb 28, 2026',
    category: 'Awards',
    title: 'Nominated for Comedian of the Year',
    excerpt: 'Honored to be nominated for the 2026 Comedy Awards. Thank you to all the fans who made this possible.',
    featured: false,
  },
  {
    id: 4,
    date: 'Feb 20, 2026',
    category: 'Podcast',
    title: 'Episode 50 of "Ant\'s Angle" Drops',
    excerpt: 'Milestone episode featuring a special guest and behind-the-scenes stories from the road.',
    featured: false,
  },
]

function isNew(dateStr: string) {
  const date = new Date(dateStr)
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  return diff < 7 * 24 * 60 * 60 * 1000
}

const categoryColors: Record<string, string> = {
  Tour: 'bg-wine/10 text-wine border border-wine/20',
  Media: 'bg-charcoal/10 text-charcoal border border-charcoal/20',
  Awards: 'bg-gold/10 text-gold-dark border border-gold/20',
  Podcast: 'bg-sage/10 text-sage border border-sage/20',
}

export default function Updates() {
  const featured = updates.filter((u) => u.featured)
  const others = updates.filter((u) => !u.featured)

  return (
    <section id="updates" className="py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Stay in the Loop</span>
            <h2 className="font-heading text-5xl sm:text-6xl font-bold text-charcoal mt-4">
              Latest <span className="italic text-gold">Updates</span>
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </div>
        </FadeIn>

        {featured.map((update) => (
          <FadeIn key={update.id}>
            <div className="bg-ivory-light border border-gold/20 p-10 mb-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
              <div className="flex items-center gap-3 mb-5">
                <span className="bg-charcoal text-gold px-4 py-1.5 text-xs tracking-[0.2em] uppercase font-semibold">
                  {update.category}
                </span>
                {isNew(update.date) && (
                  <span className="bg-gold text-charcoal px-3 py-1 text-xs tracking-[0.2em] uppercase font-semibold">
                    New
                  </span>
                )}
                <span className="text-warm-gray text-xs tracking-wider">{update.date}</span>
              </div>
              <h3 className="font-heading text-3xl font-bold text-charcoal mb-4">{update.title}</h3>
              <p className="text-warm-gray leading-relaxed max-w-3xl">{update.excerpt}</p>
              <div className="flex items-center gap-6 mt-8">
                <button className="text-gold hover:text-gold-dark font-semibold text-sm tracking-wider uppercase transition-colors flex items-center gap-2">
                  Read More
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="text-warm-gray hover:text-gold transition-colors" aria-label="Share on social media">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
              </div>
            </div>
          </FadeIn>
        ))}

        <div className="grid md:grid-cols-3 gap-6">
          {others.map((update, i) => (
            <FadeIn key={update.id} delay={i * 0.1}>
              <article className="bg-ivory-light border border-gold/10 hover:border-gold/25 p-7 transition-all duration-500 group h-full flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <span className={`px-3 py-1 text-[10px] tracking-[0.15em] uppercase font-semibold ${categoryColors[update.category] || 'bg-warm-gray/10 text-warm-gray'}`}>
                    {update.category}
                  </span>
                  {isNew(update.date) && (
                    <span className="bg-gold text-charcoal px-2 py-0.5 text-[10px] tracking-[0.15em] uppercase font-semibold">
                      New
                    </span>
                  )}
                </div>
                <span className="text-warm-gray text-xs tracking-wider mb-3">{update.date}</span>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-3 group-hover:text-gold transition-colors">
                  {update.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed flex-1">{update.excerpt}</p>
                <div className="flex items-center justify-between mt-6 pt-5 border-t border-gold/10">
                  <button className="text-gold hover:text-gold-dark text-xs tracking-wider uppercase font-semibold transition-colors">
                    Read More &rarr;
                  </button>
                  <button className="text-warm-gray hover:text-gold transition-colors" aria-label="Share">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
