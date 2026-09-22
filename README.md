# TechToJob — Landing

Landing page for TechToJob (Spanish-speaking dev & tech community) built for **Torneo #2**.

## Design

Dark/teal contrast anchors the page: a dark hero with grid overlay and teal
glow opens a rhythm of alternating light sections. Cards lift on hover with a
teal border and soft shadow, CTAs are pill buttons (dark, or glowing teal for
Discord), and a marquee ticker, terminal mockup and full-teal newsletter band
punctuate the layout. Typography pairs Sora (display), Inter (body) and
JetBrains Mono (accents); all motion is native CSS with a global
`prefers-reduced-motion` reset.

## Stack

- **Next.js 16** (App Router), **React 19**, **TypeScript**
- **Tailwind CSS v4** — tokens via `@theme` in `globals.css`
- **next-intl** for i18n: Spanish at `/`, English at `/en`
- **lucide-react** for icons

## Structure

The `[locale]` route segment is the effective app root: its layout sets `html lang`,
loads the fonts, defines metadata/JSON-LD and wraps every page in `Header` + `Footer`.
All routes are statically prerendered via `generateStaticParams` for `es` and `en`.

```
src/
├── app/
│   ├── globals.css            Tailwind v4 entry: imports tailwindcss, defines
│   │                           @theme tokens, custom utilities and keyframes
│   │   icon.svg               shared favicon for every locale
│   └── [locale]/              the effective app root (two static builds: / and /en)
│       ├── layout.tsx         root layout: html lang, fonts, metadata/JSON-LD,
│       │                       Header/Footer wrapper
│       ├── page.tsx           home: renders the 11 sections in order
│       ├── privacy/page.tsx   privacy policy (server component)
│       ├── legal/page.tsx     legal notice (server component)
│       ├── cookies/page.tsx   cookie policy (server component)
│       └── opengraph-image.tsx  per-locale OG image 1200×630 via next/og (satori)
├── components/
│   ├── Hero.tsx               hero with terminal mockup, dark bg + teal glow
│   ├── Ticker.tsx             marquee ribbon (animate-marquee)
│   ├── HowItWorks.tsx         how it works
│   ├── Talent.tsx             talent section (profile UI mockup)
│   ├── Companies.tsx          companies section
│   ├── Tournaments.tsx        tournaments section
│   ├── Networking.tsx         networking section
│   ├── Testimonials.tsx       testimonials
│   ├── News.tsx               news section
│   ├── Newsletter.tsx         newsletter signup (teal band)
│   ├── Closing.tsx            final Discord CTA on dark bg
│   ├── Header.tsx             "use client" sticky header: nav anchors, mobile
│   │                           menu, ES|EN switcher, Discord CTA
│   ├── Footer.tsx             async server component; link blocks + socials
│   │                           come from messages (footer.blocks/social)
│   ├── Eyebrow.tsx            shared section eyebrow + SECTION_TITLE_CLASS
│   └── DiscordCtaLink.tsx     reusable Discord pill with teal glow; exports
│                               DISCORD_URL used by Header/Footer/Closing
├── i18n/
│   ├── routing.ts             defineRouting: locales ['es','en'], default 'es',
│   │                           localePrefix 'as-needed'; exports Locale type
│   ├── navigation.ts          typed Link / useRouter / usePathname wrappers
│   ├── request.ts             getRequestConfig: loads messages/{locale}.json
│   │                           per request, falls back to default locale
│   └── messages.d.ts          TS types for message files, derived from es.json
├── fonts/
│   └── Sora-400.ttf, Sora-700.ttf   TTF copies only for the OG image (satori
│                                    cannot read the woff2 served by next/font)
└── proxy.ts                   Next 16 proxy (replaces deprecated middleware):
                              next-intl locale negotiation via Accept-Language
                              + NEXT_LOCALE cookie, redirects to the right path
messages/
├── es.json                   Spanish copy — the source of truth for types
└── en.json                   English copy
```

### Why the fonts/ folder exists

The OG image is rendered server-side by **satori**, which can only embed TTF,
not the woff2 that `next/font` serves in the browser. `opengraph-image.tsx`
reads `Sora-400.ttf`/`Sora-700.ttf` and the negative logo path from
`public/logo-negative.svg` at build time.

## Getting started

Requires **Node.js 20.9+**.

```bash
npm install
npm run dev      # development at http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## Configuration

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

- **`NEXT_PUBLIC_SITE_URL`** — public URL of the deployed site. Used for the
  canonical URL, Open Graph and JSON-LD. Falls back to
  `https://techtojob-landing.vercel.app` when not set.
