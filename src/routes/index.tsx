import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Star,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  HeartHandshake,
  UserCheck,
  ShieldCheck,
  Clock,
  Users,
} from "lucide-react";
import {
  homeTrustHighlights,
  homeWhyChooseUs,
  homeCommitment,
  homeFeatureCards,
  images,
  siteContact,
} from "@/data/site";
import { homeServicePreviews, meetAndGreet, culturalDiversity } from "@/data/pages";
import { SectionHeader } from "@/components/SectionHeader";
import { ServicePreviewCard } from "@/components/ServicePreviewCard";
import { ContactCta } from "@/components/ContactCta";
import { CommitmentCollage } from "@/components/CommitmentCollage";
import {
  AnimatedHeading,
  HeroEntrance,
  HeroRevealItem,
  RevealItem,
  RevealSection,
} from "@/components/Reveal";
import { pageMeta, seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => pageMeta(seo.home),
  component: HomePage,
});
const trustIcons = [UserCheck, ShieldCheck, Clock, Users];
function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Commitment />
      <ServicesPreview />
      <WhyChooseUs />
      <MeetAndGreetCta />
      <CulturalTeaser />
      <FormsCta />
      <ContactSection />
    </>
  );
}
function Hero() {
  return (
    <section className="section-hero-wrap pt-8 pb-10 md:pt-10 md:pb-12">
      <div className="container-page">
        <div className="hero-panel relative overflow-hidden px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16">
          <div className="absolute -top-20 -right-16 w-72 h-72 rounded-full bg-hero-blob/80 blur-2xl pointer-events-none reveal-blob" />
          <div
            className="absolute top-1/3 -left-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none reveal-blob"
            style={{ animationDelay: "-5s" }}
          />
          <HeroEntrance className="relative grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <HeroRevealItem delayMs={0}>
                <h1 className="heading-xl reveal-heading">
                  <span className="reveal-word" style={{ animationDelay: "0.1s" }}>
                    Support
                  </span>{" "}
                  <span className="reveal-word" style={{ animationDelay: "0.17s" }}>
                    That
                  </span>{" "}
                  <span className="reveal-word" style={{ animationDelay: "0.24s" }}>
                    Puts
                  </span>{" "}
                  <span className="reveal-word" style={{ animationDelay: "0.31s" }}>
                    People
                  </span>{" "}
                  <span className="reveal-word" style={{ animationDelay: "0.38s" }}>
                    First
                  </span>
                </h1>
              </HeroRevealItem>
              <HeroRevealItem delayMs={120}>
                <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Respectful, person-centred NDIS support from Forrestfield across the Perth metropolitan area — helping you build
                  independence, confidence, and connection.
                </p>
              </HeroRevealItem>
              <HeroRevealItem delayMs={240}>
                <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
                  <Link to="/contact" className="btn-primary w-full sm:w-auto justify-center">
                    Start a conversation <ArrowRight className="size-4" />
                  </Link>
                  <Link to="/about-us" className="btn-teal w-full sm:w-auto justify-center">
                    About Us
                  </Link>
                </div>
              </HeroRevealItem>
              <HeroRevealItem delayMs={360}>
                <div className="mt-7 flex items-center gap-3">
                  <span className="font-display font-semibold text-deep">Trusted Care</span>
                  <div className="flex gap-0.5" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-4 fill-star text-star" />
                    ))}
                  </div>
                </div>
              </HeroRevealItem>
            </div>
            <HeroRevealItem delayMs={180} className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[420px]">
              <div className="absolute inset-x-4 top-6 bottom-0 rounded-card overflow-hidden shadow-[0_24px_50px_-24px_rgb(18_50_74/30%)]">
                <img
                  src={images.hero}
                  alt="Support worker with a participant"
                  width={1920}
                  height={1280}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden sm:block">
                <div className="ndis-logo-box-float card-elevated p-4 shadow-lg">
                  <img src={images.ndisLogo} alt="I Support the NDIS" className="h-14 w-auto" width={120} height={118} />
                </div>
              </div>
              <div className="absolute right-0 bottom-6 md:bottom-10 hidden sm:block">
                <div className="listen-first-box-float card-elevated px-4 py-3 flex items-center gap-2.5 shadow-lg max-w-[210px]">
                  <div className="icon-badge size-9 shrink-0">
                    <HeartHandshake className="size-4" />
                  </div>
                  <p className="text-sm font-semibold text-deep leading-snug">
                    We listen first — never assume
                  </p>
                </div>
              </div>
            </HeroRevealItem>
          </HeroEntrance>
        </div>
      </div>
    </section>
  );
}
function TrustStrip() {
  return (
    <RevealSection className="section-sky section-pad-sm">
      <div className="container-page">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {homeTrustHighlights.map((item, i) => {
            const Icon = trustIcons[i] ?? UserCheck;
            return (
              <RevealItem key={item.title} delayMs={i * 100}>
                <div className="reveal-float-inner card-elevated p-6 text-center h-full">
                  <div className="icon-badge size-11 mx-auto">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-deep">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
                </div>
              </RevealItem>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}
function Commitment() {
  return (
    <RevealSection className="section-white section-pad-sm overflow-hidden">
      <div
        className="reveal-blob pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-primary/8 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="reveal-blob pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-hero-blob/90 blur-3xl"
        style={{ animationDelay: "-4s" }}
        aria-hidden="true"
      />
      <div className="container-page relative grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-14 items-center">
        <div>
          <RevealItem delayMs={0}>
            <span className="section-label block">{homeCommitment.eyebrow}</span>
          </RevealItem>
          <AnimatedHeading text={homeCommitment.title} className="heading-lg mt-3" />
          <RevealItem delayMs={150}>
            <p className="mt-4 text-base font-medium text-deep/90 leading-relaxed">
              {homeCommitment.tagline}
            </p>
          </RevealItem>
          <ul className="mt-8 space-y-5">
            {homeFeatureCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <RevealItem key={item.title} delayMs={200 + index * 100}>
                  <li className="flex gap-4">
                    <div className="commitment-feature-icon shrink-0" aria-hidden="true">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-deep">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                    </div>
                  </li>
                </RevealItem>
              );
            })}
          </ul>
          <RevealItem delayMs={650}>
            <Link to="/contact" className="btn-primary mt-8 w-full sm:w-auto">
              Start a conversation <ArrowRight className="size-4" />
            </Link>
          </RevealItem>
        </div>

        <RevealItem delayMs={250} className="w-full">
          <CommitmentCollage />
        </RevealItem>
      </div>
    </RevealSection>
  );
}
function ServicesPreview() {
  return (
    <RevealSection className="section-teal section-pad-sm">
      <div className="container-page">
        <SectionHeader
          label="Our Services"
          title="Support tailored to your everyday life"
          subtitle="Explore each service for full details — short summaries only here."
          animate
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 items-stretch">
          {homeServicePreviews.map((s, i) => (
            <RevealItem key={s.to} delayMs={i * 100} className="h-full">
              <ServicePreviewCard
                title={s.title}
                description={s.description}
                to={s.to}
                image={s.image}
                buttonLabel={s.buttonLabel}
              />
            </RevealItem>
          ))}
        </div>
        <RevealItem delayMs={400} className="mt-10 text-center">
          <Link to="/our-services" className="btn-outline">
            View all services
          </Link>
        </RevealItem>
      </div>
    </RevealSection>
  );
}
function WhyChooseUs() {
  return (
    <RevealSection className="section-trust section-pad-sm">
      <div className="container-page">
        <SectionHeader
          label="Why Choose Us"
          title="Support you can trust, delivered with heart"
          subtitle="What sets No Assumption apart for participants and families in our service area."
          onDark
          animate
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {homeWhyChooseUs.map((item, i) => (
            <RevealItem key={item} delayMs={i * 100}>
              <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-card p-5 h-full">
                <CheckCircle2 className="size-5 text-label-on-dark shrink-0 mt-0.5" />
                <span className="text-deep-foreground font-medium">{item}</span>
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
function MeetAndGreetCta() {
  return (
    <RevealSection className="section-sky section-pad-sm">
      <div className="container-page max-w-3xl">
        <RevealItem delayMs={0}>
          <div className="hero-panel p-8 md:p-12 text-center">
            <span className="section-label">{meetAndGreet.title}</span>
            <AnimatedHeading text={meetAndGreet.heading} className="heading-lg mt-3" />
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">{meetAndGreet.teaser}</p>
            <Link to="/meet-and-greet" className="mt-8 inline-flex btn-primary">
              {meetAndGreet.cta} <ArrowRight className="size-4" />
            </Link>
          </div>
        </RevealItem>
      </div>
    </RevealSection>
  );
}
function CulturalTeaser() {
  return (
    <RevealSection className="section-white section-pad-sm">
      <div className="container-page max-w-3xl text-center">
        <RevealItem delayMs={0}>
          <span className="section-label">Inclusion</span>
        </RevealItem>
        <AnimatedHeading text={culturalDiversity.hero.title} className="heading-md mt-3" />
        <RevealItem delayMs={200}>
          <p className="mt-3 text-muted-foreground">{culturalDiversity.hero.teaser}</p>
        </RevealItem>
        <RevealItem delayMs={300}>
          <Link
            to="/cultural-diversity"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all"
          >
            Learn More <ArrowRight className="size-4" />
          </Link>
        </RevealItem>
      </div>
    </RevealSection>
  );
}
function FormsCta() {
  const cards: {
    kind: "referral" | "career" | "feedback";
    heading: string;
    description: string;
    showPhone: boolean;
  }[] = [
    {
      kind: "referral",
      heading: "Make a referral",
      description: "Refer a participant, family member, or support coordinator. We'll respond within one business day.",
      showPhone: true,
    },
    {
      kind: "career",
      heading: "Careers",
      description: "Interested in joining our team? Email us your experience and the type of role you're looking for.",
      showPhone: true,
    },
    {
      kind: "feedback",
      heading: "Feedback & complaints",
      description: "Share compliments, suggestions, or concerns — we take every message seriously.",
      showPhone: true,
    },
  ];

  return (
    <RevealSection className="section-teal section-pad-sm">
      <div className="container-page">
        <SectionHeader
          title="Get in touch your way"
          subtitle="Referrals, careers, and feedback — email or call us directly."
          animate
        />
        <div className="grid gap-6 md:grid-cols-3 md:items-stretch max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <RevealItem key={card.kind} delayMs={100 + i * 100} className="h-full">
              <div className="card-elevated flex h-full flex-col p-6 md:p-7">
                <ContactCta
                  kind={card.kind}
                  heading={card.heading}
                  description={card.description}
                  showPhone={card.showPhone}
                  layout="grid-card"
                />
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

function ContactSection() {
  return (
    <RevealSection id="contact" className="section-white section-pad-sm">
      <div className="container-page">
        <SectionHeader
          label="Contact Us"
          title="We'd love to hear from you"
          subtitle="Reach out by phone or email — we respond within one business day."
          animate
        />
        <div className="grid lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-3">
            {[
              { icon: Phone, label: "Phone", value: siteContact.phone, href: siteContact.phoneHref },
              { icon: Mail, label: "Email", value: siteContact.email, href: `mailto:${siteContact.email}` },
              { icon: Mail, label: "Feedback", value: siteContact.feedbackEmail, href: `mailto:${siteContact.feedbackEmail}` },
              {
                icon: MapPin,
                label: "Location",
                value: siteContact.address,
                href: siteContact.mapsHref,
                mailingAddress: siteContact.mailingAddress,
              },
            ].map((c, i) => (
              <RevealItem key={c.label} delayMs={i * 100}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 card-elevated p-5 hover:-translate-y-0.5 transition-transform"
                >
                  <div className="icon-badge size-11 shrink-0">
                    <c.icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{c.label}</p>
                    <p className="font-semibold text-deep">{c.value}</p>
                    {"mailingAddress" in c && c.mailingAddress && (
                      <div className="mt-3">
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                          Mailing address
                        </p>
                        <p className="font-semibold text-deep">{c.mailingAddress}</p>
                      </div>
                    )}
                  </div>
                </a>
              </RevealItem>
            ))}
          </div>
          <RevealItem delayMs={300} className="lg:col-span-3">
            <div className="card-elevated p-7 md:p-8 h-full">
              <ContactCta
                kind="general"
                heading="Send us a message"
                description="Tell us a little about yourself and how we can support you. Your email app will open ready to send."
                showPhone
              />
            </div>
          </RevealItem>
        </div>
      </div>
    </RevealSection>
  );
}
