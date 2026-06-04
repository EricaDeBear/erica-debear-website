"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import Link from "next/link";

export default function SearchPage() {
  return (
    <>
      <Header />
      <Script
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        type="module"
        strategy="afterInteractive"
      />
      <main className="pt-32 pb-24">
        <div className="container-narrow text-center mb-16">
          <p className="overline mb-4">Search Homes</p>
          <h1 className="font-display text-5xl sm:text-6xl mb-6">Search every LA listing.</h1>
          <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mx-auto">
            Browse the full MLS across Greater Los Angeles. Filter by neighborhood, price, beds, and more.
            When you find something worth a closer look, Erica is a call away.
          </p>
        </div>

        {/* RealScout Advanced Search Widget */}
        <div className="container-wide mb-24">
          <div className="flex justify-center">
            {/* @ts-expect-error – RealScout web component */}
            <realscout-advanced-search agent-encoded-id="QWdlbnQtMjY3MDA0" />
          </div>
        </div>

        {/* Off-market callout */}
        <div className="container-narrow text-center mb-24">
          <div className="border-t border-b border-[var(--color-line)] py-12">
            <p className="font-display italic text-xl sm:text-2xl text-ink mb-6">
              Some of the best homes in LA never reach the open market.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Ask Erica What Is Available Privately
            </Link>
          </div>
        </div>

        {/* Closing CTA */}
        <div className="bg-[var(--color-bg-dark)] text-on-dark py-24 sm:py-32">
          <div className="container-narrow text-center">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-8 text-on-dark">Ready when you are.</h2>
            <Link href="/contact" className="btn btn-outline-light">Connect with Erica</Link>
          </div>
        </div>
      </main>
      <Footer />

      {/* RealScout widget styling — mapped to design tokens */}
      <style jsx global>{`
        realscout-advanced-search {
          --rs-as-button-text-color: var(--color-on-dark);
          --rs-as-background-color: var(--color-bg-muted);
          --rs-as-button-color: var(--color-accent);
          --rs-as-widget-width: 100% !important;
          max-width: 900px;
        }
      `}</style>
    </>
  );
}
