import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Eye, Compass, Users, ArrowRight } from "lucide-react";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | No Assumption Support Service" },
      {
        name: "description",
        content:
          "Locally owned, NDIS-registered support in Forrestfield, Perth. Meet the team behind Support Without Assumptions.",
      },
      { property: "og:title", content: "About | No Assumption Support Service" },
      {
        property: "og:description",
        content: "Person-centred NDIS support in Perth — who we are and why we never assume.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="People first. Always."
        subtitle="We're a locally owned, NDIS-registered provider built on one stubborn idea: ask before you act."
      />

      <section className="container-page py-16 md:py-24 grid lg:grid-cols-2 gap-14 items-center">
        <img
          src={aboutImg}
          alt="No Assumption support worker with a participant"
          loading="lazy"
          width={1024}
          height={1024}
          className="rounded-[2rem] w-full h-[460px] object-cover shadow-xl"
        />
        <div>
          <h2 className="font-display text-4xl font-semibold text-deep leading-tight">
            A different kind of support provider.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            No Assumption Support Service was founded in Forrestfield to deliver NDIS support the
            way it was always meant to be: shaped by the person at the centre of the plan. We've
            seen too many participants told what they need before anyone listened. We refuse to do
            that.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From our base in Perth's eastern suburbs, our team works across the metro area to
            deliver flexible, dignified, professional support — at home, in the community, and
            through every transition life brings.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="container-page grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Eye,
              title: "Our Vision",
              body: "A Perth where every person with disability lives the life they choose — supported, never spoken for.",
            },
            {
              icon: Heart,
              title: "Our Mission",
              body: "To deliver NDIS support that listens first, respects always, and adapts to the person — not the other way around.",
            },
            {
              icon: Compass,
              title: "Our Values",
              body: "Curiosity. Consent. Consistency. Community. We hold ourselves to these every single shift.",
            },
          ].map((v) => (
            <div key={v.title} className="bg-card rounded-3xl p-8 border border-border shadow-sm">
              <div className="grid place-items-center size-14 rounded-2xl bg-primary text-primary-foreground">
                <v.icon className="size-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-deep">{v.title}</h3>
              <p className="mt-3 text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-16 md:py-24 text-center">
        <Users className="size-12 text-primary mx-auto" />
        <h2 className="mt-5 font-display text-4xl font-semibold text-deep">
          A team chosen with care.
        </h2>
        <p className="mt-5 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Every support worker on our team is background-checked, NDIS Worker Screening cleared, and
          trained in person-centred practice. But more than credentials, we hire for character — the
          curiosity to ask, the patience to listen, and the warmth that turns support into
          friendship.
        </p>
        <Link to="/contact" className="mt-8 inline-flex btn-primary">
          Get in touch <ArrowRight className="size-4" />
        </Link>
      </section>
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-warm">
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-primary/15 blur-3xl" />
      <div className="container-page relative py-16 md:py-24 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </span>
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-semibold text-deep leading-[1.05]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
