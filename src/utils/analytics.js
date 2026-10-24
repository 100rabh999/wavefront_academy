/**
 * Lightweight, privacy-conscious event tracker for Wavefront Academy.
 * Bridges to GA4 (gtag) or GTM dataLayer if present, without hard dependencies.
 */
export function trackEvent(eventName, params = {}) {
  try {
    // 1. Google Analytics 4 (gtag)
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }

    // 2. Google Tag Manager (dataLayer)
    if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...params
      });
    }

    // Dev logging
    if (import.meta.env?.DEV) {
      console.log(`[Analytics Event] ${eventName}:`, params);
    }
  } catch (err) {
    // Fail silently in production to never break user interactions
    console.debug('Analytics dispatch error:', err);
  }
}

export function trackPhoneClick(locationLabel = 'unknown') {
  trackEvent('contact_phone_click', {
    event_category: 'engagement',
    event_label: locationLabel,
    contact_method: 'phone'
  });
}

export function trackWhatsAppClick(programName = 'general', locationLabel = 'unknown') {
  trackEvent('whatsapp_click', {
    event_category: 'lead_generation',
    event_label: locationLabel,
    program: programName,
    contact_method: 'whatsapp'
  });
}

export function trackEnquirySubmit(programName = 'general', studentClass = 'unknown') {
  trackEvent('generate_lead', {
    event_category: 'conversion',
    program: programName,
    student_class: studentClass,
    value: 1
  });
}
