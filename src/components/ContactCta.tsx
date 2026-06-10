import type { ReactNode } from "react";
import { Mail, Phone } from "lucide-react";
import { siteContact } from "@/data/site";
import { mailtoLinks } from "@/lib/mailto";

export type ContactCtaKind = "general" | "feedback" | "referral" | "career" | "meetAndGreet";

const ctaConfig: Record<
  ContactCtaKind,
  { email: string; mailto: string; buttonLabel: string }
> = {
  general: {
    email: siteContact.email,
    mailto: mailtoLinks.enquiry,
    buttonLabel: "Email Us",
  },
  feedback: {
    email: siteContact.feedbackEmail,
    mailto: mailtoLinks.feedback,
    buttonLabel: "Email Feedback & Complaints",
  },
  referral: {
    email: siteContact.email,
    mailto: mailtoLinks.referral,
    buttonLabel: "Email Us",
  },
  career: {
    email: siteContact.email,
    mailto: mailtoLinks.career,
    buttonLabel: "Email Us",
  },
  meetAndGreet: {
    email: siteContact.email,
    mailto: mailtoLinks.meetAndGreet,
    buttonLabel: "Email Us",
  },
};

export function ContactCta({
  kind = "general",
  heading,
  description,
  showPhone = true,
  centered = false,
  onDark = false,
  layout = "default",
  className = "",
}: {
  kind?: ContactCtaKind;
  heading: string;
  description: ReactNode;
  showPhone?: boolean;
  centered?: boolean;
  onDark?: boolean;
  /** Equal-height aligned cards for homepage referral grid. */
  layout?: "default" | "grid-card";
  className?: string;
}) {
  const { email, mailto, buttonLabel } = ctaConfig[kind];
  const isGridCard = layout === "grid-card";

  const rootClass = [
    isGridCard ? "flex h-full flex-col" : "",
    centered ? "text-center" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const headingClass = [
    "heading-md leading-snug",
    onDark ? "text-deep-foreground" : "",
    isGridCard ? "min-h-[4.5rem] shrink-0 md:min-h-[5rem]" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const descriptionClass = [
    "mt-3 leading-relaxed",
    onDark ? "text-trust-muted" : "text-muted-foreground",
    centered && !isGridCard ? "max-w-lg mx-auto" : "",
    isGridCard ? "min-h-[6.75rem] flex-1" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const emailClass = `font-semibold break-all transition-colors ${
    onDark ? "text-deep-foreground hover:text-label-on-dark" : "text-deep hover:text-primary"
  }`;

  const buttonClass = isGridCard
    ? "w-full justify-center min-h-[3.125rem] px-4 text-sm leading-snug text-center"
    : "w-full sm:w-auto justify-center";

  const actionsClass = [
    "mt-6 flex gap-3",
    isGridCard ? "shrink-0 flex-col" : "flex-col sm:flex-row flex-wrap",
    centered && !isGridCard ? "sm:justify-center" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClass}>
      <h2 className={headingClass}>{heading}</h2>
      <p className={descriptionClass}>{description}</p>
      <p className="mt-5 shrink-0">
        <a href={`mailto:${email}`} className={emailClass}>
          {email}
        </a>
      </p>
      <div className={actionsClass}>
        <a href={mailto} className={`btn-primary ${buttonClass}`}>
          <Mail className="size-4 shrink-0" /> {buttonLabel}
        </a>
        {showPhone && (
          <a href={siteContact.phoneHref} className={`btn-teal ${buttonClass}`}>
            <Phone className="size-4 shrink-0" /> Call Us
          </a>
        )}
      </div>
    </div>
  );
}
