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
    title: "Duel Me Bro",
    shortName: "Duel Me Bro",
    tagline: "Choose your weapon. Bruise your opponent.",
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
      "A chaotic shooter, fighter, and party game for Meta Quest. Cartoon bananas pick a weapon, step in, and settle beef with their actual arms. 1v1 or 2v2. Slip once and the whole bunch is talking.",
    description: [
      "Duel Me Bro is coming soon to Meta Quest: a party shooter-fighter where you step into banana bodies, choose your weapon, and settle it in a short, loud VR fight. Queue a 1v1 if it is personal, or run 2v2 when the whole squad wants in. Everybody is going to talk trash. Somebody is going to slip.",
      "It is competitive without being sterile and cartoon without being cute. Headset on, loadout locked, rematch queued. The bragging rights travel wherever you take them, and the look is extremely a-peel-ing.",
    ],
    features: [
      {
        title: "Party fights",
        body: "Shooter energy, fighting stakes, party-game chaos. Short 1v1 and 2v2 rounds made for rematches, instant regret, and a well-timed slip.",
      },
      {
        title: "Choose your weapon",
        body: "Bring pistols, katanas, or whatever you find a-peel-ling. You pick the fight, you pick the weapon.",
      },
      {
        title: "Go Bananas",
        body: "Awesome weapons and fun fighters built for the kind of VR moments you have to send to the group chat. Every duel is a chance to go bananas, get weird, and pull off something worth clipping.",
      },
      {
        title: "Crowd chaos",
        body: "Minigames with friends, high score boards, bets on who bruises who, and tomatoes for your favorites. Or your enemies. Same throw either way.",
      },
    ],
    modes: [
      {
        title: "1v1",
        body: "One rival. One arena. Draw, don't slip, and bruise your opponent.",
      },
      {
        title: "2v2",
        body: "Bring a partner. Double the bananas, double the trash talk. Split the squad and go.",
      },
      {
        title: "Rematch",
        body: "Because one round is never enough once somebody starts talking. Peel off another.",
      },
    ],
    accent: "lime",
    storeUrl: "https://www.meta.com/experiences/duel-me-bro/26067289019616501/",
  },
];

export function getGame(slug: string) {
  return games.find((game) => game.slug === slug);
}

export function getFeaturedGame() {
  return games[0];
}

export const statusCopy: Record<GameStatus, string> = {
  upcoming: "Coming soon",
  "early-access": "Early Access",
  released: "Available Now",
};
