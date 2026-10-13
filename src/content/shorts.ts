export const duelShorts = [
  {
    id: "LFxPolg8ZA0",
    title: "Maybe we shouldn't have added Russian roulette to our game 😅",
  },
  {
    id: "QyyZs_x014Q",
    title: "Have you hopped in yet?",
  },
  {
    id: "PmBu9WdYOFk",
    title: "Months of work, and it's finally yours to play. Let us know what you think 🙌",
  },
  {
    id: "I_BmOXwf-88",
    title: "Duel Me Bro launches in early access tomorrow, wishlist it before it drops 🎉",
  },
  {
    id: "S2ICuK5WvUM",
    title: "3 days until Duel Me Bro launches in early access, wishlist now so you don't miss it!!",
  },
  {
    id: "57v7gP-MkQU",
    title: "Only a couple more sleeps before our first VR game releases 🔥",
  },
  {
    id: "xLrM3vLzA3I",
    title: "One week left!!! Help us spread the word before launch 🔥",
  },
] as const;

export function youtubeShortUrl(id: string) {
  return `https://www.youtube.com/shorts/${id}`;
}

export function youtubeEmbedUrl(id: string, autoplay: boolean) {
  const params = new URLSearchParams({
    mute: "1",
    playsinline: "1",
    rel: "0",
    modestbranding: "1",
    loop: "1",
    playlist: id,
  });
  if (autoplay) params.set("autoplay", "1");
  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}

export function youtubeThumb(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}
