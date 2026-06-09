import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { homeServicePreviews, meetAndGreet } from "@/data/pages";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { ServicePreviewCard } from "@/components/ServicePreviewCard";
import { pageMeta, seo } from "@/lib/seo";

export const Route = createFileRoute("/our-services")({
  head: () => pageMeta(seo.services),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Your journey, your way."
        subtitle="Person-centred NDIS support services — explore each service for full details."
        compact
      />

      <section className="section-teal section-pad-sm">
        <div className="container-page">
          <SectionHeader title="All services" subtitle="Select a service to learn more." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 items-stretch">
            {homeServicePreviews.map((s) => (
              <ServicePreviewCard
                key={s.to}
                title={s.title}
                description={s.description}
                to={s.to}
                image={s.image}
                buttonLabel={s.buttonLabel}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-sky section-pad-sm">
        <div className="container-page max-w-3xl">
          <div className="rounded-card section-trust p-10 md:p-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest opacity-80">{meetAndGreet.title}</p>
            <h2 className="heading-lg mt-3 text-deep-foreground">{meetAndGreet.heading}</h2>
            <p className="mt-3 opacity-90">{meetAndGreet.teaser}</p>
            <Link to="/meet-and-greet" className="mt-7 btn-primary">
              {meetAndGreet.cta} <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
