import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Star,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Send,
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
  images,
  siteContact,
  aboutIntro,
} from "@/data/site";
import { homeServicePreviews, meetAndGreet, culturalDiversity } from "@/data/pages";
import { SectionHeader } from "@/components/SectionHeader";
import { ServicePreviewCard } from "@/components/ServicePreviewCard";
import { FormField } from "@/components/FormField";
import { FormSuccess } from "@/components/FormSuccess";
import { pageMeta, seo } from "@/lib/seo";
import { buildMailtoUrl, readFormFields, submitViaMailto } from "@/lib/form-submit";

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
    <section className="section-hero-wrap pt-6 pb-10 md:pt-8 md:pb-12">
      <div className="container-page">
        <div className="hero-panel relative overflow-hidden px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16">
          <div className="absolute -top-20 -right-16 w-72 h-72 rounded-full bg-hero-blob/80 blur-2xl pointer-events-none" />
          <div className="absolute top-1/3 -left-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <h1 className="heading-xl">Support That Puts People First</h1>
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Respectful, person-centred NDIS support from Forrestfield across the Perth metropolitan area — helping you build
                independence, confidence, and connection.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/forms" className="btn-primary">
                  Make a Referral <ArrowRight className="size-4" />
                </Link>
                <Link to="/about-us" className="btn-teal">
                  About Us
                </Link>
              </div>
              <div className="mt-7 flex items-center gap-3">
                <span className="font-display font-semibold text-deep">Trusted Care</span>
                <div className="flex gap-0.5" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-star text-star" />
                  ))}
                </div>
              </div>
            </div>

            <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[420px]">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="section-sky section-pad-sm">
      <div className="container-page">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {homeTrustHighlights.map((item, i) => {
            const Icon = trustIcons[i] ?? UserCheck;
            return (
              <div key={item.title} className="card-elevated p-6 text-center">
                <div className="icon-badge size-11 mx-auto">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-deep">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Commitment() {
  return (
    <section className="section-white section-pad-sm">
      <div className="container-page grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <span className="section-label">{homeCommitment.eyebrow}</span>
          <h2 className="heading-lg mt-3">{homeCommitment.title}</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{aboutIntro}</p>
          <p className="mt-3 text-muted-foreground leading-relaxed">{homeCommitment.body}</p>
          <Link to="/about-us" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
            Learn more about us <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {homeCommitment.points.map((point) => (
            <div key={point} className="card-elevated p-5">
              <CheckCircle2 className="size-5 text-primary" />
              <p className="mt-3 text-sm font-medium text-deep">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="section-teal section-pad-sm">
      <div className="container-page">
        <SectionHeader
          label="Our Services"
          title="Support tailored to your everyday life"
          subtitle="Explore each service for full details — short summaries only here."
        />
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
        <div className="mt-10 text-center">
          <Link to="/our-services" className="btn-outline">
            View all services
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="section-trust section-pad-sm">
      <div className="container-page">
        <SectionHeader
          label="Why Choose Us"
          title="Support you can trust, delivered with heart"
          subtitle="What sets No Assumption apart for participants and families in our service area."
          onDark
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {homeWhyChooseUs.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-card p-5"
            >
              <CheckCircle2 className="size-5 text-label-on-dark shrink-0 mt-0.5" />
              <span className="text-deep-foreground font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MeetAndGreetCta() {
  return (
    <section className="section-sky section-pad-sm">
      <div className="container-page max-w-3xl">
        <div className="hero-panel p-8 md:p-12 text-center">
          <span className="section-label">{meetAndGreet.title}</span>
          <h2 className="heading-lg mt-3">{meetAndGreet.heading}</h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">{meetAndGreet.teaser}</p>
          <Link to="/meet-and-greet" className="mt-8 inline-flex btn-primary">
            {meetAndGreet.cta} <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CulturalTeaser() {
  return (
    <section className="section-white section-pad-sm">
      <div className="container-page max-w-3xl text-center">
        <span className="section-label">Inclusion</span>
        <h2 className="heading-md mt-3">{culturalDiversity.hero.title}</h2>
        <p className="mt-3 text-muted-foreground">{culturalDiversity.hero.teaser}</p>
        <Link to="/cultural-diversity" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
          Learn More <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

function FormsCta() {
  return (
    <section className="section-teal section-pad-sm">
      <div className="container-page">
        <SectionHeader
          title="Get in touch your way"
          subtitle="Referrals, careers, and feedback — we're here to listen."
        />
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/forms" className="btn-primary">
            Make a Referral <ArrowRight className="size-4" />
          </Link>
          <Link to="/forms" search={{ tab: "career" }} className="btn-teal">
            Careers
          </Link>
          <a href={`mailto:${siteContact.feedbackEmail}`} className="btn-outline">
            Feedback & Complaints
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="section-white section-pad-sm">
      <div className="container-page">
        <SectionHeader
          label="Contact Us"
          title="We'd love to hear from you"
          subtitle="Reach out by phone, email, or the form below. We respond within one business day."
        />

        <div className="grid lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-3">
            {[
              { icon: Phone, label: "Phone", value: siteContact.phone, href: siteContact.phoneHref },
              { icon: Mail, label: "Email", value: siteContact.email, href: `mailto:${siteContact.email}` },
              { icon: MapPin, label: "Location", value: siteContact.address, href: siteContact.mapsHref },
            ].map((c) => (
              <a
                key={c.label}
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
                </div>
              </a>
            ))}
          </div>

          <div className="lg:col-span-3 card-elevated p-7 md:p-8">
            {sent ? (
              <FormSuccess
                message="Your email app should open with your enquiry ready to send. We'll respond within one business day once received."
                fallbackEmail={siteContact.email}
              />
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const { get } = readFormFields(e.currentTarget);
                  submitViaMailto(
                    buildMailtoUrl({
                      to: siteContact.email,
                      subject: "Homepage enquiry — No Assumption Support Service",
                      fields: {
                        Name: get("name"),
                        Phone: get("phone"),
                        Email: get("email"),
                        Message: get("message"),
                      },
                    }),
                  );
                  setSent(true);
                }}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField label="Your name" name="name" required placeholder="Your full name" />
                  <FormField label="Phone" name="phone" type="tel" required placeholder="Your phone number" />
                </div>
                <FormField label="Email" name="email" type="email" required placeholder="you@example.com" />
                <FormField
                  label="How can we help?"
                  name="message"
                  as="textarea"
                  rows={4}
                  required
                  placeholder="Tell us how we can support you..."
                />
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  <Send className="size-4" /> Submit enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
