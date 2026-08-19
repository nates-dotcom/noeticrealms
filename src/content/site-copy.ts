export type CopyFeature = {
  title: string;
  body: string;
};

export type CopyStat = {
  label: string;
  value: string;
};

export type CopySection = {
  title: string;
  body: string[];
};

export type SiteCopy = {
  headingColor: string;
  titleColor: string;
  nav: {
    duelMeBro: string;
    about: string;
    contact: string;
    privacy: string;
  };
  game: {
    title: string;
    wordmarkLine1: string;
    wordmarkLine2: string;
    vrMark: string;
    statusLabel: string;
    platforms: string;
    genres: string;
    tagline: string;
    summary: string;
    description: string[];
    pitchEyebrow: string;
    features: CopyFeature[];
    modesEyebrow: string;
    modesTitle: string;
    modesHighlight: string;
    modes: CopyFeature[];
  };
  studio: {
    name: string;
    tagline: string;
    description: string;
    about: string;
    platformsLine: string;
    email: string;
    wishlistUrl: string;
    wishlistLabel: string;
    discordUrl: string;
    discordLabel: string;
    youtubeUrl: string;
    instagramUrl: string;
    tiktokUrl: string;
    footerLine: string;
  };
  about: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    whoEyebrow: string;
    whoBody: string;
    howEyebrow: string;
    howItems: string[];
    stats: CopyStat[];
    ctaLabel: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    discordEyebrow: string;
    discordTitle: string;
    discordBody: string;
    emailEyebrow: string;
    emailTitle: string;
    emailBody: string;
    emailCta: string;
  };
  privacy: {
    eyebrow: string;
    title: string;
    description: string;
    updated: string;
    sections: CopySection[];
  };
};

export const defaultSiteCopy: SiteCopy = {
  headingColor: "#ffe14a",
  titleColor: "#fff6e8",
  nav: {
    duelMeBro: "Duel Me Bro",
    about: "About",
    contact: "Contact",
    privacy: "Privacy",
  },
  game: {
    title: "Duel Me Bro",
    wordmarkLine1: "Duel Me",
    wordmarkLine2: "Bro",
    vrMark: "VR",
    statusLabel: "Coming soon",
    platforms: "Meta Quest",
    genres: "Shooter · Fighting · Action · Party",
    tagline: "Choose your weapon. Bruise your opponent.",
    summary:
      "A chaotic shooter, fighter, and party game for Meta Quest. Cartoon bananas pick a weapon, step in, and settle beef with their actual arms. 1v1 or 2v2. Slip once and the whole bunch is talking.",
    description: [
      "Duel Me Bro is coming soon to Meta Quest: a party shooter-fighter where you step into banana bodies, choose your weapon, and settle it in a short, loud VR fight. Queue a 1v1 if it is personal, or run 2v2 when the whole squad wants in. Everybody is going to talk trash. Somebody is going to slip.",
      "It is competitive without being sterile and cartoon without being cute. Headset on, loadout locked, rematch queued. The bragging rights travel wherever you take them, and the look is extremely a-peel-ing.",
    ],
    pitchEyebrow: "About",
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
    modesEyebrow: "Play",
    modesTitle: "1v1. 2v2. Instant bruises.",
    modesHighlight: "2v2",
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
  },
  studio: {
    name: "Noetic Realms",
    tagline: "Indie VR with a peel.",
    description:
      "Noetic Realms is an independent studio building a-peel-ing VR for Meta Quest, starting with Duel Me Bro — a coming-soon shooter, fighter, and party game.",
    about:
      "We make VR games that feel alive in the headset and loud on a stream. Competitive. Chaotic. Built for players who want to move, talk trash, slip, and remember the round.",
    platformsLine: "Meta Quest",
    email: "duelmebro@noeticrealms.com",
    wishlistUrl: "https://www.meta.com/experiences/duel-me-bro/26067289019616501/",
    wishlistLabel: "Wishlist Now",
    discordUrl: "https://discord.gg/k3Qc4CarhU",
    discordLabel: "Discord",
    youtubeUrl: "https://www.youtube.com/@DuelMeBroVR",
    instagramUrl: "https://www.instagram.com/duelmebrovr/",
    tiktokUrl: "https://www.tiktok.com/@duelmebrovr",
    footerLine: "Coming soon · Don't slip",
  },
  about: {
    eyebrow: "Studio",
    title: "Independent VR. Ripe on purpose.",
    highlight: "Ripe",
    description:
      "Noetic Realms is an independent studio building a-peel-ing VR for Meta Quest, starting with Duel Me Bro — a coming-soon shooter, fighter, and party game.",
    whoEyebrow: "Who we are",
    whoBody:
      "We make VR games that feel alive in the headset and loud on a stream. Competitive. Chaotic. Built for players who want to move, talk trash, slip, and remember the round. First through the door is Duel Me Bro on Meta Quest: choose your weapon, bruise your opponent, try not to slip.",
    howEyebrow: "How we build",
    howItems: [
      "VR-native movement and combat built around the fun of physically moving, aiming, reloading, and interacting—not a flat game with a headset slapped on.",
      "Realistic interactions and reloading that make every weapon feel satisfying and every encounter more physical and immersive. Bruise your opponent. Don't slip.",
    ],
    stats: [
      { label: "Focus", value: "Party VR" },
      { label: "Platforms", value: "Meta Quest" },
      { label: "Lead title", value: "Duel Me Bro" },
    ],
    ctaLabel: "Wishlist Now",
  },
  contact: {
    eyebrow: "Ping the bunch",
    title: "Contact",
    description:
      "Wishlist Duel Me Bro on the Meta Store, then hop in Discord for development updates. Email is for support, press, and anything that needs a paper trail.",
    discordEyebrow: "Community",
    discordTitle: "Discord",
    discordBody:
      "Playtests, patches, and the usual headset-on yelling. Come hang with the bunch. Try not to slip on the way in.",
    emailEyebrow: "Direct",
    emailTitle: "Email",
    emailBody:
      "Support, feedback, and studio questions. We use the address only to reply — never for marketing.",
    emailCta: "Write an email",
  },
  privacy: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    description: "This policy covers Duel Me Bro and the Noetic Realms studio website.",
    updated: "Last updated August 2026.",
    sections: [
      {
        title: "We do not collect your data",
        body: [
          "Neither Duel Me Bro nor Noetic Realms collect, transmit, distribute, or sell your data. The game uses no third-party analytics or advertising services. No email, name, address, or any other personal information is requested or required to play.",
        ],
      },
      {
        title: "Meta Quest platform",
        body: [
          "Duel Me Bro is listed on the Meta Store as coming soon, with Users Interact and in-game purchases. When you play on Meta Quest, Meta may access platform account details shown on the store page, including your display name, username, user id, profile pictures, avatars, age group, and a list of followers and people you follow who also own the app. That is Meta platform identity for multiplayer, not data Noetic Realms collects, sells, or uses for ads.",
        ],
      },
      {
        title: "What stays on your device",
        body: [
          "Storage permission on the device where the application is installed is requested in order to store save data such as high scores and settings preferences. This save data is entirely local to your device and is never transmitted or accessed remotely.",
          "If you wish to delete your data, simply uninstall the game.",
        ],
      },
      {
        title: "If you email us",
        body: [
          "If you email the developer for support or other feedback, emails and email addresses will be retained for quality assurance purposes. Those addresses will be used only to reply to the concerns or suggestions raised and will never be used for any marketing purpose.",
        ],
      },
      {
        title: "Questions",
        body: [
          "If you have any questions concerning this policy or our privacy practices, you can email the developer at duelmebro@noeticrealms.com.",
        ],
      },
    ],
  },
};

export const siteNav = (copy: SiteCopy) =>
  [
    { href: "/games/duel-me-bro", label: copy.nav.duelMeBro },
    { href: "/about", label: copy.nav.about },
    { href: "/contact", label: copy.nav.contact },
    { href: "/privacy", label: copy.nav.privacy },
  ] as const;

export function isHexColor(value: string) {
  return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(value);
}

export function mergeSiteCopy(base: SiteCopy, patch: unknown): SiteCopy {
  if (!patch || typeof patch !== "object") return base;
  const merged = deepMerge(base, patch) as SiteCopy;
  if (!isHexColor(merged.headingColor)) merged.headingColor = base.headingColor;
  if (!isHexColor(merged.titleColor)) merged.titleColor = base.titleColor;
  return merged;
}

function deepMerge(base: unknown, patch: unknown): unknown {
  if (Array.isArray(patch)) {
    return patch.map((item) => (typeof item === "string" ? item : item));
  }
  if (patch && typeof patch === "object" && base && typeof base === "object" && !Array.isArray(base)) {
    const output: Record<string, unknown> = { ...(base as Record<string, unknown>) };
    for (const [key, value] of Object.entries(patch as Record<string, unknown>)) {
      output[key] = key in output ? deepMerge(output[key], value) : value;
    }
    return output;
  }
  return patch ?? base;
}
