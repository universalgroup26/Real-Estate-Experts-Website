import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { trackLeadEvent } from './utils/analytics';

// ─── Global Fetch Interceptor ────────────────────────────────────────────────
// Automatically fires GA4 + Meta Pixel + Clarity events on successful API calls.
// Covers: Vacancy Form, Contact Form, Guide Request, Consultation Booking.
// No changes needed in individual components — all tracking handled here.
// ─────────────────────────────────────────────────────────────────────────────
const _originalFetch = window.fetch.bind(window);

window.fetch = async (
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> => {
  const response = await _originalFetch(input, init);

  try {
    if (response.ok) {
      const url =
        typeof input === 'string'
          ? input
          : input instanceof Request
          ? input.url
          : String(input);

      const body = (() => {
        try {
          return init?.body ? JSON.parse(init.body as string) : {};
        } catch {
          return {};
        }
      })();

      if (url.includes('/api/submit-vacancy')) {
        trackLeadEvent({
          type: 'vacancy_form',
          borough: body.borough,
          phone: body.mobilePhone,
          email: body.email,
        });
      } else if (url.includes('/api/contact')) {
        trackLeadEvent({
          type: 'contact_form',
          phone: body.mobilePhone || body.phone,
          email: body.email,
        });
      } else if (url.includes('/api/guide-request')) {
        trackLeadEvent({
          type: 'guide_request',
          phone: body.phone,
          email: body.email,
        });
      } else if (url.includes('/api/book-consultation')) {
        trackLeadEvent({
          type: 'consultation_booking',
          phone: body.phone,
          email: body.email,
        });
      }
    }
  } catch (analyticsError) {
    // Never block user flow due to analytics errors
    console.warn('[Analytics] Interceptor error:', analyticsError);
  }

  return response;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
