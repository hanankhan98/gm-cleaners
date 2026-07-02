import React from 'react';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const pairs = [
  {
    before: { src: '/gallery/befor_after/Kitchen before deep cleaning Manchester.jpg', title: 'Kitchen Deep Clean', location: 'Didsbury, Manchester' },
    after: { src: '/gallery/befor_after/Kitchen after deep cleaning Manchester.jpg', title: 'Kitchen Transformation', location: 'Didsbury, Manchester' },
  },
  {
    before: { src: '/gallery/befor_after/Property before end of tenancy cleaning.jpg', title: 'End of Tenancy Clean', location: 'Chorlton, Manchester' },
    after: { src: '/gallery/befor_after/Property after end of tenancy cleaning.jpg', title: 'Property Transformed', location: 'Chorlton, Manchester' },
  },
];

export default function FeaturedResults() {
  return (
    <section className="w-full bg-white pt-6 pb-0 md:py-[100px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <AnimateOnScroll animation="fade-up">
          <div className="flex flex-col items-center text-center mb-6 md:mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-[5px] h-[14px] rounded-sm bg-[#2a8fd4] shrink-0" />
              <span className="font-inter font-bold text-[11px] tracking-[1.32px] uppercase text-[#2a8fd4]">
                Featured Results
              </span>
            </div>
            <h2 className="font-plus-jakarta-sans font-bold text-[32px] md:text-[44px] tracking-[-0.88px] leading-[1.18] text-[#1c2d3e] mb-4">
              The MZ Cleaners Difference
            </h2>
            <p className="font-inter text-[15px] md:text-[17px] leading-[29.75px] text-[#4a6278] max-w-[560px]">
              Side-by-side before and after results from real jobs completed across Manchester.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={100}>
        <div className="flex flex-col gap-3 md:gap-5">
          {pairs.map((pair, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row gap-3 md:gap-5">
              {/* Before */}
              <div className="flex-1 relative h-[250px] md:h-[420px] rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(42,143,212,0.18)]">
                <Image
                  src={pair.before.src}
                  alt={pair.before.title}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(15,76,129,0.7)]" />
                <div className="absolute top-[18px] left-[18px] rounded-lg bg-[rgba(0,0,0,0.55)] px-4 py-[7px]">
                  <span className="font-plus-jakarta-sans font-extrabold text-[11px] tracking-[0.78px] uppercase text-white">Before</span>
                </div>
                <div className="absolute bottom-[22px] left-[22px] right-[22px]">
                  <h3 className="font-plus-jakarta-sans font-extrabold text-[20px] text-white">{pair.before.title}</h3>
                  <p className="font-inter text-[13px] text-white/80">{pair.before.location}</p>
                </div>
              </div>

              {/* After */}
              <div className="flex-1 relative h-[250px] md:h-[420px] rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(42,143,212,0.18)]">
                <Image
                  src={pair.after.src}
                  alt={pair.after.title}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(15,76,129,0.7)]" />
                <div className="absolute top-[18px] left-[18px] rounded-lg bg-[#2a8fd4] px-4 py-[7px]">
                  <span className="font-plus-jakarta-sans font-extrabold text-[11px] tracking-[0.78px] uppercase text-white">After</span>
                </div>
                <div className="absolute bottom-[22px] left-[22px] right-[22px]">
                  <h3 className="font-plus-jakarta-sans font-extrabold text-[20px] text-white">{pair.after.title}</h3>
                  <p className="font-inter text-[13px] text-white/80">{pair.after.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
