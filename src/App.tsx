import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { EducationPage } from './pages/EducationPage';
import { FaqsPage } from './pages/FaqsPage';
import { AboutPage } from './pages/AboutPage';
import { SubmitVacancyPage } from './pages/SubmitVacancyPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';
import { LandlordGuideModal } from './components/LandlordGuideModal';
import { PrivacyTermsModal } from './components/PrivacyTermsModal';
import { CrmPipelineDrawer } from './components/CrmPipelineDrawer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [guideModalOpen, setGuideModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [crmDrawerOpen, setCrmDrawerOpen] = useState(false);

  // Sync hash with current page state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'services', 'how-it-works', 'education', 'faqs', 'about', 'submit-vacancy', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950 flex flex-col justify-between">
      
      <div>
        {/* Sticky Header */}
        <Header
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenSubmitForm={() => handleNavigate('submit-vacancy')}
          onOpenBooking={() => handleNavigate('contact')}
        />

        {/* Dynamic Dedicated Page View */}
        <main>
          {currentPage === 'home' && (
            <HomePage
              onNavigate={handleNavigate}
              onOpenSubmitForm={() => handleNavigate('submit-vacancy')}
              onOpenBooking={() => handleNavigate('contact')}
              onRequestGuide={() => setGuideModalOpen(true)}
              onOpenPrivacy={() => setLegalModalType('privacy')}
              onOpenTerms={() => setLegalModalType('terms')}
            />
          )}

          {currentPage === 'services' && (
            <ServicesPage
              onNavigate={handleNavigate}
              onOpenBooking={() => handleNavigate('contact')}
              onRequestGuide={() => setGuideModalOpen(true)}
            />
          )}

          {currentPage === 'how-it-works' && (
            <HowItWorksPage
              onNavigate={handleNavigate}
              onOpenBooking={() => handleNavigate('contact')}
              onRequestGuide={() => setGuideModalOpen(true)}
            />
          )}

          {currentPage === 'education' && (
            <EducationPage
              onNavigate={handleNavigate}
              onOpenBooking={() => handleNavigate('contact')}
              onRequestGuide={() => setGuideModalOpen(true)}
            />
          )}

          {currentPage === 'faqs' && (
            <FaqsPage
              onNavigate={handleNavigate}
              onOpenBooking={() => handleNavigate('contact')}
              onOpenCrmDrawer={() => setCrmDrawerOpen(true)}
            />
          )}

          {currentPage === 'about' && (
            <AboutPage
              onNavigate={handleNavigate}
              onOpenBooking={() => handleNavigate('contact')}
            />
          )}

          {currentPage === 'submit-vacancy' && (
            <SubmitVacancyPage
              onNavigate={handleNavigate}
              onOpenBooking={() => handleNavigate('contact')}
              onOpenPrivacy={() => setLegalModalType('privacy')}
              onOpenTerms={() => setLegalModalType('terms')}
            />
          )}

          {currentPage === 'contact' && (
            <ContactPage
              onNavigate={handleNavigate}
              onOpenPrivacy={() => setLegalModalType('privacy')}
              onOpenTerms={() => setLegalModalType('terms')}
            />
          )}
        </main>
      </div>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenCrmDrawer={() => setCrmDrawerOpen(true)}
      />

      {/* Modals & Drawers */}
      <LandlordGuideModal
        isOpen={guideModalOpen}
        onClose={() => setGuideModalOpen(false)}
      />

      <PrivacyTermsModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      <CrmPipelineDrawer
        isOpen={crmDrawerOpen}
        onClose={() => setCrmDrawerOpen(false)}
      />

    </div>
  );
}
