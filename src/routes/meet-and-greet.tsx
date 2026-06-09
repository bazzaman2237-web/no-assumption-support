import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ContactCta } from "@/components/ContactCta";
import { PageHero } from "@/components/PageHero";
import { meetAndGreet } from "@/data/pages";
import { pageMeta, seo } from "@/lib/seo";

export const Route = createFileRoute("/meet-and-greet")({
  head: () => pageMeta(seo.meetAndGreet),
  component: () => {
    const d = meetAndGreet;
    return (
      <>
        <PageHero eyebrow={d.title} title={d.heading} subtitle={d.body} />
        <section className="section-white section-pad-sm">
          <div className="container-page max-w-3xl">
            <div className="hero-panel p-8 md:p-12">
              <h2 className="heading-md">What to expect</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{d.teaser}</p>
              <ul className="mt-6 space-y-4">
                {d.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-base md:text-lg">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 card-elevated p-7 md:p-8">
                <ContactCta
                  kind="meetAndGreet"
                  heading="Book your FREE Meet & Greet"
                  description="Email us to arrange a relaxed 45-minute introduction — no obligation, no pressure."
                  showPhone
                />
              </div>
              <div className="mt-6 text-center">
                <Link to="/forms" className="btn-outline">
                  Make a Referral <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  },
});
