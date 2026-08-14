import type { Metadata } from "next";
import { Exo_2, Lilita_One, Orbitron, Outfit } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { studio } from "@/content/studio";
import "./globals.css";

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
  icons: {
    icon: "/icon.svg",
  },
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
        alt: "Duel Me Bro VR",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${orbitron.variable} ${exo.variable} ${lilita.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-lime focus:px-4 focus:py-2 focus:text-void"
        >
          Skip to content
        </a>
        <Header />
        <main id="content" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
