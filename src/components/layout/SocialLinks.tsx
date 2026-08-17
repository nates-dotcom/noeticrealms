"use client";

import { useSiteCopy } from "@/components/content/SiteCopyProvider";
import { cn } from "@/lib/cn";

export function SocialLinks({ className }: { className?: string }) {
  const { copy } = useSiteCopy();
  const socials = [
    { href: copy.studio.youtubeUrl, label: "YouTube", icon: YouTubeIcon },
    { href: copy.studio.instagramUrl, label: "Instagram", icon: InstagramIcon },
    { href: copy.studio.tiktokUrl, label: "TikTok", icon: TikTokIcon },
  ];

  return (
    <nav aria-label="Social" className={cn("flex items-center gap-1.5", className)}>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={social.label}
          className="flex h-12 w-12 items-center justify-center rounded-md border border-line text-muted transition hover:border-lime/50 hover:text-lime"
        >
          <social.icon />
        </a>
      ))}
    </nav>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.8 15.5v-7.1L15.8 12l-6 3.5Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
      <path d="M12 7.2A4.8 4.8 0 1 0 16.8 12 4.8 4.8 0 0 0 12 7.2Zm0 7.9A3.1 3.1 0 1 1 15.1 12 3.1 3.1 0 0 1 12 15.1ZM17.5 6.1a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1ZM21.2 7.2a6.3 6.3 0 0 0-1.7-4.5 6.3 6.3 0 0 0-4.5-1.7H8.99a6.3 6.3 0 0 0-4.5 1.7 6.3 6.3 0 0 0-1.7 4.5v6.6a6.3 6.3 0 0 0 1.7 4.5 6.3 6.3 0 0 0 4.5 1.7h6.01a6.3 6.3 0 0 0 4.5-1.7 6.3 6.3 0 0 0 1.7-4.5ZM19.5 13.8a4.6 4.6 0 0 1-4.6 4.6H9.1a4.6 4.6 0 0 1-4.6-4.6V8.2A4.6 4.6 0 0 1 9.1 3.6h5.8a4.6 4.6 0 0 1 4.6 4.6Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
      <path d="M20.3 8.3a7.3 7.3 0 0 1-4.3-1.4v8.2a6.6 6.6 0 1 1-6.6-6.6c.3 0 .7 0 1 .1v3.3a3.4 3.4 0 1 0 2.3 3.2V2h3.2a4.2 4.2 0 0 0 4.4 4.1Z" />
    </svg>
  );
}
