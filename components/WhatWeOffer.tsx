import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Residential } from "./Residential";
import { Commercial } from "./Commercial";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function WhatWeOffer() {
  return (
    <section className="relative w-full bg-white py-20 md:py-[100px] flex justify-center overflow-hidden">
      <div className="relative w-full px-4 md:px-12 flex flex-col items-center z-10">
        {/* Top Tagline */}
        <div className="flex items-center justify-center font-inter font-bold text-[#2a8fd4] text-[11px] text-center tracking-[1.32px] mb-4 uppercase">
          What We Offer
        </div>

        {/* Title */}
        <AnimateOnScroll animation="fade-up">
          <h2 className="flex flex-wrap items-center justify-center font-plus-jakarta-sans font-bold text-[32px] md:text-[44px] text-center tracking-[-0.88px] leading-[1.18] mb-4">
            <span className="text-[#1c2d3e] tracking-[-0.39px] mr-2">
              Our Cleaning
            </span>
            <span className="text-[#2a8fd4] tracking-[-0.39px]">Services</span>
          </h2>
        </AnimateOnScroll>

        {/* Subtitle */}
        <AnimateOnScroll animation="fade-up" delay={100}>
          <p className="font-inter font-normal text-[#4a6278] text-[16px] md:text-[17px] text-center tracking-[0] leading-[1.75] mb-8 md:mb-[60px] max-w-[700px]">
            We cover both homes and businesses across Manchester with{" "}
            <br className="hidden md:block" />
            professional, tailored cleaning solutions.
          </p>
        </AnimateOnScroll>

        {/* Services Container */}
        <AnimateOnScroll animation="fade-up" delay={200} className="w-full max-w-[1200px]">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[40px] w-full mb-6 md:mb-12">
            <Residential />
            <Commercial />
          </div>
        </AnimateOnScroll>

        {/* View All Services Button */}
        <AnimateOnScroll animation="fade-up" delay={300}>
          <Link href="/services" className="inline-flex items-center justify-center gap-2 bg-[#2a8fd4] rounded-[10px] shadow-[0px_4px_18px_rgba(42,143,212,0.32)] px-8 py-4 hover:bg-[#237cbd] transition-colors cursor-pointer">
            <span className="font-plus-jakarta-sans font-bold text-white text-[15px] tracking-[0] leading-[15px]">
              View All Services
            </span>
            <ArrowRight className="w-[15px] h-[15px] text-white" />
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
