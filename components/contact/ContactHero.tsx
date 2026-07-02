import React from 'react';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function ContactHero() {
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
            Contact
          </span>
        </div>

        {/* Main Heading */}
        <AnimateOnScroll animation="fade-up">
          <h1 className="text-[34px] md:text-[58px] font-extrabold font-plus-jakarta-sans tracking-[-1.74px] leading-tight mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] to-[#5bb8f5]">Touch With Us</span>
          </h1>
        </AnimateOnScroll>

        {/* Subtitle Paragraph */}
        <AnimateOnScroll animation="fade-up" delay={100}>
          <p className="text-[16px] md:text-[18px] leading-[30.6px] text-white/90 max-w-2xl mx-auto mb-10">
            We're always happy to hear from you. Whether you have a question, want to discuss your cleaning needs, or are ready to book, our team is here and ready to help.
          </p>
        </AnimateOnScroll>

        {/* Buttons / Contact Pills */}
        <AnimateOnScroll animation="fade-up" delay={200} className="w-full">
          <div className="flex flex-wrap items-center justify-center gap-4 w-full">
            <a href="tel:+447535048548" className="flex items-center gap-2 px-6 py-3 rounded-full bg-[rgba(255,255,255,0.15)] backdrop-blur-md border border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.25)] transition-colors cursor-pointer">
              <span className="font-inter font-semibold text-white">+44 7535 048548</span>
            </a>
            <a href="mailto:info@mzcleaners.co.uk" className="flex items-center gap-2 px-6 py-3 rounded-full bg-[rgba(255,255,255,0.15)] backdrop-blur-md border border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.25)] transition-colors cursor-pointer">
              <span className="font-inter font-semibold text-white">info@mzcleaners.co.uk</span>
            </a>
            <a href="https://wa.me/447535048548" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-[rgba(255,255,255,0.15)] backdrop-blur-md border border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.25)] transition-colors cursor-pointer">
              <span className="font-inter font-semibold text-white">WhatsApp Us</span>
            </a>
          </div>
        </AnimateOnScroll>

      </div>
    </div>
  );
}
