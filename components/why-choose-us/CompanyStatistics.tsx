import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const stats = [
  {
    value: 'A+',
    label: 'Quality Assured',
    subtext: 'Across Manchester & Greater Manchester'
  },
  {
    value: '5★',
    label: 'Average Google Rating',
    subtext: 'Consistently excellent reviews'
  },
  {
    value: '100%',
    label: 'Fully Insured',
    subtext: 'Public liability on every clean'
  },
  {
    value: '5+',
    label: 'Years Experience',
    subtext: 'Trusted by Manchester since day one',
    noBorder: true
  }
];

export default function CompanyStatistics() {
  return (
    <section className="w-full bg-[#eaf4fd] border-t border-b border-[#c5dff0]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={index * 50}>
            <div
              className="flex flex-col items-center justify-center text-center py-10 md:py-0 md:h-[269px]"
            >
              <div className={`flex flex-col items-center justify-center text-center md:h-[123px] w-full ${
                !stat.noBorder ? 'md:border-r md:border-[#c5dff0]' : ''
              }`}>
                <span className="font-plus-jakarta-sans font-extrabold text-[36px] md:text-[52px] leading-[1] text-[#2a8fd4] mb-2">
                  {stat.value}
                </span>
                <span className="font-inter font-semibold text-[13px] md:text-sm text-[#1c2d3e] mb-1">
                  {stat.label}
                </span>
                <span className="font-inter text-[11px] md:text-[12.5px] text-[#8fa3b8] max-w-[180px]">
                  {stat.subtext}
                </span>
              </div>
            </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
