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

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenSubmitForm: () => void;
  onOpenBooking: () => void;
  onRequestGuide: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

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
      {/* 1. Hero Section */}
      <Hero
        onOpenSubmitForm={() => onNavigate('submit-vacancy')}
        onOpenBooking={() => onNavigate('contact')}
      />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Landlord Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        <Benefits
          onOpenSubmitForm={() => onNavigate('submit-vacancy')}
        />
      </motion.div>

      {/* 4. Interactive Landlord Rental Mindmap */}
      <section className="py-12 sm:py-20 bg-[#050C16] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <LandlordMindmap
              onOpenSubmitForm={() => onNavigate('submit-vacancy')}
              onOpenBooking={() => onNavigate('contact')}
              onNavigate={onNavigate}
            />
          </motion.div>
        </div>
      </section>

      {/* 5. How It Works Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        <HowItWorks
          onOpenSubmitForm={() => onNavigate('how-it-works')}
        />
      </motion.div>

      {/* 6. Services Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        <Services
          onOpenSubmitForm={() => onNavigate('services')}
          onOpenBooking={() => onNavigate('contact')}
        />
      </motion.div>

      {/* 7. CityFHEPS & Section 8 Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        <EducationSection
          onRequestGuide={onRequestGuide}
          onOpenBooking={() => onNavigate('education')}
        />
      </motion.div>

      {/* 8. Property Manager Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        <PropertyManagerSection
          onOpenBooking={() => onNavigate('contact')}
          onOpenSubmitForm={() => onNavigate('submit-vacancy')}
        />
      </motion.div>

      {/* 9. FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        <FaqSection
          onOpenBooking={() => onNavigate('faqs')}
        />
      </motion.div>

      {/* 10. About Joy Chowdhury */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        <AboutJoy
          onOpenBooking={() => onNavigate('about')}
          onOpenSubmitForm={() => onNavigate('submit-vacancy')}
        />
      </motion.div>

      {/* 11. Primary Action 1: Vacancy Submission Form */}
      <VacancyForm
        onOpenBooking={() => onNavigate('contact')}
        onOpenPrivacy={onOpenPrivacy}
        onOpenTerms={onOpenTerms}
      />

      {/* 12. Primary Action 2: GoHighLevel Calendar Booking Section */}
      <BookingCalendar />
    </div>
  );
};

