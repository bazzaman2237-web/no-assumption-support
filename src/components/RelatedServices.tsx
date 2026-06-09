import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { homeServicePreviews } from "@/data/pages";

const relatedByPath: Record<string, string[]> = {
  "/ndis-supports": ["/daily-living-support", "/guidance", "/support-coordination"],
  "/daily-living-support": ["/ndis-supports", "/personal-care-and-transitions", "/accommodation-supports"],
  "/support-coordination": ["/guidance", "/collaboration", "/ndis-supports"],
  "/accommodation-supports": ["/daily-living-support", "/support-coordination", "/personal-care-and-transitions"],
  "/personal-care-and-transitions": ["/daily-living-support", "/ndis-supports", "/accommodation-supports"],
  "/positive-behaviour-support": ["/collaboration", "/ndis-supports", "/daily-living-support"],
  "/guidance": ["/support-coordination", "/ndis-supports", "/ndis-funding"],
  "/collaboration": ["/support-coordination", "/positive-behaviour-support", "/ndis-supports"],
};

export function RelatedServices({ excludePath }: { excludePath: string }) {
  const preferred = relatedByPath[excludePath];
  const related = (preferred
    ? preferred
        .map((path) => homeServicePreviews.find((s) => s.to === path))
        .filter((s): s is (typeof homeServicePreviews)[number] => Boolean(s))
    : homeServicePreviews.filter((s) => s.to !== excludePath).slice(0, 3)
  ).slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="section-sky section-pad-sm" aria-labelledby="related-services-heading">
      <div className="container-page">
        <h2 id="related-services-heading" className="heading-md text-center mb-8">
          Related services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {related.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="card-elevated p-5 hover:-translate-y-0.5 transition-transform group"
            >
              <p className="font-display font-semibold text-deep group-hover:text-primary transition-colors">
                {s.title}
              </p>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{s.description}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Learn More <ArrowRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
