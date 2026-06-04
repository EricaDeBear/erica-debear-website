import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { InstagramIcon } from "./icons";

export default function InstagramFollow() {
  const { overline, heading, subheading, handle, href, tiles } = site.instagram;
  return (
    <section className="py-24 sm:py-32 bg-[var(--color-bg-muted)]">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="overline mb-3">{overline}</p>
          <h2 className="font-display text-4xl sm:text-5xl mb-4">{heading}</h2>
          <p className="text-ink-muted max-w-xl mx-auto mb-6">{subheading}</p>
          <Link href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm tracking-wide hover:text-accent transition">
            <InstagramIcon className="w-5 h-5"/>
            {handle}
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {tiles.map((t, i) => (
            <Link key={i} href={t.href} target="_blank" rel="noopener noreferrer" className="relative aspect-square overflow-hidden group">
              <Image src={t.image} alt="" fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[var(--color-accent)]/0 group-hover:bg-[var(--color-accent)]/30 transition" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
