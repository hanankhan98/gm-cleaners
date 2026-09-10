import type { Metadata } from "next";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Bathroom Cleaning Manchester | Deep Clean & Limescale Removal - MZ Cleaners",
  description:
    "Professional bathroom cleaning in Manchester. We remove limescale, scrub grout, and sanitise baths, showers, toilets & sinks for a hygienic, sparkling finish. Get a free quote today.",
  keywords: [
    "bathroom cleaning Manchester",
    "bathroom deep clean Manchester",
    "limescale removal Manchester",
    "grout cleaning service",
    "professional bathroom cleaners",
    "shower and toilet sanitising",
  ],
  alternates: {
    canonical: "https://www.mzcleaners.co.uk/services/bathroom-cleaning",
  },
  openGraph: {
    title: "Bathroom Cleaning Manchester | MZ Cleaners",
    description:
      "Hygienic, sparkling bathrooms every time. Limescale removal, grout scrubbing, and full sanitising of baths, showers, toilets and sinks across Manchester.",
    url: "https://www.mzcleaners.co.uk/services/bathroom-cleaning",
    siteName: "MZ Cleaners",
    images: [
      {
        url: "/services_page/foryourhome/Bathroom cleaning Manchester.webp",
        width: 1200,
        height: 630,
        alt: "Professional bathroom cleaning service in Manchester by MZ Cleaners",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Cleaning Manchester | MZ Cleaners",
    description:
      "Limescale removal, grout scrubbing, and full sanitising of baths, showers, toilets and sinks. Book a free quote today.",
    images: ["/services_page/foryourhome/Bathroom cleaning Manchester.webp"],
  },
};

export default function BathroomCleaningPage() {
  return (
    <ServiceDetailPage
      service={{
        title: "Bathroom Cleaning Manchester",
        intro:
          "Get a hygienic, sparkling bathroom with Manchester's trusted cleaning specialists. Our team pays close attention to limescale build-up, grout lines, and fixtures that everyday cleaning tends to miss.",
        description:
          "MZ Cleaners provides professional bathroom cleaning across Manchester and Greater Manchester, covering everything from baths, showers, and toilets to sinks, mirrors, tiles, and floors. Using proven techniques and sanitising products, we tackle stubborn limescale, soap scum, and grout discolouration to leave every surface fresh, hygienic, and polished. Whether you need a one-off deep clean or a regular part of your cleaning schedule, our bathroom cleaning service is built to deliver consistent, spotless results every visit.",
        image: "/services_page/foryourhome/Bathroom cleaning Manchester.webp",
        benefits: [
          "Limescale removal from taps, tiles, and showerheads",
          "Deep grout cleaning and scrubbing",
          "Bath, shower, toilet, and sink sanitisation",
          "Mirrors, tiles, and fixtures polished to a streak-free shine",
          "Safe, effective products suitable for daily-use bathrooms",
          "Available as a one-off deep clean or recurring service",
        ],
      }}
    />
  );
}