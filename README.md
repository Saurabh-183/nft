# NFTme — NFT Marketplace Landing Page

A pixel-accurate recreation of the NFTme NFT marketplace Figma design, built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **ESLint**.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS** — utility-first styling
- **ESLint** — `next/core-web-vitals` ruleset
- **Fonts** — Clash Display (via Fontshare) + Poppins (Google Fonts)

## Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, Featured Artwork, Trending, Artists, Community |
| `/about` | About NFTme — Mission, Team, Stats |
| `/store` | Store — Filtered NFT Grid |
| `/games` | Games — Leaderboard + Grid |

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Lint

```bash
npm run lint
```

## Responsive Breakpoints

| Device | Breakpoint |
|---|---|
| Mobile | `< 640px` |
| Tablet | `640px – 1024px` |
| Desktop | `> 1024px` |
| Large screens | `> 1280px` |

## Design Notes

- Dark theme with deep `#0A0A0F` background
- Purple accent (`#7B2FFF`) used for CTAs, prices, and glows
- Radial gradient glows throughout to match Figma
- Live countdown timer on featured artwork section
- Staggered Trending grid matches Figma's offset layout
- All components are cleanly separated under `src/components/`
