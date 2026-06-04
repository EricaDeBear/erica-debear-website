import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.meta.title,
  description: site.meta.description,
  openGraph: {
    title: site.meta.title,
    description: site.meta.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/*
          Fonts loaded via <link> for build-portability. To switch to self-hosted
          via next/font/google, replace this block with the appropriate next/font
          imports — see https://nextjs.org/docs/app/api-reference/components/font
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..600&family=Hanken+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* RealScout search widget — loaded once, used on /search */}
        <script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          async
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
