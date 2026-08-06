import React from 'react';
import { Phone, Mail, Globe, MapPin, Building, ShieldCheck, ExternalLink, Star, Award, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data/content';
import { staggerContainer, staggerCard, fadeUp, slideLeft, slideRight, scaleUp, textReveal, viewport, pulseGlow, floatAnimation } from '../utils/animations';

interface AboutJoyProps {
  onOpenBooking: () => void;
  onOpenSubmitForm: () => void;
}

const HIGHLIGHTS = [
  { label: 'All 5 NYC Boroughs', icon: MapPin,     color: 'text-teal-400', bg: 'bg-teal-500/10 border-teal-500/20' },
  { label: 'KW Licensed Agent',  icon: Award,      color: 'text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/20' },
  { label: 'CityFHEPS Certified', icon: ShieldCheck, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  { label: 'Section 8 Expert',   icon: Building,   color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
];

export const AboutJoy: React.FC<AboutJoyProps> = ({ onOpenBooking, onOpenSubmitForm }) => {
  return (
    <section id="about-joy" className="py-16 sm:py-24 bg-[#0B192C] text-white border-b border-slate-800 relative overflow-hidden">
      {/* BG glows */}
      <motion.div animate={pulseGlow} className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.07) 0%, transparent 65%)' }} />
      <motion.div animate={{ ...pulseGlow, transition: { ...pulseGlow.transition, delay: 1.2 } }}
        className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(209,32,39,0.06) 0%, transparent 65%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

          {/* LEFT: Profile Card */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="lg:col-span-5"
          >
            <motion.div
              whileHover={{ y: -6, boxShadow: '0 30px 80px rgba(45,212,191,0.12)' }}
              className="bg-gradient-to-br from-slate-900 via-[#0B192C] to-[#050C16] text-white rounded-3xl p-7 sm:p-9 border border-slate-700/60 shadow-2xl relative overflow-hidden"
            >
              {/* Animated glow inside card */}
              <motion.div animate={pulseGlow}
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.12), transparent 70%)' }}
              />

              {/* KW Badge */}
              <div className="absolute top-5 right-5 bg-[#D12027] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-lg shadow-lg">
                Keller Williams
              </div>

              {/* Avatar */}
              <div className="flex flex-col items-center text-center space-y-5 pt-3 relative z-10">
                <motion.div
                  animate={floatAnimation}
                  className="relative"
                >
                  <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-teal-400 via-slate-700 to-[#D12027] p-[3px] shadow-2xl">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-[#0B192C] flex items-center justify-center font-serif text-3xl font-bold text-white">
                      JC
                    </div>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.2, 1] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                    className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full border-2 border-slate-900"
                  />
                </motion.div>

                <div>
                  <h3 className="text-2xl font-serif font-bold text-white">{BUSINESS_INFO.agentName}</h3>
                  <p className="text-teal-400 text-sm font-medium mt-1">{BUSINESS_INFO.title}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{BUSINESS_INFO.brokerage}</p>
                </div>

                {/* 5 stars */}
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-yellow-400 text-xs font-bold ml-1">5.0</span>
                </div>

                {/* Quote */}
                <blockquote className="text-xs text-slate-400 italic leading-relaxed max-w-xs border-l-2 border-teal-500/40 pl-3 text-left">
                  “I walk every NYC landlord through the CityFHEPS and Section 8 process step‑by‑step — from vacancy intake to program approval and direct-deposit setup.”
                </blockquote>

                {/* Contact row */}
                <div className="w-full grid grid-cols-1 gap-2">
                  <a href={`tel:${BUSINESS_INFO.mobilePhone}`}
                    className="flex items-center gap-2 bg-slate-800/60 hover:bg-teal-500/10 border border-slate-700/60 hover:border-teal-500/30 rounded-xl px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-teal-300 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-teal-400" />
                    {BUSINESS_INFO.mobilePhone}
                  </a>
                  <a href={`mailto:${BUSINESS_INFO.email}`}
                    className="flex items-center gap-2 bg-slate-800/60 hover:bg-teal-500/10 border border-slate-700/60 hover:border-teal-500/30 rounded-xl px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-teal-300 transition-all"
                  >
                    <Mail className="w-3.5 h-3.5 text-teal-400" />
                    {BUSINESS_INFO.email}
                  </a>
                  <div className="flex items-center gap-2 bg-slate-800/60 border border-slate-700/60 rounded-xl px-4 py-2.5 text-xs font-medium text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-[#D12027]" />
                    {BUSINESS_INFO.address}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Info */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="lg:col-span-7 space-y-8"
          >
            {/* Badge + Heading */}
            <div className="space-y-4">
              <motion.div variants={scaleUp}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-teal-500/10 text-teal-300 border border-teal-500/20 uppercase tracking-widest"
              >
                <Sparkles className="w-3.5 h-3.5" /> About Joy Chowdhury
              </motion.div>
              <motion.h2 variants={textReveal}
                className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight"
              >
                Your Dedicated{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">
                  NYC Rental Specialist
                </span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-base text-slate-400 leading-relaxed">
                Joy Chowdhury is a licensed NYC real estate professional at Keller Williams Realty Landmark II, specializing in helping property owners navigate CityFHEPS, Section 8, and HRA rental assistance programs. With deep borough knowledge and hands-on coordination experience, Joy guides landlords from initial vacancy intake through program approval, paperwork, inspections, and direct-deposit setup.
              </motion.p>
            </div>

            {/* Highlight badges */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="grid grid-cols-2 gap-3"
            >
              {HIGHLIGHTS.map(({ label, icon: Icon, color, bg }) => (
                <motion.div
                  key={label}
                  variants={staggerCard}
                  whileHover={{ x: 3 }}
                  className={`flex items-center gap-3 ${bg} border rounded-xl px-4 py-3 transition-all`}
                >
                  <Icon className={`w-4 h-4 ${color} flex-shrink-0`} />
                  <span className="text-sm font-bold text-white">{label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Brokerage disclaimer */}
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
              className="text-[11px] text-slate-600 leading-relaxed border-l-2 border-slate-700 pl-3"
            >
              {BUSINESS_INFO.complianceDisclaimer}
            </motion.p>

            {/* CTA row */}
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
              className="flex flex-col sm:flex-row gap-3"
            >
              <motion.button
                onClick={onOpenBooking}
                variants={staggerCard}
                whileHover={{ scale: 1.03, boxShadow: '0 0 28px rgba(45,212,191,0.35)' }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 shadow-lg transition-colors"
              >
                Book a Free Consultation
              </motion.button>
              <motion.button
                onClick={onOpenSubmitForm}
                variants={staggerCard}
                whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(209,32,39,0.35)' }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 py-3.5 rounded-xl text-sm font-bold text-white bg-[#D12027] hover:bg-[#b51b21] shadow-lg transition-colors"
              >
                Submit Your Vacancy
              </motion.button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
