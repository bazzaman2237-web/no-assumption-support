import { createFileRoute } from "@tanstack/react-router";
import { personalCareTransitions } from "@/data/pages";
import { SpecialistServiceLayout } from "@/components/ServiceDetailLayout";
import { pageMeta, seo } from "@/lib/seo";

export const Route = createFileRoute("/personal-care-and-transitions")({
  head: () => pageMeta(seo.personalCareTransitions),
  component: () => {
    const d = personalCareTransitions;
    return (
      <SpecialistServiceLayout
        eyebrow={d.hero.eyebrow}
        title={d.hero.title}
        intro={d.introduction}
        path="/personal-care-and-transitions"
        offerTitle={d.howWeSupport.title}
        offerItems={[]}
        offerSections={[
          { title: "Personal care", items: d.howWeSupport.personalCare },
          { title: "Life transitions", items: d.howWeSupport.transitions },
        ]}
        benefitsTitle={d.ourGoal.title}
        benefitsItems={d.ourGoal.items}
        whyChoose={d.ourGoal.body}
      />
    );
  },
});
