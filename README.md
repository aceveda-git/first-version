# Effectus World Cup 2026

Interactive sticker pack experience built with Next.js.

## Routes

Each team member has a personal link:

- `/{slug}` — open sticker pack and download your sticker
- `/{slug}/album` — browse the full team album

Examples:

- `/agustin-schneeberger`
- `/agustina-ceveda`

## Getting started

```bash
npm install
npm run dev
```

## Assets

```
public/
  pack-front-top.png
  pack-front-bottom.png
  pack-back-top.png
  pack-back-bottom.png
  stickers/
    Agustin-Schneeberger.png
    Agustina-Ceveda.png
    ...
```

Replace PNGs in `public/stickers/` to update artwork. Filenames use Pascal-Case with hyphens.

## Team data

Edit `src/data/team.ts` to update names, roles, or add members. Slugs map to sticker filenames automatically.
