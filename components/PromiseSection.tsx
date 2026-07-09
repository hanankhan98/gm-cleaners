import React from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const promises = [
  {
    num: "01",
    title: "Professional & Reliable Service",
    text: "When you book with MZ Cleaners, we arrive on time, complete the job to the agreed standard, and communicate clearly throughout every visit.",
  },
  {
    num: "02",
    title: "Exceptional Attention to Detail",
    text: "We clean the areas others overlook, behind appliances, inside cupboards, grout lines, skirting boards. Thoroughly done every single time.",
  },
  {
    num: "03",
    title: "Friendly & Trustworthy Cleaners",
    text: "All staff are DBS checked and reference verified before joining our team. You can feel completely safe having us in your home or business.",
  },
  {
    num: "04",
    title: "Flexible Appointments",
    text: "Early mornings, evenings, weekends, we work around your schedule to make the entire booking process as easy as possible for you.",
  },
  {
    num: "05",
    title: "Customer Satisfaction Guaranteed",
    text: "If there is ever anything you are not satisfied with, we return to put it right at no extra cost. Your satisfaction is our absolute promise.",
  },
  {
    num: "06",
    title: "Safe Cleaning Methods & Products",
    text: "We use eco-friendly, non-toxic products safe for children, pets, and allergy sufferers. We care for your property and everyone in it.",
  },
];

export default function PromiseSection() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[871px] flex items-center justify-center py-12 md:py-24 overflow-hidden">
      {/* 1. Background Image */}
      <img
        src="/our_promis.png"
        alt="Our Promise Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* 2. Dark Overlay (to make text readable like in the screenshot) */}
      <div className="absolute inset-0 w-full h-full bg-[#101928]/85 z-0" />

      {/* 3. Radial Gradient overlay based on user CSS */}
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(70.71% 70.71% at 50% 50%, rgba(255, 255, 255, 0.03) 1.96%, rgba(255, 255, 255, 0) 1.96%)",
        }}
      />

      {/* 4. Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="mb-16 text-center md:text-left">
          <h4 className="text-[#2a8fd4] text-[13px] font-bold tracking-[1.5px] uppercase mb-4 flex items-center justify-center md:justify-start gap-2 font-inter">
            <span className="w-4 h-[2px] bg-[#2a8fd4] hidden md:block"></span>
            OUR PROMISE
          </h4>
          <AnimateOnScroll animation="fade-left">
            <h2 className="text-[24px] md:text-[44px] font-bold font-plus-jakarta-sans leading-tight mb-6 text-white">
              Why Manchester Trusts{" "}
              <span className="text-[#2a8fd4]">
                MZ Cleaners
              </span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" delay={100}>
            <p className="text-[15px] md:text-[17px] font-inter max-w-2xl leading-relaxed mx-auto md:mx-0 text-white/80">
              We're not just a cleaning company, we're dedicated
              <br className="hidden md:block" />
              professionals who genuinely care about every result we deliver.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promises.map((promise, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
              <div
                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
              >
              <div className="text-[#2a8fd4] font-bold text-sm font-plus-jakarta-sans mb-4">
                {promise.num}
              </div>
              <div className="text-white font-bold text-lg font-inter mb-4">
                {promise.title}
              </div>
              <div className="text-[#94a3b8] text-sm leading-[1.7] font-inter">
                {promise.text}
              </div>
            </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
