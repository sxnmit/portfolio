# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

Single-page portfolio built with Next.js App Router. The page is one long scroll with anchor-linked sections; there is no client-side routing between pages.

**Entry points:**
- `app/layout.tsx` — root layout, sets metadata and mounts Vercel Analytics
- `app/page.tsx` — composes all 6 section components in order

**Sections** (in render order): `hero-section`, `about-section`, `experience-section`, `projects-section`, `skills-section`, `contact-section`. Navigation anchors (`#about`, `#experience`, etc.) map to `id` attributes on these sections.

**All content is hardcoded** as JavaScript object arrays at the top of each section component — there is no CMS, API, or external data source. To update experience, projects, or skills, edit the data arrays directly in the relevant component file.

## Styling

- Tailwind v4 (uses `@import "tailwindcss"` syntax, not `@tailwind` directives)
- Dark mode only — forced via `class="dark"` on `<html>`, no theme switcher
- Custom utilities defined in `app/globals.css`: `.glass` (frosted glass), `.glow-*` (box-shadow variants), `.gradient-text` (purple-blue-cyan gradient)
- Colors use the OKL color space; primary is purple, secondary blue, accent cyan

## Key Libraries

- **Framer Motion** — scroll-triggered animations on most sections; floating icon animations in the hero
- **ShadCN/UI** — only `button`, `card`, `badge`, `input`, and `textarea` are actually used, though more are installed
- `lib/utils.ts` exports `cn()` (clsx + tailwind-merge) for conditional class names
