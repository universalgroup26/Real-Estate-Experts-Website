import React from 'react';
import { BENEFIT_CARDS } from '../data/content';
import { Building2, Users, FileCheck, ClipboardCheck, DollarSign, ArrowRight, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';
import { staggerContainer, staggerCard, fadeUp, scaleUp, textReveal, viewport } from '../utils/animations';

interface BenefitsProps {
  onOpenSubmitForm: () => void;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Building2: ({ className }) => <Building2 className={className} />,
  Users: ({ className }) => <Users className={className} />,
  FileCheck: ({ className }) => <FileCheck className={className} />,
  ClipboardCheck: ({ className }) => <ClipboardCheck className={className} />,
  DollarSign: ({ className }) => <DollarSign className={className} />,
};

const ICON_COLORS = ['text-teal-400', 'text-[#D12027]', 'text-teal-400', 'text-[#D12027]', 'text-teal-400'];
const ICON_BG    = ['bg-teal-500/10 border-teal-500/20', 'bg-[#D12027]/10 border-[#D12027]/20', 'bg-teal-500/10 border-teal-500/20', 'bg-[#D12027]/10 border-[#D12027]/20', 'bg-teal-500/10 border-teal-500/20'];

export const Benefits: React.FC<BenefitsProps> = ({ onOpenSubmitForm }) => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-[#050C16] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Subtle teal glow top-right */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.07) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(209,32,39,0.06) 0%, transparent 65%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center max-w-3xl mx-auto space-y-4 mb-14"
        >
          <motion.div variants={scaleUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-teal-500/10 text-teal-300 border border-teal-500/20 uppercase tracking-widest"
          >
            Landlord Advantages
          </motion.div>
          <motion.h2 variants={textReveal}
            className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight"
          >
            A Simpler Way to Fill Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">
              NYC Rental
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Professional representation designed to save time, streamline landlord paperwork, and clarify
            program-supported rental opportunities across New York City.
          </motion.p>
        </motion.div>

        {/* Benefit Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {BENEFIT_CARDS.map((card, index) => {
            const IconComp = ICON_MAP[card.iconName || 'Building2'] || ICON_MAP.Building2;
            const iconColor = ICON_COLORS[index % ICON_COLORS.length];
            const iconBg = ICON_BG[index % ICON_BG.length];
            return (
              <motion.div
                key={card.id}
                variants={staggerCard}
                whileHover={{
                  y: -6,
                  boxShadow: index % 2 === 0
                    ? '0 20px 50px rgba(45,212,191,0.12)'
                    : '0 20px 50px rgba(209,32,39,0.10)',
                  borderColor: index % 2 === 0 ? 'rgba(45,212,191,0.35)' : 'rgba(209,32,39,0.3)',
                }}
                className={`bg-[#0d2137] rounded-2xl p-6 border border-slate-700/50 shadow-lg flex flex-col justify-between group transition-colors duration-300 ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl ${iconBg} border flex items-center justify-center`}>
                      <IconComp className={`w-6 h-6 ${iconColor}`} />
                    </div>
                    <span className="text-2xl font-bold text-slate-700/50 font-mono">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-serif font-bold text-white mb-1.5 group-hover:text-teal-200 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-700/40">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-600 font-medium uppercase tracking-wider">NYC Rental Support</span>
                    <button
                      onClick={onOpenSubmitForm}
                      className={`flex items-center gap-1 text-xs font-bold ${iconColor} hover:opacity-80 transition-opacity group`}
                    >
                      Learn detail
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Compliance Notice */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-10 flex items-start gap-3 bg-amber-500/8 border border-amber-500/15 rounded-2xl px-5 py-4"
        >
          <ShieldAlert className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-200/80 leading-relaxed">
            <strong className="text-amber-300">Compliant Program Guidance:</strong>{' '}
            All transactions remain subject to owner approval, fair-housing compliance, rent reasonableness, utility allowances,
            and official program rules. We do not promise guaranteed rent, guaranteed approval, guaranteed inspection results,
            zero risk, or a specific placement timeline.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-10 text-center"
        >
          <motion.button
            onClick={onOpenSubmitForm}
            whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(209,32,39,0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-sm font-bold text-white bg-[#D12027] hover:bg-[#b51b21] shadow-xl transition-colors"
          >
            Submit Your Vacancy Now
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};
