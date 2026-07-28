export type ServiceDetailBlock = {
  title: string;
  body: string;
  bullets: string[];
  graphicLabel: string;
};

export type Service = {
  slug: string;
  icon: string;
  title: string;
  shortDescription: string;
  cardBullets: string[];
  heroTagline: string;
  whyItMattersTitle: string;
  whyItMattersBody: string[];
  whyItMattersGraphicLabel: string;
  whatYoullGet: { icon: string; title: string; body: string }[];
  detailBlocks: ServiceDetailBlock[];
  howItWorks: { title: string; body: string }[];
  whyChooseUs: string[];
};

export const services: Service[] = [
  {
    slug: "market-research",
    icon: "BarChart3",
    title: "Market Research",
    shortDescription:
      "AI-modeled analysis of consumer behavior, competitors, and emerging trends to drive confident decisions.",
    cardBullets: [
      "Consumer Behavior Analysis",
      "Competitive Intelligence",
      "Trend Forecasting",
    ],
    heroTagline:
      "Gain deeper insight into your market with AI-modeled analysis layered on rigorous research design. We help you uncover opportunities, quantify risk, and stay ahead of the competition with data your models can trust.",
    whyItMattersTitle: "Why AI-Powered Market Research Matters",
    whyItMattersBody: [
      "Markets move faster than quarterly reports can track. Without a live signal on consumer behavior and competitor moves, businesses risk decisions built on stale assumptions.",
      "Our research pairs traditional methodology with AI pattern detection, so shifts in demand and sentiment surface while there's still time to act on them.",
    ],
    whyItMattersGraphicLabel: "Signal Detection",
    whatYoullGet: [
      {
        icon: "Users",
        title: "In-depth Consumer Behavior Analysis",
        body: "Identify customer needs, motivations, and pain points using AI-clustered behavioral data.",
      },
      {
        icon: "Target",
        title: "Competitive Intelligence",
        body: "Benchmark your business against key competitors with continuously updated positioning models.",
      },
      {
        icon: "TrendingUp",
        title: "Trend Forecasting & Market Insights",
        body: "Detect emerging shifts in demand before they show up in your revenue numbers.",
      },
    ],
    detailBlocks: [
      {
        title: "Consumer Behavior Analysis",
        body: "Understand the people behind the purchase.",
        bullets: [
          "Analyze purchasing patterns and decision-making processes",
          "Segment audiences with AI clustering for sharper targeting",
          "Surface unmet needs from open-ended survey and review text",
        ],
        graphicLabel: "Behavior Clusters",
      },
      {
        title: "Competitive Intelligence",
        body: "Know exactly where you stand.",
        bullets: [
          "Identify competitors' strengths, weaknesses, and strategies",
          "Track pricing and positioning shifts on a rolling basis",
          "Discover market gaps and differentiation opportunities",
        ],
        graphicLabel: "Competitive Map",
      },
      {
        title: "Trend Forecasting",
        body: "See around the next corner.",
        bullets: [
          "Detect emerging market trends and shifts in consumer demand",
          "Leverage predictive models to anticipate industry changes",
          "Build strategies that align with long-term growth opportunities",
        ],
        graphicLabel: "Forecast Model",
      },
    ],
    howItWorks: [
      { title: "Tell Us About Your Business", body: "Share your industry, target market, and key challenges." },
      { title: "Define Your Objectives", body: "Specify the insights you need — customer, competitor, or market entry." },
      { title: "Receive a Customized Research Plan", body: "Our team designs a tailored approach powered by our AI analytics stack." },
      { title: "Get Actionable Insights", body: "Receive clear, data-backed recommendations you can apply immediately." },
    ],
    whyChooseUs: [
      "Data-driven methodologies grounded in proven research design",
      "AI-tailored insights, not generic templated reports",
      "Actionable recommendations you can apply immediately",
      "Fast turnaround without sacrificing analytical depth",
    ],
  },
  {
    slug: "market-entry-strategies",
    icon: "Globe",
    title: "Market Entry Strategies",
    shortDescription:
      "Expand into new markets with AI-backed feasibility studies, competitive analysis, and risk assessment.",
    cardBullets: [
      "Market Feasibility Studies",
      "Competitive Analysis",
      "Risk Assessment",
    ],
    heroTagline:
      "Expand your business into new markets with confidence. Expert guidance on entering new markets, backed by AI-modeled feasibility and risk data that maximize opportunity and minimize downside.",
    whyItMattersTitle: "Why Market Entry Strategy Matters",
    whyItMattersBody: [
      "Entering a new market is one of the most consequential decisions a business can make. Without proper planning, companies risk wasting resources or facing challenges they never modeled for.",
      "Our market entry service pairs on-the-ground research with AI-driven scenario modeling, helping you evaluate risk and build a foundation for sustainable growth.",
    ],
    whyItMattersGraphicLabel: "Strategic Market Expansion",
    whatYoullGet: [
      {
        icon: "Globe",
        title: "Market Feasibility Studies",
        body: "Evaluate true market potential with AI-modeled sizing, demand, and growth projections.",
      },
      {
        icon: "BarChart3",
        title: "Competitive Analysis",
        body: "Detailed analysis of positioning, pricing strategy, strengths, and market gaps.",
      },
      {
        icon: "ShieldCheck",
        title: "Risk Assessment",
        body: "Identify and mitigate financial, operational, and regulatory risk before you enter.",
      },
    ],
    detailBlocks: [
      {
        title: "Market Feasibility Studies",
        body: "Evaluate the true potential of your target market.",
        bullets: [
          "Assess market size, demand, and growth potential with predictive models",
          "Analyze customer needs and local market conditions",
          "Determine the viability of your product or service",
        ],
        graphicLabel: "Market Potential Analysis",
      },
      {
        title: "Competitive Analysis",
        body: "Understand who you're up against.",
        bullets: [
          "Identify key competitors and their market positioning",
          "Analyze pricing strategies, strengths, and weaknesses",
          "Discover gaps and opportunities for differentiation",
        ],
        graphicLabel: "Competitive Intelligence",
      },
      {
        title: "Risk Assessment",
        body: "Minimize uncertainty before entering.",
        bullets: [
          "Identify potential financial, operational, and regulatory risks",
          "Evaluate market entry barriers and challenges",
          "Develop AI-informed mitigation strategies to reduce exposure",
        ],
        graphicLabel: "Risk Mitigation Strategy",
      },
    ],
    howItWorks: [
      { title: "Share Your Expansion Goals", body: "Tell us which market you want to enter and your business objectives." },
      { title: "Define Scope & Priorities", body: "Clarify your focus areas — feasibility, competition, or risk evaluation." },
      { title: "Customized Strategy Development", body: "We design a tailored market entry plan based on data and AI-driven insight." },
      { title: "Actionable Roadmap Delivery", body: "Receive a clear, step-by-step strategy to guide your market entry." },
    ],
    whyChooseUs: [
      "Data-driven insights tailored to your business context",
      "Strategic approach focused on minimizing risk",
      "Practical, execution-ready recommendations",
      "Expertise across diverse industries and markets",
    ],
  },
  {
    slug: "product-testing-development",
    icon: "FlaskConical",
    title: "Product Testing & Development",
    shortDescription:
      "Validate concepts and features with AI-enhanced testing before you commit to full-scale launch.",
    cardBullets: [
      "Concept Testing",
      "Product Validation",
      "Feature Prioritization",
    ],
    heroTagline:
      "De-risk your roadmap. Test concepts, features, and prototypes with real consumer panels and AI-modeled response analysis before you commit engineering time and launch budget.",
    whyItMattersTitle: "Why Product Testing Matters",
    whyItMattersBody: [
      "Shipping a feature nobody wants is one of the most expensive mistakes a product team can make — in engineering time, and in market trust.",
      "Our testing pipeline combines structured consumer feedback with AI sentiment and preference modeling, so you know what to build before you build it.",
    ],
    whyItMattersGraphicLabel: "Validation Signal",
    whatYoullGet: [
      {
        icon: "Lightbulb",
        title: "Concept Testing",
        body: "Validate early-stage ideas against target segments before development begins.",
      },
      {
        icon: "FlaskConical",
        title: "Product Validation",
        body: "Stress-test usability, pricing, and messaging with real users and AI-scored feedback.",
      },
      {
        icon: "ClipboardCheck",
        title: "Feature Prioritization",
        body: "Rank your roadmap by AI-modeled impact on adoption and satisfaction.",
      },
    ],
    detailBlocks: [
      {
        title: "Concept Testing",
        body: "Validate before you build.",
        bullets: [
          "Test messaging, positioning, and value proposition early",
          "Segment reactions by AI-clustered customer profiles",
          "Kill weak concepts before they consume a roadmap quarter",
        ],
        graphicLabel: "Concept Signal",
      },
      {
        title: "Product Validation",
        body: "Confirm product-market fit with evidence.",
        bullets: [
          "Run structured usability and pricing studies",
          "Score open-ended feedback with AI sentiment analysis",
          "Benchmark against category norms and competitor products",
        ],
        graphicLabel: "Fit Score",
      },
      {
        title: "Feature Prioritization",
        body: "Build what actually moves adoption.",
        bullets: [
          "Rank features by predicted impact on retention and satisfaction",
          "Simulate roadmap trade-offs before committing resources",
          "Deliver a prioritized backlog your team can act on immediately",
        ],
        graphicLabel: "Priority Model",
      },
    ],
    howItWorks: [
      { title: "Share Your Concept or Product", body: "Tell us what you're testing and who you're testing it with." },
      { title: "Define Success Metrics", body: "Clarify what a 'go' decision looks like for your team." },
      { title: "Run the Testing Program", body: "We recruit panels, run studies, and apply AI-scored analysis to results." },
      { title: "Get a Go/No-Go Recommendation", body: "Receive a clear recommendation backed by the underlying data." },
    ],
    whyChooseUs: [
      "Fast-cycle testing that fits real product timelines",
      "AI-scored feedback removes guesswork from qualitative data",
      "Recommendations framed as go/no-go, not just observations",
      "Experience across software, physical, and hybrid products",
    ],
  },
  {
    slug: "customer-insights",
    icon: "Users",
    title: "Customer Insights",
    shortDescription:
      "Deep, AI-augmented understanding of who your customers are and what actually drives their decisions.",
    cardBullets: [
      "Segmentation Analysis",
      "Focus Groups",
      "Ethnographic Research",
    ],
    heroTagline:
      "Move past demographics into what actually drives your customers. AI-augmented segmentation and qualitative research reveal the needs behind the behavior.",
    whyItMattersTitle: "Why Customer Insights Matter",
    whyItMattersBody: [
      "Generic personas lead to generic marketing. Businesses that outgrow their competitors understand their customers at a level competitors haven't reached yet.",
      "We combine qualitative depth with AI-driven segmentation so you see both the pattern and the person behind it.",
    ],
    whyItMattersGraphicLabel: "Customer Graph",
    whatYoullGet: [
      {
        icon: "Users",
        title: "Segmentation Analysis",
        body: "AI-clustered segments based on behavior, not just demographics.",
      },
      {
        icon: "Eye",
        title: "Focus Groups",
        body: "Moderated qualitative sessions with AI-assisted theme extraction.",
      },
      {
        icon: "Sparkles",
        title: "Ethnographic Studies",
        body: "In-context observation revealing needs customers can't always articulate.",
      },
    ],
    detailBlocks: [
      {
        title: "Segmentation Analysis",
        body: "Group customers by what actually predicts behavior.",
        bullets: [
          "Build segments from behavioral and attitudinal data, not guesswork",
          "Score each segment's value and growth potential",
          "Translate segments into targeting and messaging playbooks",
        ],
        graphicLabel: "Segment Clusters",
      },
      {
        title: "Focus Groups",
        body: "Hear directly from your customers, at scale.",
        bullets: [
          "Run moderated sessions across markets and segments",
          "Apply AI-assisted transcription and theme extraction",
          "Surface quotes and patterns your team can use immediately",
        ],
        graphicLabel: "Theme Extraction",
      },
      {
        title: "Ethnographic Studies",
        body: "See the context behind the decision.",
        bullets: [
          "Observe customers in their real environment, not a survey form",
          "Identify unspoken frictions in the purchase journey",
          "Pair observational data with AI pattern detection across sessions",
        ],
        graphicLabel: "Context Mapping",
      },
    ],
    howItWorks: [
      { title: "Tell Us Who You Want to Understand", body: "Share your customer base, segment, or target audience." },
      { title: "Define Your Research Questions", body: "Clarify what decisions these insights need to inform." },
      { title: "Run the Research Program", body: "We field studies and apply AI-assisted analysis to the results." },
      { title: "Receive Actionable Personas & Insights", body: "Get segment profiles and recommendations your team can use today." },
    ],
    whyChooseUs: [
      "Segments built on behavior, not assumed demographics",
      "Qualitative depth paired with AI-scale analysis",
      "Insights delivered as playbooks, not just findings",
      "Experience across consumer and B2B customer bases",
    ],
  },
  {
    slug: "customer-satisfaction-surveys",
    icon: "ClipboardCheck",
    title: "Customer Satisfaction Surveys",
    shortDescription:
      "AI-scored satisfaction and loyalty measurement that tells you exactly where experience is breaking down.",
    cardBullets: [
      "NPS & CSAT Measurement",
      "Customer Journey Mapping",
      "Loyalty Analysis",
    ],
    heroTagline:
      "Know exactly where your customer experience is winning — and where it's losing you renewals. AI-scored satisfaction data pinpoints the moments that matter most.",
    whyItMattersTitle: "Why Satisfaction Measurement Matters",
    whyItMattersBody: [
      "A single average NPS score hides more than it reveals. The real value is in knowing which touchpoint is quietly driving churn.",
      "Our surveys pair standard satisfaction metrics with AI-driven driver analysis, so every score comes with a reason attached.",
    ],
    whyItMattersGraphicLabel: "Satisfaction Signal",
    whatYoullGet: [
      {
        icon: "ClipboardCheck",
        title: "NPS & CSAT Measurement",
        body: "Continuous measurement benchmarked against your category.",
      },
      {
        icon: "TrendingUp",
        title: "Customer Journey Mapping",
        body: "AI-modeled mapping of exactly where satisfaction rises and falls.",
      },
      {
        icon: "Sparkles",
        title: "Loyalty Analysis",
        body: "Predictive modeling of churn risk and renewal likelihood.",
      },
    ],
    detailBlocks: [
      {
        title: "NPS & CSAT Measurement",
        body: "Track satisfaction with statistical rigor.",
        bullets: [
          "Deploy always-on or milestone-triggered surveys",
          "Benchmark scores against category and competitor norms",
          "Break scores down by segment, not just a single average",
        ],
        graphicLabel: "Score Tracking",
      },
      {
        title: "Customer Journey Mapping",
        body: "Find the moment satisfaction breaks.",
        bullets: [
          "Map satisfaction at every touchpoint across the journey",
          "Use AI driver analysis to isolate root causes, not symptoms",
          "Prioritize fixes by their impact on overall experience score",
        ],
        graphicLabel: "Journey Map",
      },
      {
        title: "Loyalty Analysis",
        body: "See churn risk before it shows up in revenue.",
        bullets: [
          "Model renewal and churn likelihood from satisfaction signals",
          "Flag at-risk accounts for proactive outreach",
          "Track loyalty trends across cohorts over time",
        ],
        graphicLabel: "Churn Risk Model",
      },
    ],
    howItWorks: [
      { title: "Share Your Customer Base", body: "Tell us about your customers and existing measurement program, if any." },
      { title: "Define Your Touchpoints", body: "Identify the moments in the journey that matter most to measure." },
      { title: "Deploy & Collect", body: "We field surveys and apply AI-driven analysis as responses come in." },
      { title: "Get Driver-Based Recommendations", body: "Receive a prioritized list of what's driving satisfaction up or down." },
    ],
    whyChooseUs: [
      "Driver analysis explains scores, not just reports them",
      "Segment-level breakdowns instead of a single blended number",
      "Churn-risk flagging your team can act on before renewal",
      "Benchmarks calibrated to your specific category",
    ],
  },
  {
    slug: "brand-perception-surveys",
    icon: "Eye",
    title: "Brand Perception Surveys",
    shortDescription:
      "Understand how your brand is really perceived, with AI-modeled sentiment and positioning analysis.",
    cardBullets: [
      "Brand Awareness Studies",
      "Positioning Research",
      "Reputation Monitoring",
    ],
    heroTagline:
      "Your brand is defined by perception, not intention. AI-modeled sentiment and positioning research show you exactly how the market sees you today.",
    whyItMattersTitle: "Why Brand Perception Matters",
    whyItMattersBody: [
      "Companies often invest heavily in a brand identity they believe is landing — without evidence of how it's actually received in the market.",
      "We combine structured brand studies with AI-driven sentiment analysis, giving you a clear, current picture of brand health.",
    ],
    whyItMattersGraphicLabel: "Perception Signal",
    whatYoullGet: [
      {
        icon: "Eye",
        title: "Brand Awareness Studies",
        body: "Measure aided and unaided awareness against key competitors.",
      },
      {
        icon: "Target",
        title: "Positioning Research",
        body: "AI-mapped perceptual positioning across the attributes that matter to buyers.",
      },
      {
        icon: "ShieldCheck",
        title: "Reputation Monitoring",
        body: "Ongoing sentiment tracking across review and social channels.",
      },
    ],
    detailBlocks: [
      {
        title: "Brand Awareness Studies",
        body: "Know where you stand in the customer's mind.",
        bullets: [
          "Measure aided and unaided brand awareness by segment",
          "Benchmark recall against category competitors",
          "Track awareness trends over time and by campaign",
        ],
        graphicLabel: "Awareness Index",
      },
      {
        title: "Positioning Research",
        body: "See your brand the way the market does.",
        bullets: [
          "Map perceptual positioning across key brand attributes",
          "Identify gaps between intended and perceived positioning",
          "Use AI clustering to find your true competitive set",
        ],
        graphicLabel: "Positioning Map",
      },
      {
        title: "Reputation Monitoring",
        body: "Catch shifts in sentiment before they escalate.",
        bullets: [
          "Track sentiment across reviews, social, and survey channels",
          "Flag emerging reputation risks with AI anomaly detection",
          "Deliver a rolling brand health score to leadership",
        ],
        graphicLabel: "Sentiment Trend",
      },
    ],
    howItWorks: [
      { title: "Share Your Brand Objectives", body: "Tell us what you want to know and who you compete against." },
      { title: "Define Attributes to Measure", body: "Clarify the brand attributes and channels that matter most." },
      { title: "Run the Perception Study", body: "We field research and apply AI sentiment and positioning analysis." },
      { title: "Get a Brand Health Report", body: "Receive a clear picture of perception with prioritized next steps." },
    ],
    whyChooseUs: [
      "Perception measured with evidence, not internal assumption",
      "AI sentiment analysis across every channel that matters",
      "Positioning maps that reveal your true competitive set",
      "Ongoing monitoring, not a one-time snapshot",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
