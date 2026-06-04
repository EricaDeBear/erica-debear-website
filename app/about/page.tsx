import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const differentiators = [
  {
    title: "A negotiator at the moments that matter most.",
    body: "Most agents relax once an offer is accepted. Erica goes to work. The stretch between accepted and closed, the repairs, credits, appraisal gaps, and contingency deadlines, is where deals are quietly won or lost, and it is where she is at her sharpest. Her clients routinely close with terms they did not know were on the table.",
  },
  {
    title: "A licensed broker who studied law.",
    body: "Erica holds a broker's license, the higher tier of real estate licensing, and studied law. She reads every contract, contingency, and disclosure with an eye most agents do not have, catching the details that cost other buyers and sellers money, and handling the legal side of LA and California real estate, including trust and entity purchases, with a fluency that is genuinely rare.",
  },
  {
    title: "An owner and an investor, not just an agent.",
    body: "Erica founded her own LA investment company and runs a portfolio of single-family and multifamily rental property. She advises buyers, sellers, and investors from experience, because she lives the same decisions she guides clients through.",
  },
  {
    title: "Her own bench of professionals.",
    body: "Real estate is a team sport, and Erica brings the team. Lenders, contractors, handymen, inspectors, and stagers she has worked with for years. Her clients skip the guesswork of vetting strangers and get a group she already knows and already works with, from the first showing to long after closing.",
  },
];

const beliefs = [
  "Great real estate is about people first and transactions second.",
  "Honest advice, not pressure. Even when the honest advice is not to move forward.",
  "Opportunity exists in every market. Success comes from knowing how to identify and leverage it.",
  "The right home arrives on the right timeline, not the fastest one.",
  "Real estate is both a major financial decision and the place where life happens. That balance deserves real strategy and real care.",
];

const byTheNumbers = [
  "Licensed broker, CA DRE #01993967",
  "12 years in Los Angeles real estate",
  "75+ homes closed",
  "5.0 stars average on Zillow",
  "Eastside specialist, working across all of Greater LA",
  "Law-school educated",
  "Founder of her own LA investment company; owner of single-family and multifamily property",
  "A vetted bench of preferred lenders, contractors, and inspectors",
  "Within 24 hours, every reply",
];

const storyParagraphs = [
  "A gallerist learns to see what a space could become. A film producer learns that one missed detail can cost you everything. I spent years doing both, first as a gallerist on the Upper East Side of Manhattan, then in film production and post-production for Marvel’s The Avengers, Apple, and Jurassic World. I moved from the East Coast to California in 2010, and that work still shapes how I read a room, a contract, and a deal, where timing, detail, and execution all have to be precise, creatively and strategically at the same time.",
  "I studied Fine Art and Philosophy at Mount Holyoke College, which shaped the way I see people, space, and decisions. I also spent time studying law. I never practiced formally, but it deeply influenced how I read contracts, structure negotiations, and anticipate risk in a deal.",
  "In addition to representing clients, I founded my own investment company and run a portfolio of rental properties across Los Angeles. That firsthand experience as an investor gives me a clear lens on value, risk, and long-term potential, and it is something I share openly with my clients so they can make decisions that are right not just for today but for the long term.",
  "I have lived all over Los Angeles, including West Hollywood, Culver City, and Santa Monica. I ultimately chose Highland Park on the Eastside as home, because it feels like one of the most authentic expressions of the city, a place where long-time locals and new arrivals shape the neighborhood together.",
  "What matters most in my work is that clients feel fully supported and clearly informed at every step. My role is not to push decisions but to protect my clients’ interests, bring an honest perspective, and help them move forward with confidence, even when the honest answer is not to move forward at all. I stay close to my community through Rotary Club and Launch LA, and I approach every client relationship the way I approach the rest of my life: with care, discipline, and a real commitment to doing the work the right way.",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        {/* Lead section */}
        <div className="container-narrow mb-20">
          <p className="overline mb-4">About</p>
          <h1 className="font-display text-5xl sm:text-6xl mb-12">About Erica</h1>

          <div className="relative aspect-[3/2] mb-10 overflow-hidden bg-[var(--color-bg-muted)]">
            <Image
              src="/images/erica_headshot.jpg"
              alt="Erica DeBear"
              fill
              sizes="(max-width: 1100px) 100vw, 1100px"
              className="object-cover"
            />
          </div>

          <blockquote className="font-display italic text-2xl sm:text-3xl text-center leading-relaxed text-ink py-10 border-y border-[var(--color-line)]">
            &ldquo;Anyone can show you a home. The real work, and the real money, is everything that happens after.&rdquo;
          </blockquote>
        </div>

        {/* The Story */}
        <div className="container-narrow mb-24">
          <h2 className="font-display text-4xl sm:text-5xl mb-8">How I got here</h2>
          <div className="max-w-[65ch] text-lg text-ink-muted leading-relaxed space-y-6">
            {storyParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* Lifestyle image break */}
        <div className="container-narrow mb-24">
          <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-bg-muted)]">
            <Image
              src="/images/erica_dogs_lifestyle.jpg"
              alt="Erica at home"
              fill
              sizes="(max-width: 1100px) 100vw, 1100px"
              className="object-cover"
            />
          </div>
        </div>

        {/* What Sets Erica Apart */}
        <div className="container-narrow mb-24">
          <h2 className="font-display text-4xl sm:text-5xl mb-12">What sets Erica apart</h2>
          <div className="space-y-12">
            {differentiators.map((d) => (
              <div key={d.title} className="border-t border-[var(--color-line)] pt-8">
                <h3 className="font-display text-2xl mb-4">{d.title}</h3>
                <p className="text-ink-muted leading-relaxed max-w-[65ch]">{d.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What I Believe */}
        <div className="container-narrow mb-24">
          <h2 className="font-display text-4xl sm:text-5xl mb-12">What I believe</h2>
          <ol className="space-y-8 list-decimal list-inside">
            {beliefs.map((b, i) => (
              <li key={i} className="text-lg text-ink-muted leading-relaxed pl-2">
                <span className="font-display text-ink">{b.split(".")[0]}.</span>
                {b.includes(". ") ? " " + b.split(". ").slice(1).join(". ") : ""}
              </li>
            ))}
          </ol>
        </div>

        {/* By the Numbers */}
        <div className="bg-[var(--color-bg-muted)] py-20 sm:py-28 mb-24">
          <div className="container-narrow">
            <h2 className="font-display text-4xl sm:text-5xl mb-12 text-center">By the numbers</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 max-w-3xl mx-auto">
              {byTheNumbers.map((item) => (
                <p key={item} className="text-ink-muted leading-relaxed flex items-start gap-3">
                  <span className="text-accent mt-1.5 flex-none">&#9670;</span>
                  {item}
                </p>
              ))}
            </div>
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
