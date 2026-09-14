import React from 'react';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function WhyChooseUsHero() {
  return (
    <div className="relative w-full bg-gradient-to-r from-[#0f4c81] via-[#1a6daf] to-[#2a8fd4] text-white pt-10 md:pt-14 pb-12 md:pb-16 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: "radial-gradient(70.71% 70.71% at 50% 50%, rgba(255, 255, 255, 0.06) 1.96%, rgba(255, 255, 255, 0) 100%)" }}
      />
      <img
        src="/serviece_hero_buttlbe.png"
        alt="Bubbles"
        className="absolute top-1/2 left-0 w-full h-auto -translate-y-1/2 pointer-events-none z-[5]"
      />
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 relative z-10 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 text-[13px] text-white/60 mb-4 font-medium">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="opacity-70">›</span>
          <span className="text-white">Why Choose Us</span>
        </div>
        <AnimateOnScroll animation="fade-up">
          <h1 className="max-w-5xl text-[34px] md:text-[58px] font-extrabold font-plus-jakarta-sans tracking-[-1.74px] leading-tight mb-4">
            Why Manchester Residents &amp; Businesses Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] to-[#5bb8f5]">
              MZ Cleaners
            </span>
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" delay={100}>
          <p className="text-[16px] md:text-[18px] leading-[30.6px] text-white/90 max-w-2xl mx-auto">
            Fully insured commercial cleaning and DBS checked cleaners Manchester residents and businesses can trust, with flexible office cleaning contracts and competitive local rates.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" delay={200}>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mt-5 md:mt-8">
            <span className="px-5 py-2.5 rounded-full bg-white/12 border border-white/20 text-[13px] md:text-[14px] font-semibold text-white/90 backdrop-blur-[8px]">Trusted by local homes and businesses</span>
            <span className="px-5 py-2.5 rounded-full bg-white/12 border border-white/20 text-[13px] md:text-[14px] font-semibold text-white/90 backdrop-blur-[8px]">Highly rated service</span>
            <span className="px-5 py-2.5 rounded-full bg-white/12 border border-white/20 text-[13px] md:text-[14px] font-semibold text-white/90 backdrop-blur-[8px]">Fully Insured (£5M/€5M &amp; £10M/€10M)</span>
            <span className="px-5 py-2.5 rounded-full bg-white/12 border border-white/20 text-[13px] md:text-[14px] font-semibold text-white/90 backdrop-blur-[8px]">DBS Checked</span>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" delay={300}>
          <div className="mt-6 rounded-[14px] border border-white/25 bg-white/10 px-5 py-3 text-center backdrop-blur-[8px]">
            <p className="text-[14px] font-bold text-white">20% Off First Month for CitySuites Aparthotel</p>
            <p className="mt-1 text-[12px] text-white/75">Welcome offer with no long-term contract required.</p>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
