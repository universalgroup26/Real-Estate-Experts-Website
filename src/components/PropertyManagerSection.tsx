import React from 'react';
import { Layers, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data/content';

interface PropertyManagerSectionProps {
  onOpenBooking: () => void;
  onOpenSubmitForm: () => void;
}

export const PropertyManagerSection: React.FC<PropertyManagerSectionProps> = ({ onOpenBooking, onOpenSubmitForm }) => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-[#0B192C] to-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      
      {/* Decorative background shape */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#D12027]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-8 sm:p-12 shadow-2xl"
        >
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#D12027] text-white uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" /> Property Manager & Portfolio Solutions
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                Have Multiple Units or an Upcoming Portfolio Vacancy?
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Joy Chowdhury provides one point of contact for reviewing multiple units, organizing availability details, coordinating potential tenant opportunities, and managing next steps.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-slate-200">
                <div className="flex items-center gap-2 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>Single-point coordination for 5+ units</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>Turnover schedule synchronization</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>Brokerage & co-broke collaboration</span>
                </div>
              </div>

            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-center gap-3">
              
              <button
                onClick={onOpenBooking}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 transition-all shadow-xl active:scale-98 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Book a Portfolio Call
              </button>

              <button
                onClick={onOpenSubmitForm}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all cursor-pointer"
              >
                Submit Multiple Units
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.mobilePhone}`}
                className="text-center text-xs text-slate-300 hover:text-white transition-colors pt-1"
              >
                Or Call Direct: <strong className="text-white">{BUSINESS_INFO.mobilePhone}</strong>
              </a>

            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};
