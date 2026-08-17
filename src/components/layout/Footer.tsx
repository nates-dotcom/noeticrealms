"use client";

import Link from "next/link";
import { useSiteCopy } from "@/components/content/SiteCopyProvider";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { siteNav } from "@/content/site-copy";

export function Footer() {
  const { copy } = useSiteCopy();
  const links = siteNav(copy);

  return (
    <footer className="mt-auto border-t border-line bg-void-2">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link href="/games/duel-me-bro" aria-label={copy.game.title}>
            <Logo markClassName="h-11 w-11" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
            {copy.studio.description}
          </p>
        </div>

        <div>
          <p className="eyebrow">Navigate</p>
          <ul className="mt-4 space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition hover:text-lime"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Squad up</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={copy.studio.discordUrl}
                target="_blank"
                rel="noreferrer"
                className="text-muted transition hover:text-lime"
              >
                {copy.studio.discordLabel}
              </a>
            </li>
            <li>
              <a
                href={copy.studio.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="text-muted transition hover:text-lime"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href={copy.studio.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="text-muted transition hover:text-lime"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={copy.studio.tiktokUrl}
                target="_blank"
                rel="noreferrer"
                className="text-muted transition hover:text-lime"
              >
                TikTok
              </a>
            </li>
            <li>
              <a
                href={`mailto:${copy.studio.email}`}
                className="text-muted transition hover:text-lime"
              >
                {copy.studio.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-3 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {copy.studio.name}. All rights reserved.
          </p>
          <p className="font-display tracking-[0.16em] uppercase">
            {copy.studio.footerLine}
          </p>
        </Container>
      </div>
    </footer>
  );
}
