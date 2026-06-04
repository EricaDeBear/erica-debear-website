# Erica DeBear — Real Estate Site

A Next.js + Tailwind v4 + TypeScript site built as a structural framework
modeled on the layout of brockandlori.com. All copy and imagery is placeholder
content — clearly marked in [brackets] — meant to be replaced with Erica's
real materials.

---

## Quick Start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Requires Node 18+ (tested on Node 22).

---

## Project Structure

```
erica-site/
├── app/
│   ├── layout.tsx          ← Global layout, fonts, metadata
│   ├── globals.css         ← Design tokens (colors, fonts, button styles)
│   ├── page.tsx            ← Home page (assembles all sections)
│   ├── about/page.tsx      ← About / bio
│   ├── our-services/       ← Services list
│   ├── properties/         ← Listings grid
│   ├── contact/            ← Contact form
│   ├── featured-sales/     ← Stub
│   ├── press/              ← Stub
│   └── newsletter/         ← Stub
│
├── components/
│   ├── Header.tsx          ← Sticky nav, utility bar, mobile menu
│   ├── Footer.tsx          ← Contact info, legal links, socials
│   ├── Hero.tsx            ← Full-bleed hero with tagline + CTA
│   ├── MeetTeam.tsx        ← Team photo section
│   ├── AsSeenIn.tsx        ← Press logos grid
│   ├── Testimonials.tsx    ← Carousel with prev/next + dots
│   ├── FeaturedProperties.tsx  ← Horizontal scrolling property cards
│   ├── InstagramFollow.tsx ← Instagram CTA + 8-tile grid
│   ├── AboutBlurb.tsx      ← Dark-section credentials blurb
│   ├── MarketVideos.tsx    ← Video thumbnail grid w/ play buttons
│   └── icons.tsx           ← All inline SVG icons
│
├── content/
│   └── site.ts             ← ★ ALL site copy lives here — edit this first
│
└── public/
    └── placeholders/       ← Placeholder SVGs to replace with real photos
```

---

## How to Swap in Erica's Content

### 1. The fast 80% — edit content/site.ts
Everything textual lives in one file. Find the placeholder text in [brackets]
and replace it. Sections include: meta, brand, contact, nav, hero, meetTeam,
testimonials, properties, aboutBlurb, marketVideos, footer.

### 2. Swap images in public/placeholders/
Each placeholder SVG is referenced by path in content/site.ts. Drop in real
JPG/WEBP files with matching filenames (or update the paths in site.ts).

Recommended dimensions:
- hero.svg        → 1920×1080 (landscape; cropped via object-cover)
- team.svg        → 1600×1067 (landscape)
- property-*.svg  → 1200×900  (4:3)
- press-*.svg     → 320×100   (wordmark logo, transparent)
- insta-*.svg     → 800×800   (square)
- video-*.svg     → 800×1067  (3:4 portrait)
- logo.svg + logo-light.svg → ~280×60

### 3. Restyle — edit app/globals.css
The design tokens at the top of globals.css control the whole site:

  --color-bg:      #FAF8F4;  /* warm off-white background */
  --color-accent:  #2C3E2D;  /* CTA / accent color */
  --font-display:  "Playfair Display", ...
  --font-sans:     "Inter", ...

Change these and the whole site updates.

### 4. Hook up the contact form
The contact form (app/contact/page.tsx) is UI-only — submission shows a success
state but doesn't send anywhere. To make it functional:

- Formspree — easiest, paste a form endpoint into the form action
- Resend / SendGrid — create app/api/contact/route.ts and POST from the form
- Netlify Forms — add data-netlify="true" to the <form> tag

---

## Design Reference

This framework mirrors the section sequence and overall layout vocabulary
of brockandlori.com (Luxury Presence build): hero → team → press → reviews →
listings → social → bio → media → footer. Visual styling (color palette,
typography, button shapes) is original and meant to feel comparable in the
premium-editorial real-estate category.

---

## Deployment

Optimized for Vercel (Next.js native):  npx vercel

Also works on Netlify, Cloudflare Pages, or any Node host.

For static export (no server features), add to next.config.ts:
  export default { output: "export" };

---

## Notes on the Build

Fonts are loaded via <link> tag in app/layout.tsx (Google Fonts CDN). To switch
to self-hosted via next/font/google, replace the head <link> block with the
appropriate next/font imports — see
https://nextjs.org/docs/app/api-reference/components/font
