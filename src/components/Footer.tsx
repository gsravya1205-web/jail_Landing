import React from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { Translation } from '../data/translations';

interface FooterProps {
  t: Translation;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  const mapDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Vizag+IVF+Centre+Jail+Road+Opp+Veterinary+Hospital+Visakhapatnam+530020&dir_action=navigate";

  return (
    <footer className="bg-gradient-to-b from-[#4D1F53] to-[#2A102D] text-white pt-6 sm:pt-8 pb-20 lg:pb-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 pb-5 sm:pb-6 border-b border-white/15">
          
          {/* Brand & About */}
          <div className="lg:col-span-4 space-y-2 sm:space-y-2.5">
            {/* Brand Logos with white background */}
            <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg">
              <a href="#" className="focus:outline-none hover:opacity-95 transition-opacity">
                <img 
                  src="/medcy-logo.png" 
                  alt="Medcy IVF Logo" 
                  className="h-5 sm:h-6 w-auto object-contain" 
                />
              </a>
              <span className="h-3.5 sm:h-4 w-px bg-gray-300" aria-hidden="true"></span>
              <a href="#" className="focus:outline-none hover:opacity-95 transition-opacity">
                <img 
                  src="/vizag-ivf-logo.png" 
                  alt="Vizag IVF Centre Jail Road Logo" 
                  className="h-5 sm:h-6 w-auto object-contain" 
                />
              </a>
            </div>

            <p className="text-xs text-purple-200/80 font-medium leading-relaxed">
              {t.footer.aboutText}
            </p>
          </div>

          {/* Location & Contact Info */}
          <div className="lg:col-span-4 space-y-2 sm:space-y-2.5">
            <h4 className="text-xs sm:text-sm font-extrabold text-white border-l-4 border-[#9A389F] pl-2.5">
              {t.footer.addressTitle}
            </h4>

            <ul className="space-y-2 text-xs sm:text-[13px] text-purple-200/90 font-medium">
              <li className="flex items-start gap-2 group">
                <MapPin className="w-3.5 h-3.5 text-[#9A389F] shrink-0 mt-0.5" />
                <a 
                  href={mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-300 transition-colors font-medium underline-offset-4 hover:underline leading-relaxed"
                  title="Click to navigate on Google Maps"
                >
                  {t.footer.addressValue}
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#9A389F] shrink-0" />
                <a href="tel:+919502534222" className="hover:text-white font-bold transition-colors">
                  {t.footer.phoneValue}
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#9A389F] shrink-0" />
                <span>{t.footer.hoursValue}</span>
              </li>
            </ul>
          </div>

          {/* Interactive Jail Road Map */}
          <div className="lg:col-span-4 space-y-2 sm:space-y-2.5">
            <h4 className="text-xs sm:text-sm font-extrabold text-white border-l-4 border-[#9A389F] pl-2.5">
              Location Map (Jail Road, Visakhapatnam)
            </h4>

            <a
              href={mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full max-w-[260px] h-24 sm:h-28 rounded-xl overflow-hidden border border-white/20 shadow-md group cursor-pointer"
              title="Click anywhere on map to open Google Maps navigation to Jail Road Centre"
            >
              {/* Map Iframe */}
              <iframe
                title="Vizag IVF Centre Jail Road Visakhapatnam Location"
                src="https://maps.google.com/maps?q=Vizag+IVF+Centre,+Jail+Road,+Opposite+Veterinary+Hospital,+Visakhapatnam,+Andhra+Pradesh+530020&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="pointer-events-none group-hover:scale-105 transition-transform duration-300"
              />

              {/* View on Google Maps Overlay Badge */}
              <div className="absolute bottom-1.5 right-1.5 bg-[#652D6C] group-hover:bg-[#9A389F] text-white px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold shadow-lg flex items-center gap-1 transition-all z-10 border border-white/20">
                <span>Open in Maps</span>
                <ExternalLink className="w-2.5 h-2.5 text-purple-200" />
              </div>
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-3.5 sm:pt-4 text-center text-[11px] text-purple-300/70 font-medium">
          <p>{t.footer.copyright}</p>
        </div>

      </div>
    </footer>
  );
};
