import React from 'react';
import { VacancyForm } from '../components/VacancyForm';
import { ShieldCheck, Phone, CheckCircle2, Clock, Database, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface SubmitVacancyPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const SubmitVacancyPage: React.FC<SubmitVacancyPageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      
      {/* Page Hero Header */}
      <div className="relative bg-gradient-to-b from-[#0B192C] via-slate-900 to-slate-900 pt-12 pb-16 border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-400/10 text-teal-300 border border-teal-400/20 uppercase tracking-wider">
              Landlord Vacancy Intake Form
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Submit Your Vacant NYC Property
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Fill out the details below to request tenant placement support, voucher pre-screening, or landlord paperwork assistance across Queens, Brooklyn, Manhattan, Bronx, or Staten Island.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area containing the full Vacancy Form component */}
      <div className="py-12">
        <VacancyForm
          onOpenBooking={onOpenBooking}
          onOpenPrivacy={onOpenPrivacy}
          onOpenTerms={onOpenTerms}
        />
      </div>

    </div>
  );
};
