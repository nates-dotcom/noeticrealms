import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
};

export function Logo({ className, markClassName, showWordmark = true }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3 text-ink", className)}>
      <LogoMark className={markClassName} />
      {showWordmark ? (
        <span className="font-display text-[0.72rem] font-extrabold leading-tight tracking-[0.22em] uppercase sm:text-[0.78rem]">
          Noetic
          <br />
          Realms
        </span>
      ) : null}
    </span>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/noetic-realms-icon.png"
      alt=""
      width={88}
      height={88}
      className={cn("h-9 w-9 shrink-0 object-contain", className)}
      aria-hidden="true"
    />
  );
}
