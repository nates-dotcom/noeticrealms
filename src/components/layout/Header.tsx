"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSiteCopy } from "@/components/content/SiteCopyProvider";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { siteNav } from "@/content/site-copy";
import { cn } from "@/lib/cn";
import { typography } from "@/lib/type";

export function Header() {
  const pathname = usePathname();
  const { copy } = useSiteCopy();
  const [open, setOpen] = useState(false);
  const links = siteNav(copy);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-void/80 backdrop-blur-xl">
      <Container className="flex h-[var(--header-h)] items-center justify-between gap-4">
        <Link
          href="/games/duel-me-bro"
          aria-label={copy.game.title}
          className="relative z-20"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-8 lg:flex" aria-label="Primary">
          {links.map((link) => {
            const active = pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  typography.nav,
                  "nav-link transition-colors",
                  active ? "text-lime" : "text-muted hover:text-ink",
                )}
                data-active={active ? "true" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="relative z-20 flex items-center gap-2">
          <SocialLinks className="lg:hidden xl:flex" />
          <div className="hidden items-center gap-3 lg:flex">
            <Button href={copy.studio.wishlistUrl} external size="sm">
              {copy.studio.wishlistLabel}
            </Button>
            <Button href={copy.studio.discordUrl} external size="sm">
              {copy.studio.discordLabel}
            </Button>
          </div>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-md border border-line lg:hidden"
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
        </div>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-line bg-void lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-5 py-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={typography.h2}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <SocialLinks />
          <Button href={copy.studio.wishlistUrl} external>
            {copy.studio.wishlistLabel}
          </Button>
          <Button href={copy.studio.discordUrl} external>
            Join {copy.studio.discordLabel}
          </Button>
        </Container>
      </div>
    </header>
  );
}
