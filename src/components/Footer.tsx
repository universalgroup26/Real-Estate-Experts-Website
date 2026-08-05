import React from 'react';
import { Phone, Mail, Globe, MapPin, Building, Shield, Database, FileText, Code2, FileCode, Bot, Compass, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenCrmDrawer: () => void;
}

// Equal Housing Opportunity Official Badge
const EqualHousingLogo: React.FC = () => (
  <div className="flex flex-col items-center justify-center border border-white/90 text-white rounded p-0.5 w-9 h-9 flex-shrink-0 bg-transparent" title="Equal Housing Opportunity">
    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10L12 3L21 10V20H3V10Z" />
      <line x1="7" y1="12.5" x2="17" y2="12.5" strokeWidth="2" />
      <line x1="7" y1="16" x2="17" y2="16" strokeWidth="2" />
    </svg>
    <span className="text-[4.5px] font-sans font-bold leading-none uppercase tracking-tighter text-center mt-0.5">EQUAL HOUSING</span>
  </div>
);

// REALTOR® Official Badge
const RealtorLogo: React.FC = () => (
  <div className="flex flex-col items-center justify-center bg-white text-slate-950 rounded p-0.5 w-9 h-9 flex-shrink-0 font-sans shadow-sm" title="REALTOR®">
    <div className="flex items-start font-black text-lg leading-none font-serif tracking-tighter">
      <span>R</span>
      <span className="text-[6px] font-sans font-normal align-top -ml-0.5">®</span>
    </div>
    <span className="text-[4.5px] font-bold uppercase tracking-tighter leading-none mt-0.5">REALTOR®</span>
  </div>
);

// MLS Badge
const MlsLogo: React.FC = () => (
  <div className="flex items-center justify-center border-2 border-white text-white font-sans font-black italic text-sm tracking-widest px-2 rounded h-9 min-w-[40px] flex-shrink-0" title="Multiple Listing Service">
    MLS
  </div>
);

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPrivacy, onOpenTerms, onOpenCrmDrawer }) => {
  const handleLink = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="bg-[#070F1B] text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Column 1: Brand Info & Direct Contact */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-serif font-bold text-white tracking-tight">
                Joy Chowdhury
              </span>
              <span className="bg-[#D12027] text-white font-bold text-[10px] px-2 py-0.5 rounded">
                KW
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed font-sans max-w-sm">
              Dedicated New York City rental assistance and vacancy coordination for landlords, property managers, and real estate professionals across all five NYC boroughs.
            </p>

            <div className="space-y-1 text-slate-200 font-medium pt-1">
              <div><strong>{BUSINESS_INFO.agentName}</strong> — {BUSINESS_INFO.title}</div>
              <div className="text-teal-400">{BUSINESS_INFO.brokerage}</div>
              <div className="text-slate-400 text-[11px] pt-0.5">{BUSINESS_INFO.kwIndependentDisclaimer}</div>
            </div>

            <div className="space-y-2 text-slate-300 pt-2 border-t border-slate-800/80">
              <a href={`tel:${BUSINESS_INFO.mobilePhone}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#D12027]" />
                <span>Mobile / Call / Text: <strong className="text-white">{BUSINESS_INFO.mobilePhone}</strong></span>
              </a>

              <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                <span>Email: <strong className="text-white">{BUSINESS_INFO.email}</strong></span>
              </a>

              <div className="flex items-start gap-2 text-slate-400 pt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#D12027] flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Main Pages & Intake */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider text-teal-400">
              Core Pages & Portals
            </h4>

            <ul className="space-y-2 text-slate-300">
              <li>
                <button onClick={(e) => handleLink(e, 'home')} className="hover:text-white transition-colors cursor-pointer text-left">Home Overview</button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'services')} className="hover:text-white transition-colors cursor-pointer text-left">Landlord Services</button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'how-it-works')} className="hover:text-white transition-colors cursor-pointer text-left">How It Works Process</button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'submit-vacancy')} className="hover:text-[#D12027] font-semibold text-white transition-colors cursor-pointer text-left">Submit Vacant Unit</button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'contact')} className="hover:text-[#00D2B4] font-semibold text-white transition-colors cursor-pointer text-left">Schedule Consultation & Contact</button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'about')} className="hover:text-white transition-colors cursor-pointer text-left">About Joy Chowdhury</button>
              </li>
              <li>
                <button onClick={onOpenCrmDrawer} className="text-teal-400 hover:underline flex items-center gap-1 cursor-pointer pt-1">
                  <Database className="w-3 h-3" /> GoHighLevel CRM Inspector
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Voucher Guides & Boroughs */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider text-teal-400">
              Voucher Guides & Boroughs
            </h4>

            <ul className="space-y-2 text-slate-300">
              <li>
                <button onClick={(e) => handleLink(e, 'cityfheps-guide')} className="hover:text-[#00D2B4] transition-colors cursor-pointer text-left font-medium text-white">CityFHEPS Guide (2026 Rates)</button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'section8-guide')} className="hover:text-[#D12027] transition-colors cursor-pointer text-left font-medium text-white">Section 8 Voucher Guide</button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'incentives')} className="hover:text-[#00D2B4] transition-colors cursor-pointer text-left font-medium text-white">HRA Cash Incentives & Calculator</button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'education')} className="hover:text-white transition-colors cursor-pointer text-left">General Voucher Education</button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'service-areas')} className="hover:text-[#00D2B4] transition-colors cursor-pointer text-left font-medium text-white">5 NYC Borough Service Areas</button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'faqs')} className="hover:text-white transition-colors cursor-pointer text-left">Landlord FAQs</button>
              </li>
            </ul>
          </div>

          {/* Column 4: Sitemap & Technical Machine Files */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider text-teal-400">
              Sitemap & Machine Index
            </h4>

            <ul className="space-y-2 text-slate-300 font-mono text-[11px]">
              <li>
                <button onClick={(e) => handleLink(e, 'sitemap')} className="text-teal-400 hover:underline flex items-center gap-1.5 cursor-pointer font-sans text-xs font-bold">
                  <Compass className="w-3.5 h-3.5" /> HTML Sitemap (sitemap.html)
                </button>
              </li>
              <li className="pt-1">
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Code2 className="w-3 h-3 text-slate-400" /> sitemap.xml
                </a>
              </li>
              <li>
                <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <FileCode className="w-3 h-3 text-slate-400" /> robots.txt
                </a>
              </li>
              <li>
                <a href="/llm.txt" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors flex items-center gap-1.5 text-purple-300">
                  <Bot className="w-3 h-3 text-purple-400" /> llm.txt (AI Spec)
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Official Office Banner (Matching Attached Spec Bar with 3 Logos) */}
        <div className="pt-8 border-t border-slate-800 space-y-4 font-sans text-slate-200">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-center md:text-left">
            {/* Address & Office Name */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 text-slate-200 font-medium">
              <span>75-35 31st Ave, Suite 202, Jackson Heights, NY 11370</span>
              <span className="hidden sm:inline text-slate-500 font-light">|</span>
              <span className="font-semibold text-white">Keller Williams Realty Landmark II</span>
            </div>
            
            {/* 3 Industry Compliance Logos */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <EqualHousingLogo />
              <RealtorLogo />
              <MlsLogo />
            </div>
          </div>

          {/* Legal Disclaimer Sub-bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 sm:gap-4 text-[11px] text-slate-400 text-center md:text-left font-normal pt-1">
            <span>Each office is independently owned and operated.</span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span>Program eligibility and agency approval requirements apply.</span>
          </div>

        </div>

        {/* Compliance Disclaimer Detail Box */}
        <div className="bg-slate-900/90 border border-slate-800/90 p-4 rounded-xl text-[11px] text-slate-400 leading-relaxed">
          <strong className="text-slate-200 block mb-1">Official Mandatory Disclaimer:</strong>
          {BUSINESS_INFO.complianceDisclaimer}
        </div>

        {/* Bottom Rights & Legal Bar */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Joy Chowdhury • Keller Williams Realty Landmark II. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button onClick={onOpenPrivacy} className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={onOpenTerms} className="hover:text-white transition-colors cursor-pointer">
              Terms & Conditions
            </button>
            <span>•</span>
            <span className="text-slate-500">Accessibility Statement</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
