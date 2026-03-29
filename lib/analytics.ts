'use client'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export function trackEvent(eventName: string, params: Record<string, string | number | boolean> = {}) {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || typeof window.gtag !== 'function') return

  window.gtag('event', eventName, params)
}

/** Navigation App Router : envoie une page vue GA4 (recommandé par Google pour les SPA). */
export function trackPageView(pagePath: string) {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || typeof window.gtag !== 'function') return

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: pagePath,
    page_location: new URL(pagePath, window.location.origin).href,
  })
}
