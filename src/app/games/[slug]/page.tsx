import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GameView } from "@/components/games/GameView";
import { games, getGame } from "@/content/games";
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
      images: [{ url: game.cover, alt: copy.game.title }],
    },
  };
}

export default async function GamePage({ params }: PageProps<"/games/[slug]">) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) notFound();

  return <GameView cover={game.cover} hero={game.hero} />;
}
