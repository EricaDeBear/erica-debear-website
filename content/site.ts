export const site = {
  /* ---------------- META / SEO ---------------- */
  meta: {
    url: "https://ericadebear.com",
    title: "Erica DeBear | Your Next Move, Made Right",
    titleTemplate: "%s | Erica DeBear Real Estate",
    description:
      "Erica DeBear is a licensed Los Angeles real estate broker specializing in the Eastside and Greater LA. Law-school educated, 75+ homes closed, 5.0 stars on Zillow.",
    ogImage: "/og-image.jpg",
  },

  /* ---------------- SEO / STRUCTURED DATA ----------------
     Positioning fields consumed by the RealEstateAgent JSON-LD in
     app/layout.tsx. Education only: "law-school educated" is the ceiling;
     never a license or credential. */
  seo: {
    description:
      "Erica DeBear is a law-school educated broker associate with The Rise Group at REAL Brokerage, with 12 years of experience and more than 75 homes closed. She is the founder of a Los Angeles property investment company with single-family and multifamily holdings, and brings a background in fine arts and film production to how she stages and positions properties. She specializes in post-offer negotiation across the LA Eastside and Greater Los Angeles.",
    knowsAbout: [
      "Post-offer contract negotiation",
      "Real estate investment analysis",
      "Single-family and multifamily property",
      "Property staging and positioning",
      "Luxury residential representation",
      "LA Eastside real estate market",
    ],
    alumniOf: { type: "law school", name: "Law school", note: "Law-school educated" },
    /* Aggregate rating sourced from Zillow (a third-party platform), not from
       reviews collected on this site. The Zillow profile is also in sameAs. */
    rating: {
      ratingValue: "5.0",
      reviewCount: 19,
      bestRating: "5",
      source: "Zillow",
      sourceUrl: "https://www.zillow.com/profile/Erica%20DeBear",
    },
  },

  /* ---------------- BRAND ---------------- */
  brand: {
    name: "Erica DeBear",
    nameLine1: "Erica DeBear",
    nameLine2: "Real Estate",
    tagline: "Your next move, made right.",
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
    image: "/images/hero-lemoyne-livingroom.jpg",
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
      { name: "New York Post", href: "/press", logo: "/images/press-nypost.svg" },
      { name: "Robb Report", href: "/press", logo: "/images/press-robbreport.svg" },
      { name: "AOL", href: "/press", logo: "/images/press-aol.svg" },
      { name: "The Eastsider LA", href: "/press", logo: "/images/press-eastsider.svg" },
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
  },

  /* ---------------- INSTAGRAM FOLLOW ---------------- */
  instagram: {
    overline: "Follow along",
    heading: "On Instagram: @ericadebear.",
    subheading: "Architecture, market reads, and the homes worth knowing about.",
    handle: "@ericadebear",
    href: "https://www.instagram.com/ericadebear/",
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
        title: "Touring a 1937 Spanish Revival in Highland Park",
        thumbnail: "/images/video-thumb-highland-park-spanish-revival.jpg",
        src: "/videos/highland-park-spanish-revival.mp4",
      },
      {
        title: "Prepping a Listing for Open House Weekend",
        thumbnail: "/images/video-thumb-open-house-prep.jpg",
        src: "/videos/open-house-prep.mp4",
      },
      {
        title: "The Design Trends Defining LA Homes Right Now",
        thumbnail: "/images/video-thumb-current-design-trends.jpg",
        src: "/videos/current-design-trends.mp4",
      },
      {
        title: "The True Story of a Rental Nightmare",
        thumbnail: "/images/video-thumb-rental-nightmare.jpg",
        src: "/videos/rental-nightmare.mp4",
      },
      {
        title: "If I Built a Home from Scratch",
        thumbnail: "/images/video-thumb-build-from-scratch.jpg",
        src: "/videos/build-from-scratch.mp4",
      },
      {
        title: "If I Built a Home from Scratch, Part 2",
        thumbnail: "/images/video-thumb-build-from-scratch-2.jpg",
        src: "/videos/build-from-scratch-2.mp4",
      },
      {
        title: "Touring a Santa Monica Condo",
        thumbnail: "/images/video-thumb-santa-monica-condo.jpg",
        src: "/videos/santa-monica-condo.mp4",
      },
      {
        title: "Touring New Construction in Valley Village",
        thumbnail: "/images/video-thumb-valley-village-new-construction.jpg",
        src: "/videos/valley-village-new-construction.mp4",
      },
    ],
  },

  /* ---------------- PRESS & RECOGNITION ---------------- */
  press: {
    heading: "Press and Recognition",
    coverageSubhead: "A selection of Erica’s recent listings and media coverage.",
    coverage: [
      {
        outlet: "California Post",
        date: "Jun 29, 2026",
        headline: "‘Suicide Squad’ director asks $2.99M for lovingly decorated LA home with stained glass windows sourced from European churches",
        href: "https://nypost.com/2026/06/29/real-estate/david-ayer-asks-2-99m-for-his-la-home/",
      },
      {
        outlet: "AOL",
        date: "2026",
        headline: "‘Suicide Squad’ director asks $2.99M for lovingly decorated LA home with stained glass windows sourced from European churches",
        href: "https://www.aol.com/articles/suicide-squad-director-asks-2-140000000.html",
      },
      {
        outlet: "Haven Lifestyles",
        date: "2026",
        headline: "Filmmaker David Ayer Lists His Silver Lake Home for $2.995M",
        href: "https://www.havenlifestyles.com/filmmaker-david-ayer-lists-his-silver-lake-home-for-2-995m/",
      },
      {
        outlet: "Homes of Celebs",
        date: "2026",
        headline: "David Ayer Lists LA Home For $2.995 Million",
        href: "https://homesofcelebs.com/david-ayer-lists-la-home-for-2-995-million/",
      },
      {
        outlet: "Robb Report",
        date: "2026",
        headline: "‘Suicide Squad’ Director David Ayer Lists His Artsy L.A. Home for $3 Million",
        href: "https://robbreport.com/shelter/celebrity-homes/david-ayer-los-angeles-home-1238445417/",
      },
      {
        outlet: "Robb Report",
        date: "2026",
        headline: "David Ayer’s L.A. Home in Photos",
        href: "https://robbreport.com/shelter/celebrity-homes/gallery/david-ayer-los-angeles-home-photos-1238447823/",
      },
      {
        outlet: "Yahoo! Life",
        date: "2026",
        headline: "David Ayer’s L.A. Home in Photos",
        href: "https://ca.style.yahoo.com/david-ayer-l-home-photos-215913186.html",
      },
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
      { year: "2025", title: "Platinum Award", issuer: "Rise Real Estate | The Real Brokerage" },
      { year: "2024", title: "Double Platinum Award", issuer: "Rise Real Estate | The Real Brokerage" },
      { year: "2023", title: "Double Platinum Award", issuer: "Rise Real Estate | The Real Brokerage" },
      { year: "2022", title: "Elliman Award", issuer: "Douglas Elliman" },
      { year: "2021", title: "Elliman Award", issuer: "Douglas Elliman" },
    ],
  },

  /* ---------------- FAQ ---------------- */
  faq: {
    overline: "Common Questions",
    heading: "Questions, answered.",
    intro:
      "A straight look at how I work with sellers, buyers, and investors across the LA Eastside and Greater Los Angeles.",
    groups: [
      {
        label: "For sellers",
        items: [
          {
            question: "What makes the difference between an accepted offer and a closed sale?",
            answer:
              "More than most people expect. An accepted offer is the beginning of the hardest part, not the end. Inspection findings, appraisal gaps, financing conditions, and contingency deadlines are where deals quietly fall apart or where sellers leave money on the table. My focus is the post-offer stretch: holding a deal together through the renegotiation, protecting your price, and getting it to close on the terms you agreed to. It is the part of the job I am known for, and it is where experience shows.",
          },
          {
            question: "How do you decide what my home should list for?",
            answer:
              "Pricing is part market data and part positioning. I look at recent comparable sales, current competition, and the specific features of your home, then we set a number with a strategy behind it rather than a guess. Staging and presentation factor in too, since how a home is shown affects what it sells for. I would rather price it right and position it well than chase a number that sits on the market and weakens your leverage.",
          },
          {
            question: "Why does staging and presentation matter so much?",
            answer:
              "Buyers form an impression in the first few seconds, and that impression follows them through every showing and every offer. My background in fine arts and film production shapes how I approach this, composition, light, and how a space reads on camera and in person. Most buyers see the listing photos before they ever see the house, so the presentation is doing real work before anyone walks in.",
          },
          {
            question: "Do you only work on the Eastside?",
            answer:
              "The Eastside is my anchor and where I have the deepest local knowledge, but I work across Greater Los Angeles, including the Valley and the Westside. If you are selling outside the Eastside, you still get the same approach.",
          },
        ],
      },
      {
        label: "For buyers",
        items: [
          {
            question: "I'm moving to LA from out of state. How do you help with that?",
            answer:
              "A long-distance move has more moving parts than a local one, and a lot of it is logistics and local knowledge you do not have yet. I help you understand the differences between areas, the realities of the buying process here, and what your budget actually gets you in different parts of the city, so you are making informed decisions rather than guessing from listings online. The goal is for you to land somewhere that fits how you actually want to live.",
          },
          {
            question: "What should I look for in a listing agent versus a buyer's agent?",
            answer:
              "They are different jobs even when one person can do both. A listing agent works for the seller and represents their interests; a buyer's agent represents yours. When you are buying, you want someone whose attention is on your side of the table, especially during negotiation and the post-offer period when problems surface. I represent buyers across Greater Los Angeles and treat that part as seriously as I do my listings.",
          },
          {
            question: "Can you work with first-time buyers, or only luxury clients?",
            answer:
              "Both. The price point does not change the care. First-time buyers often need more guidance through the process, which I am glad to give, and a vetted network of lenders, inspectors, and other professionals matters more, not less, when it is your first time. The experience should feel handled regardless of the number.",
          },
          {
            question: "What does law-school educated mean for me as a client?",
            answer:
              "It means I read contracts closely and I am comfortable in the parts of a transaction that are detail-heavy and high-stakes. To be clear, I am a licensed broker associate, not a practicing attorney, and I do not give legal advice. What the legal education gives you is an agent who is rigorous about the paperwork and the contingencies, which is exactly where deals are won or lost.",
          },
        ],
      },
      {
        label: "For investors",
        items: [
          {
            question: "You invest in property yourself. How does that change how you work with investor clients?",
            answer:
              "I am the founder of a Los Angeles investment company with single-family and multifamily holdings, so I look at a property the way you do, as numbers that either work or do not. That means I am not just selling you on a house, I am thinking about what it returns, what it costs to hold, and what the realistic upside is. When an agent invests themselves, the conversation is different.",
          },
          {
            question: "Do you handle multifamily, or just single-family?",
            answer:
              "Both. My own holdings include single-family and multifamily, and I work with investor clients across both. They are different analyses, and I am comfortable in each.",
          },
          {
            question: "How do you evaluate whether a property is a good investment?",
            answer:
              "It comes down to the math behind the property, acquisition cost, the cost to hold and operate, realistic income, and the actual upside rather than the optimistic version. I would rather tell you a deal does not work than help you into one that does not. If you want to talk through a specific property or build a buying strategy, that is a conversation worth having directly.",
          },
        ],
      },
    ],
    cta: {
      heading: "Have a question that isn't here?",
      label: "Connect with Erica",
      href: "/contact",
    },
  },

  /* ---------------- NEIGHBORHOODS (SILO) ----------------
     Step 3 of the build: Silver Lake only, as the fully populated template
     case. The other eight areas, the hub lead copy (overline / heading /
     intro), and the sitemap and footer links are intentionally not added yet.
     FLAGGED, missing from the content draft and left out rather than invented:
       - hub overline / heading / intro (no hub copy exists in the draft)
       - per area metaTitle / metaDescription (none written in the draft)
       - hero image src / alt (photography not sourced; images pending)
     When the empty-stats areas are added later, keep the market shape
     consistent (stats: [], plus scope and source present) and use tier2: ""
     for the tier1-only area, so the union types stay accessible. */
  neighborhoods: {
    /* Shared CTA rendered on every spoke. {name} is interpolated with the
       area name at render time. Mirrors faq.cta. */
    cta: {
      heading: "Thinking about buying or selling in {name}?",
      label: "Connect with Erica",
      href: "/contact",
    },

    /* Region grouping for the hub (built later). Order: Eastside first. */
    regions: ["Eastside", "Valley", "Westside"],

    areas: [
      {
        slug: "silver-lake",
        name: "Silver Lake",
        region: "Eastside",

        overview:
          "Silver Lake sits in the hills northeast of Downtown, built around the reservoir that gives the neighborhood its name. The terrain is the reason the architecture is what it is. The slopes around the water were too steep for the gridded tract housing going up elsewhere in early Los Angeles, so the lots here drew architects who treated a hillside as a problem worth solving rather than avoiding. The result is one of the most architecturally significant concentrations of homes in the city, and a market that rewards knowing the difference between one street and the next.",

        architecture:
          "Silver Lake's streets were largely laid out in the 1920s, following the contours of the hills, which is why no two blocks feel quite the same. The earliest residential layer is 1920s Spanish and Mediterranean Revival, much of it clustered in the Moreno Highlands on the western slopes. The layer the neighborhood is known for came next: the modernist hillside houses that made Silver Lake a testing ground for how Californians could live on difficult land. Richard Neutra built his own home and studio, the VDL Research House, on the eastern edge of the reservoir in 1932, and the surrounding Neutra Colony added a cluster of his houses through the 1940s and 50s. Rudolph Schindler worked the eastern side, John Lautner built Silvertop, and Gregory Ain's Avenel cooperative is listed on the National Register of Historic Places. Alongside the icons, the housing stock runs to hillside view properties, modest-footprint modern houses built tight to their lots, creative duplexes, small-lot developments, and contemporary new builds. For a buyer or seller, the practical takeaway is that Silver Lake is not one market. An architecturally significant home, a 1920s Spanish, and a new-construction small-lot house are three different transactions, priced and positioned differently.",

        market: {
          intro:
            "Silver Lake tends to behave as a low-inventory, design-driven market, where a home's architectural pedigree and condition can matter as much as its square footage. Significant homes by named architects trade on a different logic than standard stock, and the spread between a turnkey design property and one needing work can be wide.",
          stats: [
            { label: "Median sold price", value: "$1,485,500" },
            { label: "Average days on market", value: "40" },
            { label: "Sale-to-list ratio", value: "105.81%" },
          ],
          scope: "Single-family homes.",
          source: "Combined LA Westside MLS",
        },

        activity: {
          tier1:
            "I represent both buyers and sellers in Silver Lake and work across its range, from architecturally significant homes to contemporary small-lot construction. The post-offer stretch is where I focus: holding a deal together through inspections and renegotiation, which matters more, not less, on hillside properties and older homes where what the inspection turns up can move real money.",
          tier2:
            "Recent Silver Lake sales include two closings between $1.65M and $2.05M.",
        },

        guidance:
          "Two things shape almost every Silver Lake transaction. The first is the hillside itself. Slope, foundation, drainage, and access are real variables here, and they surface in inspection. A buyer should expect to read a hillside inspection carefully, and a seller is better served knowing what the report will likely say before it is in a buyer's hands, not after. The second is architectural provenance. If a home is by a named architect or sits in a historic context, that changes how it should be priced, marketed, and sometimes what can be altered. Pricing a significant home like standard stock leaves money on the table; pricing standard stock as if it were significant leaves it on the market. Knowing which one you have, and representing it accordingly, is most of the job here.",

        faq: [
          {
            question: "What kinds of homes will I actually find in Silver Lake?",
            answer:
              "A wide range on purpose. The neighborhood has a 1920s layer of Spanish and Mediterranean Revival, a celebrated set of mid-century modern hillside houses by architects like Neutra, Schindler, Lautner, and Ain, and a newer layer of contemporary and small-lot construction. Two homes a few streets apart can be completely different products at completely different prices.",
          },
          {
            question: "What should I know about buying a hillside home here?",
            answer:
              "Hillside construction brings variables that flat-lot homes do not: foundation type, drainage, slope stability, and access. None of it is a reason to avoid the area, but it does mean the inspection matters more, and reading it correctly is where a buyer either protects themselves or overpays. This is the part of a deal I concentrate on.",
          },
          {
            question: "Does a home being architecturally significant change how it sells?",
            answer:
              "Yes. A home by a named architect, or one in a recognized historic context, trades on different logic than standard stock and often carries considerations about what can and cannot be altered. It should be priced and marketed for what it is. That cuts both ways, since pricing a significant home like an ordinary one underprices it, and the reverse leaves it sitting.",
          },
          {
            question: "How does Measure ULA affect selling in Silver Lake?",
            answer:
              "The City of Los Angeles transfer tax under Measure ULA applies to sales above its threshold, and a meaningful share of Silver Lake's architectural and hillside-view homes can reach that range. If your sale may cross the threshold, it should be in your net-proceeds math from day one, not discovered at closing.",
          },
          {
            question: "Is Silver Lake a good place to invest?",
            answer:
              "It depends entirely on the specific property and the math behind it, which is how I look at any investment, since I invest myself. Silver Lake's low inventory and design-driven demand are part of the picture, but the only thing that decides it is whether a given property's acquisition cost, holding cost, and realistic upside actually work. That is a conversation worth having about a real address rather than the area in general.",
          },
        ],
      },
    ],
  },

  /* ---------------- FOOTER ---------------- */
  footer: {
    tagline: "Your next move, made right.",
    /* Footer-only Quick Links, shown in addition to the main nav items.
       Kept out of the top navigation on purpose. */
    quickLinksExtra: [{ label: "FAQ", href: "/faq" }],
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
