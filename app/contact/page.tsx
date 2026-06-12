"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
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
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const sentRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (sent) sentRef.current?.focus();
  }, [sent]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/mzdqjevr", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
    setSubmitting(false);
  };
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="container-wide grid lg:grid-cols-2 gap-16">
          {/* Form — first in the document so mobile visitors reach it immediately */}
          <div className="bg-[var(--color-bg-muted)] p-8 sm:p-12 lg:order-2">
            {sent ? (
              <div className="py-16 text-center">
                <h2 ref={sentRef} tabIndex={-1} className="font-display text-3xl mb-4 focus:outline-none">Message sent.</h2>
                <p className="text-ink-muted">Erica will get back to you personally within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <h2 className="font-display text-3xl mb-6">Start the conversation</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <input name="firstName" aria-label="First name" className="w-full bg-transparent border-b border-[var(--color-ink)]/30 py-3 focus:outline-none focus:border-[var(--color-accent)] transition placeholder:text-ink-soft" placeholder="First name *" required />
                  <input name="lastName" aria-label="Last name" className="w-full bg-transparent border-b border-[var(--color-ink)]/30 py-3 focus:outline-none focus:border-[var(--color-accent)] transition placeholder:text-ink-soft" placeholder="Last name *" required />
                </div>
                <input type="email" name="email" aria-label="Email" className="w-full bg-transparent border-b border-[var(--color-ink)]/30 py-3 focus:outline-none focus:border-[var(--color-accent)] transition placeholder:text-ink-soft" placeholder="Email *" required />
                <input type="tel" name="phone" aria-label="Phone" className="w-full bg-transparent border-b border-[var(--color-ink)]/30 py-3 focus:outline-none focus:border-[var(--color-accent)] transition placeholder:text-ink-soft" placeholder="Phone" />
                <div className="relative">
                  <select name="lookingTo" aria-label="I'm looking to" className="w-full bg-transparent border-b border-[var(--color-ink)]/30 py-3 focus:outline-none focus:border-[var(--color-accent)] transition text-ink-soft appearance-none cursor-pointer" defaultValue="">
                    <option value="" disabled>I&apos;m looking to...</option>
                    {lookingToOptions.map((opt) => (
                      <option key={opt} value={opt} className="text-ink">{opt}</option>
                    ))}
                  </select>
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-ink-soft pointer-events-none">&#9662;</span>
                </div>
                <textarea name="message" rows={5} aria-label="Message" className="w-full bg-transparent border-b border-[var(--color-ink)]/30 py-3 focus:outline-none focus:border-[var(--color-accent)] transition placeholder:text-ink-soft resize-none" placeholder="Message" />
                <button type="submit" disabled={submitting} className="btn btn-primary w-full mt-4">{submitting ? "Sending..." : "Start the Conversation"}</button>
                {error && (
                  <p role="alert" className="text-sm text-center text-ink leading-relaxed bg-[var(--color-bg)] border border-[var(--color-line)] p-4">
                    Something went wrong and your message was not sent. Please try again, or reach Erica directly at{" "}
                    <a href={`mailto:${site.contact.email}`} className="underline">{site.contact.email}</a> or{" "}
                    <a href={`tel:${site.contact.phone}`} className="underline whitespace-nowrap">{site.contact.phoneFormatted}</a>.
                  </p>
                )}
                <p className="text-xs text-ink-soft text-center mt-3">
                  No spam, ever. Erica reads every message herself.
                </p>
                <input type="hidden" name="_subject" value="New inquiry from ericadebear.com" />
                <p className="text-[11px] text-ink-soft text-center leading-relaxed mt-2">
                  By submitting, you agree to be contacted by Erica DeBear by call, text, and email about real estate services. To opt out, reply &ldquo;stop&rdquo; at any time. Message and data rates may apply.
                </p>
              </form>
            )}
          </div>

          {/* Contact details */}
          <div className="lg:order-1">
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

            <div className="relative aspect-[3/2] overflow-hidden mt-12 hidden lg:block">
              <Image
                src="/images/contact-bedroom.jpg"
                alt="Warm bedroom interior"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
