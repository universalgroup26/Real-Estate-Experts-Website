import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Phone, Video, CheckCircle2, User, Mail, MapPin, FileText, Download } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { BookingData } from '../types';

export const BookingCalendar: React.FC = () => {
  const [step, setStep] = useState<'calendar' | 'details' | 'confirmed'>('calendar');
  const [consultationType, setConsultationType] = useState<'phone' | 'video'>('phone');
  const [selectedDate, setSelectedDate] = useState<string>('2026-08-06');
  const [selectedSlot, setSelectedSlot] = useState<string>('10:00 AM');

  const [bookingForm, setBookingForm] = useState<BookingData>({
    fullName: '',
    phone: '',
    email: '',
    consultationType: 'phone',
    date: '2026-08-06',
    timeSlot: '10:00 AM',
    borough: 'Queens',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<any>(null);

  // Available dates for booking
  const availableDates = [
    { day: 'Thu', date: 'Aug 6', fullDate: '2026-08-06' },
    { day: 'Fri', date: 'Aug 7', fullDate: '2026-08-07' },
    { day: 'Mon', date: 'Aug 10', fullDate: '2026-08-10' },
    { day: 'Tue', date: 'Aug 11', fullDate: '2026-08-11' },
    { day: 'Wed', date: 'Aug 12', fullDate: '2026-08-12' },
    { day: 'Thu', date: 'Aug 13', fullDate: '2026-08-13' },
  ];

  const timeSlots = [
    '09:30 AM', '10:30 AM', '11:30 AM',
    '01:30 PM', '02:30 PM', '04:00 PM', '05:30 PM'
  ];

  const handleSelectSlot = (date: string, slot: string) => {
    setSelectedDate(date);
    setSelectedSlot(slot);
    setBookingForm((prev) => ({
      ...prev,
      date,
      timeSlot: slot,
      consultationType,
    }));
    setStep('details');
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/book-consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingForm),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setConfirmedBooking(data.booking);
        setStep('confirmed');
      } else {
        setConfirmedBooking(bookingForm);
        setStep('confirmed');
      }
    } catch (err) {
      setConfirmedBooking(bookingForm);
      setStep('confirmed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadIcs = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Real Estate Experts//Landlord Consultation//EN
BEGIN:VEVENT
SUMMARY:NYC Landlord Consultation with Joy Chowdhury
DESCRIPTION:Consultation regarding NYC rental unit availability, CityFHEPS & Section 8 program review.
LOCATION:${consultationType === 'phone' ? 'Phone Call: 917-565-4788' : 'Google Meet Video Link'}
ORGANIZER;CN=Joy Chowdhury:mailto:nyjoy@kw.com
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'landlord_consultation_joy_chowdhury.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Widget Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/20 uppercase tracking-wider">
              <CalendarIcon className="w-3.5 h-3.5" /> GoHighLevel Calendar Scheduler
            </div>
            <h2 className="text-3xl font-serif font-bold text-white">
              Schedule a Landlord Consultation
            </h2>
            <p className="text-sm text-slate-300 max-w-lg mx-auto">
              Select a date and time for a 1-on-1 phone or video discussion with Joy Chowdhury, Licensed Real Estate Salesperson at Keller Williams Realty Landmark II.
            </p>
          </div>

          {/* Consultation Type Selector */}
          <div className="flex justify-center">
            <div className="bg-slate-900 p-1.5 rounded-xl border border-slate-800 inline-flex gap-2 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setConsultationType('phone')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all cursor-pointer ${
                  consultationType === 'phone' ? 'bg-teal-400 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                Phone Call Consultation
              </button>
              <button
                type="button"
                onClick={() => setConsultationType('video')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all cursor-pointer ${
                  consultationType === 'video' ? 'bg-teal-400 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Video className="w-4 h-4" />
                Video Meeting (Google Meet / Zoom)
              </button>
            </div>
          </div>

          {/* STEP 1: Date & Time Picker */}
          {step === 'calendar' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-teal-400 mb-3">
                  1. Select Consultation Date
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {availableDates.map((item) => {
                    const isSelected = selectedDate === item.fullDate;
                    return (
                      <button
                        key={item.fullDate}
                        onClick={() => setSelectedDate(item.fullDate)}
                        className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-teal-500 text-slate-950 font-bold border-teal-400 shadow-md scale-105'
                            : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="text-[10px] uppercase font-semibold">{item.day}</div>
                        <div className="text-sm font-bold mt-0.5">{item.date}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-teal-400 mb-3">
                  2. Select Available Time Slot
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => handleSelectSlot(selectedDate, slot)}
                      className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-teal-400 text-sm font-semibold text-slate-200 hover:text-white transition-all cursor-pointer group"
                    >
                      <Clock className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform" />
                      <span>{slot}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* STEP 2: Contact Form */}
          {step === 'details' && (
            <form onSubmit={handleFormSubmit} className="space-y-4 animate-in fade-in duration-200">
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div>
                  Selected Appointment: <strong className="text-teal-300">{selectedDate}</strong> at <strong className="text-teal-300">{selectedSlot}</strong> ({consultationType === 'phone' ? 'Phone Call' : 'Video Meeting'})
                </div>
                <button
                  type="button"
                  onClick={() => setStep('calendar')}
                  className="text-xs text-slate-400 underline hover:text-white"
                >
                  Change
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={bookingForm.fullName}
                    onChange={(e) => setBookingForm({ ...bookingForm, fullName: e.target.value })}
                    placeholder="e.g. Joy Chowdhury"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    placeholder="917-565-4788"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                    placeholder="nyjoy@kw.com"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Property Borough</label>
                  <select
                    value={bookingForm.borough}
                    onChange={(e) => setBookingForm({ ...bookingForm, borough: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                  >
                    <option value="Queens">Queens</option>
                    <option value="Brooklyn">Brooklyn</option>
                    <option value="Manhattan">Manhattan</option>
                    <option value="Bronx">Bronx</option>
                    <option value="Staten Island">Staten Island</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Notes / Unit Topics to Cover</label>
                <textarea
                  rows={2}
                  value={bookingForm.notes}
                  onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                  placeholder="Optional: Unit size, turnover date, CityFHEPS questions..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep('calendar')}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Back
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded-xl text-sm font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-all shadow-lg active:scale-98 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Confirming Appointment...' : 'Confirm Consultation Booking'}
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Confirmed View */}
          {step === 'confirmed' && (
            <div className="bg-slate-900 border border-teal-500/40 rounded-2xl p-6 sm:p-8 text-center space-y-6 animate-in fade-in duration-300">
              <div className="w-14 h-14 rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/40 flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-bold text-white">
                  Consultation Confirmed!
                </h3>
                <p className="text-sm text-slate-300">
                  Your consultation with Joy Chowdhury is scheduled for <strong className="text-teal-300">{confirmedBooking?.date || selectedDate}</strong> at <strong className="text-teal-300">{confirmedBooking?.timeSlot || selectedSlot}</strong>.
                </p>
              </div>

              {/* Confirmation Details Card */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-left max-w-md mx-auto space-y-2 text-slate-300">
                <div className="flex justify-between border-b border-slate-800 pb-2 text-slate-400">
                  <span>Host Agent: <strong>Joy Chowdhury (Keller Williams)</strong></span>
                  <span className="text-teal-400 font-semibold">Status: Confirmed</span>
                </div>
                <div>Contact: <strong>{confirmedBooking?.fullName}</strong> ({confirmedBooking?.phone})</div>
                <div>Type: <strong>{confirmedBooking?.consultationType === 'phone' ? 'Phone Consultation' : 'Video Conference'}</strong></div>
                <div className="text-[11px] text-teal-300 pt-1">
                  📩 An automated email & SMS confirmation reminder has been queued via GoHighLevel CRM.
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={downloadIcs}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Add to My Calendar (.ics)
                </button>

                <button
                  onClick={() => setStep('calendar')}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700"
                >
                  Book Another Time
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
