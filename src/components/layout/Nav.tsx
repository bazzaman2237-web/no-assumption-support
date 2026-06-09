import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, HeartHandshake } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Our Services" },
  { to: "/faqs", label: "FAQs" },
  { to: "/ndis-resources", label: "NDIS Resources" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur border-b border-border">
      <div className="container-page flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center size-10 rounded-2xl bg-primary text-primary-foreground shadow-sm">
            <HeartHandshake className="size-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold text-deep">No Assumption</span>
            <span className="block text-[11px] tracking-widest text-muted-foreground uppercase">
              Support Service
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-primary" }}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="hidden lg:inline-flex btn-primary !py-2.5 !px-5 text-sm">
          Book Consultation
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="lg:hidden p-2 rounded-md hover:bg-muted"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2.5 px-2 rounded-md text-foreground/90 hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-3">
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
