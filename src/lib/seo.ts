export const SITE_URL = "https://www.noassumption.com.au";

const BRAND = "No Assumption Support Service";
const AREA = "Forrestfield and the Perth metropolitan area";

export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path?: string;
}) {
  const fullTitle = title.includes(BRAND) ? title : `${title} | ${BRAND}`;
  const canonical = path ? `${SITE_URL}${path}` : undefined;

  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      ...(canonical ? [{ property: "og:url", content: canonical }] : []),
    ],
    links: canonical ? [{ rel: "canonical", href: canonical }] : undefined,
  };
}

export const seo = {
  home: {
    title: "NDIS Support Services | Forrestfield & Perth Metro",
    description:
      `Person-centred NDIS disability support from ${AREA}. Daily living, support coordination, accommodation guidance, and tailored participant support.`,
    path: "/",
  },
  about: {
    title: "About Us",
    description:
      `Learn about No Assumption Support Service — a Forrestfield-based disability support service committed to choice, dignity, and listening first across the Perth metropolitan area.`,
    path: "/about-us",
  },
  services: {
    title: "NDIS Support Services",
    description:
      "Browse all NDIS support services from No Assumption — daily living, support coordination, personal care, accommodation, PBS implementation, guidance, and collaboration.",
    path: "/our-services",
  },
  contact: {
    title: "Contact Us",
    description:
      `Contact No Assumption Support Service in Forrestfield, Western Australia. Phone, email, WhatsApp, or online message — we respond within one business day.`,
    path: "/contact",
  },
  forms: {
    title: "Referrals, Careers & Feedback",
    description:
      "Submit a referral, career enquiry, or feedback to No Assumption Support Service. Feedback and complaints: welisten@noassumption.com.au.",
    path: "/forms",
  },
  meetAndGreet: {
    title: "FREE 45-Minute Meet & Greet",
    description:
      "Book your FREE 45-Minute Meet & Greet — a relaxed, no-pressure conversation for NDIS participants, families, carers, and referrers.",
    path: "/meet-and-greet",
  },
  culturalDiversity: {
    title: "Cultural Diversity & Inclusion",
    description:
      "Culturally responsive NDIS disability support that respects your background, beliefs, and identity — inclusive care for every participant.",
    path: "/cultural-diversity",
  },
  communityGetTogether: {
    title: "Annual Community Get-Together",
    description:
      "Discover our annual community get-together — celebrating achievements, friendships, and connection across the No Assumption community.",
    path: "/community-get-together",
  },
  faqs: {
    title: "FAQs",
    description:
      `Frequently asked questions about NDIS support, getting started, service areas, and working with No Assumption in ${AREA}.`,
    path: "/faqs",
  },
  consent: {
    title: "Consent",
    description:
      "How No Assumption Support Service obtains written consent before delivering support — protecting your choice, control, and dignity.",
    path: "/consent",
  },
  ndisFunding: {
    title: "NDIS Funding & Pricing",
    description:
      "Understand NDIS funding and pricing with No Assumption — transparent service costs aligned with your plan, with no hidden fees.",
    path: "/ndis-funding",
  },
  ndisResources: {
    title: "NDIS Resources",
    description:
      "Curated NDIS resources, guides, and support links for participants, families, and support coordinators in Western Australia.",
    path: "/ndis-resources",
  },
  ndisQualitySafeguards: {
    title: "NDIS Quality & Safeguards",
    description:
      "Understand the NDIS Quality and Safeguards Commission, your rights as a participant, and how No Assumption upholds quality and accountability.",
    path: "/ndis-quality-and-safeguards-commission",
  },
  ndisSupports: {
    title: "NDIS Supports",
    description:
      "Person-centred NDIS participant support tailored to your goals — disability support services built on listening first, never assumptions.",
    path: "/ndis-supports",
  },
  dailyLivingSupport: {
    title: "Daily Living Support",
    description:
      "NDIS daily living support for household tasks, routines, and independence at home — practical, respectful disability support.",
    path: "/daily-living-support",
  },
  supportCoordination: {
    title: "NDIS Support Coordination",
    description:
      "NDIS support coordination to connect you with services, monitor your plan, and build confidence navigating the NDIS system.",
    path: "/support-coordination",
  },
  accommodationSupports: {
    title: "Accommodation Support NDIS",
    description:
      "NDIS accommodation support guidance for ILO, SIL, and supported independent living — person-centred help finding the right home.",
    path: "/accommodation-supports",
  },
  personalCareTransitions: {
    title: "Personal Care & Transitions",
    description:
      "Dignified NDIS personal care and life transition support — respectful assistance through personal care and major life changes.",
    path: "/personal-care-and-transitions",
  },
  positiveBehaviourSupport: {
    title: "Positive Behaviour Support Implementation",
    description:
      "NDIS Positive Behaviour Support implementation — consistent, person-centred, non-clinical support aligned to your PBS strategies.",
    path: "/positive-behaviour-support",
  },
  guidance: {
    title: "NDIS Guidance",
    description:
      "Plain-language NDIS guidance to understand your plan, funding categories, and support options — informed decisions without jargon.",
    path: "/guidance",
  },
  collaboration: {
    title: "Collaboration with Support Networks",
    description:
      "Collaborative NDIS support working with families, support coordinators, and allied health — aligned care for better outcomes.",
    path: "/collaboration",
  },
} as const;
