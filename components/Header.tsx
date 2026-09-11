"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

type ServiceLink = { label: string; href: string };
type ServiceGroup = { label: string; children: ServiceLink[] };

const serviceGroups: ServiceGroup[] = [
  {
    label: "Residential Cleaning",
    children: [
      { label: "Regular House Cleaning", href: "/services/regular-house-cleaning" },
      { label: "Deep Cleaning", href: "/services/deep-cleaning" },
      { label: "Move-In Cleaning", href: "/services/move-in-cleaning" },
      { label: "Move-Out Cleaning", href: "/services/move-out-cleaning" },
      { label: "End of Tenancy Cleaning", href: "/services/end-of-tenancy-cleaning" },
      { label: "Kitchen Cleaning", href: "/services/kitchen-cleaning" },
      { label: "Bathroom Cleaning", href: "/services/bathroom-cleaning" },
      { label: "Dusting, Vacuuming & Mopping", href: "/services/dusting-vacuuming-mopping" },
      { label: "Laundry Service", href: "/services/laundry-service" },
    ],
  },
  {
    label: "Commercial and Office Services",
    children: [
      { label: "Office Cleaning", href: "/services/office-cleaning" },
      { label: "Commercial Premises", href: "/services/commercial-premises" },
      { label: "Retail Shop Cleaning", href: "/services/retail-shop-cleaning" },
      { label: "Health Safe Cleaning", href: "/services/health-safe-cleaning" },
      { label: "Scheduled Daily Cleaning", href: "/services/scheduled-daily-cleaning" },
      { label: "Weekly & Monthly Contracts", href: "/services/weekly-monthly-contracts" },
    ],
  },
];

const navItems = [
  { label: "Home" },
  { label: "Services", children: serviceGroups },
  { label: "Why Choose Us" },
  { label: "Gallery" },
  { label: "Reviews" },
  { label: "Contact" },
  { label: "Blog", href: "/blog/top-neighbourhoods-for-renters-manchester" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateLinks, setAnimateLinks] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileServiceGroup, setMobileServiceGroup] = useState<string | null>(null);

  useEffect(() => {
    const animationTimer = setTimeout(() => setAnimateLinks(menuOpen), menuOpen ? 50 : 0);

    return () => clearTimeout(animationTimer);
  }, [menuOpen]);

  return (
    <header className="w-full sticky top-0 left-0 z-50 bg-white border-b border-[#edf1ef] shadow-sm font-inter">
      <div className="hidden lg:block">
        <div className="max-w-[1440px] mx-auto h-[96px] px-8 xl:px-11 flex items-center justify-between">
          <div className="flex flex-col gap-2 text-[#0f4c81] font-bold text-[20px] leading-none">
            <a href="tel:+447535048548" className="flex items-center gap-3 hover:text-[#1a6daf] transition-colors">
              <span className="text-[18px]" aria-hidden="true">☎</span>
              <span>+447535048548</span>
            </a>
          </div>

          <Link href="/" className="flex items-center" aria-label="MZ Cleaners home">
            <Image src="/logo.png" alt="MZ Cleaners" width={220} height={61} className="h-auto w-auto max-h-[61px] object-contain" priority />
          </Link>

          <Link href="/quote" className="flex items-center justify-center gap-3 w-[201px] h-[50px] bg-[#0f4c81] text-white text-[17px] font-bold hover:bg-[#0c3a63] transition-colors">
            <span className="text-[20px]" aria-hidden="true">✦</span>
            Get a Free Quote
          </Link>
        </div>

        <div className="bg-[#f6f7f6] border-t border-[#f0f2f0]">
          <div className="max-w-[1440px] mx-auto min-h-[48px] px-8 xl:px-11 flex items-center justify-between gap-8">
            <div className="flex items-center gap-3 shrink-0 text-[#0f4c81] text-[12px] font-medium">
              <span className="text-[22px]" aria-hidden="true">⌖</span>
              <span>Suite 112a, 53 Derby Street, Manchester</span>
            </div>

            <nav className="flex items-center self-stretch gap-7 xl:gap-9" aria-label="Main navigation">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label} className="group relative flex items-center h-full">
                    <Link
                      href="/services"
                      className="flex items-center gap-1.5 h-full border-b-[3px] border-transparent text-[16px] font-medium text-[#0f4c81] group-hover:border-[#1a6daf] group-hover:text-[#1a6daf] transition-colors whitespace-nowrap"
                    >
                      {item.label}
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="mt-[2px] transition-transform duration-200 group-hover:rotate-180">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>

                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out">
                      <div className="grid w-[580px] grid-cols-2 gap-5 rounded-[14px] border border-[#e8f1fa] bg-white p-5 shadow-[0_12px_32px_rgba(15,76,129,0.18)]">
                        {item.children.map((group) => (
                          <div key={group.label}>
                            <div className="mb-2 border-b border-[#e8f1fa] pb-2 text-[13px] font-bold uppercase tracking-[0.5px] text-[#2a8fd4]">{group.label}</div>
                            {group.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="flex items-center rounded-md px-2 py-2 text-[13.5px] font-medium text-[#0f4c81] hover:bg-[#e8f1fa] hover:text-[#1a6daf] transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href ?? (item.label === "Home" ? "/" : `/${item.label.toLowerCase().replace(/\s+/g, "-")}`)}
                    className="flex items-center h-full border-b-[3px] border-transparent text-[16px] font-medium text-[#0f4c81] hover:border-[#1a6daf] transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            <div className="flex flex-col items-end text-[#0f4c81] text-[14px] leading-[17px] shrink-0">
              <a href="mailto:MzcleanersLtd@gmail.com" className="hover:text-[#1a6daf] transition-colors">✉ MzcleanersLtd@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden h-[60px] px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="MZ Cleaners" width={165} height={46} className="h-auto w-auto max-h-[46px] object-contain" priority />
        </Link>
        <div className="flex items-center gap-3">
          <a href="tel:+447535048548" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e8f1fa] text-[#0f4c81] text-[19px]" aria-label="Call MZ Cleaners">☎</a>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} className="relative w-8 h-8 flex items-center justify-center">
            <span className={`block w-6 h-[2.5px] bg-[#0f4c81] rounded-full absolute transition-all duration-300 ${menuOpen ? 'rotate-45' : '-translate-y-[5px]'}`}></span>
            <span className={`block w-6 h-[2.5px] bg-[#0f4c81] rounded-full absolute transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-[2.5px] bg-[#0f4c81] rounded-full absolute transition-all duration-300 ${menuOpen ? '-rotate-45' : 'translate-y-[5px]'}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setMenuOpen(false)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div
            className="absolute top-0 right-0 w-full max-w-sm h-full bg-gradient-to-b from-[#0f4c81] to-[#1a6daf] shadow-2xl p-8 animate-slide-in"
            onClick={e => e.stopPropagation()}
          >
            {/* Header Row: Logo Left + Close Right */}
            <div className="flex items-center justify-between mb-8">
              <Image
                src="/logo.png"
                alt="Logo"
                width={160}
                height={44}
                className="h-auto w-auto max-h-[40px] object-contain brightness-0 invert"
              />
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-5">
              {navItems.map((item, i) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="border-b border-white/10 pb-4"
                    style={{
                      opacity: animateLinks ? 1 : 0,
                      transform: animateLinks ? "translateX(0)" : "translateX(20px)",
                      transition: `opacity 400ms ease-out ${i * 80}ms, transform 400ms ease-out ${i * 80}ms`,
                    }}
                  >
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between w-full text-[18px] font-semibold text-white/90 hover:text-white transition-colors"
                    >
                      {item.label}
                      <svg width="12" height="8" viewBox="0 0 10 6" fill="none" className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}>
                        <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    <div
                      className="overflow-hidden transition-all duration-300 ease-out"
                      style={{ maxHeight: mobileServicesOpen ? "900px" : "0px" }}
                    >
                      <div className="flex flex-col gap-2 pt-3">
                        {item.children.map((group) => (
                          <div key={group.label}>
                            <button
                              onClick={() => setMobileServiceGroup(mobileServiceGroup === group.label ? null : group.label)}
                              className="flex w-full items-center justify-between py-1 text-left text-[16px] font-semibold text-white"
                            >
                              {group.label}
                              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform duration-200 ${mobileServiceGroup === group.label ? "rotate-180" : ""}`}>
                                <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>
                            {mobileServiceGroup === group.label && (
                              <div className="flex flex-col gap-1 pb-2 pl-3">
                                {group.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    className="py-1 text-[15px] text-white/75 hover:text-white transition-colors"
                                    onClick={() => setMenuOpen(false)}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.label === "Home" ? "/" : `/${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-[18px] font-semibold text-white/90 hover:text-white transition-colors border-b border-white/10 pb-4 block"
                    style={{
                      opacity: animateLinks ? 1 : 0,
                      transform: animateLinks ? "translateX(0)" : "translateX(20px)",
                      transition: `opacity 400ms ease-out ${i * 80}ms, transform 400ms ease-out ${i * 80}ms`,
                    }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
            <div className="mt-10 flex flex-col gap-4">
              <a
                href="tel:+447535048548"
                className="flex items-center justify-center gap-2 h-[50px] rounded-[12px] border-2 border-white/30 text-white text-[16px] font-semibold hover:bg-white/10 transition-colors"
                style={{
                  opacity: animateLinks ? 1 : 0,
                  transform: animateLinks ? "translateX(0)" : "translateX(20px)",
                  transition: `opacity 400ms ease-out ${navItems.length * 80 + 100}ms, transform 400ms ease-out ${navItems.length * 80 + 100}ms`,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.75 10.5751V12.4501c.0007.174-.035.3463-.1047.5058-.0697.1595-.172.3027-.3003.4203-.1282.1177-.2796.2073-.4445.2631-.1649.0557-.3396.0764-.513.0608-1.9232-.209-3.7706-.8662-5.39375-1.9188-2.1564-1.1323-3.92407-2.88473-5.075-5.03125C.895725 5.12151.266566 3.27683.0812468 1.36256c-.0155742-.17231.0047914-.34598.0598082-.51001.055017-.16403.143486-.31486.259809-.44293.116322-.12807.257965-.2306.415964-.3011.157998-.0705.328914-.10743.50188-.1085H3.19375c.30331-.00299.59737.10443.82735.30221.22998.19778.3802.47245.42265.77279.07938.6.22563 1.18938.4375 1.75625.08409.2237.10229.46682.05244.70055-.04985.23373-.16565.44827-.33365.6182l-.79375.79375c.88972 1.56472 2.18528 2.86028 3.75 3.75l.79375-.79375c.16993-.16804.38447-.28384.6182-.33369.23372-.04985.47684-.03165.70055.05244.56687.21188 1.15625.35813 1.75625.4375.334-.3083.7768-.47131 1.231-.45314.4542.01817.8826.21602 1.1909.55003.3083.334.4713.7768.4531 1.231-.0181.45419-.216.88256-.55 1.1909Z" stroke="white" strokeWidth="1.5625" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Call Now
              </a>
              <Link
                href="/quote"
                className="flex items-center justify-center h-[50px] rounded-[12px] bg-white text-[#0f4c81] text-[16px] font-bold shadow-lg hover:shadow-xl transition-all"
                style={{
                  opacity: animateLinks ? 1 : 0,
                  transform: animateLinks ? "translateX(0)" : "translateX(20px)",
                  transition: `opacity 400ms ease-out ${navItems.length * 80 + 200}ms, transform 400ms ease-out ${navItems.length * 80 + 200}ms`,
                }}
                onClick={() => setMenuOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}