import React from 'react';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const locations = [
  'Manchester City Centre', 'Salford', 'Trafford', 'Stockport',
  'Bolton', 'Bury', 'Rochdale', 'Oldham', 'Tameside',
  'Wigan', 'Didsbury', 'Chorlton', 'Stretford', 'Eccles'
];

export default function CoverageMap() {
  return (
    <section className="w-full bg-white py-20 md:py-[100px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between">

          {/* Left - Content + Map */}
          <AnimateOnScroll animation="fade-up" className="w-full lg:w-[660px] shrink-0">

            {/* Tag */}
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <div className="w-[5px] h-[14px] rounded-sm bg-[#2a8fd4] shrink-0 hidden md:block" />
              <span className="font-inter font-bold text-[11px] tracking-[1.32px] uppercase text-[#2a8fd4]">
                Our Coverage
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-plus-jakarta-sans font-bold text-[28px] md:text-[44px] tracking-[-0.88px] leading-[1.18] text-[#1c2d3e] mb-6 text-center md:text-left">
              We Cover Manchester &<br />
              <span className="text-[#2a8fd4]">Beyond</span>
            </h2>

            {/* Paragraphs */}
            <p className="font-inter text-[15px] md:text-[16px] leading-[1.78] text-[#4a6278] mb-6 text-center md:text-left">
              Based in Manchester, we provide professional residential and
              commercial cleaning services across the entire Greater Manchester
              area and surrounding towns and districts.
            </p>
            <p className="font-inter text-[15px] md:text-[16px] leading-[1.78] text-[#4a6278] mb-8 text-center md:text-left">
              Not sure if we cover your area? Give us a call or send a message
              — we're always happy to discuss coverage for your location.
            </p>

            {/* Location Tags */}
            <div className="flex flex-wrap justify-center md:justify-start gap-[10px] mb-10">
              {locations.map((loc, index) => (
                <div
                  key={index}
                  className="rounded-full bg-[#eaf4fd] border border-[#c5dff0] h-8 flex items-center px-4"
                >
                  <span className="font-inter font-semibold text-[12.5px] text-[#1a6daf]">📍 {loc}</span>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-[18px] h-[220px] overflow-hidden border border-[#c5dff0]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d151695.32132035836!2d-2.385145231039702!3d53.48097258836122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester!5e0!3m2!1sen!2suk!4v1718900000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Manchester & Greater Manchester Coverage Area"
              />
            </div>

          </AnimateOnScroll>

          {/* Right - Image */}
          <AnimateOnScroll animation="fade-up" delay={100} className="w-full lg:w-[548px] shrink-0 lg:pt-[124px]">
            <div className="relative w-full aspect-[548/460] rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(42,143,212,0.18)]">
              <Image
                src="/our_converagee.png"
                alt="Covering All of Greater Manchester"
                fill
                className="object-cover"
                sizes="548px"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(15,76,129,0.5)]" />

              {/* Badge */}
              <div className="absolute bottom-6 left-6 right-6 shadow-[0_4px_20px_rgba(0,0,0,0.12)] backdrop-blur-[12px] rounded-[14px] bg-white/96 flex items-center gap-4 px-5 py-3 md:py-0 md:h-[76px]">
                <div className="w-11 h-11 rounded-xl bg-[#2a8fd4] flex items-center justify-center text-xl shrink-0">
                  📍
                </div>
                <div>
                  <h4 className="font-plus-jakarta-sans font-extrabold text-[15px] text-[#1c2d3e]">
                    Covering All of Greater Manchester
                  </h4>
                  <p className="font-inter text-[12.5px] text-[#4a6278]">
                    From the city centre to surrounding towns
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
