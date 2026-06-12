"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/content/site";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons";

export default function Testimonials() {
  const { overline, heading, subheading, items, readAllHref, readAllLabel } = site.testimonials;
  const [i, setI] = useState(0);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);
  const next = () => setI((p) => (p + 1) % items.length);
  const t = items[i];
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[var(--color-bg-muted)]">
      <div className="container-narrow reveal">
        <p className="overline text-center mb-4">{overline}</p>
        <h2 className="font-display text-4xl sm:text-5xl text-center mb-4">{heading}</h2>
        {subheading && (
          <p className="text-center text-ink-muted mb-16 max-w-xl mx-auto">{subheading}</p>
        )}

        <div className="relative max-w-3xl mx-auto text-center">
          <span aria-hidden className="font-display text-8xl text-accent/20 leading-none block mb-2">&ldquo;</span>

          {"framingLabel" in t && t.framingLabel && (
            <p className="font-display italic text-base text-ink-muted mb-6">{t.framingLabel}</p>
          )}

          {t.stars && (
            <p className="text-lg mb-4 tracking-wider" aria-label={`${t.stars} out of 5 stars`}>
              {"★".repeat(t.stars)}
            </p>
          )}

          <blockquote className="font-display italic text-xl sm:text-2xl leading-relaxed text-ink mb-8">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <p className="overline">{t.attribution}</p>

          <div className="flex items-center justify-center gap-6 mt-12">
            <button onClick={prev} aria-label="Previous" className="p-3 rounded-full border border-[var(--color-ink)]/30 hover:bg-[var(--color-ink)] hover:text-on-dark transition">
              <ArrowLeftIcon className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {items.map((_, idx) => (
                <button key={idx} onClick={() => setI(idx)} aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-1 transition-all ${idx === i ? "w-8 bg-[var(--color-ink)]" : "w-4 bg-[var(--color-ink)]/30"}`}/>
              ))}
            </div>
            <button onClick={next} aria-label="Next" className="p-3 rounded-full border border-[var(--color-ink)]/30 hover:bg-[var(--color-ink)] hover:text-on-dark transition">
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link href={readAllHref} target="_blank" rel="noopener noreferrer" className="btn btn-outline">{readAllLabel}</Link>
        </div>
      </div>
    </section>
  );
}
