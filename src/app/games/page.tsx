import type { Metadata } from "next";
import { GameCard, IncomingGameCard } from "@/components/games/GameCard";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { games } from "@/content/games";

export const metadata: Metadata = {
  title: "Games",
  description:
    "VR games from Noetic Realms, led by Duel Me Bro — a coming-soon shooter, fighter, and party game on Meta Quest.",
};

export default function GamesPage() {
  return (
    <Container as="section" className="py-16 sm:py-24">
      <SectionHeader
        as="h1"
        eyebrow="The lineup"
        title="Games from the realm"
        highlight="realm"
        description="Duel Me Bro leads the lineup. Coming soon on Meta Quest. Every new title gets its own page as it is ready to show."
      />
      <div className="mt-16 space-y-20">
        {games.map((game) => (
          <GameCard key={game.slug} game={game} />
        ))}
        <IncomingGameCard />
      </div>
    </Container>
  );
}
