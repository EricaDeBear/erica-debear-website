import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export default function Hero() {
  const { image, heading1, heading2, tagline, supportingLine, cta, ctaSecondary } = site.hero;
  return (
    <section className="relative w-full h-[100vh] min-h-[640px] flex items-center justify-center overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/65" />
      <div className="relative z-10 text-center text-on-dark container-wide fade-up">
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-3 text-on-dark">
          <span className="block">{heading1}</span>
          <span className="block italic text-4xl sm:text-5xl lg:text-6xl opacity-95">{heading2}</span>
        </h1>
        <p className="font-display italic text-xl sm:text-2xl mb-6 opacity-90">{tagline}</p>
        {supportingLine && (
          <p className="text-sm sm:text-base max-w-2xl mx-auto mb-10 opacity-80 leading-relaxed">
            {supportingLine}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={cta.href} className="btn bg-[var(--color-on-dark)] text-[var(--color-bg-dark)] hover:bg-white border-[var(--color-on-dark)]">{cta.label}</Link>
          {ctaSecondary && (
            <Link href={ctaSecondary.href} className="btn btn-outline-light">{ctaSecondary.label}</Link>
          )}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-on-dark opacity-70 text-[10px] tracking-[0.3em] uppercase">
        scroll
      </div>
    </section>
  );
}
