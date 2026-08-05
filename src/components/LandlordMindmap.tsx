import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  DollarSign, 
  ShieldCheck, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  PlusCircle, 
  ChevronRight, 
  Zap,
  Info,
  HelpCircle,
  Clock,
  Layers
} from 'lucide-react';

interface MindNode {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  color: string;
  borderColor: string;
  textColor: string;
  icon: React.ElementType;
  details: {
    heading: string;
    description: string;
    highlights: string[];
    actionLabel?: string;
    actionType?: 'submit' | 'booking' | 'cityfheps';
  };
  children: {
    id: string;
    title: string;
    desc: string;
    metric?: string;
  }[];
}

interface LandlordMindmapProps {
  onOpenSubmitForm?: () => void;
  onOpenBooking?: () => void;
  onNavigate?: (page: string) => void;
}

export const LandlordMindmap: React.FC<LandlordMindmapProps> = ({
  onOpenSubmitForm,
  onOpenBooking,
  onNavigate,
}) => {
  const [selectedBranch, setSelectedBranch] = useState<string>('cityfheps');
  const [activeChildNode, setActiveChildNode] = useState<string | null>(null);

  const mindData: MindNode[] = [
    {
      id: 'cityfheps',
      title: 'CityFHEPS Vouchers',
      subtitle: 'NYC HRA Funded Rentals',
      badge: '100% Rent Paid by City',
      color: 'from-teal-500/20 to-teal-900/30',
      borderColor: 'border-teal-500/60',
      textColor: 'text-[#00D2B4]',
      icon: DollarSign,
      details: {
        heading: 'CityFHEPS Voucher Program Architecture',
        description: 'The primary NYC rental voucher program administered by the Human Resources Administration (HRA). Pays 100% of fair market rent directly to landlord bank accounts.',
        highlights: [
          'Direct Deposit: Monthly rent paid directly by HRA without tenant delay',
          '2026 Payment Standards: Studio up to $2,387, 1BR up to $2,451, 2BR up to $2,780',
          'Guaranteed Broker Fee: HRA pays 100% of licensed broker fees (up to 15% annual rent)',
          'Multi-Year Lease Protection: Automatic annual inflation-indexed rent adjustments'
        ],
        actionLabel: 'Calculate CityFHEPS Bonuses',
        actionType: 'cityfheps',
      },
      children: [
        { id: 'c1', title: 'Direct Deposit Rent', desc: '100% guaranteed monthly wire transfers from HRA', metric: '1st of Month' },
        { id: 'c2', title: '15% Signing Bonus', desc: 'Lump-sum upfront cash bonus for multi-year leases', metric: 'Up to $5,000+' },
        { id: 'c3', title: '$0 Landlord Fee', desc: 'HRA covers full licensed real estate broker commission', metric: '$0 Out of Pocket' },
        { id: 'c4', title: '1-Month Security Deposit', desc: 'Full security deposit voucher backed by NYC HRA', metric: '100% Protected' },
      ],
    },
    {
      id: 'incentives',
      title: 'Landlord Cash Bonuses',
      subtitle: 'Upfront HRA Financial Perks',
      badge: 'Up to $1,000 Repairs + 15%',
      color: 'from-emerald-500/20 to-emerald-900/30',
      borderColor: 'border-emerald-500/60',
      textColor: 'text-emerald-400',
      icon: Zap,
      details: {
        heading: 'HRA Landlord Financial Incentive Matrix',
        description: 'Special cash bonuses and unit repair funds provided by NYC HRA to encourage property owners to lease vacant apartments to qualified voucher holders.',
        highlights: [
          '15% Upfront Signing Bonus: Calculated from annual lease value',
          'Up to $1,000 Unit Repair Funds: Reimbursable pre-inspection repair assistance',
          'Damage Protection Guarantee: Security voucher shields unit integrity',
          'Broker Fee Coverage: Landlords pay $0 in real estate commissions'
        ],
        actionLabel: 'Submit Vacant Unit Now',
        actionType: 'submit',
      },
      children: [
        { id: 'i1', title: 'Unit Repair Grant', desc: 'Up to $1,000 per unit to fix cosmetic inspection items', metric: '$1,000 Max' },
        { id: 'i2', title: 'Signing Bonus', desc: '15% lump-sum bonus upon lease execution', metric: '15% Annual Rent' },
        { id: 'i3', title: 'Broker Fee Waiver', desc: '100% broker commission covered by agency', metric: '15% Covered' },
      ],
    },
    {
      id: 'section8',
      title: 'NYCHA Section 8',
      subtitle: 'Housing Choice Vouchers',
      badge: 'Federal & HPD Vouchers',
      color: 'from-blue-500/20 to-blue-900/30',
      borderColor: 'border-blue-500/60',
      textColor: 'text-blue-400',
      icon: ShieldCheck,
      details: {
        heading: 'NYCHA & HPD Section 8 Voucher Integration',
        description: 'Federally subsidized housing vouchers managed locally by NYCHA and HPD. Provides reliable long-term rental income with annual agency lease renewals.',
        highlights: [
          'Reliable Housing Subsidy: Guaranteed portion paid directly by housing authority',
          'HQS Inspection Pre-Check: Complete walk-through prior to city inspector visit',
          'Fair Market Utility Allowances: Calculated transparently into rent schedules',
          'Tenant Vetting: Thorough background, employment, and rental history checks'
        ],
        actionLabel: 'Schedule Landlord Consultation',
        actionType: 'booking',
      },
      children: [
        { id: 's1', title: 'HQS Pre-Inspection', desc: 'Walk-through checklist for window guards, self-closing doors', metric: 'Pass 1st Try' },
        { id: 's2', title: 'Direct Subsidy Wire', desc: 'Automatic Electronic Fund Transfer (EFT) from NYCHA', metric: 'Direct Bank Wire' },
        { id: 's3', title: 'Long-term Tenants', desc: 'High tenant retention and stable long-term occupancy', metric: 'Multi-Year Leases' },
      ],
    },
    {
      id: 'process',
      title: 'End-to-End Coordination',
      subtitle: 'Joy Chowdhury KW Landmark II',
      badge: 'Full Service Support',
      color: 'from-[#D12027]/20 to-red-950/30',
      borderColor: 'border-[#D12027]/60',
      textColor: 'text-[#D12027]',
      icon: Building2,
      details: {
        heading: 'Seamless 4-Step Landlord Coordination Workflow',
        description: 'Joy Chowdhury manages every administrative hurdle, agency packet, background check, and inspection walk-through from start to finish.',
        highlights: [
          'Step 1: Vacancy Intake & Consultation (Rent evaluation & borough match)',
          'Step 2: Tenant Vetting & Screening (Consistent, lawful screening criteria)',
          'Step 3: HRA/NYCHA Packet Assembly & Pre-Inspection Walkthrough',
          'Step 4: Lease Signing, Bonus Claiming & Direct Deposit Activation'
        ],
        actionLabel: 'List Your Apartment Now',
        actionType: 'submit',
      },
      children: [
        { id: 'p1', title: 'Packet Submission', desc: '100% complete paperwork filing to avoid agency delays', metric: 'Fast Processing' },
        { id: 'p2', title: 'Inspection Prep', desc: 'Pre-inspection audit for CO alarms & lead paint forms', metric: 'Zero Delays' },
        { id: 'p3', title: 'Lease Execution', desc: 'HRA compliant lease setup & direct deposit routing', metric: 'Full Compliance' },
      ],
    },
  ];

  const currentBranch = mindData.find((b) => b.id === selectedBranch) || mindData[0];

  const handleAction = (type?: string) => {
    if (type === 'submit' && onOpenSubmitForm) {
      onOpenSubmitForm();
    } else if (type === 'booking' && onOpenBooking) {
      onOpenBooking();
    } else if (type === 'cityfheps' && onNavigate) {
      onNavigate('incentives');
    } else if (onOpenSubmitForm) {
      onOpenSubmitForm();
    }
  };

  return (
    <div className="bg-[#07111E] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden space-y-8">
      {/* Background Radial Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center space-y-3 relative z-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-teal-500/10 text-[#00D2B4] border border-teal-500/20 uppercase tracking-wider">
          <Layers className="w-4 h-4 text-[#00D2B4]" /> Interactive Visual Mindmap & Architecture
        </div>
        
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
          NYC Landlord Rental Ecosystem
        </h2>
        
        <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
          Click any branch below to explore the interconnected components of CityFHEPS vouchers, HRA cash bonuses, Section 8 integration, and Joy Chowdhury's end-to-end landlord representation.
        </p>
      </div>

      {/* MINDMAP MAIN VISUAL DIAGRAM */}
      <div className="relative z-10 space-y-8">
        
        {/* Central Hub Node */}
        <div className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border-2 border-teal-500/80 p-5 rounded-2xl shadow-2xl text-center max-w-md w-full relative group cursor-pointer"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 text-slate-950 text-[10px] uppercase font-extrabold tracking-wider px-3 py-0.5 rounded-full shadow">
              Central Operations Hub
            </div>
            
            <div className="flex items-center justify-center gap-3 pt-1">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-[#00D2B4] flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-white font-serif">Joy Chowdhury • KW Landmark II</div>
                <div className="text-xs text-teal-300 font-medium">NYC Landlord Vacancy Placement Hub</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SVG Connecting Lines Animation (Responsive) */}
        <div className="hidden lg:block relative h-12 w-full max-w-4xl mx-auto overflow-visible pointer-events-none">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 800 50">
            <line x1="400" y1="0" x2="100" y2="50" stroke="#00D2B4" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
            <line x1="400" y1="0" x2="300" y2="50" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
            <line x1="400" y1="0" x2="500" y2="50" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
            <line x1="400" y1="0" x2="700" y2="50" stroke="#D12027" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
          </svg>
        </div>

        {/* 4 Interactive Primary Nodes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mindData.map((node) => {
            const isSelected = selectedBranch === node.id;
            const IconComp = node.icon;
            
            return (
              <motion.button
                key={node.id}
                type="button"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSelectedBranch(node.id);
                  setActiveChildNode(null);
                }}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? `bg-slate-900/90 ${node.borderColor} shadow-2xl ring-2 ring-teal-500/30 scale-102`
                    : 'bg-[#091424]/80 border-slate-800 hover:border-slate-700 hover:bg-[#0D1A2D]'
                }`}
              >
                {/* Selected Indicator Light */}
                {isSelected && (
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-teal-500/20 to-transparent rounded-bl-full" />
                )}

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className={`w-9 h-9 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center ${node.textColor}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border border-slate-800 bg-slate-950/80 ${node.textColor}`}>
                      {node.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white font-serif">{node.title}</h3>
                    <p className="text-[11px] text-slate-400 font-sans">{node.subtitle}</p>
                  </div>
                </div>

                <div className={`flex items-center gap-1 text-[11px] font-bold ${isSelected ? node.textColor : 'text-slate-500'}`}>
                  <span>{isSelected ? 'Active Branch' : 'Click to View'}</span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* ACTIVE BRANCH EXPANDED DETAILS CARD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBranch.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-[#091424] border border-slate-800/90 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative"
          >
            {/* Top Branch Bar */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center ${currentBranch.textColor}`}>
                  <currentBranch.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                    {currentBranch.details.heading}
                  </h3>
                  <p className="text-xs text-slate-400 font-sans">
                    {currentBranch.details.description}
                  </p>
                </div>
              </div>

              {currentBranch.details.actionLabel && (
                <button
                  type="button"
                  onClick={() => handleAction(currentBranch.details.actionType)}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-[#00D2B4] hover:bg-teal-300 transition-all shadow-md flex items-center gap-2 cursor-pointer whitespace-nowrap flex-shrink-0"
                >
                  <span>{currentBranch.details.actionLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Highlights Bullet List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-200">
              {currentBranch.details.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-[#050C16] border border-slate-800 p-3 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2B4] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            {/* Child Leaf Nodes Grid */}
            <div className="space-y-3 pt-2">
              <div className="text-xs uppercase font-bold text-slate-400 tracking-wider flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" /> Key Features & Direct Benefits
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {currentBranch.children.map((child) => (
                  <motion.div
                    key={child.id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#050C16] border border-slate-800/80 hover:border-teal-500/40 p-4 rounded-xl space-y-2 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white group-hover:text-teal-300 transition-colors">
                        {child.title}
                      </span>
                      {child.metric && (
                        <span className="text-[10px] font-mono text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                          {child.metric}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                      {child.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
};
