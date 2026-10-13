"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import type { GameTrailer } from "@/content/games";

export function HeroTrailer({
  poster,
  hd,
  sd,
  paused = false,
}: Omit<GameTrailer, "full"> & { paused?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useLayoutEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      if (paused || media.matches) {
        video.pause();
        if (media.matches) video.autoplay = false;
        return;
      }
      video.autoplay = true;
      void video.play().catch(() => {});
    };

    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, [paused]);

  return (
    <>
      <Image
        src={poster}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <video
        ref={videoRef}
        className="hero-trailer absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-hidden="true"
        tabIndex={-1}
        disablePictureInPicture
      >
        <source src={sd} type="video/mp4" media="(max-width: 767px)" />
        <source src={hd} type="video/mp4" />
      </video>
    </>
  );
}
