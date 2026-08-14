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
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={cn("h-9 w-9 shrink-0", className)}
    >
      <path
        d="M8 32c9.5-16 38.5-16 48 0-9.5 16-38.5 16-48 0Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
      />
      <path d="M32 8 38.5 32 32 56 25.5 32Z" fill="#ffe14a" />
      <circle cx="32" cy="32" r="7.5" fill="#0c0706" />
      <circle cx="32" cy="32" r="3.4" fill="#ff3a14" />
    </svg>
  );
}
