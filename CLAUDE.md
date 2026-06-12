# Claude Instructions — Erica DeBear Real Estate Website

This file is loaded automatically at the start of every Claude Code session in
this repo. Read it fully before making changes.

## Who I Am

I'm Erica DeBear, a licensed Los Angeles real estate broker. I am not technical
and I do not write code.

- Explain what you're about to do in plain English **before** you do it.
- Give the business reason for each change ("this makes your listings load
  faster so visitors don't leave," not "this lazy-loads the component").
- When you need a decision, ask **one clear question at a time**.
- Give me copy-paste-ready results, not instructions on how to do it myself.

## What This Is

A live marketing website at **https://ericadebear.com**.

- **Framework:** Next.js 16 (App Router) + React + TypeScript
- **Styling:** Tailwind CSS v4. Design tokens (colors, fonts) live in
  `app/globals.css` under `@theme` — that's the single source of truth for the
  look. Don't hardcode colors; use the tokens.
- **Hosting:** Netlify, connected to this GitHub repo.

## How My Changes Reach the Live Site

When you commit to the **`main`** branch and push, Netlify automatically
rebuilds and updates ericadebear.com within a few minutes. Netlify keeps every
previous version, so any change can be rolled back — nothing is ever permanently
broken.

Before pushing anything user-facing, run a production build to make sure it
compiles: `npm run build`.

## Where Things Live

- `content/site.ts` — **most site wording lives here**: headings, testimonials,
  contact details, navigation, the Market Notes videos. Start here for copy edits.
- `app/` — the pages (each folder is a page: `app/about/`, `app/contact/`, etc.)
- `components/` — reusable pieces shared across pages (Header, Footer, Hero, etc.)
- `legalpages/` — the legal pages' text (privacy, terms, etc.) as Markdown
- `public/` — images, videos, favicon, the social share image
- `design.md` — the visual direction and design system
- `COPY-TODOS.md` — outstanding content decisions and asset needs

## Hard Rules — Never Break These

These are compliance and brand requirements.

1. **Legal wording (compliance-critical).** Erica attended law school but is
   **NOT a licensed attorney.** The only approved phrasings are
   **"law-school educated"** or **"studied law."** NEVER use "attorney,"
   "lawyer," "JD," "Esq.," "legally trained," or "practicing law" anywhere on
   the site, in any context.
2. **No em-dashes** in any text a visitor sees. (House style.)
3. **Never invent facts.** No made-up reviews, awards, award issuers, press
   mentions, statistics, or policy text. If it isn't already on the site or I
   haven't given it to you, ask me.
4. **No placeholder text.** Anything in [brackets] must never appear on the
   live site.
5. **Don't link to Facebook** — that account isn't active.
6. **Copy is precise.** When I give you exact wording, use it exactly. Don't
   paraphrase, shorten, or "improve" approved copy without asking.

## Connected Services (set up under Erica's accounts)

- **RealScout** — property listings and home search (agent ID is in the code)
- **Formspree** — the contact form; submissions email erica@ericadebear.com
- **Google Analytics 4** — visitor analytics (ID `G-55V6VBHM51` in `app/layout.tsx`)
- **Mailchimp** — newsletter signups (endpoint in `app/newsletter/page.tsx`)

## Open Items / Roadmap

See `COPY-TODOS.md` for the full list. Notable ones:

- Finalize the 8 video titles in the Market Notes section (homepage)
- A "what's your home worth?" seller valuation tool
- Curated Instagram photo tiles (a fallback for the live embed)
- A sold-properties / featured-sales section (page was removed until real
  content exists)

## Before You Run Anything

Explore the repo, read `design.md` and `COPY-TODOS.md`, and confirm you
understand the structure and the Hard Rules above. Then give me a short
plain-English summary and ask what I'd like to work on.
