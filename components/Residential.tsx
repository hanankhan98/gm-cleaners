import React from "react";

const services = [
  { title: "Regular House Cleaning", description: "Weekly or fortnightly scheduled cleans for your home" },
  { title: "Deep Cleaning", description: "Thorough top-to-bottom clean covering every area" },
  { title: "Move-In Cleaning", description: "Start fresh in your new home from day one" },
  { title: "Move-Out Cleaning", description: "Leave your old property spotless for handover" },
  { title: "End of Tenancy Cleaning", description: "Landlord-approved cleans to secure your deposit" },
  { title: "Kitchen Cleaning", description: "Deep degreasing and full kitchen sanitisation" },
  { title: "Bathroom Cleaning", description: "Limescale removal and complete sanitisation" },
  { title: "Dusting, Vacuuming & Mopping", description: "Full floor and surface care throughout every room" },
];

export function Residential() {
  return (
    <div className="flex-1 h-[673px] flex flex-col rounded-3xl bg-[#f4f9fd] border border-[#c5dff0] overflow-hidden">
      <div className="shrink-0 bg-[#2a8fd4] h-[104px] flex items-center px-8">
        <div className="rounded-[13px] bg-white/15 w-12 h-12 flex items-center justify-center shrink-0 mr-4">
          <span className="text-xl">🏠</span>
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-white text-[19px] font-bold font-plus-jakarta-sans leading-none mb-1">
            Residential Cleaning
          </div>
          <div className="text-white/75 text-[13px] font-inter leading-none">
            For homes across Manchester
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        {services.map((service, index) => (
          <div
            key={index}
            className="h-[68px] shrink-0 flex items-center border-b border-[#c5dff0] last:border-b-0 px-7"
          >
            <div className="rounded-[12px] bg-[#eaf4fd] border border-[#c5dff0] w-6 h-6 flex items-center justify-center shrink-0 mr-[14px]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.40547 13.1445L9.50703 12.0391L11.3156 13.8164L15.3273 9.82031L16.4367 10.9258L11.3156 16.0195L8.40547 13.1445Z" fill="#2A8FD4"/>
              </svg>
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <div className="text-[#1c2d3e] text-[14.5px] font-semibold font-inter leading-tight truncate">
                {service.title}
              </div>
              <div className="text-[#4a6278] text-[12.5px] font-inter leading-tight truncate">
                {service.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
