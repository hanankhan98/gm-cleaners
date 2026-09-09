import Link from 'next/link';
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function WelcomeSection() {
  return (
    <section className="w-full py-8 md:py-16 bg-white relative overflow-hidden">
      {/* Optional faint background pattern here if needed, based on image */}
      <div className="absolute top-0 left-0 -translate-x-1/4 translate-y-1/4 opacity-[0.03] pointer-events-none">
        {/* Placeholder for topographic pattern, skip for now to keep clean */}
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Content */}
          <div className="lg:max-w-[580px] flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
              <div className="w-[18px] h-[2px] bg-[#2A8FD4] hidden lg:block"></div>
              <h3 className="text-[#2A8FD4] font-inter font-bold text-[11px] uppercase tracking-[1.32px] leading-none">
                About MZ Cleaners
              </h3>
            </div>

            <AnimateOnScroll animation="fade-left" delay={100}>
              <h2 className="font-plus-jakarta font-bold text-[32px] md:text-[44px] leading-[1.18] tracking-[-0.88px] text-[#1C2D3E] mb-6">
                Welcome to <br />
                <span className="text-[#2A8FD4]">MZ Cleaners</span>
              </h2>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="space-y-6 font-inter font-normal text-[16.5px] leading-[29.37px] text-[#4A6278] mb-10">
                <p>
                  At MZ Cleaners, we are proud to be one of Manchester&apos;s most trusted
                  professional cleaning companies. Whether you need a thorough deep clean
                  at home, a reliable end-of-tenancy clean, or a scheduled commercial
                  cleaning service for your business, our experienced and friendly team is
                  here to help.
                </p>
                <p>
                  We believe every home and workplace deserves to be clean, healthy, and
                  welcoming. That&apos;s why we go above and beyond on every job, paying close
                  attention to detail and treating every property as if it were our own.
                </p>
                <p>
                  Based in Manchester, we serve clients across Greater Manchester and
                  surrounding areas, offering flexible scheduling, competitive pricing, and
                  consistently outstanding results.
                </p>
              </div>
            </AnimateOnScroll>

            <Link 
              href="/services"
              className="group flex items-center justify-center gap-3 w-[233.58px] h-[47px] border-[2px] border-[#2A8FD4] rounded-[10px] text-[#2A8FD4] font-plus-jakarta font-bold text-[15px] transition-all duration-300 ease-out hover:bg-[#2A8FD4] hover:text-white"
            >
              Learn More About Us
              <svg className="group-hover:stroke-white stroke-[#2A8FD4] transition-colors" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.125 7.5H11.875" strokeWidth="1.5625" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.5 3.125L11.875 7.5L7.5 11.875" strokeWidth="1.5625" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Right Content - Features */}
          <div className="lg:w-[540px] lg:mr-8 flex flex-col items-center lg:items-center gap-4 w-full">
            
            {/* Card 1 */}
            <AnimateOnScroll animation="fade-up" delay={100} className="w-full">
              <div className="w-full max-w-[540px] h-auto min-h-[80px] md:h-[98px] rounded-[18px] border border-[#C5DFF0] bg-[#F8FAFB] flex items-center px-4 md:px-6 gap-3 md:gap-5 py-3 md:py-0 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
                <div className="w-[44px] md:w-[52px] h-[44px] md:h-[52px] flex-shrink-0 rounded-[14px] border border-[#C5DFF0] bg-[#EAF4FD] flex items-center justify-center text-xl md:text-2xl">
                  🏆
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-plus-jakarta font-bold text-[15px] md:text-[17px] leading-none text-[#1C2D3E] mb-1 md:mb-2">
                    Quality Assured
                  </h4>
                  <p className="font-inter font-normal text-[12.5px] md:text-[13.5px] leading-tight md:leading-none text-[#4A6278]">
                    Trusted by homes & businesses across Manchester
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={200} className="w-full">
              <div className="w-full max-w-[540px] h-auto min-h-[80px] md:h-[98px] rounded-[18px] border border-[#C5DFF0] bg-[#F8FAFB] flex items-center px-4 md:px-6 gap-3 md:gap-5 py-3 md:py-0 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
                <div className="w-[44px] md:w-[52px] h-[44px] md:h-[52px] flex-shrink-0 rounded-[14px] border border-[#C5DFF0] bg-[#EAF4FD] flex items-center justify-center text-xl md:text-2xl">
                  🛡️
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-plus-jakarta font-bold text-[15px] md:text-[17px] leading-none text-[#1C2D3E] mb-1 md:mb-2">
                    Fully Insured & DBS Checked
                  </h4>
                  <p className="font-inter font-normal text-[12.5px] md:text-[13.5px] leading-tight md:leading-none text-[#4A6278]">
                    Complete peace of mind on every single clean
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={300} className="w-full">
              <div className="w-full max-w-[540px] h-auto min-h-[80px] md:h-[98px] rounded-[18px] border border-[#C5DFF0] bg-[#F8FAFB] flex items-center px-4 md:px-6 gap-3 md:gap-5 py-3 md:py-0 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
                <div className="w-[44px] md:w-[52px] h-[44px] md:h-[52px] flex-shrink-0 rounded-[14px] border border-[#C5DFF0] bg-[#EAF4FD] flex items-center justify-center text-xl md:text-2xl">
                  ⭐
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-plus-jakarta font-bold text-[15px] md:text-[17px] leading-none text-[#1C2D3E] mb-1 md:mb-2">
                    5★ Rated on Google
                  </h4>
                  <p className="font-inter font-normal text-[12.5px] md:text-[13.5px] leading-tight md:leading-none text-[#4A6278]">
                    Consistently excellent results, guaranteed
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={400} className="w-full">
              <div className="w-full max-w-[540px] h-auto min-h-[80px] md:h-[98px] rounded-[18px] border border-[#C5DFF0] bg-[#F8FAFB] flex items-center px-4 md:px-6 gap-3 md:gap-5 py-3 md:py-0 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
                <div className="w-[44px] md:w-[52px] h-[44px] md:h-[52px] flex-shrink-0 rounded-[14px] border border-[#C5DFF0] bg-[#EAF4FD] flex items-center justify-center text-xl md:text-2xl">
                  ♻️
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-plus-jakarta font-bold text-[15px] md:text-[17px] leading-none text-[#1C2D3E] mb-1 md:mb-2">
                    Eco-Friendly Cleaning
                  </h4>
                  <p className="font-inter font-normal text-[12.5px] md:text-[13.5px] leading-tight md:leading-none text-[#4A6278]">
                    Safe for children, pets, and the environment
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </div>
    </section>
  );
}
