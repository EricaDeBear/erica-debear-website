export const site = {
  /* ---------------- META / SEO ---------------- */
  meta: {
    title: "Erica DeBear | Your Next Move, Made Right",
    description:
      "Erica DeBear is a licensed Los Angeles real estate broker specializing in the Eastside and Greater LA. Law-school educated, 75+ homes closed, 5.0 stars on Zillow.",
  },

  /* ---------------- BRAND ---------------- */
  brand: {
    name: "Erica DeBear",
    nameLine1: "Erica DeBear",
    nameLine2: "Real Estate",
    tagline: "Your next move, made right.",
    logo: "/placeholders/logo.svg",
    logoLight: "/placeholders/logo-light.svg",
    logoImage: "/images/erica_logo_black.png",
    logoImageLight: "/images/erica_logo_white.png",
  },

  /* ---------------- CONTACT ---------------- */
  contact: {
    email: "erica@ericadebear.com",
    phone: "4243168801",
    phoneFormatted: "(424) 316-8801",
    title: "Realtor | Broker Associate",
    address: {
      line1: "15303 Ventura Blvd., Suite 400",
      line2: "Sherman Oaks, CA 91403",
    },
    dre: "CA DRE #01993967",
    brokerage: {
      name: "REAL Brokerage",
      team: "The Rise Group",
      dre: "DRE #02022092",
    },
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/ericadebear/", handle: "@ericadebear" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/ericapollack/" },
      { label: "TikTok", href: "https://www.tiktok.com/@EDRealEstate", handle: "@EDRealEstate" },
      { label: "Zillow", href: "https://www.zillow.com/profile/Erica%20DeBear" },
    ],
  },

  /* ---------------- TOP UTILITY BAR ---------------- */
  utilityBar: [
    { label: "Instagram", href: "https://www.instagram.com/ericadebear/" },
    { label: "Newsletter", href: "/newsletter" },
  ],

  /* ---------------- PRIMARY NAV ---------------- */
  nav: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/our-services" },
    {
      label: "Properties",
      href: "/properties",
      children: [
        { label: "Current Listings", href: "/properties" },
        { label: "Featured Sales", href: "/featured-sales" },
        { label: "Sold Portfolio", href: "/properties#sold" },
      ],
    },
    { label: "Press", href: "/press" },
    { label: "Reviews", href: "/#testimonials" },
    { label: "Search Homes", href: "/search" },
    { label: "Newsletter", href: "/newsletter" },
    { label: "Contact", href: "/contact" },
  ],

  /* ---------------- HERO ---------------- */
  hero: {
    image: "/images/hero.jpg",
    eyebrow: "",
    heading1: "Your next move,",
    heading2: "made right.",
    tagline: "Los Angeles real estate, handled.",
    supportingLine:
      "The home is the easy part. Everything after the offer, where deals quietly fall apart or quietly get better, is where I go to work. Twelve years in, seventy-five homes closed, and I still answer my own phone.",
    cta: { label: "Work With Erica", href: "/contact" },
    ctaSecondary: { label: "Browse Listings", href: "/properties" },
  },

  /* ---------------- STATS STRIP ---------------- */
  stats: [
    { value: "75+", label: "Homes Closed" },
    { value: "12", label: "Years Experience" },
    { value: "5.0 ★", label: "on Zillow" },
  ],

  /* ---------------- MEET ERICA ---------------- */
  meetTeam: {
    image: "/images/erica_professional.jpg",
    overline: "Get to know Erica",
    heading: "Meet Erica.",
    body: "A gallerist learns to see what a space could become. A film producer learns that one missed detail can cost you everything. Erica spent years doing both before her twelve years in Los Angeles real estate, and both still show up in how she positions a home and reads a deal under pressure. A broker’s license, time studying law, and a standing rule that no client question goes unanswered for long.",
    cta: { label: "Read Erica’s Story", href: "/about" },
  },

  /* ---------------- AS SEEN IN ---------------- */
  asSeenIn: {
    overline: "As Seen In",
    outlets: [
      { name: "New York Post", href: "/press" },
      { name: "Robb Report", href: "/press" },
      { name: "AOL", href: "/press" },
      { name: "The Eastsider LA", href: "/press" },
    ],
  },

  /* ---------------- TESTIMONIALS ---------------- */
  testimonials: {
    overline: "Client Reviews",
    heading: "What clients say.",
    subheading: "Verified 5-star reviews from Zillow and direct client correspondence.",
    items: [
      {
        quote:
          "Working with Erica during a difficult and uncertain time was invaluable. After the fires, we were worried we could face a devastating loss when selling our home. Erica guided us through every step, helped us strategically prepare and position the property, and ultimately got us into escrow in less than two weeks with multiple offers over asking. It was not a guaranteed success at all, and we are incredibly grateful for Erica’s guidance, resources, and the outcome she helped us achieve.",
        attribution: "K.G. · Sold post-fires, 2025",
        stars: 5,
      },
      {
        quote:
          "Erica was an incredible person to work with as well as an incredible resource. As a first-time homebuyer, there were so many questions. She answered every one with patience and clarity.",
        attribution: "E.M. · Bought in El Sereno, Jan 2026 · Zillow Verified",
        stars: 5,
      },
      {
        quote:
          "Working opposite Erica was an absolute pleasure. Her offer was exceptionally well written and organized, which is rarer than you might think, and she was collaborative and professional throughout the entire transaction. She advocated fiercely for her clients and successfully negotiated credits while presenting everything in a way that kept my sellers comfortable and the transaction moving forward. I would gladly work with Erica again on a future transaction.",
        attribution: "C.P. · Co-agent",
        framingLabel: "What it's like across the table from Erica",
        stars: 5,
      },
      {
        quote:
          "Erica is incredible. She has a strong, hardworking personality with true dedication to her clients. She helped us both buy and sell in the same year and never once tired of our questions.",
        attribution: "C.W. · Bought and Sold, Jul 2025 · Zillow Verified",
        stars: 5,
      },
      {
        quote:
          "Erica helped us buy our first home, and as people who care deeply about architecture, we had a very specific vision: a midcentury modern home in a walkable neighborhood. It took nearly six months to find the right fit, but Erica was patient, supportive, and never made us feel rushed throughout the process. Once we found the one, she guided us through every step of the transaction, recommending additional inspections, including structural and geological evaluations, because it was a hillside property. We ultimately ended up with the house of our dreams and could not be happier in our new home.",
        attribution: "J.G. · Bought, first home",
        stars: 5,
      },
      {
        quote:
          "There aren’t enough stars in the world. A delightful home-buying experience from beginning to end. I cannot recommend Erica highly enough.",
        attribution: "S.G. · Bought in Glassell Park, Sep 2024 · Zillow Verified",
        stars: 5,
      },
      {
        quote:
          "Erica is knowledgeable about markets and always straightforward and honest. She goes above and beyond for her clients. We couldn’t have bought our first LA home without her.",
        attribution: "I.B. · Bought in Encino, Mar 2025 · Zillow Verified",
        stars: 5,
      },
    ],
    readAllHref: "https://www.zillow.com/profile/Erica%20DeBear",
    readAllLabel: "See All Reviews on Zillow",
  },

  /* ---------------- FEATURED PROPERTIES ---------------- */
  properties: {
    overline: "Current Portfolio",
    heading: "Currently on the market.",
    subheading:
      "Active listings across Greater Los Angeles, from the eastside hills to the Westside and beyond.",
    offMarketLine:
      "Some of the best homes in LA never reach the open market. Ask Erica what is available privately.",
    viewAll: { label: "View All Properties", href: "/properties" },
    searchAll: { label: "Search Every LA Listing", href: "/search" },
    items: [
      {
        status: "For Sale",
        address: "123 Example St",
        cityZip: "Pasadena, CA 91101",
        beds: 4,
        baths: 3,
        sqft: "2,800",
        price: "$2,495,000",
        image: "/placeholders/property-1.svg",
        href: "/properties/example-1",
      },
      {
        status: "For Sale",
        address: "456 Sample Ave",
        cityZip: "Highland Park, CA 90042",
        beds: 5,
        baths: 4,
        sqft: "3,400",
        price: "$3,250,000",
        image: "/placeholders/property-2.svg",
        href: "/properties/example-2",
      },
      {
        status: "Active Under Contract",
        address: "789 Placeholder Blvd",
        cityZip: "Glassell Park, CA 90065",
        beds: 3,
        baths: 2,
        sqft: "1,950",
        price: "$1,795,000",
        image: "/placeholders/property-3.svg",
        href: "/properties/example-3",
      },
      {
        status: "Pending",
        address: "1010 Demo Dr",
        cityZip: "South Pasadena, CA 91030",
        beds: 4,
        baths: 4,
        sqft: "3,100",
        price: "$2,895,000",
        image: "/placeholders/property-4.svg",
        href: "/properties/example-4",
      },
      {
        status: "For Sale",
        address: "2020 Sample St",
        cityZip: "Mount Washington, CA 90065",
        beds: 3,
        baths: 3,
        sqft: "2,200",
        price: "$1,995,000",
        image: "/placeholders/property-1.svg",
        href: "/properties/example-5",
      },
      {
        status: "For Sale",
        address: "3030 Test Ln",
        cityZip: "Glendale, CA 91201",
        beds: 5,
        baths: 5,
        sqft: "4,200",
        price: "$4,495,000",
        image: "/placeholders/property-2.svg",
        href: "/properties/example-6",
      },
    ],
  },

  /* ---------------- INSTAGRAM FOLLOW ---------------- */
  instagram: {
    overline: "Follow along",
    heading: "On Instagram: @ericadebear.",
    subheading: "Architecture, market reads, and the homes worth knowing about.",
    handle: "@ericadebear",
    href: "https://www.instagram.com/ericadebear/",
    tiles: Array.from({ length: 8 }, (_, i) => ({
      image: `/placeholders/insta-${(i % 4) + 1}.svg`,
      href: "https://www.instagram.com/ericadebear/",
    })),
  },

  /* ---------------- ABOUT / BIO BLURB (homepage) ---------------- */
  aboutBlurb: {
    overline: "",
    heading: "Ready when you are.",
    body: "Erica DeBear represents buyers and sellers across Greater Los Angeles, with deep roots on the eastside and a reach that runs from Pasadena to the Westside. A licensed broker who studied law, she reads every contract, contingency, and disclosure with an eye most agents do not have, and she is at her sharpest in the stretch after an offer is accepted, where deals are quietly won or lost. Erica also founded her own investment company, runs a portfolio of single-family and multifamily LA property, and brings a vetted bench of lenders, contractors, and inspectors so every step is covered. The result is rare: the discretion and command of a top broker, with the personal accountability of someone who answers her own phone and replies within 24 hours.",
    cta: { label: "Connect with Erica", href: "/contact" },
  },

  /* ---------------- MARKET VIDEOS ---------------- */
  marketVideos: {
    overline: "Market Notes",
    heading: "What’s happening in the LA market.",
    body: "Short videos on what is selling, what is sitting, and what to do about it, for buyers, sellers, and owners across LA.",
    items: [
      {
        title: "What changed in the LA market this quarter",
        thumbnail: "/placeholders/video-1.svg",
        href: "#",
      },
      {
        title: "Eastside pricing: what buyers need to know",
        thumbnail: "/placeholders/video-2.svg",
        href: "#",
      },
      {
        title: "When to sell and when to wait",
        thumbnail: "/placeholders/video-3.svg",
        href: "#",
      },
      {
        title: "Buying your first home in LA",
        thumbnail: "/placeholders/video-4.svg",
        href: "#",
      },
    ],
  },

  /* ---------------- PRESS & RECOGNITION ---------------- */
  press: {
    heading: "Press and Recognition",
    coverageSubhead: "A selection of Erica’s recent listings and media coverage.",
    coverage: [
      {
        outlet: "New York Post",
        date: "Aug 13, 2024",
        headline: "Suicide Squad director David Ayer lists LA home for $2.49M",
        href: "https://nypost.com/2024/08/13/real-estate/suicide-squad-director-david-ayer-lists-la-home-for-2-49m-2/",
      },
      {
        outlet: "Robb Report",
        date: "2024",
        headline: "David Ayer LA home photo gallery",
        href: "https://robbreport.com/shelter/celebrity-homes/gallery/david-ayer-la-home-photos-1235813136/dayer_home21/",
      },
      {
        outlet: "AOL",
        date: "2024",
        headline: "Suicide Squad / Beekeeper director asks $2.49M…",
        href: "https://www.aol.com/suicide-squad-beekeeper-director-asks-131848203.html",
      },
      {
        outlet: "The Eastsider LA",
        date: "2024",
        headline: "Suicide Squad producer selling home",
        href: "https://www.theeastsiderla.com/news/daily_digest_morning_edition/suicide-squad-producer-selling-home/article_2dc16f5e-5b33-11ef-b064-0f35bd428ec4.html",
      },
    ],
    awardsSubhead: "Awards earned over a multi-year track record.",
    awards: [
      { year: "2025", title: "Platinum Award" },
      { year: "2024", title: "Double Platinum Award" },
      { year: "2023", title: "Double Platinum Award" },
      { year: "2022", title: "Elliman Award" },
      { year: "2021", title: "Elliman Award" },
    ],
  },

  /* ---------------- FOOTER ---------------- */
  footer: {
    tagline: "Your next move, made right.",
    legalLinks: [
      { label: "Terms of Use", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "DMCA", href: "/dmca" },
      { label: "Fair Housing", href: "/fair-housing" },
      { label: "Accessibility", href: "/accessibility" },
    ],
    designedBy: { label: "", href: "#" },
    copyright: `© ${new Date().getFullYear()} Erica DeBear. All rights reserved.`,
  },
} as const;

export type SiteContent = typeof site;
