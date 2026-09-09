"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const reviews = [
  {
    initials: "SJ",
    name: "Sarah J.",
    location: "Didsbury, Manchester",
    text: "Absolutely brilliant service from start to finish. MZ Cleaners did our end of tenancy clean and the property looked better than when we first moved in. Got our full deposit back with no issues at all. Highly recommended!",
  },
  {
    initials: "MR",
    name: "Mohammed R.",
    location: "Manchester City Centre",
    text: "We've been using MZ Cleaners for our office for over a year and the standard has been consistently excellent. Professional, punctual, and always thorough. Can't fault them at all genuinely outstanding.",
  },
  {
    initials: "EW",
    name: "Emily W.",
    location: "Chorlton, Manchester",
    text: "Booked a deep clean before moving into our new house. The team were so friendly and worked incredibly hard. Every room was spotless. Great value for money, will absolutely use MZ Cleaners again.",
  },
];

const AUTOPLAY_MS = 5000;

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"right" | "left">("right");
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number, dir: "right" | "left" = "right") => {
    setDirection(dir);
    setCurrent(((index % reviews.length) + reviews.length) % reviews.length);
  }, []);

  const goNext = useCallback(() => {
    setDirection("right");
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection("left");
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    timerRef.current = setInterval(goNext, AUTOPLAY_MS);
    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isHovered, goNext]);

  const handleDotClick = (index: number) => {
    goTo(index, index > current ? "right" : "left");
  };

  const review = reviews[current];

  return (
    <section className="w-full relative bg-[#eaf4fd] py-12 md:py-24 overflow-hidden font-inter">
      {/* Decorative Image */}
      <Image
        src="/cus_rev.png"
        alt=""
        width={140}
        height={140}
        className="absolute -bottom-16 left-[-20px] w-[140px] h-auto object-cover opacity-80 pointer-events-none z-0"
      />

      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12 relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h4 className="text-[#2a8fd4] text-[11px] font-bold tracking-[1.32px] uppercase mb-4 flex items-center gap-2">
            CUSTOMER REVIEWS
          </h4>
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-[44px] font-bold font-plus-jakarta-sans text-[#1c2d3e] leading-tight mb-6 tracking-[-0.88px]">
              What Our Customers <span className="text-[#2a8fd4]">Say</span>
            </h2>
          </AnimateOnScroll>
          <p className="text-[#4a6278] text-[17px] max-w-lg leading-relaxed">
            Hundreds of Manchester homes and businesses trust MZ Cleaners. Here&apos;s what some of them say.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="w-full max-w-2xl mb-8 flex items-center justify-center gap-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Prev arrow */}
          <button
            onClick={goPrev}
            aria-label="Previous review"
            className="shrink-0 w-10 h-10 rounded-full border border-[#c5dff0] bg-white text-[#2a8fd4] flex items-center justify-center hover:bg-[#2a8fd4] hover:text-white hover:border-[#2a8fd4] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Card viewport */}
          <div className="relative w-full overflow-hidden">
            <div
              key={current}
              className="bg-white border border-[#c5dff0] rounded-[18px] p-8 flex flex-col animate-testimonial-in"
              style={{ "--slide-from": direction === "right" ? "24px" : "-24px" } as React.CSSProperties}
            >
              <div className="text-[#c5dff0] text-4xl font-serif leading-none mb-4">&quot;</div>
              <div className="text-[#f59e0b] text-[16px] tracking-[2px] mb-4">★★★★★</div>
              <p className="text-[#4a6278] text-[14.5px] leading-[25.38px] mb-8 italic min-h-[100px]">
                {review.text}
              </p>

              <div className="border-t border-[#c5dff0] pt-6 flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-[22px] flex items-center justify-center text-white font-plus-jakarta-sans font-extrabold text-[15px] shrink-0"
                  style={{ background: "linear-gradient(135deg, #2a8fd4, #5bb8f5)" }}
                >
                  {review.initials}
                </div>
                <div>
                  <div className="text-[#1c2d3e] text-[14px] font-bold leading-tight mb-1">
                    {review.name}
                  </div>
                  <div className="text-[#8fa3b8] text-[12px] leading-tight">
                    {review.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={goNext}
            aria-label="Next review"
            className="shrink-0 w-10 h-10 rounded-full border border-[#c5dff0] bg-white text-[#2a8fd4] flex items-center justify-center hover:bg-[#2a8fd4] hover:text-white hover:border-[#2a8fd4] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center gap-2.5 mb-12">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              aria-label={`Show review ${index + 1}`}
              className="p-1.5"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-6 h-2.5 bg-[#2a8fd4]"
                    : "w-2.5 h-2.5 bg-[#c5dff0] hover:bg-[#9cc9ea]"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Read All Reviews Button */}
        <AnimateOnScroll animation="fade-up" delay={400}>
          <Link href="/reviews" className="inline-flex items-center justify-center gap-2 border-2 border-[#2a8fd4] text-[#2a8fd4] hover:bg-[#2a8fd4] hover:text-white transition-colors duration-300 rounded-[10px] px-8 h-[47px] font-plus-jakarta-sans font-bold text-[15px] cursor-pointer">
            Read All Reviews
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </AnimateOnScroll>
      </div>

      <style jsx>{`
        @keyframes testimonial-in {
          from {
            opacity: 0;
            transform: translateX(var(--slide-from, 24px));
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-testimonial-in {
          animation: testimonial-in 400ms ease-out;
        }
      `}</style>
    </section>
  );
}