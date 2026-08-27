export const duelShorts = [
  {
    id: "YbkP768zYKI",
    title: "Duel Me Bro gameplay clip",
  },
  {
    id: "42glwO7itIs",
    title: "Duel Me Bro gameplay clip",
  },
  {
    id: "VO_zSgkA8yU",
    title: "Duel Me Bro gameplay clip",
  },
  {
    id: "3A2R-SXLfbg",
    title: "Duel Me Bro gameplay clip",
  },
  {
    id: "o81UaDcxgYw",
    title: "Duel Me Bro gameplay clip",
  },
  {
    id: "jcP-fdk5YU0",
    title: "Duel Me Bro gameplay clip",
  },
  {
    id: "1_y0LEM2ZM4",
    title: "Duel Me Bro gameplay clip",
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
