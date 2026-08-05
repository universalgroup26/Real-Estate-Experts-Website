import React, { useState, useEffect, useRef } from 'react';
import { Phone, Calendar, PlusCircle, Menu, X, Building, ShieldCheck, ChevronDown, FileText, MapPin, Info, HelpCircle, DollarSign, Compass } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { BUSINESS_INFO } from '../data/content';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenSubmitForm: () => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenSubmitForm, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const primaryNavLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Landlord Services', id: 'services' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'CityFHEPS Guide', id: 'cityfheps-guide' },
    { label: 'FAQs', id: 'faqs' },
    { label: 'Contact', id: 'contact' },
  ];

  const secondaryNavLinks = [
    { label: 'Section 8 Voucher Guide', id: 'section8-guide', desc: 'NYCHA & HPD housing vouchers' },
    { label: 'HRA Cash Incentives', id: 'incentives', desc: '$1,000 repairs & 15% bonuses' },
    { label: 'Borough Coverage', id: 'service-areas', desc: 'Queens, Brooklyn, Bronx, Manhattan, SI' },
    { label: 'Voucher Education', id: 'education', desc: 'Compliance & law knowledgebase' },
    { label: 'About Joy Chowdhury', id: 'about', desc: 'Keller Williams Landmark II bio' },
    { label: 'Website Sitemap', id: 'sitemap', desc: 'Sitemap.html & crawling index' },
  ];

  const navCategories = [
    {
      title: 'Main Pages',
      links: [
        { label: 'Home', id: 'home' },
        { label: 'Landlord Services', id: 'services' },
        { label: 'How It Works', id: 'how-it-works' },
        { label: 'Submit Vacant Unit', id: 'submit-vacancy' },
        { label: 'Schedule & Contact', id: 'contact' },
      ]
    },
    {
      title: 'Landlord Voucher Guides',
      links: [
        { label: 'CityFHEPS Guide (2026 Rates)', id: 'cityfheps-guide' },
        { label: 'Section 8 Voucher Guide', id: 'section8-guide' },
        { label: 'HRA Cash Incentives & Bonuses', id: 'incentives' },
        { label: 'General Voucher Education', id: 'education' },
      ]
    },
    {
      title: 'Coverage & Info',
      links: [
        { label: 'NYC Borough Service Areas', id: 'service-areas' },
        { label: 'Landlord FAQs', id: 'faqs' },
        { label: 'About Joy Chowdhury', id: 'about' },
        { label: 'Website Sitemap (Sitemap.html)', id: 'sitemap' },
      ]
    }
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner for Brokerage affiliation */}
      <div className="bg-[#0B192C] text-slate-200 text-xs py-1.5 px-4 border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-semibold text-white">
              <span className="text-[#D12027] font-bold">KW</span> Keller Williams Realty Landmark II
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">Licensed Real Estate Salesperson: <strong className="text-white font-medium">{BUSINESS_INFO.agentName}</strong></span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="inline-flex items-center gap-1 text-teal-400">
              <ShieldCheck className="w-3.5 h-3.5" /> All 5 NYC Boroughs
            </span>
            <span className="text-slate-500">|</span>
            <a href={`tel:${BUSINESS_INFO.mobilePhone}`} className="hover:text-white transition-colors font-medium text-white flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-[#D12027]" /> {BUSINESS_INFO.mobilePhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled ? 'bg-[#0B192C]/95 backdrop-blur-md shadow-xl border-b border-slate-800 py-3' : 'bg-[#0B192C] py-4 border-b border-slate-800/60'
      }`}>
        {/* Animated Scroll Progress Bar */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-[#00D2B4] to-[#D12027] origin-left z-50"
          style={{ scaleX }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Left */}
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/80 flex items-center justify-center text-white shadow-inner group-hover:border-[#D12027]/50 transition-colors">
                <Building className="w-5 h-5 text-teal-400" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg sm:text-xl font-serif font-bold tracking-tight text-white group-hover:text-teal-300 transition-colors">
                    Joy Chowdhury
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#D12027] text-white px-1.5 py-0.5 rounded">
                    KW
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-sans">
                  Keller Williams Realty Landmark II
                </span>
              </div>
            </a>

            {/* Desktop Streamlined Navigation */}
            <nav className="hidden lg:flex items-center gap-5 text-xs font-medium text-slate-300">
              {primaryNavLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`transition-colors relative py-1 cursor-pointer whitespace-nowrap ${
                      isActive ? 'text-teal-400 font-bold' : 'hover:text-white'
                    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-teal-400 ${
                      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                    } after:transition-all`}
                  >
                    {link.label}
                  </button>
                );
              })}

              {/* Guides & Resources Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`inline-flex items-center gap-1 py-1 cursor-pointer whitespace-nowrap transition-colors ${
                    secondaryNavLinks.some((l) => l.id === currentPage)
                      ? 'text-teal-400 font-bold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>More & Guides</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full right-0 mt-2 w-72 bg-[#091424] border border-slate-800 rounded-2xl p-2 shadow-2xl z-50 divide-y divide-slate-800/80"
                    >
                      <div className="py-1">
                        {secondaryNavLinks.map((item) => {
                          const isSubActive = currentPage === item.id;
                          return (
                            <button
                              key={item.id}
                              onClick={(e) => handleNavClick(e, item.id)}
                              className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex flex-col cursor-pointer ${
                                isSubActive
                                  ? 'bg-[#00D2B4]/10 text-[#00D2B4]'
                                  : 'hover:bg-slate-800/90 text-slate-200 hover:text-white'
                              }`}
                            >
                              <span className="text-xs font-semibold">{item.label}</span>
                              <span className="text-[10px] text-slate-400">{item.desc}</span>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.mobilePhone}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors"
                title="Call or text Joy Chowdhury"
              >
                <Phone className="w-3.5 h-3.5 text-[#D12027]" />
                <span>Call/Text: <strong className="text-white">{BUSINESS_INFO.mobilePhone}</strong></span>
              </a>

              <button
                onClick={onOpenSubmitForm}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#D12027] hover:bg-[#b51b21] transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <PlusCircle className="w-4 h-4" />
                Submit a Vacancy
              </button>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-900 bg-teal-400 hover:bg-teal-300 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Book Consultation
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-xl text-slate-200 hover:text-white bg-slate-800/90 border border-slate-700 focus:outline-none flex items-center gap-2 text-xs font-bold"
                aria-label="Open mobile navigation menu"
              >
                <Menu className="w-5 h-5 text-teal-400" />
                <span>Menu</span>
              </button>
            </div>
          </div>
        </div>

        {/* Slide-Out Side Drawer Menu for Mobile */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Dark Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 lg:hidden"
              />

              {/* Slide-Out Drawer Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 bottom-0 w-[88%] max-w-md bg-[#081322] border-l border-slate-800 z-50 lg:hidden flex flex-col justify-between shadow-2xl overflow-hidden"
              >
                {/* Drawer Top Header */}
                <div className="p-4 sm:p-5 border-b border-slate-800/80 bg-[#0B192C] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-teal-400">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-serif font-bold text-white text-base">Joy Chowdhury</span>
                        <span className="text-[9px] font-bold bg-[#D12027] text-white px-1.5 py-0.5 rounded">KW</span>
                      </div>
                      <p className="text-[11px] text-slate-400">KW Realty Landmark II</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 border border-slate-700/80 cursor-pointer"
                    aria-label="Close navigation menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Drawer Scrollable Navigation Content */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
                  
                  {/* Categorized Links */}
                  {navCategories.map((category, catIdx) => (
                    <div key={catIdx} className="space-y-2">
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-teal-400 border-b border-slate-800 pb-1.5 font-mono">
                        {category.title}
                      </h4>
                      <div className="space-y-1 pt-1">
                        {category.links.map((link) => {
                          const isActive = currentPage === link.id;
                          return (
                            <button
                              key={link.id}
                              onClick={(e) => handleNavClick(e, link.id)}
                              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-between cursor-pointer ${
                                isActive
                                  ? 'bg-[#00D2B4]/10 text-[#00D2B4] border border-[#00D2B4]/30 font-bold'
                                  : 'text-slate-300 hover:bg-slate-800/80 hover:text-white border border-transparent'
                              }`}
                            >
                              <span>{link.label}</span>
                              {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#00D2B4]" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}

                  {/* Office Info Card inside Drawer */}
                  <div className="bg-[#050C16] border border-slate-800 p-4 rounded-2xl space-y-2 text-xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block font-mono">
                      Brokerage & Agent Info
                    </span>
                    <p className="text-slate-300">
                      <strong>Office:</strong> {BUSINESS_INFO.address}
                    </p>
                    <p className="text-slate-400 text-[11px]">
                      Licensed Real Estate Salesperson specializing in NYC landlord rental placement.
                    </p>
                  </div>

                </div>

                {/* Sticky Drawer Bottom Call-To-Action Container */}
                <div className="p-4 bg-[#0B192C] border-t border-slate-800 space-y-2.5 shadow-xl">
                  <a
                    href={`tel:${BUSINESS_INFO.mobilePhone}`}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#D12027]" />
                    <span>Direct Call/Text: {BUSINESS_INFO.mobilePhone}</span>
                  </a>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenSubmitForm();
                      }}
                      className="w-full flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl text-xs font-bold text-white bg-[#D12027] hover:bg-[#b51b21] transition-all shadow-md cursor-pointer"
                    >
                      <PlusCircle className="w-4 h-4" />
                      <span>Submit Vacancy</span>
                    </button>

                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenBooking();
                      }}
                      className="w-full flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-all shadow-md cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Consultation</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Persistent Mobile Bottom Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0B192C]/95 backdrop-blur-md border-t border-slate-800 p-2.5 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${BUSINESS_INFO.mobilePhone}`}
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-bold text-white bg-slate-800 border border-slate-700 hover:bg-slate-700 active:scale-98"
        >
          <Phone className="w-4 h-4 text-[#D12027]" />
          <span>Call/Text</span>
        </a>

        <button
          onClick={onOpenSubmitForm}
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-bold text-white bg-[#D12027] hover:bg-[#b51b21] active:scale-98 shadow-md"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Submit Vacancy</span>
        </button>

        <button
          onClick={onOpenBooking}
          className="flex-none p-2.5 rounded-lg text-xs font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 active:scale-98"
          title="Book Consultation"
        >
          <Calendar className="w-4 h-4" />
        </button>
      </div>
    </>
  );
};
