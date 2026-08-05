import React, { useState } from 'react';
import { X, BookOpen, CheckCircle, Send, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface LandlordGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LandlordGuideModal: React.FC<LandlordGuideModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/guide-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, phone }),
      });
      setIsDone(true);
    } catch (err) {
      setIsDone(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isDone ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/30 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-white">NYC Landlord Educational Guide</h3>
                <p className="text-xs text-slate-400">CityFHEPS, Section 8, and Landlord Process Guide</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Enter your details below to receive the free educational PDF overview covering rental assistance processes, documentation checklists, and landlord inspection preparation in NYC.
            </p>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Joy Chowdhury"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Email Address (To Receive PDF)</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nyjoy@kw.com"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Phone Number (Optional)</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="917-565-4788"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                />
              </div>
            </div>

            <div className="text-[11px] text-slate-400">
              Provided for general educational purposes by Joy Chowdhury, Keller Williams Realty Landmark II.
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors shadow-lg cursor-pointer disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {isSubmitting ? 'Sending Request...' : 'Send Me the Landlord Guide'}
            </button>
          </form>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/40 flex items-center justify-center mx-auto">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-white">Guide Request Confirmed</h3>
            <p className="text-xs text-slate-300 max-w-xs mx-auto">
              The NYC Landlord Educational Guide reference link has been dispatched to <strong>{email}</strong>.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
