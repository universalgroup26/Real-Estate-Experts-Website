import React from 'react';
import { BENEFIT_CARDS } from '../data/content';
import { Building2, Users, FileCheck, ClipboardCheck, DollarSign, ArrowRight, ShieldAlert } from 'lucide-react';

interface BenefitsProps {
  onOpenSubmitForm: () => void;
}

export const Benefits: React.FC<BenefitsProps> = ({ onOpenSubmitForm }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-teal-600" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#D12027]" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-teal-600" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-6 h-6 text-[#D12027]" />;
      case 'DollarSign':
        return <DollarSign className="w-6 h-6 text-teal-600" />;
      default:
        return <Building2 className="w-6 h-6 text-teal-600" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-slate-900 text-slate-100 uppercase tracking-wider">
            Landlord Advantages
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B192C] tracking-tight">
            A Simpler Way to Fill Your NYC Rental
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Professional representation designed to save time, streamline landlord paperwork, and clarify program-supported rental opportunities across New York City.
          </p>
        </div>

        {/* 5 Benefit Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFIT_CARDS.map((card, index) => (
            <div
              key={card.id}
              className={`bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(card.iconName)}
                  </div>
                  <span className="text-xs font-bold text-slate-400 font-mono">0{card.id}</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#0B192C] group-hover:text-teal-700 transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>NYC Rental Support</span>
                <span className="text-teal-700 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Learn detail <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Compliant Banner Note */}
        <div className="mt-10 bg-amber-50/80 border border-amber-200/80 rounded-xl p-4 text-xs text-amber-900 flex items-start gap-3 max-w-4xl mx-auto shadow-sm">
          <ShieldAlert className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block mb-0.5">Compliant Program Guidance:</span>
            <span>
              All transactions remain subject to owner approval, fair-housing compliance, rent reasonableness, utility allowances, and official program rules. We do not promise guaranteed rent, guaranteed approval, guaranteed inspection results, zero risk, or a specific placement timeline.
            </span>
          </div>
        </div>

        {/* Section CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenSubmitForm}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#D12027] hover:bg-[#b51b21] transition-all shadow-lg hover:shadow-xl active:scale-98 cursor-pointer"
          >
            Submit Your Vacancy Now
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
