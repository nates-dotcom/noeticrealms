import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { statusCopy, type Game } from "@/content/games";
import { typography } from "@/lib/type";

export function GameCard({ game }: { game: Game }) {
  return (
    <Link href={`/games/${game.slug}`} className="group block">
      <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div>
          <p className={`${typography.eyebrow} text-magenta`}>Featured title</p>
          <h2 className={`mt-4 ${typography.h1}`} style={{ color: "var(--title)" }}>
            {game.shortName}
          </h2>
          <p className={`${typography.bodyLg} mt-4 max-w-md text-muted`}>{game.tagline}</p>
          <p className={`${typography.small} mt-6 text-muted`}>
            {statusCopy[game.status]} · {game.platforms.join(" · ")}
          </p>
          <p className={`${typography.nav} mt-8 text-lime`}>
            Enter the arena
          </p>
        </div>
        <div className="sticker relative mx-auto aspect-[716/1024] w-full max-w-md overflow-hidden lg:max-w-lg lg:translate-x-4">
          <Image
            src={game.cover}
            alt={`${game.title} cover art`}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="art-shift object-cover"
          />
          <div className="absolute left-4 top-4">
            <Badge>{statusCopy[game.status]}</Badge>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function IncomingGameCard() {
  return (
    <div className="max-w-lg border-t border-line pt-10">
      <p className={`${typography.eyebrow} text-muted`}>Next realm</p>
      <h2 className={`mt-4 ${typography.h2} text-muted`}>More games incoming</h2>
      <p className={`${typography.body} mt-4 text-muted`}>
        Duel Me Bro is first through the door. Additional titles drop here as they
        are ready to show.
      </p>
    </div>
  );
}
