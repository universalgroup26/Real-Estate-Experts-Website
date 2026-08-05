import React from 'react';
import { ShieldCheck, Award, MapPin, Phone, Home } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-slate-900 border-b border-slate-800 text-slate-200 py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-medium">
          
          <div className="flex items-center gap-2 text-white">
            <Award className="w-4 h-4 text-[#D12027] flex-shrink-0" />
            <span>{BUSINESS_INFO.title}</span>
          </div>

          <div className="hidden md:block text-slate-700">|</div>

          <div className="flex items-center gap-2 text-white">
            <ShieldCheck className="w-4 h-4 text-teal-400 flex-shrink-0" />
            <span>{BUSINESS_INFO.brokerage}</span>
          </div>

          <div className="hidden md:block text-slate-700">|</div>

          <div className="flex items-center gap-2 text-slate-200">
            <MapPin className="w-4 h-4 text-[#D12027] flex-shrink-0" />
            <span>Serving All Five NYC Boroughs</span>
          </div>

          <div className="hidden md:block text-slate-700">|</div>

          <div className="flex items-center gap-2 text-slate-200">
            <Home className="w-4 h-4 text-teal-400 flex-shrink-0" />
            <span>Equal Housing Opportunity</span>
          </div>

          <div className="hidden md:block text-slate-700">|</div>

          <a
            href={`tel:${BUSINESS_INFO.mobilePhone}`}
            className="flex items-center gap-2 text-white font-bold bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D12027]" />
            <span>Call or Text: {BUSINESS_INFO.mobilePhone}</span>
          </a>

        </div>
      </div>
    </section>
  );
};
