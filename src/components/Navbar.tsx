import React from 'react';
import { Phone, Calendar, Globe, ChevronRight, MapPin } from 'lucide-react';
import { Language, Translation } from '../data/translations';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation;
  onBookClick: () => void;
  onOpenRegistrationModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t, onBookClick, onOpenRegistrationModal }) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/95 border-b border-[#652D6C]/15 shadow-sm transition-all duration-300">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Logos */}
        <div className="flex items-center gap-2 sm:gap-3.5 shrink-0">
          <a href="#" className="flex items-center group focus:outline-none">
            <img 
              src="/medcy-logo.png" 
              alt="Medcy IVF Logo" 
              className="h-7 sm:h-10 lg:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>
          <span className="h-5 sm:h-7 w-px bg-[#652D6C]/25" aria-hidden="true"></span>
          <a href="#" className="flex items-center group focus:outline-none">
            <img 
              src="/vizag-ivf-logo.png" 
              alt="Vizag IVF Centre Jail Road Logo" 
              className="h-7 sm:h-10 lg:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language Toggle Button (EN 1st default, TE option) */}
          <div className="flex items-center bg-[#FAF6FA] border border-[#652D6C]/25 rounded-full p-0.5 sm:p-1 shadow-inner shrink-0">
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-bold rounded-full transition-all flex items-center gap-1 cursor-pointer ${
                lang === 'en'
                  ? 'bg-[#652D6C] text-white shadow-sm'
                  : 'text-[#56335B] hover:text-[#652D6C]'
              }`}
              title="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => setLang('te')}
              className={`px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-bold rounded-full transition-all flex items-center gap-1 cursor-pointer ${
                lang === 'te'
                  ? 'bg-[#652D6C] text-white shadow-sm'
                  : 'text-[#56335B] hover:text-[#652D6C]'
              }`}
              title="తెలుగు మార్చండి"
            >
              తెలుగు
            </button>
          </div>

          {/* Direct Call Button (Desktop) */}
          <a
            href="tel:+919502534222"
            className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold text-[#652D6C] bg-[#FAF3FB] hover:bg-[#652D6C] hover:text-white border border-[#652D6C]/30 transition-all group shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-[#9A389F] group-hover:text-white transition-colors animate-pulse" />
            <span>{t.nav.phone}</span>
          </a>

          {/* Book Appointment CTA Button (Hidden on mobile, visible on sm/tablet/desktop) */}
          <button
            onClick={onBookClick}
            className="hidden sm:flex btn-primary-purple px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs lg:text-sm font-bold items-center gap-2 shadow-md shrink-0 cursor-pointer active:scale-95 transition-all whitespace-nowrap"
          >
            <Calendar className="w-4 h-4 text-pink-300 shrink-0" />
            <span>{t.nav.bookAppointment}</span>
          </button>
        </div>
      </div>

      {/* Top Reference Banner Bar Below Main Navbar */}
      <div 
        onClick={onOpenRegistrationModal}
        className="bg-gradient-to-r from-[#45144A] via-[#652D6C] to-[#8F2D95] text-white border-t border-b border-white/10 shadow-sm overflow-hidden py-1.5 sm:py-2 px-2.5 sm:px-6 cursor-pointer"
        title="Click to register for free medical camp"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-6">
          
          {/* Scrolling Banner Text Ticker (Full-width on mobile) */}
          <div className="flex-1 overflow-hidden relative mask-radial">
            <div className="animate-marquee flex items-center gap-6 sm:gap-8 whitespace-nowrap">
              {/* Loop track 1 */}
              <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                <span className="text-xs sm:text-base lg:text-lg font-extrabold text-[#FFCC00] tracking-tight">{t.nav.freeCampBadge}</span>
                <span className="text-[11px] sm:text-xs lg:text-sm font-semibold text-purple-100">{t.nav.topBannerTitle}</span>
                <span className="text-purple-100 font-medium text-[11px] sm:text-xs lg:text-sm inline-flex items-center gap-1 bg-white/10 px-2 sm:px-2.5 py-0.5 rounded-full border border-white/15">
                  <MapPin className="w-3 h-3 text-pink-300 shrink-0" />
                  <span>{lang === 'te' ? 'జైల్ రోడ్, విశాఖపట్నం' : 'Jail Road, Visakhapatnam'}</span>
                </span>
              </div>
              <span className="text-yellow-400/60 font-bold text-sm sm:text-base">•</span>

              <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                <span className="text-xs sm:text-base lg:text-lg font-extrabold text-[#FFCC00] tracking-tight">{t.nav.freeCampBadge}</span>
                <span className="text-[11px] sm:text-xs lg:text-sm font-semibold text-purple-100">{t.nav.topBannerTitle}</span>
                <span className="text-purple-100 font-medium text-[11px] sm:text-xs lg:text-sm inline-flex items-center gap-1 bg-white/10 px-2 sm:px-2.5 py-0.5 rounded-full border border-white/15">
                  <MapPin className="w-3 h-3 text-pink-300 shrink-0" />
                  <span>{lang === 'te' ? 'జైల్ రోడ్, విశాఖపట్నం' : 'Jail Road, Visakhapatnam'}</span>
                </span>
              </div>
              <span className="text-yellow-400/60 font-bold text-sm sm:text-base">•</span>

              {/* Loop track 2 */}
              <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                <span className="text-xs sm:text-base lg:text-lg font-extrabold text-[#FFCC00] tracking-tight">{t.nav.freeCampBadge}</span>
                <span className="text-[11px] sm:text-xs lg:text-sm font-semibold text-purple-100">{t.nav.topBannerTitle}</span>
                <span className="text-purple-100 font-medium text-[11px] sm:text-xs lg:text-sm inline-flex items-center gap-1 bg-white/10 px-2 sm:px-2.5 py-0.5 rounded-full border border-white/15">
                  <MapPin className="w-3 h-3 text-pink-300 shrink-0" />
                  <span>{lang === 'te' ? 'జైల్ రోడ్, విశాఖపట్నం' : 'Jail Road, Visakhapatnam'}</span>
                </span>
              </div>
              <span className="text-yellow-400/60 font-bold text-sm sm:text-base">•</span>

              <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                <span className="text-xs sm:text-base lg:text-lg font-extrabold text-[#FFCC00] tracking-tight">{t.nav.freeCampBadge}</span>
                <span className="text-[11px] sm:text-xs lg:text-sm font-semibold text-purple-100">{t.nav.topBannerTitle}</span>
                <span className="text-purple-100 font-medium text-[11px] sm:text-xs lg:text-sm inline-flex items-center gap-1 bg-white/10 px-2 sm:px-2.5 py-0.5 rounded-full border border-white/15">
                  <MapPin className="w-3 h-3 text-pink-300 shrink-0" />
                  <span>{lang === 'te' ? 'జైల్ రోడ్, విశాఖపట్నం' : 'Jail Road, Visakhapatnam'}</span>
                </span>
              </div>
              <span className="text-yellow-400/60 font-bold text-sm sm:text-base">•</span>
            </div>
          </div>

          {/* Right Side: Prominent Yellow CTA Button (Desktop & Tablet) */}
          <div className="hidden sm:block shrink-0 z-10">
            <button
              onClick={onOpenRegistrationModal}
              className="bg-[#FFCC00] hover:bg-[#FFD633] text-[#3D1443] font-extrabold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-1.5 shrink-0 group active:scale-95 border border-yellow-300/50 cursor-pointer text-xs sm:text-sm px-4 sm:px-5 py-1.5 sm:py-2 rounded-xl whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 text-[#3D1443] shrink-0" />
              <span>{t.nav.topBannerButton}</span>
              <ChevronRight className="w-4 h-4 text-[#3D1443] group-hover:translate-x-0.5 transition-transform shrink-0" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
