"use client";

import Link from "next/link";
import { site } from "@/content/site";

export default function FeaturedProperties() {
  const { overline, heading, subheading, offMarketLine, viewAll, searchAll } = site.properties;

  return (
    <section className="py-24 sm:py-32 bg-[var(--color-bg)]">
      <div className="container-wide">
        <div className="mb-12 reveal">
          <p className="overline mb-3">{overline}</p>
          <h2 className="font-display text-4xl sm:text-5xl max-w-2xl mb-3">{heading}</h2>
          {subheading && (
            <p className="text-ink-muted max-w-xl">{subheading}</p>
          )}
        </div>

        {/* RealScout Office Listings Widget — live MLS feed */}
        <div className="mb-10">
          {/* @ts-expect-error – RealScout web component */}
          <realscout-office-listings
            agent-encoded-id="QWdlbnQtMjY3MDA0"
            sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
            listing-status="For Sale"
            property-types="SFR"
            price-min="1000000"
            price-max="20000000"
            include-seller-listings
          />
        </div>

        {offMarketLine && (
          <p className="text-center text-ink-muted mt-10 max-w-lg mx-auto italic">
            {offMarketLine}
          </p>
        )}

        <div className="flex items-center justify-center gap-4 mt-12 flex-wrap">
          <Link href={viewAll.href} className="btn btn-outline">{viewAll.label}</Link>
          {searchAll && (
            <Link href={searchAll.href} className="btn btn-primary">{searchAll.label}</Link>
          )}
        </div>
      </div>

      {/* RealScout listings widget styling */}
      <style jsx global>{`
        realscout-office-listings {
          --rs-listing-divider-color: var(--color-line);
          width: 100%;
        }
      `}</style>
    </section>
  );
}
