# AI Developer Portfolio

A premium, futuristic AI developer portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis smooth scroll, and React Three Fiber.

![Tech](https://img.shields.io/badge/Next.js-14-black) ![Tech](https://img.shields.io/badge/TypeScript-strict-blue) ![Tech](https://img.shields.io/badge/TailwindCSS-3-06B6D4)

## Overview

This is a full, production-ready developer portfolio designed to feel like a premium AI startup landing page: dark glassmorphic UI, animated gradients, a 3D hero scene, scroll-triggered reveals, and a fully responsive layout from mobile to ultra-wide screens.

Every section is a standalone, reusable component, and all editable content (name, bio, projects, skills, timeline, services, testimonials, socials) lives in dedicated `data/` and `constants/` files — so you can personalize the entire site without touching component code.

## Features

- **Cinematic hero** — split layout with animated typing role rotator, floating glass tech-stack cards, a mini terminal with typewriter effect, and a live React Three Fiber 3D scene
- **Glassmorphism design system** — consistent glass cards, gradient borders, neon glow shadows, and an animated particle/blob/grid/star background throughout
- **Smooth scrolling** — powered by Lenis, respects `prefers-reduced-motion`
- **Bento-grid project showcase** — filterable by category, with a detailed modal for each project
- **Animated skills, timeline, services & testimonials** — scroll-reveal animations via Framer Motion
- **Working contact form** — floating labels, client-side validation, loading/success/error states, backed by an API route ready to connect to a real email provider
- **Custom cursor & magnetic buttons** (desktop only, disabled on touch devices)
- **Dark/light theme toggle** with persisted preference
- **Accessible** — semantic HTML, visible focus states, ARIA labels, keyboard navigable
- **SEO-ready** — metadata, Open Graph & Twitter cards
- **Custom 404 and error boundary pages**

## Technology Stack

| Category        | Technology                          |
| --------------- | ------------------------------------ |
| Framework        | Next.js 14 (App Router)             |
| Language         | TypeScript (strict mode)            |
| Styling          | Tailwind CSS                         |
| Animation        | Framer Motion, GSAP                   |
| Smooth Scroll    | Lenis                                |
| 3D               | React Three Fiber + Three.js         |
| Icons            | Lucide React, React Icons            |

## Folder Structure

```
app/                     # Routes, layout, global styles, API routes
  api/contact/           # Contact form submission endpoint
components/
  ui/                    # Low-level shared UI primitives
  layout/                # Navbar, footer, loading screen, scroll provider
  hero/                  # Hero section + 3D scene + terminal + typing text
  about/                 # About bento grid, profile card, stats
  projects/              # Project grid, filters, card, modal
  skills/                # Skills categories & progress bars
  timeline/              # Vertical animated journey timeline
  services/              # Services grid + testimonials slider
  contact/               # Contact form + info
  footer/                # Site footer
  common/                # Cursor, theme toggle, glow card, background, headings
hooks/                   # Lenis, scroll direction, active section, theme, count-up
lib/                     # Shared utilities (cn helper)
utils/                   # Form validation
types/                   # Shared TypeScript types
constants/               # Site-wide constants (nav, socials, personal info)
data/                    # Editable content: projects, skills, timeline, services...
public/
  images/projects/       # Project preview images
  resume/                # Resume file
  fonts/, icons/          # Static assets
```

## Installation

Requires Node.js 18.18+ (or 20+ recommended).

```bash
npm install
```

## Development

```bash
npm run dev
```

Visit `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

> **Note:** `next/font/google` fetches font files from Google Fonts at build time, so an internet connection is required during `npm run build`/`npm run dev` the first time (fonts are then cached locally).

## Customization Guide

### Personal information
Edit `constants/site.ts` — name, role, tagline, email, location, resume path, social links, rotating hero roles, and terminal lines.

### Projects
Edit `data/projects.ts`. Each project supports a title, description, tech stack, category tags (for filtering), live/GitHub links, status badge, featured flag, bento size (`large` / `medium` / `small`), and modal detail content (features, challenges). Replace the placeholder SVGs in `public/images/projects/` with real screenshots (same filenames, or update the `image` field).

### Skills
Edit `data/skills.ts` — grouped by category with a 0–100 proficiency level per skill.

### Timeline, Services, Testimonials, Stats
All in `data/content.ts`.

### Resume
Replace `public/resume/Arjun-Verma-Resume.pdf` with your real resume (keep the same filename, or update `SITE.resumeUrl` in `constants/site.ts`).

### Colors, type, spacing
The full design system (colors, gradients, radii, shadows, spacing, animations) is defined in `tailwind.config.ts` and `app/globals.css`. Update the tokens there to restyle the whole site consistently.

### Contact form email delivery
By default, `/api/contact` validates submissions and simulates success (useful for demos). To send real emails, add an email provider API key to `.env.local` (see `.env.example`) and uncomment the provider call inside `app/api/contact/route.ts`.

## Deployment

This project deploys cleanly to [Vercel](https://vercel.com) (recommended), or any Node.js hosting platform that supports Next.js. Set any environment variables from `.env.example` in your hosting provider's dashboard before deploying.

```bash
vercel deploy
```

## Accessibility & Performance

- Respects `prefers-reduced-motion` (disables heavy animation/particles)
- Visible keyboard focus states on all interactive elements
- Skip-to-content link for screen reader / keyboard users
- Images use `next/image` with lazy loading and responsive sizing
- Heavy sections (3D scene, project modal) are dynamically imported / code-split

## License

This project is free to use as a personal portfolio template.
