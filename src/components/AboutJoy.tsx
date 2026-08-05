import React from 'react';
import { Phone, Mail, Globe, MapPin, Building, ShieldCheck, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data/content';

interface AboutJoyProps {
  onOpenBooking: () => void;
  onOpenSubmitForm: () => void;
}

export const AboutJoy: React.FC<AboutJoyProps> = ({ onOpenBooking, onOpenSubmitForm }) => {
  return (
    <section id="about-joy" className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Joy Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="bg-gradient-to-br from-slate-900 via-[#0B192C] to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
              
              {/* KW Badge Top Right */}
              <div className="absolute top-4 right-4 bg-[#D12027] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow">
                Keller Williams
              </div>

              {/* Profile Visual Header */}
              <div className="flex flex-col items-center text-center space-y-4 pt-4">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-teal-400 via-slate-800 to-[#D12027] p-1 shadow-xl">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center font-serif text-3xl font-bold text-white border border-slate-700">
                    JC
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    {BUSINESS_INFO.agentName}
                  </h3>
                  <div className="text-xs font-semibold text-teal-400 mt-1">
                    {BUSINESS_INFO.title}
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    {BUSINESS_INFO.brokerage}
                  </div>
                </div>
              </div>

              {/* Contact Information List */}
              <div className="mt-8 pt-6 border-t border-slate-800 space-y-3.5 text-xs text-slate-300">
                
                <a
                  href={`tel:${BUSINESS_INFO.mobilePhone}`}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 transition-colors border border-slate-700/80"
                >
                  <Phone className="w-4 h-4 text-[#D12027] flex-shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[10px]">Mobile / Call / Text</span>
                    <strong className="text-white text-sm">{BUSINESS_INFO.mobilePhone}</strong>
                  </div>
                </a>

                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 transition-colors border border-slate-700/80"
                >
                  <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[10px]">Direct Email</span>
                    <strong className="text-white">{BUSINESS_INFO.email}</strong>
                  </div>
                </a>

                <a
                  href={`https://${BUSINESS_INFO.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 transition-colors border border-slate-700/80"
                >
                  <Globe className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <div className="flex-1 flex items-center justify-between">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Official Website</span>
                      <strong className="text-white">{BUSINESS_INFO.website}</strong>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </a>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <MapPin className="w-4 h-4 text-[#D12027] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[10px]">Office Address</span>
                    <span className="text-white leading-tight block">{BUSINESS_INFO.address}</span>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-800 grid grid-cols-2 gap-2">
                <button
                  onClick={onOpenBooking}
                  className="py-2.5 px-3 rounded-xl text-xs font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 transition-colors text-center cursor-pointer"
                >
                  Book Call
                </button>
                <button
                  onClick={onOpenSubmitForm}
                  className="py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-[#D12027] hover:bg-[#b51b21] transition-colors text-center cursor-pointer"
                >
                  Submit Unit
                </button>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Bio Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 uppercase tracking-wider">
              Licensed NYC Real Estate Professional
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B192C] tracking-tight">
              Local Experience. Practical Landlord Support.
            </h2>

            <div className="space-y-4 text-base text-slate-700 leading-relaxed font-sans">
              <p>
                Joy Chowdhury is a Licensed Real Estate Salesperson with Keller Williams Realty Landmark II in Queens, NY. Joy helps New York City landlords and property managers review rental opportunities, coordinate potential tenant matches, and navigate applicable paperwork, scheduling, and inspection steps.
              </p>
              <p>
                The approach is professional, responsive, and focused on helping owners understand each stage before making a decision.
              </p>
            </div>

            {/* Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs font-medium text-slate-700">
              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <div>
                  <strong className="text-[#0B192C] block font-bold mb-0.5">Licensed Brokerage Standards</strong>
                  Operating under Keller Williams Realty Landmark II ethical guidelines & fair housing laws.
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <Building className="w-5 h-5 text-[#D12027] flex-shrink-0" />
                <div>
                  <strong className="text-[#0B192C] block font-bold mb-0.5">Five Borough Coverage</strong>
                  Dedicated support tailored for Queens, Brooklyn, Manhattan, Bronx, and Staten Island properties.
                </div>
              </div>
            </div>

            {/* Language Note */}
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 text-xs text-teal-900 flex items-start gap-3">
              <Globe className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold block mb-0.5">Bengali Language Consultations Available:</strong>
                <span>
                  Joy Chowdhury provides direct telephone & text consultations in English and Bengali for property owners who prefer Bengali language discussion. (Official program documents remain in English).
                </span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
