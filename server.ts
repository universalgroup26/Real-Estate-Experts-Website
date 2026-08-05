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
    res.json({ status: 'ok', service: 'Real Estate Experts API' });
  });

  // 1. Vacancy Submission Endpoint (GoHighLevel CRM Integration simulation)
  app.post('/api/submit-vacancy', (req, res) => {
    try {
      const body = req.body;
      if (!body.fullName || !body.mobilePhone || !body.email || !body.borough) {
        return res.status(400).json({ error: 'Missing required landlord information' });
      }

      // Determine Lead Type Tag based on inputs
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
        pageUrl: body.pageUrl || req.headers.referer || 'https://nyjoy.kw.com',
        createdAt: new Date().toISOString(),
      };

      leadsStore.unshift(newLead);

      // Simulating GoHighLevel Automated Responses & Internal Alerts
      console.log(`[GHL CRM] New Landlord Lead Created: ${newLead.fullName} (${newLead.mobilePhone}) - Assigned to Joy Chowdhury`);
      console.log(`[GHL CRM] Notification SMS queued to Joy Chowdhury (917-565-4788): "New Landlord Lead: ${newLead.fullName}, Borough: ${newLead.borough}, Units: ${newLead.unitCount}"`);
      console.log(`[GHL CRM] Confirmation Email & SMS queued to prospect (${newLead.email})`);

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
        fullName,
        phone,
        email,
        consultationType: consultationType || 'phone',
        date,
        timeSlot,
        borough: borough || 'Queens',
        notes: notes || '',
        status: 'Confirmed',
        createdAt: new Date().toISOString(),
      };

      bookingsStore.unshift(booking);

      console.log(`[GHL CRM] Consultation Scheduled: ${fullName} on ${date} at ${timeSlot} (${consultationType})`);

      return res.status(200).json({
        success: true,
        message: 'Landlord consultation booked successfully.',
        booking,
      });
    } catch (err: any) {
      console.error('Error in book-consultation:', err);
      return res.status(500).json({ error: 'Failed to schedule consultation' });
    }
  });

  // 3. Request Landlord Guide Endpoint
  app.post('/api/guide-request', (req, res) => {
    const { email, fullName, phone } = req.body;
    console.log(`[GHL CRM] NYC Landlord Guide requested by ${fullName || 'Landlord'} (${email})`);
    return res.status(200).json({
      success: true,
      message: 'The NYC Landlord Guide link has been sent to your email.',
    });
  });

  // 4. View All Pipeline Leads (For CRM inspection preview)
  app.get('/api/leads', (req, res) => {
    res.json({
      totalLeads: leadsStore.length,
      totalBookings: bookingsStore.length,
      leads: leadsStore,
      bookings: bookingsStore,
    });
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
