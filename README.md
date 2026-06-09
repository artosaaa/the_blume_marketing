# Blumé Marketing Agency

A 10-page, heavily-animated marketing site for **Blumé** — a luxe-editorial
agency for beauty, med-spas, restaurants, cafés, and local brands.

> _Let's make your brand unforgettable._

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (design tokens as theme config)
- **Framer Motion** — reveals, page transitions, magnetic CTAs, carousels
- **GSAP + ScrollTrigger** — pinned horizontal-scroll band
- **Lenis** — site-wide smooth scroll
- Deploy target: **Vercel**, mobile-first

## Design system

| Token | Value | Use |
| ----- | ----- | --- |
| `ink` | `#0A0A0A` | primary surface |
| `bone` | `#F7F4EF` | text / light surfaces |
| `pink` | `#F4C2D7` | accent only (~20%) |
| `lavender` | `#E9D5E8` | secondary accent |

- **Display** — Fraunces (variable, italic + optical sizing) for editorial headlines
- **UI / body** — Inter
- **Punch** — Archivo Black for stats & "COMING SOON"-style accents
- Film-grain SVG noise overlay (`feTurbulence`, ~6%, fixed) over dark sections

## Animation highlights

1. Lenis smooth scroll site-wide (synced to GSAP ticker)
2. Custom cursor — dot + lagging ring, `mix-blend-mode: difference`, grows on hover
3. Page transitions — pink-then-black curtain wipe per route (`app/template.tsx`)
4. Hero — line-by-line masked clip-path reveal, staggered on load
5. GSAP ScrollTrigger pinned horizontal-scroll "What we do" band + image parallax
6. Magnetic CTA buttons (translate toward cursor)
7. Infinite client-type marquee
8. Scroll-linked manifesto, animated stat counters, testimonial carousel, FAQ accordion

All motion respects `prefers-reduced-motion`.

## Pages

`/` · `/about` · `/services` · `/work` (+ `/work/[slug]`) · `/process` ·
`/pricing` · `/journal` (+ `/journal/[slug]`) · `/careers` · `/faq` · `/contact`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Project structure

```
app/                 routes (App Router) + layout + curtain template
components/
  layout/            Nav, Footer
  providers/         SmoothScroll (Lenis + GSAP)
  sections/          Hero, Manifesto, HorizontalScroll, Stats, etc.
  ui/                Cursor, Curtain, MagneticButton, Marquee, Reveal…
lib/                 site content + utils
public/              noise.svg
```

## Deploy

Push to a Git repo and import into Vercel — zero config. Imagery is served from
Unsplash via `next/image` (whitelisted in `next.config.mjs`).
