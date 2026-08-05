import React from 'react';
import { Phone, Mail, Globe, MapPin, Home, Shield, Database } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenCrmDrawer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPrivacy, onOpenTerms, onOpenCrmDrawer }) => {
  const handleLink = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="bg-[#070F1B] text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-serif font-bold text-white tracking-tight">
                Real Estate Experts
              </span>
              <span className="bg-[#D12027] text-white font-bold text-[10px] px-2 py-0.5 rounded">
                KW
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed font-sans max-w-sm">
              Dedicated New York City rental assistance and vacancy coordination for landlords, property managers, and real estate professionals across all five NYC boroughs.
            </p>

            <div className="space-y-1 text-slate-200 font-medium">
              <div><strong>{BUSINESS_INFO.agentName}</strong> — {BUSINESS_INFO.title}</div>
              <div className="text-teal-400">{BUSINESS_INFO.brokerage}</div>
              <div className="text-slate-400 text-[11px] pt-1">{BUSINESS_INFO.kwIndependentDisclaimer}</div>
            </div>
          </div>

          {/* Quick Contact Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider text-teal-400">
              Office & Direct Contact
            </h4>

            <div className="space-y-2 text-slate-300">
              <a href={`tel:${BUSINESS_INFO.mobilePhone}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#D12027]" />
                <span>Mobile / Call / Text: <strong className="text-white">{BUSINESS_INFO.mobilePhone}</strong></span>
              </a>

              <div className="flex items-center gap-2 text-slate-400">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>Office Phone: 347-846-1200</span>
              </div>

              <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                <span>Email: <strong className="text-white">{BUSINESS_INFO.email}</strong></span>
              </a>

              <a href={`https://${BUSINESS_INFO.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Globe className="w-3.5 h-3.5 text-teal-400" />
                <span>Website: <strong className="text-white">{BUSINESS_INFO.website}</strong></span>
              </a>

              <div className="flex items-start gap-2 text-slate-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#D12027] flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Nav & Equal Housing Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider text-teal-400">
              Navigation & Compliance
            </h4>

            <ul className="space-y-2 text-slate-300">
              <li>
                <button onClick={(e) => handleLink(e, 'services')} className="hover:text-white transition-colors cursor-pointer text-left">Landlord Services</button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'how-it-works')} className="hover:text-white transition-colors cursor-pointer text-left">How It Works Process</button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'education')} className="hover:text-white transition-colors cursor-pointer text-left">CityFHEPS & Section 8 Guide</button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'faqs')} className="hover:text-white transition-colors cursor-pointer text-left">Landlord FAQs</button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'about')} className="hover:text-white transition-colors cursor-pointer text-left">About Joy Chowdhury</button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'submit-vacancy')} className="hover:text-white transition-colors cursor-pointer text-left">Submit Vacant Unit</button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'contact')} className="hover:text-white transition-colors cursor-pointer text-left">Book Consultation / Contact</button>
              </li>
              <li>
                <button onClick={onOpenCrmDrawer} className="text-teal-400 hover:underline flex items-center gap-1 cursor-pointer">
                  <Database className="w-3 h-3" /> GoHighLevel CRM Inspector
                </button>
              </li>
            </ul>

            <div className="pt-2 flex items-center gap-2 text-slate-300 font-semibold text-xs border-t border-slate-800">
              <Home className="w-4 h-4 text-teal-400" />
              <span>Equal Housing Opportunity</span>
            </div>
          </div>

        </div>

        {/* Compliance Disclaimer Box */}
        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl text-[11px] text-slate-400 leading-relaxed">
          <strong className="text-slate-200 block mb-1">Official Mandatory Disclaimer:</strong>
          {BUSINESS_INFO.complianceDisclaimer}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Real Estate Experts • Joy Chowdhury, Keller Williams Realty Landmark II. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button onClick={onOpenPrivacy} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={onOpenTerms} className="hover:text-white transition-colors">
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
