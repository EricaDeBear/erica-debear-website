"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function NewsletterPage() {
  const [subscribed, setSubscribed] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      await fetch(
        "https://elliman.us20.list-manage.com/subscribe/post?u=e7855a84fe45867ea20c9fd30&id=6db0213b78&f_id=00f3cbf1f0",
        { method: "POST", body: formData, mode: "no-cors" },
      );
    } catch {
      // no-cors means we can't read the response, but the request goes through
    }
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
            Stay ahead of the Los Angeles real estate market with insider insights, exclusive previews of listings before they hit the market, and curated recommendations for the best of LA.
          </p>

          <div className="text-left max-w-md mx-auto mb-12">
            <p className="overline mb-4">What you&apos;ll get</p>
            <ul className="space-y-3 text-ink-muted leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 flex-none">&#9670;</span>
                Insider insights on the neighborhoods you care about
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 flex-none">&#9670;</span>
                Exclusive previews of listings before they hit the market
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 flex-none">&#9670;</span>
                Curated recommendations for the best of LA
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
                  name="EMAIL"
                  required
                  aria-label="Email address"
                  placeholder="Your email address"
                  className="flex-1 bg-transparent border-b border-[var(--color-ink)]/30 py-3 focus:outline-none focus:border-[var(--color-accent)] transition placeholder:text-ink-soft"
                />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </div>
              {/* Mailchimp honeypot — prevents bot signups */}
              <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
                <input
                  type="text"
                  name="b_e7855a84fe45867ea20c9fd30_6db0213b78"
                  tabIndex={-1}
                  defaultValue=""
                />
              </div>
              <p className="text-xs text-ink-soft mt-4">
                Once a month. No noise. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>

        <div className="container-narrow mt-20">
          <div className="relative aspect-[21/9] overflow-hidden">
            <Image
              src="/images/newsletter-livingroom.jpg"
              alt="Bright modern living room"
              fill
              sizes="(max-width: 1100px) 100vw, 1100px"
              className="object-cover"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
