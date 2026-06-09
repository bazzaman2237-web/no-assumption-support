import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { PageHero } from "./about";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | No Assumption Support Service" },
      {
        name: "description",
        content:
          "Get in touch with No Assumption Support Service in Forrestfield, Perth. Call, email, or WhatsApp — we love a good first chat.",
      },
      { property: "og:title", content: "Contact | No Assumption Support Service" },
      {
        property: "og:description",
        content: "Call +61 468 880 557 or email info@noassumption.com.au.",
      },
    ],
  }),
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

      <section className="container-page py-16 md:py-24 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-4">
          {[
            {
              icon: Phone,
              label: "Phone",
              value: "+61 468 880 557",
              href: "tel:+61468880557",
            },
            {
              icon: Mail,
              label: "Email",
              value: "info@noassumption.com.au",
              href: "mailto:info@noassumption.com.au",
            },
            {
              icon: MessageCircle,
              label: "WhatsApp",
              value: "Chat with us instantly",
              href: "https://wa.me/61468880557",
            },
            {
              icon: MapPin,
              label: "Office",
              value: "Forrestfield, Perth WA 6058",
              href: "https://maps.google.com/?q=Forrestfield+WA+6058",
            },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 bg-card rounded-2xl p-5 border border-border hover:border-primary/40 hover:-translate-y-0.5 transition-all shadow-sm"
            >
              <div className="grid place-items-center size-12 rounded-xl bg-primary text-primary-foreground shrink-0">
                <c.icon className="size-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {c.label}
                </p>
                <p className="font-display text-lg font-semibold text-deep">{c.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="lg:col-span-3 bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm">
          {sent ? (
            <div className="py-12 text-center">
              <CheckCircle2 className="size-14 text-primary mx-auto" />
              <h2 className="mt-5 font-display text-3xl font-semibold text-deep">
                Thanks for reaching out!
              </h2>
              <p className="mt-3 text-muted-foreground">
                We'll be in touch within one business day. For anything urgent, please call us
                directly on +61 468 880 557.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-5"
            >
              <h2 className="font-display text-3xl font-semibold text-deep">Book a consultation</h2>
              <p className="text-sm text-muted-foreground">
                Tell us a little about yourself and we'll be in touch within one business day.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Your name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <Field label="Suburb" name="suburb" placeholder="e.g. Forrestfield" />
              <div>
                <label className="text-sm font-semibold text-deep">How can we help?</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us a bit about what you're looking for..."
                  className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                />
              </div>
              <button type="submit" className="btn-primary w-full md:w-auto">
                <Send className="size-4" /> Send message
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-deep">
        {label}
        {required && <span className="text-primary ml-0.5">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
      />
    </div>
  );
}
