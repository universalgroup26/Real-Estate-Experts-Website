import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { EducationPage } from './pages/EducationPage';
import { CityFhepsGuidePage } from './pages/CityFhepsGuidePage';
import { Section8GuidePage } from './pages/Section8GuidePage';
import { ServiceAreasPage } from './pages/ServiceAreasPage';
import { IncentivesGuidePage } from './pages/IncentivesGuidePage';
import { FaqsPage } from './pages/FaqsPage';
import { AboutPage } from './pages/AboutPage';
import { SubmitVacancyPage } from './pages/SubmitVacancyPage';
import { ContactPage } from './pages/ContactPage';
import { SitemapPage } from './pages/SitemapPage';
import { Footer } from './components/Footer';
import { LandlordGuideModal } from './components/LandlordGuideModal';
import { PrivacyTermsModal } from './components/PrivacyTermsModal';
import { CrmPipelineDrawer } from './components/CrmPipelineDrawer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [guideModalOpen, setGuideModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [crmDrawerOpen, setCrmDrawerOpen] = useState(false);

  const validPages = [
    'home',
    'services',
    'how-it-works',
    'cityfheps-guide',
    'section8-guide',
    'service-areas',
    'incentives',
    'education',
    'faqs',
    'about',
    'submit-vacancy',
    'contact',
    'sitemap',
    'sitemap.html'
  ];

  // Sync hash and update document title for SEO on route change
  useEffect(() => {
    const handleHashChange = () => {
      let hash = window.location.hash.replace('#', '');
      if (hash === 'sitemap.html') hash = 'sitemap';
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const seoMap: Record<string, { title: string; description: string; keywords: string }> = {
      home: {
        title: 'Joy Chowdhury | NYC Landlord Real Estate & CityFHEPS Specialist | KW Landmark II',
        description: 'NYC landlord real estate specialist Joy Chowdhury (Keller Williams Landmark II). Fast 1-on-1 landlord vacancy intake, CityFHEPS & Section 8 tenant placement, HRA bonus guidance across Queens, Brooklyn, Bronx, Manhattan & Staten Island.',
        keywords: 'Joy Chowdhury, NYC landlord real estate agent, Keller Williams Realty Landmark II, CityFHEPS landlord, Section 8 NYCHA, rental vacancy intake, Queens real estate'
      },
      services: {
        title: 'Landlord Vacancy Services & Rental Placement | Joy Chowdhury - KW Landmark II',
        description: 'Comprehensive NYC landlord services including tenant screening, HRA paperwork handling, pre-inspection audits, and 100% broker-fee-free rental placement.',
        keywords: 'NYC landlord services, landlord placement specialist, HRA paperwork management, Section 8 tenant screening, zero broker fee landlord'
      },
      'how-it-works': {
        title: 'How It Works: NYC Rental Vacancy Intake & Placement | Joy Chowdhury',
        description: 'Step-by-step NYC landlord vacancy process: Submit apartment intake, match vetted voucher holders, pass HRA inspection, and activate direct deposit payments.',
        keywords: 'NYC landlord process, vacancy intake steps, HRA apartment inspection, CityFHEPS direct deposit, NYCHA landlord approval'
      },
      'cityfheps-guide': {
        title: 'NYC CityFHEPS Landlord Guide & 2026 Payment Standards Rate Chart | Joy Chowdhury',
        description: 'Official 2026 CityFHEPS landlord guide and maximum monthly rent rate chart. Learn about 15% HRA signing bonuses, broker fee coverage, and fast-track lease approvals.',
        keywords: 'CityFHEPS payment standards 2026, CityFHEPS rent chart, HRA landlord bonus, CityFHEPS broker fee coverage, NYC rental assistance'
      },
      'section8-guide': {
        title: 'NYCHA & HPD Section 8 Landlord Voucher Placement Guide | Joy Chowdhury',
        description: 'Expert guide for NYC landlords participating in NYCHA, HPD, and NYS HCR Section 8 Housing Choice Voucher programs. Direct deposit setup and HQS inspection tips.',
        keywords: 'NYCHA Section 8 landlord, HPD housing vouchers, HQS inspection checklist, Section 8 direct deposit, NYC housing voucher placement'
      },
      'service-areas': {
        title: 'NYC Borough Real Estate Coverage & Queens Landlord Services | Joy Chowdhury',
        description: 'Serving property owners across all 5 NYC boroughs: Queens, Brooklyn, The Bronx, Manhattan, and Staten Island. Based at KW Realty Landmark II in Jackson Heights, NY.',
        keywords: 'Queens landlord real estate agent, Jackson Heights real estate, Brooklyn rental placement, Bronx landlord agent, Manhattan voucher housing'
      },
      incentives: {
        title: 'NYC Landlord Cash Incentives & HRA Bonus Calculator 2026 | Joy Chowdhury',
        description: 'Calculate your HRA landlord cash bonuses, 15% CityFHEPS sign-on incentives, $1,000 unit repair funds, and security deposit vouchers available in NYC.',
        keywords: 'HRA landlord bonus calculator, CityFHEPS signing bonus, NYC landlord repair fund, voucher sign-on bonus 2026'
      },
      education: {
        title: 'CityFHEPS & Section 8 Landlord Educational Guide | Joy Chowdhury',
        description: 'Complete educational database for NYC property managers and landlords on rental assistance programs, fair housing laws, and HRA paperwork.',
        keywords: 'NYC landlord education, voucher housing guide, NYC source of income law, landlord voucher FAQs'
      },
      faqs: {
        title: 'NYC Landlord Rental Program FAQs | Joy Chowdhury - KW Landmark II',
        description: 'Answers to top questions NYC landlords ask about CityFHEPS, Section 8, rent payments, tenant vetting, and HRA paperwork processing.',
        keywords: 'NYC landlord FAQs, CityFHEPS landlord questions, NYCHA Section 8 FAQ, HRA direct deposit help'
      },
      about: {
        title: 'About Joy Chowdhury | Licensed Real Estate Salesperson | KW Landmark II',
        description: 'Meet Joy Chowdhury, Licensed Real Estate Salesperson at Keller Williams Realty Landmark II in Jackson Heights, NY. Bilingual in English & Bengali.',
        keywords: 'Joy Chowdhury bio, Keller Williams Landmark II agent, Bengali real estate agent Queens, NYC landlord specialist'
      },
      'submit-vacancy': {
        title: 'Submit Vacant Unit Intake Form | NYC Landlord Placement | Joy Chowdhury',
        description: 'Submit your vacant NYC apartment online for fast tenant placement. No landlord commission fees, full HRA paperwork audit, and pre-screened applicants.',
        keywords: 'Submit vacant apartment NYC, landlord vacancy form, list apartment CityFHEPS, Section 8 unit intake'
      },
      contact: {
        title: 'Schedule Consultation & Contact | Joy Chowdhury - Keller Williams Landmark II',
        description: 'Contact Joy Chowdhury at (917) 565-4788 or book a 1-on-1 landlord consultation at KW Realty Landmark II (75-35 31st Ave, Jackson Heights, NY).',
        keywords: 'Contact Joy Chowdhury, schedule landlord consultation, KW Landmark II address, 917-565-4788'
      },
      sitemap: {
        title: 'Website Sitemap & Navigation Directory | Joy Chowdhury - KW Landmark II',
        description: 'Interactive website sitemap and directory index for Joy Chowdhury. Explore core NYC landlord pages, voucher guides, borough areas, and AI/SEO crawling specifications.',
        keywords: 'HTML sitemap, sitemap.xml, robots.txt, llm.txt, NYC landlord site directory'
      }
    };

    const currentSeo = seoMap[currentPage];
    if (currentSeo) {
      document.title = currentSeo.title;
      
      // Dynamic Meta Description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', currentSeo.description);
      } else {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        metaDesc.setAttribute('content', currentSeo.description);
        document.head.appendChild(metaDesc);
      }

      // Dynamic Meta Keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', currentSeo.keywords);
      } else {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        metaKeywords.setAttribute('content', currentSeo.keywords);
        document.head.appendChild(metaKeywords);
      }
    }
  }, [currentPage]);

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
        <main className="min-h-[70vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
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

              {currentPage === 'cityfheps-guide' && (
                <CityFhepsGuidePage
                  onNavigate={handleNavigate}
                  onOpenBooking={() => handleNavigate('contact')}
                  onRequestGuide={() => setGuideModalOpen(true)}
                />
              )}

              {currentPage === 'section8-guide' && (
                <Section8GuidePage
                  onNavigate={handleNavigate}
                  onOpenBooking={() => handleNavigate('contact')}
                  onRequestGuide={() => setGuideModalOpen(true)}
                />
              )}

              {currentPage === 'service-areas' && (
                <ServiceAreasPage
                  onNavigate={handleNavigate}
                  onOpenBooking={() => handleNavigate('contact')}
                />
              )}

              {currentPage === 'incentives' && (
                <IncentivesGuidePage
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

              {currentPage === 'sitemap' && (
                <SitemapPage
                  onNavigate={handleNavigate}
                  onOpenBooking={() => handleNavigate('contact')}
                />
              )}
            </motion.div>
          </AnimatePresence>
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
