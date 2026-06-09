import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { images } from "@/data/site";

const mainLinks = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

const serviceLinks = [
  { to: "/our-services", label: "All Services" },
  { to: "/ndis-supports", label: "NDIS Supports" },
  { to: "/daily-living-support", label: "Daily Living Support" },
  { to: "/positive-behaviour-support", label: "Positive Behaviour Support" },
  { to: "/guidance", label: "Guidance" },
  { to: "/collaboration", label: "Collaboration" },
  { to: "/support-coordination", label: "Support Coordination" },
  { to: "/accommodation-supports", label: "Accommodation Supports" },
  { to: "/personal-care-and-transitions", label: "Personal Care & Transitions" },
] as const;

const moreLinks = [
  { to: "/forms", label: "Forms" },
  { to: "/meet-and-greet", label: "Meet & Greet" },
  { to: "/cultural-diversity", label: "Cultural Diversity & Inclusion" },
  { to: "/ndis-quality-and-safeguards-commission", label: "NDIS Quality & Safeguards" },
] as const;

const navLinkClass =
  "inline-flex items-center h-10 px-2 text-sm font-medium text-muted-foreground hover:text-primary whitespace-nowrap transition-colors";

const navTriggerClass =
  "inline-flex items-center gap-1 h-10 px-2 text-sm font-medium text-muted-foreground hover:text-primary whitespace-nowrap transition-colors";

function NavDropdown({
  label,
  links,
}: {
  label: string;
  links: readonly { to: string; label: string }[];
}) {
  return (
    <div className="relative group">
      <button type="button" className={navTriggerClass} aria-haspopup="true" aria-label={`${label} menu`}>
        {label}
        <ChevronDown className="size-4 shrink-0 opacity-70" aria-hidden="true" />
      </button>
      <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
        <div className="card-elevated rounded-2xl py-2 min-w-[260px] shadow-lg max-h-[70vh] overflow-y-auto">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-warm whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-[0_2px_20px_rgb(18_50_74/7%)]">
      <div className="container-page flex items-center justify-between gap-4 py-3 md:py-3.5 xl:grid xl:grid-cols-[auto_1fr_auto] xl:items-center xl:gap-6">
        <Link to="/" className="flex items-center gap-3 min-w-0 shrink-0">
          <img
            src={images.logo}
            alt="No Assumption Support Service"
            className="h-14 w-14 md:h-16 md:w-16 xl:h-20 xl:w-20 shrink-0 rounded-xl object-contain shadow-sm"
            width={80}
            height={80}
          />
          <span className="leading-tight hidden sm:block">
            <span className="block font-display text-lg xl:text-xl font-semibold text-deep">No Assumption</span>
            <span className="block text-[11px] tracking-widest text-muted-foreground uppercase">Support Service</span>
          </span>
        </Link>

        <nav className="hidden xl:flex items-center justify-center gap-1 2xl:gap-2 min-w-0">
          <Link to="/" activeProps={{ className: "!text-primary" }} className={navLinkClass}>
            Home
          </Link>
          <Link to="/about-us" activeProps={{ className: "!text-primary" }} className={navLinkClass}>
            About Us
          </Link>
          <NavDropdown label="Services" links={serviceLinks} />
          <Link to="/faqs" activeProps={{ className: "!text-primary" }} className={navLinkClass}>
            FAQs
          </Link>
          <Link to="/contact" activeProps={{ className: "!text-primary" }} className={navLinkClass}>
            Contact
          </Link>
          <NavDropdown label="More" links={moreLinks} />
        </nav>

        <div className="flex items-center justify-end gap-2 shrink-0">
          <Link to="/forms" className="hidden lg:inline-flex btn-gradient whitespace-nowrap shrink-0">
            Make a Referral
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="xl:hidden inline-flex items-center justify-center size-10 rounded-md hover:bg-muted shrink-0"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border bg-background max-h-[80vh] overflow-y-auto">
          <div className="container-page py-4 flex flex-col gap-1">
            {mainLinks.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-2.5 px-2 rounded-md hover:bg-muted">
                {l.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              className="py-2.5 px-2 rounded-md hover:bg-muted flex items-center justify-between"
            >
              Services <ChevronDown className={`size-4 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen &&
              serviceLinks.map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-2 pl-6 text-sm text-muted-foreground hover:bg-muted">
                  {l.label}
                </Link>
              ))}
            {moreLinks.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-2.5 px-2 rounded-md hover:bg-muted">
                {l.label}
              </Link>
            ))}
            <Link to="/forms" onClick={() => setOpen(false)} className="btn-gradient mt-3 self-start">
              Make a Referral
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
