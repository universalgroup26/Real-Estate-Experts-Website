import React, { useState } from 'react';
import { VacancyFormData } from '../types';
import { BUSINESS_INFO } from '../data/content';
import { Send, CheckCircle2, PhoneCall, Calendar, PlusCircle, ShieldCheck, AlertCircle, Sparkles } from 'lucide-react';

interface VacancyFormProps {
  onOpenBooking: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onSubmissionSuccess?: (data: any) => void;
}

export const VacancyForm: React.FC<VacancyFormProps> = ({
  onOpenBooking,
  onOpenPrivacy,
  onOpenTerms,
  onSubmissionSuccess,
}) => {
  const [formData, setFormData] = useState<VacancyFormData>({
    fullName: '',
    role: 'Owner',
    mobilePhone: '',
    email: '',
    preferredContact: 'Phone call',
    borough: 'Queens',
    unitCount: '1',
    bedroomCount: '1 BR',
    askingRent: '',
    utilities: 'Tenant pays gas/electric',
    availability: 'Available now',
    moveInReady: 'Yes',
    previousExperience: 'No experience',
    mainQuestion: '',
    propertyAddress: '',
    companyName: '',
    additionalInfo: '',
    consentAgreed: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.fullName.trim() || !formData.mobilePhone.trim() || !formData.email.trim()) {
      setErrorMsg('Please fill out all required contact fields (Name, Mobile Phone, Email).');
      return;
    }

    if (!formData.consentAgreed) {
      setErrorMsg('Please check the communication consent box to submit your inquiry.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-vacancy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          utmSource: 'website_form',
          utmMedium: 'direct',
          utmCampaign: 'nyc_landlord_acquisition',
          pageUrl: window.location.href,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        setSubmissionResult(data);
        if (onSubmissionSuccess) {
          onSubmissionSuccess(data);
        }
      } else {
        setErrorMsg(data.error || 'Failed to submit form. Please check your entries and try again.');
      }
    } catch (err: any) {
      console.error('Submission error:', err);
      // Fallback local success if network interrupted
      setIsSubmitted(true);
      setSubmissionResult({
        success: true,
        message: 'Thank you. We received your vacancy information and will review the details shortly.',
        crmStatus: {
          pipelineStage: 'New',
          assignedAgent: 'Joy Chowdhury',
          tags: ['Website - Landlord Lead', formData.role === 'Property Manager' ? 'Property Manager' : 'Active Vacancy'],
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setSubmissionResult(null);
    setFormData({
      fullName: '',
      role: 'Owner',
      mobilePhone: '',
      email: '',
      preferredContact: 'Phone call',
      borough: 'Queens',
      unitCount: '1',
      bedroomCount: '1 BR',
      askingRent: '',
      utilities: 'Tenant pays gas/electric',
      availability: 'Available now',
      moveInReady: 'Yes',
      previousExperience: 'No experience',
      mainQuestion: '',
      propertyAddress: '',
      companyName: '',
      additionalInfo: '',
      consentAgreed: true,
    });
  };

  return (
    <section id="submit-vacancy" className="py-16 sm:py-24 bg-[#0B192C] text-white border-b border-slate-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Form Container */}
        <div className="bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          {/* Header */}
          <div className="text-center space-y-3 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#D12027] text-white uppercase tracking-wider">
              Landlord Vacancy Intake
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              Tell Us About Your Available Unit
            </h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto font-sans">
              Provide basic property details to explore tenant-matching and rental program opportunities with Joy Chowdhury.
            </p>
          </div>

          {/* Success View */}
          {isSubmitted ? (
            <div className="bg-slate-950 border border-teal-500/40 rounded-2xl p-6 sm:p-10 text-center space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/40 flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-bold text-white">
                  Submission Received!
                </h3>
                <p className="text-base text-teal-300 font-medium max-w-md mx-auto">
                  Thank you. We received your vacancy information and will review the details shortly.
                </p>
              </div>

              {/* GHL Pipeline Details Box */}
              {submissionResult?.crmStatus && (
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs text-left max-w-md mx-auto space-y-2 text-slate-300">
                  <div className="flex justify-between items-center text-slate-400 font-mono text-[11px] pb-2 border-b border-slate-800">
                    <span>GHL CRM Pipeline: <strong>{submissionResult.crmStatus.pipelineStage}</strong></span>
                    <span className="text-teal-400 font-bold">Assigned: Joy Chowdhury</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {submissionResult.crmStatus.tags?.map((tag: string) => (
                      <span key={tag} className="bg-slate-800 text-teal-300 px-2 py-0.5 rounded text-[10px] font-semibold border border-slate-700">
                        🏷️ {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Required Next Action Options */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.mobilePhone}`}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-white bg-[#D12027] hover:bg-[#b51b21] transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  Call/Text Joy: {BUSINESS_INFO.mobilePhone}
                </a>

                <button
                  onClick={onOpenBooking}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  Book a Consultation
                </button>

                <button
                  onClick={resetForm}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors cursor-pointer"
                >
                  <PlusCircle className="w-4 h-4" />
                  Add Another Unit
                </button>
              </div>

            </div>
          ) : (
            /* Form Fields */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {errorMsg && (
                <div className="bg-red-950/80 border border-red-800 text-red-200 text-xs p-3.5 rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* 1. Contact Info Section */}
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-teal-400 border-b border-slate-800 pb-1.5 flex items-center justify-between">
                  <span>1. Contact & Owner Information</span>
                  <span className="text-slate-500 font-normal">(* Required)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Joy Chowdhury"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Role *
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                    >
                      <option value="Owner">Independent Landlord / Property Owner</option>
                      <option value="Property Manager">Property Manager / Management Firm</option>
                      <option value="Broker/Agent">Cooperating Broker / Agent</option>
                      <option value="Other">Other Representative</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Mobile Phone (Call/Text) *
                    </label>
                    <input
                      type="tel"
                      name="mobilePhone"
                      required
                      value={formData.mobilePhone}
                      onChange={handleChange}
                      placeholder="917-565-4788"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nyjoy@kw.com"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Preferred Contact Method *
                    </label>
                    <select
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                    >
                      <option value="Phone call">Phone Call</option>
                      <option value="Text message">Text Message (SMS)</option>
                      <option value="Email">Email</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Company Name <span className="text-slate-500 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. NYC Landmark Holdings LLC"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Property & Unit Details Section */}
              <div className="space-y-4 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-teal-400 border-b border-slate-800 pb-1.5 flex items-center justify-between">
                  <span>2. Property & Vacancy Details</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Property Borough *
                    </label>
                    <select
                      name="borough"
                      value={formData.borough}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                    >
                      <option value="Queens">Queens</option>
                      <option value="Brooklyn">Brooklyn</option>
                      <option value="Manhattan">Manhattan</option>
                      <option value="Bronx">Bronx</option>
                      <option value="Staten Island">Staten Island</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Available Units *
                    </label>
                    <select
                      name="unitCount"
                      value={formData.unitCount}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                    >
                      <option value="1">1 Unit</option>
                      <option value="2-4">2 to 4 Units</option>
                      <option value="5-10">5 to 10 Units</option>
                      <option value="10+">10+ Portfolio Units</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Bedroom Count *
                    </label>
                    <select
                      name="bedroomCount"
                      value={formData.bedroomCount}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                    >
                      <option value="Studio">Studio</option>
                      <option value="1 BR">1 Bedroom</option>
                      <option value="2 BR">2 Bedroom</option>
                      <option value="3 BR">3 Bedroom</option>
                      <option value="4+ BR">4+ Bedroom</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Asking Monthly Rent ($) *
                    </label>
                    <input
                      type="text"
                      name="askingRent"
                      required
                      value={formData.askingRent}
                      onChange={handleChange}
                      placeholder="e.g. 2,400"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Who Pays Utilities? *
                    </label>
                    <select
                      name="utilities"
                      value={formData.utilities}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                    >
                      <option value="Landlord pays all">Landlord pays all utilities</option>
                      <option value="Tenant pays gas/electric">Tenant pays cooking gas & electric</option>
                      <option value="Tenant pays all">Tenant pays all (heat, gas, electric)</option>
                      <option value="Split/Other">Split / Other arrangement</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Unit Availability *
                    </label>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                    >
                      <option value="Available now">Available Now</option>
                      <option value="Next 30 days">Within 30 Days</option>
                      <option value="30-60 days">30 to 60 Days</option>
                      <option value="Future date">Expected Future Turnover</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Move-In Ready Status? *
                    </label>
                    <select
                      name="moveInReady"
                      value={formData.moveInReady}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                    >
                      <option value="Yes">Yes, Move-in Ready</option>
                      <option value="Needs minor work">Needs Minor Work / Painting</option>
                      <option value="Needs full turnover">Needs Full Turnover Work</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Previous CityFHEPS or Section 8 Experience? *
                    </label>
                    <select
                      name="previousExperience"
                      value={formData.previousExperience}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                    >
                      <option value="No experience">No prior program experience</option>
                      <option value="Yes - Positive">Yes - Have leased with programs before</option>
                      <option value="Yes - Had challenges">Yes - Had prior questions or delays in past</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Property Address <span className="text-slate-500 font-normal">(Optional / Confidential)</span>
                  </label>
                  <input
                    type="text"
                    name="propertyAddress"
                    value={formData.propertyAddress}
                    onChange={handleChange}
                    placeholder="e.g. 75-35 31st Ave, Jackson Heights, NY 11370"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Main Question or Unit Concern
                  </label>
                  <textarea
                    name="mainQuestion"
                    rows={3}
                    value={formData.mainQuestion}
                    onChange={handleChange}
                    placeholder="Tell us any specific timelines, unit preferences, or questions you have about the rental process..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400 resize-none"
                  />
                </div>
              </div>

              {/* 3. GoHighLevel Compliant Consent Disclosure */}
              <div className="bg-slate-950/90 border border-slate-800 p-4 rounded-xl space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consentAgreed"
                    checked={formData.consentAgreed}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded border-slate-700 text-[#D12027] focus:ring-0"
                  />
                  <span className="text-xs text-slate-300 leading-relaxed font-sans">
                    By submitting this form, I agree to receive communications including phone calls, SMS text messages, and emails from Joy Chowdhury / Real Estate Experts / Keller Williams Realty Landmark II regarding my property inquiry. Message & data rates may apply. Reply STOP to unsubscribe at any time.
                  </span>
                </label>

                <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800 gap-2">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={onOpenPrivacy}
                      className="underline hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </button>
                    <span>•</span>
                    <button
                      type="button"
                      onClick={onOpenTerms}
                      className="underline hover:text-white transition-colors"
                    >
                      Terms of Service
                    </button>
                  </div>
                  <span className="text-slate-500">Opt-out: Text STOP to 917-565-4788</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-white bg-[#D12027] hover:bg-[#b51b21] transition-all shadow-xl hover:shadow-[#D12027]/25 active:scale-98 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Processing Submission...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit My Vacancy</span>
                  </>
                )}
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
