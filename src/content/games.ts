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
    tagline: "Pistols. Katanas. Bananas.",
    status: "upcoming",
    platforms: ["Meta Quest", "PCVR"],
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
        caption: "Pistols vs blades",
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
      "A chaotic 1v1 VR showdown where cartoon bananas settle beef with flintlocks, katanas, and your actual arms.",
    description: [
      "Duel Me Bro VR is the call-out made into a game. You and a rival step into banana bodies, pick a side, and settle it in a short, loud VR duel. One of you has the pistols. One of you has the blades. Both of you are going to talk trash.",
      "It is competitive without being sterile and cartoon without being cute. Red versus blue. Headset versus shades. High scores and settings stay on your device. The bragging rights travel wherever you take them.",
    ],
    features: [
      {
        title: "1v1 energy",
        body: "Short, explosive duels made for challenge matches, rematches, and instant regret.",
      },
      {
        title: "Pistols vs blades",
        body: "Flintlocks on one side, katanas on the other. Close-range VR combat with a ridiculous amount of personality.",
      },
      {
        title: "Banana mayhem",
        body: "Cel-shaded fighters, comic speed lines, and the kind of clip that gets sent to the group chat at 1am.",
      },
      {
        title: "Local glory",
        body: "High scores and settings live on your headset. No accounts. No trackers. Uninstall and it is gone.",
      },
    ],
    modes: [
      {
        title: "Duel",
        body: "One rival. One arena. Draw and don't miss.",
      },
      {
        title: "Rematch",
        body: "Because one round is never enough once somebody starts talking.",
      },
      {
        title: "High score hunt",
        body: "Chase local records and keep the bragging rights in the headset.",
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
