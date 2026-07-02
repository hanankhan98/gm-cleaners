import React from "react";
import CTASection from "@/components/CTASection";

import WhyChooseUsHero from "@/components/why-choose-us/WhyChooseUsHero";
import AboutOurTeam from "@/components/why-choose-us/AboutOurTeam";
import SixReasonsGrid from "@/components/why-choose-us/SixReasonsGrid";
import CompanyStatistics from "@/components/why-choose-us/CompanyStatistics";
import ExpectationsSection from "@/components/why-choose-us/ExpectationsSection";
import OurGuaranteeSection from "@/components/why-choose-us/OurGuaranteeSection";

export const metadata = {
  title: "Why Choose Us | MZ Cleaners",
  description: "Discover why hundreds of Manchester homes and businesses trust MZ Cleaners. 100% satisfaction guarantee, fully insured, and highly trained staff.",
};

export default function WhyChooseUsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Sections */}
      <WhyChooseUsHero />
      <AboutOurTeam />
      <SixReasonsGrid />
      <CompanyStatistics />
      <ExpectationsSection />
      <OurGuaranteeSection />
      
      <CTASection 
        title="Join Over 500 Happy Manchester Clients"
        subtitle="Experience the MZ Cleaners difference for yourself. Get your free, no-obligation quote today we respond within 2 hours."
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
    </main>
  );
}
