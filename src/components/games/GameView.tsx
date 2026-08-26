"use client";

import Image from "next/image";
import { useSiteCopy } from "@/components/content/SiteCopyProvider";
import { ShortClip } from "@/components/games/ShortClip";
import { Ticker } from "@/components/home/Ticker";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { duelShorts } from "@/content/shorts";
import { cn } from "@/lib/cn";
import { typography } from "@/lib/type";

const clipShift = [
  "sm:translate-y-8",
  "sm:translate-y-0",
  "sm:translate-y-12",
  "sm:translate-y-3",
  "sm:translate-y-9",
];

export function GameView({
  cover,
  hero,
}: {
  cover: string;
  hero: string;
}) {
  const { copy } = useSiteCopy();
  const game = copy.game;
  const featured = duelShorts[0];
  const moreClips = duelShorts.slice(1);

  return (
    <div className="relative lg:pl-[2.85rem]">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden lg:block">
        <div className="sticky top-[var(--header-h)] h-[calc(100svh-var(--header-h))]">
          <Ticker orientation="vertical" />
        </div>
      </div>

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
            <div className="relative z-20 flex flex-wrap gap-3">
              <Badge>{game.statusLabel}</Badge>
              <Badge tone="cyan">{game.platforms}</Badge>
              <Badge tone="magenta">{game.genres}</Badge>
            </div>
            <h1 aria-label={game.title} className="wordmark mt-12 sm:mt-16">
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

      <div className="lg:hidden">
        <Ticker />
      </div>

      <Container as="section" className="py-16 sm:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(15rem,0.72fr)] lg:gap-16">
          <div>
            <SectionHeader eyebrow={game.pitchEyebrow} title={game.tagline} />
            <div className={`${typography.body} mt-8 max-w-3xl space-y-5 text-muted`}>
              {game.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <figure className="mx-auto w-full max-w-[17.5rem] lg:mx-0 lg:ml-auto lg:max-w-none">
            <div className="frame overflow-hidden rounded-[1.35rem]">
              <ShortClip
                id={featured.id}
                title={featured.title}
                autoPlay
              />
            </div>
            <figcaption className="mt-4">
              <a
                href={copy.studio.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className={`${typography.button} text-xs text-lime`}
              >
                More on YouTube
              </a>
            </figcaption>
          </figure>
        </div>
      </Container>

      <Container as="section" className="pb-16 sm:pb-24">
        <div className="grid gap-5 sm:grid-cols-2">
          {game.features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              body={feature.body}
            />
          ))}
        </div>
      </Container>

      <section className="overflow-hidden pb-16 sm:pb-24">
        <Container>
          <div className="flex flex-wrap items-end gap-x-4 gap-y-8 sm:gap-x-5">
            {moreClips.map((clip, index) => (
              <div
                key={clip.id}
                className={cn(
                  "w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.9rem)] lg:w-[calc(20%-1rem)]",
                  clipShift[index],
                )}
              >
                <div className="frame overflow-hidden rounded-[1.2rem]">
                  <ShortClip id={clip.id} title={clip.title} />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-void-2/80 py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow={game.modesEyebrow}
            title={game.modesTitle}
            highlight={game.modesHighlight}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {game.modes.map((mode) => (
              <FeatureCard
                key={mode.title}
                title={mode.title}
                body={mode.body}
              />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
