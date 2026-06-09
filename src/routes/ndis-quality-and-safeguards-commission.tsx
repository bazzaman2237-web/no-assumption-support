import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FaqAccordion } from "@/components/FaqAccordion";
import { siteContact } from "@/data/site";
import { mailtoLinks } from "@/lib/mailto";
import { pageMeta, seo } from "@/lib/seo";

export const Route = createFileRoute("/ndis-quality-and-safeguards-commission")({
  head: () => pageMeta(seo.ndisQualitySafeguards),
  component: NdisQualitySafeguardsPage,
});

const faqs = [
  {
    q: "What is the NDIS Quality and Safeguards Commission?",
    a: "The NDIS Quality and Safeguards Commission is an independent body that works to improve the quality and safety of NDIS services. They set standards, handle complaints, and regulate NDIS providers to ensure participants receive high-quality support.",
  },
  {
    q: "How does No Assumption Support Service meet these standards?",
    a: "We review our practices against the NDIS Practice Standards — including staff training, incident management, transparent complaint resolution, and continuous improvement. Our NDIS registration is currently in progress with the Commission; we welcome enquiries while finalisation is underway.",
  },
  {
    q: "What are my rights as an NDIS participant?",
    a: "As an NDIS participant, you have the right to safe and quality services, to be treated with dignity and respect, to have your privacy protected, and to make choices about your support. We are here to uphold these rights.",
  },
  {
    q: "How can I provide feedback or raise a concern?",
    a: `We encourage all participants to provide feedback or raise any concerns at any time. You can speak directly with your support worker or support coordinator, call us on ${siteContact.phone}, or email ${siteContact.feedbackEmail}.`,
  },
  {
    q: "What if I am unhappy with a service?",
    a: "If you are unhappy with any aspect of your service, please contact us immediately. We will listen to your concerns and work with you to find a resolution. You also have the right to contact the NDIS Quality and Safeguards Commission directly.",
  },
  {
    q: "How does the Commission protect me?",
    a: "The Commission protects NDIS participants by setting clear rules for providers, investigating complaints, taking action against providers who fail to meet standards, and providing information and education about rights and responsibilities.",
  },
  {
    q: "Can I choose my support workers?",
    a: "Yes. Participant choice and control are central to the NDIS. We work with you to match support workers who best fit your needs and preferences, ensuring you feel comfortable and respected.",
  },
  {
    q: "Where can I find more information about my rights?",
    a: "You can find more information about your rights as an NDIS participant on the NDIS Quality and Safeguards Commission website, or visit our NDIS Resources page for helpful links and documents.",
  },
];

function NdisQualitySafeguardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & Safeguards"
        title="Understanding NDIS Quality and Safeguards"
        subtitle="At No Assumption Support Service, we don't assume — we listen. We work toward NDIS Practice Standards so every participant receives safe, respectful, and high-quality support that protects their rights and dignity."
      />

      <section className="section-white section-pad-sm">
        <div className="container-page max-w-3xl">
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-warm p-6 md:p-8 mb-10">
            <div className="grid place-items-center size-12 rounded-2xl bg-secondary text-primary shrink-0">
              <ShieldCheck className="size-6" aria-hidden="true" />
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-deep">Your rights, our commitment</h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Knowing about the NDIS Quality and Safeguards Commission helps participants and families feel safe and
                supported. It reassures you that your rights matter, your concerns will be taken seriously, and the
                support you receive meets high standards of care and accountability.
              </p>
            </div>
          </div>

          <FaqAccordion faqs={faqs} />

          <p className="mt-8 text-sm text-muted-foreground">
            Official Commission website:{" "}
            <a
              href="https://www.ndiscommission.gov.au"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              ndiscommission.gov.au
              <ExternalLink className="size-3.5" aria-hidden="true" />
            </a>
            . More links on our{" "}
            <Link to="/ndis-resources" className="text-primary hover:underline">
              NDIS Resources
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="rounded-[2rem] bg-deep text-deep-foreground p-10 md:p-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">Confident in your care</h2>
          <p className="mt-4 opacity-90 max-w-2xl mx-auto leading-relaxed">
            We want you to feel confident, informed, and comfortable reaching out. Ask questions, share feedback, and
            raise any concerns — knowing you will be listened to and supported.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Contact us
            </Link>
            <a
              href={mailtoLinks.feedback}
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-sm border border-white/50 text-white hover:bg-white/10 transition-colors"
            >
              Email Feedback &amp; Complaints
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
