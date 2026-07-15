import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/content/site";

type Params = { slug: string };

const areas = site.neighborhoods.areas;

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

/* Per-area SEO metadata. Title and description come from the area object,
   each with a fallback if absent. The provided metaTitle already carries the
   brand, so it is applied as an absolute title (no template suffix). openGraph
   reuses the same values so shared links carry the right text. */
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) return {};
  const fallbackTitle = `${area.name} | Erica DeBear`;
  const title = area.metaTitle ?? fallbackTitle;
  const description = area.metaDescription ?? site.meta.description;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `/neighborhoods/${area.slug}` },
    openGraph: { title, description },
  };
}

export default async function NeighborhoodPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) notFound();

  const { cta } = site.neighborhoods;
  const ctaHeading = cta.heading.replace("{name}", area.name);

  /* Lateral links within the same region make this a silo rather than nine
     orphans. With Silver Lake alone there are no siblings yet, so the block
     is omitted rather than rendered empty. */
  const siblings = areas.filter(
    (a) => a.region === area.region && a.slug !== area.slug,
  );

  const hasStats = area.market.stats.length > 0;

  /* Place node for the neighborhood. The RealEstateAgent is defined once in
     app/layout.tsx and is not redeclared here. */
  const placeJsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: area.name,
    url: `${site.meta.url}/neighborhoods/${area.slug}`,
    containedInPlace: { "@type": "City", name: "Los Angeles" },
  };

  /* FAQPage node generated from the same faq array the page renders below,
     so the visible content and the schema cannot drift. */
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="pt-32 pb-24">
        {/* Lead. Hero image is pending (photography not sourced), so the
            header renders as text only for now. */}
        <div className="container-narrow mb-16">
          <p className="overline mb-4">{area.region}</p>
          <h1 className="font-display text-5xl sm:text-6xl mb-6">{area.name}</h1>
          <p className="text-lg text-ink-muted leading-relaxed max-w-[65ch]">
            {area.overview}
          </p>
        </div>

        {/* Architecture and Housing Stock */}
        <div className="container-narrow mb-16">
          <h2 className="font-display text-3xl sm:text-4xl mb-6">
            Architecture &amp; Housing Stock
          </h2>
          <p className="text-ink-muted leading-relaxed max-w-[65ch]">
            {area.architecture}
          </p>
        </div>

        {/* Market Context. When no stats exist, the intro stands alone and the
            stats, scope, and source lines are omitted entirely. */}
        <div className="container-narrow mb-16">
          <h2 className="font-display text-3xl sm:text-4xl mb-6">Market Context</h2>
          <p className="text-ink-muted leading-relaxed max-w-[65ch] mb-8">
            {area.market.intro}
          </p>
          {hasStats && (
            <>
              <dl className="grid sm:grid-cols-3 gap-6 border-t border-[var(--color-line)] pt-8">
                {area.market.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="overline mb-2">{stat.label}</dt>
                    <dd className="font-display text-3xl text-ink">{stat.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-sm text-ink-soft mt-6">
                {area.market.scope} Source: {area.market.source}.
              </p>
            </>
          )}
        </div>

        {/* Erica's Activity. The tier2 line is omitted entirely when absent. */}
        <div className="container-narrow mb-16">
          <h2 className="font-display text-3xl sm:text-4xl mb-6">Erica&apos;s Activity Here</h2>
          <p className="text-ink-muted leading-relaxed max-w-[65ch]">
            {area.activity.tier1}
          </p>
          {area.activity.tier2 ? (
            <p className="text-ink-muted leading-relaxed max-w-[65ch] mt-4">
              {area.activity.tier2}
            </p>
          ) : null}
        </div>

        {/* Local Guidance */}
        <div className="container-narrow mb-16">
          <h2 className="font-display text-3xl sm:text-4xl mb-6">Local Guidance</h2>
          <p className="text-ink-muted leading-relaxed max-w-[65ch]">{area.guidance}</p>
        </div>

        {/* Area FAQ. Native details/summary accordion, matching app/faq. */}
        <div className="container-narrow mb-16">
          <h2 className="font-display text-3xl sm:text-4xl mb-6">Area FAQ</h2>
          <div>
            {area.faq.map((item, i) => (
              <details
                key={item.question}
                open={i === 0}
                className="group border-t border-[var(--color-line)]"
              >
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none py-5 [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-lg sm:text-xl text-ink">
                    {item.question}
                  </span>
                  <svg
                    className="mt-1 flex-none text-ink-soft transition-transform duration-[250ms] ease-out group-open:rotate-180"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <p className="text-ink-muted leading-relaxed max-w-[65ch] pb-6">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* Internal links: back to the hub, and laterally within the region.
            The hub route is added in a later build step, so this link resolves
            once /neighborhoods exists. */}
        <div className="container-narrow">
          {siblings.length > 0 && (
            <div className="border-t border-[var(--color-line)] pt-8 mb-8">
              <p className="overline mb-4">Also in the {area.region}</p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {siblings.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/neighborhoods/${s.slug}`}
                      className="text-ink hover:text-accent transition"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <Link
            href="/neighborhoods"
            className="text-sm text-ink-muted hover:text-accent transition"
          >
            All neighborhoods
          </Link>
        </div>

        {/* Shared CTA, espresso band, matches about/services/faq. */}
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
