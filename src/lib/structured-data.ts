import { homeServicePreviews } from "@/data/pages";
import { siteContact, serviceArea } from "@/data/site";
import { SITE_URL } from "@/lib/seo";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * Site-wide JSON-LD for No Assumption Support Service.
 * NDIS registered.
 */
export function getStructuredDataGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": ORG_ID,
        name: "No Assumption Support Service",
        description:
          "Person-centred NDIS disability support services from Forrestfield across the Perth metropolitan area. We listen first — never assume.",
        url: SITE_URL,
        telephone: siteContact.phone,
        email: siteContact.email,
        image: `${SITE_URL}/images/logo.png`,
        address: {
          "@type": "PostalAddress",
          addressLocality: serviceArea.suburb,
          addressRegion: "WA",
          postalCode: "6058",
          addressCountry: "AU",
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: serviceArea.metro,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          description: siteContact.hours,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "NDIS Support Services",
          itemListElement: homeServicePreviews.map((service, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              url: `${SITE_URL}${service.to}`,
              provider: { "@id": ORG_ID },
              areaServed: {
                "@type": "AdministrativeArea",
                name: serviceArea.metro,
              },
            },
          })),
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: siteContact.phone,
            email: siteContact.email,
            contactType: "customer service",
            areaServed: "AU",
            availableLanguage: "English",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: "No Assumption Support Service",
        description:
          "NDIS support services and disability support for participants, families, and referrers.",
        publisher: { "@id": ORG_ID },
        inLanguage: "en-AU",
      },
    ],
  };
}

export function structuredDataScript() {
  return {
    type: "application/ld+json",
    children: JSON.stringify(getStructuredDataGraph()),
  };
}
