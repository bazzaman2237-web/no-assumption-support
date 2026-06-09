import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { RelatedServices } from "@/components/RelatedServices";
import { StepsList } from "@/components/PageSections";
import type { FeaturedService } from "@/data/pages";

function ServiceCta({ ctaLabel }: { ctaLabel: string }) {
  return (
    <section className="section-white section-pad-sm">
      <div className="container-page max-w-3xl text-center">
        <div className="rounded-card section-trust p-10 md:p-12">
          <h2 className="heading-md text-deep-foreground">Ready to get started?</h2>
          <p className="mt-3 text-trust-muted max-w-lg mx-auto">
            Speak with our friendly team — we'll listen first and guide you from there.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Link to="/contact" className="btn-primary w-full sm:w-auto justify-center">
                {ctaLabel} <ArrowRight className="size-4" />
              </Link>
              <Link to="/meet-and-greet" className="inline-flex items-center justify-center gap-2 rounded-full border border-deep-foreground/40 px-6 sm:px-8 py-4 font-semibold text-deep-foreground hover:bg-deep-foreground/10 transition-colors w-full sm:w-auto">
                Book Your FREE Meet & Greet
              </Link>
              <Link
                to="/forms"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-deep-foreground/40 px-6 sm:px-8 py-4 font-semibold text-deep-foreground hover:bg-deep-foreground/10 transition-colors w-full sm:w-auto"
              >
                Make a Referral
              </Link>
            </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceDetailLayout({ service }: { service: FeaturedService }) {
  return (
    <>
      <PageHero eyebrow="Our Services" title={service.title} subtitle={service.teaser} compact />

      <section className="section-white section-pad-sm">
        <div className="container-page max-w-3xl">
          <h2 className="heading-md">Overview</h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{service.overview}</p>
        </div>
      </section>

      <section className="section-teal section-pad-sm">
        <div className="container-page max-w-4xl">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="card-elevated p-7 md:p-8">
              <h2 className="heading-md text-xl">{service.offerTitle}</h2>
              <ul className="mt-5 space-y-3">
                {service.offerItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-elevated p-7 md:p-8">
              <h2 className="heading-md text-xl">{service.benefitsTitle}</h2>
              <ul className="mt-5 space-y-3">
                {service.benefitsItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sky section-pad-sm">
        <div className="container-page max-w-3xl">
          <div className="card-elevated p-8 md:p-10">
            <h2 className="heading-md">Why Choose No Assumption Support Service?</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{service.whyChoose}</p>
          </div>
        </div>
      </section>

      <ServiceCta ctaLabel={service.ctaLabel} />
      <RelatedServices excludePath={service.path} />
    </>
  );
}

export interface ExtraSection {
  title: string;
  body?: string;
  items?: string[];
  steps?: string[];
}

export function SpecialistServiceLayout({
  eyebrow,
  title,
  intro,
  path,
  offerTitle,
  offerItems,
  offerSections,
  benefitsTitle,
  benefitsItems,
  whyChoose,
  extraSections,
  ctaLabel = "Get in touch",
}: {
  eyebrow: string;
  title: string;
  intro: string | string[];
  path: string;
  offerTitle: string;
  offerItems: string[];
  offerSections?: { title: string; items: string[] }[];
  benefitsTitle: string;
  benefitsItems: string[];
  whyChoose: string;
  extraSections?: ExtraSection[];
  ctaLabel?: string;
}) {
  const introParagraphs = Array.isArray(intro) ? intro : [intro];
  const introTeaser = introParagraphs[0];

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={introTeaser} compact />

      <section className="section-white section-pad-sm">
        <div className="container-page max-w-3xl space-y-4">
          <h2 className="heading-md">Overview</h2>
          {introParagraphs.map((p) => (
            <p key={p.slice(0, 40)} className="text-muted-foreground leading-relaxed text-lg">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="section-teal section-pad-sm">
        <div className="container-page max-w-4xl">
          {offerSections ? (
            <div className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                {offerSections.map((section) => (
                  <div key={section.title} className="card-elevated p-7 md:p-8">
                    <h2 className="heading-md text-xl">{section.title}</h2>
                    <ul className="mt-5 space-y-3">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="card-elevated p-7 md:p-8">
                <h2 className="heading-md text-xl">{benefitsTitle}</h2>
                <ul className="mt-5 space-y-3">
                  {benefitsItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-5">
              <div className="card-elevated p-7 md:p-8">
                <h2 className="heading-md text-xl">{offerTitle}</h2>
                <ul className="mt-5 space-y-3">
                  {offerItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-elevated p-7 md:p-8">
                <h2 className="heading-md text-xl">{benefitsTitle}</h2>
                <ul className="mt-5 space-y-3">
                  {benefitsItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {extraSections?.map((section, index) => (
        <section
          key={section.title}
          className={index % 2 === 0 ? "section-sky section-pad-sm" : "section-white section-pad-sm"}
        >
          <div className="container-page max-w-3xl">
            {section.steps ? (
              <StepsList title={section.title} steps={section.steps} />
            ) : (
              <div className="card-elevated p-8 md:p-10">
                <h2 className="heading-md">{section.title}</h2>
                {section.body && (
                  <p className="mt-4 text-muted-foreground leading-relaxed">{section.body}</p>
                )}
                {section.items && (
                  <ul className="mt-5 space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </section>
      ))}

      <section className="section-sky section-pad-sm">
        <div className="container-page max-w-3xl">
          <div className="card-elevated p-8 md:p-10">
            <h2 className="heading-md">Why Choose No Assumption Support Service?</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{whyChoose}</p>
          </div>
        </div>
      </section>

      <ServiceCta ctaLabel={ctaLabel} />
      <RelatedServices excludePath={path} />
    </>
  );
}
