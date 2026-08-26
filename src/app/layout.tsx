import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Lilita_One, Manrope } from "next/font/google";
import { SiteCopyProvider } from "@/components/content/SiteCopyProvider";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { studio } from "@/content/studio";
import { readSiteCopy } from "@/lib/site-copy-store";
import "./globals.css";

export const dynamic = "force-dynamic";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const lilita = Lilita_One({
  variable: "--font-lilita",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
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
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${lilita.variable} h-full antialiased`}
      style={
        {
          "--heading": initialCopy.headingColor,
          "--title": initialCopy.titleColor,
        } as CSSProperties
      }
    >
      <body className={`${manrope.className} min-h-full flex flex-col`}>
        <SiteCopyProvider initial={initialCopy}>
          <SiteChrome>{children}</SiteChrome>
        </SiteCopyProvider>
      </body>
    </html>
  );
}
