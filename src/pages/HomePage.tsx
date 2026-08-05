import React from 'react';
import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { Benefits } from '../components/Benefits';
import { HowItWorks } from '../components/HowItWorks';
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
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero
        onOpenSubmitForm={() => onNavigate('submit-vacancy')}
        onOpenBooking={() => onNavigate('contact')}
      />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Landlord Benefits Section */}
      <Benefits
        onOpenSubmitForm={() => onNavigate('submit-vacancy')}
      />

      {/* 4. How It Works Section */}
      <HowItWorks
        onOpenSubmitForm={() => onNavigate('how-it-works')}
      />

      {/* 5. Services Section */}
      <Services
        onOpenSubmitForm={() => onNavigate('services')}
        onOpenBooking={() => onNavigate('contact')}
      />

      {/* 6. CityFHEPS & Section 8 Education Section */}
      <EducationSection
        onRequestGuide={onRequestGuide}
        onOpenBooking={() => onNavigate('education')}
      />

      {/* 7. Property Manager Section */}
      <PropertyManagerSection
        onOpenBooking={() => onNavigate('contact')}
        onOpenSubmitForm={() => onNavigate('submit-vacancy')}
      />

      {/* 8. FAQ Section */}
      <FaqSection
        onOpenBooking={() => onNavigate('faqs')}
      />

      {/* 9. About Joy Chowdhury */}
      <AboutJoy
        onOpenBooking={() => onNavigate('about')}
        onOpenSubmitForm={() => onNavigate('submit-vacancy')}
      />

      {/* 10. Primary Action 1: Vacancy Submission Form */}
      <VacancyForm
        onOpenBooking={() => onNavigate('contact')}
        onOpenPrivacy={onOpenPrivacy}
        onOpenTerms={onOpenTerms}
      />

      {/* 11. Primary Action 2: GoHighLevel Calendar Booking Section */}
      <BookingCalendar />
    </div>
  );
};
