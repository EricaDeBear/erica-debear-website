import Link from "next/link";
import { site } from "@/content/site";

export default function AboutBlurb() {
  const { overline, heading, body, cta } = site.aboutBlurb;
  return (
    <section className="py-24 sm:py-32 bg-[var(--color-bg-dark)] text-on-dark">
      <div className="container-narrow text-center">
        <p className="overline text-on-dark/70 mb-4">{overline}</p>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-8 text-on-dark">{heading}</h2>
        <p className="text-base sm:text-lg leading-relaxed text-on-dark/85 max-w-2xl mx-auto mb-10">{body}</p>
        <Link href={cta.href} className="btn btn-outline-light">{cta.label}</Link>
      </div>
    </section>
  );
}
