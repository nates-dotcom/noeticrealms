import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary: "btn",
  secondary: "btn",
  magenta: "btn",
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
    "inline-flex items-center justify-center gap-2 rounded-xl font-display font-bold tracking-[0.14em] uppercase transition duration-200 hover:-translate-y-0.5",
    variants[variant],
    sizes[size],
    className,
  );
  const labelStyle = variant === "ghost" ? undefined : { color: "#fff" };

  if (href) {
    const isExternal = external || href.startsWith("http") || href.startsWith("mailto:");

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          style={labelStyle}
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noreferrer" }
            : undefined)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} style={labelStyle}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} style={labelStyle} onClick={onClick}>
      {children}
    </button>
  );
}
