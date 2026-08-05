import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2, DollarSign, Download, ArrowRight, FileText, HelpCircle, Building, Clock, AlertTriangle, ExternalLink } from 'lucide-react';
import { CITYFHEPS_INFO, BUSINESS_INFO } from '../data/content';
import { LandlordMindmap } from '../components/LandlordMindmap';

interface CityFhepsGuidePageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
  onRequestGuide: () => void;
}

export const CityFhepsGuidePage: React.FC<CityFhepsGuidePageProps> = ({ onNavigate, onOpenBooking, onRequestGuide }) => {
  const [selectedBedroom, setSelectedBedroom] = useState<string>('2 Bedroom');

  const cityfhepsFaqs = [
    {
      q: 'Does CityFHEPS pay the broker fee and security deposit for landlords?',
      a: 'Yes! Under HRA CityFHEPS guidelines, HRA covers 100% of the licensed broker fee (up to 15% of the annual rent) and provides a full 1-month security deposit voucher or check directly to the landlord or broker.'
    },
    {
      q: 'How are CityFHEPS monthly rent payments disbursed to landlords?',
      a: 'Payments are disbursed directly into the landlord’s bank account via electronic direct deposit from the NYC Human Resources Administration (HRA) on or around the 1st of every month.'
    },
    {
      q: 'Are landlords eligible for sign-on bonuses when renting to CityFHEPS voucher holders?',
      a: 'Yes! HRA frequently offers prompt lease-up sign-on bonuses (such as 15% of annual rent or lump-sum bonuses up to $4,300 depending on active mayoral program incentives) plus up to $1,000 in unit repair fund reimbursements.'
    },
    {
      q: 'What happens if a tenant loses their job or income while on CityFHEPS?',
      a: 'Because CityFHEPS is guaranteed by the City of New York, HRA adjusts the tenant portion if their income drops, ensuring the landlord receives full rent directly from HRA without interruption.'
    }
  ];

  return (
    <div className="bg-[#050C16] text-slate-100 min-h-screen font-sans">
      
      {/* Schema.org FAQ & Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': cityfhepsFaqs.map(faq => ({
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
            <span className="text-[#00D2B4] font-semibold">CityFHEPS Landlord Guide</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#00D2B4]/10 text-[#00D2B4] border border-[#00D2B4]/20 uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" /> Official NYC HRA Voucher Program Guide
              </div>

              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                NYC CityFHEPS Landlord Guide & 2026 Payment Standards
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                A complete operational guide for NYC landlords leasing vacant apartments through the <strong>CityFHEPS rental assistance program</strong>. Learn maximum allowable rent rates, broker fee coverage, HRA signing bonuses, and fast-track lease approval steps with Joy Chowdhury (Keller Williams Realty Landmark II).
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('submit-vacancy')}
                  className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#D12027] hover:bg-[#b51b21] transition-all shadow-lg cursor-pointer flex items-center gap-2"
                >
                  Submit Vacant Unit for CityFHEPS
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onRequestGuide}
                  className="px-6 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-[#00D2B4] hover:bg-[#14E5C7] transition-all shadow-lg cursor-pointer flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download CityFHEPS Landlord PDF
                </button>
              </div>
            </div>

            {/* Quick Stats Box */}
            <div className="lg:col-span-4 bg-[#091424] border border-slate-800 p-6 rounded-3xl space-y-4 shadow-xl">
              <h3 className="text-sm font-serif font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-3 flex items-center justify-between">
                <span>CityFHEPS Key Highlights</span>
                <span className="text-[10px] bg-teal-500/20 text-[#00D2B4] px-2 py-0.5 rounded font-mono">HRA 2026</span>
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#050C16] border border-slate-800">
                  <span className="text-slate-400">Guaranteed Payment</span>
                  <strong className="text-[#00D2B4]">Direct Deposit from HRA</strong>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#050C16] border border-slate-800">
                  <span className="text-slate-400">Broker Fee Coverage</span>
                  <strong className="text-white">100% Paid by City (15%)</strong>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#050C16] border border-slate-800">
                  <span className="text-slate-400">Security Deposit</span>
                  <strong className="text-white">1 Month Full Voucher</strong>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#050C16] border border-slate-800">
                  <span className="text-slate-400">Sign-on Incentive</span>
                  <strong className="text-[#00D2B4]">15% Bonus + $1K Repairs</strong>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Section 1: 2026 Maximum Rent Standards Chart */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00D2B4]">2026 NYC HRA Rate Chart</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">CityFHEPS Maximum Rent Standards</h2>
            <p className="text-sm text-slate-300 font-sans leading-relaxed">
              Maximum gross allowable monthly rent standards set by the NYC Human Resources Administration (HRA). Rents are subject to utility allowance subtractions depending on heating and electricity coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CITYFHEPS_INFO.maxRentEstimate.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#091424] border border-slate-800 hover:border-[#00D2B4]/50 rounded-2xl p-6 space-y-4 transition-all shadow-lg hover:shadow-2xl"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-base font-serif font-bold text-white">{item.size}</span>
                  <span className="text-xs font-mono text-[#00D2B4] bg-[#00D2B4]/10 px-2.5 py-1 rounded-full border border-[#00D2B4]/20">
                    Max Rate
                  </span>
                </div>

                <div className="text-3xl font-bold text-white font-serif tracking-tight">
                  {item.rent} <span className="text-xs font-normal text-slate-400">/ month</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Ideal for vacant apartments in Queens, Brooklyn, Bronx, Manhattan, and Staten Island matching HRA space and bedroom requirements.
                </p>

                <button
                  onClick={() => onNavigate('submit-vacancy')}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-900 bg-[#00D2B4] hover:bg-[#14E5C7] transition-colors cursor-pointer"
                >
                  Submit Unit Matching {item.size}
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 2: Interactive Mindmap & Program Architecture */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <LandlordMindmap
            onOpenSubmitForm={() => onNavigate('submit-vacancy')}
            onOpenBooking={onOpenBooking}
            onNavigate={onNavigate}
          />
        </motion.section>

        {/* Section 3: HRA Pre-Inspection Readiness Checklist */}
        <section className="bg-[#091424] border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D12027]">Inspection Readiness</span>
            <h2 className="text-3xl font-serif font-bold text-white">CityFHEPS Apartment Inspection Checklist</h2>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              Before HRA approves the CityFHEPS lease package, a city inspector will perform a physical walkthrough. Ensure your property satisfies these standard criteria to pass on the first attempt:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Working Smoke & Carbon Monoxide Detectors', desc: 'Installed on every floor and inside/outside sleeping areas.' },
              { title: 'Self-Closing Entrance Doors', desc: 'Main apartment entrance door must self-close and latch properly.' },
              { title: 'Window Guards Installed', desc: 'Required in all windows if children under 10 reside or upon request.' },
              { title: 'No Peeling or Chipping Paint', desc: 'Zero loose paint, especially in pre-1978 buildings (XRF lead test ready).' },
              { title: 'Operational Plumbing & Heating', desc: 'Hot water minimum 120°F and adequate heating capability in winter.' },
              { title: 'Double-Cylinder Deadbolts Removed', desc: 'Locks requiring a key from inside are prohibited per NYC fire code.' },
            ].map((check, i) => (
              <div key={i} className="bg-[#050C16] border border-slate-800 p-5 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2B4] flex-shrink-0" />
                  <span>{check.title}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{check.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Step-by-Step Approval Workflow */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00D2B4]">Process Overview</span>
            <h2 className="text-3xl font-serif font-bold text-white">CityFHEPS Lease Approval Timeline</h2>
            <p className="text-xs text-slate-300">How Joy Chowdhury manages your file from unit intake to HRA payment receipt.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Unit Intake & Pricing', desc: 'Verify rent rate against 2026 HRA standards and pre-screen property condition.' },
              { step: '2', title: 'Tenant Matching & Verification', desc: 'Match with qualified CityFHEPS holder and verify active HRA shopping letter.' },
              { step: '3', title: 'HRA Package Submission', desc: 'Submit complete package including W-9, deed/tax bill, lease, and landlord form.' },
              { step: '4', title: 'Inspection & Direct Deposit', desc: 'Pass physical inspection, receive HRA approval, sign lease, and activate direct deposit.' },
            ].map((st, i) => (
              <div key={i} className="bg-[#091424] border border-slate-800 p-6 rounded-2xl space-y-3 relative">
                <div className="w-8 h-8 rounded-xl bg-[#00D2B4] text-slate-950 font-bold flex items-center justify-center text-sm font-serif">
                  {st.step}
                </div>
                <h3 className="font-serif font-bold text-white text-base">{st.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: CityFHEPS Landlord FAQs */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-serif font-bold text-white">CityFHEPS Landlord FAQs</h2>
            <p className="text-xs text-slate-300">Frequently asked questions about NYC HRA rental assistance vouchers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cityfhepsFaqs.map((faq, i) => (
              <div key={i} className="bg-[#091424] border border-slate-800 p-6 rounded-2xl space-y-2">
                <h3 className="text-base font-serif font-bold text-white flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-[#00D2B4] flex-shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Card */}
        <div className="bg-gradient-to-r from-[#091424] via-slate-900 to-[#091424] border border-[#00D2B4]/40 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl font-serif font-bold text-white">Have a Vacant Unit Ready for CityFHEPS?</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Get your apartment pre-screened and connected with vetted CityFHEPS voucher holders today. Joy Chowdhury provides end-to-end HRA paperwork management.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('submit-vacancy')}
              className="px-8 py-4 rounded-xl text-sm font-bold text-slate-950 bg-[#00D2B4] hover:bg-[#14E5C7] transition-all shadow-xl cursor-pointer"
            >
              Submit Vacancy Form
            </button>
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-xl text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 cursor-pointer"
            >
              Schedule 1-on-1 Consultation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
