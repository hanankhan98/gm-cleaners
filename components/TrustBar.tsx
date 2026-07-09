import React from 'react';

export default function TrustBar() {
  const items = [
    "Fully Insured",
    "DBS Checked Staff",
    "Eco-Friendly Products",
    "Flexible Scheduling",
    "Competitive Pricing",
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes custom-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-custom-marquee {
          animation: custom-marquee 25s linear infinite;
        }
      `}} />
      <div className="w-full h-[78px] bg-[rgba(234,244,253,1)] border-y border-[rgba(197,223,240,1)] flex items-center overflow-hidden">
        <div className="flex items-center h-full w-max animate-custom-marquee hover:[animation-play-state:paused]">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center gap-3 px-8 md:px-14 whitespace-nowrap">
                <div className="w-[5px] h-[5px] rounded-full bg-[rgba(28,45,62,1)] shrink-0"></div>
                <span className="font-inter font-semibold text-[14px] text-[rgba(28,45,62,1)] leading-none mt-[1px]">
                  {item}
                </span>
              </div>
              <div className="w-[1px] h-[34px] bg-[rgba(197,223,240,1)] shrink-0"></div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
