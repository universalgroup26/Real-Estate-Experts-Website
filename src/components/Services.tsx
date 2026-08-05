import React from 'react';
import { SERVICES } from '../data/content';
import { Home, CalendarClock, ShieldCheck, CheckCircle2, FileText, Sliders, Building, Handshake, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesProps {
  onOpenSubmitForm: () => void;
  onOpenBooking: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenSubmitForm, onOpenBooking }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Home': return <Home className="w-5 h-5 text-teal-600" />;
      case 'CalendarClock': return <CalendarClock className="w-5 h-5 text-[#D12027]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-teal-600" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-[#D12027]" />;
      case 'FileText': return <FileText className="w-5 h-5 text-teal-600" />;
      case 'Sliders': return <Sliders className="w-5 h-5 text-[#D12027]" />;
      case 'Building': return <Building className="w-5 h-5 text-teal-600" />;
      case 'Handshake': return <Handshake className="w-5 h-5 text-[#D12027]" />;
      default: return <Home className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200 uppercase tracking-wider mb-3">
              Comprehensive NYC Real Estate Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B192C] tracking-tight">
              Tailored Landlord & Property Solutions
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Whether managing a single apartment or an extensive multi-family portfolio across New York City, we provide specialized coordination for every stage.
          </p>
        </motion.div>

        {/* 8 Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:bg-white hover:border-slate-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-200 text-slate-800">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-serif font-bold text-[#0B192C] group-hover:text-teal-700 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <button
                  onClick={service.title.includes('Portfolio') ? onOpenBooking : onOpenSubmitForm}
                  className="text-xs font-bold text-teal-700 group-hover:text-[#D12027] inline-flex items-center gap-1 transition-colors cursor-pointer"
                >
                  Inquire service <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
