import Link from "next/link";
import { site } from "@/content/site";

export default function AsSeenIn() {
  const { overline, outlets } = site.asSeenIn;
  return (
    <section className="py-16 sm:py-20 border-y border-[var(--color-line)]">
      <div className="container-narrow">
        <p className="overline text-center mb-8">{overline}</p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
          {outlets.map((outlet) => (
            <Link
              key={outlet.name}
              href={outlet.href}
              className="text-ink-soft hover:text-ink transition font-display text-lg sm:text-xl tracking-tight opacity-70 hover:opacity-100"
            >
              {outlet.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
