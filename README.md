# Big Ant — The Art of Timeless Comedy

The official website of **Big Ant**, a Nigerian stand-up comedian, MC, and entertainer. A single-page brand site showcasing his upcoming show, media, events, and a partnership proposal — styled in a premium charcoal-and-gold aesthetic.

## Features

- **Cinematic hero** with a live countdown to the show (Oct 25, 2026) and ticket CTAs
- **About** section with brand story and career stats
- **Events** section with an interactive countdown and a **Google Calendar "Save the Date"** link (timezone-correct, UTC-locked)
- **Media** showcase with embedded video clips and image galleries
- **Joke ticker** — a marquee of comedy one-liners
- **Partnership proposal** section with a PDF CTA (`/proposal.pdf`) for brands and sponsors
- **Custom comedy 404 page**
- Custom **loader**, smooth scrolling, scroll-reveal animations (Framer Motion), respecting `prefers-reduced-motion`
- Full **SEO metadata**: Open Graph, Twitter cards, canonical, robots, sitemap, JSON-LD `Event` schema
- PWA-ready **manifest**, complete **favicon family** (SVG/ICO/Apple-touch/192/512), and a generated 1200×630 OG banner

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, static export)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/postcss`)
- [Framer Motion](https://www.framer.com/motion/)

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static export to /out
npm run start     # preview the server build
```

> `next lint` is configured but currently broken on this project — builds use `npm run build` only.

## Project Structure

```
src/
  app/
    globals.css          # theme tokens (ivory, gold, charcoal, ...), keyframes
    layout.tsx           # fonts, metadata (OG/Twitter/manifest), JSON-LD, loader
    not-found.tsx        # custom comedy 404
    page.tsx             # section composition
  components/            # Hero, About, Media, Events, JokeTicker, Proposal, Footer, ...
  hooks/                 # useCountdown, useCountUp
  lib/
    config.ts            # TICKET_URL, PROPOSAL_URL, SITE_URL, SHOW, CONTACT  ← edit these first
    jokes.ts             # one-liners for the ticker + 404
public/
  images/ videos/        # site media
  favicon.* icon-*.png apple-touch-icon.png og-image.png
  manifest.webmanifest robots.txt sitemap.xml
  proposal.pdf
  .htaccess              # cPanel config (404 routing, caching); ships into /out
assets/                  # source media (not served)
```

## Configuration

Site-wide settings live in [`src/lib/config.ts`](src/lib/config.ts):

| Constant | Purpose |
| --- | --- |
| `TICKET_URL` | Ticket purchase link (used by Hero, Events, Navbar, CurtainCall) |
| `PROPOSAL_URL` | Partnership deck PDF served from `/proposal.pdf` |
| `SITE_URL` | Canonical domain (`https://comedianbigant.com`) |
| `SHOW` | Show date/time (Lagos WAT), venue, duration — feeds countdown, calendar link, and JSON-LD |
| `CONTACT` | Email, Facebook, Instagram |

## Deployment (cPanel Static Host)

This project uses `output: 'export'` — `npm run build` produces a fully static `out/` folder.

1. Build: `npm run build`
2. Open **cPanel → File Manager → public_html/** (clear old files first)
3. Upload the **contents of `out/`**: `index.html`, `404.html`, `.htaccess`, `favicon.svg`, `images/`, `videos/`, `_next/`, etc.
4. Enable an SSL certificate (Let's Encrypt), then uncomment the HTTPS-redirect block in `.htaccess`
5. Point `comedianbigant.com` DNS at the hosting and verify: home page, a junk URL (comedy 404), ticket button, calendar link, `/proposal.pdf`

`out/` is gitignored — rebuild and re-upload to redeploy.

## Repository

- Homepage / live site: `https://comedianbigant.com`
- Issues: https://github.com/Chris45-tech/Commedian-BigAnt/issues