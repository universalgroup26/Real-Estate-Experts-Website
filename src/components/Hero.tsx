import React, { useRef } from 'react';
import { ArrowRight, Phone, CheckCircle2, ShieldCheck, MapPin, Building2, FileText, Star } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { BUSINESS_INFO } from '../data/content';
import {
  staggerContainer,
  staggerCard,
  fadeUp,
  slideLeft,
  slideRight,
  textReveal,
  scaleUp,
  staggerFast,
  staggerBadge,
  viewport,
  floatAnimation,
  pulseGlow,
  EASE_OUT_EXPO,
} from '../utils/animations';

interface HeroProps {
  onOpenSubmitForm: () => void;
  onOpenBooking: () => void;
}

// Floating particle positions (deterministic)
const PARTICLES = [
  { x: '8%',  y: '15%', size: 2,   delay: 0,   dur: 4.5 },
  { x: '22%', y: '70%', size: 1.5, delay: 0.8, dur: 5.2 },
  { x: '55%', y: '12%', size: 3,   delay: 1.5, dur: 3.8 },
  { x: '78%', y: '55%', size: 2,   delay: 0.3, dur: 6.0 },
  { x: '91%', y: '22%', size: 1.5, delay: 2.1, dur: 4.1 },
  { x: '65%', y: '85%', size: 2.5, delay: 1.2, dur: 5.5 },
  { x: '42%', y: '40%', size: 1,   delay: 0.6, dur: 4.8 },
  { x: '15%', y: '90%', size: 2,   delay: 1.8, dur: 3.5 },
];

export const Hero: React.FC<HeroProps> = ({ onOpenSubmitForm, onOpenBooking }) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });

  // Parallax transforms
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const orb1Y = useTransform(scrollYProgress, [0, 1], ['0px', '-80px']);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ['0px', '60px']);
  const orb3Y = useTransform(scrollYProgress, [0, 1], ['0px', '-40px']);
  const textY  = useTransform(scrollYProgress, [0, 1], ['0px', '50px']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const smoothBgY = useSpring(bgY, { stiffness: 60, damping: 20 });
  const smoothTextY = useSpring(textY, { stiffness: 60, damping: 20 });

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative bg-[#0B192C] text-white pt-8 pb-16 lg:pt-16 lg:pb-28 overflow-hidden border-b border-slate-800"
    >
      {/* ── Animated Gradient Orbs (parallax) ── */}
      <motion.div style={{ y: orb1Y }} className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={pulseGlow}
          className="absolute top-[-80px] right-[-60px] w-[520px] h-[520px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.12) 0%, transparent 70%)' }}
        />
      </motion.div>

      <motion.div style={{ y: orb2Y }} className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ ...pulseGlow, transition: { ...pulseGlow.transition, delay: 1 } }}
          className="absolute bottom-[-100px] left-[-80px] w-[480px] h-[480px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(209,32,39,0.10) 0%, transparent 70%)' }}
        />
      </motion.div>

      <motion.div style={{ y: orb3Y }} className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(13,33,55,0.6) 0%, transparent 65%)' }}
        />
      </motion.div>

      {/* ── Floating Particles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-teal-400"
            style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
            animate={{
              y: [0, -14, 0],
              opacity: [0.15, 0.55, 0.15],
            }}
            transition={{
              duration: p.dur,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* ── Grid Lines (subtle depth) ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(45,212,191,1) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Main Content ── */}
      <motion.div
        style={{ y: smoothTextY, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Text Column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6"
          >
            {/* Badge */}
            <motion.div variants={staggerBadge}
              className="inline-flex flex-wrap items-center gap-2 bg-slate-800/90 border border-teal-500/20 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200 shadow-sm"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-teal-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
              <span className="font-semibold text-white">Keller Williams Realty Landmark II</span>
              <span className="text-slate-500">•</span>
              <span className="text-teal-400 font-medium">NYC Rental Assistance Specialist</span>
            </motion.div>

            {/* Headline — stagger word by word */}
            <motion.div variants={fadeUp} className="overflow-hidden">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
                NYC Landlords:{' '}
                <br className="hidden sm:inline" />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-200 to-white"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Have a Vacancy?
                </motion.span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p variants={textReveal}
              className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl"
            >
              Explore CityFHEPS and Section 8 rental opportunities with tenant-matching, paperwork, scheduling, and inspection-process support from an experienced NYC real estate professional.
            </motion.p>

            {/* Feature Pills — stagger grid */}
            <motion.div
              variants={staggerFast}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
            >
              {[
                'Zero-stress document & packet preparation',
                'Inspection walkthrough & scheduling aid',
                'Consistent screening with lawful criteria',
                '1-on-1 landlord guidance by Joy Chowdhury',
              ].map((text, i) => (
                <motion.div
                  key={i}
                  variants={staggerCard}
                  whileHover={{ scale: 1.02, borderColor: 'rgba(45,212,191,0.4)' }}
                  className="flex items-start gap-2 bg-slate-800/50 border border-slate-700/60 p-2.5 rounded-lg text-xs font-medium text-slate-300 cursor-default transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>{text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <motion.button
                onClick={onOpenSubmitForm}
                whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(209,32,39,0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#D12027] transition-all shadow-xl cursor-pointer group"
              >
                <span>Submit Your Vacancy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                href={`tel:${BUSINESS_INFO.mobilePhone}`}
                whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(45,212,191,0.35)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 transition-all shadow-lg cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Speak With Joy</span>
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={staggerFast} className="flex flex-wrap gap-4 pt-2">
              {[
                { icon: Star, label: '5★ Keller Williams Agent' },
                { icon: ShieldCheck, label: 'Licensed NYC Realtor' },
                { icon: MapPin, label: 'Jackson Heights, Queens' },
                { icon: Building2, label: 'All 5 NYC Boroughs' },
              ].map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={i}
                  variants={staggerBadge}
                  className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium"
                >
                  <Icon className="w-3.5 h-3.5 text-teal-500" />
                  <span>{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Stats / Social Proof Column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Main Stat Card */}
            <motion.div
              variants={scaleUp}
              whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(45,212,191,0.15)' }}
              className="relative bg-gradient-to-br from-[#0d2137] to-[#091424] border border-teal-500/20 rounded-2xl p-6 shadow-2xl overflow-hidden"
            >
              <motion.div
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.15), transparent 70%)' }}
                animate={pulseGlow}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-teal-400" />
                  </div>
                  <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest">CityFHEPS 2026</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '$3,900', label: '3-BR Max Rent (CityFHEPS)', highlight: true },
                    { value: '15%', label: 'HRA Sign-On Bonus', highlight: false },
                    { value: '$1,000', label: 'Unit Repair Incentive', highlight: false },
                    { value: '0%', label: 'Broker Fee to Landlord', highlight: false },
                  ].map(({ value, label, highlight }, i) => (
                    <motion.div
                      key={i}
                      variants={staggerCard}
                      className={`p-3 rounded-xl ${
                        highlight
                          ? 'bg-teal-500/15 border border-teal-500/30'
                          : 'bg-slate-800/60 border border-slate-700/50'
                      }`}
                    >
                      <p className={`text-xl font-bold ${
                        highlight ? 'text-teal-300' : 'text-white'
                      }`}>{value}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5 leading-tight">{label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Action Cards */}
            {[
              {
                icon: Building2,
                title: 'Submit Vacant Unit',
                desc: 'Intake form takes ~4 min',
                color: 'from-[#D12027]/20 to-[#D12027]/5',
                border: 'border-[#D12027]/30',
                iconBg: 'bg-[#D12027]/20',
                iconColor: 'text-[#D12027]',
                action: onOpenSubmitForm,
              },
              {
                icon: ShieldCheck,
                title: 'Book a Consultation',
                desc: 'Free 1-on-1 with Joy Chowdhury',
                color: 'from-teal-500/15 to-teal-500/5',
                border: 'border-teal-500/25',
                iconBg: 'bg-teal-500/20',
                iconColor: 'text-teal-400',
                action: onOpenBooking,
              },
            ].map(({ icon: Icon, title, desc, color, border, iconBg, iconColor, action }, i) => (
              <motion.button
                key={i}
                variants={staggerCard}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={action}
                className={`w-full text-left bg-gradient-to-br ${color} ${border} border rounded-xl p-4 cursor-pointer flex items-center gap-3 transition-all`}
              >
                <div className={`w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${iconColor}`} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{title}</p>
                  <p className="text-[11px] text-slate-400">{desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 ml-auto" />
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ opacity }}
      >
        <div className="w-[1px] h-8 bg-gradient-to-b from-teal-400/60 to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-teal-400/60" />
      </motion.div>
    </section>
  );
};
