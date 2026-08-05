import React, { useState, useEffect } from 'react';
import { Database, Tag, UserCheck, Calendar, RefreshCw, X, ChevronRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface CrmPipelineDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CrmPipelineDrawer: React.FC<CrmPipelineDrawerProps> = ({ isOpen, onClose }) => {
  const [data, setData] = useState<any>({ leads: [], bookings: [] });
  const [loading, setLoading] = useState(false);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/leads');
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchLeads();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border-l border-slate-800 w-full max-w-xl h-full p-6 overflow-y-auto text-white shadow-2xl flex flex-col justify-between">
        
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/30">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-serif font-bold text-white">GoHighLevel CRM Pipeline Live Log</h3>
                <p className="text-[11px] text-slate-400">Real-time landlord lead capture & tag inspector</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={fetchLeads}
                disabled={loading}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                title="Refresh leads"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-3 my-4">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Total Landlord Leads</div>
              <div className="text-2xl font-bold text-teal-400">{data.leads?.length || 0}</div>
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Scheduled Consultations</div>
              <div className="text-2xl font-bold text-white">{data.bookings?.length || 0}</div>
            </div>
          </div>

          {/* Leads List */}
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-teal-400" />
              Captured Landlord Leads
            </div>

            {data.leads?.length === 0 ? (
              <div className="bg-slate-950/60 p-6 rounded-xl border border-slate-800 text-center text-xs text-slate-400">
                No submissions captured yet. Submit a vacancy form to test live GoHighLevel integration.
              </div>
            ) : (
              data.leads?.map((lead: any) => (
                <div key={lead.id} className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2 text-xs">
                  <div className="flex justify-between items-start">
                    <div>
                      <strong className="text-white text-sm block">{lead.fullName}</strong>
                      <span className="text-slate-400">{lead.role} • {lead.mobilePhone}</span>
                    </div>
                    <span className="bg-teal-950 text-teal-300 px-2 py-0.5 rounded text-[10px] font-bold border border-teal-800">
                      {lead.pipelineStage}
                    </span>
                  </div>

                  <div className="text-slate-300 grid grid-cols-2 gap-2 text-[11px] pt-1">
                    <div>Borough: <strong className="text-white">{lead.borough}</strong></div>
                    <div>Units: <strong className="text-white">{lead.unitCount}</strong> ({lead.bedroomCount})</div>
                    <div>Asking Rent: <strong className="text-white">${lead.askingRent || 'N/A'}</strong></div>
                    <div>Availability: <strong className="text-white">{lead.availability}</strong></div>
                  </div>

                  <div className="pt-2 border-t border-slate-900 flex flex-wrap gap-1">
                    {lead.tags?.map((t: string) => (
                      <span key={t} className="bg-slate-900 text-teal-400 px-2 py-0.5 rounded text-[10px] font-mono border border-slate-800">
                        🏷️ {t}
                      </span>
                    ))}
                  </div>

                  <div className="text-[10px] text-slate-500 font-mono pt-1">
                    Assigned: {lead.assignedTo}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 text-center text-[11px] text-slate-400">
          GoHighLevel CRM Webhook Integration Active • {BUSINESS_INFO.agentName}
        </div>

      </div>
    </div>
  );
};
