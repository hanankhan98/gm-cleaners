"use client";

import React from 'react';

const tabs = [
  { label: 'All Photos', count: 11 },
  { label: 'Before & After', count: 4 },
  { label: 'Residential', count: 3 },
  { label: 'Commercial', count: 3 },
  { label: 'Kitchen', count: 1 },
];

interface GalleryFilterProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function GalleryFilter({ activeTab, onTabChange }: GalleryFilterProps) {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="flex flex-wrap items-center justify-center gap-2 py-4 md:py-5 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.label;
            return (
              <button
                key={tab.label}
                onClick={() => onTabChange(tab.label)}
                className={`flex items-center gap-2 rounded-full py-[14px] px-[22px] font-plus-jakarta-sans font-semibold text-[14px] transition-all whitespace-nowrap ${
                  isActive
                    ? 'text-[#2a8fd4] border-b-[3px] border-[#2a8fd4] rounded-none'
                    : 'text-[#4a6278] hover:text-[#2a8fd4] rounded-none'
                }`}
              >
                {tab.label}
                <span
                  className={`inline-flex items-center justify-center min-w-[22px] h-[18px] rounded-full px-[7px] text-[11px] font-bold ${
                    isActive ? 'bg-[#2a8fd4] text-white' : 'bg-[#eaf4fd] text-[#2a8fd4]'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
