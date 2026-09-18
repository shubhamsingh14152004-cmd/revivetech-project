// Google Analytics 4 (GA4) Analytics and Event Tracking Utility
// Uses VITE_GA_MEASUREMENT_ID from environment variables if configured

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = (
  import.meta.env["VITE_GA_MEASUREMENT_ID"] as string | undefined
)?.trim();

/**
 * Initializes GA4 scripts dynamically in the browser if a Measurement ID is provided.
 */
export function initGA(): void {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return;

  // Prevent duplicate script injection
  if (document.getElementById("ga4-script")) return;

  const script = document.createElement("script");
  script.id = "ga4-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer?.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
    send_page_view: true,
  });
}

/**
 * Sends a custom GA4 event safely without breaking user flows if GA is disabled.
 */
export function trackEvent(
  eventName:
    | "repair_booking_started"
    | "repair_booking_completed"
    | "sell_phone_started"
    | "sell_phone_completed"
    | "whatsapp_click"
    | "phone_call_click"
    | "contact_form_submit"
    | "navigation_click"
    | "triage_started",
  params: Record<string, any> = {}
): void {
  if (typeof window === "undefined") return;

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, {
        ...params,
        timestamp: new Date().toISOString(),
      });
    } else {
      // In development or when GA is not yet loaded, log event for debugging
      if (import.meta.env.DEV) {
        console.log(`📊 [GA4 Event: ${eventName}]`, params);
      }
    }
  } catch (err) {
    console.warn("Could not log analytics event:", err);
  }
}
