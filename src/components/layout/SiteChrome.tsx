"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <main className="flex flex-1 flex-col">{children}</main>;
  }

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-lime focus:px-4 focus:py-2 focus:text-[#111]"
      >
        Skip to content
      </a>
      <Header />
      <main id="content" className="flex flex-1 flex-col">
        {children}
      </main>
      <Footer />
    </>
  );
}
