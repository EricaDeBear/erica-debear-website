"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { site } from "@/content/site";

const lookingToOptions = [
  "Buy a home",
  "Sell a home",
  "Buy and Sell",
  "Invest in property",
  "Just exploring",
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="container-wide grid lg:grid-cols-2 gap-16">
          {/* Left: details */}
          <div>
            <p className="overline mb-4">Contact</p>
            <h1 className="font-display text-5xl sm:text-6xl mb-8">Let&apos;s talk.</h1>
            <p className="text-lg text-ink-muted mb-12 max-w-md leading-relaxed">
              Buying, selling, or simply weighing a move, reach out and you will hear back within 24 hours. Every inquiry comes straight to Erica, and always stays in confidence.
            </p>
            <div className="space-y-6">
              <div>
                <p className="overline mb-2">Call or text</p>
                <a href={`tel:${site.contact.phone}`} className="text-lg hover:text-accent transition">{site.contact.phoneFormatted}</a>
              </div>
              <div>
                <p className="overline mb-2">Email</p>
                <a href={`mailto:${site.contact.email}`} className="text-lg hover:text-accent transition">{site.contact.email}</a>
              </div>
              <div>
                <p className="overline mb-2">Instagram</p>
                <a href="https://www.instagram.com/ericadebear/" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-accent transition">@ericadebear</a>
              </div>
              <div>
                <p className="overline mb-2">Brokerage</p>
                <p className="text-lg">{site.contact.brokerage.name} · {site.contact.brokerage.team}</p>
                <p className="text-sm text-ink-muted">{site.contact.title} · {site.contact.dre}</p>
                <p className="text-sm text-ink-muted">{site.contact.brokerage.dre}</p>
                <p className="text-sm text-ink-muted mt-1">{site.contact.address.line1}</p>
                <p className="text-sm text-ink-muted">{site.contact.address.line2}</p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-[var(--color-bg-muted)] p-8 sm:p-12">
            {sent ? (
              <div className="py-16 text-center">
                <h2 className="font-display text-3xl mb-4">Message sent.</h2>
                <p className="text-ink-muted">Erica will get back to you personally within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <h2 className="font-display text-3xl mb-6">Start the conversation</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <input className="w-full bg-transparent border-b border-[var(--color-ink)]/30 py-3 focus:outline-none focus:border-[var(--color-accent)] transition placeholder:text-ink-soft" placeholder="First name *" required />
                  <input className="w-full bg-transparent border-b border-[var(--color-ink)]/30 py-3 focus:outline-none focus:border-[var(--color-accent)] transition placeholder:text-ink-soft" placeholder="Last name *" required />
                </div>
                <input type="email" className="w-full bg-transparent border-b border-[var(--color-ink)]/30 py-3 focus:outline-none focus:border-[var(--color-accent)] transition placeholder:text-ink-soft" placeholder="Email *" required />
                <input type="tel" className="w-full bg-transparent border-b border-[var(--color-ink)]/30 py-3 focus:outline-none focus:border-[var(--color-accent)] transition placeholder:text-ink-soft" placeholder="Phone" />
                <div className="relative">
                  <select className="w-full bg-transparent border-b border-[var(--color-ink)]/30 py-3 focus:outline-none focus:border-[var(--color-accent)] transition text-ink-soft appearance-none cursor-pointer" defaultValue="">
                    <option value="" disabled>I&apos;m looking to...</option>
                    {lookingToOptions.map((opt) => (
                      <option key={opt} value={opt} className="text-ink">{opt}</option>
                    ))}
                  </select>
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-ink-soft pointer-events-none">&#9662;</span>
                </div>
                <textarea rows={5} className="w-full bg-transparent border-b border-[var(--color-ink)]/30 py-3 focus:outline-none focus:border-[var(--color-accent)] transition placeholder:text-ink-soft resize-none" placeholder="Message" />
                <button type="submit" className="btn btn-primary w-full mt-4">Start the Conversation</button>
                <p className="text-xs text-ink-soft text-center mt-3">
                  No spam, ever. Erica reads every message herself.
                </p>
                <p className="text-[10px] text-ink-soft text-center leading-relaxed mt-2">
                  By submitting, you agree to be contacted by Erica DeBear by call, text, and email about real estate services. To opt out, reply &ldquo;stop&rdquo; at any time. Message and data rates may apply.
                </p>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
