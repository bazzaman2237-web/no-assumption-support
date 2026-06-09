import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { culturalDiversity } from "@/data/pages";
import { pageMeta, seo } from "@/lib/seo";

export const Route = createFileRoute("/cultural-diversity")({
  head: () => pageMeta(seo.culturalDiversity),
  component: () => {
    const d = culturalDiversity;
    return (
      <>
        <PageHero eyebrow={d.hero.eyebrow} title={d.hero.title} subtitle={d.hero.subtitle} />
        <section className="section-white section-pad-sm">
          <div className="container-page max-w-3xl space-y-5">
            {d.sections.map((s) => (
              <div key={s.title} className="card-elevated p-8">
                <h2 className="heading-md text-xl">{s.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
            <p className="text-center text-muted-foreground leading-relaxed">{d.closing}</p>
            <div className="text-center flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Get in touch <ArrowRight className="size-4" />
              </Link>
              <Link to="/meet-and-greet" className="btn-outline">
                Book Your FREE Meet & Greet
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  },
});
