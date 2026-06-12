"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { site } from "@/content/site";
import { MenuIcon, CloseIcon, ChevronDownIcon } from "./icons";

/* Text wordmark rendered in the real brand fonts (the old SVG referenced
   fonts that can't load inside an <img>, so it silently fell back). */
function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="block text-center leading-none">
      <span className={`block font-display text-xl lg:text-[1.4rem] tracking-[0.12em] ${light ? "text-on-dark" : "text-ink"}`}>
        {site.brand.nameLine1.toUpperCase()}
      </span>
      <span className={`block font-sans text-[8px] lg:text-[9px] font-medium tracking-[0.5em] mt-1.5 ${light ? "text-on-dark/70" : "text-ink-muted"}`}>
        {site.brand.nameLine2.toUpperCase()}
      </span>
    </span>
  );
}

export default function Header({ transparent = false }: { transparent?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [propsOpen, setPropsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  /* Light text only when transparent mode (homepage hero) AND not yet scrolled.
     All other pages always use dark text on ivory. */
  const isLight = transparent && !scrolled;
  const textClass = isLight ? "text-on-dark" : "text-ink";
  const textMutedClass = isLight ? "text-on-dark/70" : "text-ink-muted";
  const hoverClass = isLight ? "hover:text-on-dark" : "hover:text-accent";

  return (
    <>
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        (scrolled || !transparent) ? "bg-[var(--color-bg)]/95 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      {/* Utility bar */}
      <div className={`border-b transition-colors ${isLight ? "border-[var(--color-on-dark)]/15" : "border-[var(--color-line)]/40"}`}>
        <div className="container-wide flex items-center justify-between py-2 text-xs">
          <div className="flex items-center gap-5">
            <Link href={`mailto:${site.contact.email}`} className={`${textMutedClass} ${hoverClass} transition tracking-wide`}>
              {site.contact.email}
            </Link>
          </div>
          <div className="flex items-center gap-5">
            {site.utilityBar.map((l) => (
              <Link key={l.label} href={l.href} className={`${textMutedClass} ${hoverClass} transition tracking-wide`}>
                {l.label}
              </Link>
            ))}
            <Link href={`tel:${site.contact.phone}`} className={`${textClass} font-medium tracking-wide hidden sm:inline`}>
              {site.contact.phoneFormatted}
            </Link>
          </div>
        </div>
      </div>

      {/* Main row */}
      <div className="container-wide flex items-center justify-between py-5">
        <Link href="/" className="block" aria-label="Home">
          <Wordmark light={isLight} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {site.nav.map((item) => {
            const children = "children" in item ? item.children : undefined;
            return children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setPropsOpen(true)}
                onMouseLeave={() => setPropsOpen(false)}
              >
                <button className={`flex items-center gap-1 text-xs uppercase tracking-[0.16em] ${textClass} ${hoverClass} transition py-2`}>
                  {item.label}
                  <ChevronDownIcon className="w-3 h-3" />
                </button>
                {propsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 min-w-[200px] bg-[var(--color-bg)] border border-[var(--color-line)] shadow-lg py-2">
                    {children.map((c) => (
                      <Link
                        key={c.label}
                        href={c.href}
                        className="block px-5 py-2 text-xs uppercase tracking-[0.15em] text-ink hover:bg-[var(--color-bg-muted)] hover:text-accent transition"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`text-xs uppercase tracking-[0.16em] ${textClass} ${hoverClass} transition`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden ${textClass} p-2`}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>

      </header>

      {/* Mobile menu overlay — rendered as a SIBLING of <header>, not inside it.
          The header uses backdrop-blur; a backdrop-filter makes its element the
          containing block for position:fixed descendants, which otherwise traps
          this overlay inside the ~115px header instead of covering the full
          screen. Keeping it outside the header is the fix. */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-[var(--color-bg)] lg:hidden flex flex-col">
          <div className="container-wide flex items-center justify-between py-5 border-b border-[var(--color-line)]">
            <Link href="/" onClick={() => setOpen(false)} aria-label="Home">
              <Wordmark />
            </Link>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-6 py-8 space-y-1">
            {site.nav.map((item) => {
              const children = "children" in item ? item.children : undefined;
              return (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-lg font-display border-b border-[var(--color-line)]/50"
                  >
                    {item.label}
                  </Link>
                  {children && (
                    <div className="pl-4 pb-2">
                      {children.map((c) => (
                        <Link
                          key={c.label}
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm text-ink-muted"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="pt-8 space-y-2 text-sm text-ink-muted">
              <a href={`mailto:${site.contact.email}`} className="block">{site.contact.email}</a>
              <a href={`tel:${site.contact.phone}`} className="block">{site.contact.phoneFormatted}</a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
