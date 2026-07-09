import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const features = [
  {
    title: 'On-Time Arrival Every Visit',
    lines: ['We respect your time. Our team always arrives within the agreed window', 'and notifies you if anything changes.']
  },
  {
    title: 'Transparent, Fixed Pricing',
    lines: ['The price we quote is the price you pay. No hidden fees, no surprise', 'charges ever. Complete transparency from the start.']
  },
  {
    title: 'Fully Insured & DBS Checked',
    lines: ['Every team member is DBS checked, reference verified, and our business', 'carries full public liability insurance on every clean.']
  },
  {
    title: 'Satisfaction Guaranteed',
    lines: ['Not happy with something? Let us know within 24 hours and we\'ll return', 'to put it right completely free of charge.']
  },
  {
    title: 'Eco-Friendly Products Only',
    lines: ['All cleaning products used are environmentally responsible, non-toxic,', 'and safe for children, pets, and people with allergies.']
  }
];

export default function ExpectationsSection() {
  return (
    <section className="w-full bg-white py-20 md:py-[100px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[80px] items-center">

          {/* Left - Content */}
          <AnimateOnScroll animation="fade-up" className="flex-1 max-w-[580px] w-full">

            {/* Tag */}
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <div className="w-[5px] h-[14px] rounded-sm bg-[#2a8fd4] shrink-0 hidden md:block" />
              <span className="font-inter font-bold text-[11px] tracking-[1.32px] uppercase text-[#2a8fd4]">
                Our Commitment
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-plus-jakarta-sans font-bold text-[28px] md:text-[44px] tracking-[-0.88px] leading-[1.18] text-[#1c2d3e] mb-6 text-center md:text-left">
              What You Can Always<br />
              <span className="text-[#2a8fd4]">Expect From Us</span>
            </h2>

            {/* Subtitle */}
            <p className="font-inter text-[15px] md:text-[16px] leading-[1.78] text-[#4a6278] mb-12 text-center md:text-left">
              Every time our team arrives at your property, you can count on the
              same high standard of professionalism, care, and thoroughness — no
              matter the size of the job.
            </p>

            {/* Feature Cards */}
            <div className="flex flex-col gap-[18px] mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-[14px] bg-[#f4f9fd] border border-[#c5dff0] px-[19px] py-[18px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start gap-[19px]">
                    <div className="w-9 h-9 rounded-[10px] bg-[#2a8fd4] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-inter font-bold text-[14.5px] text-[#1c2d3e] mb-[2px]">
                        {feature.title}
                      </h3>
                      {feature.lines.map((line, i) => (
                        <p key={i} className="font-inter text-[13px] leading-[20.15px] text-[#4a6278]">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/quote"
              className="flex items-center justify-center h-[43px] px-7 bg-[#2a8fd4] text-white rounded-[10px] font-plus-jakarta-sans font-bold text-[15px] hover:bg-[#1A6DAF] transition-colors shadow-[0_4px_18px_rgba(42,143,212,0.32)] cursor-pointer w-fit mx-auto md:mx-0"
            >
              Book Your Clean Today
              <svg className="ml-2 w-[15px] h-[15px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

          </AnimateOnScroll>

          {/* Right - Image with Badge */}
          <AnimateOnScroll animation="fade-up" delay={100} className="w-full lg:w-[640px] shrink-0">
            <div className="relative w-full aspect-[544/480] rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(42,143,212,0.18)]">
              <Image
                src="/our_commentment.png"
                alt="MZ Cleaners at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 640px"
              />

              {/* 5★ Badge */}
              <div className="absolute top-6 right-6 shadow-[0_6px_24px_rgba(42,143,212,0.4)] rounded-[14px] bg-[#2a8fd4] w-[116px] h-[87px] flex flex-col items-center justify-center">
                <span className="font-plus-jakarta-sans font-extrabold text-[28px] leading-none text-white">
                  5★
                </span>
                <span className="font-inter text-[12px] text-white/85 mt-1">
                  Google Rating
                </span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
