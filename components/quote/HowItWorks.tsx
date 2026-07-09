import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const steps = [
  {
    id: 1,
    title: 'Submit Your Quote',
    desc: 'Fill in the quick form above with your property details and cleaning requirements. Takes less than 2 minutes.'
  },
  {
    id: 2,
    title: 'Receive Your Quote',
    desc: 'We review your request and contact you within 2 hours with a clear, transparent, fixed-price quote.'
  },
  {
    id: 3,
    title: 'Confirm Your Booking',
    desc: 'Happy with the quote? Simply confirm your preferred date and time — we handle everything else from there.'
  },
  {
    id: 4,
    title: 'We Clean, You Relax',
    desc: 'Our professional team arrives on time and leaves your property spotlessly clean. Satisfaction guaranteed.'
  }
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-[#1a2f45] py-20 md:py-[100px] overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(70.71%_70.71%_at_50%_50%,_rgba(255,255,255,0.03)_1.96%,_rgba(255,255,255,0)_1.96%)] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-12 relative z-10">
        <AnimateOnScroll animation="fade-up">
        <div className="flex flex-col items-center text-center mb-[60px]">
          <span className="font-inter font-semibold text-[11px] tracking-[1.32px] uppercase text-[#5bb8f5] mb-3">
            SIMPLE PROCESS
          </span>
          <h2 className="font-plus-jakarta-sans font-bold text-[32px] md:text-[44px] tracking-[-0.88px] leading-[51.92px] text-white mb-3">
            How It Works
          </h2>
          <p className="font-inter text-[16px] md:text-[17px] leading-[29.75px] text-[rgba(255,255,255,0.65)] max-w-[600px]">
            From your quote request to a spotlessly clean property — fast, simple, and hassle-free.
          </p>
        </div>
        </AnimateOnScroll>

        {/* Steps */}
        <AnimateOnScroll animation="fade-up" delay={100}>
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[44px] left-[12.5%] right-[12.5%] h-[3px] bg-gradient-to-r from-[rgba(91,184,245,0.15)] via-[rgba(91,184,245,0.6)] to-[rgba(91,184,245,0.15)] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center text-center px-5">
                <div className="w-[88px] h-[88px] rounded-full bg-[rgba(255,255,255,0.06)] border-2 border-[rgba(91,184,245,0.3)] flex items-center justify-center mb-[18px]">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2a8fd4] to-[#5bb8f5] flex items-center justify-center">
                    <span className="font-plus-jakarta-sans font-extrabold text-[22px] text-white">
                      {step.id}
                    </span>
                  </div>
                </div>
                <h3 className="font-plus-jakarta-sans font-bold text-[16px] text-white mb-3">
                  {step.title}
                </h3>
                <p className="font-inter text-[13.5px] leading-[22.68px] text-[rgba(255,255,255,0.58)] max-w-[220px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
