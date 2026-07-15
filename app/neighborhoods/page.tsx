import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/content/site";

const { overline, heading, cta, regions, areas } = site.neighborhoods;

export const metadata: Metadata = {
  title: heading,
  description:
    "Neighborhood real estate guides across Greater Los Angeles, from the Eastside to the Valley and Westside. Local market guidance from Erica DeBear.",
  alternates: { canonical: "/neighborhoods" },
};

/* Generic hub CTA. The shared cta.heading carries a {name} slot for spokes;
   here it is filled with the region label since a single area does not apply.
   FLAGGED: no dedicated hub intro or hub CTA copy exists in the content draft. */
const ctaHeading = cta.heading.replace("{name}", overline);

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: heading,
  itemListElement: areas.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: a.name,
    url: `${site.meta.url}/neighborhoods/${a.slug}`,
  })),
};

export default function NeighborhoodsHubPage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <main className="pt-32 pb-24">
        <div className="container-narrow mb-16">
          <p className="overline mb-4">{overline}</p>
          <h1 className="font-display text-5xl sm:text-6xl">{heading}</h1>
        </div>

        <div className="container-narrow space-y-14">
          {regions.map((region) => {
            const inRegion = areas.filter((a) => a.region === region);
            if (inRegion.length === 0) return null;
            return (
              <section key={region}>
                <h2 className="font-display text-2xl mb-6 pb-4 border-b border-[var(--color-line)]">
                  {region}
                </h2>
                <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
                  {inRegion.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/neighborhoods/${a.slug}`}
                        className="font-display text-xl text-ink hover:text-accent transition"
                      >
                        {a.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        {/* Shared espresso CTA, matches the spoke pages. */}
        <div className="bg-[var(--color-bg-dark)] text-on-dark py-24 sm:py-32 mt-24">
          <div className="container-narrow text-center">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-8 text-on-dark">
              {ctaHeading}
            </h2>
            <Link href={cta.href} className="btn btn-outline-light">
              {cta.label}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
