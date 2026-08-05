import React from 'react';
import { ArrowRight, Phone, CheckCircle2, ShieldCheck, MapPin, Building2, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface HeroProps {
  onOpenSubmitForm: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSubmitForm, onOpenBooking }) => {
  return (
    <section id="home" className="relative bg-[#0B192C] text-white pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-slate-800">
      {/* Subtle Background Glow Accents */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-[#D12027]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Brokerage & Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 bg-slate-800/90 border border-slate-700/80 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="font-semibold text-white">Keller Williams Realty Landmark II</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 font-normal">NYC Rental Assistance Specialist</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
              NYC Landlords: <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-teal-300">
                Have a Vacancy?
              </span>
            </h1>

            {/* Supporting Message */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Explore CityFHEPS and Section 8 rental opportunities with tenant-matching, paperwork, scheduling, and inspection-process support from an experienced NYC real estate professional.
            </p>

            {/* Quick Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-medium text-slate-300">
              <div className="flex items-start gap-2 bg-slate-800/50 border border-slate-700/60 p-2.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>Zero-stress document & packet preparation</span>
              </div>
              <div className="flex items-start gap-2 bg-slate-800/50 border border-slate-700/60 p-2.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>Inspection walkthrough & scheduling aid</span>
              </div>
              <div className="flex items-start gap-2 bg-slate-800/50 border border-slate-700/60 p-2.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>Consistent screening with lawful criteria</span>
              </div>
              <div className="flex items-start gap-2 bg-slate-800/50 border border-slate-700/60 p-2.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>1-on-1 landlord guidance by Joy Chowdhury</span>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenSubmitForm}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#D12027] hover:bg-[#b51b21] transition-all shadow-xl hover:shadow-[#D12027]/25 active:scale-98 cursor-pointer group"
              >
                <span>Submit Your Vacancy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.mobilePhone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 transition-all shadow-lg active:scale-98 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Speak With Joy ({BUSINESS_INFO.mobilePhone})</span>
              </a>
            </div>

            {/* Supporting Trust Line */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400 font-medium border-t border-slate-800/80 pt-4">
              <MapPin className="w-4 h-4 text-[#D12027] flex-shrink-0" />
              <span>Serving landlords and property managers across all five NYC boroughs (Manhattan, Brooklyn, Queens, Bronx, Staten Island).</span>
            </div>

          </div>

          {/* Right Image Visual Card Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow Frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-teal-500/20 via-[#D12027]/20 to-slate-700/30 blur-xl opacity-75" />

              {/* Card Frame */}
              <div className="relative rounded-2xl bg-slate-900 border border-slate-700/80 overflow-hidden shadow-2xl">
                
                {/* Visual Image */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80"
                    alt="Authentic New York City residential apartment building with high-quality architecture"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Floating Badge on Image */}
                  <div className="absolute top-3 left-3 bg-[#0B192C]/90 backdrop-blur-md border border-slate-700 text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-semibold">
                    <Building2 className="w-3.5 h-3.5 text-teal-400" />
                    <span>NYC Multifamily & Rental Support</span>
                  </div>

                  {/* Agent Card Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md border border-slate-700/90 rounded-xl p-3 flex items-center justify-between gap-3 text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#D12027] flex items-center justify-center font-bold text-white text-sm shadow">
                        JC
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">{BUSINESS_INFO.agentName}</div>
                        <div className="text-[11px] text-slate-300">{BUSINESS_INFO.title}</div>
                        <div className="text-[10px] text-teal-300">{BUSINESS_INFO.brokerage}</div>
                      </div>
                    </div>
                    <button
                      onClick={onOpenBooking}
                      className="px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-teal-400 text-slate-900 hover:bg-teal-300 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Book Call
                    </button>
                  </div>

                </div>

                {/* Card Lower Details */}
                <div className="p-4 space-y-3 bg-slate-900/90 text-xs">
                  <div className="flex items-center justify-between text-slate-300 font-medium">
                    <span className="flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-teal-400" />
                      Landlord Guidance & Consultation
                    </span>
                    <span className="text-teal-400 font-bold">100% Free Initial Review</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-[#D12027] flex-shrink-0" />
                    <span>Fair-Housing Compliant • Licensed Keller Williams Realtor</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
