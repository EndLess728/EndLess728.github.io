# Mantu Kumar — Portfolio

Personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4**
- **Framer Motion** — scroll reveals, magnetic buttons, 3D tilt cards, animated nav
- **next-themes** — light/dark mode
- **react-icons**

## Structure

- `src/data/portfolio.ts` — all content (bio, experience, projects, skills, etc.) lives here as a single typed source of truth
- `src/components/` — one component per section, plus shared UI (`Container`, `SectionHeading`) and interaction primitives (`Magnetic`, `TiltCard`, `RevealText`)
- `public/images/` — project screenshots and company logos
- `public/resume.pdf` — downloadable resume

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```
