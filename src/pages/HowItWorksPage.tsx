import React, { useState } from 'react';
import { HOW_IT_WORKS_STEPS, BUSINESS_INFO } from '../data/content';
import { ArrowRight, CheckCircle2, Clock, FileCheck, ShieldAlert, Building, Phone, Calendar, Download } from 'lucide-react';

interface HowItWorksPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
  onRequestGuide: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate, onOpenBooking, onRequestGuide }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      
      {/* Page Hero Header */}
      <div className="relative bg-gradient-to-b from-[#0B192C] via-slate-900 to-slate-900 pt-12 pb-20 border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-400/10 text-teal-300 border border-teal-400/20 uppercase tracking-wider">
              Step-By-Step Process
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              How Our Landlord Placement Process Works
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              A clear, transparent 4-step framework designed to make filling your vacant NYC rental smooth, compliant, and stress-free.
            </p>
            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('submit-vacancy')}
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#D12027] hover:bg-[#b51b21] transition-all shadow-lg cursor-pointer"
              >
                Start Step 1: Submit Vacancy
              </button>
              <button
                onClick={onRequestGuide}
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 transition-all shadow-lg cursor-pointer flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> Download Process PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Interactive Step Timeline Breakdown */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-serif font-bold text-white">The 4-Step Landlord Journey</h2>
            <p className="text-xs text-slate-300">Click any step to inspect details, paperwork needs, and expected timelines.</p>
          </div>

          {/* Steps Navigation Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStep(step.stepNumber)}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer space-y-2 ${
                  activeStep === step.stepNumber
                    ? 'bg-slate-950 border-teal-400 ring-2 ring-teal-400/20 shadow-xl'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold ${
                    activeStep === step.stepNumber ? 'bg-teal-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {step.stepNumber}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">{step.timeline}</span>
                </div>
                <h3 className="font-serif font-bold text-white text-base">{step.title}</h3>
              </button>
            ))}
          </div>

          {/* Active Step Detailed Display Card */}
          {(() => {
            const current = HOW_IT_WORKS_STEPS.find(s => s.stepNumber === activeStep)!;
            return (
              <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6 shadow-2xl">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                      Step {current.stepNumber} Breakdown
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      {current.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-xs font-medium text-slate-300">
                    <Clock className="w-4 h-4 text-teal-400" />
                    <span>Estimated Duration: <strong className="text-white">{current.timeline}</strong></span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <p className="text-sm text-slate-200 leading-relaxed font-sans">
                      {current.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Actions Handled:</h4>
                      <ul className="space-y-2 text-xs text-slate-300">
                        {current.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                            <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 text-xs">
                    <div className="flex items-center gap-2 border-b border-slate-800 pb-3 font-serif font-bold text-white text-sm">
                      <FileCheck className="w-4 h-4 text-[#D12027]" />
                      <span>Requirements & Paperwork</span>
                    </div>

                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      Completing this step ensures compliance with NYC housing regulations and pre-qualifies potential voucher paperwork before scheduling inspections.
                    </p>

                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                      <span className="text-[10px] uppercase font-bold text-teal-400">Next Action Step:</span>
                      <button
                        onClick={() => {
                          if (current.stepNumber === 1) onNavigate('submit-vacancy');
                          else onOpenBooking();
                        }}
                        className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        {current.stepNumber === 1 ? 'Submit Property Vacancy Now' : 'Schedule Coordination Call'}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            );
          })()}
        </div>

        {/* NYC Inspection Walkthrough Guide */}
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D12027]">
              Inspection Readiness
            </span>
            <h2 className="text-3xl font-serif font-bold text-white">
              Preparing Your NYC Unit for CityFHEPS & HPD Inspection
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Passing the initial physical inspection on the first attempt prevents paperwork delays. Here are the key checklist items required for NYC HPD / NYCHA safety clearance:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="font-bold text-white text-sm">Smoke & CO Detectors</div>
              <p className="text-slate-400 text-[11px]">Installed and operational in every bedroom and within 15 feet of sleeping areas.</p>
            </div>
            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="font-bold text-white text-sm">Window Guards</div>
              <p className="text-slate-400 text-[11px]">Installed according to NYC Health Code if children under 10 reside or upon request.</p>
            </div>
            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="font-bold text-white text-sm">Lead Paint Clearance</div>
              <p className="text-slate-400 text-[11px]">No peeling or flaking paint on walls, windowsills, or moldings (Local Law 1 compliance).</p>
            </div>
            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="font-bold text-white text-sm">Working Heating & Plumbing</div>
              <p className="text-slate-400 text-[11px]">Hot/cold water pressure tested, no active leaks under sinks, radiator/heat functional.</p>
            </div>
            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="font-bold text-white text-sm">Self-Closing Doors</div>
              <p className="text-slate-400 text-[11px]">Entrance doors and fire safety doors equipped with functional self-closing hinges.</p>
            </div>
            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="font-bold text-white text-sm">Electrical Outlets & Covers</div>
              <p className="text-slate-400 text-[11px]">All outlet faceplates secure; GFI outlets near kitchen and bathroom water sources.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
