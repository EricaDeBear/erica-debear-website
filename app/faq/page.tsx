import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about selling, buying, and investing in real estate with Erica DeBear across the LA Eastside and Greater Los Angeles.",
  alternates: { canonical: "/faq" },
};

const { overline, heading, intro, groups, cta } = site.faq;

/* FAQPage structured data, generated from the same site.faq.groups data
   that renders the visible Q&A below, so the two can never drift apart. */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: groups.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  ),
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="pt-32 pb-24">
        {/* Lead */}
        <div className="container-narrow mb-16">
          <p className="overline mb-4">{overline}</p>
          <h1 className="font-display text-5xl sm:text-6xl mb-6">{heading}</h1>
          <p className="text-lg text-ink-muted leading-relaxed max-w-[65ch]">{intro}</p>
        </div>

        {/* Q&A groups */}
        <div className="container-narrow space-y-16">
          {groups.map((group) => (
            <section key={group.label}>
              <h2 className="font-display text-2xl mb-2">{group.label}</h2>
              <div>
                {group.items.map((item, i) => (
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
            </section>
          ))}
        </div>

        {/* Closing CTA: espresso, matches about/services pattern */}
        <div className="bg-[var(--color-bg-dark)] text-on-dark py-24 sm:py-32 mt-24">
          <div className="container-narrow text-center">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-8 text-on-dark">
              {cta.heading}
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
