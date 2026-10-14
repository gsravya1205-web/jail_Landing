import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { Translation } from '../data/translations';

interface DoctorsSectionProps {
  t: Translation;
  onDoctorClick?: (doctorName: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ t, onDoctorClick }) => {
  return (
    <section id="doctors" className="py-6 sm:py-10 lg:py-12 bg-gradient-to-b from-[#FAF6FA] via-[#FFFFFF] to-[#FAF6FA] relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-8 space-y-1.5 sm:space-y-2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#2A102D] tracking-tight">
            {t.doctors.title}
          </h2>

          <p className="text-xs sm:text-base lg:text-lg text-[#56335B] font-medium leading-relaxed">
            {t.doctors.subtitle}
          </p>
        </div>

        {/* Doctor Cards Grid / Centered Card */}
        <div className={t.doctors.list.length === 1 ? "max-w-2xl lg:max-w-3xl mx-auto" : "grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8"}>
          {t.doctors.list.map((doctor) => (
            <div
              key={doctor.id}
              className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 relative overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl"
            >
              
              {/* Main Card Content */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                
                {/* Left Side: Avatar Box & Name Badge Pill */}
                <div className="flex flex-col items-center shrink-0 w-full sm:w-auto">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-xl sm:rounded-2xl p-1 bg-gradient-to-tr from-[#652D6C] via-[#9A389F] to-[#4D1F53] shadow-md">
                    <img
                      src={doctor.photo}
                      alt={doctor.name}
                      className="w-full h-full object-cover object-top rounded-lg sm:rounded-xl bg-white"
                      onError={(e) => {
                        (e.target as HTMLElement).setAttribute('src', '/dr-mounica.png');
                      }}
                    />
                  </div>

                  {/* Dark Purple Name Badge Pill Under Photo */}
                  <div className="mt-2.5 bg-[#652D6C] text-white px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-extrabold shadow-md tracking-wide text-center w-full max-w-[160px]">
                    {doctor.name}
                  </div>
                </div>

                {/* Right Side: Details & Qualifications */}
                <div className="space-y-2.5 sm:space-y-3 flex-1 w-full pt-1 sm:pt-0">
                  
                  {/* Doctor Name & Experience Badge Header Track */}
                  <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#2A102D] tracking-tight">
                      {doctor.name}
                    </h3>
                    <span className="inline-block px-3 py-0.5 sm:py-1 rounded-full bg-[#FAF3FB] border border-[#652D6C]/20 text-[#652D6C] text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-xs shrink-0">
                      {doctor.expBadge}
                    </span>
                  </div>

                  {/* Title / Designation */}
                  <p className="text-xs sm:text-sm font-bold text-[#652D6C]">
                    {doctor.title}
                  </p>

                  {/* Qualifications Pill Box */}
                  <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-[#FAF3FB] border border-[#652D6C]/15 flex items-start gap-2.5">
                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-[#9A389F] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm font-bold text-[#4D1F53] leading-snug">
                      {doctor.qualifications}
                    </p>
                  </div>

                  {/* Bio Description */}
                  <p className="text-xs sm:text-sm text-[#56335B] font-medium leading-relaxed">
                    {doctor.bio}
                  </p>

                </div>

              </div>

              {/* Bottom Achievement Ribbon Badge */}
              <div className="mt-4 pt-3.5 border-t border-[#652D6C]/10 flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#652D6C]">
                <Award className="w-4 h-4 text-[#9A389F] shrink-0" />
                <span>{doctor.achievementBadge}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
