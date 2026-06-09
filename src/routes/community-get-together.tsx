import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { communityGetTogether } from "@/data/pages";
import { pageMeta, seo } from "@/lib/seo";

export const Route = createFileRoute("/community-get-together")({
  head: () => pageMeta(seo.communityGetTogether),
  component: () => {
    const d = communityGetTogether;
    return (
      <>
        <PageHero eyebrow={d.hero.eyebrow} title={d.hero.title} subtitle={d.hero.subtitle} />
        <section className="section-white section-pad-sm">
          <div className="container-page max-w-3xl space-y-4">
            {d.body.map((p) => (
              <p key={p.slice(0, 32)} className="text-muted-foreground text-lg leading-relaxed">{p}</p>
            ))}
          </div>
        </section>
        <section className="section-sky section-pad-sm">
          <div className="container-page max-w-3xl">
            <div className="card-elevated rounded-3xl p-8">
              <ul className="space-y-3">
                {d.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-8 inline-flex btn-teal">
                Ask about our next event <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  },
});
