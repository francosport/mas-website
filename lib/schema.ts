import type { Service } from "./services";
import type { Location } from "./locations";

const BASE_URL = "https://www.metroappliances.net";

const BUSINESS = {
  name: "Metro Appliance Services",
  phone: "(240) 859-1014",
  email: "support@metroappliances.net",
  // Service-area business: the street address is a mailing address only and
  // is hidden on the Google Business Profile, so it stays out of the schema.
  address: {
    addressLocality: "Largo",
    addressRegion: "MD",
    postalCode: "20774",
    addressCountry: "US",
  },
  hours: "Mo-Fr 08:00-18:00",
  hoursText: "Monday–Friday, 8:00 AM – 6:00 PM",
  priceRange: "$$",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/logo.png`,
};

const AREA_SERVED = [
  "Largo, MD",
  "Bowie, MD",
  "Mitchellville, MD",
  "Upper Marlboro, MD",
  "Clinton, MD",
  "Waldorf, MD",
  "Silver Spring, MD",
  "Washington, DC",
  "Riverdale, MD",
  "Glenarden, MD",
  "Lanham, MD",
  "Hyattsville, MD",
  "Capitol Heights, MD",
  "District Heights, MD",
  "Suitland, MD",
  "College Park, MD",
  "Seat Pleasant, MD",
];

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#business`,
    name: BUSINESS.name,
    url: BUSINESS.url,
    logo: BUSINESS.logo,
    image: BUSINESS.image,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.address.addressLocality,
      addressRegion: BUSINESS.address.addressRegion,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.addressCountry,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    areaServed: AREA_SERVED,
    founder: {
      "@type": "Person",
      name: "Foman \"Frank\" Robinson",
      jobTitle: "Owner & Lead Appliance Repair Technician",
    },
    foundingDate: "2019",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Appliance Repair Services",
      itemListElement: [
        "Refrigerator Repair",
        "Washer Repair",
        "Dryer Repair",
        "Range & Oven Repair",
        "Cooktop & Stove Repair",
        "Dishwasher Repair",
        "Garbage Disposal Service",
        "Dryer Vent Cleaning",
      ].map((serviceName) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: serviceName,
        },
      })),
    },
    sameAs: [
      "https://www.facebook.com/metroappliances",
      "https://maps.app.goo.gl/MoHEuLx9S61GvS3k8",
      "https://nextdoor.com/page/metro-appliance-services-llc-upper-marlboro-md/",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "204",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: BUSINESS.name,
    description:
      "Professional appliance repair services in the Greater DMV area. Refrigerator, washer, dryer, oven, dishwasher repair with 1-year warranty.",
    publisher: {
      "@id": `${BASE_URL}/#business`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/services/{search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function servicePageSchema(service: Service, cityName?: string) {
  const city = cityName ?? "Largo, MD";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/services/${service.slug}#service`,
    name: service.name,
    description: service.description,
    serviceType: service.name,
    provider: {
      "@id": `${BASE_URL}/#business`,
    },
    areaServed: AREA_SERVED,
    serviceOutput: `Repaired ${service.shortName}`,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@id": `${BASE_URL}/#business`,
      },
    },
    additionalType: `https://www.wikidata.org/wiki/Q3907588`,
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function locationPageSchema(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/service-areas/${location.slug}#service`,
    name: `Appliance Repair in ${location.name}, ${location.state}`,
    serviceType: "Appliance repair",
    url: `${BASE_URL}/service-areas/${location.slug}`,
    provider: {
      "@id": `${BASE_URL}/#business`,
    },
    areaServed: {
      "@type": "City",
      name: `${location.name}, ${location.state}`,
    },
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${BASE_URL}/contact`,
    name: `Contact Metro Appliance Services`,
    description: `Contact Metro Appliance Services to schedule appliance repair in Largo, MD and the Greater DMV area.`,
    mainEntity: {
      "@id": `${BASE_URL}/#business`,
    },
  };
}
