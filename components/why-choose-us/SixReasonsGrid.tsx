import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const reasons = [
  {
    id: '01',
    icon: '🏆',
    title: 'Professional & Reliable Service',
    description: 'When you book with MZ Cleaners, we show up on time, complete the job to the agreed standard, and communicate clearly at every step. No excuses, no surprises.',
    bullets: ['Punctual arrival every visit', 'Consistent team assigned to you', 'Clear communication throughout']
  },
  {
    id: '02',
    icon: '🔍',
    title: 'Exceptional Attention to Detail',
    description: 'We clean the areas others overlook. Behind appliances, inside cupboards, grout lines, skirting boards — our team is methodical, thorough, and detail-focused every time.',
    bullets: ['No area left uncleaned', 'Methodical room-by-room approach', 'Quality checked before we leave']
  },
  {
    id: '03',
    icon: '✅',
    title: 'Friendly & Trustworthy Cleaners',
    description: 'All MZ Cleaners staff are DBS checked, reference verified, and trained before entering any property. You can feel completely safe and comfortable with our team.',
    bullets: ['Full DBS background checks', 'Reference verified before hiring', 'Professional and respectful always']
  },
  {
    id: '04',
    icon: '📅',
    title: 'Flexible Appointments',
    description: 'Early mornings, evenings, weekends, last-minute bookings — we work around your schedule, not the other way around. Cleaning that fits into your life.',
    bullets: ['Early morning & evening slots', 'Weekend availability', 'Last-minute bookings welcome']
  },
  {
    id: '05',
    icon: '⭐',
    title: 'Customer Satisfaction Guaranteed',
    description: 'We are not happy until you are happy. If anything falls short of your expectations, we return and put it right at zero extra cost. That is our promise to every client.',
    bullets: ['Satisfaction guarantee', 'Free return visit if needed', 'Highly recommended by customers']
  },
  {
    id: '06',
    icon: '🌿',
    title: 'Safe Cleaning Methods & Products',
    description: 'We use professional-grade, eco-friendly cleaning products that are non-toxic and safe for children, pets, and allergy sufferers. We care for your people, not just your property.',
    bullets: ['Eco-friendly & non-toxic products', 'Safe for children and pets', 'Kind to the environment']
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
          Every reason below is a commitment we make to every single client, on every single clean.
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
