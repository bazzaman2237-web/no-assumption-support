import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { AustraliaAboriginalFlags } from "@/components/AustraliaAboriginalFlags";
import { images, siteContact, acknowledgementText, missionStatement } from "@/data/site";
import { homeServicePreviews } from "@/data/pages";

const quickLinks = [
  ["/", "Home"],
  ["/about-us", "About Us"],
  ["/our-services", "Our Services"],
  ["/meet-and-greet", "Free Meet & Greet"],
  ["/cultural-diversity", "Cultural Diversity & Inclusion"],
  ["/community-get-together", "Community Get-Together"],
  ["/ndis-resources", "NDIS Resources"],
  ["/ndis-quality-and-safeguards-commission", "NDIS Quality & Safeguards"],
  ["/faqs", "FAQs"],
  ["/contact", "Contact"],
] as const;

const formLinks = [
  { to: "/forms", label: "Make a Referral" },
  { to: "/forms", label: "Careers", search: { tab: "career" as const } },
  { href: `mailto:${siteContact.feedbackEmail}`, label: "Feedback & Complaints" },
  { to: "/forms", label: "Feedback form", search: { tab: "feedback" as const } },
  { to: "/consent", label: "Consent" },
  { to: "/ndis-funding", label: "NDIS Funding / Price" },
] as const;

const footerLinkClass =
  "text-sm text-deep-foreground/90 hover:text-primary hover:underline transition-colors";

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col">
      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary pb-3 mb-1 border-b border-primary/30">
        {title}
      </h4>
      {children}
    </div>
  );
}

function FooterLinkList({ children }: { children: ReactNode }) {
  return <ul className="space-y-2.5">{children}</ul>;
}

export function Footer() {
  return (
    <footer className="section-trust mt-0 border-t-4 border-accent/50">
      <div className="container-page py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-x-8 xl:gap-x-10 items-start">
          {/* Brand & trust */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <img
                src={images.logo}
                alt="No Assumption Support Service logo"
                className="size-14 shrink-0 rounded-xl object-contain shadow-sm"
                width={56}
                height={56}
              />
              <div className="leading-tight">
                <p className="font-display text-xl font-semibold">No Assumption</p>
                <p className="text-xs uppercase tracking-widest text-deep-foreground/75">Support Service</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <AustraliaAboriginalFlags className="drop-shadow-[0_2px_8px_rgb(0_0_0/25%)]" />
              <img
                src={images.ndisLogo}
                alt="I Support the NDIS"
                width={120}
                height={118}
                className="size-14 shrink-0 object-contain drop-shadow-[0_2px_8px_rgb(0_0_0/25%)]"
              />
            </div>

            <p className="text-sm text-deep-foreground/85 leading-relaxed">{acknowledgementText}</p>

            <p className="text-sm text-deep-foreground/80 leading-relaxed border-l-2 border-primary/40 pl-4">
              {missionStatement}
            </p>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <FooterColumn title="Quick links">
              <FooterLinkList>
                {quickLinks.map(([to, label]) => (
                  <li key={label}>
                    <Link to={to} className={footerLinkClass}>
                      {label}
                    </Link>
                  </li>
                ))}
              </FooterLinkList>
            </FooterColumn>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <FooterColumn title="Services">
              <FooterLinkList>
                {homeServicePreviews.map((s) => (
                  <li key={s.to}>
                    <Link to={s.to} className={footerLinkClass}>
                      {s.title}
                    </Link>
                  </li>
                ))}
              </FooterLinkList>
            </FooterColumn>
          </div>

          {/* Forms & contact */}
          <div className="sm:col-span-2 lg:col-span-3">
            <FooterColumn title="Forms & contact">
              <FooterLinkList>
                {formLinks.map((link) => (
                  <li key={link.label}>
                    {"href" in link ? (
                      <a href={link.href} className={footerLinkClass}>
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        search={"search" in link ? link.search : undefined}
                        className={footerLinkClass}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </FooterLinkList>

              <div className="mt-6 pt-5 border-t border-deep-foreground/15 space-y-3">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-deep-foreground/70">Contact</p>
                <ul className="space-y-2.5 text-sm text-deep-foreground/90">
                  <li>
                    <a href={siteContact.phoneHref} className="inline-flex items-center gap-2.5 hover:text-primary hover:underline">
                      <Phone className="size-4 text-primary shrink-0" aria-hidden="true" />
                      {siteContact.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${siteContact.email}`}
                      className="inline-flex items-center gap-2.5 hover:text-primary hover:underline break-all"
                    >
                      <Mail className="size-4 text-primary shrink-0" aria-hidden="true" />
                      {siteContact.email}
                    </a>
                  </li>
                  <li className="inline-flex items-start gap-2.5">
                    <MapPin className="size-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{siteContact.address}</span>
                  </li>
                  <li>
                    <a
                      href={siteContact.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2.5 hover:text-primary hover:underline"
                    >
                      <MessageCircle className="size-4 text-primary shrink-0" aria-hidden="true" />
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
            </FooterColumn>
          </div>
        </div>
      </div>

      <div className="border-t border-deep-foreground/15 bg-deep/30">
        <div className="container-page py-5 md:py-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-deep-foreground/75">
            <p>© {new Date().getFullYear()} No Assumption Support Service. All rights reserved.</p>
            <p className="sm:text-right">
              ABN: {siteContact.abn} · NDIS: {siteContact.ndisStatus}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
