import React from 'react';
import Image from 'next/image';
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function BookingSteps() {
  const steps = [
    {
      title: "Request a Quote",
      desc: "Fill in our quick online form or call us directly. Tell us about your property and what you need — we'll handle the rest."
    },
    {
      title: "Get Your Quote",
      desc: "We respond within 2 hours with a clear, transparent quote. No hidden fees, no surprises — just honest pricing."
    },
    {
      title: "We Confirm & Schedule",
      desc: "Choose a date and time that suits you. We confirm your booking and assign a dedicated cleaning team to your property."
    },
    {
      title: "Enjoy a Spotless Space",
      desc: "Our team arrives on time, works thoroughly, and leaves your home or office spotlessly clean. Satisfaction guaranteed."
    }
  ];

  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-12 bg-[#1a2f45] relative overflow-hidden">
      <Image src="/how_it_work.png" alt="" width={146} height={253} className="absolute top-[-5px] left-0 w-[146px] h-[253px] object-cover pointer-events-none z-0" />
      <div className="max-w-[1440px] mx-auto flex flex-col items-center relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-8 max-w-[700px]">
          <span className="font-inter font-bold text-[11px] text-[#5bb8f5] tracking-[1.32px] uppercase mb-3 block">
            How It Works
          </span>
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-plus-jakarta-sans font-bold text-[36px] md:text-[44px] leading-[1.18] tracking-[-0.88px] text-white mb-2">
              Booking MZ Cleaners is Simple
            </h2>
          </AnimateOnScroll>
          <p className="font-inter text-[16px] md:text-[17px] leading-[1.75] text-[rgba(255,255,255,0.75)]">
            From quote to clean in just a few steps — fast, easy, and hassle-free.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[44px] left-[9%] right-[9%] h-[2px] bg-gradient-to-r from-[rgba(91,184,245,0.2)] via-[rgba(91,184,245,0.6)] to-[rgba(91,184,245,0.2)] z-0"></div>

          {steps.map((step, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
              <div className="flex flex-col items-center text-center relative z-10">
              {/* Outer Circle with border */}
              <div className="w-[88px] h-[88px] rounded-full bg-[rgba(255,255,255,0.07)] border-2 border-[rgba(91,184,245,0.35)] flex items-center justify-center mb-6">
                {/* Inner Gradient Circle with Number */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2a8fd4] to-[#5bb8f5] flex items-center justify-center">
                  <span className="font-plus-jakarta-sans font-extrabold text-[22px] text-white">{index + 1}</span>
                </div>
              </div>
              <h3 className="font-plus-jakarta-sans font-bold text-[17px] text-white mb-3">
                {step.title}
              </h3>
              <p className="font-inter text-[13.5px] leading-[1.68] text-[rgba(255,255,255,0.6)] max-w-[220px]">
                {step.desc}
              </p>
            </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
