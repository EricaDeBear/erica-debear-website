"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PropertiesPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="container-wide mb-16">
          <p className="overline mb-4">Properties</p>
          <h1 className="font-display text-5xl sm:text-6xl mb-6">Current Listings.</h1>
          <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-4">
            Active listings across Greater Los Angeles, from the eastside hills to the Westside and beyond.
          </p>
          <p className="text-ink-muted italic">
            Some of the best homes in LA never reach the open market. <Link href="/contact" className="underline hover:text-accent transition">Ask Erica</Link> what is available privately.
          </p>
        </div>

        {/* RealScout Office Listings Widget — includes sold listings, anchor target for "Sold Portfolio" nav link */}
        <div id="sold" className="container-wide mb-24 scroll-mt-32">
          {/* @ts-expect-error – RealScout web component */}
          <realscout-office-listings
            agent-encoded-id="QWdlbnQtMjY3MDA0"
            sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
            listing-status="For Sale,Sold"
            property-types="SFR"
            price-min="1000000"
            price-max="20000000"
            include-seller-listings
          />
        </div>

        {/* Search CTA */}
        <div className="container-narrow text-center mb-24">
          <div className="border-t border-b border-[var(--color-line)] py-12">
            <h2 className="font-display text-3xl sm:text-4xl mb-4">Looking for something specific?</h2>
            <p className="text-ink-muted mb-8 max-w-lg mx-auto">
              Search the full MLS across Greater Los Angeles, every listing, not just ours.
            </p>
            <Link href="/search" className="btn btn-primary">Search Every LA Listing</Link>
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

      {/* RealScout listings widget styling — mapped to design tokens */}
      <style jsx global>{`
        realscout-office-listings {
          --rs-listing-divider-color: var(--color-line);
          width: 100%;
        }
      `}</style>
    </>
  );
}
