# Noetic Realms

Official site for **Noetic Realms**, an independent VR game studio. The featured title is **Duel Me Bro VR**.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS with studio design tokens

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Add another game

1. Drop media in `public/media/games/<slug>/`.
2. Add an entry to `src/content/games.ts`.
3. The `/games` index and `/games/[slug]` page pick it up automatically.

Replace Duel Me Bro stills, footage, and logos in `public/media/games/duel-me-bro/` whenever new art is ready.
