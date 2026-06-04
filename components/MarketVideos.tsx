import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { PlayIcon } from "./icons";

export default function MarketVideos() {
  const { overline, heading, body, items } = site.marketVideos;
  return (
    <section className="py-24 sm:py-32 bg-[var(--color-bg)]">
      <div className="container-wide">
        <div className="max-w-2xl mb-14">
          <p className="overline mb-3">{overline}</p>
          <h2 className="font-display text-4xl sm:text-5xl mb-5">{heading}</h2>
          <p className="text-ink-muted">{body}</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((v, i) => (
            <Link key={i} href={v.href} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-[var(--color-bg-muted)] mb-4">
                <Image src={v.thumbnail} alt={v.title} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-on-dark)]/90 flex items-center justify-center group-hover:scale-110 transition">
                    <PlayIcon className="w-5 h-5 text-ink ml-1" />
                  </div>
                </div>
              </div>
              <h3 className="font-display text-lg leading-snug group-hover:text-accent transition">
                {v.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
