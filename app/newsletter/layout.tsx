import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Insider insights on the Los Angeles market, exclusive previews of listings before they hit the market, and curated recommendations. Once a month, no noise.",
  alternates: { canonical: "/newsletter" },
};

export default function NewsletterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
