"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { PlayIcon, CloseIcon } from "./icons";

export default function MarketVideos() {
  const { overline, heading, body, items } = site.marketVideos;
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section className="py-24 sm:py-32 bg-[var(--color-bg)]">
      <div className="container-wide">
        <div className="max-w-2xl mb-14 reveal">
          <p className="overline mb-3">{overline}</p>
          <h2 className="font-display text-4xl sm:text-5xl mb-5">{heading}</h2>
          <p className="text-ink-muted">{body}</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((v, i) => (
            <button key={i} onClick={() => setActive(i)} className="group block text-left cursor-pointer" aria-label={`Play video: ${v.title}`}>
              <div className="relative aspect-[3/4] overflow-hidden bg-[var(--color-bg-muted)] mb-4">
                <Image src={v.thumbnail} alt={v.title} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-on-dark)]/90 flex items-center justify-center group-hover:scale-110 transition">
                    <PlayIcon className="w-5 h-5 text-ink ml-1" />
                  </div>
                </div>
              </div>
              <h3 className="font-display text-lg leading-snug group-hover:text-accent transition">
                {v.title}
              </h3>
            </button>
          ))}
        </div>
      </div>

      {/* Video lightbox */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={items[active].title}
          className="fixed inset-0 z-[60] bg-black/85 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <button
            ref={closeRef}
            onClick={() => setActive(null)}
            aria-label="Close video"
            className="absolute top-5 right-5 text-white/80 hover:text-white transition p-2 cursor-pointer"
          >
            <CloseIcon className="w-7 h-7" />
          </button>
          <video
            src={items[active].src}
            poster={items[active].thumbnail}
            controls
            autoPlay
            playsInline
            className="max-h-[85vh] max-w-full aspect-[9/16] bg-black"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
