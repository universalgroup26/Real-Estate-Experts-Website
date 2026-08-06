import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/content';
import { ChevronDown, HelpCircle, PhoneCall, FileText, MessageCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../data/content';
import { staggerContainer, staggerCard, fadeUp, scaleUp, textReveal, viewport } from '../utils/animations';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-[#050C16] text-white border-b border-slate-800 relative overflow-hidden">
      {/* BG glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(ellipse, rgba(45,212,191,0.08) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center space-y-4 mb-14"
        >
          <motion.div variants={scaleUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-teal-500/10 text-teal-300 border border-teal-500/20 uppercase tracking-widest"
          >
            <HelpCircle className="w-3.5 h-3.5" /> Clear Compliant Answers
          </motion.div>
          <motion.h2 variants={textReveal}
            className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight"
          >
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">
              Questions
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-slate-400 font-normal max-w-2xl mx-auto">
            Essential facts for NYC landlords, property managers, and owners exploring rental assistance opportunities.
          </motion.p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="space-y-3"
        >
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                variants={staggerCard}
                className="bg-[#0d2137] border border-slate-700/50 rounded-2xl overflow-hidden shadow-lg"
                style={{
                  boxShadow: isOpen ? '0 0 0 1px rgba(45,212,191,0.2), 0 4px 24px rgba(45,212,191,0.06)' : undefined,
                }}
              >
                {/* Question row */}
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 sm:px-6 py-5 flex items-center justify-between gap-4 hover:bg-slate-700/20 transition-colors cursor-pointer focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-teal-500/20 border border-teal-500/30 text-teal-300'
                        : 'bg-slate-800 border border-slate-700 text-slate-500'
                    }`}>
                      Q{item.id}
                    </span>
                    <span className={`text-base font-serif font-bold sm:text-lg transition-colors ${
                      isOpen ? 'text-teal-200' : 'text-white'
                    }`}>
                      {item.question}
                    </span>
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen ? 'bg-teal-500/20 text-teal-400' : 'bg-slate-800 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-0">
                        <div className="pl-10">
                          <div className="h-px w-full bg-gradient-to-r from-teal-500/20 to-transparent mb-4" />
                          <p className="text-sm text-slate-400 leading-relaxed">{item.answer}</p>
                          {item.learnMore && (
                            <button
                              onClick={onOpenBooking}
                              className="mt-3 flex items-center gap-1.5 text-xs font-bold text-teal-400 hover:text-teal-300 transition-colors"
                            >
                              <FileText className="w-3.5 h-3.5" /> {item.learnMore}
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          <motion.div
            whileHover={{ y: -3, boxShadow: '0 12px 40px rgba(45,212,191,0.12)' }}
            className="bg-[#0d2137] border border-teal-500/20 rounded-2xl p-6 flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/25 flex items-center justify-center flex-shrink-0">
              <PhoneCall className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">Still have questions?</p>
              <p className="text-xs text-slate-400 mt-0.5 mb-3">Call or text Joy directly for a quick answer.</p>
              <a href={`tel:${BUSINESS_INFO.mobilePhone}`}
                className="text-sm font-bold text-teal-300 hover:text-teal-200 transition-colors"
              >
                {BUSINESS_INFO.mobilePhone}
              </a>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -3, boxShadow: '0 12px 40px rgba(45,212,191,0.10)' }}
            className="bg-[#0d2137] border border-teal-500/15 rounded-2xl p-6 flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-[#D12027]/10 border border-[#D12027]/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-[#D12027]" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">Book a Free Consultation</p>
              <p className="text-xs text-slate-400 mt-0.5 mb-3">30-minute 1-on-1 with Joy. No obligation.</p>
              <button
                onClick={onOpenBooking}
                className="text-sm font-bold text-[#D12027] hover:opacity-80 transition-opacity"
              >
                Schedule Now →
              </button>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
