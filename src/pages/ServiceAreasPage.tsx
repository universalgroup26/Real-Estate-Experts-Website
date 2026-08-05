import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Building, ShieldCheck, Phone, ArrowRight, CheckCircle2, Globe } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface ServiceAreasPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const ServiceAreasPage: React.FC<ServiceAreasPageProps> = ({ onNavigate, onOpenBooking }) => {
  const boroughDetails = [
    {
      name: 'Queens',
      tagline: 'Primary Hub & Brokerage Headquarters',
      neighborhoods: ['Jackson Heights', 'Flushing', 'Astoria', 'Jamaica', 'Elmhurst', 'Woodside', 'Forest Hills', 'Corona', 'Sunnyside', 'Ridgewood', 'Long Island City', 'Kew Gardens'],
      description: 'As our core operating territory, Queens features high landlord demand for both market-rate and CityFHEPS / Section 8 rental placements. Our Jackson Heights office at 75-35 31st Ave provides localized landlord representation.',
      highlights: ['Local KW Landmark II Office', 'High CityFHEPS Tenant Match Speed', 'Bilingual Support (English & Bengali)']
    },
    {
      name: 'Brooklyn',
      tagline: 'High Rental Yields & Rapid Lease-Up',
      neighborhoods: ['Crown Heights', 'Bushwick', 'Bed-Stuy', 'Flatbush', 'East New York', 'Sunset Park', 'Canarsie', 'Williamsburg'],
      description: 'Brooklyn landlords benefit from strong rental rates and rapid voucher processing across high-opportunity zip codes. Joy Chowdhury handles full intake and tenant screening.',
      highlights: ['Enhanced Payment Standards', 'Fast HRA Inspection Turnaround', 'Vetted Working Families']
    },
    {
      name: 'Bronx',
      tagline: 'Large Multi-Family Inventory & Voucher Demand',
      neighborhoods: ['Mott Haven', 'Riverdale', 'Pelham Bay', 'Fordham', 'Concourse', 'Parkchester', 'Kingsbridge'],
      description: 'Extensive coverage for multi-family property owners and building managers in the Bronx seeking reliable direct-deposit tenant placement through HRA & NYCHA.',
      highlights: ['Multi-Unit Vacancy Packages', 'Dedicated NYCHA Onboarding', 'HRA Sign-On Bonus Eligibility']
    },
    {
      name: 'Manhattan',
      tagline: 'Prime Rental Markets & Subsidized Housing',
      neighborhoods: ['Harlem', 'Washington Heights', 'Inwood', 'East Harlem', 'Lower East Side', 'Hamilton Heights'],
      description: 'Comprehensive tenant placement and voucher coordination for Manhattan landlords across upper and central Manhattan neighborhoods.',
      highlights: ['High Maximum Rent Allowances', 'Streamlined Paperwork Audit', 'Full Legal Compliance']
    },
    {
      name: 'Staten Island',
      tagline: 'Single-Family & Multi-Family Rental Coverage',
      neighborhoods: ['St. George', 'Stapleton', 'New Dorp', 'Tompkinsville', 'Port Richmond'],
      description: 'Dedicated voucher placement assistance for Staten Island property owners seeking verified tenant applicants and guaranteed monthly direct deposit.',
      highlights: ['Direct Landlord Support', 'Full Tenant Background Checks', 'HRA Paperwork Management']
    }
  ];

  return (
    <div className="bg-[#050C16] text-slate-100 min-h-screen font-sans">
      
      {/* Schema.org LocalBusiness & ServiceArea Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RealEstateAgent',
            'name': 'Joy Chowdhury - Keller Williams Realty Landmark II',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': '75-35 31st Ave, Suite 202',
              'addressLocality': 'Jackson Heights',
              'addressRegion': 'NY',
              'postalCode': '11370',
              'addressCountry': 'US'
            },
            'areaServed': boroughDetails.map(b => b.name)
          })
        }}
      />

      {/* Hero Banner Section */}
      <div className="relative bg-gradient-to-b from-[#0B192C] via-[#081322] to-[#050C16] pt-12 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">Home</button>
            <span>/</span>
            <span className="text-[#00D2B4] font-semibold">NYC Borough Service Areas</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#00D2B4]/10 text-[#00D2B4] border border-[#00D2B4]/20 uppercase tracking-wider">
                <Globe className="w-3.5 h-3.5" /> All 5 NYC Boroughs Served
              </div>

              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                NYC Landlord Services & Service Area Coverage
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                Expert real estate sales and landlord rental placement across <strong>Queens, Brooklyn, Bronx, Manhattan, and Staten Island</strong>. Based out of Keller Williams Realty Landmark II in Jackson Heights, NY.
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('submit-vacancy')}
                  className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#D12027] hover:bg-[#b51b21] transition-all shadow-lg cursor-pointer flex items-center gap-2"
                >
                  Submit Vacancy in Any Borough
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.mobilePhone}`}
                  className="px-6 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-[#00D2B4] hover:bg-[#14E5C7] transition-all shadow-lg flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Call Direct: {BUSINESS_INFO.mobilePhone}
                </a>
              </div>
            </div>

            {/* Jackson Heights HQ Card */}
            <div className="lg:col-span-4 bg-[#091424] border border-slate-800 p-6 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <div className="w-10 h-10 rounded-xl bg-[#D12027] text-white flex items-center justify-center font-bold">
                  KW
                </div>
                <div>
                  <h3 className="font-serif font-bold text-white text-sm">Office Headquarters</h3>
                  <p className="text-xs text-slate-400">KW Realty Landmark II</p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#D12027] flex-shrink-0 mt-0.5" />
                  <span>{BUSINESS_INFO.address}</span>
                </p>
                <p className="text-slate-400 pl-6">Licensed Real Estate Salesperson: <strong className="text-white">{BUSINESS_INFO.agentName}</strong></p>
                <p className="text-slate-400 pl-6">Languages Spoken: <strong className="text-[#00D2B4]">English & Bengali</strong></p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Detailed Borough Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00D2B4]">Local Market Expertise</span>
          <h2 className="text-3xl font-serif font-bold text-white">Borough Breakdown & Neighborhood Coverage</h2>
          <p className="text-xs text-slate-300">Targeted rental placement tailored to local borough rent standards and tenant demand.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {boroughDetails.map((borough, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#091424] border border-slate-800 rounded-3xl p-8 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
                      <Building className="w-5 h-5 text-[#00D2B4]" /> {borough.name}
                    </h3>
                    <span className="text-xs text-[#00D2B4] font-medium">{borough.tagline}</span>
                  </div>
                  <span className="text-xs font-mono bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-slate-300">
                    Full Coverage
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans">{borough.description}</p>

                <div className="space-y-2">
                  <span className="text-[11px] uppercase font-bold text-slate-400">Key Neighborhoods Covered:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {borough.neighborhoods.map((n, idx) => (
                      <span key={idx} className="text-[11px] bg-[#050C16] border border-slate-800 text-slate-300 px-2.5 py-1 rounded-lg">
                        {n}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  {borough.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2B4]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={() => onNavigate('submit-vacancy')}
                  className="w-full py-3 rounded-xl text-xs font-bold text-slate-950 bg-[#00D2B4] hover:bg-[#14E5C7] transition-colors cursor-pointer"
                >
                  Submit {borough.name} Vacant Unit
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#091424] via-slate-900 to-[#091424] border border-[#00D2B4]/40 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-3xl font-serif font-bold text-white">Leasing a Property Anywhere in NYC?</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Joy Chowdhury provides personalized 1-on-1 landlord guidance regardless of borough location. Contact our Jackson Heights office today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('submit-vacancy')}
              className="px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#D12027] hover:bg-[#b51b21] transition-all shadow-xl cursor-pointer"
            >
              Submit Property Details
            </button>
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-xl text-sm font-bold text-slate-900 bg-[#00D2B4] hover:bg-[#14E5C7] cursor-pointer"
            >
              Book Office/Phone Consultation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
