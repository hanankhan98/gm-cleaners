"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = ["Home", "Services", "Why Choose Us", "Gallery", "Reviews", "Contact"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateLinks, setAnimateLinks] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      setTimeout(() => setAnimateLinks(true), 50);
    } else {
      setAnimateLinks(false);
    }
  }, [menuOpen]);

  return (
    <header className="w-full sticky top-0 left-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1440px] mx-auto h-[72px] px-4 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={220}
            height={60}
            className="h-auto w-auto max-h-[60px] object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-[14.5px] font-medium text-[rgba(74,98,120,1)] hover:text-[#2A8FD4] transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+447535048548"
            className="flex items-center justify-center gap-2 w-[120px] h-[37px] rounded-[10px] border border-[rgba(197,223,240,1)] text-[#2A8FD4] text-[14.5px] font-medium hover:bg-blue-50 transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_68_76)">
                <path d="M13.75 10.5751V12.4501C13.7507 12.6241 13.715 12.7964 13.6453 12.9559C13.5756 13.1154 13.4733 13.2586 13.345 13.3762C13.2168 13.4939 13.0654 13.5835 12.9005 13.6393C12.7356 13.695 12.5609 13.7157 12.3875 13.7001C10.4643 13.4911 8.61687 12.8339 6.99375 11.7813C4.83735 10.649 3.06968 8.89657 1.91875 6.75006C0.895725 5.12151 0.266566 3.27683 0.0812468 1.36256C0.0656726 1.19025 0.0860382 1.01658 0.141055 0.85255C0.196071 0.688518 0.28454 0.537692 0.400863 0.40962C0.517185 0.281548 0.658828 0.179018 0.816826 0.108519C0.974824 0.0380203 1.14574 0.00108832 1.31875 6.05952e-05H3.19375C3.49706 -0.00292468 3.79112 0.104485 4.0211 0.302269C4.25108 0.500052 4.4013 0.774715 4.44375 1.07506C4.52312 1.67506 4.66937 2.26444 4.88125 2.83131C4.96534 3.05501 4.98354 3.29813 4.93369 3.53186C4.88384 3.76559 4.76804 3.98013 4.6 4.15006L3.80625 4.94381C4.69597 6.50853 5.99153 7.80409 7.55625 8.69381L8.35 7.90006C8.51993 7.73202 8.73447 7.61622 8.9682 7.56637C9.20192 7.51652 9.44504 7.53472 9.66875 7.61881C10.2356 7.83069 10.825 7.97694 11.425 8.05631C11.759 7.748 12.2018 7.58499 12.656 7.60316C13.1102 7.62133 13.5386 7.81918 13.8469 8.15319C14.1552 8.48719 14.3182 8.93 14.3 9.38419C14.2819 9.83838 14.084 10.2667 13.75 10.5751Z" stroke="#2A8FD4" strokeWidth="1.5625" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_68_76">
                  <rect width="15" height="15" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            Call Now
          </a>
          <Link
            href="/quote"
            className="flex items-center justify-center w-[159px] h-[38px] rounded-[10px] bg-[#2A8FD4] text-[rgba(255,255,255,0.92)] text-[14.5px] font-medium transition-transform hover:scale-105"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden relative w-8 h-8 flex items-center justify-center"
        >
          <span className={`block w-6 h-[2.5px] bg-[#4A6278] rounded-full absolute transition-all duration-300 ${menuOpen ? 'rotate-45' : '-translate-y-[5px]'}`}></span>
          <span className={`block w-6 h-[2.5px] bg-[#4A6278] rounded-full absolute transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-[2.5px] bg-[#4A6278] rounded-full absolute transition-all duration-300 ${menuOpen ? '-rotate-45' : 'translate-y-[5px]'}`}></span>
        </button>
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
              {navItems.map((item, i) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-[18px] font-semibold text-white/90 hover:text-white transition-colors border-b border-white/10 pb-4 block"
                  style={{
                    opacity: animateLinks ? 1 : 0,
                    transform: animateLinks ? "translateX(0)" : "translateX(20px)",
                    transition: `opacity 400ms ease-out ${i * 80}ms, transform 400ms ease-out ${i * 80}ms`,
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
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
