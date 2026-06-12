import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "How Erica DeBear works with sellers, buyers, first-time buyers, and investors across Greater Los Angeles, from preparation and pricing through closing.",
  alternates: { canonical: "/our-services" },
};

const services = [
  {
    title: "Selling",
    promise:
      "Your home prepared and positioned to reach its full value, with a representative who fights for every dollar long after the first offer lands.",
    involved:
      "A prep plan built around your home, with staging, photography, landscaping, and repairs run through Erica’s own network of vendors and contractors. Pricing backed by current comps and a real read of the market, not an algorithm’s guess. A marketing rollout aimed at the specific buyer your home is built for, across the MLS, Instagram, and Erica’s direct agent relationships. Then, once offers arrive, her command of every term, contingency, and contract detail, carrying the deal through close.",
    different:
      "Most agents go quiet after the offer is accepted. Erica’s most valuable work starts there, protecting your price through inspections, appraisal gaps, and repair talks that quietly erode weaker deals. Because she brings her own bench of pros, prep gets done fast and done right, without you managing a cast of strangers. For sellers who value privacy, a sale can be handled discreetly, including off-market.",
    youGet:
      "The strongest number the market will give you, and a clean handoff to whatever comes next. Steady updates while you are on the market, with a clear view of every showing, offer, and counter. A reply within 24 hours, every question, every time.",
  },
  {
    title: "Buying",
    promise:
      "Most LA buyers lose their first three offers. Erica’s clients do not.",
    involved:
      "A clear first conversation about what you need against what the market actually has. A search across the MLS, coming-soon, and off-market inventory. Private showings on your schedule. A strategy for every offer, covering price, terms, contingencies, and escalation. And a careful read of every contract and disclosure before you sign.",
    different:
      "She catches what costs other buyers money, in the contract and in the negotiation that follows. She knows the legal side of LA and California real estate, including trust and entity purchases for buyers who need privacy. She brings a lender bench so financing moves fast and clean. And because she owns property herself, her read on value and long-term ownership comes from experience.",
    youGet:
      "The keys to a home that actually fits your life, not just your budget. A reply within 24 hours on every question. Access to homes before they reach the open market, through relationships rather than luck. A partner who will tell you when to stretch and when to walk.",
  },
  {
    title: "First-Time Buyers",
    promise:
      "No question is too basic. The first house is the steepest learning curve there is, and you should not climb it alone.",
    involved:
      "A no-pressure first call to map what you can afford, what you actually want, and the gap between them. A lender introduction from Erica's trusted bench if you need one. Plain-language walk-throughs of every document you will sign. And patience as the default, because most first-timers need a few rounds of looking to learn what they want.",
    different: null,
    youGet:
      "An agent who remembers her own first time, and answers every question without making you feel small for asking.",
  },
  {
    title: "Investing",
    promise:
      "Advice from an owner, not an observer. Erica founded her own LA investment company and runs a portfolio of single-family and multifamily rental property, so she guides investor clients from the other side of the closing table.",
    involved:
      "Finding properties that actually pencil out, on cash flow, appreciation, and the real costs of ownership in LA. Knowing the rules that govern them, from rent control to ADUs to entity purchases to 1031 considerations, with a practiced eye and a broker’s command of the deal. A plan to build, hold, and trade up over time.",
    different:
      "She has lived every part of this, the acquisition, the tenants, the maintenance, and the LA rental rules most agents never had to learn. Investor clients get a practitioner’s view and an advocate who runs the same numbers on her own properties.",
    youGet:
      "An honest read on whether a deal is worth doing. Careful due diligence. A long-term partner for building real estate wealth in LA.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-0">
        <div className="container-wide mb-24">
          <p className="overline mb-4">Services</p>
          <h1 className="font-display text-5xl sm:text-6xl mb-6 max-w-3xl">How I Work</h1>
        </div>

        {/* Service pillars */}
        <div className="container-wide space-y-24 mb-24">
          {services.map((s) => (
            <div key={s.title} className="border-t border-[var(--color-line)] pt-10">
              <h2 className="font-display text-4xl sm:text-5xl mb-8">{s.title}</h2>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <p className="overline mb-3">The promise</p>
                    <p className="text-lg text-ink leading-relaxed font-display italic">{s.promise}</p>
                  </div>
                  <div>
                    <p className="overline mb-3">What&apos;s involved</p>
                    <p className="text-ink-muted leading-relaxed">{s.involved}</p>
                  </div>
                </div>
                <div className="space-y-8">
                  {s.different && (
                    <div>
                      <p className="overline mb-3">Where Erica is different</p>
                      <p className="text-ink-muted leading-relaxed">{s.different}</p>
                    </div>
                  )}
                  <div>
                    <p className="overline mb-3">What you&apos;ll get</p>
                    <p className="text-ink-muted leading-relaxed">{s.youGet}</p>
                  </div>
                </div>
              </div>

              {/* Selling proof point */}
              {s.title === "Selling" && (
                <blockquote className="mt-12 border-l-2 border-[var(--color-accent)] pl-6 py-4 bg-[var(--color-bg-muted)]">
                  <p className="font-display italic text-lg text-ink leading-relaxed mb-3">
                    &ldquo;After failing to attract strong offers with another agent, a client came to me looking for a new strategy. By changing how we prepared and positioned the home, including staging and targeted improvements, we created enough demand to close in record time at more than $200,000 above comparable sales.&rdquo;
                  </p>
                  <p className="text-sm text-ink-muted">A recent example, in Erica&apos;s own words</p>
                </blockquote>
              )}
            </div>
          ))}
        </div>

        {/* Visual break */}
        <div className="container-wide mb-24">
          <div className="relative aspect-[21/9] overflow-hidden">
            <Image
              src="/images/services-deck.jpg"
              alt="Rooftop deck overlooking Los Angeles"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* The Erica Network */}
        <div className="bg-[var(--color-bg-muted)] py-20 sm:py-28 mb-0">
          <div className="container-narrow text-center">
            <h2 className="font-display text-4xl sm:text-5xl mb-8">Your team, already assembled.</h2>
            <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mx-auto">
              Buying or selling pulls in a dozen other professionals, and a weak one can sink the whole thing. Erica brings her own vetted group: lenders who close on time, contractors and handymen who show up, inspectors who do not miss things, and stagers who make a house sing. Years of working together means her clients skip the gamble of hiring strangers and get a team that already works as one.
            </p>
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
    </>
  );
}
