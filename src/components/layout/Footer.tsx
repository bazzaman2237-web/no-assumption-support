import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, HeartHandshake } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-deep text-primary-foreground mt-24">
      <div className="container-page py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center size-10 rounded-2xl bg-primary-foreground/15">
              <HeartHandshake className="size-5" />
            </span>
            <div>
              <p className="font-display text-lg font-semibold">No Assumption</p>
              <p className="text-xs uppercase tracking-widest opacity-70">Support Service</p>
            </div>
          </div>
          <p className="mt-4 text-sm opacity-80 leading-relaxed">
            Support Without Assumptions. Person-centred NDIS support across Perth, built on listening
            first and acting with care.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest opacity-80">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              ["/", "Home"],
              ["/about", "About Us"],
              ["/services", "Our Services"],
              ["/faqs", "FAQs"],
              ["/ndis-resources", "NDIS Resources"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="opacity-80 hover:opacity-100 hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest opacity-80">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone className="size-4 mt-0.5 shrink-0" />
              <a href="tel:+61468880557" className="hover:underline">+61 468 880 557</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="size-4 mt-0.5 shrink-0" />
              <a href="mailto:info@noassumption.com.au" className="hover:underline break-all">
                info@noassumption.com.au
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MessageCircle className="size-4 mt-0.5 shrink-0" />
              <a href="https://wa.me/61468880557" target="_blank" rel="noreferrer" className="hover:underline">
                WhatsApp Chat
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="size-4 mt-0.5 shrink-0" />
              <span>Forrestfield, Perth WA 6058</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest opacity-80">
            Acknowledgement
          </h4>
          <p className="mt-4 text-sm opacity-80 leading-relaxed">
            We acknowledge the Whadjuk people of the Noongar Nation, the Traditional Custodians of
            the land on which we work, and pay our respects to Elders past, present and emerging.
          </p>
          <p className="mt-4 text-xs opacity-70">ABN: 00 000 000 000</p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page py-5 flex flex-col md:flex-row gap-2 md:items-center md:justify-between text-xs opacity-70">
          <p>© {new Date().getFullYear()} No Assumption Support Service. All rights reserved.</p>
          <p>Registered NDIS Provider · Forrestfield, Perth WA</p>
        </div>
      </div>
    </footer>
  );
}
