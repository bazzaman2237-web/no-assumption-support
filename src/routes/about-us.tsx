import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Eye, Users, ArrowRight } from "lucide-react";
import {
  images,
  missionStatement,
  visionStatement,
  aboutIntro,
  aboutExtended,
  founderStory,
  founderBio,
  teamMembers,
} from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { pageMeta, seo } from "@/lib/seo";

export const Route = createFileRoute("/about-us")({
  head: () => pageMeta(seo.about),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="People first. Always."
        subtitle="We're a Forrestfield-based disability support service built on one simple belief: never assume, always ask."
      />

      <section className="section-white section-pad-sm">
        <div className="container-page grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <img
            src={images.about}
            alt="No Assumption support worker with a participant"
            loading="lazy"
            width={800}
            height={1290}
            className="rounded-[2rem] w-full h-[460px] object-cover shadow-xl"
          />
          <div>
            <h2 className="font-display text-4xl font-semibold text-deep leading-tight">
              A different kind of disability support service.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">{aboutIntro}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">{aboutExtended}</p>
          </div>
        </div>
      </section>

      <section className="section-teal section-pad-sm">
        <div className="container-page grid md:grid-cols-2 gap-6">
          <div className="card-elevated rounded-3xl p-8 md:p-10">
            <div className="icon-badge size-14">
              <Heart className="size-6" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold text-deep">Our Mission</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{missionStatement}</p>
          </div>
          <div className="card-elevated rounded-3xl p-8 md:p-10">
            <div className="icon-badge size-14">
              <Eye className="size-6" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold text-deep">Our Vision</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{visionStatement}</p>
          </div>
        </div>
      </section>

      <section className="section-white section-pad-sm border-t border-border">
        <div className="container-page max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-deep">
            Compassionate NDIS support you can trust
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">{founderStory}</p>
          <h3 className="mt-10 font-display text-2xl font-semibold text-deep">About me</h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">{founderBio}</p>
        </div>
      </section>

      <section className="section-sky section-pad-sm">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <Users className="size-12 text-primary mx-auto" />
            <h2 className="mt-5 font-display text-4xl font-semibold text-deep">Meet our team</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Behind every service we provide is a dedicated team of professionals, each bringing
              their unique expertise and enthusiasm to our business.
            </p>
          </div>
          <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <li key={member.name} className="card-elevated rounded-3xl overflow-hidden text-center">
                <div className="aspect-square bg-warm p-4 sm:p-5">
                  <img
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    loading="lazy"
                    className="size-full rounded-2xl object-contain"
                  />
                </div>
                <div className="px-5 py-5 sm:px-6 sm:py-6">
                  <h3 className="font-display text-lg font-semibold text-deep">{member.name}</h3>
                  <p className="mt-2 text-sm text-primary font-medium">{member.role}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every support worker on our team is background-checked, trained in person-centred
            practice, and chosen for character — the curiosity to ask, the patience to listen, and
            the warmth that turns support into genuine connection.
          </p>
          <div className="mt-8 text-center">
            <Link to="/contact" className="inline-flex btn-primary">
              Get in touch <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
