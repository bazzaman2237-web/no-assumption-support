import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { accommodationSupports } from "@/data/pages";
import { FaqAccordion } from "@/components/FaqAccordion";
import { BulletCard, StepsList } from "@/components/PageSections";
import { RelatedServices } from "@/components/RelatedServices";
import { pageMeta, seo } from "@/lib/seo";

export const Route = createFileRoute("/accommodation-supports")({
  head: () => pageMeta(seo.accommodationSupports),
  component: AccommodationSupportsPage,
});

function AccommodationSupportsPage() {
  const d = accommodationSupports;
  return (
    <>
      <PageHero eyebrow={d.hero.eyebrow} title={d.hero.title} subtitle={d.hero.subtitle} compact />
      <section className="section-white section-pad-sm">
        <div className="container-page max-w-3xl space-y-4">
          {d.intro.map((p) => (
            <p key={p.slice(0, 32)} className="text-muted-foreground leading-relaxed">{p}</p>
          ))}
        </div>
      </section>
      <section className="section-teal section-pad-sm">
        <div className="container-page grid lg:grid-cols-2 gap-5">
          <BulletCard title={d.howWeSupportYou.title} items={d.howWeSupportYou.items} />
          <BulletCard title={d.suitableIf.title} items={d.suitableIf.items} />
        </div>
      </section>
      <section className="section-sky section-pad-sm">
        <div className="container-page max-w-3xl">
          <BulletCard title={d.personCentred.title} body={d.personCentred.body} items={d.personCentred.items} />
        </div>
      </section>
      <section className="section-white section-pad-sm">
        <div className="container-page max-w-3xl">
          <h2 className="heading-md text-center mb-8">Frequently Asked Questions</h2>
          <FaqAccordion faqs={d.faqs} />
        </div>
      </section>
      <section className="section-teal section-pad-sm">
        <div className="container-page max-w-3xl space-y-6">
          <StepsList title={d.whatHappensNext.title} steps={d.whatHappensNext.steps} />
          <div className="rounded-card section-trust p-10 text-center">
            <h2 className="heading-md text-deep-foreground">{d.exploreCta.title}</h2>
            <p className="mt-3 opacity-90">{d.exploreCta.body}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                {d.exploreCta.button} <ArrowRight className="size-4" />
              </Link>
              <Link to="/meet-and-greet" className="inline-flex items-center gap-2 rounded-full border border-deep-foreground/40 px-8 py-4 font-semibold text-deep-foreground hover:bg-deep-foreground/10 transition-colors">
                Book Your FREE Meet & Greet
              </Link>
            </div>
          </div>
        </div>
      </section>
      <RelatedServices excludePath="/accommodation-supports" />
    </>
  );
}
