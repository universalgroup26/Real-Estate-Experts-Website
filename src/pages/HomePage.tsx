import React from 'react';
import { motion } from 'motion/react';
import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { Benefits } from '../components/Benefits';
import { HowItWorks } from '../components/HowItWorks';
import { LandlordMindmap } from '../components/LandlordMindmap';
import { Services } from '../components/Services';
import { EducationSection } from '../components/EducationSection';
import { PropertyManagerSection } from '../components/PropertyManagerSection';
import { FaqSection } from '../components/FaqSection';
import { AboutJoy } from '../components/AboutJoy';
import { VacancyForm } from '../components/VacancyForm';
import { BookingCalendar } from '../components/BookingCalendar';
import {
  fadeUp, slideLeft, slideRight, scaleUp, scaleIn,
  staggerContainer, staggerCard, staggerSlow,
  viewport, EASE_OUT_EXPO,
} from '../utils/animations';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenSubmitForm: () => void;
  onOpenBooking: () => void;
  onRequestGuide: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

// Helper: section wrapper with alternating slide direction + divider glow
const AnimSection: React.FC<{
  children: React.ReactNode;
  direction?: 'up' | 'left' | 'right' | 'scale';
  delay?: number;
  className?: string;
}> = ({ children, direction = 'up', delay = 0, className = '' }) => {
  const variantMap = { up: fadeUp, left: slideLeft, right: slideRight, scale: scaleIn };
  return (
    <motion.div
      variants={variantMap[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ delay, ease: EASE_OUT_EXPO }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Glowing divider between major sections
const GlowDivider: React.FC<{ color?: 'teal' | 'red' }> = ({ color = 'teal' }) => (
  <div className="relative h-[1px] overflow-visible">
    <div className={`absolute inset-0 ${
      color === 'teal' ? 'bg-gradient-to-r from-transparent via-teal-500/30 to-transparent'
                       : 'bg-gradient-to-r from-transparent via-[#D12027]/25 to-transparent'
    }`} />
    <motion.div
      className={`absolute left-1/2 -translate-x-1/2 -top-[3px] w-8 h-[7px] rounded-full ${
        color === 'teal' ? 'bg-teal-400' : 'bg-[#D12027]'
      }`}
      animate={{ opacity: [0.4, 1, 0.4], scaleX: [1, 1.4, 1] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
    />
  </div>
);

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenSubmitForm,
  onOpenBooking,
  onRequestGuide,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  return (
    <div className="space-y-0 overflow-x-hidden">

      {/* 1. Hero — full parallax (self-animated) */}
      <Hero
        onOpenSubmitForm={() => onNavigate('submit-vacancy')}
        onOpenBooking={() => onNavigate('contact')}
      />

      <GlowDivider color="teal" />

      {/* 2. Trust Bar — fade up fast */}
      <AnimSection direction="up">
        <TrustBar />
      </AnimSection>

      <GlowDivider color="teal" />

      {/* 3. Benefits — stagger cards from left */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <AnimSection direction="left">
          <Benefits onOpenSubmitForm={() => onNavigate('submit-vacancy')} />
        </AnimSection>
      </motion.div>

      <GlowDivider color="red" />

      {/* 4. Mindmap — scale in from center */}
      <section className="py-12 sm:py-20 bg-[#050C16] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={scaleUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <LandlordMindmap
              onOpenSubmitForm={() => onNavigate('submit-vacancy')}
              onOpenBooking={() => onNavigate('contact')}
              onNavigate={onNavigate}
            />
          </motion.div>
        </div>
      </section>

      <GlowDivider color="teal" />

      {/* 5. How It Works — slide from right */}
      <AnimSection direction="right" delay={0.05}>
        <HowItWorks onOpenSubmitForm={() => onNavigate('how-it-works')} />
      </AnimSection>

      <GlowDivider color="red" />

      {/* 6. Services — slide from left */}
      <AnimSection direction="left" delay={0.05}>
        <Services
          onOpenSubmitForm={() => onNavigate('services')}
          onOpenBooking={() => onNavigate('contact')}
        />
      </AnimSection>

      <GlowDivider color="teal" />

      {/* 7. Education — scale in */}
      <AnimSection direction="scale" delay={0.08}>
        <EducationSection
          onRequestGuide={onRequestGuide}
          onOpenBooking={() => onNavigate('education')}
        />
      </AnimSection>

      <GlowDivider color="red" />

      {/* 8. Property Manager — slide from right */}
      <AnimSection direction="right" delay={0.05}>
        <PropertyManagerSection
          onOpenBooking={() => onNavigate('contact')}
          onOpenSubmitForm={() => onNavigate('submit-vacancy')}
        />
      </AnimSection>

      <GlowDivider color="teal" />

      {/* 9. FAQ — fade up */}
      <AnimSection direction="up" delay={0.05}>
        <FaqSection onOpenBooking={() => onNavigate('faqs')} />
      </AnimSection>

      <GlowDivider color="red" />

      {/* 10. About Joy — slide from left */}
      <AnimSection direction="left" delay={0.05}>
        <AboutJoy
          onOpenBooking={() => onNavigate('about')}
          onOpenSubmitForm={() => onNavigate('submit-vacancy')}
        />
      </AnimSection>

      <GlowDivider color="teal" />

      {/* 11. Vacancy Form — scale in */}
      <AnimSection direction="scale" delay={0.06}>
        <VacancyForm
          onOpenBooking={() => onNavigate('contact')}
          onOpenPrivacy={onOpenPrivacy}
          onOpenTerms={onOpenTerms}
        />
      </AnimSection>

      <GlowDivider color="red" />

      {/* 12. Booking Calendar — slide from right */}
      <AnimSection direction="right" delay={0.06}>
        <BookingCalendar />
      </AnimSection>

    </div>
  );
};
