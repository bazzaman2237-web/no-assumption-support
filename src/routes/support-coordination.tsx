import { createFileRoute } from "@tanstack/react-router";
import { supportCoordination } from "@/data/pages";
import { SpecialistServiceLayout } from "@/components/ServiceDetailLayout";
import { pageMeta, seo } from "@/lib/seo";

export const Route = createFileRoute("/support-coordination")({
  head: () => pageMeta(seo.supportCoordination),
  component: () => {
    const d = supportCoordination;
    return (
      <SpecialistServiceLayout
        eyebrow={d.hero.eyebrow}
        title={d.hero.title}
        intro={d.intro}
        path="/support-coordination"
        offerTitle={d.howWeSupport.title}
        offerItems={d.howWeSupport.items}
        benefitsTitle={d.successLooksLike.title}
        benefitsItems={d.successLooksLike.items}
        whyChoose={d.whyChoose.items.join(" ")}
        extraSections={[
          { title: d.approach.title, body: d.approach.body, items: d.approach.items },
          { title: d.afterContact.title, steps: d.afterContact.steps },
        ]}
        ctaLabel="Contact us about Support Coordination"
      />
    );
  },
});
