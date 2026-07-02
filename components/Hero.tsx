import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section 
      className="relative w-full flex flex-col items-center justify-center pt-8 pb-28 overflow-hidden bg-[#104A7A]"
      style={{
        backgroundImage: "linear-gradient(90deg, rgba(16, 73, 122, 0.95) 0%, rgba(25, 96, 154, 0.9) 45%, rgba(35, 121, 186, 0.7) 100%), url('/hero_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated Floating Bubbles Image */}
      <div className="absolute -left-[30px] md:-left-[60px] top-[0%] h-full z-0 pointer-events-none flex flex-col justify-center">
        <div className="relative w-[220px] h-[440px] md:w-[280px] md:h-[560px] animate-float">
          <Image 
            src="/hero_bubble.png"
            alt="Floating Bubbles"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-[1440px] px-4 md:px-12 mt-4">
        
        {/* Top Badge */}
        <div className="flex items-center justify-center gap-2 px-5 py-2 md:py-0 md:h-[34px] rounded-full bg-[rgba(255,255,255,0.10)] border border-[rgba(255,255,255,0.15)] mb-8 backdrop-blur-md w-fit max-w-[90%] mx-auto">
          <div className="w-[6px] h-[6px] rounded-full bg-[#4ADE80] shrink-0"></div>
          <span className="font-inter font-bold text-[12px] md:text-[13px] text-[rgba(255,255,255,0.95)] leading-tight text-center sm:text-left">
            Serving Manchester & Greater Manchester
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="max-w-[860px] text-center font-plus-jakarta-sans font-bold text-[36px] sm:text-[48px] md:text-[68px] leading-[1.2] md:leading-[1.1] mb-6 tracking-tight px-2">
          <span className="text-white">Professional Residential &</span><br className="hidden md:block" />
          <span className="text-[#9CD3F8]"> Commercial </span><br className="hidden md:block" />
          <span className="text-white">Cleaning Services Across</span><br className="hidden md:block" />
          <span className="text-white"> Manchester</span>
        </h1>

        {/* Subtitle Paragraph */}
        <p className="max-w-[760px] text-center font-inter font-normal text-[15px] sm:text-[17px] md:text-[19px] leading-relaxed md:leading-[32.68px] text-[rgba(255,255,255,0.85)] mb-10 px-4">
          From spotless homes to pristine offices, MZ Cleaners delivers<br className="hidden md:block" />
          reliable, high-quality cleaning services tailored to your needs<br className="hidden md:block" />
          across Manchester and Greater Manchester.
        </p>

        {/* Buttons Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-[60px] w-full max-w-[400px] sm:max-w-none mx-auto">
          {/* Request a Quote */}
          <Link href="/quote" className="flex items-center justify-center gap-2 w-full sm:w-[202px] h-[48px] bg-white rounded-[10px] hover:bg-gray-50 transition-colors shadow-lg cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_43_3572)">
                <path d="M9.33341 1.33301H4.00008C3.64646 1.33301 3.30732 1.47348 3.05727 1.72353C2.80722 1.97358 2.66675 2.31272 2.66675 2.66634V13.333C2.66675 13.6866 2.80722 14.0258 3.05727 14.2758C3.30732 14.5259 3.64646 14.6663 4.00008 14.6663H12.0001C12.3537 14.6663 12.6928 14.5259 12.9429 14.2758C13.1929 14.0258 13.3334 13.6866 13.3334 13.333V5.33301L9.33341 1.33301Z" stroke="#1A6DAF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.33325 1.33301V5.33301H13.3333" stroke="#1A6DAF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.6666 8.66699H5.33325" stroke="#1A6DAF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.6666 11.333H5.33325" stroke="#1A6DAF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_43_3572">
                  <rect width="16" height="16" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span className="font-plus-jakarta-sans font-bold text-[15px] text-[#1A6DAF]">Request a Quote</span>
          </Link>

          {/* Book a Cleaning Service */}
          <Link href="/quote" className="flex items-center justify-center gap-2 w-full sm:w-[259px] h-[48px] bg-[rgba(255,255,255,0.10)] rounded-[10px] backdrop-blur-md border border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.2)] transition-colors cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.66667 2H2V6.66667H6.66667V2Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.9999 2H9.33325V6.66667H13.9999V2Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.9999 9.33301H9.33325V13.9997H13.9999V9.33301Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.66667 9.33301H2V13.9997H6.66667V9.33301Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-plus-jakarta-sans font-bold text-[15px] text-white">Book a Cleaning Service</span>
          </Link>

          {/* Call Now */}
          <a href="tel:+447535048548" className="flex items-center justify-center gap-2 w-full sm:w-[148px] h-[48px] bg-[rgba(255,255,255,0.10)] rounded-[10px] backdrop-blur-md border border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.2)] transition-colors cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_43_3586)">
                <path d="M14.6667 11.2801V13.2801C14.6675 13.4657 14.6294 13.6495 14.5551 13.8196C14.4807 13.9897 14.3716 14.1425 14.2348 14.268C14.0979 14.3935 13.9364 14.4891 13.7605 14.5485C13.5847 14.608 13.3983 14.6301 13.2134 14.6134C11.1619 14.3905 9.19138 13.6895 7.46005 12.5667C5.15989 11.3589 3.27437 9.48968 2.04671 7.20007C0.955489 5.46294 0.284386 3.49528 0.0867121 1.4534C0.0700996 1.2696 0.0918229 1.08436 0.150507 0.909387C0.209191 0.734419 0.303558 0.573539 0.427636 0.436928C0.551713 0.300318 0.702799 0.190952 0.87133 0.115754C1.03986 0.040555 1.22217 0.00116088 1.40671 6.46349e-05H3.40671C3.73025 -0.00311966 4.04391 0.11145 4.28922 0.32242C4.53453 0.533389 4.69476 0.826362 4.74005 1.14673C4.82471 1.78673 4.98071 2.4154 5.20671 3.02006C5.29641 3.25868 5.31582 3.51801 5.26265 3.76732C5.20948 4.01663 5.08595 4.24547 4.90671 4.42673L4.06005 5.2734C5.00908 6.94243 6.39101 8.32436 8.06005 9.2734L8.90671 8.42673C9.08797 8.24749 9.31681 8.12396 9.56612 8.07079C9.81544 8.01762 10.0748 8.03704 10.3134 8.12673C10.918 8.35273 11.5467 8.50873 12.1867 8.5934C12.543 8.26453 13.0153 8.09066 13.4998 8.11004C13.9842 8.12942 14.4412 8.34046 14.77 8.69673C15.0989 9.05301 15.2728 9.52533 15.2534 10.0098C15.234 10.4943 15.023 10.9512 14.6667 11.2801Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_43_3586">
                  <rect width="16" height="16" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span className="font-plus-jakarta-sans font-bold text-[15px] text-white">Call Now</span>
          </a>
        </div>

        {/* Bottom Glass Cards Layer */}
        <div className="relative w-full max-w-[1020px] mx-auto h-auto md:h-[160px] mt-8 flex flex-col md:block gap-4 z-20">
          {/* Main big glass card */}
          <div className="md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 w-full md:w-[760px] h-auto md:h-[132px] bg-[rgba(255,255,255,0.08)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.15)] rounded-[20px] z-10 flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between p-6 md:px-8 shadow-xl gap-6 md:gap-0">
            {/* 100+ Happy Clients */}
            <div className="flex flex-col items-center justify-center w-[40%] md:w-auto md:flex-1 md:border-r border-[rgba(255,255,255,0.15)] md:h-[60%]">
              <span className="font-plus-jakarta-sans font-bold text-[32px] md:text-[40px] text-white leading-none mb-2">100+</span>
              <span className="font-inter font-medium text-[12px] md:text-[13px] text-[rgba(255,255,255,0.85)] text-center">Happy Clients</span>
            </div>
            {/* 5.0 Top Rated */}
            <div className="flex flex-col items-center justify-center w-[40%] md:w-auto md:flex-1 md:border-r border-[rgba(255,255,255,0.15)] md:h-[60%]">
              <span className="font-plus-jakarta-sans font-bold text-[32px] md:text-[40px] text-white leading-none mb-2">5.0★</span>
              <span className="font-inter font-medium text-[12px] md:text-[13px] text-[rgba(255,255,255,0.85)] text-center">Top Rated</span>
            </div>
            {/* 100% Fully Insured */}
            <div className="flex flex-col items-center justify-center w-[40%] md:w-auto md:flex-1 md:border-r border-[rgba(255,255,255,0.15)] md:h-[60%]">
              <span className="font-plus-jakarta-sans font-bold text-[32px] md:text-[40px] text-white leading-none mb-2">100%</span>
              <span className="font-inter font-medium text-[12px] md:text-[13px] text-[rgba(255,255,255,0.85)] text-center">Fully Insured</span>
            </div>
            {/* 50+ Expert Cleaners */}
            <div className="flex flex-col items-center justify-center w-[40%] md:w-auto md:flex-1 md:h-[60%]">
              <span className="font-plus-jakarta-sans font-bold text-[32px] md:text-[40px] text-white leading-none mb-2">50+</span>
              <span className="font-inter font-medium text-[12px] md:text-[13px] text-[rgba(255,255,255,0.85)] text-center leading-[1.3]">Expert<br className="hidden md:block"/>Cleaners</span>
            </div>
          </div>

          {/* Left small glass card */}
          <div className="md:absolute md:bottom-[-20px] md:left-[-40px] lg:left-[-80px] xl:left-[-100px] z-20 w-full md:w-[210px] h-[68px] bg-[rgba(255,255,255,0.08)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.15)] rounded-[14px] flex items-center justify-center md:justify-start px-4 gap-3 shadow-lg hover:scale-105 transition-transform">
            <div className="w-[38px] h-[38px] bg-[rgba(255,255,255,0.15)] rounded-[10px] flex items-center justify-center shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="white"/>
                <path d="M12 2v20c0 0 8-4 8-10V5l-8-3z" fill="#E2E8F0"/>
                <path d="M12 7v10m-3-5h6" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-plus-jakarta-sans font-bold text-[14px] text-white leading-tight mb-[2px]">Fully Insured</span>
              <span className="font-inter font-medium text-[11px] text-[rgba(255,255,255,0.8)] leading-tight">DBS Checked Staff</span>
            </div>
          </div>

          {/* Right small glass card */}
          <div className="md:absolute md:bottom-[-30px] md:right-[-60px] lg:right-[-100px] xl:right-[-130px] z-20 w-full md:w-[240px] h-[68px] bg-[rgba(255,255,255,0.08)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.15)] rounded-[14px] flex items-center justify-center md:justify-start px-4 gap-3 shadow-lg hover:scale-105 transition-transform">
            <div className="w-[38px] h-[38px] bg-[rgba(255,255,255,0.15)] rounded-[10px] flex items-center justify-center shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#FBBF24" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#F59E0B" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-plus-jakarta-sans font-bold text-[14px] text-white leading-tight mb-[2px]">Free Quote in 2 Hours</span>
              <span className="font-inter font-medium text-[11px] text-[rgba(255,255,255,0.8)] leading-tight">No Obligation</span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
