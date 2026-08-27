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
  items?: string[];
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
    description:
      "This Privacy Policy covers Duel Me Bro VR and the Noetic Realms studio website.",
    updated: "Last updated August 2026.",
    sections: [
      {
        title: "What data do we collect and for what purpose?",
        body: [
          "The data we process and/or collect from and about Users varies depending on what is required for the Game and the Services. Where we collect and use personal data, we do so only where we have a lawful reason to use that data for a particular purpose.",
        ],
      },
      {
        title: "Data Processed to Provide Meta Platform Features",
        body: [
          "Certain Meta platform features, when enabled, automatically processes data of users and their devices. The Game processes the following data to facilitate the operation of specific Meta Platform Features and associated services and is not stored by Noetic:",
        ],
        items: [
          "Achievements: User ID and User Profile are processed to allocate achievements to a user's account;",
          "Leaderboards: User ID, User Profile and Friends List are processed to display a user's profile on the global leaderboard and to enable filtering of the leaderboard for friends;",
          "In-Game Purchases and DLC: User ID and User Profile are processed to allocate additional Game content (including DLC and pre-order bonus content) to a user's account;",
        ],
      },
      {
        title: "Meta Quest Platform",
        body: [
          "Duel Me Bro VR uses certain Meta platform features to provide functionality such as achievements, leaderboards, social features, and in-game purchases. Data processed through these features is handled as described above and is not stored by Noetic Realms.",
          "Meta may separately collect and process information associated with your Meta account, device, and use of the Meta Quest platform in accordance with Meta's own terms and privacy policies. Noetic Realms does not sell Meta platform data or use it for advertising.",
        ],
      },
      {
        title: "What Stays on Your Device",
        body: [
          "Storage on the device where the application is installed may be used to store local game data such as settings, preferences, and other save data. This locally stored data is not transmitted to or remotely accessed by Noetic Realms.",
          "You may remove locally stored game data by uninstalling the game or by using any applicable data-management features provided by your device or the Meta Quest platform.",
        ],
      },
      {
        title: "Third-Party Analytics and Advertising",
        body: [
          "Duel Me Bro VR does not use third-party analytics or advertising services. Noetic Realms does not sell your personal information or use personal information collected through the Game for advertising.",
        ],
      },
      {
        title: "If You Email Us",
        body: [
          "If you email the developer for support or other feedback, your email, email address, and any information you voluntarily include in your message may be retained for support and quality assurance purposes.",
          "This information will be used only to respond to your questions, concerns, feedback, or support requests and will not be used for marketing purposes.",
        ],
      },
      {
        title: "Data Deletion",
        body: [
          "Data stored locally by Duel Me Bro VR can be removed by uninstalling the Game or by using applicable device or platform data-management features.",
          "Data associated with Meta platform services, such as achievements, leaderboards, purchases, or your Meta account, may be controlled or retained by Meta in accordance with Meta's policies and platform functionality.",
          "Noetic Realms does not maintain a separate database containing the Meta platform data described above.",
        ],
      },
      {
        title: "Questions",
        body: [
          "If you have any questions concerning this Privacy Policy or our privacy practices, you can email the developer at duelmebro@noeticrealms.com.",
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
