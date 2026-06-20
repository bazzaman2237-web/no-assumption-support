import {
  Users,
  Home,
  HandHelping,
  Car,
  HeartHandshake,
  Sparkles,
  UserCheck,
  Heart,
  ShieldCheck,
  Smile,
  type LucideIcon,
} from "lucide-react";

export const siteContact = {
  phone: "+61 468 880 557",
  phoneHref: "tel:+61468880557",
  email: "info@noassumption.com.au",
  feedbackEmail: "welisten@noassumption.com.au",
  whatsapp: "https://wa.me/61468880557",
  facebook:
    "https://www.facebook.com/NoAssumptionSupportService?mibextid=wwXIfr&rdid=e6TClQI7H8WWbjSz&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ALWVfzYSt%2F%3Fmibextid%3DwwXIfr#",
  linkedin: "https://www.linkedin.com/in/jennifer-garley-pratt-7a8b7b3b6/",
  address: "Forrestfield, Perth WA 6058",
  mailingAddress: "PO Box 136, Forrestfield, WA 6058",
  mapsHref: "https://maps.google.com/?q=Forrestfield+WA+6058",
  abn: "36 692 156 737",
  ndisStatus: "Registration in progress",
  hours: "Monday – Sunday: available by appointment",
} as const;

/** Confirmed business location — single source of truth for site copy */
export const serviceArea = {
  suburb: "Forrestfield",
  metro: "Perth metropolitan area",
  state: "Western Australia",
  serviceSuburbs: [
    "Kalamunda",
    "High Wycombe",
    "Maida Vale",
    "Midland",
    "Cannington",
    "Belmont",
  ],
} as const;

export const images = {
  logo: "/images/logo.png",
  ndisLogo: "/images/ndis-logo.png",
  hero: "/images/hero.jpg",
  about: "/images/about.jpg",
  cta: "/images/cta.jpg",
  commitmentMain: "/images/about.jpg",
  commitmentOverlay: "/images/service-community.webp",
  commitmentOverlayCaption: "Person-centred care",
  favicon: "/images/favicon.png",
  australiaFlag: "/images/australia-flag.svg",
  aboriginalFlag: "/images/aboriginal-flag.svg",
} as const;

export const acknowledgementText =
  "No Assumption acknowledges the Traditional Owners of the land on which we live and work. We pay our respects to Elders past, present and emerging, and recognise their continuing connection to land, waters and community.";

export interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  image: string;
  short: string;
  long: string;
}

export const services: Service[] = [
  {
    slug: "community-access",
    title: "Community Access",
    icon: Users,
    image: "/images/service-community.webp",
    short:
      "Get out, stay connected, and take part in the activities and communities that matter to you.",
    long:
      "We support you to attend events, join groups, visit local venues, and build meaningful social connections — helping you feel part of your community, not apart from it.",
  },
  {
    slug: "daily-living-support",
    title: "Daily Living Support",
    icon: Home,
    image: "/images/service-daily-tasks.jpg",
    short:
      "Practical help with everyday household tasks so your home runs smoothly.",
    long:
      "From meal preparation and cleaning to shopping and organising routines, we provide respectful support that keeps daily life manageable and your independence intact.",
  },
  {
    slug: "personal-care",
    title: "Personal Care",
    icon: HandHelping,
    image: "/images/service-personal-activities.jpg",
    short:
      "Dignified, discreet assistance with personal care — always on your terms.",
    long:
      "We support bathing, dressing, grooming, mobility, and medication with sensitivity and respect. Your routines, preferences, and privacy always come first.",
  },
  {
    slug: "transport-assistance",
    title: "Transport Assistance",
    icon: Car,
    image: "/images/service-transition.jpg",
    short:
      "Safe, reliable support getting to appointments, activities, and everyday destinations.",
    long:
      "Whether it's a medical appointment, community activity, or social visit, we help you travel with confidence — building independence one trip at a time.",
  },
  {
    slug: "respite-support",
    title: "Respite Support",
    icon: HeartHandshake,
    image: "/images/service-we-listen.webp",
    short:
      "Short-term support that gives participants and families breathing room.",
    long:
      "Everyone needs a break sometimes. Our respite support provides reliable care when families or carers need time to rest, recharge, or attend to other responsibilities.",
  },
  {
    slug: "life-skills-development",
    title: "Life Skills Development",
    icon: Sparkles,
    image: "/images/service-life-skills.webp",
    short:
      "Build practical skills for greater independence at your own pace.",
    long:
      "Cooking, budgeting, travel, self-care, communication — we work alongside you to develop the everyday skills that build confidence and support a more independent life.",
  },
];

export const homeFeatureCards = [
  {
    icon: UserCheck,
    title: "Experienced Support Workers",
    body: "Our team brings genuine care, professional training, and a commitment to person-centred practice on every shift.",
  },
  {
    icon: Heart,
    title: "Person-Centred Support",
    body: "We never assume what you need — we ask, listen, and shape support around your goals, routines, and preferences.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Care",
    body: "Consistent, dependable support you can count on — with clear communication and flexible scheduling that fits your life.",
  },
  {
    icon: Smile,
    title: "Dedicated Attitude",
    body: "Warmth, patience, and respect are non-negotiable. We show up ready to support, not just to complete a task list.",
  },
];

/** Hero floating stats box — three headline figures (Paramount-style). */
export const homeApartStats = [
  { value: "7 Days", label: "Flexible support availability" },
  { value: "100%", label: "Person-centred approach" },
  { value: "1:1", label: "Support matched to you" },
];

export const homeTrustHighlights = [
  { title: "Person-centred support", body: "Support shaped around your goals, not assumptions." },
  { title: "Reliable team", body: "Consistent, dependable care you can count on." },
  { title: "Flexible care", body: "Scheduling and supports that fit your life." },
  { title: "Community-focused", body: "Helping you stay connected and included." },
];

export const homeWhyChooseUs = [
  "We listen first — never assume",
  "Person-centred support",
  "Respect, dignity and choice",
  "Clear communication",
  "Support tailored to individual goals",
  "Focus on independence and inclusion",
];

export const homeCommitment = {
  eyebrow: "Our Commitment",
  title: "Your life, your choices — we're here to support both.",
  tagline: "That's a commitment we stand behind every day.",
  body: "We believe every participant deserves support that honours who they are — not who others assume them to be. We listen first, respect your choices, and deliver care with confidence and connection.",
  points: [
    "Never assume — always ask first",
    "Flexible, culturally responsive support",
    "Collaboration with families and allied professionals",
    "Committed to dignity at every step",
  ],
};

export const missionStatement =
  "Our mission is to deliver personalised, respectful, and assumption-free support that empowers every participant to live a meaningful and fulfilling life. We achieve this by taking the time to truly know each person — their goals, their story, and their unique circumstances. Through empathy, active listening, and collaboration, we ensure every individual feels seen, heard, and supported as they pursue social, emotional, and economic inclusion.";

export const visionStatement =
  "To create a community where every person is understood as an individual, honoured for their strengths, and supported to live with genuine choice, control, and belonging. We envision a world where assumptions never shape care — only understanding, respect, and human connection.";

export const aboutIntro =
  "At No Assumption Support Service, we provide personalised disability support built on a simple belief: never assume, always ask. We take the time to understand each person's story, strengths, and goals, so the support we offer truly reflects who they are.";

export const aboutExtended =
  "Our focus is on helping individuals live meaningful, independent, and self-directed lives, with care that respects choice, dignity, and control. By working closely with participants, families, carers, and allied professionals, we deliver flexible and culturally responsive support.";

/** Preserved from live /about-us — founder and team trust content */
export const founderStory =
  "No Assumption Support Service was led by Jennifer, a grandmother from Western Australia. After more than a decade of experience in the disability and community services sector, she identified a consistent gap in support delivery. Assumptions were common, despite individual strengths, preferences, and voices. Many people were underestimated, and support workers were placed into roles without sufficient consideration of compatibility and genuine understanding. Through her work as a disability support worker and foster parent, Jennifer learned that meaningful support must be personal, respectful, and built on trust. Positive outcomes occur when support is delivered without assumptions and when people are given real choice, dignity, and control over how their supports are provided. This led to the establishment of No Assumption Support Service — a provider committed to person-centred, culturally aware, and strengths-based support, delivered with compassion and respect, and focused on supporting each person in their own way.";

export const founderBio =
  "I am a mother and proud grandmother who has lived in Western Australia for over two decades. I am an experienced disability support worker with more than 10 years of experience supporting NDIS participants, including both adults and children with diverse needs across a broad range of disabilities, including psychosocial disabilities. My experience as a foster carer has strongly shaped my approach to support, deepening my understanding of trauma-informed care, compassionate practice, and the importance of creating safe, nurturing environments where individuals feel valued, heard, and supported to thrive. I am genuinely passionate about the work I do and take pride in delivering tailored, person-centred NDIS supports that respect each individual's goals, strengths, culture, and independence. I look forward to meeting you and your family, and supporting you on your NDIS journey.";

export const teamMembers = [
  {
    name: "Jennifer G. Pratt",
    role: "Founder & Director",
    image: "/images/team/team-jennifer-pratt.png",
  },
  {
    name: "George Garley",
    role: "Manager",
    image: "/images/team/team-george-garley.jpg",
  },
  {
    name: "Lisa Gullo",
    role: "Care Support Coordinator",
    image: "/images/team/team-lisa-gullo.png",
  },
] as const;

export const joinOurTeam = {
  title: "Join Our Team",
  intro:
    "At No Assumption Support Service, we are always looking for caring, reliable, and passionate people to join our team.",
  documentsIntro: "To apply, please provide the following documents:",
  documents: [
    "Relevant qualifications for the position you are applying for",
    "Current resume/CV with two recent professional referees",
    "100 points of identification, such as passport, driver's licence, or Medicare card",
    "Working with Children Check (WWCC)",
    "Current and valid NDIS Worker Screening Check",
    "Current and valid National Police Clearance",
    "Current First Aid and CPR Certificate",
    "NDIS Worker Orientation Module Certificate",
    "COVID-19 vaccination record, where applicable",
    "COVID-19 Infection Control Training Certificate",
  ],
  trainingTitle: "Training and Induction",
  trainingBody:
    "We are committed to supporting our team members to succeed. Successful applicants will take part in our induction program, with ongoing on-the-job training and support provided to help them feel confident in their role.",
  applyLabel: "Apply Today",
} as const;
