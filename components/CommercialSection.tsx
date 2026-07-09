import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const CommercialSection = () => {
  const commercialServices = [
    {
      title: "Office Cleaning",
      desc: "Daily or weekly office cleans covering desks, floors, kitchens, toilets, reception areas, and all communal spaces. Professional environment every single day.",
      icon: "🖥️",
      image: "/services_page/for_your_busniess/Office cleaning Manchester.jpg",
      tags: ["Daily Available", "After Hours", "Contract Based"]
    },
    {
      title: "Commercial Premises",
      desc: "From warehouses and industrial units to larger commercial buildings, we handle all types of commercial cleaning contracts with minimal disruption.",
      icon: "🏭",
      image: "/services_page/for_your_busniess/Commercial premises cleaning Manchester.jpg",
      tags: ["Large Spaces", "Industrial", "Flexible Hours"]
    },
    {
      title: "Retail Shop Cleaning",
      desc: "First impressions matter. We keep your retail environment clean, welcoming, and presentable shop floors, changing rooms, counters, staff rooms, and customer toilets.",
      icon: "🛍️",
      image: "/services_page/for_your_busniess/Retail shop cleaning Manchester.jpg",
      tags: ["Before Opening", "After Closing", "Weekly Plans"]
    },
    {
      title: "Workspace Sanitisation",
      desc: "Thorough sanitisation of desks, chairs, door handles, light switches, phones, and keyboards reducing illness spread and maintaining a healthy working environment.",
      icon: "🧴",
      image: "/services_page/for_your_busniess/Workspace sanitisation Manchester.jpg",
      tags: ["High-Touch Areas", "Anti-Bacterial", "Health Safe"]
    },
    {
      title: "Scheduled Daily Cleaning",
      desc: "Structured daily cleaning contracts for businesses that require a spotless environment every morning. Early starts, late finishes, we work around you completely.",
      icon: "📅",
      image: "/services_page/for_your_busniess/Daily office cleaning Manchester.jpg",
      tags: ["Daily Contract", "Early Morning", "Consistent Team"]
    },
    {
      title: "Weekly & Monthly Contracts",
      desc: "Flexible weekly and monthly commercial cleaning contracts with no long-term tie-in. Professional results at a frequency and budget that works for your business.",
      icon: "📋",
      image: "/services_page/for_your_busniess/Weekly monthly cleaning contract Manchester.jpg",
      tags: ["No Long Tie-In", "Flexible Plans", "Fixed Price"]
    }
  ];

  return (
    <>
      {/* Desktop: Commercial section with flex alignment matching navbar padding */}
      <div className="w-full bg-[#f4f9fd] hidden lg:block">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12 text-left text-[16px] text-[#2a8fd4] font-inter">
          
          {/* Top: Image + Text flex layout */}
          <AnimateOnScroll animation="fade-left">
          <div className="flex items-center justify-between mb-12 pt-8">
            <div className="w-[50%] shrink-0 shadow-[0px_12px_40px_rgba(42,_143,_212,_0.18)] rounded-[24px] h-[460px] overflow-hidden relative text-[22px] text-[#1c2d3e]">
              <Image className="absolute h-full w-full top-0 right-0 bottom-0 left-0 object-cover" src="/for_your_busniess.jpg" fill sizes="(max-width: 1440px) 50vw, 700px" alt="Commercial Cleaning" />
              <div className="absolute bottom-[20px] left-[20px] shadow-[0px_4px_20px_rgba(0,_0,_0,_0.12)] backdrop-blur-md rounded-xl bg-[rgba(255,255,255,0.95)] w-[251.2px] h-[54px]">
                <div className="absolute top-[calc(50%_-_12px)] left-[18px] flex items-center w-[30.6px] h-[26px]">🏢</div>
                <b className="absolute top-[calc(50%_-_15px)] left-[58.22px] text-[13px] flex items-center w-[150px] h-4">Commercial Cleaning</b>
                <div className="absolute top-[calc(50%_+_1px)] left-[58.22px] text-[11px] text-[#8fa3b8] flex items-center w-[175.4px] h-3.5">{`Daily, weekly & monthly contracts`}</div>
              </div>
            </div>
            <div className="w-[42%] shrink-0 flex flex-col items-start text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[12px] h-0.5 rounded-sm bg-[#2a8fd4]" />
                <b className="text-[11px] tracking-[1.32px] text-[#1c2d3e] uppercase flex items-center h-3.5">For Your Business</b>
              </div>
              <h2 className="text-[40px] xl:text-[44px] tracking-[-0.88px] leading-[1.18] font-plus-jakarta-sans font-bold mb-4">
                <span className="text-[#2a8fd4]">Commercial</span>{' '}
                <span className="text-[#1c2d3e]">& Office<br/>Cleaning</span>
              </h2>
              <p className="text-[#4a6278] text-[16px] leading-[1.78] mb-4">A clean workspace is a productive workspace. MZ Cleaners provides reliable, discreet, and professional commercial cleaning services for offices, retail outlets, and commercial premises throughout Manchester.</p>
              <p className="text-[#4a6278] text-[16px] leading-[1.78] mb-6">We work around your operating hours to minimise disruption, before staff arrive, after close, or any time that suits your business.</p>
              <Link href="/quote" className="w-fit flex items-center gap-3 bg-[#2a8fd4] text-white px-8 py-3.5 rounded-[10px] shadow-[0px_4px_18px_rgba(42,143,212,0.32)] font-plus-jakarta-sans text-[15px] font-bold hover:bg-[#237cbd] transition-colors cursor-pointer">
                Book Commercial Clean
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
              </Link>
            </div>
          </div></AnimateOnScroll>

          {/* 6 Cards Grid */}
          <AnimateOnScroll animation="fade-up" delay={300}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-12 font-inter">
              {commercialServices.map((service, index) => (
                <div key={index} className="rounded-[18px] bg-white border-[#c5dff0] border overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-300">
                  
                  {/* Image Top */}
                  <div className="relative h-[235px] w-full shrink-0">
                    <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f4c81]/90 to-transparent" />
                    <div className="absolute bottom-[16px] left-[16px] font-extrabold text-[18px] text-white font-plus-jakarta-sans drop-shadow-md">
                      {service.title}
                    </div>
                  </div>

                  {/* Content Bottom */}
                  <div className="px-[25px] flex-1 flex flex-col bg-white relative pb-6">
                    
                    {/* Icon */}
                    <div className="w-[45px] h-[42px] mt-[19px] mb-[17px] rounded-[11px] bg-[#eaf4fd] border border-[#c5dff0] flex items-center justify-center text-[20px] text-[#1c2d3e]">
                      <span className="leading-none">{service.icon}</span>
                    </div>

                    <div className="text-[14px] text-[#4a6278] leading-[23.52px] mb-6 flex-1">
                      {service.desc}
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {service.tags.map((tag, tagIndex) => (
                        <div key={tagIndex} className="rounded-[6px] bg-[#eaf4fd] border-[#c5dff0] border px-[11px] h-6 flex items-center justify-center">
                          <span className="font-semibold text-[11px] text-[#1a6daf] whitespace-nowrap">{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>
          </AnimateOnScroll>
      </div>
      </div>
      
      {/* Mobile Fallback Container... we keep the previous existing mobile design for Commercial */}
      <div className="w-full bg-[#f4f9fd] py-6 md:py-10 lg:hidden font-inter">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          
          {/* Section Header */}
          <AnimateOnScroll animation="fade-up">
          <div className="flex flex-col gap-6 items-center mb-8">
            <div className="w-full relative">
              <div className="relative h-[350px] md:h-[420px] w-full rounded-[24px] overflow-hidden shadow-xl bg-gray-200">
                <Image 
                  src="/for_your_busniess.jpg" 
                  alt="Commercial Cleaning" 
                  fill
                  className="object-cover"
                />
                {/* Floating Badge */}
                <div className="absolute bottom-[20px] left-[20px] shadow-[0px_4px_20px_rgba(0,_0,_0,_0.12)] backdrop-blur-md rounded-xl bg-[rgba(255,255,255,0.95)] w-[262px] h-[54px] flex items-center px-[18px] gap-3">
                  <div className="text-xl">🏢</div>
                  <div className="flex flex-col">
                    <b className="text-[13px] text-[#1c2d3e] leading-none mb-1">Commercial Cleaning</b>
                    <span className="text-[11px] text-[#8fa3b8] leading-none">Daily, weekly & monthly contracts</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex items-center gap-3 mb-6 relative justify-center lg:justify-start">
                <div className="h-0.5 bg-[#2a8fd4] w-[12px] rounded-sm" />
                <b className="text-[11px] text-[#1c2d3e] tracking-[1.32px] uppercase">For Your Business</b>
              </div>
              <h2 className="text-[36px] md:text-[44px] font-plus-jakarta-sans font-bold text-[#1c2d3e] mb-6 leading-[1.18] tracking-[-0.88px]">
                <span className="text-[#2a8fd4]">Commercial</span> <span className="text-[#1c2d3e]">& Office<br/>Cleaning</span>
              </h2>
              <p className="text-[#4a6278] text-[16px] leading-[28.48px] mb-6 max-w-[542px]">
                A clean workspace is a productive workspace. MZ Cleaners provides reliable, discreet, and professional commercial cleaning services for offices, retail outlets, and commercial premises throughout Manchester.
              </p>
              <p className="text-[#4a6278] text-[16px] leading-[28.48px] mb-10 max-w-[531px]">
                We work around your operating hours to minimise disruption, before staff arrive, after close, or any time that suits your business.
              </p>
              <Link href="/quote" className="w-fit flex items-center gap-3 bg-[#2a8fd4] text-white px-8 py-3.5 rounded-[10px] shadow-[0px_4px_18px_rgba(42,143,212,0.32)] font-plus-jakarta-sans text-[15px] font-bold hover:bg-[#237cbd] transition-colors mx-auto md:mx-0">
                Book Commercial Clean
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
              </Link>
            </div>
          </div></AnimateOnScroll>

          {/* Commercial Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[26px]">
            {commercialServices.map((service, index) => (
              <AnimateOnScroll animation="fade-up" delay={index * 100} key={index}>
                <div className="rounded-[18px] bg-white border-[#c5dff0] border overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-300">
                  
                  {/* Image Top */}
                  <div className="relative h-[235px] w-full shrink-0">
                    <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f4c81]/90 to-transparent" />
                    <div className="absolute bottom-[16px] left-[16px] font-extrabold text-[18px] text-white font-plus-jakarta-sans drop-shadow-md">
                      {service.title}
                    </div>
                  </div>

                  {/* Content Bottom */}
                  <div className="px-[25px] flex-1 flex flex-col bg-white relative pb-6">
                    
                    {/* Icon */}
                    <div className="w-[45px] h-[42px] mt-[19px] mb-[17px] rounded-[11px] bg-[#eaf4fd] border border-[#c5dff0] flex items-center justify-center text-[20px] text-[#1c2d3e]">
                      <span className="leading-none">{service.icon}</span>
                    </div>

                    <div className="text-[14px] text-[#4a6278] leading-[23.52px] mb-6 flex-1">
                      {service.desc}
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {service.tags.map((tag, tagIndex) => (
                        <div key={tagIndex} className="rounded-[6px] bg-[#eaf4fd] border-[#c5dff0] border px-[11px] h-6 flex items-center justify-center">
                          <span className="font-semibold text-[11px] text-[#1a6daf] whitespace-nowrap">{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                </div>
              </AnimateOnScroll>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};
