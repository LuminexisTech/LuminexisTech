# Luminexis — Coming Soon

Landing page for **Luminexis**, a smart wearable company empowering people with vision and hearing loss.

**Tagline:** Walk freely. Live independently.

## Stack

- [Next.js](https://nextjs.org/) 15 (App Router)
- [Tailwind CSS](https://tailwindcss.com/) 4.3 (design tokens + component layer)
- [Framer Motion](https://www.framer.com/motion/) — UI entrance & scroll animations
- [GSAP](https://gsap.com/) + ScrollTrigger — hero & mission reveals

## Getting started

```bash
npm install
npm run dev
```

### `Cannot find module './611.js'` (or similar)

This means the `.next` build cache is stale or corrupted (often after an interrupted build or running `dev` and `build` at the same time). Fix it with a clean rebuild:

```bash
npm run dev:fresh
```

Or for production:

```bash
npm run rebuild
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Design system

Tokens and primitives live under `src/styles/` and `src/components/ui/`:

| File | Purpose |
|------|---------|
| `src/styles/tokens.css` | `@theme` colors, type scale, radius, shadows, motion |
| `src/styles/utilities.css` | Custom `@utility` classes (`text-display-xl`, `bg-hero-gradient`, …) |
| `src/styles/components.css` | `ds-*` component classes (buttons, pills, cards, layout) |
| `src/components/ui/` | React primitives (`Badge`, `Button`, `Card`, `Heading`, …) |

Use semantic tokens in JSX: `bg-background`, `text-foreground`, `text-muted-foreground`, `bg-primary`, `border-border`.

Brand aliases remain available: `canvas`, `ink`, `accent`, `sky`.

## Project structure

```
src/
  app/          # Layout, globals, home page
  styles/       # Tailwind v4 design system (tokens, utilities, components)
  components/   # Page sections + ui/ primitives
  lib/          # cn(), constants, GSAP helpers
public/
  images/       # Hero photography assets
```

## Deploy

Deploy to [Vercel](https://vercel.com) or any Node host that supports Next.js. No environment variables required for the static coming-soon page.
