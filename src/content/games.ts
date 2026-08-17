export type GameStatus = "upcoming" | "early-access" | "released";

export type GameMedia = {
  src: string;
  alt: string;
  caption?: string;
};

export type GameFeature = {
  title: string;
  body: string;
};

export type Game = {
  slug: string;
  title: string;
  shortName: string;
  tagline: string;
  status: GameStatus;
  platforms: string[];
  cover: string;
  hero: string;
  gallery: GameMedia[];
  summary: string;
  description: string[];
  features: GameFeature[];
  modes: GameFeature[];
  accent: "lime" | "magenta" | "cyan";
  storeUrl?: string;
  trailerUrl?: string;
};

export const games: Game[] = [
  {
    slug: "duel-me-bro",
    title: "Duel Me Bro VR",
    shortName: "Duel Me Bro",
    tagline: "Choose your weapon. Bring the bananas.",
    status: "upcoming",
    platforms: ["Meta Quest"],
    cover: "/media/games/duel-me-bro/poster.png",
    hero: "/media/games/duel-me-bro/banner-wide.png",
    gallery: [
      {
        src: "/media/games/duel-me-bro/poster.png",
        alt: "Duel Me Bro poster with two banana duelists, pistols versus katanas",
        caption: "Poster",
      },
      {
        src: "/media/games/duel-me-bro/banner-wide.png",
        alt: "Wide Duel Me Bro banner with banana fighters and comic speed lines",
        caption: "Banner",
      },
      {
        src: "/media/games/duel-me-bro/key-art-duel.png",
        alt: "Banana in a VR headset firing flintlocks at a banana with katanas",
        caption: "Lock in a weapon",
      },
      {
        src: "/media/games/duel-me-bro/key-art-clash.png",
        alt: "Banana duelists clashing pistols and katanas",
        caption: "Clash",
      },
      {
        src: "/media/games/duel-me-bro/key-art-back-to-back.png",
        alt: "Two bananas back to back in VR headsets, pistols drawn",
        caption: "Back to back",
      },
    ],
    summary:
      "A chaotic 1v1 and 2v2 VR showdown where cartoon bananas pick a weapon, step in, and settle beef with their actual arms.",
    description: [
      "Duel Me Bro VR is the call-out made into a game. Step into banana bodies, choose your weapon, and settle it in a short, loud VR fight. Queue a 1v1 if it is personal, or run 2v2 when the whole squad wants in. Everybody is going to talk trash.",
      "It is competitive without being sterile and cartoon without being cute. Headset on, loadout locked, rematch queued. The bragging rights travel wherever you take them.",
    ],
    features: [
      {
        title: "1v1 and 2v2",
        body: "Solo call-outs or partner chaos. Short, explosive rounds made for rematches and instant regret.",
      },
      {
        title: "Choose your weapon",
        body: "Lock in pistols, katanas, or whatever you bring into the round. The match is about what you pick, not a locked side.",
      },
      {
        title: "Banana mayhem",
        body: "Cel-shaded fighters, comic speed lines, and the kind of clip that gets sent to the group chat at 1am.",
      },
      {
        title: "Crowd chaos",
        body: "Minigames with friends, high score boards, bets on who wins the next duel, and tomatoes for your favorites. Or your enemies. Same throw either way.",
      },
    ],
    modes: [
      {
        title: "1v1",
        body: "One rival. One arena. Draw and don't miss.",
      },
      {
        title: "2v2",
        body: "Bring a partner. Double the bananas, double the trash talk.",
      },
      {
        title: "Rematch",
        body: "Because one round is never enough once somebody starts talking.",
      },
    ],
    accent: "lime",
  },
];

export function getGame(slug: string) {
  return games.find((game) => game.slug === slug);
}

export function getFeaturedGame() {
  return games[0];
}

export const statusCopy: Record<GameStatus, string> = {
  upcoming: "Upcoming",
  "early-access": "Early Access",
  released: "Available Now",
};
