import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink, FileText, BookOpen, Phone, LifeBuoy } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { siteContact } from "@/data/site";
import { pageMeta, seo } from "@/lib/seo";

export const Route = createFileRoute("/ndis-resources")({
  head: () => pageMeta(seo.ndisResources),
  component: ResourcesPage,
});

const groups = [
  {
    icon: BookOpen,
    title: "Understanding the NDIS",
    items: [
      { label: "NDIS Official Website", href: "https://www.ndis.gov.au" },
      {
        label: "Am I eligible? — Access Checklist",
        href: "https://www.ndis.gov.au/applying-access-ndis/am-i-eligible",
      },
      {
        label: "Understanding your plan",
        href: "https://www.ndis.gov.au/participants/using-your-plan",
      },
    ],
  },
  {
    icon: FileText,
    title: "Plans, Funding & Reviews",
    items: [
      {
        label: "Plan management options",
        href: "https://www.ndis.gov.au/participants/using-your-plan/managing-your-plan",
      },
      {
        label: "Preparing for your plan review",
        href: "https://www.ndis.gov.au/participants/reviewing-your-plan-and-goals",
      },
      {
        label: "NDIS Pricing Arrangements",
        href: "https://www.ndis.gov.au/providers/pricing-arrangements",
      },
    ],
  },
  {
    icon: LifeBuoy,
    title: "Safeguards & Advocacy",
    items: [
      {
        label: "NDIS Quality & Safeguards Commission",
        href: "https://www.ndiscommission.gov.au",
      },
      {
        label: "Disability Advocacy Finder",
        href: "https://disabilityadvocacyfinder.dss.gov.au",
      },
      {
        label: "People With Disabilities WA",
        href: "https://www.pwdwa.org",
      },
    ],
  },
  {
    icon: Phone,
    title: "Support Lines",
    items: [
      { label: "NDIS Contact: 1800 800 110", href: "tel:1800800110" },
      { label: "Lifeline: 13 11 14", href: "tel:131114" },
      { label: "Beyond Blue: 1300 22 4636", href: "tel:1300224636" },
    ],
  },
];

function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="NDIS Resources"
        title="Helpful links, in one place."
        subtitle="A curated list of the resources we share most often with the participants and families we support."
      />

      <section className="container-page py-16 md:py-24 grid md:grid-cols-2 gap-6">
        {groups.map((g) => (
          <div key={g.title} className="bg-card rounded-3xl p-8 border border-border shadow-sm">
            <div className="flex items-center gap-4">
              <div className="grid place-items-center size-12 rounded-2xl bg-secondary text-primary">
                <g.icon className="size-5" />
              </div>
              <h2 className="font-display text-2xl font-semibold text-deep">{g.title}</h2>
            </div>
            <ul className="mt-6 space-y-3">
              {g.items.map((it) => (
                <li key={it.label}>
                  <a
                    href={it.href}
                    target={it.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center justify-between gap-3 p-3 rounded-xl hover:bg-muted group transition-colors"
                  >
                    <span className="font-medium text-foreground/90 group-hover:text-primary">
                      {it.label}
                    </span>
                    <ExternalLink className="size-4 text-muted-foreground group-hover:text-primary shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="container-page pb-10">
        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-muted-foreground leading-relaxed">
            Learn how the NDIS Quality and Safeguards Commission protects your rights and how we uphold quality
            standards.
          </p>
          <Link to="/ndis-quality-and-safeguards-commission" className="btn-teal shrink-0">
            NDIS Quality & Safeguards
          </Link>
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="rounded-[2rem] bg-warm p-10 md:p-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-deep">
            Need help making sense of it all?
          </h2>
          <p className="mt-4 text-warm-foreground/80 max-w-xl mx-auto">
            NDIS paperwork can be confusing. Call us — we'll walk you through it in plain language,
            no obligation.
          </p>
          <a href={siteContact.phoneHref} className="mt-7 inline-flex btn-primary">
            Call {siteContact.phone}
          </a>
        </div>
      </section>
    </>
  );
}
