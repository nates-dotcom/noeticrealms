import { cn } from "@/lib/cn";

type BadgeProps = {
  children: React.ReactNode;
  tone?: "lime" | "magenta" | "cyan" | "muted";
  className?: string;
};

const tones = {
  lime: "bg-lime/15 text-lime border-lime/40",
  magenta: "bg-magenta/15 text-magenta border-magenta/40",
  cyan: "bg-cyan/15 text-cyan border-cyan/40",
  muted: "bg-white/5 text-muted border-line",
};

export function Badge({ children, tone = "lime", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-display text-[0.65rem] font-bold tracking-[0.18em] uppercase",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
