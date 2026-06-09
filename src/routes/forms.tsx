import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mail, Send } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FormField } from "@/components/FormField";
import { siteContact } from "@/data/site";
import { pageMeta, seo } from "@/lib/seo";
import { buildMailtoUrl, readFormFields, submitViaMailto } from "@/lib/form-submit";
import { FormSuccess } from "@/components/FormSuccess";

export const Route = createFileRoute("/forms")({
  validateSearch: (search: Record<string, unknown>) => ({
    tab: (["referral", "career", "feedback"].includes(String(search.tab))
      ? String(search.tab)
      : "referral") as FormType,
  }),
  head: () => pageMeta(seo.forms),
  component: FormsPage,
});

type FormType = "referral" | "career" | "feedback";

const formCopy: Record<
  FormType,
  { heading: string; intro: string; messageLabel: string; messagePlaceholder: string }
> = {
  referral: {
    heading: "Make a referral",
    intro: "Refer a participant, family member, or support coordinator. We'll respond within one business day.",
    messageLabel: "Referral details",
    messagePlaceholder: "Tell us about the participant's goals, location, and support needs...",
  },
  career: {
    heading: "Career enquiry",
    intro: "Interested in joining our team? Share your experience and the type of role you're looking for.",
    messageLabel: "Your experience and interest",
    messagePlaceholder: "Tell us about your background, qualifications, and availability...",
  },
  feedback: {
    heading: "Feedback & complaints",
    intro: "Your feedback helps us improve. Share compliments, suggestions, or concerns — we take every message seriously.",
    messageLabel: "Your feedback",
    messagePlaceholder: "Tell us what happened and how we can help resolve it...",
  },
};

const formRecipients: Record<FormType, { email: string; subject: string }> = {
  referral: { email: siteContact.email, subject: "Referral — No Assumption website" },
  career: { email: siteContact.email, subject: "Career enquiry — No Assumption website" },
  feedback: { email: siteContact.feedbackEmail, subject: "Feedback — No Assumption website" },
};

function FormsPage() {
  const { tab: active } = Route.useSearch();
  const [sent, setSent] = useState(false);
  const copy = formCopy[active];

  useEffect(() => {
    setSent(false);
  }, [active]);

  return (
    <>
      <PageHero
        eyebrow="Forms"
        title="Get in touch your way"
        subtitle="Referrals, career enquiries, and feedback — we're here to listen."
      />
      <section className="section-teal section-pad-sm">
        <div className="container-page max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Form type">
            {(["referral", "career", "feedback"] as const).map((id) => (
              <Link
                key={id}
                to="/forms"
                search={{ tab: id }}
                role="tab"
                aria-selected={active === id}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  active === id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-primary"
                }`}
              >
                {id === "referral" ? "Referrals" : id === "career" ? "Careers" : "Feedback & Complaints"}
              </Link>
            ))}
          </div>

          {active === "feedback" && (
            <div className="card-elevated p-5 mb-6 flex items-start gap-4">
              <div className="icon-badge size-11 shrink-0">
                <Mail className="size-5" />
              </div>
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold text-deep">Prefer email?</p>
                <p className="mt-1">
                  Send feedback or complaints directly to{" "}
                  <a href={`mailto:${siteContact.feedbackEmail}`} className="text-primary font-medium hover:underline">
                    {siteContact.feedbackEmail}
                  </a>
                </p>
              </div>
            </div>
          )}

          <div className="card-elevated p-8 md:p-10">
            {sent ? (
              <FormSuccess
                message="Your email app should open with your message ready to send. Once sent, we'll respond within one business day."
                fallbackEmail={formRecipients[active].email}
              />
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const { get } = readFormFields(form);
                  const { email, subject } = formRecipients[active];
                  submitViaMailto(
                    buildMailtoUrl({
                      to: email,
                      subject,
                      fields: {
                        Name: get("name"),
                        Email: get("email"),
                        Phone: get("phone"),
                        Message: get("message"),
                      },
                    }),
                  );
                  setSent(true);
                }}
                className="space-y-5"
              >
                <div>
                  <h2 className="heading-md text-xl">{copy.heading}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{copy.intro}</p>
                </div>
                <FormField label="Full name" name="name" required placeholder="Your full name" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField label="Email" name="email" type="email" required placeholder="you@example.com" />
                  <FormField label="Phone" name="phone" type="tel" placeholder="Your phone number" />
                </div>
                <FormField
                  label={copy.messageLabel}
                  name="message"
                  as="textarea"
                  rows={5}
                  required
                  placeholder={copy.messagePlaceholder}
                />
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  <Send className="size-4" /> Submit form
                </button>
              </form>
            )}
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            <Link to="/contact" className="text-primary hover:underline">
              Contact page
            </Link>{" "}
            for phone, email, and WhatsApp details.
          </p>
        </div>
      </section>
    </>
  );
}
