"use client";

import { usePathname } from "next/navigation";
import { Ticker } from "@/components/home/Ticker";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const isGameDetail = /^\/games\/.+/.test(pathname);

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
      <div className="flex flex-1">
        <aside
          className="pointer-events-none sticky top-[var(--header-h)] z-10 hidden h-[calc(100svh-var(--header-h))] w-[2.85rem] shrink-0 self-start lg:block"
          aria-hidden="true"
        >
          <Ticker orientation="vertical" />
        </aside>
        <div className="flex min-w-0 flex-1 flex-col">
          {!isGameDetail ? (
            <div className="lg:hidden">
              <Ticker />
            </div>
          ) : null}
          <main id="content" className="flex flex-1 flex-col">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
