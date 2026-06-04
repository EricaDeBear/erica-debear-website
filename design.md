# DESIGN.md — Erica Real Estate

A design system for a luxury residential real-estate site. Warm-editorial, photography-led,
quietly premium. This document is the single source of truth for visual styling; an AI coding
agent or a developer should be able to maintain the UI from it.

> **Scope of this version:** a *visual refresh* only. Section structure, component layout, and
> page sequence are unchanged. Everything below is delivered through `app/globals.css` design
> tokens + the font `<link>` in `app/layout.tsx`. No component files change.

---

## 01 — Aesthetic Direction

A warm ivory canvas, a characterful high-contrast serif, and full-bleed property photography
doing the heavy lifting. Depth comes from imagery and contrast, not from heavy shadows. The
palette is disciplined: one warm neutral family, one deep action color, one metallic detail.
The personality is *editorial and architectural* — confident type, generous space, sharp-cornered
geometry, slow and deliberate motion.

**One thing to remember it by:** the pairing of Fraunces display type over warm ivory, with
property images bleeding edge-to-edge.

**Deliberately avoid:** the stock luxury-realtor template look (Playfair Display, full-pill
buttons, cool grey-white canvas), candy-bright accents, bouncy/playful motion, and drop-shadow-heavy
cards.

---

## 02 — Color

Cool greys are out; the whole neutral family is warmed. Tokens live in the `@theme` block of
`globals.css`.

### Surfaces

| Token | Value | Use |
| --- | --- | --- |
| `--color-bg` | `#FAF7F1` | Warm ivory — default page floor |
| `--color-bg-muted` | `#F1EBDF` | Sand — alternating bands (Testimonials, Instagram) |
| `--color-bg-dark` | `#1A1714` | Warm espresso — dark sections (About, Footer) |

### Ink / Text

| Token | Value | Use |
| --- | --- | --- |
| `--color-ink` | `#211C17` | Warm near-black — headings, primary text, primary CTA |
| `--color-ink-muted` | `#6E665B` | Warm taupe — secondary text, sub-labels |
| `--color-ink-soft` | `#A1998C` | Captions, fine print |
| `--color-line` | `#E4DDCF` | Warm hairlines, dividers |
| `--color-on-dark` | `#F1EBDF` | Text/marks on espresso surfaces |

### Accents

| Token | Value | Use |
| --- | --- | --- |
| `--color-accent` | `#2F3A2B` | Deep loden green — primary CTA fill, link/title hover, faint quote glyph |
| `--color-accent-hover` | `#232C20` | Pressed/hover state of the action color |
| `--color-gold` | `#9A7A46` | Antique brass — **detail accent only** (see note) |

**On the green:** it's deepened and warmed from the prior forest green. It keeps strong white-text
contrast (≈10:1) so it stays the workhorse for CTAs and is fully accessible. If the brand later
wants to drop green entirely, set `--color-accent` to `--color-ink` (`#211C17`) for an
ink-button / brass-detail look — everything still passes contrast.

**On the brass:** it is a *decorative* accent, never a small-text or button-fill color (brass on
ivory fails AA at small sizes). Reserve it for: hairline rules under eyebrows, the active
testimonial dot, the hero scroll cue, and large decorative glyphs. These touches require small
edits in the relevant component (the current token-only refresh leaves green in those spots).

---

## 03 — Typography

The single biggest lever in this refresh. The display face moves off Playfair Display — the
giveaway of the stock template — onto **Fraunces**, a high-contrast old-style serif with optical
sizing and a beautiful italic. Body type moves off Inter onto **Hanken Grotesk**, a clean
humanist grotesque with more warmth and character.

```
--font-display: "Fraunces", "Playfair Display", Georgia, serif;
--font-sans:    "Hanken Grotesk", "Inter", system-ui, sans-serif;
```

Headings set `font-optical-sizing: auto` and `font-variation-settings: "SOFT" 0, "WONK" 0` for a
clean, refined cut (the quirk dialed out). Tracking on display sizes is tight (−0.02em).

### Scale

| Role | Size (mobile → desktop) | Face / weight | Line / tracking | Where |
| --- | --- | --- | --- | --- |
| display-xl | 48 → 72px | Fraunces 400 | 1.05 / −0.02em | Hero H1 |
| display-lg | 40 → 60px | Fraunces 400 | 1.08 / −0.02em | MeetTeam, About H2 |
| display-md | 32 → 48px | Fraunces 400 | 1.1 / −0.015em | Section H2 |
| title-lg | 24px | Fraunces 400 | 1.25 | Property address, video title |
| body-lg | 18px | Hanken 400 | 1.6 | Lead paragraphs |
| body | 16px | Hanken 400 | 1.6 | Running text |
| body-sm | 14px | Hanken 400 | 1.55 | Footer, fine print |
| overline | 12px | Hanken 500 | uppercase, 0.16em | Eyebrows above headings |
| button | ~12px | Hanken 600 | uppercase, 0.16em | CTAs |

Hero H2 and the hero tagline use **Fraunces italic** — its italic is the signature flourish; keep it.

---

## 04 — Buttons & Links

Shape moves from the ubiquitous full pill to a **squared 2px radius** — more architectural and
bespoke, a clear departure from the template. Letter-spacing eases from 0.18em to 0.16em (less
shouty), and padding guarantees a ≥44px touch target (WCAG AAA).

| Variant | Style |
| --- | --- |
| `.btn-primary` | Loden fill, off-white text; hover darkens to `--color-accent-hover` |
| `.btn-outline` | Transparent, ink text + 1px ink border; hover inverts to ink fill |
| `.btn-outline-light` | On dark: off-white text + border; hover inverts to ivory fill |

Transitions are slow and flat (0.25–0.3s ease) — no translate, no rotate, no bounce.

> **Toggle:** to restore pill buttons, change `border-radius` on `.btn` back to `999px`.

---

## 05 — Components

Layout and markup are unchanged; this records the *design intent* each component should preserve
after retoning.

- **Header** — Sticky. Transparent over the hero, then ivory + soft blur + hairline on scroll.
  Utility bar (email / quick links / phone), centered logo, uppercase tracked nav with a
  Properties dropdown, mobile hamburger to a full ivory overlay. Nav hover → loden.
- **Hero** — Full-bleed image, 100vh. Centered Fraunces H1 with an italic second line, italic
  tagline, single outline-light CTA, gradient scrim bottom-weighted for legibility, small scroll
  cue. The image is the depth; keep the scrim subtle.
- **MeetTeam** — Full-bleed image, 80vh, dark overlay, centered eyebrow + large Fraunces heading +
  short body + outline-light CTA.
- **AsSeenIn** — Press-logo grid, grayscale at 70% opacity, resolving to full color on hover.
- **Testimonials** — Sand band. Large faint Fraunces quote glyph, italic Fraunces blockquote,
  eyebrow attribution, arrow + dash-dot pager. *(Recommended brass spot: active pager dash.)*
- **FeaturedProperties** — Horizontal snap-scroll cards. Sharp-cornered 4:3 image, slow 700ms
  zoom on hover, ivory status chip, Fraunces address (hover → loden), muted meta row, Fraunces price.
- **InstagramFollow** — Sand band. Centered eyebrow/heading/handle, square image grid with a loden
  wash on hover.
- **AboutBlurb** — Espresso section, centered eyebrow + large Fraunces heading + body + outline-light CTA.
- **MarketVideos** — 3:4 portrait thumbnails, circular play button, Fraunces title (hover → loden).
- **Footer** — Espresso, three columns (brand+socials / contact / brokerage+links), hairline divider,
  legal row.

---

## 06 — Spacing

8px base rhythm. Section padding is the defining vertical rhythm.

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`

Sections use `96px` (mobile) → `128px` (desktop) vertical padding. Content widths:
`--container-wide: 1440px`, `--container-narrow: 1100px`, `--container-prose: 65ch`.

---

## 07 — Radius

Small and architectural. Images and bands stay sharp.

`0 (images, chips, bands) · 2px (buttons, inputs) · 4px · 8px (rare)`

No full-pill geometry anywhere in the refreshed system.

---

## 08 — Elevation & Depth

Photography and warm contrast are the depth model.

- Default: flat, hairline borders (`--color-line`) for separation.
- Header-on-scroll: a single very soft shadow + blur, nothing heavier.
- Cards: no drop shadows — separation comes from the image and the ivory gap.
- Dark sections (espresso) provide rhythm and contrast against ivory/sand.

---

## 09 — Motion

Slow, deliberate, never playful.

- Page-load: `fadeUp` (opacity + 20px rise), ~0.8s ease-out.
- Image hover: scale 1.05 over 500–700ms.
- Color/state hover: 0.25–0.3s ease.
- `scroll-behavior: smooth`.
- Forbidden: rotate, bounce, springy easings, hard shadows on hover.

---

## 10 — Responsive

| Breakpoint | Width | Behavior |
| --- | --- | --- |
| Mobile | < 640px | Hamburger nav; hero H1 → 48px; single-column grids; property cards 85vw |
| Small | 640–1024px | 2-up logo/video/instagram grids; cards 420px |
| Desktop | 1024–1440px | Full nav; 4-up grids; 6-up press logos |
| Wide | > 1440px | Content capped at 1440px with added breathing room |

Touch targets ≥ 44×44px; inputs ≥ 44px tall.

---

## 11 — Implementation

1. **`app/globals.css`** — replace the `@theme` tokens, fonts, heading rules, and `.btn` block
   with the refreshed values (full file provided alongside this doc). This alone retones the
   entire site.
2. **`app/layout.tsx`** — swap the Google Fonts `<link>`:

   ```html
   <link
     href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..600&family=Hanken+Grotesk:wght@300;400;500;600;700&display=swap"
     rel="stylesheet"
   />
   ```
3. **Optional brass pass** — when ready, retone these spots to `--color-gold`: the active
   Testimonials pager dash, the hero scroll cue, and a hairline rule under section eyebrows.
   These are small per-component edits, not part of the token-only refresh.

---

## 12 — How this departs from the template (Brock & Lori / Luxury Presence)

Structure intentionally matches the proven luxury-realtor section flow. Differentiation is entirely
visual:

- **Type:** Fraunces + Hanken Grotesk replaces the Playfair + Inter template signature — the most
  recognizable change.
- **Palette:** warm ivory / sand / espresso replaces the cooler grey-white; the green is deepened
  and a brass detail accent is introduced.
- **Geometry:** squared 2px buttons and sharp-cornered media replace full-pill, soft-card styling.
- **Depth & motion:** photography-and-contrast depth with slow, flat motion replaces shadow-heavy,
  generically-animated UI.
