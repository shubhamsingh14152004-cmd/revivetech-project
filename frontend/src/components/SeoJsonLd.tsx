import React from "react";

interface SeoJsonLdProps {
  schema: Record<string, any> | Array<Record<string, any>>;
}

/**
 * Injects Schema.org JSON-LD structured data into the page head safely.
 */
export function SeoJsonLd({ schema }: SeoJsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, process.env.NODE_ENV === "development" ? 2 : 0),
      }}
    />
  );
}

export const SITE_URL = "https://www.sellrepairphone.org";
export const BUSINESS_NAME = "ReviveTech";
export const BUSINESS_PHONE = "+91 8591770877";
export const BUSINESS_PHONE_RAW = "8591770877";
export const BUSINESS_EMAIL = "supportsellphone@gmail.com";
export const BUSINESS_WHATSAPP = "https://wa.me/918591770877";

/**
 * Standard LocalBusiness / Store structured data
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS_NAME,
    alternateName: "ReviveTech Phone Repair & Buyback Lab",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.ico`,
    image: `${SITE_URL}/hero-phone.jpg`,
    description:
      "Certified cleanroom mobile phone repairs and instant cash buyback for used, damaged, or dead smartphones with free doorstep courier pickup across India.",
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Credit Card, Debit Card, Net Banking",
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
          "Sunday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "City",
        name: "Mumbai",
      },
      {
        "@type": "City",
        name: "Bengaluru",
      },
      {
        "@type": "City",
        name: "Delhi NCR",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mobile Phone Repair and Buyback Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile Phone Screen Replacement",
            description: "Same-day OEM-grade OLED and display replacement within 45 minutes.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Phone Battery Replacement",
            description: "High-capacity certified battery swap with 90-day warranty.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sell Dead Phone Buyback",
            description: "Instant cash payout for non-working, liquid-damaged, or crushed phones.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dead Phone & Motherboard IC Repair",
            description: "Cleanroom diagnosis, PMIC micro-soldering, and power rail short clearing for phones that do not turn on.",
          },
        },
      ],
    },
  };
}

/**
 * WebSite schema for search box capability
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    description: "Sell Dead Phones & Precision Cleanroom Mobile Repairs",
    publisher: {
      "@id": `${SITE_URL}/#business`,
    },
  };
}

/**
 * BreadcrumbList schema generator
 */
export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path.startsWith("http") ? item.path : `${SITE_URL}${item.path}`,
    })),
  };
}

/**
 * Service schema generator
 */
export function getServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    category: service.category,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_NAME,
      url: SITE_URL,
      telephone: BUSINESS_PHONE,
    },
    url: `${SITE_URL}${service.url}`,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}

/**
 * FAQPage schema generator
 */
export function getFaqSchema(faqs: { question: string; answer: string }[]) {
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
