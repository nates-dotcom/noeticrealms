"use client";

import { forwardRef, useEffect, useId, useImperativeHandle, useRef } from "react";

const FOCUSABLE = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "video",
  "[tabindex]:not([tabindex='-1'])",
].join(", ");

export type TrailerModalHandle = {
  play: () => void;
};

export const TrailerModal = forwardRef<
  TrailerModalHandle,
  {
    open: boolean;
    src: string;
    poster: string;
    title: string;
    onClose: () => void;
  }
>(function TrailerModal({ open, src, poster, title, onClose }, ref) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleId = useId();
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useImperativeHandle(ref, () => ({
    play() {
      const video = videoRef.current;
      if (!video) return;
      video.muted = false;
      video.volume = 1;
      void video.play().catch(() => {});
    },
  }));

  useEffect(() => {
    if (!open) return;

    const dialog = dialogRef.current;
    const video = videoRef.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;

    if (video) {
      video.muted = false;
      video.volume = 1;
      void video.play().catch(() => {});
    }
    closeRef.current?.focus();

    function focusableItems() {
      if (!dialog) return [];
      return Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (element) => element.tabIndex !== -1 && !element.hasAttribute("disabled"),
      );
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        video?.pause();
        onCloseRef.current();
        return;
      }
      if (event.key !== "Tab") return;

      const items = focusableItems();
      if (items.length === 0) {
        event.preventDefault();
        return;
      }

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (!active || !dialog?.contains(active)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
        return;
      }

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      video?.pause();
      previouslyFocused?.focus();
    };
  }, [open]);

  if (!open) return null;

  function close() {
    videoRef.current?.pause();
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-8"
      onClick={close}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-6xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-3 flex items-center justify-between gap-4">
          <h2 id={titleId} className="type-h3 text-lime">
            {title} trailer
          </h2>
          <button
            ref={closeRef}
            type="button"
            className="type-button shrink-0 rounded-full border border-lime/70 bg-void/90 px-4 py-2 text-xs text-lime"
            onClick={close}
          >
            Close
          </button>
        </div>
        <video
          ref={videoRef}
          className="aspect-video w-full rounded-2xl bg-black"
          controls
          playsInline
          preload="auto"
          poster={poster}
          src={src}
          aria-label={`${title} trailer`}
        />
      </div>
    </div>
  );
});
