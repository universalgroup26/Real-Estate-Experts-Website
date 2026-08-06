// Analytics utility — GA4 + Meta Pixel + Microsoft Clarity
// nyrealtorjoy.com | Joy Chowdhury - KW Realty Landmark II

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    clarity?: (...args: any[]) => void;
  }
}

/** Fire a Google Analytics 4 event */
export const trackGA4 = (eventName: string, params: Record<string, any> = {}): void => {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
  } catch (e) {
    console.warn('[Analytics] GA4 error:', e);
  }
};

/** Fire a Meta Pixel standard or custom event */
export const trackPixel = (eventName: string, params: Record<string, any> = {}): void => {
  try {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', eventName, params);
    }
  } catch (e) {
    console.warn('[Analytics] Meta Pixel error:', e);
  }
};

/** Fire a Microsoft Clarity custom event */
export const trackClarity = (eventName: string): void => {
  try {
    if (typeof window !== 'undefined' && typeof window.clarity === 'function') {
      window.clarity('event', eventName);
    }
  } catch (e) {
    console.warn('[Analytics] Clarity error:', e);
  }
};

/** Track SPA page views across GA4, Meta Pixel, and Clarity */
export const trackPageView = (pageName: string): void => {
  const url = `https://nyrealtorjoy.com/#${pageName}`;
  trackGA4('page_view', {
    page_title: typeof document !== 'undefined' ? document.title : pageName,
    page_location: url,
    page_path: `/#${pageName}`,
  });
  trackPixel('PageView');
  trackClarity(`page_${pageName}`);
};

export type LeadType =
  | 'vacancy_form'
  | 'contact_form'
  | 'guide_request'
  | 'consultation_booking';

interface LeadEventOptions {
  type: LeadType;
  borough?: string;
  phone?: string;
  email?: string;
}

/**
 * Unified lead conversion event — fires GA4 generate_lead + custom event,
 * Meta Pixel Lead/Contact/Schedule, and Clarity custom session event.
 * Called automatically by the fetch interceptor in main.tsx.
 */
export const trackLeadEvent = (opts: LeadEventOptions): void => {
  const labels: Record<LeadType, string> = {
    vacancy_form: 'Vacancy Form Lead',
    contact_form: 'Contact Form Lead',
    guide_request: 'Guide Download Lead',
    consultation_booking: 'Consultation Booked',
  };

  const pixelEvents: Record<LeadType, string> = {
    vacancy_form: 'Lead',
    contact_form: 'Contact',
    guide_request: 'Lead',
    consultation_booking: 'Schedule',
  };

  const label = labels[opts.type];
  const pixelEvent = pixelEvents[opts.type];

  // GA4 — standard recommended lead event
  trackGA4('generate_lead', {
    event_category: 'Leads',
    event_label: label,
    borough: opts.borough || 'NYC',
    has_phone: Boolean(opts.phone),
    has_email: Boolean(opts.email),
    currency: 'USD',
    value: 1,
  });

  // GA4 — additional named event for GTM custom triggers
  trackGA4(opts.type, {
    borough: opts.borough || 'NYC',
    lead_type: opts.type,
  });

  // Meta Pixel — standard events (Lead, Contact, Schedule)
  trackPixel(pixelEvent, {
    content_name: label,
    content_category: 'NYC Real Estate Lead',
  });

  // Clarity — custom session event for heatmap segmentation
  trackClarity(opts.type);

  console.log(
    `[Analytics ✓] "${label}" fired → GA4 generate_lead + ${opts.type}, Meta Pixel ${pixelEvent}, Clarity ${opts.type}`
  );
};
