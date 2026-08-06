import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import {
  Calendar, ShieldCheck, Phone, MapPin, CheckCircle2,
  Clock, Star, Sparkles, ArrowRight, Users, Award, Zap, PartyPopper
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import {
  staggerContainer, staggerCard, fadeUp, slideLeft, slideRight,
  scaleUp, textReveal, viewport, pulseGlow, floatAnimation, EASE_OUT_EXPO,
} from '../utils/animations';

// ─── GHL booking widget ID & URL ─────────────────────────────────────────────
const GHL_WIDGET_ID = '578oDE8Oxg4EhRCMHp0b';
const GHL_BOOKING_URL =
  `https://api.leadconnectorhq.com/widget/booking/${GHL_WIDGET_ID}?timezone=America%2FNew_York`;

// ─── Consultation benefits shown left of the calendar ────────────────────────
const BENEFITS = [
  {
    icon: Clock,
    title: '30-Min Deep Dive',
    desc: 'Covers your vacancy, rent range, tenant type & program fit',
    color: 'text-teal-400',
    bg: 'bg-teal-500/10',
    border: 'border-teal-500/20',
  },
  {
    icon: Zap,
    title: 'Instant GHL Confirmation',
    desc: 'SMS + Email confirmation auto-fires the moment you book',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
  },
  {
    icon: ShieldCheck,
    title: '100% Free — No Obligation',
    desc: 'No fees, no pressure. Joy guides; you decide.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  {
    icon: Users,
    title: 'CityFHEPS & Section 8',
    desc: 'Voucher placement, HRA paperwork & inspection support',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
];

const STATS = [
  { value: '5★', label: 'KW Agent Rating' },
  { value: '100+', label: 'Landlords Helped' },
  { value: '0%', label: 'Broker Fee' },
  { value: '24h', label: 'Avg Response' },
];

// ─── Booking confirmed overlay ────────────────────────────────────────────────
const BookingConfirmed: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      onClick={e => e.stopPropagation()}
      className="bg-gradient-to-br from-[#0d2137] to-[#050C16] border border-teal-500/30 rounded-3xl p-10 max-w-md mx-4 text-center shadow-2xl"
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 10, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center shadow-2xl shadow-teal-500/30"
      >
        <PartyPopper className="w-9 h-9 text-white" />
      </motion.div>
      <h3 className="text-2xl font-serif font-bold text-white mb-2">🎉 Booking Confirmed!
      </h3>
      <p className="text-slate-300 text-sm leading-relaxed mb-2">
        You’re all set! <strong className="text-teal-300">Joy Chowdhury</strong> will meet with you at your selected time.
      </p>
      <p className="text-slate-400 text-xs mb-8">
        Check your email & SMS for the instant GHL confirmation with call details.
      </p>
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-3">
          <p className="text-teal-300 font-bold text-sm">Next Step</p>
          <p className="text-slate-400 text-xs mt-0.5">Check your inbox for the call link</p>
        </div>
        <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-3">
          <p className="text-white font-bold text-sm">Need Help?</p>
          <a href="tel:9175654788" className="text-teal-400 text-xs font-medium">(917) 565-4788</a>
        </div>
      </div>
      <button
        onClick={onClose}
        className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-teal-400 text-slate-900 font-bold text-sm hover:from-teal-400 hover:to-teal-300 transition-all shadow-lg"
      >
        ✓ Got it!
      </button>
    </motion.div>
  </motion.div>
);

// ─── Main component ───────────────────────────────────────────────────────────
export const BookingCalendar: React.FC = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  // Load GHL form_embed.js for iframe auto-resize
  useEffect(() => {
    const id = 'ghl-form-embed-script';
    if (!document.getElementById(id)) {
      const s = document.createElement('script');
      s.id = id;
      s.src = 'https://link.msgsndr.com/js/form_embed.js';
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  // Listen for GHL post-message booking confirmation
  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (!event.origin.includes('leadconnectorhq.com') &&
          !event.origin.includes('msgsndr.com')) return;
      const d = event.data;
      if (
        d?.type === 'booking_confirmed' ||
        d?.action === 'booking_confirmed' ||
        d?.event === 'booking_confirmed' ||
        (typeof d === 'string' && d.includes('booking_confirmed'))
      ) {
        setBookingConfirmed(true);
        // Fire GHL tracking + analytics
        if (typeof window !== 'undefined') {
          (window as any).gtag?.('event', 'schedule', { event_category: 'booking', event_label: 'landlord_consultation' });
          (window as any).fbq?.('track', 'Schedule');
          (window as any).clarity?.('event', 'booking_confirmed');
        }
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  return (
    <>
      <AnimatePresence>
        {bookingConfirmed && <BookingConfirmed onClose={() => setBookingConfirmed(false)} />}
      </AnimatePresence>

      <section
        ref={sectionRef}
        id="booking-calendar"
        className="relative py-20 sm:py-28 bg-[#050C16] text-white overflow-hidden"
      >
        {/* ── Parallax Background Orbs ── */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
          <motion.div animate={pulseGlow}
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.09) 0%, transparent 65%)' }}
          />
          <motion.div animate={{ ...pulseGlow, transition: { ...pulseGlow.transition, delay: 1.5 } }}
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(209,32,39,0.07) 0%, transparent 65%)' }}
          />
          <motion.div animate={{ ...pulseGlow, transition: { ...pulseGlow.transition, delay: 0.8 } }}
            className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.05) 0%, transparent 65%)' }}
          />
        </motion.div>

        {/* ── Subtle Grid ── */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(rgba(45,212,191,1) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,1) 1px, transparent 1px)',
            backgroundSize: '70px 70px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Section Header ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <motion.div variants={scaleUp}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/25 text-xs font-bold text-teal-300 uppercase tracking-widest mb-5"
            >
              <motion.div animate={floatAnimation}>
                <Sparkles className="w-4 h-4" />
              </motion.div>
              GHL Live Calendar — Instant Confirmation
            </motion.div>

            <motion.h2 variants={textReveal}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight mb-4"
            >
              Book Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">
                Free Consultation
              </span>
            </motion.h2>

            <motion.p variants={fadeUp}
              className="text-lg text-slate-400 leading-relaxed"
            >
              Pick a time that works for you. Joy will call you directly — no hold music, no gatekeepers.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              variants={staggerContainer}
              className="flex flex-wrap items-center justify-center gap-6 mt-8"
            >
              {STATS.map(({ value, label }) => (
                <motion.div key={label} variants={staggerCard}
                  className="flex flex-col items-center"
                >
                  <span className="text-2xl font-bold text-white">{value}</span>
                  <span className="text-xs text-slate-500 font-medium mt-0.5">{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Split Layout: Left panel + Right calendar ── */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

            {/* ── LEFT PANEL (2 cols) ── */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="lg:col-span-2 flex flex-col gap-5"
            >
              {/* Joy's Card */}
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(45,212,191,0.12)' }}
                className="bg-gradient-to-br from-[#0d2137] via-[#091424] to-[#050C16] border border-teal-500/20 rounded-2xl p-6 relative overflow-hidden"
              >
                <motion.div animate={pulseGlow}
                  className="absolute -top-10 -right-10 w-28 h-28 rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.2), transparent 70%)' }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-400 to-teal-700 flex items-center justify-center text-xl font-bold text-white shadow-xl">
                        JC
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-400 rounded-full border-2 border-[#0d2137]"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-white text-base">Joy Chowdhury</p>
                      <p className="text-teal-400 text-xs font-medium">NYC Real Estate Specialist</p>
                      <p className="text-slate-500 text-xs">Keller Williams Landmark II</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-4">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-yellow-400 text-xs font-bold ml-1">5.0</span>
                    <span className="text-slate-500 text-xs ml-1">• KW Licensed Agent</span>
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed mb-5">
                    “I walk every NYC landlord through the CityFHEPS & Section 8 process step-by-step — from vacancy intake to direct-deposit approval.”
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    <a href="tel:9175654788"
                      className="flex items-center gap-2 bg-slate-800/60 hover:bg-teal-500/10 border border-slate-700/50 hover:border-teal-500/30 rounded-xl px-3 py-2.5 text-xs font-medium text-slate-300 hover:text-teal-300 transition-all"
                    >
                      <Phone className="w-3.5 h-3.5 text-teal-400" />
                      (917) 565-4788
                    </a>
                    <div className="flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 rounded-xl px-3 py-2.5 text-xs font-medium text-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-[#D12027]" />
                      Jackson Heights
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Benefits List */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="flex flex-col gap-3"
              >
                {BENEFITS.map(({ icon: Icon, title, desc, color, bg, border }) => (
                  <motion.div
                    key={title}
                    variants={staggerCard}
                    whileHover={{ x: 4, borderColor: 'rgba(45,212,191,0.3)' }}
                    className={`flex items-start gap-3 ${bg} ${border} border rounded-xl p-4 transition-all`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${bg}`}>
                      <Icon className={`w-4 h-4 ${color}`} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{title}</p>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Timezone Note */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="flex items-start gap-2 bg-amber-500/8 border border-amber-500/20 rounded-xl px-4 py-3"
              >
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-amber-200/80 leading-relaxed">
                  <strong className="text-amber-300">Timezone:</strong> All times shown in{' '}
                  <strong className="text-amber-300">Eastern Time (ET)</strong>.
                  Joy is available Mon–Sat, 9 AM – 6 PM ET · NYC area.
                </p>
              </motion.div>
            </motion.div>

            {/* ── RIGHT PANEL: GHL Calendar (3 cols) ── */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="lg:col-span-3"
            >
              {/* Outer Glow Frame */}
              <div className="relative">
                {/* Glowing border ring */}
                <motion.div
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -inset-[2px] rounded-3xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(45,212,191,0.6), rgba(209,32,39,0.3), rgba(45,212,191,0.6))',
                  }}
                />

                {/* Calendar Card */}
                <div className="relative bg-[#0B192C] rounded-3xl overflow-hidden shadow-2xl">

                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-[#0d2137] to-[#0B192C] border-b border-slate-700/50 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-teal-400" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Landlord Consultation</p>
                        <p className="text-[11px] text-teal-400 font-medium">Powered by GoHighLevel CRM • 30 min</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-2.5 h-2.5 rounded-full bg-emerald-400"
                      />
                      <span className="text-[11px] text-emerald-400 font-semibold">Live</span>
                    </div>
                  </div>

                  {/* Loading State */}
                  {!iframeLoaded && (
                    <div className="absolute inset-0 z-10 bg-[#0B192C] flex flex-col items-center justify-center gap-4" style={{ top: '64px' }}>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                        className="w-10 h-10 rounded-full border-2 border-slate-700 border-t-teal-400"
                      />
                      <p className="text-slate-400 text-sm">Loading Joy’s calendar…</p>
                    </div>
                  )}

                  {/* GHL Booking iFrame */}
                  <iframe
                    src={GHL_BOOKING_URL}
                    allow="payment"
                    onLoad={() => setIframeLoaded(true)}
                    style={{
                      width: '100%',
                      minHeight: '680px',
                      border: 'none',
                      display: 'block',
                      background: 'transparent',
                      opacity: iframeLoaded ? 1 : 0,
                      transition: 'opacity 0.4s ease',
                    }}
                    title="Book a Landlord Consultation with Joy Chowdhury"
                    loading="lazy"
                  />

                  {/* Card Footer */}
                  <div className="bg-[#050C16] border-t border-slate-800/80 px-6 py-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <ShieldCheck className="w-3.5 h-3.5 text-teal-500" />
                        <span>Secured & synced by <strong className="text-slate-400">GoHighLevel CRM</strong></span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <div className="flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          <span>SMS Confirmation</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Email Confirmation</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          <span>CRM Synced</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Below-calendar micro trust strip */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="mt-4 grid grid-cols-3 gap-3"
              >
                {[
                  { icon: Award, text: 'KW Certified Agent', color: 'text-yellow-400' },
                  { icon: MapPin, text: 'Queens • All 5 Boroughs', color: 'text-[#D12027]' },
                  { icon: Zap, text: 'GHL Instant Sync', color: 'text-teal-400' },
                ].map(({ icon: Icon, text, color }) => (
                  <div key={text} className="flex items-center gap-2 bg-slate-900/60 border border-slate-800/80 rounded-xl px-3 py-2.5">
                    <Icon className={`w-3.5 h-3.5 ${color} flex-shrink-0`} />
                    <span className="text-[10px] text-slate-400 font-medium leading-tight">{text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
