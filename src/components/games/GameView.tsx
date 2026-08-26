"use client";

import Image from "next/image";
import { useSiteCopy } from "@/components/content/SiteCopyProvider";
import { Ticker } from "@/components/home/Ticker";
import { GameplayClip } from "@/components/games/GameplayClip";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { duelGameplay } from "@/content/gameplay";
import { typography } from "@/lib/type";

const keyArt = [
  {
    src: "/media/games/duel-me-bro/key-art-duel.png",
    alt: "Banana in a VR headset firing flintlocks at a banana with katanas",
    caption: "Lock in a weapon",
  },
  {
    src: "/media/games/duel-me-bro/key-art-back-to-back.png",
    alt: "Two bananas back to back in VR headsets, pistols drawn",
    caption: "Ten paces. Then peel.",
  },
];

export function GameView({
  cover,
  hero,
  hasGameplayVideo,
}: {
  cover: string;
  hero: string;
  hasGameplayVideo: boolean;
}) {
  const { copy } = useSiteCopy();
  const game = copy.game;

  return (
    <>
      <section className="relative border-b border-line">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={hero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-void/75 via-void/82 to-void" />
        </div>
        <Container className="relative grid items-end gap-12 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.9fr)] lg:py-24">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge>{game.statusLabel}</Badge>
              <Badge tone="cyan">{game.platforms}</Badge>
              <Badge tone="magenta">{game.genres}</Badge>
            </div>
            <h1 aria-label={game.title} className="wordmark mt-8">
              {game.wordmarkLine1}
              <br />
              {game.wordmarkLine2}
              <span className="vr-mark">{game.vrMark}</span>
            </h1>
            <p className="lede mt-8 max-w-xl text-muted">{game.summary}</p>
            <div className="mt-8">
              <Button href={copy.studio.wishlistUrl} external>
                {copy.studio.wishlistLabel}
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none lg:translate-x-8 lg:translate-y-10">
            <div className="sticker relative aspect-[716/1024] overflow-hidden">
              <Image
                src={cover}
                alt={`${game.title} cover art`}
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </Container>
      </section>

      <Ticker />

      <section className="overflow-hidden py-16 sm:py-24">
        <Container className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.7fr)] lg:gap-20">
          <div>
            <SectionHeader chaos eyebrow={game.pitchEyebrow} title={game.tagline} />
            <div className={`${typography.body} mt-8 max-w-xl space-y-5 text-muted`}>
              {game.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <GameplayClip
            src={duelGameplay.src}
            poster={duelGameplay.poster}
            caption={duelGameplay.caption}
            hasVideo={hasGameplayVideo}
            alt="Duel Me Bro gameplay still"
          />
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="relative lg:-ml-12">
            <div className="relative aspect-square overflow-hidden sm:aspect-[5/4]">
              <Image
                src={keyArt[0].src}
                alt={keyArt[0].alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className={`${typography.eyebrow} mt-4 text-magenta`}>{keyArt[0].caption}</p>
          </div>
          <div className="space-y-10">
            {game.features.map((feature) => (
              <div key={feature.title}>
                <h3
                  className={
                    feature.title.toLowerCase() === "go bananas"
                      ? `${typography.chaos} text-[1.85rem] sm:text-[2.35rem]`
                      : typography.h3
                  }
                  style={{ color: "var(--title)" }}
                >
                  {feature.title}
                </h3>
                <p className={`${typography.body} mt-3 max-w-md text-muted`}>{feature.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line py-16 sm:py-24">
        <Container>
          <p className={`${typography.eyebrow} text-lime`}>{game.modesEyebrow}</p>
          <div className="mt-8 space-y-12">
            {game.modes.map((mode) => (
              <div
                key={mode.title}
                className="grid items-baseline gap-3 border-t border-line pt-8 md:grid-cols-[minmax(8rem,0.4fr)_1fr] md:gap-10"
              >
                <h3 className={`${typography.chaos} text-lime text-[clamp(2.5rem,8vw,5.5rem)] leading-none`}>
                  {mode.title}
                </h3>
                <p className={`${typography.bodyLg} max-w-xl text-muted`}>{mode.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="overflow-hidden py-16 sm:py-24">
        <Container className="relative">
          <p className={`${typography.eyebrow} mb-6 text-lime`}>The bunch</p>
          <div className="relative aspect-[16/9] min-h-[16rem] overflow-hidden sm:min-h-[22rem] lg:-mr-[max(0px,calc((100vw-72rem)/2))] lg:aspect-[2.1/1]">
            <Image
              src={keyArt[1].src}
              alt={keyArt[1].alt}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <p className={`${typography.small} mt-4 text-muted`}>{keyArt[1].caption}</p>
        </Container>
      </section>
    </>
  );
}
