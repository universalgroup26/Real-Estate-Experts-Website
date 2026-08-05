import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DollarSign, ShieldCheck, CheckCircle2, Calculator, ArrowRight, Download, HelpCircle, FileText } from 'lucide-react';
import { CITYFHEPS_INFO, BUSINESS_INFO } from '../data/content';

interface IncentivesGuidePageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
  onRequestGuide: () => void;
}

export const IncentivesGuidePage: React.FC<IncentivesGuidePageProps> = ({ onNavigate, onOpenBooking, onRequestGuide }) => {
  const [bedroomCount, setBedroomCount] = useState<number>(2);
  const [monthlyRent, setMonthlyRent] = useState<number>(2700);

  // Interactive HRA Incentive Calculation
  const annualRent = monthlyRent * 12;
  const estimatedSignOnBonus = Math.round(annualRent * 0.15); // 15% CityFHEPS signing bonus
  const brokerFeeCoverage = Math.round(annualRent * 0.15); // 15% broker fee paid by HRA
  const unitRepairFund = 1000; // HRA unit repair fund
  const totalFinancialValue = estimatedSignOnBonus + brokerFeeCoverage + unitRepairFund;

  return (
    <div className="bg-[#050C16] text-slate-100 min-h-screen font-sans">
      
      {/* Hero Banner Section */}
      <div className="relative bg-gradient-to-b from-[#0B192C] via-[#081322] to-[#050C16] pt-12 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">Home</button>
            <span>/</span>
            <button onClick={() => onNavigate('education')} className="hover:text-white transition-colors cursor-pointer">Education</button>
            <span>/</span>
            <span className="text-[#00D2B4] font-semibold">NYC Landlord Financial Incentives & Bonuses</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#00D2B4]/10 text-[#00D2B4] border border-[#00D2B4]/20 uppercase tracking-wider">
                <DollarSign className="w-3.5 h-3.5" /> Official HRA & NYC Landlord Cash Bonuses
              </div>

              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                NYC Landlord Financial Incentives & HRA Bonus Guide
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                Discover the cash bonuses, sign-on incentives, broker fee reimbursements, and repair funds offered by NYC HRA to landlords participating in the CityFHEPS and voucher housing programs.
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('submit-vacancy')}
                  className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#D12027] hover:bg-[#b51b21] transition-all shadow-lg cursor-pointer flex items-center gap-2"
                >
                  Submit Vacancy to Claim Bonuses
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onRequestGuide}
                  className="px-6 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-[#00D2B4] hover:bg-[#14E5C7] transition-all shadow-lg cursor-pointer flex items-center gap-2"
                >
                  <Download className="w-4 h-4" /> Download Bonus Guide PDF
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#091424] border border-slate-800 p-6 rounded-3xl space-y-4 shadow-xl">
              <h3 className="text-sm font-serif font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-3 flex items-center justify-between">
                <span>Incentive Summary</span>
                <span className="text-[10px] bg-teal-500/20 text-[#00D2B4] px-2 py-0.5 rounded font-mono">2026 Active</span>
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between p-3 rounded-xl bg-[#050C16] border border-slate-800">
                  <span className="text-slate-400">CityFHEPS Signing Bonus</span>
                  <strong className="text-[#00D2B4]">Up to 15% Annual Rent</strong>
                </div>
                <div className="flex justify-between p-3 rounded-xl bg-[#050C16] border border-slate-800">
                  <span className="text-slate-400">Unit Repair Fund</span>
                  <strong className="text-white">Up to $1,000 / Unit</strong>
                </div>
                <div className="flex justify-between p-3 rounded-xl bg-[#050C16] border border-slate-800">
                  <span className="text-slate-400">Broker Fee Coverage</span>
                  <strong className="text-white">100% Paid by HRA (15%)</strong>
                </div>
                <div className="flex justify-between p-3 rounded-xl bg-[#050C16] border border-slate-800">
                  <span className="text-slate-400">Security Deposit Voucher</span>
                  <strong className="text-[#00D2B4]">1 Full Month Rent</strong>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Interactive Incentive Estimator Calculator */}
        <section className="bg-[#091424] border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00D2B4]">
              <Calculator className="w-4 h-4" /> Interactive Calculator
            </div>
            <h2 className="text-3xl font-serif font-bold text-white">Estimate Your HRA Landlord Bonus</h2>
            <p className="text-sm text-slate-300 font-sans">
              Enter your target apartment rent to calculate the total estimated financial incentives, broker fee coverage, and repair funds available through HRA CityFHEPS.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-6 bg-[#050C16] p-6 rounded-2xl border border-slate-800">
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Apartment Bedroom Size
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      onClick={() => {
                        setBedroomCount(num);
                        const rates: Record<number, number> = { 1: 2289, 2: 2603, 3: 3230, 4: 3432 };
                        setMonthlyRent(rates[num] || 2603);
                      }}
                      className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        bedroomCount === num
                          ? 'bg-[#00D2B4] text-slate-950 shadow-md'
                          : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {num} BR
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-bold text-slate-300 uppercase tracking-wider">
                    Target Monthly Rent
                  </label>
                  <span className="text-lg font-bold text-[#00D2B4] font-serif">${monthlyRent.toLocaleString()} / mo</span>
                </div>
                <input
                  type="range"
                  min="1500"
                  max="4500"
                  step="50"
                  value={monthlyRent}
                  onChange={(e) => setMonthlyRent(Number(e.target.value))}
                  className="w-full accent-[#00D2B4] bg-slate-800 rounded-lg cursor-pointer h-2"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>$1,500</span>
                  <span>$3,000</span>
                  <span>$4,500</span>
                </div>
              </div>

            </div>

            {/* Calculated Results Box */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#091424] to-[#050C16] border border-[#00D2B4]/40 p-6 rounded-2xl space-y-4 shadow-xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#00D2B4] block">
                Estimated HRA Benefit Package
              </span>

              <div className="text-4xl font-serif font-bold text-white tracking-tight">
                ${totalFinancialValue.toLocaleString()} <span className="text-xs font-sans text-slate-400 font-normal">Total Estimated Value</span>
              </div>

              <div className="space-y-2 text-xs border-t border-slate-800 pt-4">
                <div className="flex justify-between text-slate-300">
                  <span>Estimated HRA Sign-on Bonus (15%):</span>
                  <strong className="text-[#00D2B4]">${estimatedSignOnBonus.toLocaleString()}</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>HRA Broker Fee Coverage (15%):</span>
                  <strong className="text-white">${brokerFeeCoverage.toLocaleString()}</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Unit Repair Reimbursement Fund:</span>
                  <strong className="text-white">${unitRepairFund.toLocaleString()}</strong>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('submit-vacancy')}
                  className="w-full py-3 rounded-xl text-xs font-bold text-slate-950 bg-[#00D2B4] hover:bg-[#14E5C7] transition-all cursor-pointer"
                >
                  Submit Unit to Claim Bonus Eligibility
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* Incentive Details Cards */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00D2B4]">Program Breakdown</span>
            <h2 className="text-3xl font-serif font-bold text-white">NYC Landlord Bonus Incentive Types</h2>
            <p className="text-xs text-slate-300">All incentive programs available through HRA and CityFHEPS.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="bg-[#091424] border border-slate-800 p-6 rounded-2xl space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00D2B4]/10 text-[#00D2B4] flex items-center justify-center font-bold">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white">15% CityFHEPS Signing Incentive Bonus</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                HRA provides a lump-sum signing bonus equal to 15% of the annual rent to landlords who sign a multi-year lease with an eligible CityFHEPS voucher holder.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-[#091424] border border-slate-800 p-6 rounded-2xl space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#D12027]/10 text-[#D12027] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white">Up to $1,000 Unit Repair Fund</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Landlords can request up to $1,000 per unit in repair reimbursements to bring apartments up to HRA pre-inspection standard prior to lease signing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="bg-[#091424] border border-slate-800 p-6 rounded-2xl space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00D2B4]/10 text-[#00D2B4] flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white">100% Broker Fee Paid by NYC HRA</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Under CityFHEPS rules, the NYC Human Resources Administration pays 100% of the licensed broker fee (up to 15% of annual rent), so landlords pay $0 in real estate commission.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-[#091424] border border-slate-800 p-6 rounded-2xl space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#D12027]/10 text-[#D12027] flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white">Security Deposit Voucher Guarantee</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                HRA issues a full 1-month security deposit voucher or direct cash payment to the landlord upon lease execution, securing the unit against property damages.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-[#091424] border border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-3xl font-serif font-bold text-white">Ready to Claim Your HRA Landlord Cash Bonuses?</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Let Joy Chowdhury manage your unit intake, tenant matching, and HRA bonus disbursement paperwork from start to finish.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('submit-vacancy')}
              className="px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#D12027] hover:bg-[#b51b21] transition-all shadow-xl cursor-pointer"
            >
              Submit Property Vacancy
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
