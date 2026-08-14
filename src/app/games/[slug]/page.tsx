import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { MediaGallery } from "@/components/ui/MediaGallery";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { games, getGame, statusCopy } from "@/content/games";
import { studio } from "@/content/studio";

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/games/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) return { title: "Game" };

  return {
    title: game.title,
    description: game.summary,
    openGraph: {
      images: [{ url: game.cover, alt: game.title }],
    },
  };
}

export default async function GamePage({ params }: PageProps<"/games/[slug]">) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) notFound();

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0">
          <Image
            src={game.hero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-void/70 via-void/80 to-void" />
        </div>
        <Container className="relative grid items-end gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <div className="flex flex-wrap gap-3">
              <Badge>{statusCopy[game.status]}</Badge>
              <Badge tone="cyan">{game.platforms.join(" · ")}</Badge>
            </div>
            <h1
              aria-label={game.title}
              className="wordmark mt-6 text-[4rem] sm:text-[6.5rem]"
            >
              {game.shortName}
              <span className="vr-mark">VR</span>
            </h1>
            <p className="lede mt-5 max-w-xl text-lg leading-8 text-muted">
              {game.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {game.storeUrl ? (
                <Button href={game.storeUrl} external size="lg">
                  Get the game
                </Button>
              ) : (
                <Button href={studio.discordUrl} external size="lg">
                  Follow development
                </Button>
              )}
              <Button href="/contact" variant="secondary" size="lg">
                Contact
              </Button>
            </div>
          </div>
          <div className="frame glow-lime relative mx-auto aspect-[716/1024] w-full max-w-md overflow-hidden rounded-[1.5rem] lg:max-w-none">
            <Image
              src={game.cover}
              alt={`${game.title} cover art`}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        </Container>
      </section>

      <Container as="section" className="py-16 sm:py-24">
        <SectionHeader eyebrow="The pitch" title={game.tagline} />
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-muted">
          {game.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>

      <Container as="section" className="pb-16 sm:pb-24">
        <SectionHeader eyebrow="In the headset" title="What you are walking into" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {game.features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              index={`0${index + 1}`}
              title={feature.title}
              body={feature.body}
            />
          ))}
        </div>
      </Container>

      <section className="border-y border-line bg-void-2/80 py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Features"
            title="Short rounds. Instant rematches."
            highlight="rematches"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {game.modes.map((mode, index) => (
              <FeatureCard
                key={mode.title}
                index={`0${index + 1}`}
                title={mode.title}
                body={mode.body}
              />
            ))}
          </div>
        </Container>
      </section>

      <Container as="section" className="py-16 sm:py-24">
        <SectionHeader
          eyebrow="Media"
          title="Key art and stills"
          description="Official Duel Me Bro art. Gameplay captures and a trailer drop in here next."
        />
        <div className="mt-10">
          <MediaGallery items={game.gallery} />
        </div>
      </Container>
    </>
  );
}
