import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/content/site";
import { LaurelIcon } from "@/components/icons";

export default function PressPage() {
  const { press } = site;
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="container-narrow">
          <p className="overline mb-4">Press</p>
          <h1 className="font-display text-5xl sm:text-6xl mb-16">{press.heading}</h1>

          {/* Featured Coverage */}
          <section className="mb-24">
            <h2 className="font-display text-3xl sm:text-4xl mb-4">Featured Coverage</h2>
            <p className="text-ink-muted leading-relaxed mb-12">{press.coverageSubhead}</p>

            <div className="space-y-0">
              {press.coverage.map((item) => (
                <a
                  key={item.headline}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-t border-[var(--color-line)] py-8 transition"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    <p className="overline flex-none sm:w-40">{item.outlet}</p>
                    <div className="flex-1">
                      <p className="font-display text-xl sm:text-2xl group-hover:text-accent transition mb-1">
                        {item.headline}
                      </p>
                      <p className="text-sm text-ink-soft">{item.date}</p>
                    </div>
                    <span className="text-ink-soft group-hover:text-accent transition text-sm flex-none hidden sm:block">
                      Read &rarr;
                    </span>
                  </div>
                </a>
              ))}
              <div className="border-t border-[var(--color-line)]" />
            </div>
          </section>

          {/* Industry Recognition */}
          <section className="mb-24">
            <h2 className="font-display text-3xl sm:text-4xl mb-4">Industry Recognition</h2>
            <p className="text-ink-muted leading-relaxed mb-12">{press.awardsSubhead}</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {press.awards.map((award) => (
                <div
                  key={`${award.year}-${award.title}`}
                  className="border border-[var(--color-line)] p-8 text-center flex flex-col items-center"
                >
                  <LaurelIcon className="w-16 h-16 mb-3" style={{ color: "var(--color-gold)" }} />
                  <p className="font-display text-3xl mb-2">{award.year}</p>
                  <p className="text-ink-muted text-sm">{award.title}</p>
                </div>
              ))}
            </div>
          </section>
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
    </>
  );
}
