import type { Metadata } from "next";

/* The contact page is interactive (form state), so its search-engine
   metadata lives here in a server layout instead. */
export const metadata: Metadata = {
  title: "Contact Erica",
  description:
    "Buying, selling, or weighing a move in Los Angeles? Reach Erica DeBear directly by call, text, or email. Every inquiry answered personally within 24 hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
