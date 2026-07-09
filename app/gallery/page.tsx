"use client";

import React, { useState } from "react";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryFilter from "@/components/gallery/GalleryFilter";
import FeaturedResults from "@/components/gallery/FeaturedResults";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import ComplementaryGalleryStatistics from "@/components/gallery/ComplementaryGalleryStatistics";
import ResidentialResults from "@/components/gallery/ResidentialResults";
import CommercialResults from "@/components/gallery/CommercialResults";
import CTASection from "@/components/CTASection";

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('All Photos');

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <GalleryHero activeTab={activeTab} onTabChange={setActiveTab} />
      <GalleryFilter activeTab={activeTab} onTabChange={setActiveTab} />
      <FeaturedResults />
      <MasonryGrid filter={activeTab} />
      <ComplementaryGalleryStatistics />
      <ResidentialResults />
      <CommercialResults />
      <CTASection 
        title="Want Results Like These?"
        subtitle="Book MZ Cleaners today and experience the same professional, thorough cleaning across your home or business in Manchester."
        primaryBtnText="Book a Clean Today"
        secondaryBtnText="Contact Us"
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
    </main>
  );
}
