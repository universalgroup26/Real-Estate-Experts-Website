import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2, DollarSign, Download, ArrowRight, FileText, HelpCircle, Building, AlertCircle, ExternalLink } from 'lucide-react';
import { SECTION8_INFO, BUSINESS_INFO } from '../data/content';

interface Section8GuidePageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
  onRequestGuide: () => void;
}

export const Section8GuidePage: React.FC<Section8GuidePageProps> = ({ onNavigate, onOpenBooking, onRequestGuide }) => {
  const section8Faqs = [
    {
      q: 'What is the difference between NYCHA Section 8, HPD Section 8, and NYS HCR?',
      a: 'All three administer federal Housing Choice Vouchers in NYC. NYCHA is the largest provider serving all five boroughs, HPD focuses on subsidized and affordable developments, while NYS HCR handles state-administered vouchers. Joy Chowdhury manages landlord paperwork across all three agencies.'
    },
    {
      q: 'How does NYCHA calculate rent reasonableness for Section 8 apartments?',
      a: 'NYCHA compares your proposed rent against unassisted market-rate apartments in the same zip code, accounting for building age, unit size, amenities, and included utilities.'
    },
    {
      q: 'How long does it take to get NYCHA Section 8 lease approval and direct deposit setup?',
      a: 'With properly completed paperwork (Landlord Ownership Verification, W-9, Lease, Lead-Paint Certification), NYCHA typical turnarounds range from 2 to 4 weeks, including HQS inspection scheduling.'
    },
    {
      q: 'What happens during a Section 8 Housing Quality Standards (HQS) inspection?',
      a: 'An HQS inspector verifies life safety compliance: working utilities, secure windows, no chipping paint (pre-1978), operative smoke/CO alarms, and functional appliances.'
    }
  ];

  return (
    <div className="bg-[#050C16] text-slate-100 min-h-screen font-sans">
      
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': section8Faqs.map(faq => ({
              '@type': 'Question',
              'name': faq.q,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.a
              }
            }))
          })
        }}
      />

      {/* Hero Banner Section */}
      <div className="relative bg-gradient-to-b from-[#0B192C] via-[#081322] to-[#050C16] pt-12 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">Home</button>
            <span>/</span>
            <button onClick={() => onNavigate('education')} className="hover:text-white transition-colors cursor-pointer">Education</button>
            <span>/</span>
            <span className="text-[#D12027] font-semibold">Section 8 Housing Voucher Guide</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#D12027]/10 text-[#D12027] border border-[#D12027]/20 uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" /> NYCHA, HPD & HCR Housing Choice Vouchers
              </div>

              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                Section 8 Landlord Guide: NYCHA & HPD Voucher Placement
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                A detailed landlord resource for leasing apartments to <strong>Section 8 Housing Choice Voucher holders in New York City</strong>. Learn payment standards, HQS inspection readiness, direct deposit onboarding, and fair housing compliance.
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('submit-vacancy')}
                  className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#D12027] hover:bg-[#b51b21] transition-all shadow-lg cursor-pointer flex items-center gap-2"
                >
                  Submit Unit for Section 8 Placement
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onRequestGuide}
                  className="px-6 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-[#00D2B4] hover:bg-[#14E5C7] transition-all shadow-lg cursor-pointer flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Landlord Section 8 PDF
                </button>
              </div>
            </div>

            {/* Program Agencies Card */}
            <div className="lg:col-span-4 bg-[#091424] border border-slate-800 p-6 rounded-3xl space-y-4 shadow-xl">
              <h3 className="text-sm font-serif font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-3 flex items-center justify-between">
                <span>NYC Section 8 Authorities</span>
                <span className="text-[10px] bg-red-500/20 text-red-300 px-2 py-0.5 rounded font-mono">HUD Approved</span>
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#050C16] border border-slate-800 space-y-1">
                  <strong className="text-white block">NYCHA Section 8</strong>
                  <p className="text-slate-400 text-[11px]">New York City Housing Authority - Owner Portal & Direct Deposit.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#050C16] border border-slate-800 space-y-1">
                  <strong className="text-white block">HPD Section 8</strong>
                  <p className="text-slate-400 text-[11px]">Housing Preservation & Development - Enhanced Voucher Zip Codes.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#050C16] border border-slate-800 space-y-1">
                  <strong className="text-white block">NYS HCR Section 8</strong>
                  <p className="text-slate-400 text-[11px]">Homes & Community Renewal - Statewide housing voucher system.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Main Section 8 Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Key Section 8 Benefits */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-[#091424] border border-slate-800 p-6 rounded-2xl space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-[#D12027]/10 text-[#D12027] border border-[#D12027]/20 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="text-lg font-serif font-bold text-white">Guaranteed Government Housing Subsidy</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Section 8 pays 60% to 100% of the monthly rent directly from the housing authority into your bank account on the first of every month.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-[#091424] border border-slate-800 p-6 rounded-2xl space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-[#00D2B4]/10 text-[#00D2B4] border border-[#00D2B4]/20 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="text-lg font-serif font-bold text-white">Long-Term Tenant Stability</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Section 8 voucher holders remain in apartments significantly longer than market-rate tenants, maintaining low turnover costs for landlords.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-[#091424] border border-slate-800 p-6 rounded-2xl space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-[#D12027]/10 text-[#D12027] border border-[#D12027]/20 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="text-lg font-serif font-bold text-white">Annual Rent Increase Adjustments</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Landlords can request annual rent adjustments based on updated HUD payment standards and local market area conditions.
            </p>
          </motion.div>
        </section>

        {/* Section 8 Inspection Guidelines */}
        <section className="bg-[#091424] border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00D2B4]">HQS Pre-Inspection</span>
            <h2 className="text-3xl font-serif font-bold text-white">Section 8 Housing Quality Standards (HQS)</h2>
            <p className="text-sm text-slate-300 font-sans leading-relaxed max-w-3xl">
              Housing Quality Standards (HQS) are federal HUD requirements ensuring all Section 8 housing units are safe, decent, and sanitary. Joy Chowdhury conducts a complimentary pre-inspection walkthrough before scheduling NYCHA inspectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="bg-[#050C16] border border-slate-800 p-4 rounded-xl space-y-1">
              <strong className="text-white block">XRF Lead Paint Certification</strong>
              <p className="text-slate-400">Pre-1978 buildings require certified lead paint inspection records if children under 6 reside.</p>
            </div>
            <div className="bg-[#050C16] border border-slate-800 p-4 rounded-xl space-y-1">
              <strong className="text-white block">Electrical & Fixture Safety</strong>
              <p className="text-slate-400">All electrical outlets must have cover plates and GFCI protection near sinks and water sources.</p>
            </div>
            <div className="bg-[#050C16] border border-slate-800 p-4 rounded-xl space-y-1">
              <strong className="text-white block">Window & Egress Security</strong>
              <p className="text-slate-400">All windows must open easily, stay open independently, and lock securely.</p>
            </div>
          </div>
        </section>

        {/* Section 8 FAQs */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-serif font-bold text-white">Section 8 Landlord FAQs</h2>
            <p className="text-xs text-slate-300">Common questions regarding NYCHA and HPD voucher processing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section8Faqs.map((faq, i) => (
              <div key={i} className="bg-[#091424] border border-slate-800 p-6 rounded-2xl space-y-2">
                <h3 className="text-base font-serif font-bold text-white flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-[#D12027] flex-shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-[#091424] border border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-3xl font-serif font-bold text-white">Ready to Fill Your Vacancy with Section 8?</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Contact Joy Chowdhury today for complete Section 8 tenant matching and NYCHA/HPD package management.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('submit-vacancy')}
              className="px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#D12027] hover:bg-[#b51b21] transition-all shadow-xl cursor-pointer"
            >
              Submit Unit Vacancy
            </button>
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-xl text-sm font-bold text-slate-900 bg-[#00D2B4] hover:bg-[#14E5C7] cursor-pointer"
            >
              Schedule Consultation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
