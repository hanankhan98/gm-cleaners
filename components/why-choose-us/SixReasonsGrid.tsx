import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const reasons = [
  {
    id: '01',
    icon: '🛡️',
    title: 'Comprehensive Insurance Coverage',
    description: '£5M/€5M Public Liability and £10M/€10M Employers Liability coverage for complete peace of mind across commercial and residential properties.',
    bullets: ['Fully insured commercial cleaning', 'Residential and business cover', 'Peace of mind on every clean']
  },
  {
    id: '02',
    icon: '✅',
    title: 'DBS-Checked & Trained Staff',
    description: 'Dependable, background-checked cleaning specialists providing flexible daily, weekly, or overflow support tailored to your schedule.',
    bullets: ['DBS checked cleaners Manchester', 'Reference verified before hiring', 'Professional and respectful always']
  },
  {
    id: '03',
    icon: '🎁',
    title: 'Exclusive CitySuites Aparthotel Offer',
    description: 'Get 20% off your first month of professional cleaning services with zero long-term contracts required.',
    bullets: ['20% off your first month', 'No long-term contract required', 'Professional commercial cleaning']
  },
  {
    id: '04',
    icon: '💷',
    title: 'Cheapest Local Manchester Rates',
    description: 'Unbeatable pricing guaranteed for all Manchester residents without compromising on quality.',
    bullets: ['Local Manchester pricing', 'Clear quotes with no hidden fees', 'Quality service at a fair rate']
  }
];

export default function SixReasonsGrid() {
  return (
    <section className="w-full bg-[#1a2f45] py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        
        <AnimateOnScroll animation="fade-up">
        {/* Tag */}
        <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
          <div className="w-[5px] h-[14px] rounded-sm bg-[#5bb8f5] shrink-0 hidden md:block" />
          <span className="font-inter font-bold text-[11px] tracking-[1.32px] uppercase text-[#5bb8f5]">
            Our Promise
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-plus-jakarta-sans font-bold text-[28px] md:text-[44px] tracking-[-0.88px] leading-[1.18] text-white max-w-[910px] mb-4 text-center md:text-left">
          Reasons Manchester Chooses MZ Cleaners
        </h2>

        {/* Subtitle */}
        <p className="font-inter text-[15px] md:text-[17px] leading-[1.75] text-[rgba(255,255,255,0.68)] max-w-[550px] mb-16 text-center md:text-left mx-auto md:mx-0">
          Trust guarantees, local pricing benefits, and flexible support for Manchester homes and businesses.
        </p>
        </AnimateOnScroll>

        {/* Grid */}
        <AnimateOnScroll animation="fade-up" delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason) => (
            <div 
              key={reason.id}
              className="relative rounded-[18px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.09)] p-8 md:p-10 hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300"
            >
              {/* Header Row */}
              <div className="flex items-start justify-between mb-5">
                {/* Icon */}
                <div className="w-[52px] h-[52px] rounded-[14px] bg-[rgba(42,143,212,0.18)] border border-[rgba(42,143,212,0.3)] flex items-center justify-center shrink-0">
                  <span className="text-[24px] leading-none">{reason.icon}</span>
                </div>
                {/* Number */}
                <span className="font-plus-jakarta-sans font-extrabold text-[48px] leading-[48px] text-[rgba(255,255,255,0.05)] select-none">
                  {reason.id}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-plus-jakarta-sans font-bold text-[18px] text-white mb-4">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-[14.5px] leading-[24.94px] text-[rgba(255,255,255,0.62)] mb-6">
                {reason.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-[18px]">
                {reason.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-[5px] h-[5px] rounded-full bg-[#5bb8f5] shrink-0" />
                    <span className="font-inter text-[14px] text-[rgba(255,255,255,0.85)]">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
