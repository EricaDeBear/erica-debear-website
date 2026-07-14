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
     Nine areas across three regions. All copy is taken verbatim from the
     content draft. FLAGGED, missing from the draft and left out rather than
     invented:
       - hub intro copy (no hub intro exists in the draft)
       - per area metaTitle / metaDescription (page title falls back to name)
       - hero image src / alt (photography not sourced; images pending)
     Editorial notes in the draft were stripped rather than shipped: the
     bracket markers ([MARKET DATA], [REGULATORY], [CONFIRM], [PHOTO]) and the
     trailing "current figures to be supplied" drafting notes. Empty-stats
     areas carry stats: [] with empty scope and source; the tier1-only area
     carries tier2: "", so the render conditionals omit those blocks. */
  neighborhoods: {
    /* Hub lead. overline and heading are the spec-provided structural labels;
       no hub intro copy exists in the draft, so it is omitted rather than
       invented. */
    overline: "Greater Los Angeles",
    heading: "Neighborhoods",

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
      {
        slug: "el-sereno",
        name: "El Sereno",
        region: "Eastside",

        overview:
          "El Sereno sits at the eastern edge of Los Angeles, in the rolling hills between Highland Park, South Pasadena, and Alhambra. It is one of the oldest parts of the city, with a development history that runs back through Rancho Rosa de Castilla, and it carries a housing stock that reflects more than a century of building. For a long time it stayed off the radar of buyers focused on neighboring Eastside markets, which is part of why its character homes survived largely intact. It is a quieter market than Silver Lake or Highland Park, with hillside lots, views, and an early-20th-century building fabric that rewards a close look.",

        architecture:
          "El Sereno's housing stock is anchored by early-20th-century character homes: Craftsman bungalows, Spanish and Mediterranean Revival cottages, and storybook houses, with mid-century and postwar homes filling in the southern end of the neighborhood after World War II. The clearest concentration of architectural integrity is the El Sereno-Berkshire Craftsman District, a Historic Preservation Overlay Zone containing the Short Line Villa Tract, an early suburban tract that retains excellent examples of Craftsman, Bungalow, American Colonial Revival, and Spanish Colonial Revival design. The northern hills hold older homes on larger and irregular lots with views, while postwar Minimal Traditional and Ranch homes dominate parts of the south. More recently, hillside parcels have drawn newer infill and contemporary construction. The practical point for a buyer or seller is range and condition: an HPOZ Craftsman, a postwar Ranch, and a new hillside build are three different products with three different sets of considerations.",

        market: {
          intro:
            "El Sereno has historically traded at a discount to adjacent Eastside markets, which has made it one of the areas where buyers priced out elsewhere look, and where appreciation has drawn attention. Within the neighborhood, the HPOZ blocks and the view-lot hillsides behave differently from the flatter postwar tracts.",
          stats: [
            { label: "Median sold price", value: "$808,500" },
            { label: "Average days on market", value: "94" },
            { label: "Sale-to-list ratio", value: "103.87%" },
          ],
          scope: "Single-family homes.",
          source: "Combined LA Westside MLS",
        },

        activity: {
          tier1:
            "I represent buyers and sellers in El Sereno across its range, from historic Craftsman and Spanish homes to postwar and newer hillside construction.",
          tier2:
            "Recent El Sereno activity includes a single-family closing at $1.3M.",
        },

        guidance:
          "Two considerations come up repeatedly here. The first is historic designation. If a home sits within the El Sereno-Berkshire HPOZ, exterior changes can be subject to review, which affects what a buyer can plan to alter and how a seller should present the home. Knowing whether a given property is a contributing structure in the overlay zone matters before, not after, an offer. The second is the spread between old and new. El Sereno's character homes are often a century old, and the inspection on a 1910s or 1920s house surfaces things a newer build will not. For a buyer that is where leverage lives in the post-offer window. For a seller it is better to know what the report will say in advance. On the hillside lots, the same slope, drainage, and access variables apply that I watch for across the Eastside.",

        faq: [
          {
            question: "What kinds of homes does El Sereno have?",
            answer:
              "A deep early-20th-century layer: Craftsman bungalows, Spanish and Mediterranean Revival cottages, and storybook homes, with the strongest concentration in the El Sereno-Berkshire Craftsman historic district. Add postwar Ranch and Minimal Traditional homes in the south and newer contemporary infill on the hillsides, and the range is wide.",
          },
          {
            question: "What is the El Sereno-Berkshire HPOZ and does it affect me?",
            answer:
              "It is a Historic Preservation Overlay Zone covering a notable concentration of intact Craftsman-era homes. If a property is inside it, exterior alterations may require review before permitting. That is not a reason to avoid these homes, but it should be understood up front, since it shapes what you can change and how the home should be marketed.",
          },
          {
            question: "Why is El Sereno priced differently from neighboring areas?",
            answer:
              "Historically it has traded below adjacent Eastside markets, which is much of its draw for buyers and part of why its older homes survived intact. Current pricing and how fast it is moving are numbers worth looking at fresh rather than assuming, since this is an area where the gap has been narrowing.",
          },
          {
            question: "What should I watch for buying an older home here?",
            answer:
              "The age of the housing stock. A century-old Craftsman or Spanish home can be wonderful and can also carry the systems, foundation, and condition questions that come with age. The inspection matters, and reading it correctly is where a buyer protects their position in the post-offer stretch.",
          },
          {
            question: "Does El Sereno work for investors?",
            answer:
              "It can, but only the specific numbers decide it. I look at any property as an investor would, since I invest myself: acquisition cost, the cost to hold and improve, realistic income or resale, and the actual upside. The area's historic price gap and its older stock both cut into that math in ways worth working through on a real address.",
          },
        ],
      },
      {
        slug: "altadena",
        name: "Altadena",
        region: "Eastside",

        overview:
          "Altadena sits in the foothills of the San Gabriel Mountains, just north of Pasadena, in unincorporated Los Angeles County. It is known for a deep stock of early-20th-century character homes and a strong preservation culture. In January 2025 the Eaton Fire caused significant loss across the community, and a large, organized rebuilding effort has been underway since. Any honest look at Altadena's market today has to hold both things at once: a historic foothill neighborhood with genuine architectural depth, and a community in active recovery. Buying or selling here now means understanding rebuild status, lot condition, and county process, alongside the usual questions of a home.",

        architecture:
          "Altadena's historic housing stock is defined by Craftsman bungalows, Spanish and Mediterranean Revival villas, English Tudor Revival, and the locally beloved Janes Cottages, the storybook English-cottage-style homes built in the 1920s by developer E.P. Janes and concentrated in Janes Village, designated an Altadena Heritage Area in 2002. Postwar Ranch and Mid-Century homes appear in later subdivisions. Because Altadena is in unincorporated county territory, it falls under Los Angeles County zoning and preservation jurisdiction rather than a city's. Following the 2025 fire, a documented rebuilding framework has taken shape: the Foothill Catalog and affiliated efforts have produced preapproved, code-compliant plans inspired by the area's historic styles, including several Janes Cottage designs preapproved by LA County to shorten permitting. For a buyer or seller the housing stock now spans intact historic homes that survived, homes being rebuilt to historic-inspired plans, vacant lots, and new construction, which is an unusually wide and situation-specific range.",

        market: {
          intro:
            "Altadena's market is in a period of active change, and current figures should be read fresh and dated rather than assumed from any prior baseline. Standing historic homes, rebuild-in-progress properties, and vacant lots are effectively different products, and conflating them produces misleading averages.",
          stats: [],
          scope: "",
          source: "",
        },

        activity: {
          tier1:
            "I represent buyers and sellers in Altadena and approach this market with care for where it is right now. Two of my differentiators matter unusually much here: a vetted network of the professionals a transaction or a rebuild actually requires, and an investor's discipline about whether to rebuild, sell as-is, or sell a lot. Those are real decisions for many owners here, and they turn on real numbers, not sentiment.",
          tier2:
            "Recent Altadena sales include three closings between $1.35M and $1.525M.",
        },

        guidance:
          "Altadena right now calls for guidance most generalist marketing skips. For sellers, the central question is often rebuild versus sell, and the honest answer depends on insurance position, lot condition, permitting timeline, and what standing or rebuilt comparable homes are actually doing. That is an analysis, not a slogan, and it is one I am comfortable running because I look at property the way an investor does. For buyers, the considerations include county permitting and preservation process, the difference between a turnkey historic home and a rebuild-in-progress, and the condition and history of a given lot. Across both, the vetted-network point is not a tagline here: the right contractor, the right inspector, and clear-eyed advisors are part of what makes a sound decision possible.",

        faq: [
          {
            question: "What kinds of homes does Altadena have?",
            answer:
              "Historically, Craftsman bungalows, Spanish and Mediterranean Revival villas, English Tudors, and the distinctive Janes Cottages of Janes Village, plus postwar Ranch and Mid-Century homes. After the 2025 fire, the market also includes homes being rebuilt to historic-inspired plans, vacant lots, and new construction.",
          },
          {
            question: "How has the 2025 Eaton Fire changed the market?",
            answer:
              "Significantly, and it is still evolving. The housing stock now spans surviving historic homes, rebuilds in progress, and lots, which trade on different logic. Current figures should be looked at fresh and dated, not assumed. The most useful thing I can do here is help you read the specific situation of a specific property.",
          },
          {
            question: "I own a lot or a damaged home. Should I rebuild or sell?",
            answer:
              "That depends on your insurance position, the lot, the permitting timeline, and what comparable standing and rebuilt homes are doing. It is a real financial analysis, and it is the kind of decision I am built to help with, because I evaluate property as an investor and I bring in the right professionals to pressure-test the numbers.",
          },
          {
            question: "What is the Janes Cottage and why does it matter?",
            answer:
              "A storybook English-cottage-style home built in the 1920s by developer E.P. Janes, concentrated in Janes Village, an Altadena Heritage Area. Many were lost in the fire, and a documented set of preapproved, historic-inspired rebuild plans now exists to help owners recreate that character. If you are buying or rebuilding one, the style and any heritage considerations are part of the conversation.",
          },
          {
            question: "Does Altadena fall under city or county rules?",
            answer:
              "County. Altadena is unincorporated, so Los Angeles County zoning, permitting, and preservation jurisdiction apply rather than a city's. That shapes process for both buyers and anyone rebuilding, and it is worth understanding before you transact.",
          },
        ],
      },
      {
        slug: "pasadena",
        name: "Pasadena",
        region: "Eastside",

        overview:
          "Pasadena sits at the base of the San Gabriel Mountains, northeast of Downtown Los Angeles, and it is one of Southern California's most architecturally important cities. Founded in 1875, it grew quickly in the early 20th century into a center of the American Arts and Crafts movement, and that history is still legible in its streets today. It has more than 130 locally designated landmarks and historic monuments and dozens of historic districts, which makes it a city where, more than almost anywhere in the region, architectural designation and process are part of how homes are bought and sold.",

        architecture:
          "Pasadena is the city most associated with the California Craftsman and the bungalow, and its housing stock spans late Victorian, Arts and Crafts, Period Revival, early modern, and postwar eras. The Arts and Crafts peak is anchored by Greene and Greene, whose work includes the 1908 Gamble House, and the city's first historic district, Bungalow Heaven, preserves a sixteen-block concentration of early-20th-century Craftsman bungalows. Beyond it, districts like Garfield Heights, Historic Highlands, and others hold Craftsman homes alongside American Foursquares, Queen Annes, Spanish and Mediterranean Revival, Tudor Revival, and English Cottage styles, while areas like Linda Vista and the postwar Hastings Ranch tracts add mid-century inventory. Pasadena is also considered the birthplace of the bungalow court, with a documented study identifying well over a hundred courts citywide. The practical takeaway for a buyer or seller is that style, era, and historic status vary enormously block to block, and each combination carries its own ownership and transaction considerations.",

        market: {
          intro:
            "Pasadena is a deep, sought-after market where historic character and condition carry real weight, and where landmark and historic-district status can factor into both value and process. Designated and non-designated homes, and homes across the city's many eras, behave differently.",
          stats: [
            { label: "Median sold price", value: "$1,472,500" },
            { label: "Average days on market", value: "38" },
            { label: "Sale-to-list ratio", value: "105.38%" },
          ],
          scope: "Single-family homes.",
          source: "Combined LA Westside MLS",
        },

        activity: {
          tier1:
            "I represent buyers and sellers across Pasadena's range, from historic Craftsman and Period Revival homes to postwar and contemporary properties. The city's designation landscape and the age of much of its housing stock are exactly the kind of detail-heavy terrain where careful representation pays off, especially in the post-offer window.",
          tier2:
            "Recent Pasadena activity includes a closing at $771,000.",
        },

        guidance:
          "Pasadena rewards knowing the rules. If a home is a designated landmark, a historic monument, or a contributing property in a historic district, certain exterior changes can require a Certificate of Appropriateness before a building permit issues, while interior work is generally exempt. That affects what a buyer can plan and how a seller should position a home. Pasadena also uses the State Historical Building Code, which can allow reasonable alternatives to standard code for historic homes, and eligible designated properties may qualify for Mills Act property-tax savings, which is a genuine financial factor worth checking on a specific home. Underneath all of it is the age of the stock: many of these homes are a century old, the inspection matters, and that is where I focus in the post-offer stretch.",

        faq: [
          {
            question: "What architectural styles will I find in Pasadena?",
            answer:
              "A wide span: Craftsman and California Bungalow, Greene and Greene Arts and Crafts, American Foursquare, Queen Anne, Spanish and Mediterranean Revival, Tudor Revival, English Cottage, Ranch, and Mid-Century Modern. Pasadena is also known for its bungalow courts, with well over a hundred documented citywide.",
          },
          {
            question: "What is a Certificate of Appropriateness and will I need one?",
            answer:
              "In Pasadena's landmark and historic districts, visible exterior changes such as windows, porches, additions, and fences may require a Certificate of Appropriateness before a permit is issued. Interior alterations are generally exempt. If you are buying in a historic district, this shapes what you can change and how quickly projects move, so it is worth understanding before you write an offer.",
          },
          {
            question: "What is the Mills Act and could it save me money?",
            answer:
              "The Mills Act is a program that can create meaningful property-tax savings for eligible designated historic properties in exchange for their preservation. Whether a specific home qualifies, and what the savings would be, is worth checking property by property. For the right buyer it is a real financial consideration, not just a preservation nicety.",
          },
          {
            question: "Is buying a historic home in Pasadena more complicated?",
            answer:
              "It can come with more to understand: designation status, review process for exterior changes, and the realities of an older home's systems and condition. None of it is a barrier with the right guidance. Pasadena even uses the State Historical Building Code, which can allow sensible alternatives to standard code for historic homes. The key is knowing what you are buying before you commit.",
          },
          {
            question: "How does Measure ULA affect a Pasadena sale?",
            answer:
              "Measure ULA is the City of Los Angeles transfer tax and applies to property within the City of Los Angeles. Pasadena is its own incorporated city, so a sale there is treated differently. Either way, every cost that comes out of a sale should be in your net-proceeds math from the start.",
          },
        ],
      },
      {
        slug: "sherman-oaks",
        name: "Sherman Oaks",
        region: "Valley",

        overview:
          "Sherman Oaks sits in the southern San Fernando Valley, organized around the Ventura Boulevard corridor and reaching from the valley floor up into the Santa Monica Mountains foothills to the south. It was platted in 1927 by General Moses Hazeltine Sherman, whose company subdivided roughly a thousand acres of former ranch and orchard land into the residential tract that took his name. Today it is one of the Valley's anchor markets, known for a walkable boulevard, a wide architectural range, and a clear split in character between the flatter streets north of Ventura and the larger-lot hillside streets to the south.",

        architecture:
          "Sherman Oaks has more architectural variety than many of its Valley neighbors. The housing stock includes California Craftsman bungalows, Spanish Revival small-lot homes, the postwar California Ranch homes that defined the Valley's mid-century build-out, and a strong layer of mid-century modern, with the San Fernando Valley being a major and sometimes overlooked center of postwar modernism. Architect Edward Fickett, prolific across the Valley, is associated with the area's mid-century character, and individual modernist homes by noted architects appear in the hills. Geography splits the stock: the flats north of Ventura hold tighter-lot single-family homes with smaller footprints, while the streets between Ventura and Mulholland to the south carry larger-lot and hillside inventory, including custom and view homes. There has also been significant flip and rebuild activity along the Ventura corridor. For a buyer or seller the north-south distinction is one of the first things that matters.",

        market: {
          intro:
            "Sherman Oaks is a steady, in-demand Valley market that draws a varied buyer pool, including buyers priced out of the Westside. The southern larger-lot and hillside tier and the northern smaller-lot tier move differently, and well-priced inventory can see real competition.",
          stats: [
            { label: "Median sold price", value: "$1,655,000" },
            { label: "Average days on market", value: "51" },
            { label: "Sale-to-list ratio", value: "98.17%" },
          ],
          scope: "Single-family homes.",
          source: "Combined LA Westside MLS",
        },

        activity: {
          tier1:
            "I represent buyers and sellers throughout Sherman Oaks, on both sides of Ventura and across its range from character homes to mid-century and contemporary properties. Knowing how the northern and southern tiers price and move differently is the kind of local detail that changes a strategy, and the post-offer stretch is where I concentrate.",
          tier2:
            "Recent Sherman Oaks activity includes a closing at $883,000.",
        },

        guidance:
          "The first thing I want a Sherman Oaks buyer or seller to be clear on is which Sherman Oaks they are in. A tighter-lot home in the flats north of Ventura and a larger-lot or hillside home to the south are different products with different buyer pools and different pricing logic, and treating them the same is a common mistake. On the hillside streets to the south, the slope, foundation, drainage, and access variables I watch across hillside LA apply. On the flats, lot size, proximity to the Ventura corridor, and the condition of an often mid-century home drive the conversation. For sellers, pricing to the right tier and presenting to the right buyer is most of the work; for buyers, it is reading condition and the post-offer findings correctly.",

        faq: [
          {
            question: "What kinds of homes are in Sherman Oaks?",
            answer:
              "A genuine mix: Craftsman bungalows, Spanish Revival, postwar California Ranch, and mid-century modern, plus newer custom and contemporary builds. The Valley is a significant center of mid-century architecture, and Sherman Oaks reflects that.",
          },
          {
            question: "What is the difference between north and south of Ventura?",
            answer:
              "Broadly, the flats north of Ventura have tighter lots and smaller home footprints, while the streets to the south, between Ventura and Mulholland, have larger lots, hillside parcels, and more view and custom homes. They price and compete differently, so which side you are on is one of the first things to establish.",
          },
          {
            question: "Is Sherman Oaks a good market for a Westside-priced-out buyer?",
            answer:
              "It is one of the markets such buyers commonly look to, offering more home and lot for the money than comparable Westside areas while keeping strong access to the city. What that trade looks like in specific numbers is worth pulling fresh rather than assuming.",
          },
          {
            question: "What should I watch for on a hillside home in the south?",
            answer:
              "The same variables that apply on hillsides across LA: slope stability, foundation, drainage, and access. They surface in inspection, which is exactly where a buyer protects their position and where I focus during the post-offer window.",
          },
          {
            question: "How does Measure ULA affect a Sherman Oaks sale?",
            answer:
              "Sherman Oaks is within the City of Los Angeles, so the Measure ULA transfer tax can apply to sales above its threshold, which the larger southern homes can reach. If your sale may cross it, it belongs in your net-proceeds math from the start.",
          },
        ],
      },
      {
        slug: "encino",
        name: "Encino",
        region: "Valley",

        overview:
          "Encino sits in the southern San Fernando Valley, just west of Sherman Oaks, and is the larger-lot, more estate-oriented of the two anchor markets. Where Sherman Oaks is organized around a walkable boulevard, Encino is more residential in character, with generous lots, a concentration south of Ventura Boulevard, and a long association with established Valley homeownership. It draws a buyer pool that overlaps with Sherman Oaks but skews toward those seeking more land and a more private, estate-scale setting.",

        architecture:
          "Encino's housing stock skews to larger-scale single-family homes on bigger lots, often 7,000 to 15,000 square feet and well beyond. The area south of Ventura holds significant 1950s to 1970s mid-century and postwar Ranch homes, alongside original 1920s and 1930s Spanish Colonial and Mediterranean estate inventory. Over the past decade there has been significant rebuild activity, with many original homes reconfigured or replaced as contemporary estate-scale houses on the larger lots. North of Ventura, lots are generally smaller and homes move at a somewhat faster pace. The result is a market where lot size and whether a home is original, renovated, or a recent rebuild are central variables.",

        market: {
          intro:
            "Encino is a prestige Valley market with steady demand, including from multi-generational Valley households and buyers priced out of the Westside. Larger-lot homes south of Ventura and smaller-lot homes to the north behave differently, and well-priced inventory in the prized tiers can see multiple offers. A meaningful share of higher-tier activity happens off-market.",
          stats: [
            { label: "Median sold price", value: "$2,362,500" },
            { label: "Average days on market", value: "62" },
            { label: "Sale-to-list ratio", value: "96.38%" },
          ],
          scope: "Single-family homes.",
          source: "Combined LA Westside MLS",
        },

        activity: {
          tier1:
            "I represent buyers and sellers in Encino across its range, from original Spanish and mid-century homes to renovated and estate-scale contemporary properties. In a market where a meaningful amount of the best activity is off-market, relationships and a vetted network matter, and the post-offer discipline I am known for protects the larger sums at stake on higher-value homes.",
          tier2:
            "Recent Encino activity includes a single-family closing at $1.225M.",
        },

        guidance:
          "In Encino, lot and provenance lead the conversation. A larger lot south of Ventura, an original 1930s Spanish estate, a renovated mid-century, and a recent ground-up rebuild are different propositions, and pricing or buying them without that distinction is where money is lost. Because a real share of the upper-tier market moves off-market through networks, a seller benefits from genuine reach and a buyer from genuine access, which is part of what a vetted network and active local relationships provide. On the higher-value homes, the dollars that move in the post-offer window are larger, which is exactly why I treat inspections, contingencies, and renegotiation as the part of the deal that decides the outcome.",

        faq: [
          {
            question: "What kinds of homes does Encino have?",
            answer:
              "Larger-scale single-family homes on generous lots: 1950s to 1970s mid-century and Ranch homes, original 1920s and 1930s Spanish Colonial and Mediterranean estates, and a growing number of contemporary estate-scale rebuilds, especially south of Ventura.",
          },
          {
            question: "How is Encino different from Sherman Oaks?",
            answer:
              "Broadly, Encino is the larger-lot, more estate-oriented and residential market, while Sherman Oaks is more walkable and boulevard-centered with a more varied and sometimes tighter-lot stock. They compete for overlapping buyers, so the choice often comes down to lot size, setting, and daily rhythm.",
          },
          {
            question: "A lot of homes here are rebuilds. Does that matter?",
            answer:
              "It does. An original estate, a renovated older home, and a ground-up contemporary rebuild carry different conditions, different value drivers, and different things to check. Knowing which one you are looking at, and what was actually done in a rebuild or renovation, is central to both buying and pricing here.",
          },
          {
            question: "Is it true a lot of Encino sells off-market?",
            answer:
              "A meaningful share of higher-tier activity does happen off-market through networks. For a seller that is a reason to work with someone with genuine reach; for a buyer, a reason to work with someone with genuine access. Relationships do real work in this market.",
          },
          {
            question: "How does Measure ULA affect an Encino sale?",
            answer:
              "Encino is within the City of Los Angeles, so the Measure ULA transfer tax can apply above its threshold, which Encino's estate-scale homes frequently reach. On higher-value sales this is a material number and belongs in your net-proceeds planning from day one.",
          },
        ],
      },
      {
        slug: "burbank",
        name: "Burbank",
        region: "Valley",

        overview:
          "Burbank sits at the eastern edge of the San Fernando Valley, between the Verdugo and Santa Monica mountains, about thirteen miles north of Downtown Los Angeles. It is its own incorporated city, not part of the City of Los Angeles, which matters for everything from permitting to transfer taxes. Long known as a center of the entertainment and, historically, aircraft industries, Burbank pairs a stable, well-kept residential fabric on the valley floor with hillside homes in the Burbank Hills, and a walkable character district in Magnolia Park.",

        architecture:
          "Burbank's valley-floor housing stock is anchored by single-story California Ranch homes and bungalows, with some homes dating to the 1920s and a major build-out during the postwar period, when the GI Bill and the booming aircraft industry at Lockheed accelerated suburban housing. The city's historic-preservation materials document common types including late California Bungalow, Period Revival (Spanish and English/Tudor), early California Ranch, and a smaller number of Streamline Moderne homes. Magnolia Park, on the west side, began as a 1920s planned homes-and-shopping development and is known today for 1930s and 1940s storybook cottages, Craftsman-influenced bungalows, Spanish Revival, and Tudor Revival homes, many keeping period exteriors over updated interiors, with ADUs now common. The Burbank Hills hold larger and more architectural homes, including gated enclaves. For a buyer or seller the through-line is a generally well-preserved early-to-mid-20th-century stock, with character concentrated in pockets like Magnolia Park.",

        market: {
          intro:
            "Burbank is a steady, in-demand market valued for its location, its school district, and its proximity to the studios, and it has historically been more attainable than much of the Westside while still well above national norms. Magnolia Park character homes, valley-floor Ranch homes, and Burbank Hills properties form distinct tiers.",
          stats: [],
          scope: "",
          source: "",
        },

        activity: {
          tier1:
            "I represent buyers and sellers across Burbank, from Magnolia Park character homes to valley-floor Ranch homes and Burbank Hills properties. Because Burbank is its own city with its own process, knowing how a transaction here differs from one in the City of Los Angeles is part of representing it well, and the post-offer stretch remains where I focus.",
          tier2: "",
        },

        guidance:
          "The most important structural fact in Burbank is that it is its own incorporated city. Permitting, local rules, and transfer taxes follow Burbank's framework, not the City of Los Angeles's, and the Measure ULA transfer tax that applies inside the City of LA does not apply to a Burbank sale. Beyond that, the guidance is tier-specific. In Magnolia Park, period character and the condition behind an updated interior matter, and ADUs are common enough to be part of value conversations. On the valley floor, the mid-century Ranch stock and lot specifics lead. In the hills, the usual slope and access considerations apply. Across all of them I treat the inspection and the post-offer window as where the outcome is decided.",

        faq: [
          {
            question: "What kinds of homes does Burbank have?",
            answer:
              "Primarily single-story California Ranch homes and bungalows on the valley floor, with some 1920s homes, plus Period Revival Spanish and Tudor homes and a smaller number of Streamline Moderne. Magnolia Park adds 1930s and 1940s storybook cottages, Craftsman bungalows, and Spanish and Tudor Revival homes. The Burbank Hills hold larger and more architectural properties.",
          },
          {
            question: "What makes Magnolia Park distinct?",
            answer:
              "It started as a 1920s planned homes-and-shopping development and retains a concentration of character homes from the 1930s and 1940s, many with preserved period exteriors and updated interiors, alongside a walkable boulevard of independent shops. ADUs are common, which can factor into value and use.",
          },
          {
            question: "Does Measure ULA apply to a Burbank sale?",
            answer:
              "Burbank is its own city, separate from the City of Los Angeles, so the City of LA's Measure ULA transfer tax does not apply the way it would on a sale inside LA city limits. The exact transfer-tax treatment is worth confirming for your specific sale, but the headline is that Burbank is governed by its own framework.",
          },
          {
            question: "Why do so many buyers want Burbank specifically?",
            answer:
              "Common reasons include its proximity to the major studios, its school district, and a location with strong access to the rest of the region, often at prices more attainable than comparable Westside areas. What that looks like in current numbers is worth pulling fresh.",
          },
          {
            question: "I want a home with an ADU or ADU potential. Is Burbank good for that?",
            answer:
              "ADUs are already common in areas like Magnolia Park, and ADU potential is a frequent part of the value conversation here. Whether a specific property can add or already has a compliant ADU depends on the lot and Burbank's rules, which is worth checking property by property.",
          },
        ],
      },
      {
        slug: "west-hollywood",
        name: "West Hollywood",
        region: "Westside",

        overview:
          "West Hollywood is a small, dense, independent city wedged between Beverly Hills, Hollywood, and the Hollywood Hills, with its own government, its own rules, and a housing character distinct from the City of Los Angeles around it. It is known for one of the region's richest concentrations of 1920s courtyard apartments and Spanish Revival design, a largely multifamily and condo housing fabric, and a strong rent-control framework. For buyers and sellers it is a market where the property type, condominium versus income property versus the rarer single-family home, and the city's own regulations drive the conversation.",

        architecture:
          "West Hollywood's signature housing type is the 1920s courtyard apartment, and the city protects a notable concentration of them, including a Courtyard Thematic District, where period-revival buildings arrange individual units around shared landscaped outdoor space. The Fountain corridor in particular holds elaborate courtyard designs, and celebrated examples like the Zwebell-designed Spanish and Andalusian courtyard buildings date to the mid-1920s. Beyond the courtyards, the stock runs to Spanish Revival bungalows and bungalow courts, mid-century apartment buildings and individual modernist homes by noted architects, and later condominium development, with single-family houses comparatively scarce and concentrated in specific pockets. Some historic buildings are individually significant and, where designated, may carry Mills Act tax considerations. The practical point is that West Hollywood is largely a multifamily and condo city with a deep historic apartment fabric, which shapes nearly every transaction.",

        market: {
          intro:
            "West Hollywood is a desirable, supply-constrained Westside-adjacent market dominated by condominiums and income properties, with single-family homes a scarce and premium segment. Condos, multifamily income buildings, and the rare house behave as distinct markets. Rent-control status materially affects the value and analysis of income property.",
          stats: [
            { label: "Median sold price", value: "$2,495,065" },
            { label: "Average days on market", value: "65" },
            { label: "Sale-to-list ratio", value: "97.73%" },
          ],
          scope:
            "Single-family homes only (a thin slice of a mostly-condo market; read alongside condo activity).",
          source: "Combined LA Westside MLS",
        },

        activity: {
          tier1:
            "I represent buyers and sellers in West Hollywood across its condo, income-property, and single-family segments. The city's own regulatory framework and its heavily multifamily stock are exactly the kind of terrain where careful, detail-oriented representation matters, and where my investor's lens is useful on the income-property side. The post-offer discipline I am known for applies across all of it.",
          tier2:
            "Recent West Hollywood sales include three condominium closings between $715,000 and $941,444, in the multifamily stock that defines the area.",
        },

        guidance:
          "Two things define guidance in West Hollywood. First, it is its own city with its own rules, including a significant rent-control framework, so a transaction here does not follow City of Los Angeles regulations, and an income property's tenancies and rent-regulated status are central to its value, not a footnote. For an investor that analysis is the deal. Second, much of the stock is historic multifamily, where building condition, HOA health on condos, and any historic designation (which can bring both review requirements and potential Mills Act savings) all matter. I look at income property the way an investor does, since I invest myself, and on every property type I treat the inspection and the post-offer window as where the outcome is protected.",

        faq: [
          {
            question: "What kinds of homes does West Hollywood have?",
            answer:
              "Predominantly condominiums and multifamily income properties, with a deep stock of 1920s Spanish Revival courtyard apartments, bungalow courts, mid-century apartment buildings, and individual modernist homes. Single-family houses exist but are comparatively scarce and concentrated in certain pockets.",
          },
          {
            question: "Is West Hollywood mostly condos and apartments?",
            answer:
              "Largely, yes. It is a dense, largely multifamily and condo city with a celebrated historic apartment fabric. That shapes what is available, how it is priced, and what you are analyzing, whether you are buying a place to live or an income property.",
          },
          {
            question: "How does rent control affect buying income property here?",
            answer:
              "Significantly. West Hollywood has its own rent-control framework, and a building's existing tenancies and rent-regulated status are central to its value and its math. For an investor this is the heart of the analysis, and it is the kind of evaluation I run as someone who invests in property myself. Current specifics should be confirmed for the building in question.",
          },
          {
            question: "Does West Hollywood follow City of Los Angeles rules?",
            answer:
              "No. West Hollywood is its own incorporated city with its own government and regulations. That affects process, local rules, and how some taxes and tenant protections work, which is why local knowledge of West Hollywood specifically matters here.",
          },
          {
            question: "What is a courtyard apartment and why does it come up so often?",
            answer:
              "It is a 1920s-rooted housing type where individual units arrange around a shared landscaped courtyard, and West Hollywood has one of the region's best concentrations, some in a protected thematic district. If you are buying one as a residence or an investment, its historic status and any associated requirements or tax programs are part of the picture.",
          },
        ],
      },
      {
        slug: "santa-monica",
        name: "Santa Monica",
        region: "Westside",

        overview:
          "Santa Monica is a coastal city on the western edge of Los Angeles County, independent of the City of Los Angeles, with its own government and a strong regulatory framework. It pairs some of the region's most valuable residential real estate with a dense and historically significant stock of apartments and courtyard housing, and it operates one of California's more established rent-control regimes. The market splits sharply by geography and by property type, from estate-scale homes north of Montana to condos and income properties closer to the core, which makes knowing which Santa Monica you are in essential.",

        architecture:
          "Santa Monica's housing stock spans early-20th-century single-family homes, including 1920s Spanish-style bungalows in enclaves like Sunset Park, and a deep and historically important body of multifamily housing. As the region's population boomed in the 1920s, single-family homes and tourist hotels gave way to duplexes, bungalow courts, and apartment buildings, and the city retains a significant collection of bungalow courts citywide along with notable courtyard-apartment concentrations such as the San Vicente Courtyard Apartments Historic District, where Streamline Moderne, Hollywood Regency, Vernacular Modern, and Minimal Traditional buildings arrange units around shared landscaped courtyards. The single-family tiers range from estate-scale homes north of Montana to more modest homes in areas like Sunset Park and the Pico neighborhood. The result is a market with two strong and distinct halves: high-value single-family in defined enclaves, and a deep historic multifamily fabric, much of it rent-regulated.",

        market: {
          intro:
            "Santa Monica is among the region's most valuable and supply-constrained coastal markets, with sharp differences by tier. North of Montana single-family, other single-family enclaves, condos, and rent-regulated income property each behave as their own market. Rent-control status materially affects income-property value.",
          stats: [],
          scope: "",
          source: "",
        },

        activity: {
          tier1:
            "I represent buyers and sellers in Santa Monica across its single-family, condo, and income-property segments. A market this tiered and this regulated rewards precise representation, and my investor's lens is directly useful on the rent-regulated income-property side. As everywhere, I treat the post-offer window as where the deal is protected, and the larger sums in this market make that discipline matter more.",
          tier2:
            "Recent Santa Monica activity includes a condominium closing at $842,900.",
        },

        guidance:
          "Santa Monica guidance starts with two facts. First, it is its own city with its own strong regulatory and rent-control framework, so transactions do not follow City of Los Angeles rules, and on income property the tenancies and rent-regulated status are central to value rather than incidental. For an investor, that is the analysis. Second, the single-family market is sharply tiered, and an estate north of Montana, a Sunset Park bungalow, and a condo near the core are different markets that should not be priced or shopped interchangeably. Layer in a deep historic multifamily fabric, where building condition, any historic designation, and rent regulation all bear on value, and the need for genuinely local, property-type-specific guidance is clear. I evaluate income property as an investor would, since I invest myself, and across every type I concentrate on the inspection and the renegotiation that follow an accepted offer.",

        faq: [
          {
            question: "What kinds of homes does Santa Monica have?",
            answer:
              "A wide range across two strong halves: single-family homes from 1920s Spanish bungalows in areas like Sunset Park to estate-scale houses north of Montana, and a deep historic multifamily stock of bungalow courts and courtyard apartments, much of it rent-regulated.",
          },
          {
            question: "What does \"north of Montana\" mean for pricing?",
            answer:
              "North of Montana is one of Santa Monica's most valuable single-family enclaves, and it prices well above other tiers in the city. Because the market is so tiered, an estate there, a Sunset Park home, and a condo near the core are effectively different markets, and lumping them together produces misleading numbers.",
          },
          {
            question: "How does rent control affect buying income property here?",
            answer:
              "Substantially. Santa Monica has one of California's more established rent-control frameworks, and an income building's existing tenancies and rent-regulated status are central to its value and its math. That analysis is the deal for an investor, and it is the kind of evaluation I run as a property investor myself. Confirm current specifics for the building in question.",
          },
          {
            question: "Does Santa Monica follow City of Los Angeles rules?",
            answer:
              "No. Santa Monica is its own incorporated city with its own government, regulations, and rent-control regime. The City of Los Angeles's rules, including Measure ULA, do not govern a Santa Monica transaction, though Santa Monica has its own framework to understand. Local, city-specific knowledge matters here.",
          },
          {
            question: "Is Santa Monica only for ultra-high-end buyers?",
            answer:
              "No. While north of Montana and the coastal tiers are among the region's priciest, the city also has more modest single-family enclaves and a large stock of condos and apartments. The range is wide, and the right starting point is the tier and property type that fit your goals.",
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
    quickLinksExtra: [
      { label: "FAQ", href: "/faq" },
      { label: "Neighborhoods", href: "/neighborhoods" },
    ],
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
