"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { navLinks } from "@/content/nav";
import { studio } from "@/content/studio";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-void/80 backdrop-blur-xl">
      <Container className="flex h-[var(--header-h)] items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Noetic Realms home"
          className="relative z-20"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-display text-[0.68rem] font-bold tracking-[0.22em] uppercase transition",
                  active ? "text-lime" : "text-muted hover:text-ink",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href={studio.discordUrl} external size="sm">
            Discord
          </Button>
        </div>

        <button
          type="button"
          className="relative z-20 flex h-11 w-11 items-center justify-center rounded-md border border-line lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-0.5 w-5 bg-ink transition",
                open && "translate-y-2 rotate-45",
              )}
            />
            <span className={cn("block h-0.5 w-5 bg-ink transition", open && "opacity-0")} />
            <span
              className={cn(
                "block h-0.5 w-5 bg-ink transition",
                open && "-translate-y-2 -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-line bg-void lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-5 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-chaos text-3xl tracking-wide"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button href={studio.discordUrl} external>
            Join Discord
          </Button>
        </Container>
      </div>
    </header>
  );
}
