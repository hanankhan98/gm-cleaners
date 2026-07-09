import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrustBar from "@/components/TrustBar";
import WelcomeSection from "@/components/WelcomeSection";
import WhatWeOffer from "@/components/WhatWeOffer";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ExpectationsSection from "@/components/ExpectationsSection";
import ServicesSummary from "@/components/ServicesSummary";
import PromiseSection from "@/components/PromiseSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Hero />
      <TrustBar />
      <WelcomeSection />
      <WhyChooseUs />
      <WhatWeOffer />
      <PromiseSection />
      <TestimonialSection />
      {/* 
      <StatsSection />
      <FeaturesSection />
      <ExpectationsSection />
      <ServicesSummary />
      */}
      <CTASection />
    </main>
  );
}
