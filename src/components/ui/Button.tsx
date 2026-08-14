import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-lime text-void shadow-[5px_5px_0_0_var(--magenta)] hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_var(--magenta)]",
  secondary:
    "border-2 border-ink/80 bg-transparent text-ink hover:border-lime hover:text-lime",
  magenta:
    "bg-magenta text-white shadow-[5px_5px_0_0_var(--lime)] hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_var(--lime)]",
  ghost: "bg-transparent text-ink hover:text-lime",
};

const sizes = {
  sm: "min-h-10 px-4 text-xs",
  md: "min-h-12 px-5 text-sm",
  lg: "min-h-14 px-6 text-base",
};

type ButtonProps = {
  href?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-display font-bold tracking-[0.14em] uppercase transition duration-200",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    const isExternal = external || href.startsWith("http") || href.startsWith("mailto:");

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noreferrer" }
            : undefined)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
