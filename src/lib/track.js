export function track(event, params = {}) {
  try {
    // Console (sirve en dev)
    if (import.meta?.env?.DEV) console.log("[track]", event, params);

    // GA4 (si existe gtag)
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", event, params);
    }

    // GTM (si existe dataLayer)
    if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event, ...params });
    }
  } catch {}
}
