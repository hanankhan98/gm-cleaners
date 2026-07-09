import React from 'react';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function QuoteHero() {
  return (
    <div className="relative w-full bg-gradient-to-r from-[#0f4c81] via-[#1a6daf] to-[#2a8fd4] text-white pt-10 md:pt-14 pb-12 md:pb-16 overflow-hidden">
      {/* Radial Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: "radial-gradient(70.71% 70.71% at 50% 50%, rgba(255, 255, 255, 0.06) 1.96%, rgba(255, 255, 255, 0) 100%)" }}
      />
      
      {/* Bubble Images */}
      <img 
        src="/serviece_hero_buttlbe.png" 
        alt="Bubbles" 
        className="absolute top-1/2 left-0 w-full h-auto -translate-y-1/2 pointer-events-none z-[5]"
      />

      <div className="max-w-[1440px] mx-auto px-4 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Link href="/" className="font-inter font-medium text-[14px] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors">
            Home
          </Link>
          <span className="opacity-70 text-[12px]">›</span>
          <span className="font-inter font-medium text-[14px] text-white">
            Get a Quote
          </span>
        </div>

        {/* Main Heading */}
        <AnimateOnScroll animation="fade-up">
          <h1 className="text-[34px] md:text-[58px] font-extrabold font-plus-jakarta-sans tracking-[-1.74px] leading-tight mb-4">
            Request Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] to-[#5bb8f5]">Free Quote</span>
          </h1>
        </AnimateOnScroll>

        {/* Subtitle Paragraph */}
        <AnimateOnScroll animation="fade-up" delay={100}>
          <p className="text-[16px] md:text-[18px] leading-[30.6px] text-white/90 max-w-2xl mx-auto mb-8">
            Tell us about your cleaning needs below for a fast, no-obligation quote. Our management team will get back to you within 2 hours.
          </p>
        </AnimateOnScroll>

        {/* Badges */}
        <AnimateOnScroll animation="fade-up" delay={200} className="w-full">
          <div className="flex flex-wrap items-center justify-center gap-3 w-full">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] text-white font-inter text-[13px]">
              <svg className="w-4 h-4 text-[#9CD3F8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Transparent Pricing
            </div>
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] text-white font-inter text-[13px]">
              <svg className="w-4 h-4 text-[#9CD3F8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No Hidden Fees
            </div>
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] text-white font-inter text-[13px]">
              <svg className="w-4 h-4 text-[#9CD3F8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Cancel Anytime
            </div>
          </div>
        </AnimateOnScroll>

      </div>
    </div>
  );
}
