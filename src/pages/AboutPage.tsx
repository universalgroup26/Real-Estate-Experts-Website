import React from 'react';
import { motion } from 'motion/react';
import { ABOUT_JOY_DATA, BUSINESS_INFO } from '../data/content';
import { Award, Building, MapPin, Phone, Mail, Globe, CheckCircle2, ShieldCheck, HeartHandshake, Languages, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      
      {/* Page Hero Header */}
      <div className="relative bg-gradient-to-b from-[#0B192C] via-slate-900 to-slate-900 pt-12 pb-20 border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-400/10 text-teal-300 border border-teal-400/20 uppercase tracking-wider">
              Licensed NYC Real Estate Professional
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              About Joy Chowdhury
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Licensed Real Estate Salesperson affiliated with Keller Williams Realty Landmark II, dedicated to providing transparent, professional NYC landlord representation and rental coordination.
            </p>
            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 transition-all shadow-lg cursor-pointer"
              >
                Book Direct Consultation
              </button>
              <button
                onClick={() => onNavigate('submit-vacancy')}
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#D12027] hover:bg-[#b51b21] transition-all shadow-lg cursor-pointer"
              >
                Submit Property Vacancy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Profile Card & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Profile Avatar Box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-[#D12027] via-teal-500 to-teal-300 p-1 mx-auto">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-3xl font-serif font-bold text-white">
                  JC
                </div>
              </div>

              <div className="text-center space-y-1">
                <h2 className="text-2xl font-serif font-bold text-white">{BUSINESS_INFO.agentName}</h2>
                <div className="text-xs font-semibold text-teal-400">{BUSINESS_INFO.title}</div>
                <div className="text-xs text-slate-400">{BUSINESS_INFO.brokerage}</div>
              </div>

              <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Mobile Phone:</span>
                  <strong className="text-white">{BUSINESS_INFO.mobilePhone}</strong>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Office Phone:</span>
                  <strong className="text-white">347-846-1200</strong>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Email:</span>
                  <strong className="text-white text-[11px]">{BUSINESS_INFO.email}</strong>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Languages:</span>
                  <strong className="text-teal-400">English, Bengali (বাংলা)</strong>
                </div>
              </div>

              <div className="text-[10px] text-slate-500 text-center font-sans border-t border-slate-900 pt-3">
                {BUSINESS_INFO.kwIndependentDisclaimer}
              </div>
            </div>
          </motion.div>

          {/* Detailed Biography & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Professional Background</span>
              <h2 className="text-3xl font-serif font-bold text-white">
                Dedicated NYC Rental & Vacancy Partner
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {ABOUT_JOY_DATA.bio}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-base font-serif font-bold text-white">Core Commitments to Property Owners</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {ABOUT_JOY_DATA.philosophyPoints.map((pt, idx) => (
                  <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Language & Cultural Callout */}
            <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl flex items-center gap-4 text-xs">
              <Languages className="w-8 h-8 text-teal-400 flex-shrink-0" />
              <div className="space-y-1">
                <strong className="text-white block font-serif">Bengali Language Consultations Available (বাংলায় সেবা)</strong>
                <p className="text-slate-400 text-[11px]">
                  Assisting NYC landlords, property owners, and community members in both English and Bengali with full confidentiality.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Office Location & Brokerage Compliance Section */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D12027]">
                <Building className="w-4 h-4" /> Brokerage Affiliation
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">
                Keller Williams Realty Landmark II
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Keller Williams Realty Landmark II is located in Jackson Heights, NY, serving property owners and tenants across Queens, Brooklyn, Manhattan, the Bronx, and Staten Island.
              </p>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D12027]" />
                  <span><strong>Address:</strong> {BUSINESS_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-teal-400" />
                  <span><strong>Web Domain:</strong> {BUSINESS_INFO.website}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-xs space-y-3">
              <div className="font-serif font-bold text-white text-sm border-b border-slate-800 pb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-400" /> Professional Fair Housing Notice
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                {BUSINESS_INFO.complianceDisclaimer}
              </p>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
