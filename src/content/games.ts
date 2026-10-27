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

export type GameTrailer = {
  poster: string;
  hd: string;
  sd: string;
  full: string;
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
  heroWidth: number;
  heroHeight: number;
  trailer?: GameTrailer;
  gallery: GameMedia[];
  summary: string;
  description: string[];
  features: GameFeature[];
  modes: GameFeature[];
  accent: "lime" | "magenta" | "cyan";
  price?: string;
  storeUrl?: string;
  trailerUrl?: string;
};

export const games: Game[] = [
  {
    slug: "duel-me-bro",
    title: "Duel Me Bro",
    shortName: "Duel Me Bro",
    tagline: "Choose your weapon. Bruise your opponent.",
    status: "early-access",
    price: "$5.99",
    platforms: ["Meta Quest"],
    cover: "/media/games/duel-me-bro/poster.webp",
    hero: "/media/games/duel-me-bro/cover-landscape.webp",
    heroWidth: 2560,
    heroHeight: 1440,
    trailer: {
      poster: "/media/games/duel-me-bro/trailer-poster.jpg",
      hd: "/media/games/duel-me-bro/trailer-1080.mp4",
      sd: "/media/games/duel-me-bro/trailer-720.mp4",
      full: "/media/games/duel-me-bro/trailer-full-1080.mp4",
    },
    gallery: [
      {
        src: "/media/games/duel-me-bro/cover-square.webp",
        alt: "Duel Me Bro store cover: a banana duelist in pixel sunglasses holding a flintlock pistol",
        caption: "Store cover",
      },
      {
        src: "/media/games/duel-me-bro/screenshot-1.webp",
        alt: "Two banana duelists clash with katanas in a torchlit stone arena",
        caption: "Katana clash",
      },
      {
        src: "/media/games/duel-me-bro/screenshot-2.webp",
        alt: "Banana duelists face off with flintlock pistols on a moonlit dock",
        caption: "Pistols on the dock",
      },
      {
        src: "/media/games/duel-me-bro/screenshot-3.webp",
        alt: "Weapon select showing a flintlock pistol, a katana, and a revolver",
        caption: "Pick your weapon",
      },
      {
        src: "/media/games/duel-me-bro/screenshot-4.webp",
        alt: "Pre-match lobby with player banners and a weapon pedestal",
        caption: "The lobby",
      },
      {
        src: "/media/games/duel-me-bro/screenshot-5.webp",
        alt: "Match lobby with both duelists ready beside a preview of the arena",
        caption: "Ready up",
      },
    ],
    summary:
      "A chaotic shooter, fighter, and party game for Meta Quest. Cartoon bananas pick a weapon, step in, and settle beef with their actual arms. 1v1 or 2v2. Slip once and the whole bunch is talking.",
    description: [
      "Duel Me Bro is out now in Early Access on Meta Quest for $5.99: a party shooter-fighter where you step into banana bodies, choose your weapon, and settle it in a short, loud VR fight. Queue a 1v1 if it is personal, or run 2v2 when the whole squad wants in. Everybody is going to talk trash. Somebody is going to slip.",
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
  "early-access": "Out now · Early Access",
  released: "Out now",
};
