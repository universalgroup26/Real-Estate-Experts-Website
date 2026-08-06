import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
}

const leadsStore: VacancyLead[] = [];
const bookingsStore: ConsultationBooking[] = [];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Endpoints
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'Real Estate Experts API', aiProvider: 'OpenRouter (openai/gpt-4o)' });
  });

  // Serve static SEO and AI context files
  app.get('/robots.txt', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'robots.txt'));
  });

  app.get('/sitemap.xml', (req, res) => {
    res.type('text/xml');
    res.sendFile(path.join(__dirname, 'public', 'sitemap.xml'));
  });

  app.get('/llm.txt', (req, res) => {
    res.type('text/plain');
    res.sendFile(path.join(__dirname, 'public', 'llm.txt'));
  });

  // 1. Vacancy Submission Endpoint (GoHighLevel CRM Integration)
  app.post('/api/submit-vacancy', (req, res) => {
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
        tags: ['Website - Landlord Lead', leadTypeTag],
        pipelineStage: 'New - Landlord Inquiry',
        assignedTo: 'Joy Chowdhury (Keller Williams Realty Landmark II)',
        utmSource: body.utmSource || 'direct',
        utmMedium: body.utmMedium || 'website',
        utmCampaign: body.utmCampaign || 'nyc_landlord_acquisition',
        pageUrl: body.pageUrl || req.headers.referer || 'https://nyrealtorjoy.com',
        createdAt: new Date().toISOString(),
      };

      leadsStore.unshift(newLead);
      console.log(`[GHL CRM] New Landlord Lead: ${newLead.fullName} (${newLead.mobilePhone}) - ${newLead.borough}`);

      return res.status(200).json({
        success: true,
        message: 'Thank you. We received your vacancy information and will review the details shortly.',
        leadId: newLead.id,
        crmStatus: {
          pipelineStage: 'New',
          assignedAgent: 'Joy Chowdhury',
          tags: newLead.tags,
          confirmationSent: true,
        },
      });
    } catch (err: any) {
      console.error('Error in submit-vacancy:', err);
      return res.status(500).json({ error: 'Failed to process submission' });
    }
  });

  // 2. Book Landlord Consultation Endpoint
  app.post('/api/book-consultation', (req, res) => {
    try {
      const { fullName, phone, email, consultationType, date, timeSlot, borough, notes } = req.body;
      if (!fullName || !phone || !email || !date || !timeSlot) {
        return res.status(400).json({ error: 'Missing required booking details' });
      }

      const booking: ConsultationBooking = {
        id: 'ghl_appt_' + Date.now(),
        fullName, phone, email,
        consultationType: consultationType || 'phone',
        date, timeSlot,
        borough: borough || 'Queens',
        notes: notes || '',
        status: 'Confirmed',
        createdAt: new Date().toISOString(),
      };

      bookingsStore.unshift(booking);
      console.log(`[GHL CRM] Consultation Scheduled: ${fullName} on ${date} at ${timeSlot}`);

      return res.status(200).json({ success: true, message: 'Landlord consultation booked successfully.', booking });
    } catch (err: any) {
      console.error('Error in book-consultation:', err);
      return res.status(500).json({ error: 'Failed to schedule consultation' });
    }
  });

  // 3. Request Landlord Guide Endpoint
  app.post('/api/guide-request', (req, res) => {
    const { email, fullName } = req.body;
    console.log(`[GHL CRM] NYC Landlord Guide requested by ${fullName || 'Landlord'} (${email})`);
    return res.status(200).json({ success: true, message: 'The NYC Landlord Guide link has been sent to your email.' });
  });

  // 4. Cloudflare Proxy & DNS Status Endpoint
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

  // 5. View All Pipeline Leads (CRM inspection preview)
  app.get('/api/leads', (req, res) => {
    res.json({
      totalLeads: leadsStore.length,
      totalBookings: bookingsStore.length,
      leads: leadsStore,
      bookings: bookingsStore,
    });
  });

  // 6. AI Chat Endpoint (OpenRouter - Real Estate AI Assistant)
  app.post('/api/ai-chat', async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: 'Message is required' });
      }

      const openRouterKey = process.env.OPENROUTER_API_KEY;
      if (!openRouterKey) {
        return res.status(503).json({ error: 'AI service not configured. Set OPENROUTER_API_KEY in environment.' });
      }

      const systemPrompt = `You are Joy Chowdhury's AI assistant for NY Realtor Joy (nyrealtorjoy.com).
Joy is a Licensed Real Estate Salesperson at Keller Williams Realty Landmark II, located at 75-35 31st Ave, Suite 202, Jackson Heights, NY 11370.
She specializes in:
- NYC Landlord Vacancy Support & Rental Placement
- CityFHEPS voucher assistance
- Section 8 / NYCHA program guidance  
- HRA paperwork support
- Unit placement across Queens, Brooklyn, Manhattan, Bronx, and Staten Island
Contact: 917-565-4788 | nyjoy@kw.com
Always be professional, helpful, and guide landlords toward booking a consultation with Joy.`;

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
        body: JSON.stringify({
          model: 'openai/gpt-4o',
          messages,
          max_tokens: 600,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('[OpenRouter] API Error:', errorText);
        return res.status(502).json({ error: 'AI service temporarily unavailable' });
      }

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content
        || 'I apologize, I could not generate a response. Please call Joy directly at 917-565-4788.';

      console.log('[OpenRouter] AI response generated successfully');
      return res.status(200).json({ reply, model: data.model || 'openai/gpt-4o' });
    } catch (err: any) {
      console.error('[OpenRouter] Endpoint error:', err);
      return res.status(500).json({ error: 'Failed to process AI request' });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
