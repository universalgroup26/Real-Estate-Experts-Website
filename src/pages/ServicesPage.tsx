import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES, BENEFIT_CARDS } from '../data/content';
import { BUSINESS_INFO } from '../data/content';
import { Home, CalendarClock, ShieldCheck, CheckCircle2, FileText, Sliders, Building, Handshake, ArrowRight, Phone, Check, ShieldAlert, FileCheck, Users, ClipboardCheck, DollarSign } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
  onRequestGuide: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenBooking, onRequestGuide }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'vacant' | 'vouchers' | 'portfolio' | 'agents'>('all');

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Home': return <Home className="w-6 h-6 text-teal-600" />;
      case 'CalendarClock': return <CalendarClock className="w-6 h-6 text-[#D12027]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-teal-600" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-[#D12027]" />;
      case 'FileText': return <FileText className="w-6 h-6 text-teal-600" />;
      case 'Sliders': return <Sliders className="w-6 h-6 text-[#D12027]" />;
      case 'Building': return <Building className="w-6 h-6 text-teal-600" />;
      case 'Handshake': return <Handshake className="w-6 h-6 text-[#D12027]" />;
      default: return <Home className="w-6 h-6 text-teal-600" />;
    }
  };

  const filteredServices = SERVICES.filter(service => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'vacant') return service.id === 1 || service.id === 2;
    if (selectedCategory === 'vouchers') return service.id === 3 || service.id === 4 || service.id === 5;
    if (selectedCategory === 'portfolio') return service.id === 7 || service.id === 6;
    if (selectedCategory === 'agents') return service.id === 8;
    return true;
  });

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      
      {/* Page Hero Header */}
      <div className="relative bg-gradient-to-b from-[#0B192C] via-slate-900 to-slate-900 pt-12 pb-20 border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-400/10 text-teal-300 border border-teal-400/20 uppercase tracking-wider">
              Dedicated Real Estate Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              NYC Landlord Services & Support
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Comprehensive coordination for NYC landlords, property managers, and real estate professionals. From active turnover support to CityFHEPS & Section 8 document guidance, we handle every detail with care.
            </p>
            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('submit-vacancy')}
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#D12027] hover:bg-[#b51b21] transition-all shadow-lg cursor-pointer"
              >
                Submit an Available Unit
              </button>
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 transition-all shadow-lg cursor-pointer"
              >
                Book Landlord Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Category Filters */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <h2 className="text-2xl font-serif font-bold text-white">Service Offerings Overview</h2>
              <p className="text-xs text-slate-400">Filter services by your immediate property management or rental need</p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3.5 py-2 rounded-xl transition-all ${
                  selectedCategory === 'all' ? 'bg-teal-400 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                All Services (8)
              </button>
              <button
                onClick={() => setSelectedCategory('vacant')}
                className={`px-3.5 py-2 rounded-xl transition-all ${
                  selectedCategory === 'vacant' ? 'bg-teal-400 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Active Vacancies
              </button>
              <button
                onClick={() => setSelectedCategory('vouchers')}
                className={`px-3.5 py-2 rounded-xl transition-all ${
                  selectedCategory === 'vouchers' ? 'bg-teal-400 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Program Review (CityFHEPS/Section 8)
              </button>
              <button
                onClick={() => setSelectedCategory('portfolio')}
                className={`px-3.5 py-2 rounded-xl transition-all ${
                  selectedCategory === 'portfolio' ? 'bg-teal-400 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Portfolio Managers
              </button>
            </div>
          </div>

          {/* Grid of Detailed Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-teal-500/40 transition-all shadow-xl space-y-4"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
                      {getServiceIcon(service.iconName)}
                    </div>
                    {service.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-800 text-teal-300 border border-slate-700">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-serif font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('submit-vacancy')}
                    className="text-xs font-bold text-teal-400 hover:text-white inline-flex items-center gap-1 cursor-pointer"
                  >
                    Request this service <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Feature Deep-Dive Section 1: Landlord Document & Paperwork Guidance */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/20">
                Detailed Workflow
              </div>

              <h2 className="text-3xl font-serif font-bold text-white">
                Landlord Document & Paperwork Coordination
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Navigating NYC rental assistance paperwork can be time-consuming. We assist landlords with organizing necessary documents and reviewing landlord packages to ensure all forms are completed accurately before agency submission.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
                <div className="flex items-start gap-2 bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <Check className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>Landlord W-9 & Direct Deposit verification support</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <Check className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>Lease agreements & utility disclosures</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <Check className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>NYC HRA / NYCHA packet assembly</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <Check className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>Inspection date scheduling coordination</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onRequestGuide}
                  className="px-5 py-3 rounded-xl text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors cursor-pointer"
                >
                  Download Free Landlord Paperwork Checklist
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-xs space-y-4">
                <div className="font-serif font-bold text-white text-base border-b border-slate-800 pb-2">
                  What Landlords Should Have Ready:
                </div>

                <ul className="space-y-2.5 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-[10px] flex-shrink-0">1</span>
                    <span>Proof of Property Ownership (Deed, Tax Bill, or Management Agreement)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-[10px] flex-shrink-0">2</span>
                    <span>W-9 Tax Form for the legal entity or owner receiving rent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-[10px] flex-shrink-0">3</span>
                    <span>Multiple Building Certificate of Occupancy or HPD Registration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-[10px] flex-shrink-0">4</span>
                    <span>Proposed Lease & Lead Paint Disclosure notice</span>
                  </li>
                </ul>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-[11px] text-slate-400">
                  💡 Joy Chowdhury assists owners in verifying paperwork completeness prior to formal filing.
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Co-Broke & Broker Cooperation Callout */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-serif font-bold text-white">Are You an NYC Broker or Real Estate Agent?</h3>
            <p className="text-xs text-slate-300 max-w-xl">
              We welcome professional cooperation with licensed real estate agents across Manhattan, Brooklyn, Queens, the Bronx, and Staten Island. Let’s collaborate on tenant matches.
            </p>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.mobilePhone}`}
            className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#D12027] hover:bg-[#b51b21] transition-all whitespace-nowrap"
          >
            Call Co-Broke Line: {BUSINESS_INFO.mobilePhone}
          </a>
        </div>

      </div>

    </div>
  );
};
