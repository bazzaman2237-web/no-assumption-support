import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FormField } from "@/components/FormField";
import { FormSuccess } from "@/components/FormSuccess";
import { siteContact } from "@/data/site";
import { pageMeta, seo } from "@/lib/seo";
import { buildMailtoUrl, readFormFields, submitViaMailto } from "@/lib/form-submit";

export const Route = createFileRoute("/contact")({
  head: () => pageMeta(seo.contact),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
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
                </div>
              </>
            );

            if (!c.href) {
              return (
                <div
                  key={c.label}
                  className="flex items-center gap-4 card-elevated p-5"
                >
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

        <div className="lg:col-span-3 card-elevated rounded-3xl p-8 md:p-10">
          {sent ? (
            <FormSuccess
              title="Thanks for reaching out!"
              message={`Your email app should open with your message ready to send. For anything urgent, please call us on ${siteContact.phone}.`}
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
                    subject: "Website enquiry — No Assumption Support Service",
                    fields: {
                      Name: get("name"),
                      Phone: get("phone"),
                      Email: get("email"),
                      Suburb: get("suburb"),
                      Message: get("message"),
                    },
                  }),
                );
                setSent(true);
              }}
              className="space-y-5"
            >
              <h2 className="font-display text-3xl font-semibold text-deep">Send us a message</h2>
              <p className="text-sm text-muted-foreground">
                Tell us a little about yourself, or{" "}
                <Link to="/meet-and-greet" className="font-semibold text-primary hover:underline">
                  book your FREE 45-Minute Meet & Greet
                </Link>{" "}
                — we'll be in touch within one business day.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <FormField label="Your name" name="name" required placeholder="Your full name" />
                <FormField label="Phone" name="phone" type="tel" required placeholder="Your phone number" />
              </div>
              <FormField label="Email" name="email" type="email" required placeholder="you@example.com" />
              <FormField label="Suburb" name="suburb" placeholder="e.g. Forrestfield" />
              <FormField
                label="How can we help?"
                name="message"
                as="textarea"
                rows={5}
                required
                placeholder="Tell us a bit about what you're looking for..."
              />
              <button type="submit" className="btn-primary w-full sm:w-auto">
                <Send className="size-4" /> Send message
              </button>
            </form>
          )}
        </div>
        </div>
      </section>
    </>
  );
}
