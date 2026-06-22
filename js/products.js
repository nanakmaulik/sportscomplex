const products = [
  {
    id: "artificial-grass",
    name: "Artificial Grass",
    category: "Sports Turf",
    shortDescription:
      "Premium synthetic grass solutions for sports fields, landscaping and institutional usage.",
    description:
      "Artificial grass is designed for long-lasting performance, low maintenance and premium visual appeal. It is suitable for football grounds, school play areas, landscaping zones, sports complexes and commercial infrastructure projects.",
    applications: [
      "Football grounds",
      "School play areas",
      "Landscaping",
      "Sports complexes",
      "Commercial open spaces",
    ],
    features: [
      "Durable synthetic fibres",
      "Low maintenance surface",
      "Weather-resistant material",
      "Professional installation support",
      "Custom thickness and density options",
    ],
    image: "assets/images/grassturf.png",
    imageLabel: "Artificial Grass",
    badge: "Featured",
    price: "Price on Request",
  },

  {
    id: "football-turf",
    name: "Football Turf",
    category: "Football Infrastructure",
    shortDescription:
      "High-performance football turf systems built for durability, grip and consistent play.",
    description:
      "Football turf systems are suitable for professional and recreational football grounds. The surface is engineered for player comfort, ball control and long-term usage under different weather conditions.",
    applications: [
      "Football stadiums",
      "Training academies",
      "School football grounds",
      "Sports clubs",
      "Community play fields",
    ],
    features: [
      "Strong grip and traction",
      "Shock absorption support",
      "UV-resistant surface",
      "Custom field size execution",
      "Suitable for heavy usage",
    ],
    image: "assets/images/footbalturf.png",
    imageLabel: "Football Turf",
    badge: "Featured",
    price: "Price on Request",
  },

  {
    id: "cricket-turf",
    name: "Cricket Turf & Pitch Solutions",
    category: "Cricket Infrastructure",
    shortDescription:
      "Cricket pitch and turf solutions for schools, academies, stadiums and practice nets.",
    description:
      "Our cricket turf and pitch systems are designed for practice areas, sports academies and institutional cricket infrastructure. The solution can be customized based on pitch usage, playing level and site requirement.",
    applications: [
      "Cricket stadiums",
      "Practice nets",
      "Sports academies",
      "School grounds",
      "Club facilities",
    ],
    features: [
      "Custom pitch preparation",
      "Durable turf surface",
      "Practice-friendly setup",
      "Suitable for indoor and outdoor nets",
      "Professional installation support",
    ],
    image: "assets/images/cricketturf.png",
    imageLabel: "Cricket Turf",
    badge: "Featured",
    price: "Price on Request",
  },

  {
    id: "box-cricket-arena",
    name: "Box Cricket Arena",
    category: "Cricket Infrastructure",
    shortDescription:
      "Professional box cricket arena development with artificial turf, safety netting, side fencing, lighting and compact play layout.",
    description:
      "Box cricket arenas are compact cricket facilities designed for schools, clubs, academies, residential societies and private sports venues. The setup includes artificial turf, side netting, fencing, lighting and a safe enclosed playing layout.",
    applications: [
      "Sports clubs",
      "Schools",
      "Cricket academies",
      "Residential societies",
      "Private sports facilities",
    ],
    features: [
      "Artificial turf surface",
      "Safety netting",
      "Side fencing",
      "LED lighting support",
      "Compact play layout",
    ],
    image: "assets/images/box-cricket.png",
    imageLabel: "Box Cricket",
    badge: "New",
    price: "Price on Request",
  },

  {
    id: "badminton-court",
    name: "Badminton Court Flooring",
    category: "Indoor Sports",
    shortDescription:
      "Professional badminton court flooring for indoor sports halls, schools and clubs.",
    description:
      "Badminton court flooring solutions are planned for proper grip, comfort and safe movement. They are suitable for institutions, private clubs, schools and indoor sports complexes.",
    applications: [
      "Indoor sports halls",
      "Schools",
      "Sports clubs",
      "Training centres",
      "Multi-purpose courts",
    ],
    features: [
      "Anti-slip surface",
      "Player comfort support",
      "Professional court marking",
      "Indoor usage ready",
      "Low maintenance flooring",
    ],
    image: "assets/images/badmintoncourt.png",
    imageLabel: "Badminton Court",
    badge: "Featured",
    price: "Price on Request",
  },

  {
    id: "basketball-court",
    name: "Basketball Court",
    category: "Indoor Sports",
    shortDescription:
      "Indoor and outdoor basketball court development with sports flooring, marking, hoops and lighting support.",
    description:
      "Basketball court solutions include sports flooring, accurate court marking, hoop installation, lighting support and multipurpose hall integration. These courts can be developed for schools, clubs, academies and sports complexes.",
    applications: [
      "Indoor sports halls",
      "Schools",
      "Sports clubs",
      "Basketball academies",
      "Multipurpose sports facilities",
    ],
    features: [
      "Sports flooring",
      "Court line marking",
      "Hoop system support",
      "Indoor and outdoor options",
      "Lighting support",
    ],
    image: "assets/images/basketballcourt.png",
    imageLabel: "Basketball Court",
    badge: "Featured",
    price: "Price on Request",
  },

  {
    id: "pickleball-court",
    name: "Pickleball Court",
    category: "Indoor Sports",
    shortDescription:
      "Premium pickleball court development for clubs, schools, societies and recreational sports facilities.",
    description:
      "Pickleball courts are designed for compact, high-engagement sports spaces. The setup includes durable court surfacing, net system, accurate markings, fencing support and professional finishing for recreational and institutional use.",
    applications: [
      "Sports clubs",
      "Schools",
      "Residential societies",
      "Recreational facilities",
      "Private sports venues",
    ],
    features: [
      "Durable court surface",
      "Professional line marking",
      "Net system setup",
      "Indoor and outdoor options",
      "Low maintenance finish",
    ],
    image: "assets/images/pickleball.png",
    imageLabel: "Pickleball Court",
    badge: "New",
    price: "Price on Request",
  },

  {
    id: "squash-court",
    name: "Squash Court",
    category: "Indoor Sports",
    shortDescription:
      "Modern squash court construction with glass wall options, wooden flooring, wall systems and professional lighting.",
    description:
      "Squash court infrastructure includes sports-grade wooden flooring, front and side wall systems, glass wall options, lighting, markings and complete court finishing for clubs, institutions and indoor sports complexes.",
    applications: [
      "Sports clubs",
      "Indoor sports complexes",
      "Schools",
      "Universities",
      "Private sports facilities",
    ],
    features: [
      "Glass wall option",
      "Wooden sports flooring",
      "Professional court marking",
      "Wall panel system",
      "Court lighting",
    ],
    image: "assets/images/squashcourt.png",
    imageLabel: "Squash Court",
    badge: "Featured",
    price: "Price on Request",
  },

  {
    id: "lawn-tennis-court",
    name: "Lawn Tennis Court",
    category: "Outdoor Sports",
    shortDescription:
      "Professional lawn tennis court development with sports surfacing, fencing, net systems and facility planning support.",
    description:
      "Lawn tennis court development includes surface preparation, court finishing, line marking, net system, fencing and lighting support. The solution is suitable for clubs, schools, resorts, institutions and private sports facilities.",
    applications: [
      "Sports clubs",
      "Schools",
      "Resorts",
      "Universities",
      "Private sports facilities",
    ],
    features: [
      "Sports-grade surface",
      "Court line marking",
      "Net system",
      "Fencing support",
      "Outdoor durability",
    ],
    image: "assets/images/lawntennis.png",
    imageLabel: "Lawn Tennis Court",
    badge: "Featured",
    price: "Price on Request",
  },

  {
    id: "swimming-pool",
    name: "Swimming Pool Infrastructure",
    category: "Pool Infrastructure",
    shortDescription:
      "Commercial and institutional swimming pool construction and infrastructure support.",
    description:
      "Swimming pool infrastructure services include planning, setup, finishing and support for institutional and commercial pools. The solution can be tailored for schools, clubs, resorts and sports complexes.",
    applications: [
      "Schools",
      "Sports complexes",
      "Clubs",
      "Resorts",
      "Institutional facilities",
    ],
    features: [
      "Custom pool planning",
      "Commercial-grade execution",
      "Finishing support",
      "Safety-focused design",
      "Infrastructure setup assistance",
    ],
    image: "assets/images/swimmingpool.png",
    imageLabel: "Swimming Pool",
    badge: "Featured",
    price: "Price on Request",
  },

  {
    id: "athletic-track",
    name: "Synthetic Athletic Track",
    category: "Athletic Infrastructure",
    shortDescription:
      "Synthetic athletic track systems for stadiums, institutions and training facilities.",
    description:
      "Synthetic athletic tracks are designed for running, training and professional sports usage. The track system supports durability, safety and performance for institutional and stadium-level projects.",
    applications: [
      "Athletic stadiums",
      "Schools",
      "Universities",
      "Training centres",
      "Sports complexes",
    ],
    features: [
      "Durable synthetic surface",
      "Performance-focused design",
      "Weather-resistant system",
      "Professional lane marking",
      "Long-term usability",
    ],
    image: "assets/images/athleticturf.png",
    imageLabel: "Athletic Track",
    badge: "Featured",
    price: "Price on Request",
  },

  {
    id: "kids-play-area",
    name: "Kids Play Area Flooring",
    category: "Play Area Infrastructure",
    shortDescription:
      "Safe and durable flooring systems for kids play zones, schools and parks.",
    description:
      "Kids play area flooring is designed for safety, comfort and colorful visual appeal. It is ideal for schools, parks, residential projects and recreational zones.",
    applications: [
      "Schools",
      "Public parks",
      "Residential societies",
      "Kids play zones",
      "Commercial recreation areas",
    ],
    features: [
      "Soft impact surface",
      "Child-safe flooring",
      "Colorful design options",
      "Outdoor and indoor suitability",
      "Durable and easy to maintain",
    ],
    image: "assets/images/kids-play-area.png",
    imageLabel: "Kids Play Area",
    badge: "Featured",
    price: "Price on Request",
  },
];