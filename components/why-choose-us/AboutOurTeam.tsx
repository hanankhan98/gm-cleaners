import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function AboutOurTeam() {
  return (
    <section className="w-full bg-white py-16 md:py-[100px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[60px]">

          {/* Left - Image with Badge */}
          <AnimateOnScroll animation="fade-up" className="w-full lg:w-[600px] shrink-0 relative">
            <div className="relative w-full aspect-[544/500] rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(42,143,212,0.18)]">
              <Image
                src="/about_out_team.png"
                alt="MZ Cleaners Team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-7 left-7 shadow-[0_8px_32px_rgba(0,0,0,0.14)] backdrop-blur-[12px] rounded-2xl bg-white/96 w-[260px] h-[97px] flex items-center gap-4 px-[22px]">
              <div className="rounded-xl bg-[#eaf4fd] border border-[#c5dff0] w-12 h-12 flex items-center justify-center shrink-0">
                <span className="text-xl">🛡️</span>
              </div>
              <div className="flex flex-col">
                <div className="text-[15px] font-bold font-plus-jakarta-sans text-[#1c2d3e] leading-tight">Fully Insured</div>
                <div className="text-xs text-[#8fa3b8] leading-snug">Public Liability Cover on<br/>every clean</div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right - Content */}
          <AnimateOnScroll animation="fade-up" delay={100} className="flex-1 w-full relative">
            {/* Decorative Gradient Bar */}
            <div className="w-1 h-20 rounded bg-gradient-to-b from-[#2a8fd4] to-[#5bb8f5] absolute top-0 left-0" />

            <div className="pl-0 md:pl-6">
              {/* Tag */}
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <div className="w-0.5 h-3.5 bg-[#2a8fd4] rounded-sm hidden md:block" />
                <span className="text-[11px] font-bold tracking-[1.32px] uppercase text-[#2a8fd4]">About Our Team</span>
              </div>

              {/* Heading */}
              <h2 className="text-[28px] md:text-[44px] font-bold font-plus-jakarta-sans tracking-[-0.88px] leading-[1.18] mb-6 text-center md:text-left">
                <span className="text-[#2a8fd4]">A Team</span>{' '}
                <span className="text-[#1c2d3e]">You Can<br/>Genuinely Trust</span>
              </h2>

              {/* Paragraphs */}
              <p className="text-[15px] md:text-[16.5px] text-[#4a6278] leading-[1.78] mb-5 text-center md:text-left">
                At MZ Cleaners, we understand that inviting someone into your home or business takes real trust. That's why every single member of our team is carefully selected, fully vetted, DBS checked, and trained to the highest professional standards before they ever step foot in a client's property.
              </p>
              <p className="text-[15px] md:text-[16.5px] text-[#4a6278] leading-[1.78] mb-5 text-center md:text-left">
                We're proud to have built a reputation in Manchester built on reliability, honesty, and consistently outstanding results. We don't cut corners — we clean them.
              </p>
              <p className="text-[15px] md:text-[16.5px] text-[#4a6278] leading-[1.78] mb-8 text-center md:text-left">
                Every clean is backed by our satisfaction guarantee. If you're ever not happy with the result, we come back and make it right at absolutely no extra cost to you.
              </p>

              {/* Button */}
              <Link href="/quote" className="flex items-center justify-center h-[43px] px-7 bg-[#2a8fd4] text-white rounded-[10px] font-plus-jakarta-sans font-bold text-[15px] hover:bg-[#1A6DAF] transition-colors shadow-[0_4px_18px_rgba(42,143,212,0.32)] cursor-pointer w-fit mx-auto md:mx-0">
                Get a Free Quote
                <svg className="ml-2 w-[15px] h-[15px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
}
