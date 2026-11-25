import { site, services, faqs } from "./site";

const businessId = `${site.url}/#organization`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": businessId,
        name: site.name,
        legalName: site.legalName,
        alternateName: "UR Interiors Miyapur Hyderabad",
        description: site.description,
        url: site.url,
        image: `${site.url}/og.jpg`,
        logo: `${site.url}/logo.png`,
        telephone: site.phoneRaw,
        ...(site.email ? { email: site.email } : {}),
        priceRange: site.priceRange,
        foundingDate: site.founded,
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI, Bank transfer, Credit card",
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.locality,
          addressRegion: site.address.region,
          postalCode: site.address.postalCode,
          addressCountry: site.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.lat,
          longitude: site.geo.lng,
        },
        hasMap: `https://www.google.com/maps/search/?api=1&query=${site.geo.lat},${site.geo.lng}`,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "10:00",
            closes: "19:30",
          },
        ],
        areaServed: site.areasServed.map((area) => ({
          "@type": "Place",
          name: `${area}, Hyderabad`,
        })),
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "240",
          bestRating: "5",
        },
        knowsAbout: [
          "Interior design",
          "Modular kitchen design",
          "Wardrobe design",
          "False ceiling and lighting",
          "Turnkey home interiors",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Interior design services in Hyderabad",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.body,
              serviceType: s.title,
              provider: { "@id": businessId },
              areaServed: "Hyderabad, Telangana, India",
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        inLanguage: "en-IN",
        publisher: { "@id": businessId },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

export function jsonLdString(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
