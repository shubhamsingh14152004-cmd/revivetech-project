/**
 * Central WhatsApp message builder.
 * All WhatsApp links across the site must use waHref() from this module.
 *
 * Rules:
 *  - Plain text only, no markdown, no emojis, no prices
 *  - Line breaks with \n
 *  - Omit fields that are empty / falsy
 *  - Sanitize: trim, strip non-printable chars, enforce per-field char caps
 *  - Total message capped at 900 chars before encoding
 */

import { siteConfig } from "../config/siteConfig";

// ---------------------------------------------------------------------------
// Reference ID — generated once per browser session
// ---------------------------------------------------------------------------
function makeRefId(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no 0/O/1/I ambiguity
  let id = "RV-";
  for (let i = 0; i < 5; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}

let _sessionRef: string | null = null;

export function getSessionRef(): string {
  if (!_sessionRef) {
    _sessionRef = makeRefId();
  }
  return _sessionRef;
}

// ---------------------------------------------------------------------------
// Sanitize helpers
// ---------------------------------------------------------------------------
function san(value: string | undefined | null, maxLen = 80): string {
  if (!value) return "";
  return value.trim().replace(/[^\x20-\x7E\u0900-\u097F\n]/g, "").slice(0, maxLen);
}

function line(label: string, value: string | undefined | null): string {
  const v = san(value);
  if (!v) return "";
  return `${label}: ${v}\n`;
}

// ---------------------------------------------------------------------------
// Message kinds and their data shapes
// ---------------------------------------------------------------------------
export type WaKind =
  | "SELL"
  | "SELL_DEAD"
  | "REPAIR"
  | "MODEL_NOT_LISTED"
  | "CATALOG_ROW"
  | "FIX_OR_SELL"
  | "MULTIPLE"
  | "TRACK"
  | "PAGE_CONTEXT"
  | "GENERAL";

export interface WaSellData {
  brand: string;
  model: string;
  storage?: string;
  condition?: string;
  hasBox?: boolean;
  name?: string;
  pincode?: string;
  note?: string;
}

export interface WaSellDeadData {
  brand?: string;
  model?: string;
  faultDesc?: string;
  name?: string;
  pincode?: string;
  note?: string;
}

export interface WaRepairData {
  brand?: string;
  model?: string;
  issues?: string[]; // e.g. ["Screen & OLED", "Battery"]
  serviceType?: string; // e.g. "In-Store Lab"
  slot?: string;
  name?: string;
  pincode?: string;
  note?: string;
}

export interface WaModelNotListedData {
  brand?: string;
  searchedName?: string;
  note?: string;
}

export interface WaCatalogRowData {
  brand: string;
  note?: string;
}

export interface WaFixOrSellData {
  brand?: string;
  model?: string;
  issue?: string;
  note?: string;
}

export interface WaMultipleData {
  count?: number;
  brands?: string;
  note?: string;
}

export interface WaTrackData {
  ticketNumber?: string;
  name?: string;
}

export interface WaPageContextData {
  pageTitle?: string;
  note?: string;
}

export interface WaGeneralData {
  note?: string;
}

export type WaData =
  | WaSellData
  | WaSellDeadData
  | WaRepairData
  | WaModelNotListedData
  | WaCatalogRowData
  | WaFixOrSellData
  | WaMultipleData
  | WaTrackData
  | WaPageContextData
  | WaGeneralData;

// ---------------------------------------------------------------------------
// Core builder
// ---------------------------------------------------------------------------
export function buildWhatsAppMessage(kind: WaKind, data: WaData = {}): string {
  const ref = getSessionRef();
  const hours = siteConfig.hours;
  let msg = "";

  switch (kind) {
    case "SELL": {
      const d = data as WaSellData;
      msg += "Hi Revora, I want to sell my phone.\n\n";
      msg += line("Phone", `${d.brand} ${d.model}`);
      msg += line("Storage", d.storage);
      msg += line("Condition", d.condition);
      if (d.hasBox !== undefined) {
        msg += line("Box and charger", d.hasBox ? "Yes" : "No");
      }
      msg += line("Name", d.name);
      msg += line("Pincode", d.pincode);
      if (d.note) msg += line("Note", d.note);
      msg += `\nRef: ${ref}`;
      break;
    }

    case "SELL_DEAD": {
      const d = data as WaSellDeadData;
      msg += "Hi Revora, I want to sell a dead or damaged phone.\n\n";
      msg += line("Brand", d.brand);
      msg += line("Model", d.model);
      msg += line("Fault", d.faultDesc);
      msg += line("Name", d.name);
      msg += line("Pincode", d.pincode);
      if (d.note) msg += line("Note", d.note);
      msg += `\nRef: ${ref}`;
      break;
    }

    case "REPAIR": {
      const d = data as WaRepairData;
      msg += "Hi Revora, I want to book a phone repair.\n\n";
      msg += line("Device", `${d.brand || ""} ${d.model || ""}`.trim());
      if (d.issues?.length) {
        msg += line("Issues", d.issues.join(", "));
      }
      msg += line("Service type", d.serviceType);
      msg += line("Preferred slot", d.slot);
      msg += line("Name", d.name);
      msg += line("Pincode", d.pincode);
      if (d.note) msg += line("Note", d.note);
      msg += `\nRef: ${ref}`;
      break;
    }

    case "MODEL_NOT_LISTED": {
      const d = data as WaModelNotListedData;
      msg += "Hi Revora, my phone model is not listed on your site.\n\n";
      msg += line("Brand", d.brand);
      msg += line("Model searched", d.searchedName);
      if (d.note) msg += line("Note", d.note);
      msg += `\nRef: ${ref}`;
      break;
    }

    case "CATALOG_ROW": {
      const d = data as WaCatalogRowData;
      msg += `Hi Revora, I am interested in selling my ${san(d.brand, 40)} phone.\n\n`;
      if (d.note) msg += line("Note", d.note);
      msg += `\nRef: ${ref}`;
      break;
    }

    case "FIX_OR_SELL": {
      const d = data as WaFixOrSellData;
      msg += "Hi Revora, I am not sure whether to repair or sell my phone.\n\n";
      msg += line("Phone", `${d.brand || ""} ${d.model || ""}`.trim());
      msg += line("Issue", d.issue);
      if (d.note) msg += line("Note", d.note);
      msg += `\nRef: ${ref}`;
      break;
    }

    case "MULTIPLE": {
      const d = data as WaMultipleData;
      msg += "Hi Revora, I have multiple phones to sell.\n\n";
      if (d.count) msg += line("Approximate count", String(d.count));
      msg += line("Brands", d.brands);
      if (d.note) msg += line("Note", d.note);
      msg += `\nRef: ${ref}`;
      break;
    }

    case "TRACK": {
      const d = data as WaTrackData;
      msg += "Hi Revora, I want to check on my repair or sell request.\n\n";
      msg += line("Ticket / Reference", d.ticketNumber);
      msg += line("Name", d.name);
      msg += `\nRef: ${ref}`;
      break;
    }

    case "PAGE_CONTEXT": {
      const d = data as WaPageContextData;
      msg += "Hi Revora, I have a question.\n\n";
      msg += line("Page", d.pageTitle);
      if (d.note) msg += line("Note", d.note);
      msg += `\nRef: ${ref}`;
      break;
    }

    default: {
      const d = data as WaGeneralData;
      msg += "Hi Revora, I have a question about my phone.\n\n";
      if (d.note) msg += line("Note", d.note);
      msg += `\nRef: ${ref}`;
      break;
    }
  }

  // Append business hours reminder and trim to 900 chars
  const hoursLine = `\nWe are available ${hours}.`;
  const trimmed = msg.slice(0, 900 - hoursLine.length);
  return (trimmed + hoursLine).trim();
}

// ---------------------------------------------------------------------------
// href builder — use this for all <a href> attributes
// ---------------------------------------------------------------------------
export function waHref(kind: WaKind = "GENERAL", data: WaData = {}): string {
  const msg = buildWhatsAppMessage(kind, data);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

// ---------------------------------------------------------------------------
// Analytics helper — fire without blocking navigation
// ---------------------------------------------------------------------------
export function fireWaAnalytics(
  kind: WaKind,
  data: { brand?: string; model?: string; condition?: string } = {}
) {
  try {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "whatsapp_quote", {
        kind,
        brand: data.brand,
        model: data.model,
        condition: data.condition,
      });
    }
  } catch (_) {}
}
