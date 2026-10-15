export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Join Panel", href: "/join-panel" },
];

export const stats = [
  { value: "10+", label: "Satisfied Clients" },
  { value: "10+", label: "Countries Covered" },
  { value: "10+", label: "Researches Completed" },
];

export const brand = {
  name: "KEYVIQ",
  descriptor: "Market Intelligence & Technology Solutions",
  tagline: "Intelligence Beyond Information",
  mission:
    "To deliver verified, data-driven intelligence by combining human expertise, AI, and rigorous research to empower organizations with confident decisions.",
  vision:
    "To set the global benchmark for human–AI intelligence that transforms complexity into confident action.",
};

export const heroEyebrow = "MARKET INTELLIGENCE & TECHNOLOGY SOLUTIONS";

export type HeroDetailSection = {
  title: string;
  body: string;
  label?: string;
  items?: string[];
  flow?: string[];
  highlight?: string;
  note?: string;
};

export type HeroDetail = {
  heading: string;
  subheading: string;
  intro: string[];
  sections: HeroDetailSection[];
  frameworkTitle: string;
  framework: { step: string; body: string }[];
  results?: { title: string; body: string }[];
  closing: string;
  signature: string;
};

export const heroSlides: {
  headline: string;
  subline?: string;
  image: string;
  detail: HeroDetail;
}[] = [
  {
    headline: "Human Intelligence. Verified at Every Step.",
    subline: "Verified Human Data. Quality-Controlled Execution.",
    image: "heroDashboard",
    detail: {
      heading: "Human Intelligence. Verified at Every Step.",
      subheading: "Because better decisions begin with better data.",
      intro: [
        "At KEYVIQ, data quality is not treated as a final checkpoint. It is built into the entire research lifecycle — from respondent recruitment and fieldwork to validation, processing and final delivery.",
        "Our approach combines human expertise, technology-enabled controls and structured quality assurance to deliver research data clients can confidently use for decision-making.",
      ],
      sections: [
        {
          title: "Verified Human Participation",
          body: "Research quality starts with the right respondent. Depending on study requirements, validation can include:",
          items: [
            "Identity checks",
            "Screening validation",
            "Eligibility confirmation",
            "Duplicate detection",
            "Response consistency checks",
          ],
          note: "This helps ensure insights come from relevant and genuine participants, not simply completed responses.",
        },
        {
          title: "Multi-Layer Data Validation",
          body: "Every response should make sense individually and within the overall dataset.",
          label: "Quality checks can include",
          items: [
            "Speeding",
            "Straight-lining",
            "Contradictory responses",
            "Duplicate entries",
            "Open-end quality",
            "Suspicious patterns",
            "Outlier review",
          ],
          highlight: "Automated Detection + Human Review = Stronger Data Confidence",
        },
        {
          title: "Controlled Research Operations",
          body: "Quality data also requires disciplined execution.",
          label: "KEYVIQ applies structured controls across",
          flow: ["Recruitment", "Fieldwork", "Quota Management", "Validation", "Data Processing", "Delivery"],
          note: "This helps identify issues early in the research process, rather than after the study is completed.",
        },
        {
          title: "Human Expertise + AI Intelligence",
          body: "AI can identify patterns and anomalies at scale. Experienced researchers provide the context, judgment and interpretation needed to determine what those signals actually mean.",
          flow: ["AI identifies", "Human evaluates", "Data validates", "Insight strengthens"],
        },
      ],
      frameworkTitle: "The KEYVIQ Quality Framework",
      framework: [
        { step: "Qualify", body: "Right participant" },
        { step: "Verify", body: "Identity & eligibility" },
        { step: "Monitor", body: "Fieldwork & response quality" },
        { step: "Validate", body: "Automated + human checks" },
        { step: "Deliver", body: "Research-ready data" },
      ],
      results: [
        { title: "More Reliable Data", body: "Greater confidence in who participated and how they responded." },
        { title: "Lower Quality Risk", body: "Potential issues identified before they influence final analysis." },
        { title: "Stronger Insights", body: "Better-quality inputs support more dependable business conclusions." },
        { title: "Consistent Execution", body: "Structured processes across markets, methodologies and research stages." },
      ],
      closing: "Data you can trace. Quality you can verify. Insights you can act on.",
      signature: "KEYVIQ | Human Expertise × AI Intelligence × Quality Assurance",
    },
  },
  {
    headline: "GPS-Validated. Device-Verified. Built for Data Integrity.",
    subline: "Advanced validation at every step — from respondent location to final dataset.",
    image: "heroSecurity",
    detail: {
      heading: "Verified Data. Confident Decisions.",
      subheading: "Protecting research integrity from respondent to result",
      intro: [
        "Reliable market intelligence starts with reliable data. KEYVIQ combines location validation, device intelligence and multi-layer quality controls to help identify suspicious, duplicate and inconsistent research participation before it impacts the final dataset.",
      ],
      sections: [
        {
          title: "GPS & Location Validation",
          body: "Where study requirements permit and participants provide appropriate consent, location signals can be used to validate whether respondents are participating from the intended market or research geography.",
          label: "Helps identify",
          items: ["Location mismatches", "Unusual geographic patterns", "Market eligibility issues"],
        },
        {
          title: "Device Intelligence",
          body: "Device-level signals help detect duplicate participation and unusual device behaviour while supporting respondent authentication and research quality controls.",
          label: "Helps identify",
          items: ["Duplicate devices", "Repeat participation", "Suspicious device patterns"],
        },
        {
          title: "Fraud & Quality Detection",
          body: "Multiple validation signals can be combined to flag questionable responses before they enter the final analytical dataset.",
          label: "Checks can include",
          items: [
            "Speeding",
            "Straight-lining",
            "Duplicate responses",
            "Inconsistent answers",
            "Suspicious participation patterns",
          ],
        },
        {
          title: "Human + AI Validation",
          body: "Technology identifies patterns at scale. Human research expertise adds contextual judgment where automated checks alone may not tell the full story.",
          flow: ["AI Detection", "Quality Flags", "Human Review", "Validated Dataset"],
        },
      ],
      frameworkTitle: "The KEYVIQ Difference",
      framework: [
        { step: "Verify", body: "Respondent, device and location signals" },
        { step: "Detect", body: "Duplicates, inconsistencies and suspicious patterns" },
        { step: "Validate", body: "Automated checks supported by human review" },
        { step: "Deliver", body: "Research-ready data with stronger confidence" },
      ],
      closing: "From participation to insight, every data point should earn its place.",
      signature: "KEYVIQ | Knowledge • Expertise • Yield • Verified Intelligence • Quality",
    },
  },
  {
    headline: "Global Reach. Local Understanding. Seamless Execution.",
    image: "heroTeam",
    detail: {
      heading: "Global Reach. Local Understanding. Seamless Execution.",
      subheading: "Research across markets without losing local context",
      intro: [
        "Every market behaves differently. KEYVIQ brings together multi-country research capabilities, local market expertise and centralized project management to help organizations conduct consistent research while respecting cultural, linguistic and market-specific differences.",
      ],
      sections: [
        {
          title: "Global Research Reach",
          body: "Support for single-market and multi-country studies across diverse consumer and B2B audiences.",
          label: "Capabilities include",
          items: [
            "Consumer Research",
            "B2B Research",
            "Healthcare Research",
            "Technology Research",
            "Automotive Research",
            "Specialist Audiences",
          ],
        },
        {
          title: "Local Market Expertise",
          body: "Global methodology works best when adapted to local realities. Research execution can be localized around language, culture, consumer behaviour and market dynamics.",
          label: "Localisation includes",
          items: [
            "Questionnaire adaptation",
            "Translation",
            "Cultural context",
            "Recruitment considerations",
            "Local fieldwork coordination",
          ],
        },
        {
          title: "Right Respondent. Right Market.",
          body: "Target participants according to the requirements of each study — from broad consumer audiences to difficult-to-reach professional groups.",
          label: "Audience examples",
          items: [
            "Consumers",
            "Business Decision-Makers",
            "Professionals",
            "HCPs",
            "Vehicle Owners",
            "Technology Users",
            "Industry Specialists",
          ],
        },
        {
          title: "One Integrated Research Platform",
          body: "Multi-market projects can be managed through a centralized research workflow, creating consistency across markets while simplifying coordination.",
          flow: ["One Brief", "Multiple Markets", "Consistent Quality", "Unified Insights"],
        },
      ],
      frameworkTitle: "How KEYVIQ Connects Global + Local",
      framework: [
        { step: "Design", body: "One research framework" },
        { step: "Localize", body: "Adapt for each market" },
        { step: "Execute", body: "Coordinate audiences & fieldwork" },
        { step: "Validate", body: "Apply consistent quality controls" },
        { step: "Integrate", body: "Bring markets into one view" },
      ],
      closing: "One research partner. Multiple markets. Insights grounded in local reality.",
      signature: "KEYVIQ | Global Capability × Local Intelligence × Integrated Execution",
    },
  },
];

export const aboutChecklist = [
  "Human-Supervised Research",
  "AI Fraud Scrubbing",
  "50+ Countries Coverage",
  "Zero Data Errors",
];

export const whyKeyviq = [
  {
    icon: "Globe",
    title: "Global Reach",
    body: "Operations across 50+ countries with access to vast consumer panels and deep local market expertise worldwide.",
  },
  {
    icon: "Lightbulb",
    title: "Innovative Approach",
    body: "The KEYVIQ Centaur Engine: Human Experts handle strategy & analysis. AI handles error-scrubbing, transcription & fraud detection — in perfect sync.",
  },
  {
    icon: "Award",
    title: "Proven Track Record",
    body: "274+ successful projects across 8 industries with measurable outcomes and long-term client relationships.",
  },
];

export type CaseStudy = {
  title: string;
  subtitle: string;
  image: string;
  objective: string;
  methodology: string[];
  targetGroups: string;
  countries: string[];
  outcome: {
    lead: [string, string, string];
    kind: "list" | "flow" | "formula";
    items: string[];
    note: string;
  };
};

export const industries: { icon: string; name: string; caseStudy: CaseStudy }[] = [
  {
    icon: "Wheat",
    name: "Agriculture",
    caseStudy: {
      title: "The AI-Powered Farm",
      subtitle: "Understanding farmer adoption of AI, precision agriculture & biological inputs",
      image: "/case-studies/agriculture.jpg",
      objective:
        "Understand farmer willingness to adopt AI-enabled farming, precision technologies and biological crop inputs, and identify the barriers preventing adoption.",
      methodology: [
        "Quantitative farmer survey",
        "In-depth interviews with progressive farmers",
        "Technology concept demonstration",
        "Willingness-to-pay analysis",
        "Adoption segmentation",
      ],
      targetGroups: "Farm owners, commercial farmers, agri-input users and agri-tech adopters",
      countries: ["India", "China", "USA", "Brazil"],
      outcome: {
        lead: ["Developed an", "Agricultural Adoption Map", "identifying:"],
        kind: "list",
        items: ["Early adopters", "Technology-curious farmers", "Value-driven adopters", "Traditional users"],
        note: "Insights can guide product positioning, channel strategy and technology adoption programs.",
      },
    },
  },
  {
    icon: "Leaf",
    name: "Environmental",
    caseStudy: {
      title: "From Carbon Claims to Climate Action",
      subtitle: "Mapping business attitudes toward carbon markets & nature-based solutions",
      image: "/case-studies/environmental.jpg",
      objective:
        "Explore how businesses evaluate carbon credits, nature-based solutions and environmental claims — and what determines trust and willingness to invest.",
      methodology: [
        "B2B quantitative research",
        "Sustainability-leader interviews",
        "Concept testing",
        "Carbon-credit choice exercise",
        "Stakeholder perception mapping",
      ],
      targetGroups: "Sustainability heads, procurement leaders, ESG teams, investors",
      countries: ["USA", "UK", "Germany", "India", "Singapore"],
      outcome: {
        lead: ["Identified the key", "Trust Drivers", "influencing environmental investment:"],
        kind: "flow",
        items: ["Verification", "Transparency", "Impact", "Reporting", "ROI"],
        note: "The research can support sustainability proposition design, communication strategy and market-entry planning.",
      },
    },
  },
  {
    icon: "Pill",
    name: "Pharmaceutical",
    caseStudy: {
      title: "Beyond the GLP-1 (Glucagon-Like Peptide-1) Prescription",
      subtitle: "Understanding the next generation of obesity-treatment expectations",
      image: "/case-studies/pharmaceutical.jpg",
      objective:
        "Understand patient and physician expectations around next-generation obesity treatments, including efficacy, convenience, administration and long-term treatment considerations.",
      methodology: [
        "Patient quantitative survey",
        "Physician interviews",
        "Treatment-journey mapping",
        "Product concept testing",
        "Attribute prioritization",
      ],
      targetGroups:
        "Patients considering obesity treatment, treated patients, endocrinologists, primary-care physicians",
      countries: ["USA", "UK", "Germany", "India"],
      outcome: {
        lead: ["Created a", "Treatment Decision Framework", "highlighting the relative importance of:"],
        kind: "list",
        items: [
          "Treatment effectiveness",
          "Administration frequency",
          "Side-effect concerns",
          "Convenience",
          "Physician recommendation",
          "Cost/access",
        ],
        note: "The findings can support product strategy, patient engagement and physician communication.",
      },
    },
  },
  {
    icon: "UtensilsCrossed",
    name: "Food Solutions",
    caseStudy: {
      title: "The New Functional Food Consumer",
      subtitle: "Decoding demand for protein, fibre, gut health & metabolic nutrition",
      image: "/case-studies/food-solutions.jpg",
      objective:
        "Identify consumer demand spaces for next-generation functional foods and determine which benefits are most compelling across consumer segments.",
      methodology: [
        "Online quantitative study",
        "Food concept testing",
        "Product attribute trade-off",
        "Taste/packaging evaluation",
        "Consumer segmentation",
      ],
      targetGroups: "Health-conscious consumers, fitness consumers, working professionals, parents",
      countries: ["India", "USA", "UK", "Australia"],
      outcome: {
        lead: ["Developed a", "Functional Food Opportunity Matrix", "connecting:"],
        kind: "flow",
        items: ["Consumer Need", "Benefit", "Ingredient", "Format", "Price", "Purchase Trigger"],
        note: "The study can identify whitespace opportunities for new product development and portfolio expansion.",
      },
    },
  },
  {
    icon: "Car",
    name: "Automotive",
    caseStudy: {
      title: "When the Car Becomes Software",
      subtitle: "Understanding consumer acceptance of software-defined vehicles",
      image: "/case-studies/automotive.jpg",
      objective:
        "Understand how consumers perceive software-enabled vehicle features and identify which connected functions they value enough to influence purchase or subscription decisions.",
      methodology: [
        "Multi-country quantitative survey",
        "EV/ICE owner segmentation",
        "Feature concept testing",
        "MaxDiff analysis",
        "Willingness-to-pay assessment",
      ],
      targetGroups: "EV owners, ICE owners, technology-forward car buyers, premium-car users",
      countries: ["China", "India", "Germany", "USA"],
      outcome: {
        lead: ["Created a", "Connected Vehicle Value Map", "identifying consumer priorities across:"],
        kind: "list",
        items: ["Safety", "Convenience", "Performance", "Entertainment", "Personalisation", "Subscription"],
        note: "The research can support feature prioritization, pricing and connected-service strategy.",
      },
    },
  },
  {
    icon: "Cpu",
    name: "Technology",
    caseStudy: {
      title: "The Rise of the AI Agent",
      subtitle: "Understanding enterprise adoption of agentic AI",
      image: "/case-studies/technology.jpg",
      objective:
        "Understand enterprise readiness to adopt AI agents and identify the tasks organizations are willing to delegate to autonomous AI systems.",
      methodology: [
        "CIO/CTO quantitative survey",
        "Enterprise decision-maker interviews",
        "AI-use-case prioritization",
        "Adoption-readiness assessment",
        "Risk & trust evaluation",
      ],
      targetGroups: "CIOs, CTOs, IT heads, digital transformation leaders, cybersecurity leaders",
      countries: ["USA", "UK", "India", "Germany", "Singapore"],
      outcome: {
        lead: ["Developed an", "AI Agent Adoption Index", "across:"],
        kind: "formula",
        items: ["Use Case Value", "Trust", "Risk", "Integration Complexity", "Human Oversight"],
        note: "The research can help technology providers prioritize high-potential enterprise AI applications.",
      },
    },
  },
  {
    icon: "HeartPulse",
    name: "Healthcare",
    caseStudy: {
      title: "From Digital Tools to Connected Care",
      subtitle: "Understanding the next generation of digital patient journeys",
      image: "/case-studies/healthcare.jpg",
      objective:
        "Map how patients and healthcare professionals use digital health services across the care journey and identify unmet needs.",
      methodology: [
        "Patient quantitative research",
        "Physician interviews",
        "Digital journey mapping",
        "App/platform usability testing",
        "Patient experience assessment",
      ],
      targetGroups: "Patients with chronic conditions, caregivers, physicians, hospital administrators",
      countries: ["USA", "India", "UK", "UAE"],
      outcome: {
        lead: ["Built a", "Connected Care Journey Map", "covering:"],
        kind: "flow",
        items: ["Discover", "Consult", "Diagnose", "Treat", "Monitor", "Follow-up"],
        note: "The study identifies friction points and opportunities for digital health platforms, remote monitoring and patient engagement.",
      },
    },
  },
  {
    icon: "HardHat",
    name: "Construction",
    caseStudy: {
      title: "Building the AI-Enabled Site",
      subtitle: "Understanding construction firms' readiness for AI, modular construction & digital project management",
      image: "/case-studies/construction.jpg",
      objective:
        "Assess construction companies' readiness to adopt AI-enabled project management, digital planning, automation and modular construction solutions.",
      methodology: [
        "B2B quantitative survey",
        "Contractor/developer interviews",
        "Technology concept testing",
        "Investment-intent assessment",
        "Adoption-barrier analysis",
      ],
      targetGroups: "Developers, contractors, architects, project managers, infrastructure companies",
      countries: ["USA", "India", "UAE", "UK", "Saudi Arabia"],
      outcome: {
        lead: ["Created a", "Construction Technology Adoption Matrix", "mapping:"],
        kind: "flow",
        items: ["Business Impact", "Investment Intent", "Adoption Barrier", "Technology Priority"],
        note: "The findings can support technology vendors, construction companies and infrastructure providers in prioritizing digital investments.",
      },
    },
  },
];

export const testimonials = [
  "KEYVIQ provided us with invaluable market insights that directly shaped our expansion strategy. Their team's expertise and dedication to quality are unmatched in the industry.",
  "The anti-fraud stack alone paid for the engagement. We finally trust our panel data enough to put it in front of the board without a second review pass.",
  "Fastest scoping call we've had with any research vendor — 48 hours from first email to a custom study plan. No templates, no fluff.",
];

export const locations = [
  { flag: "🇺🇸", country: "United States", branches: 2 },
  { flag: "🇮🇳", country: "India", branches: 2 },
  { flag: "🇻🇳", country: "Vietnam", branches: 1 },
  { flag: "🇹🇭", country: "Thailand", branches: 1 },
  { flag: "🇨🇳", country: "China", branches: 1 },
  { flag: "🇲🇾", country: "Malaysia", branches: 1 },
  { flag: "🇵🇭", country: "Philippines", branches: 1 },
  { flag: "🇮🇩", country: "Indonesia", branches: 1 },
  { flag: "🇮🇹", country: "Italy", branches: 1 },
];

export const coreValues = [
  { icon: "ShieldCheck", title: "Integrity", body: "Unwavering commitment to honesty, transparency, and ethical practice in all our work." },
  { icon: "Award", title: "Excellence", body: "Pursuit of the highest standard in quality analysis and client service." },
  { icon: "Sparkles", title: "Innovation", body: "Continuous exploration of new methodologies and technologies to drive better insight." },
  { icon: "Handshake", title: "Partnership", body: "A collaborative approach to understanding client needs and delivering lasting value." },
];

export const footerColumns = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
};

export const contactInfo = {
  email: "info@keyviq.com",
  office: "4546 El Camino Real B10 #510, Los Altos, CA 94022",
};

export const consultation = {
  eyebrow: "GET STARTED",
  title: "Request a Research Consultation",
  body: "Projects start at $15,000. We deliver a fully custom research strategy — no templates. Book a free initial consultation with our senior researchers and we'll scope your study within 48 hours.",
  checklist: [
    "Free initial scoping consultation",
    "Custom strategy — no templates",
    "Anti-fraud GPS & IP-locked data",
    "Human expert final analysis deck",
  ],
};
