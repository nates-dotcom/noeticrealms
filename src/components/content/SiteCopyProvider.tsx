"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultSiteCopy, type SiteCopy } from "@/content/site-copy";

type SiteCopyContextValue = {
  copy: SiteCopy;
  setCopy: (next: SiteCopy) => void;
};

const SiteCopyContext = createContext<SiteCopyContextValue | null>(null);

function applyColors(copy: SiteCopy) {
  const root = document.documentElement;
  root.style.setProperty("--heading", copy.headingColor);
  root.style.setProperty("--title", copy.titleColor);
}

export function SiteCopyProvider({
  children,
  initial,
}: {
  children: React.ReactNode;
  initial?: SiteCopy;
}) {
  const [copy, setCopyState] = useState<SiteCopy>(initial ?? defaultSiteCopy);

  useEffect(() => {
    applyColors(copy);
  }, [copy]);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/content")
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (!cancelled && data) setCopyState(data as SiteCopy);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo(
    () => ({
      copy,
      setCopy: (next: SiteCopy) => {
        setCopyState(next);
        applyColors(next);
      },
    }),
    [copy],
  );

  return <SiteCopyContext.Provider value={value}>{children}</SiteCopyContext.Provider>;
}

export function useSiteCopy() {
  const context = useContext(SiteCopyContext);
  if (!context) {
    return { copy: defaultSiteCopy, setCopy: () => {} };
  }
  return context;
}
