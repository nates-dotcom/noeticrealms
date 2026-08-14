import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footerLinks } from "@/content/nav";
import { studio } from "@/content/studio";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-void-2">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label="Noetic Realms home">
            <Logo markClassName="h-11 w-11" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
            {studio.description}
          </p>
        </div>

        <div>
          <p className="eyebrow">Navigate</p>
          <ul className="mt-4 space-y-3">
            {footerLinks.map((link) => (
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
                href={studio.discordUrl}
                target="_blank"
                rel="noreferrer"
                className="text-muted transition hover:text-lime"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                href={`mailto:${studio.email}`}
                className="text-muted transition hover:text-lime"
              >
                {studio.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-3 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {studio.copyrightYear} {studio.name}. All rights reserved.
          </p>
          <p className="font-display tracking-[0.16em] uppercase">
            VR · Chaos · Multiplayer
          </p>
        </Container>
      </div>
    </footer>
  );
}
