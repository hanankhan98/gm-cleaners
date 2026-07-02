import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const stats = [
  { value: '500', suffix: '+', label: 'Jobs Completed' },
  { value: '100', suffix: '%', label: 'Satisfaction Rate' },
  { value: '5', suffix: '★', label: 'Average Rating' },
  { value: '5', suffix: '+', label: 'Years Experience' },
];

export default function ComplementaryGalleryStatistics() {
  return (
    <section className="w-full bg-[#1a2f45]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <AnimateOnScroll animation="fade-up">
        <div className="flex flex-wrap items-center justify-between py-12 md:py-16 gap-y-8">
          {stats.map((stat, idx) => (
            <React.Fragment key={stat.label}>
              {idx > 0 && (
                <div className="hidden md:block w-px h-14 bg-[rgba(255,255,255,0.1)]" />
              )}
              <div className="flex-1 flex flex-col items-center gap-[11px] min-w-[140px]">
                <div className="font-plus-jakarta-sans text-center">
                  <span className="text-[#5bb8f5] text-[32px] md:text-[48px] font-extrabold leading-[32px] md:leading-[48px]">
                    {stat.value}
                  </span>
                  <span className="text-white text-[32px] md:text-[48px] leading-[32px] md:leading-[48px]">
                    {stat.suffix}
                  </span>
                </div>
                <div className="font-inter text-[13.5px] font-medium text-[rgba(255,255,255,0.6)] text-center">
                  {stat.label}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
