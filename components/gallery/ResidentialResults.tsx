import React from 'react';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const results = [
  {
    src: '/gallery/RESIDENTIAL RESULTS/House cleaning result Chorlton Manchester.jpg',
    title: 'Regular House Clean',
    location: 'Chorlton, Manchester',
    tag: 'RESIDENTIAL',
  },
  {
    src: '/gallery/RESIDENTIAL RESULTS/Deep clean result Eccles Manchester.jpg',
    title: 'Deep Clean Result',
    location: 'Eccles, Manchester',
    tag: 'DEEP CLEAN',
  },
  {
    src: '/gallery/RESIDENTIAL RESULTS/Bathroom cleaning result Oldham Manchester.jpg',
    title: 'Bathroom Deep Clean',
    location: 'Oldham, Manchester',
    tag: 'BATHROOM',
  },
  {
    src: '/gallery/RESIDENTIAL RESULTS/Move out cleaning result Rochdale Manchester.jpg',
    title: 'Move-Out Clean',
    location: 'Rochdale, Manchester',
    tag: 'MOVE-OUT',
  },
  {
    src: '/gallery/RESIDENTIAL RESULTS/Kitchen cleaning result Wigan Manchester.jpg',
    title: 'Kitchen Sparkle Clean',
    location: 'Wigan, Manchester',
    tag: 'KITCHEN',
  },
  {
    src: '/gallery/RESIDENTIAL RESULTS/Move in cleaning Tameside Manchester.jpg',
    title: 'Move-In Property Clean',
    location: 'Tameside, Manchester',
    tag: 'MOVE-IN',
  },
];

export default function ResidentialResults() {
  return (
    <section className="w-full bg-[#f4f9fd]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-[100px]">
        <AnimateOnScroll animation="fade-up">
          <div className="flex items-center md:items-start justify-center md:justify-start pl-5 relative mb-3">
            <div className="h-0.5 w-3 absolute top-1/2 -translate-y-1/2 left-0 rounded-sm bg-[#2a8fd4]" />
            <span className="font-inter text-[11px] tracking-[1.32px] uppercase font-semibold text-[#2a8fd4]">
              RESIDENTIAL RESULTS
            </span>
          </div>
          <h2 className="font-plus-jakarta-sans text-[28px] md:text-[44px] tracking-[-0.88px] leading-[1.2] md:leading-[51.92px] font-bold text-[#1c2d3e] mb-4 text-center md:text-left">
            Home Cleaning Results
          </h2>
          <p className="font-inter text-[15px] md:text-[17px] leading-[1.6] md:leading-[29.75px] text-[#4a6278] max-w-[560px] mb-11 text-center md:text-left mx-auto md:mx-0">
            Professional residential cleaning results from homes across Manchester and Greater Manchester.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
            {results.map((item, idx) => (
              <div
                key={idx}
                className="relative h-[260px] rounded-[18px] overflow-hidden shadow-[0_2px_8px_rgba(42,143,212,0.08)] group"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(15,76,129,0.72)]" />
                <div className="absolute bottom-[16px] left-[16px] flex flex-col items-start gap-1.5">
                  <span className="font-plus-jakarta-sans font-bold text-[15px] text-white">{item.title}</span>
                  <span className="font-inter text-[12px] text-white/80">{item.location}</span>
                </div>
                <div className="absolute top-[12px] right-[12px] rounded-[6px] bg-[#2a8fd4] px-[10px] py-[5px]">
                  <span className="font-inter text-[10px] tracking-[0.6px] uppercase font-semibold text-white">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
