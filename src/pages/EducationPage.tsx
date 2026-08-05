import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CITYFHEPS_INFO, SECTION8_INFO } from '../data/content';
import { ShieldCheck, FileText, CheckCircle2, DollarSign, ExternalLink, HelpCircle, Download, BookOpen, AlertCircle, Building, Users } from 'lucide-react';

interface EducationPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
  onRequestGuide: () => void;
}

export const EducationPage: React.FC<EducationPageProps> = ({ onNavigate, onOpenBooking, onRequestGuide }) => {
  const [activeTab, setActiveTab] = useState<'cityfheps' | 'section8' | 'incentives'>('cityfheps');

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      
      {/* Page Hero Header */}
      <div className="relative bg-gradient-to-b from-[#0B192C] via-slate-900 to-slate-900 pt-12 pb-20 border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-400/10 text-teal-300 border border-teal-400/20 uppercase tracking-wider">
              Educational Resource Hub
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              CityFHEPS & Section 8 Housing Guide
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Clear, transparent information for NYC landlords regarding rental assistance vouchers, HRA paperwork standards, landlord bonuses, and fair housing laws.
            </p>
            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={onRequestGuide}
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 transition-all shadow-lg cursor-pointer flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> Get Free Landlord PDF Guide
              </button>
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 transition-all border border-slate-700 cursor-pointer"
              >
                Discuss Unit Voucher Potential
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-800 overflow-x-auto gap-4">
          <button
            onClick={() => setActiveTab('cityfheps')}
            className={`pb-4 px-2 text-sm font-serif font-bold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'cityfheps'
                ? 'border-teal-400 text-teal-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            CityFHEPS Rental Voucher System
          </button>
          <button
            onClick={() => setActiveTab('section8')}
            className={`pb-4 px-2 text-sm font-serif font-bold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'section8'
                ? 'border-teal-400 text-teal-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Section 8 (NYCHA / HPD / Housing Choice)
          </button>
          <button
            onClick={() => setActiveTab('incentives')}
            className={`pb-4 px-2 text-sm font-serif font-bold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'incentives'
                ? 'border-teal-400 text-teal-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Landlord Incentives & Bonuses (HRA/HPD)
          </button>
        </div>

        {/* Tab 1: CityFHEPS Deep Dive */}
        {activeTab === 'cityfheps' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-400">What is CityFHEPS?</span>
                  <h2 className="text-3xl font-serif font-bold text-white">NYC CityFHEPS Rental Assistance</h2>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {CITYFHEPS_INFO.description}
                  </p>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
                  <h3 className="text-base font-serif font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-400" /> Key Features & Landlord Protections
                  </h3>
                  <ul className="space-y-3 text-xs text-slate-300">
                    {CITYFHEPS_INFO.keyPoints.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-teal-400 mt-1.5 flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-6">
                <h3 className="text-base font-serif font-bold text-white border-b border-slate-800 pb-3 flex items-center justify-between">
                  <span>CityFHEPS Payment Standards</span>
                  <span className="text-[10px] bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded font-mono">NYC HRA Standard</span>
                </h3>

                <p className="text-xs text-slate-400"> Maximum allowable rents subject to utility deductions and HRA rent reasonableness checks.</p>

                <div className="space-y-2 text-xs">
                  {CITYFHEPS_INFO.maxRentEstimate.map((item, i) => (
                    <div key={i} className="flex justify-between items-center bg-slate-900 p-3 rounded-xl border border-slate-800">
                      <span className="text-slate-300 font-medium">{item.size}</span>
                      <strong className="text-teal-400 text-sm">{item.rent}</strong>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('submit-vacancy')}
                    className="w-full py-3 rounded-xl text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors cursor-pointer"
                  >
                    Check Your Unit's Rent Potential
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 2: Section 8 Deep Dive */}
        {activeTab === 'section8' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D12027]">Federal & Local Voucher</span>
                  <h2 className="text-3xl font-serif font-bold text-white">Section 8 Housing Choice Voucher Program</h2>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {SECTION8_INFO.description}
                  </p>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
                  <h3 className="text-base font-serif font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#D12027]" /> Program Essentials & Security
                  </h3>
                  <ul className="space-y-3 text-xs text-slate-300">
                    {SECTION8_INFO.keyPoints.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#D12027] mt-1.5 flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-6">
                <h3 className="text-base font-serif font-bold text-white border-b border-slate-800 pb-3">
                  NYC Housing Authorities
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  In New York City, Section 8 is administered by NYCHA (New York City Housing Authority), HPD (Department of Housing Preservation and Development), and NYS Homes and Community Renewal (HCR).
                </p>

                <div className="space-y-3 text-xs">
                  <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1">
                    <div className="font-bold text-white">NYCHA Section 8</div>
                    <p className="text-slate-400 text-[11px]">Direct portal submission, landlord direct deposit, mandatory inspection clearance.</p>
                  </div>
                  <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1">
                    <div className="font-bold text-white">HPD Section 8</div>
                    <p className="text-slate-400 text-[11px]">Specialized housing programs, enhanced payment standards in designated high-opportunity zip codes.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 3: Landlord Incentives */}
        {activeTab === 'incentives' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="max-w-3xl space-y-3">
              <h2 className="text-3xl font-serif font-bold text-white">NYC Landlord Financial Incentives</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                New York City programs often provide financial incentives to property owners who lease units through specialized housing programs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-lg">
                  $
                </div>
                <h3 className="text-lg font-serif font-bold text-white">Landlord Signing Bonus</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Qualified CityFHEPS emergency placement vouchers may include one-time cash sign-on bonuses paid directly to property owners upon successful lease execution.
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-lg">
                  🛡️
                </div>
                <h3 className="text-lg font-serif font-bold text-white">Unit Repair Assurance Fund</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  NYC HRA provides up to $3,000+ in security vouchers and access to repair coverage funds for added landlord peace of mind.
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-lg">
                  ⚡
                </div>
                <h3 className="text-lg font-serif font-bold text-white">Expedited Inspection Processing</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Priority scheduling for pre-screened vacancy units to minimize turn-around time between lease sign and Move-In Date.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Fair Housing Notice Box */}
        <div className="bg-slate-950 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
            <AlertCircle className="w-5 h-5 text-teal-400" />
            <h3 className="text-lg font-serif font-bold text-white">NYC Fair Housing Source of Income Notice</h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            Under New York City, New York State, and Federal Fair Housing Laws, it is illegal for housing providers to discriminate against prospective tenants based on lawful source of income, including CityFHEPS, Section 8, HASA, FHEPS, or SSI vouchers. All tenant applicants must be evaluated using lawful, non-discriminatory criteria.
          </p>
        </div>

      </div>

    </div>
  );
};
