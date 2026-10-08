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
        __html: JSON.stringify(schema, null, process.env["NODE_ENV"] === "development" ? 2 : 0),
      }}
    />
  );
}

export const SITE_URL = "https://sellrepairphone.org";
export const BUSINESS_NAME = "Revora — Phone Buyback & Cleanroom Repair";
export const BUSINESS_PHONE = "+91 8591770877";
export const BUSINESS_PHONE_RAW = "8591770877";
export const BUSINESS_EMAIL = "supportsellphone@gmail.com";
export const BUSINESS_WHATSAPP = "https://wa.me/918591770877";

/**
 * Organization structured data
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS_NAME,
    alternateName: "Revora — Sell Your Old Phone & Get It Repaired",
    url: SITE_URL,
    logo: `${SITE_URL}/images/revora-logo-transparent.png`,
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BUSINESS_PHONE,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };
}

/**
 * Standard LocalBusiness / Store structured data
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS_NAME,
    alternateName: "Revora — SellRepairPhone",
    url: SITE_URL,
    logo: `${SITE_URL}/images/revora-logo-transparent.png`,
    image: `${SITE_URL}/images/revora-logo-transparent.png`,
    description:
      "Sell old, used, damaged or dead mobile phones for top cash and book 45-minute doorstep phone repairs in Mumbai and across India with 90-day warranty.",
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Credit Card, Debit Card, Net Banking",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No. 4, Service Hub & Dispatch Facility",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.076,
      longitude: 72.8777,
    },
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
        "@type": "City",
        name: "Mumbai",
      },
      {
        "@type": "City",
        name: "Navi Mumbai",
      },
      {
        "@type": "City",
        name: "Thane",
      },
      {
        "@type": "Country",
        name: "India",
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
export interface BreadcrumbItem {
  name: string;
  path?: string;
  url?: string;
  item?: string;
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, index) => {
      const rawTarget = crumb.path || crumb.url || crumb.item || "/";
      const targetUrl = rawTarget.startsWith("http")
        ? rawTarget
        : `${SITE_URL}${rawTarget.startsWith("/") ? "" : "/"}${rawTarget}`;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: targetUrl,
      };
    }),
  };
}

/**
 * Service schema generator
 */
export interface ServiceSchemaInput {
  name: string;
  description: string;
  url?: string;
  category?: string;
  serviceType?: string;
}

export function getServiceSchema(
  service: ServiceSchemaInput | string,
  argDescription?: string,
  argCategory?: string,
  argUrl?: string
) {
  const isObj = typeof service === "object" && service !== null;
  const name = isObj ? service.name : service;
  const description = isObj ? service.description : argDescription || "";
  const category = isObj
    ? service.category || service.serviceType || "Mobile Phone Repair & Buyback"
    : argCategory || "Mobile Phone Repair & Buyback";
  const rawUrl = isObj ? service.url || "" : argUrl || "";
  const fullUrl = rawUrl.startsWith("http")
    ? rawUrl
    : `${SITE_URL}${rawUrl.startsWith("/") ? "" : "/"}${rawUrl}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    category,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_NAME,
      url: SITE_URL,
      telephone: BUSINESS_PHONE,
    },
    url: fullUrl,
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
