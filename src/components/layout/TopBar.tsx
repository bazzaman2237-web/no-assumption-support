import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { siteContact } from "@/data/site";

export function TopBar() {
  return (
    <div className="hidden md:block bg-accent text-accent-foreground text-sm">
      <div className="container-page flex items-center justify-between py-2.5">
        <div className="flex items-center gap-6">
          <a href={siteContact.phoneHref} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone className="size-4" /> {siteContact.phone}
          </a>
          <a href={`mailto:${siteContact.email}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Mail className="size-4" /> {siteContact.email}
          </a>
          <span className="flex items-center gap-2 opacity-90">
            <MapPin className="size-4" /> {siteContact.address}
          </span>
        </div>
        <a
          href={siteContact.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <MessageCircle className="size-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
