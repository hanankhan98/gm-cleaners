"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const residentialServices = [
    { name: "Regular House Cleaning", href: "/services/regular-house-cleaning" },
    { name: "Deep Cleaning", href: "/services/deep-cleaning" },
    { name: "Move-In Cleaning", href: "/services/move-in-cleaning" },
    { name: "Move-Out Cleaning", href: "/services/move-out-cleaning" },
    { name: "End of Tenancy Cleaning", href: "/services/end-of-tenancy-cleaning" },
    { name: "Kitchen Cleaning", href: "/services/kitchen-cleaning" },
    { name: "Bathroom Cleaning", href: "/services/bathroom-cleaning" },
    { name: "Dusting, Vacuuming & Mopping", href: "/services/dusting-vacuuming-mopping" },
    { name: "Laundry Service", href: "/services/laundry-service" },
  ];

  const commercialServices = [
    { name: "Office Cleaning", href: "/services/office-cleaning" },
    { name: "Commercial Premises", href: "/services/commercial-premises" },
    { name: "Retail Shop Cleaning", href: "/services/retail-shop-cleaning" },
    { name: "Health Safe Cleaning", href: "/services/health-safe-cleaning" },
    { name: "Scheduled Daily Cleaning", href: "/services/scheduled-daily-cleaning" },
    { name: "Weekly & Monthly Contracts", href: "/services/weekly-monthly-contracts" },
  ];

  const areas = [
    { name: "Manchester", href: "/areas/manchester" },
    { name: "Salford", href: "/areas/salford" },
    { name: "Stockport", href: "/areas/stockport" },
    { name: "Trafford", href: "/areas/trafford" },
    { name: "Didsbury", href: "/areas/didsbury" },
    { name: "Chorlton", href: "/areas/chorlton" },
    { name: "Sale", href: "/areas/sale" },
    { name: "Altrincham", href: "/areas/altrincham" },
    { name: "Prestwich", href: "/areas/prestwich" },
    { name: "Wilmslow", href: "/areas/wilmslow" },
  ];

  return (
    <footer className="w-full relative bg-[#1a2f45] overflow-hidden font-inter text-[12px] text-white/60">
      {/* Decorative Bubbles */}
      <Image
        src="/footer_bubble.png"
        alt=""
        width={1000}
        height={1000}
        className="absolute top-0 right-0 w-[600px] md:w-[800px] lg:w-[1000px] h-auto object-contain pointer-events-none opacity-50 z-0"
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-12 pt-20">
        <div className="flex flex-col md:flex-row justify-between pb-12 border-b border-white/10 gap-10 md:gap-4">

          {/* Left Column: Brand & Socials */}
          <div className="flex flex-col items-center md:items-start max-w-[320px] mx-auto md:mx-0">
            <Image src="/logo1.png" alt="MZ Cleaners Logo" width={165} height={46} className="w-[147px] h-auto mb-6 " />
            <p className="text-[14px] leading-[25px] text-white/60 mb-8 text-center md:text-left">
              MZ Cleaners is a trusted professional cleaning company serving Manchester and Greater Manchester. We deliver outstanding residential and commercial cleaning services with reliability, care, and attention to detail.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61594641351943"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MZ Cleaners on Facebook"
                className="w-10 h-10 bg-white/10 rounded-[10px] flex items-center justify-center text-white/75 hover:bg-white/20 transition-colors cursor-pointer"
              >
                <span className="font-bold text-[15px]">f</span>
              </a>
              <a
                href="https://www.instagram.com/mzcleanersltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[40px] h-[40px] rounded-[10px] bg-white/10 flex items-center justify-center text-white/75 hover:bg-white/20 transition"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="https://www.google.com/preferences/source?q=mzcleaners.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                title="Add Us as a Preferred Source on Google"
                aria-label="Add Us as a Preferred Source on Google"
                className="w-[40px] h-[40px] rounded-[10px] bg-white/10 flex items-center justify-center text-white/75 hover:bg-white/20 transition"
              >
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Middle Column: Services */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-plus-jakarta-sans text-white text-[12px] tracking-[1.2px] uppercase mb-6 text-center md:text-left">
              Services
            </h4>
            <div className="flex w-full max-w-[310px] flex-col gap-3 md:items-start">
              
              {/* Residential Cleaning Accordion */}
              <div className="w-full">
                <button
                  type="button"
                  onClick={() => toggleSection("residential")}
                  className="flex w-full cursor-pointer items-center justify-between text-[14px] font-semibold text-white/80 hover:text-white transition-colors text-left"
                >
                  <span>Residential Cleaning</span>
                  <span className={`text-xs transition-transform duration-200 ${openSection === "residential" ? "rotate-180" : ""}`}>
                    
                  </span>
                </button>

                {openSection === "residential" && (
                  <div className="mt-2 flex flex-col gap-2 border-l border-white/20 pl-4 py-1">
                    {residentialServices.map((service, idx) => (
                      <Link 
                        key={idx}
                        href={service.href} 
                        className="text-[13px] text-white/60 hover:text-white transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Commercial and Office Services Accordion */}
              <div className="w-full">
                <button
                  type="button"
                  onClick={() => toggleSection("commercial")}
                  className="flex w-full cursor-pointer items-center justify-between text-[14px] font-semibold text-white/80 hover:text-white transition-colors text-left"
                >
                  <span>Commercial and Office Services</span>
                  <span className={`text-xs transition-transform duration-200 ${openSection === "commercial" ? "rotate-180" : ""}`}>
                    
                  </span>
                </button>

                {openSection === "commercial" && (
                  <div className="mt-2 flex flex-col gap-2 border-l border-white/20 pl-4 py-1">
                    {commercialServices.map((service, idx) => (
                      <Link 
                        key={idx}
                        href={service.href} 
                        className="text-[13px] text-white/60 hover:text-white transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Areas We Cover: hover on desktop, click on touch devices */}
              <div className="group relative w-full">
                <button
                  type="button"
                  onClick={() => toggleSection("areas")}
                  aria-expanded={openSection === "areas"}
                  className="flex w-full cursor-pointer items-center justify-between text-left text-[14px] font-semibold text-white/80 transition-colors hover:text-white"
                >
                  <span>Areas We Cover</span>
                  <span className={`text-xs transition-transform duration-200 ${openSection === "areas" ? "rotate-180" : ""}`}>
                    &darr;
                  </span>
                </button>

                <div className={`mt-2 flex-col gap-2 border-l border-white/20 pl-4 py-1 ${openSection === "areas" ? "flex" : "hidden group-hover:flex"}`}>
                  {areas.map((area) => (
                    <Link
                      key={area.href}
                      href={area.href}
                      className="text-[13px] text-white/60 transition-colors hover:text-white"
                    >
                      {area.name} cleaning services
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/quote" className="text-[14px] text-white/60 hover:text-white transition-colors pt-1">
                Get a Free Quote
              </Link>
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