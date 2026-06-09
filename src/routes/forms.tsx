import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactCta, type ContactCtaKind } from "@/components/ContactCta";
import { PageHero } from "@/components/PageHero";
import { pageMeta, seo } from "@/lib/seo";

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

const tabCopy: Record<
  FormType,
  { kind: ContactCtaKind; heading: string; description: string }
> = {
  referral: {
    kind: "referral",
    heading: "Make a referral",
    description:
      "Refer a participant, family member, or support coordinator. Email us with the details and we'll respond within one business day.",
  },
  career: {
    kind: "career",
    heading: "Career enquiry",
    description:
      "Interested in joining our team? Email us your experience, qualifications, and the type of role you're looking for.",
  },
  feedback: {
    kind: "feedback",
    heading: "Feedback & complaints",
    description:
      "Your feedback helps us improve. Share compliments, suggestions, or concerns — we take every message seriously.",
  },
};

function FormsPage() {
  const { tab: active } = Route.useSearch();
  const copy = tabCopy[active];

  return (
    <>
      <PageHero
        eyebrow="Forms"
        title="Get in touch your way"
        subtitle="Referrals, career enquiries, and feedback — email or call us directly."
      />
      <section className="section-teal section-pad-sm">
        <div className="container-page max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Enquiry type">
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

          <div className="card-elevated p-8 md:p-10">
            <ContactCta
              kind={copy.kind}
              heading={copy.heading}
              description={copy.description}
              showPhone
            />
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            <Link to="/contact" className="text-primary hover:underline">
              Contact page
            </Link>{" "}
            for phone, email, WhatsApp, and address details.
          </p>
        </div>
      </section>
    </>
  );
}
