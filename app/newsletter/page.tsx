"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function NewsletterPage() {
  const [subscribed, setSubscribed] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="container-narrow text-center">
          <p className="overline mb-4">Newsletter</p>
          <h1 className="font-display text-5xl sm:text-6xl mb-8">Stay close to the market.</h1>
          <p className="text-lg text-ink-muted leading-relaxed max-w-xl mx-auto mb-10">
            A monthly note from Erica on what is moving in LA real estate, homes worth knowing about (some before they list), and straight talk for buyers, sellers, and owners.
          </p>

          <div className="text-left max-w-md mx-auto mb-12">
            <p className="overline mb-4">What you&apos;ll get</p>
            <ul className="space-y-3 text-ink-muted leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 flex-none">&#9670;</span>
                Market reads on the neighborhoods you care about
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 flex-none">&#9670;</span>
                Early looks at listings, sometimes before they hit the market
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 flex-none">&#9670;</span>
                Practical guidance from a broker who knows the contracts cold and runs her own LA investment portfolio
              </li>
            </ul>
          </div>

          {subscribed ? (
            <div className="py-10">
              <h2 className="font-display text-3xl mb-4">You&apos;re in.</h2>
              <p className="text-ink-muted">Watch your inbox for the next note from Erica.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="flex-1 bg-transparent border-b border-[var(--color-ink)]/30 py-3 focus:outline-none focus:border-[var(--color-accent)] transition placeholder:text-ink-soft"
                />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </div>
              <p className="text-xs text-ink-soft mt-4">
                Once a month. No noise. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
