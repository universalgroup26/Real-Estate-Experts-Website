import React, { useEffect } from 'react';
import { Calendar as CalendarIcon, ShieldCheck, Phone, MapPin, Building, CheckCircle2, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const BookingCalendar: React.FC = () => {
  useEffect(() => {
    // Ensure GoHighLevel form_embed.js is loaded for dynamic iframe resizing
    const scriptId = 'ghl-form-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="booking-calendar" className="py-12 sm:py-16 bg-[#050C16] text-white border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container */}
        <div className="bg-[#091424] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden">
          
          {/* Header Section */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-teal-500/10 text-[#00D2B4] border border-teal-500/20 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#00D2B4]" /> GoHighLevel Live Calendar Schedule
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Schedule Your Landlord Consultation
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              Select an available date and time slot below to schedule a 1-on-1 consultation directly with <strong>Joy Chowdhury</strong> (Keller Williams Realty Landmark II).
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 text-teal-400 font-medium">
                <CheckCircle2 className="w-4 h-4" /> Instant SMS & Email Confirmation
              </div>
              <div className="flex items-center gap-1.5 text-teal-400 font-medium">
                <CheckCircle2 className="w-4 h-4" /> 100% Free & No Obligation
              </div>
              <div className="flex items-center gap-1.5 text-teal-400 font-medium">
                <CheckCircle2 className="w-4 h-4" /> Synced to GHL CRM
              </div>
            </div>
          </div>

          {/* GoHighLevel Direct Embedded Calendar Widget */}
          <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/90 min-h-[720px] shadow-inner relative">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/578oDE8Oxg4EhRCMHp0b"
              allow="payment"
              style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '720px' }}
              scrolling="no"
              id="578oDE8Oxg4EhRCMHp0b_1785959121595"
              title="GoHighLevel Appointment Booking Calendar"
            />
          </div>

          {/* Direct Phone & Brokerage Contact Bar */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#D12027]" />
              <span>Direct Call / Text: <a href={`tel:${BUSINESS_INFO.mobilePhone}`} className="text-white font-bold hover:text-teal-400 transition-colors">{BUSINESS_INFO.mobilePhone}</a></span>
            </div>

            <div className="flex items-center gap-2 text-slate-400">
              <Building className="w-4 h-4 text-teal-400" />
              <span>{BUSINESS_INFO.brokerage} • {BUSINESS_INFO.address}</span>
            </div>

            <a
              href="https://api.leadconnectorhq.com/widget/booking/578oDE8Oxg4EhRCMHp0b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-teal-400 hover:text-teal-300 font-semibold transition-colors"
            >
              <span>Open in full window</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};



