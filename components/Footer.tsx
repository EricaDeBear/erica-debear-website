import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { InstagramIcon, LinkedInIcon, TikTokIcon, ZillowIcon } from "./icons";

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  TikTok: TikTokIcon,
  Zillow: ZillowIcon,
};

export default function Footer() {
  const { contact, footer, brand } = site;
  return (
    <footer className="bg-[var(--color-bg-dark)] text-on-dark pt-20 pb-10">
      <div className="container-wide">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Image src={brand.logoImageLight} alt={brand.name} width={240} height={240} className="h-16 w-auto mb-6"/>
            <p className="font-display italic text-lg text-on-dark/80 mb-6 max-w-xs">
              {footer.tagline}
            </p>
            <div className="flex items-center gap-4">
              {contact.socials.map((s) => {
                const Icon = socialIcons[s.label];
                return Icon ? (
                  <Link key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer"
                    className="text-on-dark/70 hover:text-on-dark transition">
                    <Icon className="w-5 h-5" />
                  </Link>
                ) : null;
              })}
            </div>
          </div>

          <div className="lg:col-span-1 space-y-3 text-sm">
            <p className="overline text-on-dark/70 mb-4">Contact</p>
            <p className="font-medium text-base">{brand.name}</p>
            <p className="text-on-dark/70">{contact.title} · {contact.dre}</p>
            <a href={`mailto:${contact.email}`} className="block hover:text-on-dark text-on-dark/80 transition">{contact.email}</a>
            <a href={`tel:${contact.phone}`} className="block hover:text-on-dark text-on-dark/80 transition">{contact.phoneFormatted}</a>
            <div className="pt-3 text-on-dark/70">
              <p>{contact.address.line1}</p>
              <p>{contact.address.line2}</p>
            </div>
          </div>

          <div className="lg:col-span-1 text-sm">
            <p className="overline text-on-dark/70 mb-4">Brokerage</p>
            <p className="font-medium text-base mb-1">{contact.brokerage.name}</p>
            <p className="text-on-dark/80 mb-1">{contact.brokerage.team}</p>
            <p className="text-on-dark/70 mb-6">{contact.brokerage.dre}</p>
            <p className="overline text-on-dark/70 mb-4">Quick Links</p>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {site.nav.slice(0, 6).map((n) => (
                <Link key={n.label} href={n.href} className="text-on-dark/80 hover:text-on-dark transition">
                  {n.label}
                </Link>
              ))}
              {footer.quickLinksExtra.map((l) => (
                <Link key={l.label} href={l.href} className="text-on-dark/80 hover:text-on-dark transition">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--color-on-dark)]/15 pt-8">
          {/* Newsletter signup */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <p className="text-sm text-on-dark/70">Stay close to the market.</p>
            <Link href="/newsletter" className="text-sm text-on-dark hover:underline transition">
              Subscribe to the newsletter &rarr;
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-on-dark/60">
            <p>{footer.copyright}</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {footer.legalLinks.map((l) => (
                <Link key={l.label} href={l.href} className="hover:text-on-dark transition">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
