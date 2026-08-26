"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { youtubeEmbedUrl, youtubeThumb } from "@/content/shorts";
import { typography } from "@/lib/type";

export function ShortClip({
  id,
  title,
  autoPlay = false,
  className,
}: {
  id: string;
  title: string;
  autoPlay?: boolean;
  className?: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    function sync() {
      setReduceMotion(media.matches);
    }
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { rootMargin: "120px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const shouldAutoplay = autoPlay && inView && !reduceMotion && !clicked;
  const showEmbed = clicked || shouldAutoplay;
  const src = showEmbed ? youtubeEmbedUrl(id, shouldAutoplay || clicked) : undefined;

  return (
    <div
      ref={rootRef}
      className={cn("relative aspect-[9/16] overflow-hidden bg-void-2", className)}
    >
      <Image
        src={youtubeThumb(id)}
        alt=""
        fill
        sizes="(min-width: 1024px) 22vw, 50vw"
        className="object-cover"
      />
      {src ? (
        <iframe
          title={title}
          src={src}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 z-10 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setClicked(true)}
          className="absolute inset-0 z-10 flex items-center justify-center bg-void/25"
          aria-label={`Play ${title}`}
        >
          <span
            className={`${typography.button} rounded-full border border-lime bg-void/80 px-4 py-2 text-xs text-lime`}
          >
            Play
          </span>
        </button>
      )}
    </div>
  );
}
