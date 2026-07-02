"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { CommercialSection } from '@/components/CommercialSection';
import CTASection from '@/components/CTASection';
import BookingSteps from '@/components/BookingSteps';
import AdditionalServices from '@/components/AdditionalServices';
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('residential');

  const residentialServices = [
    {
      title: "Regular House Cleaning",
      desc: "Weekly or fortnightly scheduled cleans covering all rooms, surfaces, floors, and general tidying for busy households.",
      icon: "🏡",
      image: "/services_page/foryourhome/Regular house cleaning Manchester.jpg",
      badge: "Popular"
    },
    {
      title: "Deep Cleaning",
      desc: "A thorough top-to-bottom clean covering every corner, inside cupboards, behind appliances, grout lines, and skirting boards.",
      icon: "✨",
      image: "/services_page/foryourhome/Deep cleaning service Manchester.jpg",
    },
    {
      title: "Move-In Cleaning",
      desc: "Start your new chapter in a spotlessly clean home. We sanitise every surface, room, and corner before you unpack a single box.",
      icon: "📦",
      image: "/services_page/foryourhome/Move in cleaning Manchester.jpg"
    },
    {
      title: "Move-Out Cleaning",
      desc: "Leave your property in perfect condition for handover. Professional clean meeting estate agent and landlord expectations.",
      icon: "🚪",
      image: "/services_page/foryourhome/Move out cleaning Manchester.jpg"
    },
    {
      title: "End of Tenancy Cleaning",
      desc: "Landlord-approved cleans to secure your full deposit return. We cover every room your letting agent will inspect.",
      icon: "🔑",
      image: "/services_page/foryourhome/End of tenancy cleaning Manchester.jpg",
      badge: "Most Booked",
      featured: true
    },
    {
      title: "Kitchen Cleaning",
      desc: "Deep degreasing of hobs, ovens, and extractor fans. Surfaces, cupboards, appliances, sinks, taps, and tiles, all sanitised.",
      icon: "🍳",
      image: "/services_page/foryourhome/Kitchen cleaning Manchester.jpg"
    },
    {
      title: "Bathroom Cleaning",
      desc: "Limescale removal, grout scrubbing, toilet, bath, shower and sink sanitisation. Mirrors polished and tiles sparkling.",
      icon: "🚿",
      image: "/services_page/foryourhome/Bathroom cleaning Manchester.jpg"
    },
    {
      title: "Dusting, Vacuuming & Mopping",
      desc: "Complete floor and surface care throughout every room, skirting boards, light fittings, carpets, rugs, and all hard flooring.",
      icon: "🧹",
      image: "/services_page/foryourhome/Dusting vacuuming mopping Manchester.jpg"
    }
  ];

  const commercialServices = [
    {
      title: "Office Cleaning",
      desc: "Daily or weekly office cleans covering desks, floors, kitchens, toilets, reception areas, and all communal spaces.",
      icon: "🖥️",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
      tags: ["Daily Available", "After Hours", "Contract Based"],
      featured: true
    },
    {
      title: "Commercial Premises",
      desc: "From warehouses and industrial units to larger commercial buildings, we handle all types of commercial cleaning contracts.",
      icon: "🏭",
      image: "https://images.unsplash.com/photo-1587560699334-bea5356f9358?q=80&w=600&auto=format&fit=crop",
      tags: ["Large Spaces", "Industrial", "Flexible Hours"],
      featured: true
    },
    {
      title: "Retail Shop Cleaning",
      desc: "First impressions matter. We keep your retail environment clean, welcoming, and presentable shop floors and changing rooms.",
      icon: "🛍️",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop",
      tags: ["Before Opening", "After Closing", "Weekly Plans"],
      featured: true
    },
    {
      title: "Health Safe Cleaning",
      desc: "Thorough sanitisation of desks, chairs, door handles, light switches, phones, and keyboards reducing illness spread.",
      icon: "🧴",
      image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?q=80&w=600&auto=format&fit=crop",
      tags: ["High-Touch Areas", "Anti-Bacterial", "Health Safe"],
      featured: true
    }
  ];

  return (
    <div className="w-full relative bg-white font-inter">
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-r from-[#0f4c81] via-[#1a6daf] to-[#2a8fd4] text-white pt-10 md:pt-14 pb-12 md:pb-16 overflow-hidden">
        {/* Radial Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{ background: "radial-gradient(70.71% 70.71% at 50% 50%, rgba(255, 255, 255, 0.06) 1.96%, rgba(255, 255, 255, 0) 100%)" }}
        />
        
        {/* Bubble Images */}
        <img 
          src="/serviece_hero_buttlbe.png" 
          alt="Bubbles" 
          className="absolute top-1/2 left-0 w-full h-auto -translate-y-1/2 pointer-events-none z-[5]"
        />

        <div className="max-w-[1440px] mx-auto px-4 md:px-12 relative z-10 flex flex-col items-center text-center">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[13px] text-white/60 mb-4 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="opacity-70">›</span>
            <span className="text-white">Services</span>
          </div>

          {/* Heading */}
          <AnimateOnScroll animation="fade-up">
            <h1 className="text-[34px] md:text-[58px] font-extrabold font-plus-jakarta-sans tracking-[-1.74px] leading-tight mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] to-[#5bb8f5]">Cleaning Services</span>
            </h1>
          </AnimateOnScroll>

          {/* Subtitle */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="text-[16px] md:text-[18px] leading-[30.6px] text-white/90 max-w-2xl mx-auto">
              From homes to offices, we provide professional, thorough, and reliable cleaning services across Manchester and Greater Manchester, tailored to your exact needs.
            </p>
          </AnimateOnScroll>

        </div>

        {/* Service Category Badges */}
        <AnimateOnScroll animation="fade-up" delay={200}>
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 md:gap-3 mt-5 md:mt-8 px-4 md:px-8">
          <div className="backdrop-blur-[8px] rounded-full bg-white/12 border border-white/20 h-[35px] shrink-0 flex items-center">
            <span className="px-4 md:px-[26px] text-[12px] md:text-[13px] font-semibold text-white/90">Residential</span>
              </div>
              <div className="backdrop-blur-[8px] rounded-full bg-white/12 border border-white/20 h-[35px] shrink-0 flex items-center">
            <span className="px-4 md:px-[26px] text-[12px] md:text-[13px] font-semibold text-white/90">Commercial</span>
          </div>
          <div className="backdrop-blur-[8px] rounded-full bg-white/12 border border-white/20 h-[35px] shrink-0 flex items-center">
            <span className="px-4 md:px-[26px] text-[12px] md:text-[13px] font-semibold text-white/90">End of Tenancy</span>
              </div>
              <div className="backdrop-blur-[8px] rounded-full bg-white/12 border border-white/20 h-[35px] shrink-0 flex items-center">
            <span className="px-4 md:px-[26px] text-[12px] md:text-[13px] font-semibold text-white/90">Deep Cleaning</span>
              </div>
              <div className="backdrop-blur-[8px] rounded-full bg-white/12 border border-white/20 h-[35px] shrink-0 flex items-center">
            <span className="px-4 md:px-[26px] text-[12px] md:text-[13px] font-semibold text-white/90">Move In / Out</span>
          </div>
        </div></AnimateOnScroll>
      </div>

      <AnimateOnScroll animation="fade-up" delay={100}>
      <div className="w-full shadow-[0px_4px_20px_rgba(42,_143,_212,_0.06)] bg-white border-b border-[#c5dff0] text-center text-[14px] text-[#4a6278] font-inter z-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12 flex items-center justify-center gap-4 md:gap-10 overflow-x-auto h-auto min-h-[56px] md:h-[63px] py-2 md:py-0">
          {/* Tab 1 */}
          <button
            onClick={() => { setActiveTab('residential'); document.getElementById('residential')?.scrollIntoView({ behavior: 'smooth' }); }}
            className={`h-auto md:h-[63px] py-3 md:py-0 shrink-0 flex items-center gap-2 md:gap-3 border-b-[3px] transition-colors bg-transparent ${activeTab === 'residential' ? 'border-[#2a8fd4] text-[#2a8fd4]' : 'border-transparent text-[#4a6278] hover:text-[#2a8fd4]'}`}
          >
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm ${activeTab === 'residential' ? 'bg-[#2a8fd4] text-white' : 'bg-[#eaf4fd] text-[#4a6278]'}`}>🏠</div>
            <span className="font-semibold font-plus-jakarta-sans whitespace-nowrap">Residential Cleaning</span>
          </button>
          {/* Tab 2 */}
          <button
            onClick={() => { setActiveTab('commercial'); document.getElementById('commercial')?.scrollIntoView({ behavior: 'smooth' }); }}
            className={`h-auto md:h-[63px] py-3 md:py-0 shrink-0 flex items-center gap-2 md:gap-3 border-b-[3px] transition-colors bg-transparent ${activeTab === 'commercial' ? 'border-[#2a8fd4] text-[#2a8fd4]' : 'border-transparent text-[#4a6278] hover:text-[#2a8fd4]'}`}
          >
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm ${activeTab === 'commercial' ? 'bg-[#2a8fd4] text-white' : 'bg-[#eaf4fd] text-[#4a6278]'}`}>🏢</div>
            <span className="font-semibold font-plus-jakarta-sans whitespace-nowrap">Commercial & Office</span>
          </button>
          {/* Tab 3 */}
          <button
            onClick={() => { setActiveTab('how-it-works'); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }}
            className={`h-auto md:h-[63px] py-3 md:py-0 shrink-0 flex items-center gap-2 md:gap-3 border-b-[3px] transition-colors bg-transparent ${activeTab === 'how-it-works' ? 'border-[#2a8fd4] text-[#2a8fd4]' : 'border-transparent text-[#4a6278] hover:text-[#2a8fd4]'}`}
          >
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm ${activeTab === 'how-it-works' ? 'bg-[#2a8fd4] text-white' : 'bg-[#eaf4fd] text-[#4a6278]'}`}>⚙️</div>
            <span className="font-semibold font-plus-jakarta-sans whitespace-nowrap">How It Works</span>
          </button>
          {/* Tab 4 */}
          <button
            onClick={() => { setActiveTab('additional-services'); document.getElementById('additional-services')?.scrollIntoView({ behavior: 'smooth' }); }}
            className={`h-auto md:h-[63px] py-3 md:py-0 shrink-0 flex items-center gap-2 md:gap-3 border-b-[3px] transition-colors bg-transparent ${activeTab === 'additional-services' ? 'border-[#2a8fd4] text-[#2a8fd4]' : 'border-transparent text-[#4a6278] hover:text-[#2a8fd4]'}`}
          >
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm ${activeTab === 'additional-services' ? 'bg-[#2a8fd4] text-white' : 'bg-[#eaf4fd] text-[#4a6278]'}`}>➕</div>
            <span className="font-semibold font-plus-jakarta-sans whitespace-nowrap">Additional Services</span>
          </button>
        </div>
      </div></AnimateOnScroll>

      {/* Residential Cleaning Section */}
      <section id="residential" className="w-full bg-white py-6 md:py-10">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          
          {/* Desktop: flex layout matching navbar padding */}
          <AnimateOnScroll animation="fade-left">
          <div className="hidden lg:flex items-center justify-between mb-12">
            <div className="w-[50%] shrink-0 shadow-[0px_12px_40px_rgba(42,_143,_212,_0.18)] rounded-[24px] h-[460px] overflow-hidden relative text-[22px] text-[#1c2d3e]">
              <Image src="/for_your_home.jpg" className="absolute h-full w-full top-0 right-0 bottom-0 left-0 object-cover" fill sizes="(max-width: 1440px) 50vw, 700px" alt="Residential Cleaning" />
              <div className="absolute bottom-[20px] left-[20px] shadow-[0px_4px_20px_rgba(0,_0,_0,_0.12)] [backdrop-filter:blur(8px)] rounded-xl bg-white/95 w-[262.1px] h-[54px]">
                <div className="absolute top-[calc(50%_-_12px)] left-[18px] flex items-center w-[27.5px] h-[26px]">🏠</div>
                <b className="absolute top-[calc(50%_-_15px)] left-[55.13px] text-[13px] text-[#1c2d3e] flex items-center w-[130.5px] h-4">Residential Cleaning</b>
                <div className="absolute top-[calc(50%_+_1px)] left-[55.13px] text-[11px] text-[#8fa3b8] flex items-center w-[189.3px] h-[14px]">Trusted by 500+ Manchester homes</div>
              </div>
            </div>
            <div className="w-[42%] shrink-0 flex flex-col items-start text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[12px] h-0.5 rounded-sm bg-[#2a8fd4]" />
                <b className="text-[11px] tracking-[1.32px] uppercase flex items-center h-3.5 text-[#1c2d3e]">For Your Home</b>
              </div>
              <h2 className="text-[40px] xl:text-[44px] tracking-[-0.88px] leading-[1.18] font-plus-jakarta-sans font-bold mb-4">
                <span className="text-[#2a8fd4]">Residential</span>{' '}
                <span className="text-[#1c2d3e]">Cleaning<br/>Services</span>
              </h2>
              <p className="text-[#4a6278] text-[16px] leading-[1.78] mb-4">Your home is your sanctuary, and we treat it that way. Our residential cleaning team is trained, vetted, and passionate about delivering spotlessly clean results every single time.</p>
              <p className="text-[#4a6278] text-[16px] leading-[1.78] mb-6">Whether you need a one-off deep clean or a regular weekly service, we offer flexible scheduling, eco-friendly products, and a satisfaction guarantee on every visit.</p>
              <Link href="/quote" className="w-fit flex items-center gap-3 bg-[#2a8fd4] text-white px-8 py-3.5 rounded-[10px] shadow-[0px_4px_18px_rgba(42,143,212,0.32)] font-plus-jakarta-sans text-[15px] font-bold hover:bg-[#237cbd] transition-colors">
                Book Residential Clean
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
              </Link>
            </div>
          </div></AnimateOnScroll>

          {/* Mobile Fallback */}
          <AnimateOnScroll animation="fade-up">
          <div className="flex flex-col lg:hidden gap-8 items-center mb-6 font-inter">
            <div className="w-full relative h-[350px] md:h-[420px] rounded-[24px] overflow-hidden shadow-[0px_12px_40px_rgba(42,143,212,0.18)] bg-gray-200">
              <Image 
                src="/for_your_home.jpg" 
                alt="Residential Cleaning" 
                fill
                className="object-cover"
              />
              <div className="absolute bottom-[20px] left-[20px] shadow-[0px_4px_20px_rgba(0,0,0,0.12)] [backdrop-filter:blur(8px)] rounded-xl bg-white/95 w-[262.1px] h-[54px] flex flex-col justify-center px-4">
                <div className="flex items-center gap-2">
                  <div className="text-xl">🏠</div>
                  <div className="flex flex-col">
                    <b className="text-[13px] text-[#1c2d3e] leading-none mb-1">Residential Cleaning</b>
                    <span className="text-[11px] text-[#8fa3b8] leading-none">Trusted by 500+ Manchester homes</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex items-center gap-3 mb-6 relative justify-center lg:justify-start">
                <div className="h-0.5 bg-[#2a8fd4] w-[12px] rounded-sm" />
                <b className="text-[11px] tracking-[1.32px] uppercase">For Your Home</b>
              </div>
              <h2 className="text-[36px] md:text-[44px] font-plus-jakarta-sans font-bold mb-3 leading-[1.18] tracking-[-0.88px]">
                <span className="text-[#2a8fd4]">Residential</span> <span className="text-[#1c2d3e]">Cleaning<br />Services</span>
              </h2>
              <p className="text-[#4a6278] text-[16px] leading-[28.48px] mb-6 max-w-[537px]">
                Your home is your sanctuary, and we treat it that way. Our residential cleaning team is trained, vetted, and passionate about delivering spotlessly clean results every single time.
              </p>
              <p className="text-[#4a6278] text-[16px] leading-[28.48px] mb-10 max-w-[542px]">
                Whether you need a one-off deep clean or a regular weekly service, we offer flexible scheduling, eco-friendly products, and a satisfaction guarantee on every visit.
              </p>
              <Link href="/quote" className="w-fit flex items-center gap-3 bg-[#2a8fd4] text-white px-8 py-3.5 rounded-[10px] shadow-[0px_4px_18px_rgba(42,143,212,0.32)] font-plus-jakarta-sans text-[15px] font-bold hover:bg-[#237cbd] transition-colors mx-auto md:mx-0">
                Book Residential Clean
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
              </Link>
            </div>
          </div></AnimateOnScroll>

          {/* Residential Grid - 6 Cards (Figma Match) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {residentialServices.map((service, index) => (
              <AnimateOnScroll animation="fade-up" delay={index * 100} key={index}>
                <div className="rounded-[18px] bg-white border border-[#c5dff0] overflow-hidden flex flex-col h-full">
                  <div className="relative h-[180px] shrink-0 overflow-hidden">
                    <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(15,76,129,0.55)]" />
                    {service.badge && (
                      <div className="absolute top-3 left-3 rounded-md bg-[#2a8fd4] px-[10px] h-[22px] flex items-center">
                        <span className="text-white text-[10px] font-bold tracking-[0.8px] uppercase">{service.badge}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col p-[23px] pt-[22px] flex-1">
                    <div className="w-11 h-11 rounded-[12px] bg-[#eaf4fd] border border-[#c5dff0] flex items-center justify-center text-center shrink-0">
                      <span className="text-lg">{service.icon}</span>
                    </div>
                    <h3 className="mt-[14px] text-[16px] font-bold font-plus-jakarta-sans text-[#1c2d3e] leading-[20.8px]">
                      {service.title}
                    </h3>
                    <p className="mt-[11px] text-[13.5px] text-[#4a6278] font-inter leading-[22.28px] flex-1">
                      {service.desc}
                    </p>
                    <Link href="/gallery" className="flex items-center gap-[6px] pt-[19px]">
                      <span className="text-[13px] font-bold text-[#2a8fd4]">Get a Quote</span>
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.75 6.5H10.25M10.25 6.5L7 3.25M10.25 6.5L7 9.75" stroke="#2A8FD4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

        </div>
      </section>

      {/* Commercial Cleaning Section */}
      <div id="commercial">
        <CommercialSection />
      </div>

      <div id="how-it-works">
        <BookingSteps />
      </div>

      <div id="additional-services">
        <AdditionalServices />
      </div>
      
      <CTASection 
        title="Need a Custom Cleaning Plan?"
        subtitle="Tell us exactly what you need and we'll put together a tailored cleaning package just for you no obligation, no hidden fees."
        primaryBtnText="Request a Free Quote"
        secondaryBtnText="Call Us Now"
        primaryBtnIcon={
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        }
        secondaryBtnIcon={
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        }
      />
    </div>
  );
}
