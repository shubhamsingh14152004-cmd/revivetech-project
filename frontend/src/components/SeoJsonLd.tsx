import React from "react";
import { siteConfig } from "../config/siteConfig";

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

export const SITE_URL = siteConfig.siteUrl.replace(/\/$/, "");

/**
 * Organization structured data
 */
export function getOrganizationSchema() {
 const schema: any = {
 "@context": "https://schema.org",
 "@type": "Organization",
 "@id": `${SITE_URL}/#org`,
 name: siteConfig.brandName,
 url: SITE_URL,
 logo: `${SITE_URL}/images/revora-logo-transparent.png`,
 telephone: siteConfig.phoneDisplay,
 email: siteConfig.email,
 sameAs: [],
 contactPoint: [
 {
 "@type": "ContactPoint",
 telephone: siteConfig.phoneDisplay,
 contactType: "customer service",
 availableLanguage: ["English", "Hindi"],
 },
 ],
 };

 if (siteConfig.social.facebook) schema.sameAs.push(siteConfig.social.facebook);
 if (siteConfig.social.instagram) schema.sameAs.push(siteConfig.social.instagram);
 if (siteConfig.social.youtube) schema.sameAs.push(siteConfig.social.youtube);
 if (siteConfig.social.googleBusiness) schema.sameAs.push(siteConfig.social.googleBusiness);

 if (schema.sameAs.length === 0) {
 delete schema.sameAs;
 }

 return schema;
}

/**
 * Standard LocalBusiness / Store structured data
 */
export function getLocalBusinessSchema() {
 const schema: any = {
 "@context": "https://schema.org",
 // Do not claim a storefront or publish coordinates when no public address is configured.
 "@type": siteConfig.business.hasPublicAddress && siteConfig.business.address ? "LocalBusiness" : "Organization",
 "@id": `${SITE_URL}/#business`,
 name: siteConfig.brandName,
 url: SITE_URL,
 logo: `${SITE_URL}/images/revora-logo-transparent.png`,
 image: `${SITE_URL}/images/revora-logo-transparent.png`,
 telephone: siteConfig.phoneDisplay,
 email: siteConfig.email,
 currenciesAccepted: "INR",
 paymentAccepted: siteConfig.paymentAccepted,
 areaServed: siteConfig.serviceAreas.map(area => ({
 "@type": "City",
 name: area
 })),
 };

 if (siteConfig.business.hasPublicAddress && siteConfig.business.address) {
 schema.address = {
 "@type": "PostalAddress",
 streetAddress: siteConfig.business.address,
 addressCountry: "IN",
 };
 if (siteConfig.business.geo && (siteConfig.business.geo.latitude !== 0 || siteConfig.business.geo.longitude !== 0)) {
 schema.geo = {
 "@type": "GeoCoordinates",
 latitude: siteConfig.business.geo.latitude,
 longitude: siteConfig.business.geo.longitude,
 };
 }
 }

 return schema;
}

/**
 * WebSite schema for search box capability
 */
export function getWebSiteSchema() {
 return {
 "@context": "https://schema.org",
 "@type": "WebSite",
 "@id": `${SITE_URL}/#website`,
 name: "Revora",
 alternateName: "sellrepairphone.org",
 url: `${SITE_URL}/`,
 publisher: {
 "@id": `${SITE_URL}/#org`,
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
 "@id": `${SITE_URL}/#business`,
 },
 url: fullUrl,
 areaServed: siteConfig.serviceAreas.map(area => ({
 "@type": "City",
 name: area
 })),
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
