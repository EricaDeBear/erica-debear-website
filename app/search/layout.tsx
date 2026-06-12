import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search LA Homes",
  description:
    "Search the full MLS across Greater Los Angeles. Filter by neighborhood, price, beds, and more, with direct access to Erica DeBear for private showings.",
  alternates: { canonical: "/search" },
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
