import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { PageHero } from "./about";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs | No Assumption Support Service" },
      {
        name: "description",
        content:
          "Answers to common questions about NDIS support, eligibility, plans, and working with No Assumption Support Service in Perth.",
      },
      { property: "og:title", content: "FAQs | No Assumption Support Service" },
      {
        property: "og:description",
        content: "Common questions about our NDIS services in Perth, answered plainly.",
      },
    ],
  }),
  component: FaqsPage,
});

const faqs = [
  {
    q: "Are you a registered NDIS provider?",
    a: "Yes. No Assumption Support Service is a fully NDIS-registered provider, which means we meet the NDIS Quality and Safeguards Commission's standards and can support participants across all plan-management types.",
  },
  {
    q: "Which suburbs do you service?",
    a: "We're based in Forrestfield and service participants across the Perth metropolitan area, including Kalamunda, High Wycombe, Maida Vale, Midland, Cannington, Belmont, and surrounds. Get in touch if you're unsure — we'll let you know honestly.",
  },
  {
    q: "How do we get started?",
    a: "Call, email or WhatsApp us for a friendly, no-obligation chat. We'll talk through your goals and current plan, answer any questions, and if it feels like a fit, arrange a meet-and-greet with potential support workers.",
  },
  {
    q: "Can I choose my support worker?",
    a: "Absolutely. Choice and control are the heart of the NDIS — and the heart of how we work. We'll introduce you to options and you decide who works with you. If a match isn't right, we'll find a better one.",
  },
  {
    q: "What if my needs change?",
    a: "They will, and that's okay. We review supports regularly and adapt quickly when life shifts — new goals, new routines, new plan reviews. Just tell us, and we'll adjust.",
  },
  {
    q: "Do you support people who aren't on the NDIS?",
    a: "Our core services are designed for NDIS participants, but we're happy to talk through private support arrangements case-by-case. Reach out to discuss.",
  },
  {
    q: "How are your support workers vetted?",
    a: "Every team member holds an NDIS Worker Screening Check, Working with Children Check (where applicable), First Aid, and CPR certification. We also conduct reference checks and ongoing training in person-centred practice.",
  },
  {
    q: "Is there a minimum or maximum amount of support I can book?",
    a: "We're flexible. Whether you need an hour a week or 24/7 supported living, we'll build a roster that works for you and your plan.",
  },
];

function FaqsPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Questions, answered plainly."
        subtitle="Can't find what you're after? Reach out — we love a good question."
      />

      <section className="container-page py-16 md:py-24 max-w-3xl">
        <ul className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li
                key={f.q}
                className="bg-card border border-border rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-display text-lg md:text-xl font-semibold text-deep">
                    {f.q}
                  </span>
                  <span className="shrink-0 grid place-items-center size-9 rounded-full bg-secondary text-primary">
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</div>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
