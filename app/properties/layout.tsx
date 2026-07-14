import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LA Homes for Sale",
  description:
    "Active and recently sold listings from Erica DeBear across Greater Los Angeles, from the eastside hills to the Westside and beyond.",
  alternates: { canonical: "/properties" },
};

export default function PropertiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
