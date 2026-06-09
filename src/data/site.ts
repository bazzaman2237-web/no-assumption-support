import {
  ArrowRightLeft,
  Sparkles,
  HandHelping,
  Users,
  Home,
  HeartPulse,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  short: string;
  long: string;
}

export const services: Service[] = [
  {
    slug: "transition-support",
    title: "Transition & Support",
    icon: ArrowRightLeft,
    short:
      "Steady, respectful support through life transitions — from school to work, home to home, plan to plan.",
    long:
      "Change is rarely linear. We walk alongside you through the moves that matter — leaving school, finding work, moving house, navigating a new NDIS plan — building the routines and confidence that make each step feel less daunting.",
  },
  {
    slug: "life-skills",
    title: "Developing Life Skills",
    icon: Sparkles,
    short:
      "Practical, everyday skills built at your pace — budgeting, cooking, travel, self-care, and confidence.",
    long:
      "We focus on the skills you choose. Cooking a favourite meal, catching public transport, managing money, looking after your wellbeing — we break the steps down, practise together, and celebrate progress along the way.",
  },
  {
    slug: "personal-activities",
    title: "Assist Personal Activities",
    icon: HandHelping,
    short:
      "Discreet, dignified help with personal care — always asked first, always on your terms.",
    long:
      "Personal care is personal. We respect your routines, your preferences, and your privacy — supporting bathing, dressing, grooming, mobility and medication in a way that always feels like your choice.",
  },
  {
    slug: "community-participation",
    title: "Community Participation",
    icon: Users,
    short:
      "Get out, get involved, get connected — sport, hobbies, classes, volunteering, friendships.",
    long:
      "We help you join the activities and communities that light you up — local sport, art classes, faith groups, volunteering, or just a regular coffee catch-up. Connection is a service, not a side note.",
  },
  {
    slug: "daily-tasks-shared-living",
    title: "Daily Tasks / Shared Living",
    icon: Home,
    short:
      "Support in your home or a shared living arrangement — meals, cleaning, routines and harmony.",
    long:
      "Whether you live alone or with housemates, we help keep the everyday running smoothly — cooking, cleaning, shopping, scheduling — while supporting healthy household dynamics in shared living.",
  },
  {
    slug: "positive-behaviour-support",
    title: "Positive Behaviour Support",
    icon: HeartPulse,
    short:
      "Strengths-based, evidence-informed strategies that improve quality of life for everyone involved.",
    long:
      "Working with you, your family and your supports, we develop positive behaviour support plans that focus on understanding, prevention, and skill-building — never punishment. The goal is a fuller, freer life.",
  },
];

export const whyChooseUs = [
  {
    title: "We ask before we assume",
    body: "Every support starts with a conversation about what you want, not a checklist of what we offer.",
  },
  {
    title: "Registered NDIS Provider",
    body: "Fully compliant, quality-audited and accountable — so your plan funds go further with confidence.",
  },
  {
    title: "Locally rooted in Perth",
    body: "Based in Forrestfield with deep ties to communities, services and venues across the metro area.",
  },
  {
    title: "Skilled, vetted support workers",
    body: "Every team member is background-checked, trained, and matched to you on personality and goals — not just availability.",
  },
  {
    title: "Flexible, responsive, real",
    body: "Plans change, days change, people change. We adapt quickly and communicate clearly — no surprises.",
  },
];

export const testimonials = [
  {
    quote:
      "They actually listened. After years of providers telling me what I needed, No Assumption asked me — and then they delivered.",
    name: "Sarah M.",
    role: "Participant, Forrestfield",
  },
  {
    quote:
      "My son lights up when his support worker arrives. That alone tells me we finally found the right team.",
    name: "Jenna T.",
    role: "Parent, Kalamunda",
  },
  {
    quote:
      "Professional, warm, and refreshingly honest. They treat my brother like an adult with goals, not a case file.",
    name: "Daniel R.",
    role: "Sibling, High Wycombe",
  },
];
