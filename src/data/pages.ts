import {
  HeartHandshake,
  Home,
  Users,
  Building2,
  HandHelping,
  Sparkles,
  Compass,
  Network,
  type LucideIcon,
} from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

export interface ServicePreview {
  title: string;
  description: string;
  to: string;
  image: string;
  icon: LucideIcon;
  buttonLabel?: "Learn More" | "Ask more info";
}

export const homeServicePreviews: ServicePreview[] = [
  {
    title: "NDIS Supports",
    description: "Person-centred support built on listening first — never assumptions.",
    to: "/ndis-supports",
    image: "/images/service-we-listen.webp",
    icon: HeartHandshake,
    buttonLabel: "Learn More",
  },
  {
    title: "Daily Living Support",
    description: "Practical help with everyday tasks so your home runs smoothly.",
    to: "/daily-living-support",
    image: "/images/service-daily-tasks.jpg",
    icon: Home,
    buttonLabel: "Learn More",
  },
  {
    title: "Support Coordination",
    description: "Connect with services and understand your NDIS plan with confidence.",
    to: "/support-coordination",
    image: "/images/service-community.webp",
    icon: Users,
    buttonLabel: "Ask more info",
  },
  {
    title: "Accommodation Supports",
    description: "Explore ILO, SIL, and living options with person-centred guidance.",
    to: "/accommodation-supports",
    image: "/images/service-transition.jpg",
    icon: Building2,
    buttonLabel: "Learn More",
  },
  {
    title: "Personal Care and Transitions",
    description: "Dignified personal care and support through life's key changes.",
    to: "/personal-care-and-transitions",
    image: "/images/service-personal-activities.jpg",
    icon: HandHelping,
    buttonLabel: "Learn More",
  },
  {
    title: "Positive Behaviour Support",
    description: "Consistent, person-centred implementation of PBS strategies.",
    to: "/positive-behaviour-support",
    image: "/images/service-life-skills.webp",
    icon: Sparkles,
    buttonLabel: "Ask more info",
  },
  {
    title: "Guidance",
    description: "Clear guidance to help you understand your plan and support options.",
    to: "/guidance",
    image: "/images/about.jpg",
    icon: Compass,
    buttonLabel: "Learn More",
  },
  {
    title: "Collaboration",
    description: "Working with families, coordinators, and professionals for better outcomes.",
    to: "/collaboration",
    image: "/images/hero.jpg",
    icon: Network,
    buttonLabel: "Learn More",
  },
];

export interface FeaturedService {
  slug: string;
  path: string;
  title: string;
  teaser: string;
  overview: string;
  offerTitle: string;
  offerItems: string[];
  benefitsTitle: string;
  benefitsItems: string[];
  whyChoose: string;
  ctaLabel: string;
}

export const featuredServices: FeaturedService[] = [
  {
    slug: "ndis-supports",
    path: "/ndis-supports",
    title: "NDIS Supports",
    teaser:
      "Person-centred disability support built on listening first — never assumptions.",
    overview:
      "At No Assumption Support Service, we provide personalised disability support built on a simple belief: never assume, always ask. We take the time to understand each person's story, strengths, and goals, so the support we offer truly reflects who they are.",
    offerTitle: "What We Offer",
    offerItems: [
      "Person-centred support tailored to your NDIS plan and goals",
      "Daily living assistance, community participation, and capacity building",
      "Flexible scheduling that fits your routines and preferences",
      "Clear communication with participants, families, and support networks",
    ],
    benefitsTitle: "Outcomes",
    benefitsItems: [
      "Greater independence and confidence in daily life",
      "Meaningful connection within your community",
      "Support aligned to your choices, dignity, and control",
      "A team that listens first — never assumes",
    ],
    whyChoose:
      "We don't assume — we listen, understand, and support you, your way. Our commitment to individualised care, consistent service, and collaborative partnerships ensures you receive high-quality support.",
    ctaLabel: "Explore NDIS supports",
  },
  {
    slug: "daily-living-support",
    path: "/daily-living-support",
    title: "Daily Living Support",
    teaser: "Practical help with everyday tasks so your home runs smoothly.",
    overview:
      "Practical, respectful support with everyday tasks at home and in the community — helping you maintain routines, manage your household, and live with greater independence.",
    offerTitle: "How We Help",
    offerItems: [
      "Meal preparation, cleaning, and personal organisation",
      "Shopping, errands, and routine-building support",
      "Tenancy and shared living assistance",
      "Household tasks delivered with dignity and discretion",
    ],
    benefitsTitle: "Outcomes",
    benefitsItems: [
      "A home environment that feels manageable and comfortable",
      "Skills and confidence to maintain daily routines",
      "Support that adapts as your needs change",
      "Independence preserved through respectful assistance",
    ],
    whyChoose:
      "Our team delivers daily living support with patience, reliability, and genuine care — always shaped around how you want your day to run.",
    ctaLabel: "Ask about daily living support",
  },
  {
    slug: "positive-behaviour-support",
    path: "/positive-behaviour-support",
    title: "Positive Behaviour Support Implementation",
    teaser: "Consistent, person-centred implementation of PBS strategies.",
    overview:
      "High-quality, non-clinical, person-centred support delivered by a dedicated team — assisting with daily living, routines, independence, and the implementation of Positive Behaviour Support strategies.",
    offerTitle: "We Can Assist With",
    offerItems: [
      "Implementing strategies from your Positive Behaviour Support plan",
      "Consistent, calm support across home and community settings",
      "Collaboration with allied health and behaviour support practitioners",
      "Routine-based approaches that promote safety and wellbeing",
    ],
    benefitsTitle: "Outcomes",
    benefitsItems: [
      "Supports delivered consistently and professionally",
      "Greater understanding of strategies that work for you",
      "Safer, more positive environments at home and in the community",
      "Progress toward goals outlined in your support plan",
    ],
    whyChoose:
      "We take a respectful, strengths-based approach — working alongside participants, families, and professionals to implement supports without assumptions.",
    ctaLabel: "Discuss PBS implementation",
  },
  {
    slug: "guidance",
    path: "/guidance",
    title: "Guidance",
    teaser: "Clear, honest guidance to help you understand your NDIS plan and options.",
    overview:
      "Clear, honest guidance to help you understand your NDIS plan, explore your options, and make informed decisions about the supports that matter most to you.",
    offerTitle: "How We Help",
    offerItems: [
      "Walking through your NDIS plan at a pace that suits you",
      "Explaining funding categories and how supports can be used",
      "Guiding you through life transitions and changing needs",
      "Helping you prepare for plan reviews and new goals",
    ],
    benefitsTitle: "Outcomes",
    benefitsItems: [
      "Greater confidence navigating the NDIS",
      "Clearer understanding of your rights and choices",
      "Informed decisions about services and providers",
      "A trusted partner on your support journey",
    ],
    whyChoose:
      "We explain things plainly, without jargon or pressure — because understanding your plan is the foundation of good support.",
    ctaLabel: "Get guidance today",
  },
  {
    slug: "collaboration",
    path: "/collaboration",
    title: "Collaboration",
    teaser: "Working with families, coordinators, and professionals for better outcomes.",
    overview:
      "We work alongside families, support coordinators, allied health professionals, and other providers to ensure services remain effective, safe, and aligned with participants' needs.",
    offerTitle: "We Can Assist With",
    offerItems: [
      "Coordinated communication between your support network",
      "Working with support coordinators on plan implementation",
      "Partnership with allied health and therapy providers",
      "Sharing updates that keep everyone aligned to your goals",
    ],
    benefitsTitle: "Outcomes",
    benefitsItems: [
      "A connected support team working toward shared goals",
      "Fewer gaps and overlaps in your supports",
      "Services that adapt when your circumstances change",
      "Positive outcomes through genuine partnership",
    ],
    whyChoose:
      "Collaboration is at the heart of person-centred care. We show up as reliable partners — not just service providers.",
    ctaLabel: "Start collaborating with us",
  },
];

export const homeTeasers = {
  services: featuredServices.map((s) => ({
    title: s.title,
    teaser: s.teaser,
    to: s.path,
    cta: "View Service",
  })),
  specialist: [
    {
      title: "Support Coordination",
      teaser: "Connect with services, understand your plan, and build confidence.",
      to: "/support-coordination",
      cta: "Learn More",
    },
    {
      title: "Accommodation Supports",
      teaser: "Explore ILO, SIL, and living options with person-centred guidance.",
      to: "/accommodation-supports",
      cta: "Learn More",
    },
    {
      title: "Personal Care and Transitions",
      teaser: "Dignified personal care and support through life's key changes.",
      to: "/personal-care-and-transitions",
      cta: "View Service",
    },
  ],
  getStarted: [
    {
      title: "FREE 45-Minute Meet & Greet",
      teaser: "Meet our team, discuss your goals, and see if we're the right fit — no pressure.",
      to: "/meet-and-greet",
      cta: "Book Your FREE Meet & Greet Today",
    },
    {
      title: "Forms",
      teaser: "Referrals, career enquiries, and feedback — submit online or get in touch.",
      to: "/forms",
      cta: "Make a Referral",
    },
  ],
  community: [
    {
      title: "Cultural Diversity & Inclusion",
      teaser: "Support that respects your background, beliefs, and identity.",
      to: "/cultural-diversity",
      cta: "Learn More",
    },
    {
      title: "Our Annual Community Get-Together",
      teaser: "Celebrating achievements, friendships, and community connection.",
      to: "/community-get-together",
      cta: "Learn More",
    },
  ],
  info: [
    {
      title: "Consent",
      teaser: "We obtain written consent before any support is delivered.",
      to: "/consent",
      cta: "Learn More",
    },
    {
      title: "NDIS Funding / Price",
      teaser: "Transparent pricing aligned with your plan — no hidden costs.",
      to: "/ndis-funding",
      cta: "Learn More",
    },
  ],
};

export const accommodationSupports = {
  hero: {
    eyebrow: "Accommodation Supports",
    title: "Finding the right place to call home.",
    subtitle:
      "Exploring accommodation options with clarity, care, and person-centred support.",
  },
  intro: [
    "Finding the right accommodation can feel challenging, but it can also be one of the most exciting steps towards greater independence, improved wellbeing, and increased community participation.",
    "At No Assumption Support Service, we support participants throughout the process of exploring and navigating suitable accommodation options that align with their goals, needs, and lifestyle.",
  ],
  howWeSupportYou: {
    title: "How We Support You",
    items: [
      "Exploring Individual Living Options (ILO) tailored to your preferences",
      "Navigating Supported Independent Living (SIL) across the Perth metropolitan area",
      "Understanding accommodation funding within your NDIS plan",
      "Connecting you with suitable providers and community resources",
      "Supporting informed decision-making at every stage",
    ],
  },
  suitableIf: {
    title: "Accommodation Support May Be Suitable If You",
    items: [
      "Are looking to move out of home or live more independently",
      "Want to explore better living arrangements",
      "Need help understanding ILO, SIL, or other pathways",
      "Would like guidance connecting with the right supports",
    ],
  },
  personCentred: {
    title: "Our Person-Centred Approach",
    body: "Our goal is to empower participants to make informed choices and enjoy a safe, comfortable, meaningful living environment.",
    items: [
      "We listen to your goals, preferences, and concerns first",
      "We respect your culture, routines, and the life you want to build",
      "We communicate clearly and transparently throughout the process",
      "We never assume what you need — we ask and support your way",
    ],
  },
  faqs: [
    {
      q: "What accommodation supports can the NDIS fund?",
      a: "The NDIS may fund SIL, ILO, Specialist Disability Accommodation (SDA), and related capacity-building supports — depending on your plan and eligibility.",
    },
    {
      q: "What is the difference between SIL and ILO?",
      a: "SIL provides daily living support in a shared or individual arrangement. ILO is a flexible, personalised approach to how and where you live.",
    },
    {
      q: "Can you help if I'm not sure what I need?",
      a: "Yes. We'll have an open conversation about your goals, current situation, and available options.",
    },
  ] as FaqItem[],
  exploreCta: {
    title: "Ready to Explore Your Accommodation Options?",
    body: "Whether you're starting out or ready for the next step, we're here to help.",
    button: "Get in touch",
  },
  whatHappensNext: {
    title: "What Happens Next?",
    steps: [
      "Contact us — we'll respond within one business day",
      "We'll discuss your goals, needs, and current situation",
      "Together, we'll explore suitable accommodation pathways",
      "We'll help connect you with providers and resources across the Perth metropolitan area",
    ],
  },
};

export const supportCoordination = {
  hero: {
    eyebrow: "Support Coordination",
    title: "Connecting you to the right supports.",
    subtitle: "Personalised assistance to navigate your NDIS plan and build confidence.",
  },
  intro: [
    "Our Support Coordination service helps participants connect with NDIS and other support agencies in line with their goals, wishes, and plan budget. We assist participants to monitor plan budgets and the effectiveness of supports, while building capacity to navigate the NDIS independently.",
    "Our Support Coordinators provide personalised assistance based on each participant's goals, needs, circumstances, and funded supports within their NDIS plan.",
    "We bring hands-on experience from mainstream sectors including the NDIS, hospitals, children's services, and DCP — helping participants understand their entitlements when accessing mainstream services.",
  ],
  howWeSupport: {
    title: "How We Can Support You",
    items: [
      "Connecting you with NDIS and community services aligned to your goals",
      "Monitoring plan budgets and the effectiveness of your supports",
      "Building your capacity to understand and navigate the NDIS",
      "Coordinating supports across providers and allied health",
    ],
  },
  approach: {
    title: "Our Approach",
    body: "Person-centred, transparent, and focused on building your long-term independence.",
    items: [
      "We start by listening to your goals and circumstances",
      "We work within your funded supports with full transparency",
      "We communicate clearly with you and your support network",
      "We build your confidence to make informed decisions over time",
    ],
  },
  afterContact: {
    title: "What Happens After You Contact Us?",
    steps: [
      "Initial conversation to understand your goals and current plan",
      "Review of your funded supports and coordination needs",
      "Identification of priorities and a practical support pathway",
      "Connection with suitable providers and community services",
      "Ongoing coordination and capacity-building as needs evolve",
    ],
  },
  whyChoose: {
    title: "Why Choose No Assumption Support Service?",
    items: [
      "We never assume — we listen, understand, and support you, your way",
      "Experience across NDIS and mainstream service sectors",
      "Personalised assistance based on your funded supports",
      "Culturally responsive, respectful, and transparent practice",
    ],
  },
  successLooksLike: {
    title: "Success Looks Like",
    items: [
      "Connected to the right supports for your goals",
      "Understanding your plan and using funding effectively",
      "Confidence to make informed decisions about your supports",
      "Greater independence in managing your support journey",
    ],
  },
};

export const personalCareTransitions = {
  hero: {
    eyebrow: "Personal Care and Transitions",
    title: "Dignified care through every stage of life.",
    subtitle: "Respectful personal care and transition support — on your terms.",
  },
  introduction:
    "Personal care and life transitions can bring uncertainty, but they can also open doors to greater independence. We provide assistance that honours your dignity, respects your preferences, and supports you through meaningful changes — at your pace.",
  howWeSupport: {
    title: "How We Can Support You",
    personalCare: [
      "Personal care, grooming, and hygiene support",
      "Mobility, toileting, and transfer assistance",
      "Medication prompts and health routine support",
      "Household tasks delivered with discretion and respect",
    ],
    transitions: [
      "Transitioning to independent living",
      "Employment preparation and school-to-work pathways",
      "Routine building and long-term planning",
      "Navigating major life changes with practical support",
    ],
  },
  ourGoal: {
    title: "Our Goal",
    body: "To support you through personal care and life transitions with dignity and respect — helping you build confidence, maintain choice, and move toward the life you want.",
    items: [
      "Support shaped around you — never based on assumptions",
      "Consistent, reliable care from a team chosen with care",
      "Collaboration with families, coordinators, and allied professionals",
      "A focus on independence, wellbeing, and community connection",
    ],
  },
};

export const meetAndGreet = {
  title: "FREE 45-Minute Meet & Greet",
  heading: "Let's Get to Know Each Other",
  teaser:
    "A relaxed, no-obligation chat to explore whether No Assumption is the right fit for you.",
  body: "Choosing a disability support service is a big decision. Our FREE 45-Minute Meet & Greet gives you the chance to explore your options — with no pressure and no obligation.",
  points: [
    "Discuss your goals and support needs",
    "Meet the friendly and experienced team",
    "Learn about our services and approach",
    "Ask questions in a relaxed, no-pressure environment",
    "Discover if No Assumption is the right fit for you",
  ],
  cta: "Book Your FREE Meet & Greet Today",
};

export const culturalDiversity = {
  hero: {
    eyebrow: "Cultural Diversity & Inclusion",
    title: "Every story matters. Every culture honoured.",
    subtitle: "Support that respects who you are.",
    teaser: "Culturally responsive care that welcomes participants from all backgrounds.",
  },
  sections: [
    {
      title: "Our commitment to inclusion",
      body: "We welcome participants and families from all cultural backgrounds, delivering care that is respectful, inclusive, and responsive to individual identity.",
    },
    {
      title: "Culturally responsive support",
      body: "We take time to understand your cultural preferences, communication styles, and community connections — approaching every interaction with curiosity and respect, never assumptions.",
    },
    {
      title: "A welcoming environment for all",
      body: "We strive to create safe environments where individuals feel valued, heard, and supported to thrive — honouring dietary requirements, religious practices, and cultural connection.",
    },
  ],
  closing:
    "Diversity strengthens our community. We are proud to support participants across the Perth metropolitan area with care that celebrates individuality and builds genuine belonging.",
};

export const communityGetTogether = {
  hero: {
    eyebrow: "Our Annual Community Get-Together",
    title: "Celebrating connection and community.",
    subtitle: "An event that brings our No Assumption family together each year.",
    teaser: "Food, entertainment, laughter, and genuine connection — celebrating our community.",
  },
  body: [
    "Each year we host our Annual Community Get-Together — celebrating achievements, friendships, and diversity within our community.",
    "It's a day filled with food, entertainment, laughter, and genuine connection. Participants, families, support workers, and community members come together to share stories and celebrate how far we've come.",
  ],
  highlights: [
    "Celebrating participant achievements and milestones",
    "Strengthening friendships and community connections",
    "Honouring the diversity within our community",
    "Food, entertainment, and activities for all ages",
    "Laughter, warmth, and a genuine sense of belonging",
  ],
};

export const consentSection = {
  title: "Consent",
  teaser: "Written consent obtained before any support is delivered.",
  body: "Before any service is provided by No Assumption Support Service, we obtain your written consent to ensure you understand and agree to the support being delivered.",
};

export const ndisFundingSection = {
  title: "NDIS Funding / Price",
  teaser: "Transparent pricing in line with your NDIS plan — no hidden costs.",
  body: "Our services are delivered in accordance with the pricing arrangements outlined in your NDIS plan and funding budget. We are committed to providing transparent and fair pricing, with no hidden costs.",
};
