import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown, Search, HelpCircle, Phone, MessageSquare, ArrowRight, CheckCircle2, Database } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface FaqsPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
  onOpenCrmDrawer: () => void;
}

export const FaqsPage: React.FC<FaqsPageProps> = ({ onNavigate, onOpenBooking, onOpenCrmDrawer }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'General', label: 'General & Services' },
    { id: 'Payments & Rent', label: 'Payments & Rent Standards' },
    { id: 'Tenant Selection', label: 'Tenant Selection & Rights' },
    { id: 'Inspections & Process', label: 'Inspections & Timelines' },
    { id: 'Property Managers', label: 'Property Managers' },
  ];

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesQuery = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      
      {/* Page Hero Header */}
      <div className="relative bg-gradient-to-b from-[#0B192C] via-slate-900 to-slate-900 pt-12 pb-20 border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-400/10 text-teal-300 border border-teal-400/20 uppercase tracking-wider">
              Landlord Knowledge Base
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Clear answers for NYC property owners, landlords, and real estate agents about tenant placement, voucher workflows, and brokerage coordination.
            </p>

            {/* Search Bar */}
            <div className="pt-4 relative max-w-xl">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. rent payment, inspection, lease)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-teal-400 shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 text-xs font-semibold pb-4 border-b border-slate-800">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-teal-400 text-slate-950 font-bold shadow-lg'
                  : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 max-w-4xl">
          {filteredFaqs.length === 0 ? (
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 text-center text-slate-400 text-xs">
              No matching questions found for "{searchQuery}". Try searching another keyword or contact Joy Chowdhury directly.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-slate-950 border border-slate-800 rounded-2xl transition-all overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-slate-900/60 transition-colors cursor-pointer"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800">
                        {faq.category}
                      </span>
                      <h3 className="text-base font-serif font-bold text-white pt-1">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-teal-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-xs text-slate-300 leading-relaxed font-sans border-t border-slate-900 pt-4 space-y-3 animate-in fade-in duration-200">
                      <p>{faq.answer}</p>
                      <div className="pt-2 flex items-center gap-2 text-[11px] text-teal-400 font-medium">
                        <CheckCircle2 className="w-4 h-4" /> Have more specific questions regarding your unit?
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Contact Callout Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl">
          <div className="space-y-2">
            <h3 className="text-2xl font-serif font-bold text-white">Have a Specific Landlord Question?</h3>
            <p className="text-xs text-slate-300">
              Joy Chowdhury is directly available to answer questions regarding your specific rental property or building portfolio.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-all shadow-lg cursor-pointer"
            >
              Book Direct Consultation
            </button>
            <a
              href={`tel:${BUSINESS_INFO.mobilePhone}`}
              className="px-5 py-3 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 transition-all border border-slate-700"
            >
              Call {BUSINESS_INFO.mobilePhone}
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
