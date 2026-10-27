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
    id: "z34PQ-PwoCc",
    title: "Who needs bullets when you've got a katana? ⚔️",
  },
  {
    id: "M7hHwDt_ZYE",
    title: "Think you can beat the person who made the game? 🤠🔫",
  },
  {
    id: "P1YKvwFDCZY",
    title: "Would YOU take the shot? 😳",
  },
  {
    id: "QGurU8jFbL4",
    title: "What should we add to our VR game next? 👀🍌",
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
