import React from 'react';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

interface GalleryHeroProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function GalleryHero({ activeTab, onTabChange }: GalleryHeroProps) {
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
            Our Work
          </span>
        </div>

        {/* Main Heading */}
        <AnimateOnScroll animation="fade-up">
          <h1 className="text-[34px] md:text-[58px] font-extrabold font-plus-jakarta-sans tracking-[-1.74px] leading-tight mb-4">
            Our Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] to-[#5bb8f5]">Before & After</span>
          </h1>
        </AnimateOnScroll>

        {/* Subtitle Paragraph */}
        <AnimateOnScroll animation="fade-up" delay={100}>
          <p className="text-[16px] md:text-[18px] leading-[30.6px] text-white/90 max-w-2xl mx-auto mb-8">
            See the MZ Cleaners difference for yourself. Browse our gallery of Manchester residential and commercial cleaning transformations.
          </p>
        </AnimateOnScroll>

        {/* Filter Buttons */}
        <AnimateOnScroll animation="fade-up" delay={200} className="w-full">
          <div className="flex flex-wrap items-center justify-center gap-3 w-full">
            {['All Photos', 'Before & After', 'Residential', 'Commercial', 'Kitchen'].map((filter) => (
              <button 
                key={filter}
                onClick={() => onTabChange(filter)}
                className={`px-5 py-2 rounded-full font-inter font-medium text-[14px] transition-colors border cursor-pointer ${
                  activeTab === filter
                    ? 'bg-white text-[#1A6DAF] border-white shadow-md' 
                    : 'bg-[rgba(255,255,255,0.1)] text-white border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.2)]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

      </div>
    </div>
  );
}
