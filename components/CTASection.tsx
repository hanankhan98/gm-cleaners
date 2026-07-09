import React from "react";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

interface CTASectionProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  primaryBtnText?: string;
  secondaryBtnText?: string;
  primaryBtnIcon?: React.ReactNode;
  secondaryBtnIcon?: React.ReactNode;
}

export default function CTASection({
  title = <>Ready for a Cleaner Home or<br />Office?</>,
  subtitle = "Get your free, no-obligation quote today. We typically respond within 2 hours.",
  primaryBtnText = "Request a Free Quote",
  secondaryBtnText = "Call Now",
  primaryBtnIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  ),
  secondaryBtnIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  )
}: CTASectionProps) {
  return (
    <section 
      className="w-full relative min-h-[487px] flex items-center justify-center py-16 md:py-24 overflow-hidden font-plus-jakarta-sans text-white text-center"
      style={{
        background: "linear-gradient(108.71deg, #1a6daf, #2a8fd4 60%, #5bb8f5)"
      }}
    >
      {/* Radial Gradient overlay based on user CSS */}
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(70.71% 70.71% at 50% 50%, rgba(255, 255, 255, 0.06) 2.21%, rgba(255, 255, 255, 0) 2.21%)",
        }}
      />

      {/* Decorative Arrow Left */}
      <img
        src="/cta_arrow_left.png"
        alt=""
        className="absolute bottom-0 left-0 w-[200px] md:w-[343px] h-auto object-contain pointer-events-none z-0"
      />

      {/* Decorative Arrow Right */}
      <img
        src="/cta_arrow_rihgt.png"
        alt=""
        className="absolute top-10 md:top-20 right-0 md:right-10 w-[120px] md:w-[197px] h-auto object-contain pointer-events-none z-0"
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[800px] mx-auto px-6 flex flex-col items-center">
        {/* Sparkle Icon with shadow */}
        <div 
          className="text-4xl mb-6"
          style={{ filter: "drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.2))" }}
        >
          ✨
        </div>

        {/* Heading */}
        <AnimateOnScroll animation="fade-up">
          <h2 className="text-[32px] md:text-[48px] font-extrabold leading-[1.15] tracking-[-0.96px] mb-4">
            {title}
          </h2>
        </AnimateOnScroll>

        {/* Subtext */}
        <AnimateOnScroll animation="fade-up" delay={100}>
          <p className="text-[17px] font-inter text-white/80 leading-[27.2px] mb-10 max-w-[623px]">
            {subtitle}
          </p>
        </AnimateOnScroll>

        {/* Buttons Row */}
        <AnimateOnScroll animation="fade-up" delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Button 1: Primary */}
            <Link href="/quote" className="flex items-center justify-center gap-2 bg-white text-[#1a6daf] h-[48px] px-8 rounded-[10px] font-bold text-[15px] shadow-[0px_6px_24px_rgba(0,0,0,0.14)] hover:bg-gray-50 transition-colors cursor-pointer">
              {primaryBtnIcon}
              {primaryBtnText}
            </Link>

            {/* Button 2: Secondary */}
            <a href="tel:+447535048548" className="flex items-center justify-center gap-2 bg-white/10 border-2 border-white/50 text-white h-[48px] px-8 rounded-[10px] font-bold text-[15px] hover:bg-white/20 transition-colors cursor-pointer">
              {secondaryBtnIcon}
              {secondaryBtnText}
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
