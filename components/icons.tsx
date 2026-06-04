import type { SVGProps } from "react";

const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function ArrowRightIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
  );
}
export function ArrowLeftIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}><path d="M19 12H5M11 18l-6-6 6-6"/></svg>
  );
}
export function MenuIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}><path d="M3 7h18M3 12h18M3 17h18"/></svg>
  );
}
export function CloseIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}><path d="M6 6l12 12M18 6l-12 12"/></svg>
  );
}
export function ChevronDownIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}><path d="M6 9l6 6 6-6"/></svg>
  );
}
export function PlayIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M8 5v14l11-7z"/></svg>
  );
}
export function InstagramIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  );
}
export function FacebookIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}><path d="M15 8h-2a1 1 0 00-1 1v2h3l-1 3h-2v7h-3v-7H7v-3h2V8a4 4 0 014-4h2v4z"/></svg>
  );
}
export function LinkedInIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 014 0v4M11 11v6"/>
    </svg>
  );
}
export function TikTokIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}><path d="M16 8v4a4 4 0 11-4-4M16 8a4 4 0 004-4M16 8V4"/></svg>
  );
}
export function LaurelIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...p}>
      {/* Left laurel branch */}
      <path d="M28 52c-2-4-6-10-6-18 0-6 2-11 4-15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M22 46c-3-2-5-5-5-9 1 3 3 6 6 8" fill="currentColor" opacity="0.2"/>
      <path d="M20 40c-3-3-4-7-3-11 0 4 2 7 5 10" fill="currentColor" opacity="0.2"/>
      <path d="M19 33c-2-4-2-8 0-12 0 4 1 8 4 11" fill="currentColor" opacity="0.2"/>
      <path d="M20 26c-1-4 0-8 3-11-1 4-1 8 1 11" fill="currentColor" opacity="0.2"/>
      <path d="M23 20c0-4 2-7 5-9-1 3-2 7-2 10" fill="currentColor" opacity="0.2"/>
      <ellipse cx="21" cy="44" rx="3.5" ry="5" transform="rotate(-20 21 44)" stroke="currentColor" strokeWidth="0.8"/>
      <ellipse cx="19" cy="37" rx="3.5" ry="5" transform="rotate(-30 19 37)" stroke="currentColor" strokeWidth="0.8"/>
      <ellipse cx="19" cy="30" rx="3" ry="5" transform="rotate(-40 19 30)" stroke="currentColor" strokeWidth="0.8"/>
      <ellipse cx="20.5" cy="23.5" rx="3" ry="4.5" transform="rotate(-55 20.5 23.5)" stroke="currentColor" strokeWidth="0.8"/>
      <ellipse cx="24" cy="18" rx="2.5" ry="4" transform="rotate(-70 24 18)" stroke="currentColor" strokeWidth="0.8"/>
      {/* Right laurel branch */}
      <path d="M36 52c2-4 6-10 6-18 0-6-2-11-4-15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M42 46c3-2 5-5 5-9-1 3-3 6-6 8" fill="currentColor" opacity="0.2"/>
      <path d="M44 40c3-3 4-7 3-11 0 4-2 7-5 10" fill="currentColor" opacity="0.2"/>
      <path d="M45 33c2-4 2-8 0-12 0 4-1 8-4 11" fill="currentColor" opacity="0.2"/>
      <path d="M44 26c1-4 0-8-3-11 1 4 1 8-1 11" fill="currentColor" opacity="0.2"/>
      <path d="M41 20c0-4-2-7-5-9 1 3 2 7 2 10" fill="currentColor" opacity="0.2"/>
      <ellipse cx="43" cy="44" rx="3.5" ry="5" transform="rotate(20 43 44)" stroke="currentColor" strokeWidth="0.8"/>
      <ellipse cx="45" cy="37" rx="3.5" ry="5" transform="rotate(30 45 37)" stroke="currentColor" strokeWidth="0.8"/>
      <ellipse cx="45" cy="30" rx="3" ry="5" transform="rotate(40 45 30)" stroke="currentColor" strokeWidth="0.8"/>
      <ellipse cx="43.5" cy="23.5" rx="3" ry="4.5" transform="rotate(55 43.5 23.5)" stroke="currentColor" strokeWidth="0.8"/>
      <ellipse cx="40" cy="18" rx="2.5" ry="4" transform="rotate(70 40 18)" stroke="currentColor" strokeWidth="0.8"/>
      {/* Star at top */}
      <path d="M32 10l1.5 3 3.5.5-2.5 2.5.5 3.5L32 18l-3 1.5.5-3.5L27 13.5l3.5-.5z" fill="currentColor" opacity="0.35"/>
    </svg>
  );
}
export function ZillowIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M4 7l8-3 8 3v2l-8 4-8-4V7z"/>
      <path d="M4 13l8 4 8-4"/>
      <path d="M4 17l8 4 8-4"/>
    </svg>
  );
}
