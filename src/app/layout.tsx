import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Exo_2, Lilita_One, Orbitron, Outfit } from "next/font/google";
import { SiteCopyProvider } from "@/components/content/SiteCopyProvider";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { studio } from "@/content/studio";
import { readSiteCopy } from "@/lib/site-copy-store";
import "./globals.css";

export const dynamic = "force-dynamic";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const exo = Exo_2({
  variable: "--font-exo",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const lilita = Lilita_One({
  variable: "--font-lilita",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(studio.siteUrl),
  title: {
    default: `${studio.name} · ${studio.tagline}`,
    template: `%s · ${studio.name}`,
  },
  description: studio.description,
  openGraph: {
    title: `${studio.name} · ${studio.tagline}`,
    description: studio.description,
    url: studio.siteUrl,
    siteName: studio.name,
    type: "website",
    images: [
      {
        url: "/media/games/duel-me-bro/poster.png",
        width: 1920,
        height: 1080,
        alt: "Duel Me Bro",
      },
    ],
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const initialCopy = await readSiteCopy();

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${orbitron.variable} ${exo.variable} ${lilita.variable} h-full antialiased`}
      style={
        {
          "--heading": initialCopy.headingColor,
          "--title": initialCopy.titleColor,
        } as CSSProperties
      }
    >
      <body className="min-h-full flex flex-col">
        <SiteCopyProvider initial={initialCopy}>
          <SiteChrome>{children}</SiteChrome>
        </SiteCopyProvider>
      </body>
    </html>
  );
}
