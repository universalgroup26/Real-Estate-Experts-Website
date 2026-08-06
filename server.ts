import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ─── GoHighLevel CRM API ─────────────────────────────────────────────────────
const GHL_API_BASE = 'https://services.leadconnectorhq.com';
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID || '';
const GHL_PRIVATE_TOKEN = process.env.GHL_PRIVATE_TOKEN || '';

/**
 * Create a real contact in GoHighLevel CRM.
 * Requires GHL_LOCATION_ID and GHL_PRIVATE_TOKEN environment variables.
 * Get your Private Integration Token from: GHL Settings → Integrations → Private Integrations
 */
const createGHLContact = async (data: {
  fullName?: string;
  phone?: string;
  email?: string;
  tags?: string[];
  source?: string;
  borough?: string;
  notes?: string;
}) => {
  if (!GHL_LOCATION_ID || !GHL_PRIVATE_TOKEN) {
    console.warn('[GHL] ⚠️  Missing GHL_LOCATION_ID or GHL_PRIVATE_TOKEN — contact NOT created in CRM.');
    console.warn('[GHL]     Add GHL_PRIVATE_TOKEN to Vercel env vars (Settings → Integrations → Private Integrations).');
    return null;
  }

  const nameParts = (data.fullName || '').split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';

  try {
    const res = await fetch(`${GHL_API_BASE}/contacts/`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${GHL_PRIVATE_TOKEN}`,
        'Content-Type': 'application/json',
        Version: '2021-07-28',
      },
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        firstName,
        lastName,
        phone: data.phone || '',
        email: data.email || '',
        source: data.source || 'Website',
        tags: data.tags || ['Website Lead'],
        ...(data.borough ? { customField: [{ key: 'borough', field_value: data.borough }] } : {}),
      }),
    });

    if (res.ok) {
      const result = await res.json();
      const contactId = result.contact?.id || result.id;
      console.log(`[GHL] ✅ Contact created: ${contactId} — ${firstName} ${lastName} (${data.email})`);
      return result.contact || result;
    } else {
      const errText = await res.text();
      console.error(`[GHL] ❌ Failed to create contact (HTTP ${res.status}):`, errText);
      return null;
    }
  } catch (err) {
    console.error('[GHL] ❌ Network error creating contact:', err);
    return null;
  }
};
// ─────────────────────────────────────────────────────────────────────────────

interface VacancyLead {
  id: string;
  fullName: string;
  role: string;
  mobilePhone: string;
  email: string;
  preferredContact: string;
  borough: string;
  unitCount: string;
  bedroomCount: string;
  askingRent: string;
  utilities: string;
  availability: string;
  moveInReady: string;
  previousExperience: string;
  mainQuestion: string;
  propertyAddress?: string;
  companyName?: string;
  additionalInfo?: string;
  consentAgreed: boolean;
  tags: string[];
  pipelineStage: string;
  assignedTo: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  pageUrl?: string;
  createdAt: string;
  ghlContactId?: string;
}

interface ConsultationBooking {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  consultationType: 'phone' | 'video';
  date: string;
  timeSlot: string;
  borough?: string;
  notes?: string;
  status: string;
  createdAt: string;
  ghlContactId?: string;
}

const leadsStore: VacancyLead[] = [];
const bookingsStore: ConsultationBooking[] = [];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      service: 'Real Estate Experts API',
      aiProvider: 'OpenRouter (openai/gpt-4o)',
      ghlConnected: Boolean(GHL_LOCATION_ID && GHL_PRIVATE_TOKEN),
    });
  });

  // Static SEO files
  app.get('/robots.txt', (req, res) => res.sendFile(path.join(__dirname, 'public', 'robots.txt')));
  app.get('/sitemap.xml', (req, res) => { res.type('text/xml'); res.sendFile(path.join(__dirname, 'public', 'sitemap.xml')); });
  app.get('/llm.txt', (req, res) => { res.type('text/plain'); res.sendFile(path.join(__dirname, 'public', 'llm.txt')); });

  // 1. Vacancy Submission — stores locally AND creates real GHL contact
  app.post('/api/submit-vacancy', async (req, res) => {
    try {
      const body = req.body;
      if (!body.fullName || !body.mobilePhone || !body.email || !body.borough) {
        return res.status(400).json({ error: 'Missing required landlord information' });
      }

      let leadTypeTag = 'Active Vacancy';
      if (body.role === 'Property Manager' || parseInt(body.unitCount) > 1 || body.unitCount === '5-10' || body.unitCount === '10+') {
        leadTypeTag = 'Property Manager';
      } else if (body.role === 'Broker/Agent') {
        leadTypeTag = 'Broker';
      } else if (body.availability && body.availability.includes('Future')) {
        leadTypeTag = 'Future Vacancy';
      }

      const tags = ['Website - Landlord Lead', leadTypeTag, `Borough: ${body.borough}`];

      // Create real GHL contact
      const ghlContact = await createGHLContact({
        fullName: body.fullName,
        phone: body.mobilePhone,
        email: body.email,
        tags,
        source: 'Website Vacancy Form',
        borough: body.borough,
      });

      const newLead: VacancyLead = {
        id: 'ghl_lead_' + Date.now(),
        fullName: body.fullName,
        role: body.role || 'Owner',
        mobilePhone: body.mobilePhone,
        email: body.email,
        preferredContact: body.preferredContact || 'Phone call',
        borough: body.borough,
        unitCount: body.unitCount || '1',
        bedroomCount: body.bedroomCount || '1 BR',
        askingRent: body.askingRent || '',
        utilities: body.utilities || 'Tenant pays gas/electric',
        availability: body.availability || 'Available now',
        moveInReady: body.moveInReady || 'Yes',
        previousExperience: body.previousExperience || 'No experience',
        mainQuestion: body.mainQuestion || '',
        propertyAddress: body.propertyAddress || '',
        companyName: body.companyName || '',
        additionalInfo: body.additionalInfo || '',
        consentAgreed: body.consentAgreed ?? true,
        tags,
        pipelineStage: 'New - Landlord Inquiry',
        assignedTo: 'Joy Chowdhury (Keller Williams Realty Landmark II)',
        utmSource: body.utmSource || 'direct',
        utmMedium: body.utmMedium || 'website',
        utmCampaign: body.utmCampaign || 'nyc_landlord_acquisition',
        pageUrl: body.pageUrl || req.headers.referer || 'https://nyrealtorjoy.com',
        createdAt: new Date().toISOString(),
        ghlContactId: ghlContact?.id,
      };

      leadsStore.unshift(newLead);
      console.log(`[API] New Landlord Lead: ${newLead.fullName} | ${newLead.borough} | GHL: ${ghlContact?.id || 'pending token'}`);

      return res.status(200).json({
        success: true,
        message: 'Thank you. We received your vacancy information and will review the details shortly.',
        leadId: newLead.id,
        crmStatus: {
          pipelineStage: 'New',
          assignedAgent: 'Joy Chowdhury',
          tags,
          confirmationSent: true,
          ghlContactId: ghlContact?.id || null,
        },
      });
    } catch (err: any) {
      console.error('Error in submit-vacancy:', err);
      return res.status(500).json({ error: 'Failed to process submission' });
    }
  });

  // 2. Book Landlord Consultation
  app.post('/api/book-consultation', async (req, res) => {
    try {
      const { fullName, phone, email, consultationType, date, timeSlot, borough, notes } = req.body;
      if (!fullName || !phone || !email || !date || !timeSlot) {
        return res.status(400).json({ error: 'Missing required booking details' });
      }

      const ghlContact = await createGHLContact({
        fullName, phone, email,
        tags: ['Website - Consultation Booking', `Type: ${consultationType || 'phone'}`],
        source: 'Website Booking Form',
        borough,
      });

      const booking: ConsultationBooking = {
        id: 'ghl_appt_' + Date.now(),
        fullName, phone, email,
        consultationType: consultationType || 'phone',
        date, timeSlot,
        borough: borough || 'Queens',
        notes: notes || '',
        status: 'Confirmed',
        createdAt: new Date().toISOString(),
        ghlContactId: ghlContact?.id,
      };

      bookingsStore.unshift(booking);
      console.log(`[API] Consultation booked: ${fullName} on ${date} at ${timeSlot} | GHL: ${ghlContact?.id || 'pending token'}`);

      return res.status(200).json({ success: true, message: 'Consultation booked successfully.', booking });
    } catch (err: any) {
      console.error('Error in book-consultation:', err);
      return res.status(500).json({ error: 'Failed to schedule consultation' });
    }
  });

  // 3. Guide Request — creates GHL contact with guide tag
  app.post('/api/guide-request', async (req, res) => {
    const { email, fullName, phone } = req.body;

    await createGHLContact({
      fullName, phone, email,
      tags: ['Website - Guide Download', 'Nurture: NYC Landlord Guide'],
      source: 'Website Guide Modal',
    });

    console.log(`[API] Guide requested by ${fullName || 'Landlord'} (${email})`);
    return res.status(200).json({ success: true, message: 'The NYC Landlord Guide link has been sent to your email.' });
  });

  // 4. Contact Form — FIXED endpoint (was /api/leads, now /api/contact)
  app.post('/api/contact', async (req, res) => {
    try {
      const { fullName, mobilePhone, email, role, notes, borough } = req.body;
      if (!fullName || !email) {
        return res.status(400).json({ error: 'Missing required contact details' });
      }

      const ghlContact = await createGHLContact({
        fullName,
        phone: mobilePhone,
        email,
        tags: ['Website - Contact Form', 'General Inquiry'],
        source: 'Website Contact Form',
        notes,
      });

      console.log(`[API] Contact form: ${fullName} (${email}) | GHL: ${ghlContact?.id || 'pending token'}`);

      return res.status(200).json({
        success: true,
        message: 'Message received. Joy Chowdhury will respond shortly.',
        ghlContactId: ghlContact?.id || null,
      });
    } catch (err: any) {
      console.error('Error in /api/contact:', err);
      return res.status(500).json({ error: 'Failed to process contact request' });
    }
  });

  // 5. Cloudflare Status
  app.get('/api/cloudflare-status', (req, res) => {
    const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
    const hasToken = Boolean(process.env.CLOUDFLARE_API_TOKEN);
    res.json({
      configured: Boolean(accountId && hasToken),
      accountId: accountId ? `${accountId.substring(0, 6)}...` : null,
      service: 'Cloudflare Edge CDN & DNS Proxy',
      domain: 'nyrealtorjoy.com',
      status: accountId && hasToken ? 'Active & Protected' : 'Environment configuration pending',
    });
  });

  // 6. View All Pipeline Leads (CRM inspection preview)
  app.get('/api/leads', (req, res) => {
    res.json({
      totalLeads: leadsStore.length,
      totalBookings: bookingsStore.length,
      ghlConnected: Boolean(GHL_LOCATION_ID && GHL_PRIVATE_TOKEN),
      leads: leadsStore,
      bookings: bookingsStore,
    });
  });

  // 7. AI Chat Endpoint (OpenRouter - Real Estate AI Assistant)
  app.post('/api/ai-chat', async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) return res.status(400).json({ error: 'Message is required' });

      const openRouterKey = process.env.OPENROUTER_API_KEY;
      if (!openRouterKey) return res.status(503).json({ error: 'AI service not configured. Set OPENROUTER_API_KEY.' });

      const systemPrompt = `You are Joy Chowdhury's AI assistant for NY Realtor Joy (nyrealtorjoy.com).
Joy is a Licensed Real Estate Salesperson at Keller Williams Realty Landmark II, located at 75-35 31st Ave, Suite 202, Jackson Heights, NY 11370.
She specializes in NYC Landlord Vacancy Support, CityFHEPS voucher assistance, Section 8/NYCHA guidance, HRA paperwork support, and unit placement across all 5 NYC boroughs.
Contact: 917-565-4788 | nyjoy@kw.com
Always be professional, helpful, and guide landlords to book a consultation with Joy.`;

      const messages = [
        { role: 'system', content: systemPrompt },
        ...(Array.isArray(history) ? history : []),
        { role: 'user', content: message },
      ];

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${openRouterKey}`,
          'HTTP-Referer': 'https://nyrealtorjoy.com',
          'X-Title': 'NY Realtor Joy - Joy Chowdhury KW Realty',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ model: 'openai/gpt-4o', messages, max_tokens: 600, temperature: 0.7 }),
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error('[OpenRouter] API Error:', errText);
        return res.status(502).json({ error: 'AI service temporarily unavailable' });
      }

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content
        || 'I apologize, I could not generate a response. Please call Joy at 917-565-4788.';

      return res.status(200).json({ reply, model: data.model || 'openai/gpt-4o' });
    } catch (err: any) {
      console.error('[OpenRouter] Endpoint error:', err);
      return res.status(500).json({ error: 'Failed to process AI request' });
    }
  });

  // Vite middleware
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({ server: { middlewareMode: true }, appType: 'spa' });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => res.sendFile(path.join(distPath, 'index.html')));
  }

  app.listen(PORT, '0.0.0.0', () => console.log(`Server running on http://0.0.0.0:${PORT}`));
}

startServer();
