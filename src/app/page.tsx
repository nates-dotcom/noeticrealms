import Image from "next/image";
import { GameCard, IncomingGameCard } from "@/components/games/GameCard";
import { Ticker } from "@/components/home/Ticker";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, FeatureCard } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { MediaGallery } from "@/components/ui/MediaGallery";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getFeaturedGame } from "@/content/games";
import { studio } from "@/content/studio";

export default function HomePage() {
  const game = getFeaturedGame();

  return (
    <>
      <section className="relative overflow-hidden speedlines">
        <div className="absolute inset-0">
          <Image
            src={game.hero}
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-void/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/40" />
        </div>

        <Container className="relative grid items-center gap-10 py-16 lg:grid-cols-[1fr_0.9fr] lg:py-24">
          <div>
            <Badge>Noetic Realms presents</Badge>
            <h1
              aria-label="Duel Me Bro VR"
              className="wordmark mt-6 text-[4.4rem] sm:text-[7rem] lg:text-[8.4rem]"
            >
              Duel Me
              <br />
              Bro
              <span className="vr-mark">VR</span>
            </h1>
            <p className="lede mt-6 max-w-xl text-lg leading-8 text-ink/90 sm:text-xl">
              {game.tagline} A chaotic 1v1 VR showdown heading to{" "}
              {game.platforms.join(" and ")}.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={`/games/${game.slug}`} size="lg">
                Enter the duel
              </Button>
              <Button href={studio.discordUrl} external variant="secondary" size="lg">
                Join Discord
              </Button>
            </div>
            <p className="mt-6 font-display text-[0.68rem] tracking-[0.2em] uppercase text-muted">
              {game.platforms.join(" · ")} · Upcoming
            </p>
          </div>

          <div className="relative">
            <div className="frame glow-magenta relative mx-auto aspect-[716/1024] w-full max-w-md overflow-hidden rounded-[1.5rem] lg:max-w-none">
              <Image
                src={game.cover}
                alt={`${game.title} key art`}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-5 -left-3 hidden rotate-[-6deg] rounded-md bg-lime px-4 py-2 font-chaos text-xl tracking-wide text-void shadow-[4px_4px_0_0_#111] sm:block">
              Upcoming VR duel
            </div>
          </div>
        </Container>
      </section>

      <Ticker />

      <Container as="section" className="py-20 sm:py-28">
        <SectionHeader
          eyebrow="Now in the lab"
          title="The first fight is a 1v1"
          highlight="1v1"
          description="Duel Me Bro VR is the featured title from Noetic Realms: banana bodies, pistols versus katanas, and the kind of VR combat you send to a friend with three words."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <GameCard game={game} featured />
          <IncomingGameCard />
        </div>
      </Container>

      <Container as="section" className="pb-20 sm:pb-28">
        <SectionHeader
          eyebrow="Why it slaps"
          title="Built for chaos, not cutscenes"
          highlight="chaos"
        />
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

      <section className="border-y border-line bg-void-2/80 py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="See the duel"
            title="A taste of the chaos"
            highlight="chaos"
            description="Official key art from Duel Me Bro VR. Gameplay captures and footage land here as development heats up."
          />
          <div className="mt-10">
            <MediaGallery items={game.gallery} />
          </div>
        </Container>
      </section>

      <Container as="section" className="py-20 sm:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="The studio"
              title="Noetic Realms"
              description={studio.about}
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/about">About the studio</Button>
              <Button href="/games" variant="secondary">
                Browse games
              </Button>
            </div>
          </div>
          <Card className="bg-panel-2">
            <p className="eyebrow">What we make</p>
            <ul className="mt-6 space-y-5">
              {[
                "VR first. Designed for Quest and PCVR, not ported as an afterthought.",
                "Competitive and social. Games you play with a rival, not a spreadsheet.",
                "Personality over polish theater. Loud characters, readable chaos, clips that travel.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-muted">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>

      <section className="relative overflow-hidden border-t border-line">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,225,74,0.16),transparent_42%,rgba(255,58,20,0.16))]" />
        <Container className="relative flex flex-col items-start justify-between gap-8 py-16 sm:py-20 lg:flex-row lg:items-center">
          <div>
            <p className="eyebrow">Squad up</p>
            <h2 className="mt-3 font-chaos text-5xl tracking-wide sm:text-6xl">
              Get in the Discord
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              Patch notes, playtests, and trash talk land here first. No mailing list
              required.
            </p>
          </div>
          <Button href={studio.discordUrl} external size="lg" variant="magenta">
            Join the realm
          </Button>
        </Container>
      </section>
    </>
  );
}
