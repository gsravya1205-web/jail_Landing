import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { Translation } from '../data/translations';

interface MobileBottomBarProps {
  t: Translation;
  onBookClick: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ t, onBookClick }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-[#652D6C]/20 px-3 pt-2 pb-[max(0.625rem,env(safe-area-inset-bottom,0.625rem))] shadow-[0_-8px_30px_rgba(101,45,108,0.15)] flex items-center gap-2.5">
      <a
        href="tel:+919502534222"
        className="flex-1 bg-[#FAF3FB] text-[#652D6C] border border-[#652D6C]/30 hover:bg-[#652D6C] hover:text-white font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 text-xs transition-colors min-h-[44px] active:scale-95"
      >
        <Phone className="w-3.5 h-3.5 text-[#9A389F] animate-pulse shrink-0" />
        <span className="truncate">{t.nav.phone}</span>
      </a>

      <button
        onClick={onBookClick}
        className="flex-1 btn-accent py-2.5 px-3 rounded-xl font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md min-h-[44px] active:scale-95 cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5 text-pink-200 shrink-0" />
        <span className="truncate">{t.nav.bookAppointment}</span>
      </button>
    </div>
  );
};
