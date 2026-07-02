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
          <h1 className="text-[34px] md:text-[58px] font-extrabold font-plus-jakarta-sans tracking-[-1.74px] leading-tight mb-4">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] to-[#5bb8f5]">
              MZ Cleaners
            </span>
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" delay={100}>
          <p className="text-[16px] md:text-[18px] leading-[30.6px] text-white/90 max-w-2xl mx-auto">
            We're not just a cleaning company — we're a team of dedicated professionals who genuinely care about every result we deliver. Here's why hundreds of Manchester homes and businesses trust us.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" delay={200}>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mt-5 md:mt-8">
            <span className="px-5 py-2.5 rounded-full bg-white/12 border border-white/20 text-[13px] md:text-[14px] font-semibold text-white/90 backdrop-blur-[8px]">500+ Happy Clients</span>
            <span className="px-5 py-2.5 rounded-full bg-white/12 border border-white/20 text-[13px] md:text-[14px] font-semibold text-white/90 backdrop-blur-[8px]">5★ Average Rating</span>
            <span className="px-5 py-2.5 rounded-full bg-white/12 border border-white/20 text-[13px] md:text-[14px] font-semibold text-white/90 backdrop-blur-[8px]">100% Fully Insured</span>
            <span className="px-5 py-2.5 rounded-full bg-white/12 border border-white/20 text-[13px] md:text-[14px] font-semibold text-white/90 backdrop-blur-[8px]">5+ Years Experience</span>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
