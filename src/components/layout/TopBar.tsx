import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function TopBar() {
  return (
    <div className="hidden md:block bg-deep text-primary-foreground text-sm">
      <div className="container-page flex items-center justify-between py-2.5">
        <div className="flex items-center gap-6">
          <a href="tel:+61468880557" className="flex items-center gap-2 hover:opacity-80">
            <Phone className="size-4" /> +61 468 880 557
          </a>
          <a href="mailto:info@noassumption.com.au" className="flex items-center gap-2 hover:opacity-80">
            <Mail className="size-4" /> info@noassumption.com.au
          </a>
          <span className="flex items-center gap-2 opacity-80">
            <MapPin className="size-4" /> Forrestfield, Perth WA
          </span>
        </div>
        <a
          href="https://wa.me/61468880557"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:opacity-80"
        >
          <MessageCircle className="size-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
