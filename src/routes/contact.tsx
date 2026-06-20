import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { ContactCta } from "@/components/ContactCta";
import { PageHero } from "@/components/PageHero";
import { siteContact } from "@/data/site";
import { pageMeta, seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => pageMeta(seo.contact),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start with a conversation."
        subtitle="No script. No pressure. Just a chat about what you're looking for."
      />

      <section className="section-teal section-pad-sm">
        <div className="container-page grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {[
              {
                icon: Phone,
                label: "Phone",
                value: siteContact.phone,
                href: siteContact.phoneHref,
              },
              {
                icon: Mail,
                label: "Email",
                value: siteContact.email,
                href: `mailto:${siteContact.email}`,
              },
              {
                icon: Mail,
                label: "Feedback",
                value: siteContact.feedbackEmail,
                href: `mailto:${siteContact.feedbackEmail}`,
              },
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: "Connect with us",
                href: siteContact.whatsapp,
              },
              {
                icon: MapPin,
                label: "Address",
                value: siteContact.address,
                href: siteContact.mapsHref,
                mailingAddress: siteContact.mailingAddress,
              },
              {
                icon: Clock,
                label: "Opening hours",
                value: siteContact.hours,
                href: undefined,
              },
            ].map((c) => {
              const inner = (
                <>
                  <div className="icon-badge size-12 shrink-0">
                    <c.icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {c.label}
                    </p>
                    <p className="font-display text-lg font-semibold text-deep">{c.value}</p>
                    {"mailingAddress" in c && c.mailingAddress && (
                      <div className="mt-3">
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                          Mailing address
                        </p>
                        <p className="font-display text-lg font-semibold text-deep">{c.mailingAddress}</p>
                      </div>
                    )}
                  </div>
                </>
              );

              if (!c.href) {
                return (
                  <div key={c.label} className="flex items-center gap-4 card-elevated p-5">
                    {inner}
                  </div>
                );
              }

              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 card-elevated rounded-2xl p-5 hover:border-primary/50 hover:-translate-y-0.5 transition-all"
                >
                  {inner}
                </a>
              );
            })}
          </div>

          <div className="lg:col-span-3 space-y-6">
            <div className="card-elevated rounded-3xl p-8 md:p-10">
              <ContactCta
                kind="general"
                heading="Send us a message"
                description={
                  <>
                    Tell us a little about yourself, or{" "}
                    <Link to="/meet-and-greet" className="font-semibold text-primary hover:underline">
                      book your FREE 45-Minute Meet &amp; Greet
                    </Link>{" "}
                    — we'll be in touch within one business day.
                  </>
                }
                showPhone
              />
            </div>

            <div className="card-elevated rounded-3xl p-8 md:p-10">
              <ContactCta
                kind="feedback"
                heading="Feedback & complaints"
                description="Your feedback helps us improve. Email us directly if you have a compliment, suggestion, or concern."
                showPhone
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
