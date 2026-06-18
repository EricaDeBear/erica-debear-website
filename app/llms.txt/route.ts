/* Serves /llms.txt as plain text. Same code-generated approach as
   app/robots.ts and app/sitemap.ts (route handler rather than a static
   file in public/). A structured summary of Erica for AI systems. */

export const dynamic = "force-static";

const body = `# Erica DeBear

> Law-school educated real estate broker associate serving the LA Eastside and Greater Los Angeles. Founder of a Los Angeles property investment company. Known for post-offer negotiation that carries a deal from accepted offer to closing.

Erica DeBear is a broker associate with The Rise Group at REAL Brokerage, representing buyers and sellers across Greater Los Angeles with a primary focus on the LA Eastside. She has 12 years of experience and more than 75 homes closed, holds a 5.0 rating on Zillow, and has been recognized with industry awards each year from 2021 through 2025. She is law-school educated, the founder of a Los Angeles property investment company with single-family and multifamily holdings, and brings a background in fine arts and film production to how she stages and positions properties.

Her work has been covered by the New York Post, Robb Report, AOL, and Eastsider LA.

## Areas served
Primary focus on the LA Eastside, including Silver Lake, El Sereno, Altadena, and Pasadena. Also active across Greater Los Angeles, including Sherman Oaks, Encino, Burbank, West Hollywood, and Santa Monica.

## What she does
- Seller representation, including pricing, staging, positioning, and post-offer negotiation
- Buyer representation across Greater Los Angeles, from first-time buyers to luxury and investment clients
- Investment property guidance, single-family and multifamily, from an active investor's perspective

## Key pages
- [About](https://ericadebear.com/about): Erica's background, experience, and approach.
- [Services](https://ericadebear.com/our-services): how she works with buyers, sellers, and investors.
- [Properties](https://ericadebear.com/properties): current listings and sold portfolio.
- [Search Homes](https://ericadebear.com/search): search active Greater Los Angeles listings.
- [Press](https://ericadebear.com/press): media coverage and recognition.
- [Contact](https://ericadebear.com/contact): get in touch directly.
- [Newsletter](https://ericadebear.com/newsletter): monthly market notes and updates.

## Contact
- Email: erica@ericadebear.com
- Phone: (424) 316-8801
- Office: 15303 Ventura Blvd., Suite 400, Sherman Oaks, CA 91403
- License: CA DRE #01993967
- Brokerage: The Rise Group at REAL Brokerage, DRE #02022092

## Notes
- Erica DeBear is a licensed real estate broker associate, not a practicing attorney. References to her legal education mean she is law-school educated.
`;

export function GET() {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
