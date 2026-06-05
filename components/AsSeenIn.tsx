import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";

export default function AsSeenIn() {
  const { overline, outlets } = site.asSeenIn;
  return (
    <section className="py-16 sm:py-20 border-y border-[var(--color-line)]">
      <div className="container-narrow">
        <p className="overline text-center mb-10">{overline}</p>
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
          {outlets.map((outlet) => (
            <Link
              key={outlet.name}
              href={outlet.href}
              className="block opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              aria-label={outlet.name}
            >
              {"logo" in outlet && outlet.logo ? (
                <Image
                  src={outlet.logo}
                  alt={outlet.name}
                  width={160}
                  height={32}
                  className="h-7 sm:h-8 w-auto"
                />
              ) : (
                <span className="font-display text-lg sm:text-xl tracking-tight text-ink">
                  {outlet.name}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
