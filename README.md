# BoxOS Website

Marketing site for **BoxOS**, the operations platform for CrossFit boxes (scheduling, WOD
programming, member management, analytics, and community). This is a standalone Next.js project,
separate from the BoxOS app/backend repo, and shares its dark cyberpunk visual language:
near-black surfaces, a neon-cyan accent, Chakra Petch display type, and JetBrains Mono
micro-labels.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4, with BoxOS design tokens defined in `app/globals.css`
- Single-page layout: `app/page.tsx` composes the sections in `components/sections/`, built on
  shared primitives in `components/ui/`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it. The page auto-updates as you edit
files under `app/` and `components/`.

## Structure

- `app/layout.tsx` — fonts (Chakra Petch, Inter, JetBrains Mono) and root metadata
- `app/globals.css` — BoxOS color/radius tokens, grid background, box-cut button clip-path
- `components/ui/` — Button, Pill, SectionHeader, AccentBadge, Card
- `components/sections/` — Nav, Hero, Features, ProductShowcase, AthleteProof, CtaBand, Footer
- `lib/constants.ts` — contact email / mailto links used by CTAs

## Build

```bash
npm run build
npm run lint
```

## Deployment

The site runs as a Docker container on a Hostinger VPS behind Traefik.

- `Dockerfile` — multi-stage build of the Next.js standalone output (`output: "standalone"` in
  `next.config.ts`)
- `.github/workflows/docker-publish.yml` — builds the image on every push to `main` and pushes it
  to `ghcr.io/simisimon/boxos-website`
- `docker-compose.yml` — the stack deployed on the VPS; set `DOMAIN` to the hostname the site is
  served on, and Traefik handles routing and the TLS certificate

To try the production image locally:

```bash
docker build -t boxos-website .
docker run --rm -p 3000:3000 boxos-website
```
