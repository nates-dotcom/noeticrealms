"use client";

import Image from "next/image";
import { useSiteCopy } from "@/components/content/SiteCopyProvider";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { typography } from "@/lib/type";

export function GameView({
  cover,
  hero,
}: {
  cover: string;
  hero: string;
}) {
  const { copy } = useSiteCopy();
  const game = copy.game;

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0">
          <Image
            src={hero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-void/70 via-void/80 to-void" />
        </div>
        <Container className="relative grid items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <div className="flex flex-wrap gap-3">
              <Badge>{game.statusLabel}</Badge>
              <Badge tone="cyan">{game.platforms}</Badge>
              <Badge tone="magenta">{game.genres}</Badge>
            </div>
            <h1
              aria-label={game.title}
              className="wordmark mt-8"
            >
              {game.wordmarkLine1}
              <br />
              {game.wordmarkLine2}
              <span className="vr-mark">{game.vrMark}</span>
            </h1>
            <p className="lede mt-8 max-w-xl text-muted">
              {game.summary}
            </p>
            <div className="mt-8">
              <Button href={copy.studio.wishlistUrl} external>
                {copy.studio.wishlistLabel}
              </Button>
            </div>
          </div>
          <div className="frame glow-lime relative mx-auto aspect-[716/1024] w-full max-w-md overflow-hidden rounded-[1.5rem] lg:max-w-none">
            <Image
              src={cover}
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
        <SectionHeader eyebrow={game.pitchEyebrow} title={game.tagline} />
        <div className={`${typography.body} mt-8 max-w-3xl space-y-5 text-muted`}>
          {game.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>

      <Container as="section" className="pb-16 sm:pb-24">
        <div className="grid gap-5 sm:grid-cols-2">
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
            eyebrow={game.modesEyebrow}
            title={game.modesTitle}
            highlight={game.modesHighlight}
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
    </>
  );
}
