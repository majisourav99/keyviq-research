export type ServiceDetailBlock = {
  title: string;
  body: string;
  bullets: string[];
};

export type Service = {
  slug: string;
  icon: string;
  image: string;
  tag: string;
  title: string;
  shortDescription: string;
  cardBullets: string[];
  heroTagline: string;
  whyItMattersTitle: string;
  whyItMattersBody: string[];
  whatYoullGet: { icon: string; title: string; body: string }[];
  detailBlocks: ServiceDetailBlock[];
  howItWorks: { title: string; body: string }[];
  whyChooseUs: string[];
};

export const services: Service[] = [
  {
    slug: "healthcare-pharma-insights",
    icon: "BarChart3",
    image: "serviceHealthcare",
    tag: "TOP PRIORITY",
    title: "Healthcare & Pharma Insights",
    shortDescription:
      "The highest-margin niche we serve. Strict data compliance, double-verified feedback from real HCPs and patients. Enterprise budgets, long-term relationships, low AI-disruption risk.",
    cardBullets: [
      "HCP Panel Recruitment",
      "Patient Experience Studies",
      "Regulatory-Compliant Data",
      "Pharma Competitive Intel",
    ],
    heroTagline:
      "Regulatory-grade healthcare and pharma research, built on verified HCP and patient panels with a full anti-fraud audit trail.",
    whyItMattersTitle: "Why Healthcare & Pharma Research Matters",
    whyItMattersBody: [
      "Compliance failures and fabricated respondents are the two things that can sink a pharma study. Traditional panels can't prove a respondent is really a licensed HCP; pure AI tools can't be trusted with regulated data at all.",
      "KEYVIQ verifies every HCP and patient respondent through hardware fingerprinting and GPS-lock, then routes findings through a human expert review before they reach your regulatory or medical affairs team.",
    ],
    whatYoullGet: [
      { icon: "ShieldCheck", title: "HCP Panel Recruitment", body: "Verified physicians and specialists, screened and license-checked before they enter your study." },
      { icon: "ClipboardCheck", title: "Patient Experience Studies", body: "Structured, compliant patient journey research across therapeutic areas." },
      { icon: "BarChart3", title: "Pharma Competitive Intel", body: "Positioning and messaging benchmarks against named competitor products." },
    ],
    detailBlocks: [
      {
        title: "HCP Panel Recruitment",
        body: "Real physicians, verified before they respond.",
        bullets: [
          "License and specialty verification for every HCP respondent",
          "Access to niche specialties across 50+ countries",
          "Full audit trail for regulatory submission",
        ],
      },
      {
        title: "Patient Experience Studies",
        body: "Understand the patient journey without guesswork.",
        bullets: [
          "Condition-specific screening and recruitment",
          "Compliant handling of sensitive health data",
          "Longitudinal tracking across treatment stages",
        ],
      },
      {
        title: "Regulatory-Compliant Data",
        body: "Data your legal and medical affairs teams can stand behind.",
        bullets: [
          "GPS and device-fingerprint verification on every submission",
          "Documented chain of custody from response to report",
          "Human expert sign-off before final delivery",
        ],
      },
    ],
    howItWorks: [
      { title: "Share Your Study Objectives", body: "Tell us the therapeutic area, respondent profile, and compliance constraints." },
      { title: "Panel Feasibility Check", body: "We confirm verified HCP/patient availability within 48 hours." },
      { title: "Fielding with Live Fraud Scrubbing", body: "AI screens every response in real time; our team reviews flags manually." },
      { title: "Expert Analysis Deck", body: "A senior researcher delivers findings with regulatory-ready documentation." },
    ],
    whyChooseUs: [
      "Verified HCP and patient panels, not self-declared respondents",
      "Full audit trail suitable for regulatory review",
      "Senior human review on every deliverable",
      "Enterprise-grade confidentiality and data handling",
    ],
  },
  {
    slug: "ai-llm-training-data-panels",
    icon: "Cpu",
    image: "serviceAiLlm",
    tag: "HIGH GROWTH",
    title: "AI & LLM Training Data Panels",
    shortDescription:
      "Human-annotated, fraud-scrubbed training and evaluation data for LLM and AI teams who can't afford to train on garbage.",
    cardBullets: [
      "Human-in-the-Loop Annotation",
      "Model Evaluation Panels",
      "RLHF Preference Data",
      "Domain Expert Review",
    ],
    heroTagline:
      "Model quality is a data quality problem. KEYVIQ supplies human-verified annotation, evaluation, and preference data your model can actually trust.",
    whyItMattersTitle: "Why Verified Training Data Matters",
    whyItMattersBody: [
      "Crowdsourced annotation platforms are flooded with bot traffic and low-effort responses — and it shows up in model quality months later, when it's expensive to fix.",
      "KEYVIQ applies the same anti-fraud stack we use in market research to AI data pipelines: every annotator is device-fingerprinted and GPS-verified, with domain experts reviewing edge cases.",
    ],
    whatYoullGet: [
      { icon: "Cpu", title: "Human-in-the-Loop Annotation", body: "Verified annotators labeling text, image, and audio data to your spec." },
      { icon: "Sparkles", title: "RLHF Preference Data", body: "Structured pairwise comparisons for reinforcement learning from human feedback." },
      { icon: "ClipboardCheck", title: "Model Evaluation Panels", body: "Independent human evaluation of model outputs against your quality rubric." },
    ],
    detailBlocks: [
      {
        title: "Human-in-the-Loop Annotation",
        body: "Labeling you can trace back to a real, verified person.",
        bullets: [
          "Device-fingerprinted and GPS-verified annotator pool",
          "Custom annotation guidelines and QA rubrics",
          "Inter-annotator agreement reporting",
        ],
      },
      {
        title: "RLHF Preference Data",
        body: "Preference signal without the noise.",
        bullets: [
          "Pairwise and ranked-choice comparison studies",
          "Domain-expert review layered on top of general annotators",
          "Delivery in your preferred training data format",
        ],
      },
      {
        title: "Model Evaluation Panels",
        body: "Know how your model performs with real humans, not just benchmarks.",
        bullets: [
          "Blind evaluation against your quality rubric",
          "Segment results by geography, language, and use case",
          "Fraud-scrubbed to remove low-effort raters",
        ],
      },
    ],
    howItWorks: [
      { title: "Define Your Data Need", body: "Tell us the task — annotation, RLHF, or evaluation — and your quality bar." },
      { title: "Pilot Batch", body: "We run a small verified batch so you can validate quality before scaling." },
      { title: "Scaled Fielding", body: "Full-volume data collection with live fraud scrubbing and QA sampling." },
      { title: "Delivery & Reporting", body: "Structured data delivery plus a quality report from our research team." },
    ],
    whyChooseUs: [
      "The same anti-fraud stack used in our market research panels",
      "Domain experts available for specialized or technical content",
      "Pilot-first approach so you validate quality before scaling spend",
      "Delivery formats built for ML pipelines, not just spreadsheets",
    ],
  },
  {
    slug: "b2b-saas-tech-ux-research",
    icon: "Users",
    image: "serviceB2bUx",
    tag: "ENTERPRISE",
    title: "B2B SaaS & Tech UX Research",
    shortDescription:
      "Usability testing, product-market fit studies, and buyer research for SaaS and tech companies shipping to enterprise customers.",
    cardBullets: [
      "Usability Testing",
      "Product-Market Fit Studies",
      "Buyer Committee Research",
      "Onboarding & Retention Analysis",
    ],
    heroTagline:
      "Ship features enterprise buyers actually want. We test with your real ICP, not a generic consumer panel.",
    whyItMattersTitle: "Why B2B UX Research Matters",
    whyItMattersBody: [
      "B2B buying committees are harder to reach and easier to mis-read than consumer audiences — a feature that tests well with five friendly users can still fail in procurement.",
      "We recruit verified professionals matching your actual ICP — by role, seniority, and industry — and combine usability testing with buying-committee-level research.",
    ],
    whatYoullGet: [
      { icon: "Users", title: "Usability Testing", body: "Moderated and unmoderated sessions with users matching your exact ICP." },
      { icon: "BarChart3", title: "Product-Market Fit Studies", body: "Structured PMF surveys and win/loss analysis across your pipeline." },
      { icon: "ClipboardCheck", title: "Onboarding & Retention Analysis", body: "Identify where new users stall and where champions are made." },
    ],
    detailBlocks: [
      {
        title: "Usability Testing",
        body: "Test with the people who'll actually buy it.",
        bullets: [
          "Recruitment filtered by role, seniority, and industry",
          "Moderated and unmoderated formats available",
          "Findings mapped directly to roadmap priorities",
        ],
      },
      {
        title: "Product-Market Fit Studies",
        body: "Know if you're building the right thing before you scale GTM.",
        bullets: [
          "Sean Ellis-style PMF surveys and segmentation",
          "Win/loss interviews with closed-won and closed-lost accounts",
          "Competitive displacement analysis",
        ],
      },
      {
        title: "Buyer Committee Research",
        body: "Understand every stakeholder in the deal, not just your champion.",
        bullets: [
          "Mapped research across economic, technical, and end-user buyers",
          "Objection and procurement-friction analysis",
          "Messaging recommendations by stakeholder type",
        ],
      },
    ],
    howItWorks: [
      { title: "Define Your ICP", body: "Share target roles, seniority, industries, and company size." },
      { title: "Verified Recruitment", body: "We source and screen respondents matching your exact criteria." },
      { title: "Research Fielding", body: "Usability sessions, surveys, or interviews run on your timeline." },
      { title: "Roadmap-Ready Findings", body: "A prioritized findings deck mapped to product and GTM decisions." },
    ],
    whyChooseUs: [
      "Recruitment matched to real B2B buying committees, not generic panels",
      "Findings delivered as roadmap-ready priorities, not raw transcripts",
      "Experience across PLG and enterprise sales-led SaaS",
      "Fast turnaround built around sprint and release cycles",
    ],
  },
  {
    slug: "brand-perception-equity",
    icon: "Eye",
    image: "serviceBrand",
    tag: "RESEARCH",
    title: "Brand Perception & Equity",
    shortDescription:
      "Know how your brand is actually perceived — not how you hope it is — with verified sentiment and positioning research.",
    cardBullets: [
      "Brand Awareness Tracking",
      "Positioning & Perceptual Mapping",
      "Reputation Monitoring",
      "Competitive Brand Benchmarking",
    ],
    heroTagline:
      "Your brand is defined by perception, not intention. We measure how the market actually sees you, with fraud-scrubbed data behind every number.",
    whyItMattersTitle: "Why Brand Perception Research Matters",
    whyItMattersBody: [
      "Companies routinely invest in a brand identity they believe is landing — without evidence of how it's actually received in market.",
      "KEYVIQ combines structured brand studies with verified respondent panels, so every perception score is backed by a real, checkable human.",
    ],
    whatYoullGet: [
      { icon: "Eye", title: "Brand Awareness Tracking", body: "Aided and unaided awareness measured against named competitors." },
      { icon: "BarChart3", title: "Positioning & Perceptual Mapping", body: "Map where your brand sits on the attributes buyers actually care about." },
      { icon: "ShieldCheck", title: "Reputation Monitoring", body: "Ongoing sentiment tracking across review and social channels." },
    ],
    detailBlocks: [
      {
        title: "Brand Awareness Tracking",
        body: "Know where you stand in the customer's mind.",
        bullets: [
          "Aided and unaided awareness by segment",
          "Recall benchmarked against category competitors",
          "Tracked over time and by campaign flight",
        ],
      },
      {
        title: "Positioning & Perceptual Mapping",
        body: "See your brand the way the market does.",
        bullets: [
          "Perceptual maps across the attributes that drive purchase",
          "Gap analysis between intended and perceived positioning",
          "Clustering to reveal your true competitive set",
        ],
      },
      {
        title: "Reputation Monitoring",
        body: "Catch sentiment shifts before they escalate.",
        bullets: [
          "Ongoing tracking across review, social, and survey channels",
          "Anomaly flags for emerging reputation risk",
          "Rolling brand health score for leadership reporting",
        ],
      },
    ],
    howItWorks: [
      { title: "Share Your Brand Objectives", body: "Tell us what you want to know and who you compete against." },
      { title: "Define Attributes to Measure", body: "Agree on the brand attributes and channels that matter most." },
      { title: "Run the Perception Study", body: "Fielded with verified respondents and live fraud scrubbing." },
      { title: "Brand Health Report", body: "A clear picture of perception with prioritized next steps." },
    ],
    whyChooseUs: [
      "Perception measured with evidence, not internal assumption",
      "Verified respondent panels behind every data point",
      "Positioning maps that reveal your true competitive set",
      "Ongoing monitoring available, not just a one-time snapshot",
    ],
  },
  {
    slug: "sustainability-esg-research",
    icon: "Leaf",
    image: "serviceSustainability",
    tag: "EARLY MOVER",
    title: "Sustainability & ESG Research",
    shortDescription:
      "Investor- and regulator-grade ESG research, backed by verified data collection your reporting team can defend.",
    cardBullets: [
      "ESG Materiality Assessments",
      "Consumer Sustainability Sentiment",
      "Supply Chain Impact Studies",
      "ESG Disclosure Benchmarking",
    ],
    heroTagline:
      "ESG claims get scrutinized harder every year. Ground yours in verified, defensible primary research.",
    whyItMattersTitle: "Why ESG Research Matters Now",
    whyItMattersBody: [
      "Regulators and investors are done accepting ESG claims at face value — and greenwashing accusations can undo years of brand equity in a single news cycle.",
      "KEYVIQ pairs materiality-assessment methodology with our verified respondent stack, so every sustainability claim you make is backed by defensible primary data.",
    ],
    whatYoullGet: [
      { icon: "Leaf", title: "ESG Materiality Assessments", body: "Stakeholder-weighted materiality studies aligned to reporting frameworks." },
      { icon: "BarChart3", title: "Consumer Sustainability Sentiment", body: "Understand what your customers actually expect and will pay for." },
      { icon: "ShieldCheck", title: "ESG Disclosure Benchmarking", body: "See how your disclosures compare against category peers." },
    ],
    detailBlocks: [
      {
        title: "ESG Materiality Assessments",
        body: "Focus reporting on what stakeholders actually care about.",
        bullets: [
          "Stakeholder surveys across investors, customers, and employees",
          "Materiality matrix aligned to GRI/SASB-style frameworks",
          "Prioritized recommendations for your reporting team",
        ],
      },
      {
        title: "Consumer Sustainability Sentiment",
        body: "Separate genuine demand from stated preference.",
        bullets: [
          "Willingness-to-pay studies for sustainable alternatives",
          "Segment sustainability attitudes by demographic and geography",
          "Track sentiment shifts year over year",
        ],
      },
      {
        title: "Supply Chain Impact Studies",
        body: "Understand impact beyond your own four walls.",
        bullets: [
          "Supplier and partner survey fielding",
          "Regional impact assessments across your footprint",
          "Data structured for third-party audit review",
        ],
      },
    ],
    howItWorks: [
      { title: "Define Your Reporting Need", body: "Tell us your framework, timeline, and stakeholder groups." },
      { title: "Stakeholder Mapping", body: "We identify and recruit the right respondent groups." },
      { title: "Verified Data Collection", body: "Fielding with the same anti-fraud stack used across KEYVIQ studies." },
      { title: "Audit-Ready Report", body: "Findings delivered in a format your reporting and legal teams can use directly." },
    ],
    whyChooseUs: [
      "Methodology aligned to recognized ESG reporting frameworks",
      "Verified respondents your auditors can trust",
      "Experience across manufacturing, retail, and energy sectors",
      "Data structured for direct use in disclosure documents",
    ],
  },
  {
    slug: "on-site-digital-fieldwork",
    icon: "Compass",
    image: "serviceFieldwork",
    tag: "CORE METHOD",
    title: "On-Site & Digital Fieldwork",
    shortDescription:
      "The core method behind every KEYVIQ study — human-supervised fieldwork, verified in real time, wherever your market is.",
    cardBullets: [
      "In-Person Intercepts",
      "Digital Ethnography",
      "Mystery Shopping",
      "Real-Time Fraud Scrubbing",
    ],
    heroTagline:
      "Every KEYVIQ study runs on the same fieldwork backbone: human-supervised collection, verified device-by-device, in over 50 countries.",
    whyItMattersTitle: "Why Fieldwork Quality Matters",
    whyItMattersBody: [
      "Every research method — surveys, interviews, panels — is only as good as the fieldwork underneath it. Weak fieldwork means fabricated responses, duplicate submissions, and quotas quietly backfilled with junk data.",
      "KEYVIQ runs on-site and digital fieldwork with local human supervisors in market, layered with GPS-lock and device fingerprinting on every single submission.",
    ],
    whatYoullGet: [
      { icon: "Compass", title: "In-Person Intercepts", body: "Local, trained fieldworkers running intercepts and shop-alongs in market." },
      { icon: "Cpu", title: "Digital Ethnography", body: "Remote, verified observation of real usage and purchase behavior." },
      { icon: "ShieldCheck", title: "Real-Time Fraud Scrubbing", body: "Every submission checked against device, IP, and location signals live." },
    ],
    detailBlocks: [
      {
        title: "In-Person Intercepts",
        body: "Real conversations, in the moment of decision.",
        bullets: [
          "Trained local fieldworkers, not outsourced click-farms",
          "Shop-along and point-of-purchase intercepts",
          "Supervisor sign-off on every fielding day",
        ],
      },
      {
        title: "Digital Ethnography",
        body: "See how people actually use your product, not how they say they do.",
        bullets: [
          "Remote diary studies and screen-recorded sessions",
          "Verified participant identity via device fingerprinting",
          "Thematic analysis delivered alongside raw footage",
        ],
      },
      {
        title: "Mystery Shopping",
        body: "An honest read on the frontline experience.",
        bullets: [
          "Trained shoppers briefed to your exact evaluation criteria",
          "GPS-verified visit timestamps and locations",
          "Scorecards benchmarked across locations or competitors",
        ],
      },
    ],
    howItWorks: [
      { title: "Define Fieldwork Scope", body: "Markets, methodology, and sample size for your study." },
      { title: "Local Team Assignment", body: "We staff verified, trained fieldworkers in each market." },
      { title: "Live-Monitored Collection", body: "Fraud scrubbing and supervisor review run throughout fielding." },
      { title: "Verified Data Handoff", body: "Clean, audit-ready data delivered with a full verification log." },
    ],
    whyChooseUs: [
      "The verified fieldwork backbone underneath every KEYVIQ service",
      "Local, trained fieldworkers in 50+ countries",
      "Real-time fraud scrubbing, not after-the-fact cleanup",
      "Full verification log delivered with every dataset",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
