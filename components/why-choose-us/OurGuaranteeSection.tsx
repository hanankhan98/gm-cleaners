import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const badges = [
  { icon: '🛡️', title: 'Fully Insured', subtext: 'Public Liability Cover' },
  { icon: '✅', title: 'DBS Checked', subtext: 'All staff verified' },
  { icon: '⭐', title: '5★ Rated', subtext: 'Google Reviews' },
  { icon: '♻️', title: 'Eco-Friendly', subtext: 'Safe products only' }
];

const promises = [
  { icon: '⏰', text: 'We respond to quote requests within 2 hours during business hours' },
  { icon: '🏠', text: 'We treat every property as if it were our own with care and respect' },
  { icon: '💷', text: 'The price quoted is always the final price no surprises, ever' },
  { icon: '🔄', text: 'Free return visit within 24 hours if you are not fully satisfied' },
  { icon: '🌿', text: 'Eco-friendly products used on every clean safe for your whole family' }
];

export default function OurGuaranteeSection() {
  return (
    <section className="w-full bg-[#f4f9fd] py-20 md:py-[100px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between">

          {/* Left - Content */}
          <AnimateOnScroll animation="fade-up" className="w-full lg:w-[570px] shrink-0">

            {/* Tag */}
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <div className="w-[5px] h-[14px] rounded-sm bg-[#2a8fd4] shrink-0 hidden md:block" />
              <span className="font-inter font-bold text-[11px] tracking-[1.32px] uppercase text-[#2a8fd4]">
                Our Guarantee
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-plus-jakarta-sans font-bold text-[28px] md:text-[44px] tracking-[-0.88px] leading-[1.18] text-[#1c2d3e] mb-6 text-center md:text-left">
              Your Satisfaction is<br />
              <span className="text-[#2a8fd4]">Our Promise</span>
            </h2>

            {/* Paragraphs */}
            <p className="font-inter text-[15px] md:text-[16px] leading-[1.78] text-[#4a6278] mb-6 text-center md:text-left">
              We stand behind every clean we carry out. If you are not completely
              satisfied with the results, we will return within 24 hours and re-clean any
              areas you are unhappy with at absolutely no extra cost.
            </p>
            <p className="font-inter text-[15px] md:text-[16px] leading-[1.78] text-[#4a6278] mb-10 text-center md:text-left">
              This isn't just a policy — it is the standard we hold ourselves to on every
              single job, for every single client, across Manchester and Greater
              Manchester.
            </p>

            {/* Badges Grid */}
            <div className="grid grid-cols-2 gap-[14px]">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="rounded-[14px] bg-white border border-[#c5dff0] h-[104px] flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-[20px] leading-none mb-1">{badge.icon}</span>
                  <span className="font-inter font-bold text-[13.5px] text-[#1c2d3e]">{badge.title}</span>
                  <span className="font-inter text-[12px] text-[#8fa3b8]">{badge.subtext}</span>
                </div>
              ))}
            </div>

          </AnimateOnScroll>

          {/* Right - Promise Card */}
          <AnimateOnScroll animation="fade-up" delay={100} className="w-full lg:w-[580px] shrink-0">
            <div className="bg-[#1a2f45] rounded-3xl p-8 md:p-10 relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute right-[-80px] bottom-[-80px] w-[280px] h-[280px] rounded-full bg-[rgba(42,143,212,0.12)] blur-[60px] pointer-events-none" />

              <div className="relative z-10">
                {/* Tag */}
                <span className="font-inter font-bold text-[11px] tracking-[1.32px] uppercase text-[#5bb8f5] mb-4 block">
                  MZ Cleaners Promise
                </span>

                {/* Title */}
                <h3 className="font-plus-jakarta-sans font-extrabold text-[24px] md:text-[26px] leading-[1.25] text-white mb-4">
                  We Don't Leave Until the Job is Done<br />Right
                </h3>

                {/* Description */}
                <p className="font-inter text-[14px] md:text-[14.5px] leading-[24.94px] text-[rgba(255,255,255,0.65)] mb-8">
                  Every clean we carry out comes with a full satisfaction promise.
                  These are the standards we commit to on every visit, no
                  exceptions.
                </p>

                {/* Promise Items */}
                <div className="flex flex-col gap-[10px]">
                  {promises.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-[10px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] px-4 py-[13px] flex items-start gap-3"
                    >
                      <span className="text-[16px] leading-none mt-0.5 shrink-0">{item.icon}</span>
                      <span className="font-inter text-[13.5px] leading-[20.25px] text-[rgba(255,255,255,0.75)]">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
