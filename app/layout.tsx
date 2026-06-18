import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

const GA_MEASUREMENT_ID = "G-55V6VBHM51";

/* Self-hosted via next/font: fonts are bundled with the site at build time,
   so there is no render-blocking request to Google and no flash of the
   wrong font. The CSS variables are consumed in globals.css. */
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.meta.url),
  title: {
    default: site.meta.title,
    template: site.meta.titleTemplate,
  },
  description: site.meta.description,
  alternates: {
    canonical: "./",
  },
  openGraph: {
    siteName: "Erica DeBear Real Estate",
    title: site.meta.title,
    description: site.meta.description,
    type: "website",
    locale: "en_US",
    url: "./",
    images: [
      {
        url: site.meta.ogImage,
        width: 1200,
        height: 630,
        alt: "Erica DeBear | Los Angeles Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.meta.title,
    description: site.meta.description,
    images: [site.meta.ogImage],
  },
};

/* Structured data: tells Google "this is a real estate agent in Los Angeles"
   so the site is eligible for local and rich search results. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Erica DeBear",
  url: site.meta.url,
  image: `${site.meta.url}/images/erica_headshot.jpg`,
  description: site.seo.description,
  telephone: "+1-424-316-8801",
  email: site.contact.email,
  jobTitle: site.contact.title,
  identifier: site.contact.dre,
  knowsAbout: site.seo.knowsAbout,
  /* Education only: never a credential or license to practice law. */
  alumniOf: { "@type": "EducationalOrganization", name: site.seo.alumniOf.name },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.contact.address.line1,
    addressLocality: "Sherman Oaks",
    addressRegion: "CA",
    postalCode: "91403",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Los Angeles" },
    { "@type": "Place", name: "Greater Los Angeles, California" },
    { "@type": "Place", name: "Silver Lake" },
    { "@type": "Place", name: "Sherman Oaks" },
    { "@type": "Place", name: "Altadena" },
    { "@type": "City", name: "Encino" },
    { "@type": "City", name: "Pasadena" },
    { "@type": "Place", name: "El Sereno" },
    { "@type": "City", name: "West Hollywood" },
    { "@type": "City", name: "Santa Monica" },
    { "@type": "City", name: "Burbank" },
  ],
  worksFor: {
    "@type": "RealEstateOrganization",
    name: site.contact.brokerage.name,
  },
  sameAs: site.contact.socials.map((s) => s.href),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${hanken.variable}`}>
      <head>
        {/* RealScout search widget — loaded once, used on /, /properties, /search */}
        <script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          async
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* If JavaScript is off, show scroll-reveal content immediately */}
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
      </head>
      <body>
        {children}
        {/* Google Analytics 4 — loads after the page is interactive so it
            never slows down what visitors see */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>
      </body>
    </html>
  );
}
