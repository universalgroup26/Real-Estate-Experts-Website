import React from 'react';
import { X, Shield, FileText, Lock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface PrivacyTermsModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PrivacyTermsModal: React.FC<PrivacyTermsModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl text-white max-h-[85vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div className="space-y-4 font-sans text-xs text-slate-300">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <Shield className="w-6 h-6 text-teal-400" />
              <h3 className="text-xl font-serif font-bold text-white">Privacy Policy</h3>
            </div>
            <p>
              Real Estate Experts, led by Joy Chowdhury at Keller Williams Realty Landmark II, is committed to respecting the privacy of NYC landlords, property managers, and real estate professionals.
            </p>
            <h4 className="font-bold text-white text-sm pt-2">Information We Collect</h4>
            <p>
              When you submit a vacancy or schedule a consultation, we collect information including your name, phone number, email address, property details, and communication preferences.
            </p>
            <h4 className="font-bold text-white text-sm pt-2">Use of Information</h4>
            <p>
              Information collected is used solely to respond to your property inquiry, facilitate potential tenant matching, assist with landlord document coordination, and communicate regarding NYC rental opportunities.
            </p>
            <h4 className="font-bold text-white text-sm pt-2">SMS & Telephony Compliance</h4>
            <p>
              By opting in via our submission form, you consent to receive SMS text messages and phone calls regarding your landlord inquiry. You may opt out at any time by replying STOP to 917-565-4788. We never sell or share your personal contact information with unauthorized third-party marketers.
            </p>
            <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400">
              {BUSINESS_INFO.brokerage} • {BUSINESS_INFO.address}
            </div>
          </div>
        ) : (
          <div className="space-y-4 font-sans text-xs text-slate-300">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <FileText className="w-6 h-6 text-[#D12027]" />
              <h3 className="text-xl font-serif font-bold text-white">Terms and Conditions</h3>
            </div>
            <p>
              Welcome to Real Estate Experts. By accessing this website or submitting property information, you agree to these Terms and Conditions.
            </p>
            <h4 className="font-bold text-white text-sm pt-2">No Guarantee of Outcome</h4>
            <p>
              Information provided on this site is for general educational and organizational purposes. Requesting information or submitting a unit does not guarantee tenant placement, specific rent approval, inspection passage, or agency voucher authorization.
            </p>
            <h4 className="font-bold text-white text-sm pt-2">Fair Housing & Legal Compliance</h4>
            <p>
              All property owner decisions remain subject to Federal, New York State, and New York City Fair Housing laws, including protections against source-of-income discrimination.
            </p>
            <h4 className="font-bold text-white text-sm pt-2">Brokerage Affiliation</h4>
            <p>
              Joy Chowdhury is a Licensed Real Estate Salesperson affiliated with Keller Williams Realty Landmark II. Each office is independently owned and operated.
            </p>
            <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400">
              {BUSINESS_INFO.complianceDisclaimer}
            </div>
          </div>
        )}

        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
