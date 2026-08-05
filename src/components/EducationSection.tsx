import React from 'react';
import { BookOpen, ShieldCheck, CheckCircle, AlertCircle, FileText, ArrowRight, Info } from 'lucide-react';

interface EducationSectionProps {
  onRequestGuide: () => void;
  onOpenBooking: () => void;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ onRequestGuide, onOpenBooking }) => {
  return (
    <section id="education" className="py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/20 uppercase tracking-wider">
              Program Clarity & Transparency
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
              Understand the Process Before You Decide
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              CityFHEPS and Section 8 (Housing Choice Voucher) are NYC rental-assistance programs designed to help eligible participants secure stable housing. Under these programs:
            </p>

            <div className="space-y-3 font-sans text-sm text-slate-200">
              <div className="flex items-start gap-3 bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/80">
                <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Direct Agency Payment Portion:</strong>
                  An approved portion of the monthly rent may be paid directly to the landlord by the administering agency (such as NYC HRA/DSS or NYCHA).
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/80">
                <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Tenant Contribution Portion:</strong>
                  A tenant contribution may apply based on income, household composition, and program calculation rules.
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/80">
                <Info className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Current Official Guidelines:</strong>
                  Rent amounts, utility allowances, tenant eligibility, unit inspections, documentation, rent reasonableness, payment amounts, and final approvals are strictly subject to current rules from NYC HRA/DSS, NYCHA, HPD, or HUD.
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onRequestGuide}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 transition-all shadow-lg active:scale-98 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                Request the Current Landlord Guide
              </button>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all cursor-pointer"
              >
                Book 1-on-1 Consultation
              </button>
            </div>

          </div>

          {/* Right Informational Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-slate-800 to-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-700/80 shadow-2xl space-y-6">
              
              <div className="flex items-center gap-3 border-b border-slate-700 pb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-white">Official Landlord Guide Overview</h3>
                  <p className="text-xs text-slate-400">Educational reference for NYC property owners</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>Comprehensive breakdown of CityFHEPS & Section 8 landlord packets.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>Walkthrough inspection criteria and common apartment checklist items.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>Fair Housing & Source of Income protections compliance tips.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>No payment standards published without real-time official verification.</span>
                </div>
              </div>

              <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                <strong className="text-slate-200 block mb-1">Important Legal Note:</strong>
                Real Estate Experts and Keller Williams Realty Landmark II are not government agencies. Information provided is for educational purposes only.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
