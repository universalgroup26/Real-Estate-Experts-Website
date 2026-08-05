import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import { Check, ArrowRight, Building, FileText, CheckSquare, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface HowItWorksProps {
  onOpenSubmitForm: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenSubmitForm }) => {
  const getStepIcon = (stepNum: number) => {
    switch (stepNum) {
      case 1:
        return <Building className="w-5 h-5 text-white" />;
      case 2:
        return <FileText className="w-5 h-5 text-white" />;
      case 3:
        return <CheckSquare className="w-5 h-5 text-white" />;
      case 4:
        return <ShieldCheck className="w-5 h-5 text-white" />;
      default:
        return <Check className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-[#0B192C] text-white border-b border-slate-800 relative overflow-hidden">
      
      {/* Background Subtle Lines */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-400/10 text-teal-300 border border-teal-400/20 uppercase tracking-wider">
            Clear 4-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white">
            From Vacancy to Next Steps
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            A transparent, organized process designed to respect owner autonomy, legal fair-housing guidelines, and program compliance at every stage.
          </p>
        </motion.div>

        {/* 4 Steps Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative flex flex-col justify-between bg-slate-900/90 border border-slate-800 rounded-2xl p-6 hover:border-teal-500/50 transition-all duration-300 shadow-xl group"
            >
              
              {/* Connecting Line for Large Screens */}
              {idx < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 right-0 transform translate-x-1/2 w-8 h-0.5 bg-slate-700 z-0" />
              )}

              <div className="space-y-4 relative z-10">
                
                {/* Step Badge & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    {getStepIcon(step.stepNumber)}
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-teal-400 bg-teal-950/80 px-2.5 py-1 rounded-full border border-teal-800">
                    Step 0{step.stepNumber}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-serif font-bold text-white group-hover:text-teal-300 transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              {/* Step Footer */}
              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span>Stage 0{step.stepNumber} of 04</span>
                <span className="text-teal-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Read more <ArrowRight className="w-3 h-3" />
                </span>
              </div>

            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-12 text-center space-y-3">
          <button
            onClick={onOpenSubmitForm}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#D12027] hover:bg-[#b51b21] transition-all shadow-xl hover:shadow-[#D12027]/25 active:scale-98 cursor-pointer"
          >
            Tell Us About Your Available Unit
            <ArrowRight className="w-4 h-4" />
          </button>
          <div className="text-xs text-slate-400 font-medium">
            No obligation required. Free initial property assessment.
          </div>
        </div>

      </div>
    </section>
  );
};
