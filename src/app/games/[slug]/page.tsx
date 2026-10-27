import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GameView } from "@/components/games/GameView";
import { games, getGame } from "@/content/games";
import { studio } from "@/content/studio";
import { readSiteCopy } from "@/lib/site-copy-store";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/games/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) return { title: "Game" };
  const copy = await readSiteCopy();

  return {
    title: copy.game.title,
    description: copy.game.summary,
    openGraph: {
      title: copy.game.title,
      description: copy.game.summary,
      url: `/games/${game.slug}`,
      siteName: studio.name,
      type: "website",
      images: [
        {
          url: game.hero,
          width: game.heroWidth,
          height: game.heroHeight,
          alt: `${copy.game.title} cover art`,
          type: "image/webp",
        },
      ],
    },
  };
}

export default async function GamePage({ params }: PageProps<"/games/[slug]">) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) notFound();

  return (
    <GameView cover={game.cover} hero={game.hero} trailer={game.trailer} />
  );
}
