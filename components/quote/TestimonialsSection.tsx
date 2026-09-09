import React from 'react';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const testimonials = [
  {
    text: '"Absolutely brilliant! MZ Cleaners did our end of tenancy clean and the property looked better than when we moved in. Full deposit returned with no issues."',
    name: 'Sarah J.',
    location: 'Didsbury, Manchester',
    initials: 'SJ'
  },
  {
    text: '"Our office has been cleaned by MZ Cleaners for over a year. Consistently professional, punctual, and thorough every single time. Highly recommended."',
    name: 'Mohammed R.',
    location: 'Manchester City Centre',
    initials: 'MR'
  },
  {
    text: '"Deep clean before moving in was incredible. Every room spotless, team were friendly and so thorough. Best cleaners I\'ve ever used in Manchester."',
    name: 'Emily W.',
    location: 'Chorlton, Manchester',
    initials: 'EW'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#f4f9fd] py-20 md:py-[100px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between">

          {/* Left - Image with Badge */}
          <AnimateOnScroll animation="fade-up" className="w-full lg:w-[548px] shrink-0 self-center">
            <div className="relative w-full aspect-[544/480] rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(42,143,212,0.18)]">
              <Image
                src="/why_client_say.png"
                alt="5★ Average Google Rating"
                fill
                className="object-cover"
                sizes="548px"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(15,76,129,0.6)]" />

              {/* Rating Badge */}
              <div className="absolute bottom-6 left-6 right-6 shadow-[0_4px_20px_rgba(0,0,0,0.12)] backdrop-blur-[12px] rounded-[14px] bg-white/96 flex items-center gap-3.5 py-4 px-5">
                <div className="w-11 h-11 rounded-xl bg-[#2a8fd4] flex items-center justify-center text-xl shrink-0">
                  ⭐
                </div>
                <div>
                  <h4 className="font-plus-jakarta-sans font-extrabold text-[15px] text-[#1c2d3e]">
                    5★ Average Google Rating
                  </h4>
                  <p className="font-inter text-[12.5px] text-[#4a6278]">
                    From 500+ satisfied clients across Manchester
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right - Content */}
          <AnimateOnScroll animation="fade-up" delay={100} className="w-full lg:w-[580px] shrink-0">
            {/* Tag */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-[3px] rounded-sm bg-[#2a8fd4] shrink-0" />
              <span className="font-inter font-semibold text-[11px] tracking-[1.32px] uppercase text-[#2a8fd4]">
                WHAT CLIENTS SAY
              </span>
            </div>

            <h2 className="font-plus-jakarta-sans font-bold text-[32px] md:text-[44px] tracking-[-0.88px] leading-[51.92px] text-[#1c2d3e] mb-4">
              Join 500+ Happy<br />
              Manchester Clients
            </h2>

            <p className="font-inter text-[15px] md:text-[16px] leading-[28.48px] text-[#4a6278] mb-8">
              Hundreds of homes and businesses across Manchester trust MZ
              Cleaners. Here&apos;s what some of them say after their first clean.
            </p>

            {/* Testimonial Cards */}
            <div className="flex flex-col gap-4">
              {testimonials.map((t, i) => (
                <div key={i} className="rounded-[18px] bg-white border border-[#c5dff0] py-5 px-[22px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="text-[#f59e0b] tracking-[2px] text-base mb-2">
                    ★★★★★
                  </div>
                  <p className="font-inter text-[16px] leading-[28.48px] text-[#4a6278] italic mb-[18px]">
                    {t.text}
                  </p>
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-[18px] bg-gradient-to-br from-[#2a8fd4] to-[#5bb8f5] flex items-center justify-center">
                      <span className="font-plus-jakarta-sans font-extrabold text-[13px] text-white">
                        {t.initials}
                      </span>
                    </div>
                    <div>
                      <span className="font-inter font-semibold text-[13px] text-[#1c2d3e] block leading-tight">
                        {t.name}
                      </span>
                      <span className="font-inter text-[12px] text-[#8fa3b8]">
                        {t.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
