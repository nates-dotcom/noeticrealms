import type { Metadata } from "next";
import { GameCard, IncomingGameCard } from "@/components/games/GameCard";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { games } from "@/content/games";

export const metadata: Metadata = {
  title: "Games",
  description:
    "VR games from Noetic Realms, led by the upcoming 1v1 and 2v2 duel Duel Me Bro VR.",
};

export default function GamesPage() {
  return (
    <Container as="section" className="py-16 sm:py-24">
      <SectionHeader
        as="h1"
        eyebrow="The lineup"
        title="Games from the realm"
        highlight="realm"
        description="Duel Me Bro VR leads the lineup. Every new title gets its own page, gallery, and feature set as it is ready to show."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {games.map((game) => (
          <GameCard key={game.slug} game={game} featured={game.slug === "duel-me-bro"} />
        ))}
        <IncomingGameCard />
      </div>
    </Container>
  );
}
