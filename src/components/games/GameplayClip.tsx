"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { typography } from "@/lib/type";

export function GameplayClip({
  src,
  poster,
  caption,
  hasVideo,
  alt,
}: {
  src: string;
  poster: string;
  caption: string;
  hasVideo: boolean;
  alt: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
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
    const video = videoRef.current;
    if (!video || !hasVideo || reduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [hasVideo, reduceMotion]);

  return (
    <figure className="mx-auto w-full max-w-[22rem] lg:mx-0 lg:max-w-none">
      <div className="sticker relative aspect-[9/16] overflow-hidden bg-panel">
        {hasVideo && !reduceMotion ? (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            muted
            loop
            playsInline
            preload="metadata"
            poster={poster}
            aria-label={alt}
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={poster}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 28vw, 80vw"
            className="object-cover object-center"
          />
        )}
      </div>
      <figcaption className={`${typography.eyebrow} mt-4 text-lime`}>
        {caption}
      </figcaption>
    </figure>
  );
}
