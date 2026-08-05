import React, { useState, useEffect } from 'react';
import { Phone, Calendar, PlusCircle, Menu, X, Building, ShieldCheck } from 'lucide-react';
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

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Landlord Services', id: 'services' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'CityFHEPS & Section 8', id: 'education' },
    { label: 'FAQs', id: 'faqs' },
    { label: 'About Joy', id: 'about' },
    { label: 'Submit Vacancy', id: 'submit-vacancy' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
                    Real Estate Experts
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#D12027] text-white px-1.5 py-0.5 rounded">
                    KW
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-sans">
                  Joy Chowdhury • Keller Williams Realty Landmark II
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-5 text-xs font-medium text-slate-300">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`transition-colors relative py-1 cursor-pointer ${
                      isActive ? 'text-teal-400 font-bold' : 'hover:text-white'
                    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-teal-400 ${
                      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                    } after:transition-all`}
                  >
                    {link.label}
                  </button>
                );
              })}
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
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-800 border border-slate-700 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0B192C] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 mt-3 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-2 text-sm font-medium text-slate-300">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`px-3 py-2 rounded-md text-left transition-colors cursor-pointer ${
                      isActive ? 'bg-slate-800 text-teal-400 font-bold' : 'hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-800 space-y-2">
              <a
                href={`tel:${BUSINESS_INFO.mobilePhone}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-slate-800 border border-slate-700"
              >
                <Phone className="w-4 h-4 text-[#D12027]" />
                Call / Text: {BUSINESS_INFO.mobilePhone}
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSubmitForm();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#D12027] hover:bg-[#b51b21]"
              >
                <PlusCircle className="w-4 h-4" />
                Submit a Vacancy
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-900 bg-teal-400 hover:bg-teal-300"
              >
                <Calendar className="w-4 h-4" />
                Book a Landlord Consultation
              </button>
            </div>
          </div>
        )}
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
