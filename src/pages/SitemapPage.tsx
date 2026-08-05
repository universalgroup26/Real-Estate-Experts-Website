import React from 'react';
import { motion } from 'motion/react';
import { 
  Compass, 
  FileText, 
  Building, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  HelpCircle, 
  Calculator, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink, 
  Bot, 
  Code2, 
  FileCode, 
  PlusCircle, 
  Calendar,
  Sparkles
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES, CITYFHEPS_INFO } from '../data/content';
import { LandlordMindmap } from '../components/LandlordMindmap';

interface SitemapPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ onNavigate, onOpenBooking }) => {
  const handlePageClick = (id: string) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mainPages = [
    { id: 'home', title: 'Home Page', desc: 'Main hub for NYC landlord real estate services, CityFHEPS & Section 8 placement, and direct GoHighLevel scheduling.', icon: Building },
    { id: 'services', title: 'Landlord Services', desc: 'Comprehensive property representation, tenant screening, HRA paperwork audit, and $0 commission lease placement.', icon: ShieldCheck },
    { id: 'how-it-works', title: 'How It Works', desc: 'Step-by-step 4-phase rental intake process from initial submission to HRA inspection and direct deposit setup.', icon: Compass },
    { id: 'submit-vacancy', title: 'Submit Vacant Unit Intake', desc: 'Online vacancy submission portal for landlords and property managers across all 5 NYC boroughs.', icon: PlusCircle },
    { id: 'contact', title: 'Schedule Consultation & Contact', desc: 'Live GoHighLevel embedded booking calendar for 1-on-1 consultations and office location details.', icon: Calendar },
    { id: 'about', title: 'About Joy Chowdhury', desc: 'Professional agent bio, Keller Williams Realty Landmark II brokerage affiliation, and contact credentials.', icon: CheckCircle2 },
  ];

  const guidePages = [
    { id: 'cityfheps-guide', title: 'CityFHEPS Landlord Guide (2026 Rates)', desc: 'Official 2026 maximum monthly payment standards chart, 15% HRA sign-on bonus rules, and broker fee coverage.', badge: '2026 Updated' },
    { id: 'section8-guide', title: 'Section 8 Voucher Guide', desc: 'NYCHA & HPD housing choice voucher program guide, HQS inspection checklist, and direct deposit setup.', badge: 'NYCHA / HPD' },
    { id: 'incentives', title: 'HRA Cash Incentives & Calculator', desc: 'Interactive landlord incentive calculator for $1,000 repair funds, 15% signing bonuses, and security deposit vouchers.', badge: 'Interactive Tool' },
    { id: 'education', title: 'Voucher Knowledgebase & Education', desc: 'Comprehensive educational guide on NYC Source of Income discrimination laws, fair housing, and HRA processing.', badge: 'Educational' },
    { id: 'faqs', title: 'Landlord Program FAQs', desc: 'Frequently asked questions regarding rent direct deposit, tenant screening, lease renewals, and inspections.', badge: 'Top Questions' },
  ];

  const boroughAreas = [
    { id: 'service-areas', borough: 'Queens (Primary Hub)', desc: 'Jackson Heights, Astoria, Flushing, Jamaica, Sunnyside, Woodside, Ridgewood, Forest Hills, Long Island City.' },
    { id: 'service-areas', borough: 'Brooklyn Coverage', desc: 'Bushwick, Crown Heights, Bedford-Stuyvesant, Flatbush, East New York, Sunset Park, Bay Ridge.' },
    { id: 'service-areas', borough: 'The Bronx Coverage', desc: 'Mott Haven, Riverdale, Kingsbridge, Pelham Bay, Fordham, Tremont, Grand Concourse.' },
    { id: 'service-areas', borough: 'Manhattan Coverage', desc: 'Harlem, Washington Heights, Inwood, East Harlem, Lower East Side, Upper Manhattan.' },
    { id: 'service-areas', borough: 'Staten Island Coverage', desc: 'St. George, Tompkinsville, Stapleton, New Dorp, Port Richmond.' },
  ];

  const systemFiles = [
    { name: 'robots.txt', path: '/robots.txt', desc: 'Search engine crawler rules and sitemap pointers.', icon: FileCode, ext: 'TXT' },
    { name: 'sitemap.xml', path: '/sitemap.xml', desc: 'Standard XML sitemap index for Google Search Console & Bing.', icon: Code2, ext: 'XML' },
    { name: 'llm.txt', path: '/llm.txt', desc: 'AI System context file for ChatGPT, Perplexity, Gemini, and Claude.', icon: Bot, ext: 'LLM' },
    { name: 'sitemap.html', path: '/#sitemap', desc: 'Human-readable interactive sitemap directory.', icon: FileText, ext: 'HTML' },
  ];

  return (
    <div className="py-12 sm:py-20 bg-[#050C16] text-slate-100 min-h-screen border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero Banner */}
        <div className="bg-[#091424] border border-slate-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-800 pb-8">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-teal-500/10 text-[#00D2B4] border border-teal-500/20 uppercase tracking-wider">
                <Compass className="w-4 h-4" /> Comprehensive Site Index & Crawler Directory
              </div>
              
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                Website Sitemap & Navigation Directory
              </h1>
              
              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                Explore all pages, landlord voucher guides, borough service coverage, and official SEO/AI technical endpoints for <strong>Joy Chowdhury</strong> (Licensed Real Estate Salesperson at Keller Williams Realty Landmark II).
              </p>
            </div>

            {/* Quick Action Box */}
            <div className="bg-[#050C16] p-5 rounded-2xl border border-slate-800 space-y-3 flex-shrink-0 w-full md:w-auto">
              <span className="text-[11px] uppercase font-bold text-teal-400 tracking-wider block">
                Quick Landlord Action
              </span>
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => handlePageClick('submit-vacancy')}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#D12027] hover:bg-[#b51b21] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <PlusCircle className="w-4 h-4" />
                  Submit Vacant Unit
                </button>
                <button
                  onClick={onOpenBooking}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-[#00D2B4] hover:bg-teal-300 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  Book Consultation
                </button>
              </div>
            </div>
          </div>

          {/* Quick Technical Files Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {systemFiles.map((f, i) => (
              <a
                key={i}
                href={f.path}
                target={f.path.startsWith('http') || f.path.includes('.') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="bg-[#050C16] hover:bg-[#0D192B] border border-slate-800 hover:border-teal-500/50 p-3 rounded-xl flex items-center justify-between text-xs transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <f.icon className="w-4 h-4 text-[#00D2B4] group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-mono font-bold text-white">{f.name}</div>
                    <div className="text-[10px] text-slate-400">{f.ext} Protocol</div>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-teal-400 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* SECTION 1: Primary Website Pages */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
            <div className="w-8 h-8 rounded-lg bg-[#00D2B4]/10 border border-[#00D2B4]/30 flex items-center justify-center text-[#00D2B4]">
              <Building className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Primary Application Pages
              </h2>
              <p className="text-xs text-slate-400">Core landlord representation, intake forms, and scheduling portals</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainPages.map((page, idx) => (
              <motion.div
                key={page.id + idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                onClick={() => handlePageClick(page.id)}
                className="bg-[#091424] border border-slate-800 hover:border-teal-500/50 rounded-2xl p-6 space-y-4 transition-all cursor-pointer group shadow-lg flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-[#00D2B4] group-hover:scale-110 transition-transform">
                      <page.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                      #{page.id}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#00D2B4] transition-colors">
                    {page.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {page.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-teal-400 group-hover:translate-x-1 transition-transform">
                  <span>Visit Page</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 1.5: Interactive Mindmap Architecture */}
        <div className="pt-4">
          <LandlordMindmap
            onOpenSubmitForm={() => handlePageClick('submit-vacancy')}
            onOpenBooking={onOpenBooking}
            onNavigate={handlePageClick}
          />
        </div>

        {/* SECTION 2: Landlord Voucher Guides & Rate Standards */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
            <div className="w-8 h-8 rounded-lg bg-[#D12027]/10 border border-[#D12027]/30 flex items-center justify-center text-[#D12027]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                NYC Voucher Guides & Payment Rate Charts
              </h2>
              <p className="text-xs text-slate-400">Detailed program rules, maximum rent charts, and HRA incentives</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guidePages.map((guide, idx) => (
              <motion.div
                key={guide.id + idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                onClick={() => handlePageClick(guide.id)}
                className="bg-[#091424] border border-slate-800 hover:border-teal-500/50 rounded-2xl p-6 space-y-4 transition-all cursor-pointer group shadow-lg flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-teal-500/10 text-[#00D2B4] border border-teal-500/20">
                      {guide.badge}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">#{guide.id}</span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#00D2B4] transition-colors">
                    {guide.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {guide.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-teal-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 3: Five NYC Borough Coverage Index */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                NYC Borough Coverage Index
              </h2>
              <p className="text-xs text-slate-400">Neighborhood placement service areas handled by Joy Chowdhury</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boroughAreas.map((b, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                onClick={() => handlePageClick(b.id)}
                className="bg-[#091424] border border-slate-800 hover:border-teal-500/50 rounded-2xl p-5 space-y-3 transition-all cursor-pointer group shadow-lg"
              >
                <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                  <MapPin className="w-4 h-4 text-[#D12027]" />
                  <h3 className="text-sm font-bold text-white group-hover:text-teal-400 transition-colors">
                    {b.borough}
                  </h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {b.desc}
                </p>

                <div className="text-[11px] text-teal-400 font-semibold pt-1 flex items-center gap-1">
                  <span>View Borough Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 4: AI Context & Search Engine Machine Files */}
        <div className="bg-[#091424] border border-slate-800 rounded-3xl p-8 space-y-6 shadow-2xl">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/30 flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-white">
                Machine Indexing & AI Assistant Context Endpoints
              </h2>
              <p className="text-xs text-slate-400">
                Standard structured protocol files provided for web crawlers, AI search agents (ChatGPT, Perplexity, Gemini, Claude), and search engine bots.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="bg-[#050C16] border border-slate-800 p-5 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-teal-400 text-sm">robots.txt</span>
                <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">Crawler Protocol</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Specifies index permissions for search crawlers (Googlebot, Bingbot, GPTBot, PerplexityBot) and provides XML sitemap declarations.
              </p>
              <a
                href="/robots.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-teal-400 hover:underline font-semibold"
              >
                <span>View Raw /robots.txt</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-[#050C16] border border-slate-800 p-5 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-teal-400 text-sm">sitemap.xml</span>
                <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">XML Schema</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Machine-readable XML urlset mapping all canonical pages, update frequencies, and priority weights for Google Search Console.
              </p>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-teal-400 hover:underline font-semibold"
              >
                <span>View Raw /sitemap.xml</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-[#050C16] border border-slate-800 p-5 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-purple-400 text-sm">llm.txt</span>
                <span className="text-[10px] bg-purple-500/10 text-purple-300 border border-purple-500/20 px-2 py-0.5 rounded">AI Standard</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Comprehensive Markdown AI specification document containing Joy Chowdhury's brokerage info, CityFHEPS rates, and services for AI search engines.
              </p>
              <a
                href="/llm.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-purple-400 hover:underline font-semibold"
              >
                <span>View Raw /llm.txt</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Office Contact Summary Footer Card */}
        <div className="bg-[#091424] border border-slate-800 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-300">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-base font-bold text-white font-serif">
              Joy Chowdhury — Keller Williams Realty Landmark II
            </div>
            <p className="text-slate-400">
              {BUSINESS_INFO.address} • Licensed Real Estate Salesperson
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.mobilePhone}`}
              className="px-5 py-3 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D12027]" />
              <span>{BUSINESS_INFO.mobilePhone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-5 py-3 rounded-xl text-xs font-bold text-slate-950 bg-[#00D2B4] hover:bg-teal-300 transition-all shadow-md cursor-pointer"
            >
              Book Consultation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
