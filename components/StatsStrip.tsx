import { site } from "@/content/site";

export default function StatsStrip() {
  return (
    <section className="py-24 sm:py-32 bg-[var(--color-bg)] border-y border-[var(--color-line)]">
      <div className="container-narrow">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16 lg:gap-24">
          {site.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-4xl sm:text-5xl mb-2">{stat.value}</p>
              <p className="overline">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
