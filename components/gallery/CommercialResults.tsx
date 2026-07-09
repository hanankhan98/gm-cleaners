import React from 'react';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const largeCard = {
  src: '/gallery/commercal_result/Office cleaning Manchester city centre.jpg',
  title: 'Office Deep Clean',
  location: 'Manchester City Centre',
};

const rightCards = [
  { src: '/gallery/commercal_result/Retail store cleaning Stockport Manchester.jpg', title: 'Retail Store Clean', location: 'Stockport' },
  { src: '/gallery/commercal_result/Workspace sanitisation Salford Manchester.jpg', title: 'Workspace Sanitisation', location: 'Salford' },
];

const leftCards = [
  { src: '/gallery/commercal_result/Commercial premises cleaning Trafford Manchester.jpg', title: 'Commercial Premises', location: 'Trafford' },
  { src: '/gallery/commercal_result/Daily office cleaning Bury Manchester.jpg', title: 'Daily Office Contract', location: 'Bury' },
];

export default function CommercialResults() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-[100px]">
        <AnimateOnScroll animation="fade-up">
          <div className="flex items-center md:items-start justify-center md:justify-start pl-5 relative mb-3">
            <div className="h-0.5 w-3 absolute top-1/2 -translate-y-1/2 left-0 rounded-sm bg-[#2a8fd4]" />
            <span className="font-inter text-[11px] tracking-[1.32px] uppercase font-semibold text-[#2a8fd4]">
              COMMERCIAL RESULTS
            </span>
          </div>
          <h2 className="font-plus-jakarta-sans text-[28px] md:text-[44px] tracking-[-0.88px] leading-[1.2] md:leading-[51.92px] font-bold text-[#1c2d3e] mb-4 text-center md:text-left">
            Office & Commercial Cleaning
          </h2>
          <p className="font-inter text-[15px] md:text-[17px] leading-[1.6] md:leading-[29.75px] text-[#4a6278] max-w-[560px] mb-11 text-center md:text-left mx-auto md:mx-0">
            Professional commercial cleaning results from offices, retail outlets, and business premises across Manchester.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr] gap-[18px]">
            <div className="relative h-[380px] rounded-[18px] overflow-hidden shadow-[0_2px_8px_rgba(42,143,212,0.08)] group">
              <Image
                src={largeCard.src}
                alt={largeCard.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(26,47,69,0.75)]" />
              <div className="absolute bottom-[14px] left-[14px] flex flex-col items-start gap-[7px]">
                <span className="font-plus-jakarta-sans font-bold text-[14px] text-white">{largeCard.title}</span>
                <span className="font-inter text-[11.5px] text-white/80">{largeCard.location}</span>
              </div>
            </div>

            <div className="flex flex-col gap-[18px]">
              {rightCards.map((card, idx) => (
                <div key={idx} className="relative h-[180px] rounded-[18px] overflow-hidden shadow-[0_2px_8px_rgba(42,143,212,0.08)] group">
                  <Image
                    src={card.src}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(26,47,69,0.75)]" />
                  <div className="absolute bottom-[14px] left-[14px] flex flex-col items-start gap-[7px]">
                    <span className="font-plus-jakarta-sans font-bold text-[14px] text-white">{card.title}</span>
                    <span className="font-inter text-[11.5px] text-white/80">{card.location}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-[18px]">
              {leftCards.map((card, idx) => (
                <div key={idx} className="relative h-[180px] rounded-[18px] overflow-hidden shadow-[0_2px_8px_rgba(42,143,212,0.08)] group">
                  <Image
                    src={card.src}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(26,47,69,0.75)]" />
                  <div className="absolute bottom-[14px] left-[14px] flex flex-col items-start gap-[7px]">
                    <span className="font-plus-jakarta-sans font-bold text-[14px] text-white">{card.title}</span>
                    <span className="font-inter text-[11.5px] text-white/80">{card.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
