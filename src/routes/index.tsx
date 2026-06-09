import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  CheckCircle2,
  ShieldCheck,
  Heart,
  MapPin,
  ArrowRight,
  Quote,
  Star,
  Sparkles,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import ctaImg from "@/assets/cta.jpg";
import { services, whyChooseUs, testimonials } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "No Assumption Support Service | NDIS Provider in Forrestfield, Perth" },
      {
        name: "description",
        content:
          "Person-centred NDIS support in Perth. We listen first and never assume — Support Without Assumptions, delivered with warmth and professionalism.",
      },
      { property: "og:title", content: "No Assumption Support Service | NDIS Perth" },
      {
        property: "og:description",
        content: "Support Without Assumptions. Person-centred NDIS care across Perth.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutIntro />
      <ServicesGrid />
      <WhyChooseUs />
      <Testimonials />
      <CtaBanner />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary via-background to-warm" />
      <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-primary/15 blur-3xl -z-10" />
      <div className="absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full bg-accent/30 blur-3xl -z-10" />

      <div className="container-page grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="size-3.5" /> NDIS Registered · Perth WA
          </span>
          <h1 className="mt-5 font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-deep leading-[1.02]">
            Support Without <span className="italic text-primary">Assumptions</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            We never assume what you need — we ask. From day one, our person-centred NDIS support is
            shaped by your goals, your routines, and your voice.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">
              Book Consultation <ArrowRight className="size-4" />
            </Link>
            <Link to="/about" className="btn-outline">
              Learn More
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-4 fill-accent text-accent" />
              ))}
            </div>
            <span>Trusted by families across Perth</span>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20 ring-1 ring-primary/10">
            <img
              src={heroImg}
              alt="Support worker walking with a participant in a Perth park"
              width={1280}
              height={1280}
              className="w-full h-[420px] md:h-[540px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 md:-left-10 bg-card rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-border max-w-[280px]">
            <div className="grid place-items-center size-12 rounded-full bg-primary text-primary-foreground">
              <Heart className="size-5" />
            </div>
            <div>
              <p className="font-display font-semibold text-deep text-lg leading-tight">
                You lead
              </p>
              <p className="text-xs text-muted-foreground">We listen, then act.</p>
            </div>
          </div>
          <div className="hidden md:flex absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-2xl shadow-xl px-5 py-3 items-center gap-2 font-semibold">
            <ShieldCheck className="size-5" /> NDIS Registered
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: Heart, label: "Person-Centred Care", sub: "You lead every plan" },
    { icon: ShieldCheck, label: "NDIS Registered Provider", sub: "Quality & compliance" },
    { icon: MapPin, label: "Perth Based", sub: "Forrestfield, WA 6058" },
  ];
  return (
    <section className="container-page -mt-2 md:-mt-8 relative z-10">
      <div className="grid md:grid-cols-3 gap-4 bg-card rounded-3xl shadow-xl border border-border p-6 md:p-8">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-4">
            <div className="grid place-items-center size-14 rounded-2xl bg-secondary text-primary shrink-0">
              <it.icon className="size-6" />
            </div>
            <div>
              <p className="font-display font-semibold text-deep">{it.label}</p>
              <p className="text-sm text-muted-foreground">{it.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutIntro() {
  return (
    <section className="container-page py-20 md:py-28 grid lg:grid-cols-2 gap-14 items-center">
      <div className="relative">
        <img
          src={aboutImg}
          alt="Support worker laughing with a participant at home"
          loading="lazy"
          width={1024}
          height={1024}
          className="rounded-[2rem] w-full h-[440px] object-cover shadow-xl"
        />
        <div className="absolute bottom-5 right-5 bg-primary text-primary-foreground rounded-2xl p-5 max-w-[220px] shadow-xl">
          <p className="font-display text-3xl font-semibold">100%</p>
          <p className="text-xs uppercase tracking-widest opacity-90">
            Plans shaped by participants
          </p>
        </div>
      </div>
      <div>
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          Our Philosophy
        </span>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-deep leading-tight">
          We don't assume. <br />
          <span className="italic">We ask.</span>
        </h2>
        <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
          Too often, support is delivered around people instead of with them. At No Assumption
          Support Service, every plan, every shift, every conversation starts with one simple
          principle: <strong className="text-deep">ask before you act</strong>.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          We are a locally owned, NDIS-registered provider based in Forrestfield, Perth. Our team
          listens carefully, adapts genuinely, and supports you to live the life you choose — with
          warmth, professionalism, and respect at every step.
        </p>
        <Link to="/about" className="mt-7 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
          Read our story <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="bg-gradient-to-b from-secondary/40 to-background py-20 md:py-28">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Our Services
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-deep">
            Support that fits your life
          </h2>
          <p className="mt-4 text-muted-foreground">
            Six core services, infinite ways to combine them. Every plan starts with what you want
            from your week.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.slug}
              className="group bg-card rounded-3xl p-7 border border-border hover:border-primary/40 hover:-translate-y-1 transition-all shadow-sm hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="grid place-items-center size-14 rounded-2xl bg-gradient-to-br from-primary to-deep text-primary-foreground shadow-md">
                <s.icon className="size-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-deep">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.short}</p>
              <Link
                to="/services"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all"
              >
                Learn more <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-2 lg:sticky lg:top-28">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Why Choose Us
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-deep leading-tight">
            Care you can feel the difference in.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Choosing a provider is a big decision. Here's what makes No Assumption Support Service
            different — and why families across Perth stay with us.
          </p>
          <Link to="/contact" className="mt-7 btn-primary">
            Talk to us <ArrowRight className="size-4" />
          </Link>
        </div>
        <ul className="lg:col-span-3 space-y-4">
          {whyChooseUs.map((w, i) => (
            <li
              key={w.title}
              className="flex gap-5 bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="shrink-0 grid place-items-center size-12 rounded-xl bg-secondary text-primary font-display font-semibold text-lg">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-deep flex items-center gap-2">
                  <CheckCircle2 className="size-5 text-primary" /> {w.title}
                </h3>
                <p className="mt-1.5 text-muted-foreground">{w.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[idx];
  return (
    <section className="bg-deep text-primary-foreground py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-accent blur-3xl" />
      </div>
      <div className="container-page relative">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest opacity-70">
            Kind Words
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">
            From the families we walk beside.
          </h2>
        </div>
        <div className="mt-14 max-w-3xl mx-auto">
          <Quote className="size-12 text-accent mx-auto" />
          <blockquote className="mt-6 text-center font-display text-2xl md:text-3xl leading-relaxed min-h-[140px]">
            "{t.quote}"
          </blockquote>
          <div className="mt-8 text-center">
            <p className="font-semibold">{t.name}</p>
            <p className="text-sm opacity-70">{t.role}</p>
          </div>
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === idx ? "w-10 bg-accent" : "w-2 bg-primary-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="container-page py-20">
      <div className="relative rounded-[2.5rem] overflow-hidden">
        <img
          src={ctaImg}
          alt="Community participants smiling together"
          loading="lazy"
          width={1600}
          height={900}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep/95 via-deep/80 to-primary/70" />
        <div className="relative px-8 md:px-16 py-16 md:py-24 text-primary-foreground max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest opacity-80">
            Get Started
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Take the first step.
          </h2>
          <p className="mt-5 text-lg opacity-90 max-w-xl">
            A friendly chat, no obligation. Tell us what matters to you and we'll build a support
            plan around it — never the other way around.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 font-semibold hover:bg-accent/90 transition-colors shadow-lg"
            >
              Book Now <ArrowRight className="size-4" />
            </Link>
            <a
              href="https://wa.me/61468880557"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
