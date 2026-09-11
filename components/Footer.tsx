import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full relative bg-[#1a2f45] overflow-hidden font-inter text-[12px] text-white/60">
      {/* Decorative Bubbles */}
      <img
        src="/footer_bubble.png"
        alt=""
        className="absolute top-0 right-0 w-[600px] md:w-[800px] lg:w-[1000px] h-auto object-contain pointer-events-none opacity-50 z-0"
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-12 pt-20">
        <div className="flex flex-col md:flex-row justify-between pb-12 border-b border-white/10 gap-10 md:gap-4">

          {/* Left Column: Brand & Socials */}
          <div className="flex flex-col items-center md:items-start max-w-[320px] mx-auto md:mx-0">
            <img src="/logo.png" alt="MZ Cleaners Logo" className="w-[147px] h-auto mb-6 brightness-0 invert" />
            <p className="text-[14px] leading-[25px] text-white/60 mb-8 text-center md:text-left">
              MZ Cleaners is a trusted professional cleaning company serving Manchester and Greater Manchester. We deliver outstanding residential and commercial cleaning services with reliability, care, and attention to detail.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com/YOUR_PAGE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MZ Cleaners on Facebook"
                className="w-10 h-10 bg-white/10 rounded-[10px] flex items-center justify-center text-white/75 hover:bg-white/20 transition-colors cursor-pointer"
              >
                <span className="font-bold text-[15px]">f</span>
              </a>
              <a
                href="https://linkedin.com/company/YOUR_PAGE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MZ Cleaners on LinkedIn"
                className="w-10 h-10 bg-white/10 rounded-[10px] flex items-center justify-center text-white/75 hover:bg-white/20 transition-colors cursor-pointer"
              >
                <span className="font-bold text-[15px]">in</span>
              </a>
              <a
                href="https://x.com/YOUR_PAGE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MZ Cleaners on X"
                className="w-10 h-10 bg-white/10 rounded-[10px] flex items-center justify-center text-white/75 hover:bg-white/20 transition-colors cursor-pointer"
              >
                <span className="font-bold text-[15px]">𝕏</span>
              </a>
            </div>
          </div>

          {/* Middle Column: Services */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-plus-jakarta-sans text-white text-[12px] tracking-[1.2px] uppercase mb-6 text-center md:text-left">
              Services
            </h4>
            <div className="flex w-full max-w-[310px] flex-col gap-3 md:items-start">
              <details className="group w-full">
                <summary className="flex cursor-pointer list-none items-center justify-between text-[14px] font-semibold text-white/80 hover:text-white [&::-webkit-details-marker]:hidden">
                  Residential Cleaning
                  <span className="text-lg leading-none transition-transform group-open:rotate-180" aria-hidden="true">⌄</span>
                </summary>
                <div className="mt-3 flex flex-col gap-2 border-l border-white/20 pl-4">
                  <Link href="/services/regular-house-cleaning" className="text-[13px] text-white/60 hover:text-white transition-colors">Regular House Cleaning</Link>
                  <Link href="/services/deep-cleaning" className="text-[13px] text-white/60 hover:text-white transition-colors">Deep Cleaning</Link>
                  <Link href="/services/move-in-cleaning" className="text-[13px] text-white/60 hover:text-white transition-colors">Move-In Cleaning</Link>
                  <Link href="/services/move-out-cleaning" className="text-[13px] text-white/60 hover:text-white transition-colors">Move-Out Cleaning</Link>
                  <Link href="/services/end-of-tenancy-cleaning" className="text-[13px] text-white/60 hover:text-white transition-colors">End of Tenancy Cleaning</Link>
                  <Link href="/services/kitchen-cleaning" className="text-[13px] text-white/60 hover:text-white transition-colors">Kitchen Cleaning</Link>
                  <Link href="/services/bathroom-cleaning" className="text-[13px] text-white/60 hover:text-white transition-colors">Bathroom Cleaning</Link>
                  <Link href="/services/dusting-vacuuming-mopping" className="text-[13px] text-white/60 hover:text-white transition-colors">Dusting, Vacuuming &amp; Mopping</Link>
                  <Link href="/services/laundry-service" className="text-[13px] text-white/60 hover:text-white transition-colors">Laundry Service</Link>
                </div>
              </details>

              <details className="group w-full">
                <summary className="flex cursor-pointer list-none items-center justify-between text-[14px] font-semibold text-white/80 hover:text-white [&::-webkit-details-marker]:hidden">
                  Commercial and Office Services
                  <span className="text-lg leading-none transition-transform group-open:rotate-180" aria-hidden="true">⌄</span>
                </summary>
                <div className="mt-3 flex flex-col gap-2 border-l border-white/20 pl-4">
                  <Link href="/services/office-cleaning" className="text-[13px] text-white/60 hover:text-white transition-colors">Office Cleaning</Link>
                  <Link href="/services/commercial-premises" className="text-[13px] text-white/60 hover:text-white transition-colors">Commercial Premises</Link>
                  <Link href="/services/retail-shop-cleaning" className="text-[13px] text-white/60 hover:text-white transition-colors">Retail Shop Cleaning</Link>
                  <Link href="/services/health-safe-cleaning" className="text-[13px] text-white/60 hover:text-white transition-colors">Health Safe Cleaning</Link>
                  <Link href="/services/scheduled-daily-cleaning" className="text-[13px] text-white/60 hover:text-white transition-colors">Scheduled Daily Cleaning</Link>
                  <Link href="/services/weekly-monthly-contracts" className="text-[13px] text-white/60 hover:text-white transition-colors">Weekly &amp; Monthly Contracts</Link>
                </div>
              </details>

              <Link href="/quote" className="text-[14px] text-white/60 hover:text-white transition-colors">Get a Free Quote</Link>
            </div>
          </div>

          {/* Right Column: Company */}
          <div className="flex flex-col items-center md:items-start md:pr-16">
            <h4 className="font-plus-jakarta-sans text-white text-[12px] tracking-[1.2px] uppercase mb-6 text-center md:text-left">
              Company
            </h4>
            <div className="flex flex-col items-center md:items-start gap-4">
              <Link href="/" className="text-[14px] text-white/60 hover:text-white transition-colors">About Us</Link>
              <Link href="/why-choose-us" className="text-[14px] text-white/60 hover:text-white transition-colors">Why Choose Us</Link>
              <Link href="/#reviews" className="text-[14px] text-white/60 hover:text-white transition-colors">Customer Reviews</Link>
              <Link href="/gallery" className="text-[14px] text-white/60 hover:text-white transition-colors">Gallery</Link>
              <Link href="/contact" className="text-[14px] text-white/60 hover:text-white transition-colors">Contact</Link>
              <Link href="/blog/top-neighbourhoods-for-renters-manchester" className="text-[14px] text-white/60 hover:text-white transition-colors">Blog</Link>
              <Link href="/privacy-policy" className="text-[14px] text-white/60 hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="py-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="text-[12.5px] text-white/40 text-center lg:text-left">
            © 2026 MZ Cleaners. All Rights Reserved. Manchester, Greater Manchester.
          </div>
          <div className="text-[11.5px] text-white/30 text-center lg:text-right">
            Cleaning Services Manchester &nbsp;|&nbsp; House Cleaning Manchester &nbsp;|&nbsp; Office Cleaning Manchester
          </div>
        </div>
      </div>
    </footer>
  );
}