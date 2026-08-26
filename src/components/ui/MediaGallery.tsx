"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { typography } from "@/lib/type";
import type { GameMedia } from "@/content/games";

type MediaGalleryProps = {
  items: GameMedia[];
  className?: string;
};

export function MediaGallery({ items, className }: MediaGalleryProps) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((current) =>
          current === null ? 0 : (current + 1) % items.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setActive((current) =>
          current === null ? 0 : (current - 1 + items.length) % items.length,
        );
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, items.length]);

  return (
    <>
      <div
        className={cn(
          "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
          className,
        )}
      >
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActive(index)}
            className={cn(
              "group frame relative overflow-hidden rounded-[var(--radius)] text-left",
              index === 0
                ? "aspect-[716/1024] sm:col-span-2 lg:row-span-2"
                : "aspect-[16/9]",
            )}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes={
                index === 0
                  ? "(min-width: 1024px) 66vw, 100vw"
                  : "(min-width: 1024px) 33vw, 50vw"
              }
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            {item.caption ? (
              <span className={`absolute bottom-3 left-3 z-10 rounded-md bg-void/80 px-3 py-1 ${typography.eyebrow}`}>
                {item.caption}
              </span>
            ) : null}
          </button>
        ))}
      </div>

      {active !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={items[active].alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-void/90 p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-[var(--radius)] border border-line"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative max-h-[80vh] min-h-[18rem] bg-void-2 sm:min-h-[28rem]">
              <Image
                src={items[active].src}
                alt={items[active].alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-between gap-4 bg-panel px-4 py-3">
              <p className={`${typography.small} text-muted`}>
                {items[active].caption ?? items[active].alt}
              </p>
              <button
                type="button"
                className={`${typography.nav} text-lime`}
                onClick={() => setActive(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
