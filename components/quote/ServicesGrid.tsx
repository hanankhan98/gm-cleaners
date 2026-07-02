import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const services = [
  { icon: '🏡', title: 'Regular House Cleaning', desc: 'Weekly or fortnightly scheduled cleans for your home' },
  { icon: '✨', title: 'Deep Cleaning', desc: 'Thorough top-to-bottom clean covering every area' },
  { icon: '🔑', title: 'End of Tenancy', desc: 'Landlord-approved cleans to secure your deposit' },
  { icon: '🍳', title: 'Kitchen Cleaning', desc: 'Deep degreasing and full kitchen sanitisation' },
  { icon: '🚿', title: 'Bathroom Cleaning', desc: 'Limescale removal and complete sanitisation' },
  { icon: '🏢', title: 'Office Cleaning', desc: 'Daily or weekly commercial office cleans' },
  { icon: '📦', title: 'Move-In / Move-Out', desc: 'Property cleans for moving in or handing back' },
  { icon: '🏭', title: 'Commercial Cleaning', desc: 'All types of commercial and business premises' }
];

export default function ServicesGrid() {
  return (
    <section className="w-full bg-white py-20 md:py-[100px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <AnimateOnScroll animation="fade-up">
        <div className="flex flex-col items-center text-center mb-12">
          {/* Tag */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-3 h-[3px] rounded-sm bg-[#2a8fd4] shrink-0" />
            <span className="font-inter font-semibold text-[11px] tracking-[1.32px] uppercase text-[#2a8fd4]">
              OUR SERVICES
            </span>
          </div>

          <h2 className="font-plus-jakarta-sans font-bold text-[32px] md:text-[44px] tracking-[-0.88px] leading-[51.92px] text-[#1c2d3e] mb-3">
            What Would You Like Cleaned?
          </h2>
          <p className="font-inter text-[16px] md:text-[17px] leading-[29.75px] text-[#4a6278] max-w-[600px]">
            We cover all of the following cleaning services across Manchester and Greater Manchester.
          </p>
        </div>
        </AnimateOnScroll>

        {/* Grid */}
        <AnimateOnScroll animation="fade-up" delay={100}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((svc, index) => (
            <div
              key={index}
              className="rounded-[18px] bg-[#f4f9fd] border border-[#c5dff0] flex flex-col items-center text-center py-6 px-5 gap-1.5 hover:bg-[#eaf4fd] transition-colors group"
            >
              <div className="w-[52px] h-[52px] rounded-[14px] bg-[#eaf4fd] border border-[#c5dff0] flex items-center justify-center text-[24px] group-hover:bg-[#2a8fd4] group-hover:border-[#2a8fd4] transition-colors">
                <span className="group-hover:brightness-0 group-hover:invert transition-all">{svc.icon}</span>
              </div>
              <h3 className="font-plus-jakarta-sans font-bold text-[14px] text-[#1c2d3e] mt-2">
                {svc.title}
              </h3>
              <p className="font-inter text-[12.5px] leading-[19.38px] text-[#4a6278]">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
