import React, { useState } from 'react';
import { Calendar, MapPin, User, Phone, ChevronRight, Award, Heart, Star, ShieldCheck, Tag } from 'lucide-react';
import { Translation } from '../data/translations';

interface HeroProps {
  t: Translation;
  onFormSubmit: (data: { name: string; phone: string; slot: string; date: string; age?: string; formSource?: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ t, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    date: new Date().toISOString().split('T')[0],
    slot: t.hero.slotOptions[0] || '10:00 AM - 07:00 PM'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onFormSubmit({
        ...formData,
        formSource: 'Consultation Registration (Hero Form)'
      });
    }, 600);
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF6FA] min-h-0 lg:min-h-[calc(100vh-8.5rem)] flex flex-col justify-center items-center py-6 sm:py-10 lg:py-12 px-3.5 sm:px-6 lg:px-12 xl:px-20">
      
      {/* Background Hero Image */}
      <div 
        className="absolute inset-0 bg-cover bg-right-top lg:bg-[right_top] pointer-events-none opacity-85 transition-opacity duration-700"
        style={{ backgroundImage: "url('/hero-bg-ivf.png')" }}
      />
      
      {/* Soft gradient overlays so text has crisp contrast while background art shines through */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6FA] via-[#FAF6FA]/85 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6FA]/80 via-transparent to-[#FAF6FA]/30 pointer-events-none" />

      {/* Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#9A389F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#652D6C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-0 sm:px-4 lg:px-6 relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          
          {/* Left Column: Headlines & Pricing (Equal 50% width & balanced height) */}
          <div className="flex flex-col justify-between space-y-4 sm:space-y-6 order-2 lg:order-1 h-full">
            
            <div className="space-y-3.5 sm:space-y-4">
              {/* Brand Eyebrow: VIZAG IVF */}
              {t.hero.brandTag && (
                <div className="font-poppins font-semibold text-xs sm:text-sm tracking-widest text-[#652D6C] uppercase flex items-center gap-2">
                  <span className="w-4 sm:w-5 h-0.5 bg-[#9A389F]/50 rounded-full inline-block"></span>
                  <span>{t.hero.brandTag}</span>
                </div>
              )}

              {/* Main Headline */}
              <h1 className="tracking-tight text-[#2A102D] leading-[1.18]">
                <span className="block font-poppins font-extrabold text-2xl sm:text-4xl lg:text-[40px] text-[#2A102D]">
                  {t.hero.headlinePart1}
                </span>
                <span className="block font-poppins font-extrabold italic text-2xl sm:text-4xl lg:text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#652D6C] via-[#9A389F] to-[#7E3282] mt-1 sm:mt-2">
                  {t.hero.headlineHighlight}
                </span>
              </h1>

              {/* Tagline Line */}
              {t.hero.tagline && (
                <p className="text-sm sm:text-base lg:text-lg font-bold text-[#4D1F53] tracking-tight">
                  {t.hero.tagline}
                </p>
              )}

              {/* Subtext */}
              <p className="text-xs sm:text-sm lg:text-base text-[#56335B] leading-relaxed max-w-xl font-medium">
                {t.hero.subtext}
              </p>
            </div>

            {/* NMC Compliant Pricing Information Card */}
            <div className="text-white shadow-lg sm:shadow-xl relative overflow-hidden border border-yellow-300/30 bg-gradient-to-r from-[#4A164E] via-[#652D6C] to-[#8F2D95] p-4 sm:p-6 rounded-2xl sm:rounded-3xl mt-auto">
              <div className="relative z-10 space-y-2.5">
                {/* Badge Bar */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider bg-yellow-400 text-[#4D1F53] px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5 w-fit">
                    <Award className="w-3.5 h-3.5 text-[#4D1F53]" />
                    <span>{t.hero.offerBadge}</span>
                  </span>
                </div>

                {/* Compliant Price Text */}
                <div className="pt-0.5 space-y-1.5">
                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-yellow-300 tracking-tight leading-snug">
                    {t.hero.offerText}
                  </h3>

                  <p className="text-xs sm:text-sm text-purple-100/90 font-medium leading-snug">
                    {t.hero.offerNote}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Registration Form (Equal 50% width & balanced height) */}
          <div id="booking-form" className="order-1 lg:order-2 h-full flex flex-col">
            <div className="bg-white/95 backdrop-blur-md relative shadow-xl border border-[#652D6C]/20 p-5 sm:p-8 lg:p-9 rounded-2xl sm:rounded-3xl h-full flex flex-col justify-between">
              
              {/* Form Header */}
              <div className="text-center mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#2A102D] tracking-tight">
                  {t.hero.formTitle}
                </h2>
                <p className="text-xs sm:text-sm text-[#56335B] mt-1 font-medium">
                  {t.hero.formSubtitle}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 flex-1 flex flex-col justify-between">
                
                {/* Full Name Field */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#2A102D] mb-1.5">
                    {t.hero.fullNameLabel}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 sm:w-5 sm:h-5 absolute left-3.5 top-3.5 text-[#652D6C]" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.hero.fullNamePlaceholder}
                      className="w-full pl-10 sm:pl-11 pr-4 py-2.5 sm:py-3 text-xs sm:text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-medium text-[#2A102D] shadow-xs transition-all"
                    />
                  </div>
                </div>

                {/* Mobile & Age Row */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5">
                  <div className="col-span-2">
                    <label className="block text-xs sm:text-sm font-bold text-[#2A102D] mb-1.5">
                      {t.hero.mobileLabel}
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 absolute left-3.5 top-3.5 text-[#652D6C]" />
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.hero.mobilePlaceholder}
                        className="w-full pl-10 sm:pl-11 pr-3 py-2.5 sm:py-3 text-xs sm:text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-medium text-[#2A102D] shadow-xs transition-all"
                      />
                    </div>
                  </div>

                  <div className="col-span-1">
                    <label className="block text-xs sm:text-sm font-bold text-[#2A102D] mb-1.5 truncate">
                      {t.hero.ageLabel}
                    </label>
                    <input
                      type="number"
                      min="18"
                      max="60"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      placeholder={t.hero.agePlaceholder}
                      className="w-full px-2 py-2.5 sm:py-3 text-xs sm:text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-medium text-center text-[#2A102D] shadow-xs transition-all"
                    />
                  </div>
                </div>

                {/* Date & Time Slot Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#2A102D] mb-1.5">
                      {t.hero.dateLabel}
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 absolute left-3.5 top-3.5 text-[#652D6C] pointer-events-none" />
                      <input
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-10 sm:pl-11 pr-3 py-2.5 sm:py-3 text-xs sm:text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-semibold text-[#2A102D] shadow-xs transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#2A102D] mb-1.5">
                      {t.hero.slotLabel}
                    </label>
                    <select
                      value={formData.slot}
                      onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                      className="w-full px-3 py-2.5 sm:py-3 text-xs sm:text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-semibold text-[#2A102D] shadow-xs transition-all cursor-pointer"
                    >
                      {t.hero.slotOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-accent rounded-xl font-extrabold text-sm sm:text-base py-3 sm:py-4 px-5 flex items-center justify-center gap-2 shadow-md mt-2 group hover:scale-[1.01] active:scale-95 transition-all cursor-pointer"
                >
                  <span>{isSubmitting ? t.hero.submitting : t.hero.submitButton}</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-[11px] sm:text-xs text-center text-[#56335B] font-medium pt-0.5 flex items-center justify-center gap-1">
                  <span>🔒</span>
                  <span>{t.hero.privacyNote}</span>
                </p>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
