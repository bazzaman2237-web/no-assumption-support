import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/site";
import { PageHero } from "./about";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | No Assumption Support Service" },
      {
        name: "description",
        content:
          "NDIS services across Perth: transition support, life skills, personal activities, community participation, shared living, and positive behaviour support.",
      },
      { property: "og:title", content: "NDIS Services in Perth | No Assumption" },
      {
        property: "og:description",
        content: "Six person-centred NDIS services delivered with warmth and professionalism.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="What we do, how you choose."
        subtitle="Six core NDIS services — combined and shaped around your goals, your week, and your wishes."
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <article
              key={s.slug}
              className="group relative bg-card rounded-3xl p-8 md:p-10 border border-border hover:border-primary/40 hover:-translate-y-1 transition-all shadow-sm hover:shadow-xl"
            >
              <div className="flex items-start gap-5">
                <div className="grid place-items-center size-16 rounded-2xl bg-gradient-to-br from-primary to-deep text-primary-foreground shrink-0 shadow-md">
                  <s.icon className="size-7" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                    Service {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-1 font-display text-2xl md:text-3xl font-semibold text-deep">
                    {s.title}
                  </h2>
                </div>
              </div>
              <p className="mt-5 text-muted-foreground leading-relaxed">{s.long}</p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all"
              >
                Enquire about this service <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="rounded-[2rem] bg-deep text-primary-foreground p-10 md:p-14 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">
            Not sure which service fits?
          </h2>
          <p className="mt-4 opacity-90 max-w-xl mx-auto">
            That's exactly the kind of question we love. Book a free consultation and we'll work it
            out together.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 font-semibold hover:bg-accent/90"
          >
            Book Consultation <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
