import React from 'react';
import { SERVICES } from '../data/content';
import { Home, CalendarClock, ShieldCheck, CheckCircle2, FileText, Sliders, Building, Handshake, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { staggerContainer, staggerCard, fadeUp, scaleUp, textReveal, viewport } from '../utils/animations';

interface ServicesProps {
  onOpenSubmitForm: () => void;
  onOpenBooking: () => void;
}

const ICON_CONFIG: Record<string, { comp: React.FC<{className?:string}>, color: string, bg: string }> = {
  Home:          { comp: ({ className }) => <Home className={className} />,          color: 'text-teal-400', bg: 'bg-teal-500/10 border-teal-500/20' },
  CalendarClock: { comp: ({ className }) => <CalendarClock className={className} />, color: 'text-[#D12027]', bg: 'bg-[#D12027]/10 border-[#D12027]/20' },
  ShieldCheck:   { comp: ({ className }) => <ShieldCheck className={className} />,   color: 'text-teal-400', bg: 'bg-teal-500/10 border-teal-500/20' },
  CheckCircle2:  { comp: ({ className }) => <CheckCircle2 className={className} />,  color: 'text-[#D12027]', bg: 'bg-[#D12027]/10 border-[#D12027]/20' },
  FileText:      { comp: ({ className }) => <FileText className={className} />,      color: 'text-teal-400', bg: 'bg-teal-500/10 border-teal-500/20' },
  Sliders:       { comp: ({ className }) => <Sliders className={className} />,       color: 'text-[#D12027]', bg: 'bg-[#D12027]/10 border-[#D12027]/20' },
  Building:      { comp: ({ className }) => <Building className={className} />,      color: 'text-teal-400', bg: 'bg-teal-500/10 border-teal-500/20' },
  Handshake:     { comp: ({ className }) => <Handshake className={className} />,     color: 'text-[#D12027]', bg: 'bg-[#D12027]/10 border-[#D12027]/20' },
};

export const Services: React.FC<ServicesProps> = ({ onOpenSubmitForm, onOpenBooking }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#0B192C] text-white border-b border-slate-800 relative overflow-hidden">
      {/* BG glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.06) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(209,32,39,0.05) 0%, transparent 65%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-700/50"
        >
          <div className="space-y-3">
            <motion.div variants={scaleUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-teal-500/10 text-teal-300 border border-teal-500/20 uppercase tracking-widest"
            >
              Comprehensive NYC Real Estate Services
            </motion.div>
            <motion.h2 variants={textReveal}
              className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight"
            >
              Tailored Landlord &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">
                Property Solutions
              </span>
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="text-sm text-slate-400 max-w-md">
            Whether managing a single apartment or a multi-family portfolio across NYC, we provide specialized coordination for every stage.
          </motion.p>
        </motion.div>

        {/* 8 Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {SERVICES.map((service, index) => {
            const cfg = ICON_CONFIG[service.iconName || 'Home'] || ICON_CONFIG.Home;
            return (
              <motion.div
                key={service.id}
                variants={staggerCard}
                whileHover={{
                  y: -5,
                  boxShadow: index % 2 === 0
                    ? '0 20px 50px rgba(45,212,191,0.10)'
                    : '0 20px 50px rgba(209,32,39,0.08)',
                  borderColor: index % 2 === 0 ? 'rgba(45,212,191,0.3)' : 'rgba(209,32,39,0.25)',
                }}
                className="bg-[#050C16] border border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between group cursor-pointer transition-colors duration-300"
              >
                <div className="space-y-3">
                  <div className={`w-10 h-10 rounded-xl ${cfg.bg} border flex items-center justify-center`}>
                    <cfg.comp className={`w-5 h-5 ${cfg.color}`} />
                  </div>
                  <h3 className="text-sm font-serif font-bold text-white group-hover:text-teal-200 transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <button
                  onClick={index % 3 === 0 ? onOpenBooking : onOpenSubmitForm}
                  className={`mt-4 flex items-center gap-1 text-xs font-bold ${cfg.color} hover:opacity-75 transition-opacity`}
                >
                  Inquire service <ArrowUpRight className="w-3 h-3" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Strip */}
        <motion.div
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-12 bg-gradient-to-r from-[#0d2137] to-[#091424] border border-teal-500/15 rounded-2xl px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-lg font-serif font-bold text-white">Ready to fill your vacant unit?</h3>
            <p className="text-sm text-slate-400 mt-1">Submit your vacancy today — Joy reviews every submission personally.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <motion.button
              onClick={onOpenSubmitForm}
              whileHover={{ scale: 1.04, boxShadow: '0 0 28px rgba(209,32,39,0.4)' }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#D12027] shadow-lg transition-colors"
            >
              Submit Vacancy
            </motion.button>
            <motion.button
              onClick={onOpenBooking}
              whileHover={{ scale: 1.04, boxShadow: '0 0 22px rgba(45,212,191,0.3)' }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-xl text-sm font-bold text-teal-300 bg-teal-500/10 border border-teal-500/25 shadow-lg transition-colors"
            >
              Book Consultation
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
