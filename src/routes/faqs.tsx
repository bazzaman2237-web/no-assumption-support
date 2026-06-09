import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { FaqAccordion } from "@/components/FaqAccordion";
import { siteContact, serviceArea } from "@/data/site";
import { pageMeta, seo } from "@/lib/seo";

export const Route = createFileRoute("/faqs")({
  head: () => pageMeta(seo.faqs),
  component: FaqsPage,
});

const suburbList = [...serviceArea.serviceSuburbs, "and surrounds"].join(", ");

const faqs = [
  {
    q: "What is your NDIS registration status?",
    a: `Our NDIS registration is currently in progress with the NDIS Quality and Safeguards Commission. We welcome enquiries and can discuss support options while registration is being finalised. Call us on ${siteContact.phone} to learn more.`,
  },
  {
    q: "Which suburbs do you service?",
    a: `We're based in ${serviceArea.suburb} and support participants across the ${serviceArea.metro}, including ${suburbList}. Get in touch if you're unsure — we'll let you know honestly.`,
  },
  {
    q: "What is the NDIS?",
    a: "The National Disability Insurance Scheme (NDIS) is a government program that provides funding and support to people with permanent and significant disabilities. It helps participants access services and supports that improve independence, daily living, and community participation.",
  },
  {
    q: "Who is eligible for the NDIS?",
    a: "You may be eligible if you are under 65 years of age, are an Australian citizen, permanent resident, or Protected Special Category Visa holder, and have a permanent and significant disability that affects your daily life.",
  },
  {
    q: "How do I apply for the NDIS?",
    a: "You can apply by calling the NDIS on 1800 800 110, completing an Access Request Form, asking your GP or allied health professional for supporting evidence, or getting help from a Local Area Coordinator (LAC) or support provider.",
  },
  {
    q: "What supports can the NDIS fund?",
    a: "NDIS may fund supports such as daily living assistance, community participation, personal care support, capacity building supports, therapy and allied health services, transport supports, and assistive technology and equipment. Funding depends on your individual plan and goals.",
  },
  {
    q: "Can I choose my support worker?",
    a: "Yes. Choice and control are central to the NDIS. You have the right to choose your own registered or non-registered provider, depending on how your plan is managed. We focus on matching participants with workers who suit their personality, goals, and preferences.",
  },
  {
    q: "Do I need to be NDIS-approved to contact your service?",
    a: "No. You're welcome to contact us even if you are not yet approved for the NDIS. We can provide general information, explain how supports work, and guide you on the next steps toward accessing services.",
  },
  {
    q: "Can you help me understand my NDIS plan?",
    a: "Yes. We take the time to walk through your plan with you and explain funding categories, what supports you can use, and how your budget can best support your goals and daily needs — at a pace that suits you.",
  },
  {
    q: "Do you work with self-managed and plan-managed participants?",
    a: "Yes. We work with both self-managed and plan-managed NDIS participants. We can provide services and issue invoices in line with your plan management type, and help you understand billing and claims processing.",
  },
  {
    q: "How do we get started?",
    a: "Book your FREE 45-Minute Meet & Greet, or call, email, or WhatsApp us for a friendly, no-obligation chat. We'll talk through your goals and current plan, answer any questions, and if it feels like a fit, help you take the next step.",
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
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Questions, answered plainly."
        subtitle="Can't find what you're after? Reach out — we love a good question."
      />

      <section className="section-white section-pad-sm">
        <div className="container-page max-w-3xl">
          <FaqAccordion faqs={faqs} />
        </div>
      </section>
    </>
  );
}
