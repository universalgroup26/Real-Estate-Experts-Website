import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookingCalendar } from '../components/BookingCalendar';
import { BUSINESS_INFO } from '../data/content';
import { Phone, Mail, MapPin, Globe, Clock, CheckCircle2, MessageSquare, Send, Languages, Building } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenPrivacy, onOpenTerms }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Landlord Vacancy Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send message lead to server / API
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          mobilePhone: formData.phone,
          email: formData.email,
          role: 'Property Owner / Manager',
          notes: `[Contact Form - ${formData.subject}] ${formData.message}`,
          borough: 'NYC Metro',
          unitCount: '1',
          bedroomCount: 'General Inquiry',
          askingRent: '0',
          availability: 'Immediate',
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      
      {/* Page Hero Header */}
      <div className="relative bg-gradient-to-b from-[#0B192C] via-slate-900 to-slate-900 pt-12 pb-20 border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-400/10 text-teal-300 border border-teal-400/20 uppercase tracking-wider">
              Direct Landlord Support
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Contact & Book Consultation
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Connect directly with Joy Chowdhury for landlord inquiries, unit voucher evaluations, or property management coordination.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Contact Info & Direct Quick Connect Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4 hover:border-teal-500/40 transition-all shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/30">
              <Phone className="w-6 h-6 text-[#D12027]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-serif font-bold text-white">Call or Text Direct</h3>
              <p className="text-xs text-slate-400">Available for immediate landlord calls & SMS</p>
            </div>
            <div className="pt-2 text-sm">
              <a href={`tel:${BUSINESS_INFO.mobilePhone}`} className="text-teal-400 font-bold hover:underline block">
                {BUSINESS_INFO.mobilePhone}
              </a>
              <div className="text-xs text-slate-400 pt-1">Office: 347-846-1200</div>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4 hover:border-teal-500/40 transition-all shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/30">
              <Mail className="w-6 h-6 text-teal-400" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-serif font-bold text-white">Email Consultation</h3>
              <p className="text-xs text-slate-400">Send property specs or document questions</p>
            </div>
            <div className="pt-2 text-xs">
              <a href={`mailto:${BUSINESS_INFO.email}`} className="text-teal-400 font-bold hover:underline block truncate">
                {BUSINESS_INFO.email}
              </a>
              <div className="text-slate-400 pt-1">Response within 24 business hours</div>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4 hover:border-teal-500/40 transition-all shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/30">
              <MapPin className="w-6 h-6 text-[#D12027]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-serif font-bold text-white">Office Location</h3>
              <p className="text-xs text-slate-400">{BUSINESS_INFO.brokerage}</p>
            </div>
            <div className="pt-2 text-xs text-slate-300">
              {BUSINESS_INFO.address}
            </div>
          </div>

        </div>

        {/* Section 1: GoHighLevel Interactive Booking Calendar */}
        <div id="calendar-booking-section">
          <BookingCalendar />
        </div>

        {/* Section 2: Direct Contact Form & Bengali Support */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Send a Quick Message</span>
                <h2 className="text-3xl font-serif font-bold text-white">Landlord Inquiry Form</h2>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Prefer sending a message online? Submit your inquiry below and Joy Chowdhury will review your message promptly.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2 text-xs">
                <div className="flex items-center gap-2 text-teal-400 font-bold font-serif text-sm">
                  <Languages className="w-4 h-4" /> Bengali Language Support (বাংলা)
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  আপনি বাংলায়ও কথা বলতে পারেন। যেকোনো বাড়ির বা ফ্ল্যাটের ব্যাপারে তথ্যের জন্য জয় চৌধুরীর সাথে যোগাযোগ করুন।
                </p>
              </div>

              <div className="text-[11px] text-slate-500">
                {BUSINESS_INFO.complianceDisclaimer}
              </div>
            </div>

            <div className="lg:col-span-7">
              {submitted ? (
                <div className="bg-slate-900 border border-teal-500/40 rounded-2xl p-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out. Joy Chowdhury will review your message and reach out to you directly at <strong className="text-white">{formData.phone || formData.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Joynal Abedin"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-teal-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Mobile Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 917-565-4788"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-teal-400"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. landlord@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-teal-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Inquiry Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-teal-400"
                    >
                      <option value="Landlord Vacancy Inquiry">Landlord Vacancy Intake</option>
                      <option value="CityFHEPS Voucher Question">CityFHEPS / Section 8 Voucher Question</option>
                      <option value="Property Manager Portfolio Support">Property Manager Portfolio Consultation</option>
                      <option value="Co-Broke Agent Cooperation">Co-Broke Agent Cooperation</option>
                      <option value="General Question">General Real Estate Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Message Details *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your property location, unit size, or questions..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-xl text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      {loading ? 'Sending Message...' : 'Submit Message to Joy Chowdhury'}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
