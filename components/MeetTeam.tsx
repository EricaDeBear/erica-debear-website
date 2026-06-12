import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export default function MeetTeam() {
  const { image, overline, heading, body, cta } = site.meetTeam;
  return (
    <section className="relative w-full h-[80vh] min-h-[540px] flex items-center justify-center overflow-hidden">
      <Image src={image} alt="Erica DeBear" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 text-center text-on-dark container-narrow reveal">
        <p className="overline text-on-dark/80 mb-5">{overline}</p>
        <h2 className="font-display text-5xl sm:text-6xl mb-6 text-on-dark">{heading}</h2>
        <p className="max-w-xl mx-auto text-base sm:text-lg text-on-dark/90 mb-10 leading-relaxed">{body}</p>
        <Link href={cta.href} className="btn btn-outline-light">{cta.label}</Link>
      </div>
    </section>
  );
}
