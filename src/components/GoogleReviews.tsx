import React from 'react';
import { Star, CheckCircle, ExternalLink, Quote } from 'lucide-react';
import { Translation } from '../data/translations';

interface GoogleReviewsProps {
  t: Translation;
}

export const GoogleReviews: React.FC<GoogleReviewsProps> = ({ t }) => {
  const reviews = t.reviews;

  // Colors for reviewer avatar gradients
  const avatarGradients = [
    'from-[#652D6C] to-[#9A389F]',
    'from-[#0F9D58] to-[#0B8043]',
    'from-[#4285F4] to-[#1A73E8]',
    'from-[#E37400] to-[#F4B400]'
  ];

  return (
    <section id="reviews" className="py-10 sm:py-14 lg:py-16 bg-[#FAF6FA] relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#9A389F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Google Rating Header Summary Card */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#652D6C]/15 shadow-sm text-center mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            
            {/* Google Logo */}
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span className="font-poppins font-bold text-xl sm:text-2xl text-gray-800">
                Google
              </span>
            </div>

            {/* Divider */}
            <span className="hidden sm:inline-block w-px h-8 bg-gray-200" />

            {/* Rating Stars & Count */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-extrabold text-[#2A102D]">
                  {reviews.rating}
                </span>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#56335B] font-medium">
                {reviews.reviewCount}
              </p>
            </div>

          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 space-y-1.5 sm:space-y-2">
          <div className="inline-block px-3 py-1 rounded-full bg-[#FAF3FB] border border-[#652D6C]/20 text-[#652D6C] text-[10px] sm:text-xs font-black uppercase tracking-wider mb-1">
            {reviews.badge}
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#2A102D] tracking-tight">
            {reviews.title}
          </h2>
          <p className="text-xs sm:text-base lg:text-lg text-[#56335B] font-medium leading-relaxed">
            {reviews.subtitle}
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {reviews.list.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-[#652D6C]/15 shadow-sm hover:shadow-xl hover:border-[#9A389F]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Reviewer Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    {/* Reviewer Avatar */}
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr ${avatarGradients[idx % avatarGradients.length]} text-white font-extrabold text-xs sm:text-sm flex items-center justify-center shadow-xs shrink-0`}>
                      {review.initials}
                    </div>

                    <div>
                      <h3 className="text-xs sm:text-sm font-extrabold text-[#2A102D] leading-tight">
                        {review.name}
                      </h3>
                      <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-blue-600 font-bold mt-0.5">
                        <CheckCircle className="w-3 h-3 fill-blue-50 text-blue-600 shrink-0" />
                        <span>{reviews.verifiedBadge}</span>
                      </div>
                    </div>
                  </div>

                  {/* Google G mini logo on card */}
                  <svg className="w-4 h-4 shrink-0 opacity-80" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                </div>

                {/* Stars and Date */}
                <div className="flex items-center justify-between gap-1 mb-2.5">
                  <div className="flex items-center text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-400 font-medium">
                    {review.date}
                  </span>
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-[#56335B] leading-relaxed font-medium line-clamp-6 group-hover:line-clamp-none transition-all">
                  "{review.comment}"
                </p>
              </div>

              {/* Bottom Quote Accent */}
              <div className="pt-3 mt-3 border-t border-[#652D6C]/10 flex items-center justify-between text-[11px] text-[#652D6C] font-semibold">
                <span className="flex items-center gap-1">
                  <Quote className="w-3 h-3 text-[#9A389F]" />
                  <span>Vizag IVF Centre Jail Road</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View on Google Redirect Button */}
        <div className="mt-8 sm:mt-12 text-center">
          <a
            href={reviews.googleSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white hover:bg-[#FAF3FB] text-[#652D6C] font-extrabold text-xs sm:text-sm rounded-full border border-[#652D6C]/30 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all group"
          >
            {/* Google G icon */}
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span>{reviews.viewAllButton}</span>
            <ExternalLink className="w-4 h-4 text-[#9A389F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
