import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { statusCopy, type Game } from "@/content/games";
import { cn } from "@/lib/cn";
import { typography } from "@/lib/type";

export function GameCard({ game, featured = false }: { game: Game; featured?: boolean }) {
  return (
    <Link href={`/games/${game.slug}`} className="group block h-full">
      <Card
        padded={false}
        className={cn(
          "h-full transition duration-200 hover:-translate-y-1 hover:border-lime/50",
          featured && "glow-lime",
        )}
      >
        <div className="relative aspect-[716/1024] overflow-hidden">
          <Image
            src={game.cover}
            alt={`${game.title} cover art`}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-top transition duration-500 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4">
            <Badge>{statusCopy[game.status]}</Badge>
          </div>
        </div>
        <div className="p-6">
          <p className={`${typography.eyebrow} text-magenta`}>Featured title</p>
          <h3 className={`mt-3 ${typography.h2}`}>
            {game.shortName}
          </h3>
          <p className={`${typography.small} mt-2 text-muted`}>{game.tagline}</p>
          <p className={`${typography.eyebrow} mt-4 text-cyan`}>
            {game.platforms.join(" · ")}
          </p>
        </div>
      </Card>
    </Link>
  );
}

export function IncomingGameCard() {
  return (
    <Card className="flex h-full min-h-[22rem] flex-col justify-between border-dashed bg-transparent">
      <div>
        <Badge tone="muted">Next realm</Badge>
        <h3 className={`mt-5 ${typography.h2} text-muted`}>
          More games incoming
        </h3>
        <p className={`${typography.small} mt-3 max-w-sm text-muted`}>
          Duel Me Bro is first through the door. Additional titles drop into this
          grid as they are ready to show.
        </p>
      </div>
      <p className={`${typography.eyebrow} text-lime`}>
        Coming later
      </p>
    </Card>
  );
}
