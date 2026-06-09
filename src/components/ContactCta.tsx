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
  className = "",
}: {
  kind?: ContactCtaKind;
  heading: string;
  description: ReactNode;
  showPhone?: boolean;
  centered?: boolean;
  onDark?: boolean;
  className?: string;
}) {
  const { email, mailto, buttonLabel } = ctaConfig[kind];

  return (
    <div className={`${centered ? "text-center" : ""} ${className}`.trim()}>
      <h2 className={`heading-md ${onDark ? "text-deep-foreground" : ""}`}>{heading}</h2>
      <p
        className={`mt-3 leading-relaxed ${onDark ? "text-trust-muted" : "text-muted-foreground"} ${centered ? "max-w-lg mx-auto" : ""}`}
      >
        {description}
      </p>
      <p className="mt-5">
        <a
          href={`mailto:${email}`}
          className={`font-semibold break-all transition-colors ${
            onDark ? "text-deep-foreground hover:text-label-on-dark" : "text-deep hover:text-primary"
          }`}
        >
          {email}
        </a>
      </p>
      <div className={`mt-6 flex flex-wrap gap-3 ${centered ? "justify-center" : ""}`}>
        <a href={mailto} className="btn-primary">
          <Mail className="size-4" /> {buttonLabel}
        </a>
        {showPhone && (
          <a href={siteContact.phoneHref} className="btn-teal">
            <Phone className="size-4" /> Call Us
          </a>
        )}
      </div>
    </div>
  );
}
