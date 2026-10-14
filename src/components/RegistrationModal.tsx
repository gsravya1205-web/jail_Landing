import React, { useState } from 'react';
import { X, Calendar, User, Phone, ChevronRight, Clock, ShieldCheck } from 'lucide-react';
import { Translation } from '../data/translations';
import { getUpcomingSaturdays } from '../utils/saturdays';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFormSubmit: (data: { name: string; phone: string; slot: string; date: string; age?: string; formSource?: string }) => void;
  t: Translation;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, onFormSubmit, t }) => {
  const isTe = t.nav.brandName.includes('మెడ్సీ');
  const saturdayOptions = getUpcomingSaturdays(isTe ? 'te' : 'en');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    date: saturdayOptions[0]?.value || '',
    slot: t.hero.slotOptions[0] || '10:00 AM - 06:00 PM'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onFormSubmit({
        ...formData,
        formSource: 'FREE MEDICAL CAMP Consultation Registration'
      });
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="glass-card bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full p-4.5 sm:p-8 relative shadow-2xl border border-[#652D6C]/30 text-[#2A102D] my-auto max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-1.5 sm:p-2 rounded-full bg-[#FAF3FB] hover:bg-[#652D6C] text-[#652D6C] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 pr-6 pl-6 sm:px-0">
          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 bg-[#652D6C]/10 text-[#652D6C] text-[10px] sm:text-xs font-extrabold rounded-full uppercase tracking-wider mb-0.5 sm:mb-1">
            <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#9A389F]" />
            <span>{t.nav.freeCampBadge}</span>
          </div>

          <h2 className="text-xl sm:text-3xl font-extrabold text-[#2A102D]">
            {t.nav.campFormTitle}
          </h2>

          <p className="text-xs sm:text-sm text-[#56335B] font-medium max-w-sm mx-auto">
            {t.nav.campFormSubtitle}
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          
          {/* Full Name */}
          <div>
            <label className="block text-[11px] sm:text-xs font-bold text-[#2A102D] mb-1">
              {t.hero.fullNameLabel}
            </label>
            <div className="relative">
              <User className="w-4 h-4 absolute left-3 top-3 text-[#56335B]" />
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t.hero.fullNamePlaceholder}
                className="w-full pl-9 pr-3.5 py-2 sm:py-2.5 text-xs sm:text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-medium"
              />
            </div>
          </div>

          {/* Phone & Age (2 cols for phone, 1 col for age) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <div className="col-span-2">
              <label className="block text-[11px] sm:text-xs font-bold text-[#2A102D] mb-1">
                {t.hero.mobileLabel}
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 absolute left-3 top-3 text-[#56335B]" />
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={t.hero.mobilePlaceholder}
                  className="w-full pl-9 pr-2.5 py-2 sm:py-2.5 text-xs sm:text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-medium"
                />
              </div>
            </div>

            <div className="col-span-1">
              <label className="block text-[11px] sm:text-xs font-bold text-[#2A102D] mb-1 truncate">
                {t.hero.ageLabel}
              </label>
              <input
                type="number"
                min="18"
                max="60"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                placeholder={t.hero.agePlaceholder}
                className="w-full px-2 py-2 sm:py-2.5 text-xs sm:text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-medium text-center"
              />
            </div>
          </div>

          {/* Date & Slot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            <div>
              <label className="block text-[11px] sm:text-xs font-bold text-[#2A102D] mb-1">
                {t.hero.dateLabel}
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 absolute left-3 top-3 text-[#56335B] pointer-events-none" />
                <select
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full pl-9 pr-2.5 py-2 sm:py-2.5 text-xs sm:text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-semibold text-[#2A102D]"
                >
                  {saturdayOptions.map((sat) => (
                    <option key={sat.value} value={sat.value}>
                      {sat.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] sm:text-xs font-bold text-[#2A102D] mb-1">
                {t.hero.slotLabel}
              </label>
              <select
                value={formData.slot}
                onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                className="w-full px-2.5 py-2 sm:py-2.5 text-xs sm:text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-semibold text-[#2A102D]"
              >
                {t.hero.slotOptions.map((opt, i) => (
                  <option key={i} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-accent py-3 sm:py-3.5 px-5 rounded-xl font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-md mt-2 group active:scale-95 transition-all cursor-pointer"
          >
            <span>{isSubmitting ? t.hero.submitting : t.hero.submitButton}</span>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] text-[#56335B] font-medium pt-0.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>{t.hero.privacyNote}</span>
          </div>

        </form>

      </div>
    </div>
  );
};
