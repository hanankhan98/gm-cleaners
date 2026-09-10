import type { Metadata } from "next";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Deep Cleaning Manchester | Top-to-Bottom House Deep Clean - MZ Cleaners",
  description:
    "Professional deep cleaning in Manchester. We tackle skirting boards, grout, cupboards, and behind appliances for a thorough, detailed reset. Get a free quote today.",
  keywords: [
    "deep cleaning Manchester",
    "deep clean service Manchester",
    "house deep clean",
    "one off deep clean",
    "spring cleaning Manchester",
    "professional deep cleaners",
  ],
  alternates: {
    canonical: "https://www.mzcleaners.co.uk/services/deep-cleaning",
  },
  openGraph: {
    title: "Deep Cleaning Manchester | MZ Cleaners",
    description:
      "A thorough top-to-bottom clean for the areas everyday cleaning misses. Corners, skirting boards, grout lines, cupboards, and behind appliances, all handled across Manchester.",
    url: "https://www.mzcleaners.co.uk/services/deep-cleaning",
    siteName: "MZ Cleaners",
    images: [
      {
        url: "/services_page/foryourhome/Deep cleaning service Manchester.webp",
        width: 1200,
        height: 630,
        alt: "Professional deep cleaning service in Manchester by MZ Cleaners",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Cleaning Manchester | MZ Cleaners",
    description:
      "Corners, skirting boards, grout lines, cupboards, and behind appliances, all handled. Book a free quote today.",
    images: ["/services_page/foryourhome/Deep cleaning service Manchester.webp"],
  },
};

export default function DeepCleaningPage() {
  return (
    <ServiceDetailPage
      service={{
        title: "Deep Cleaning Manchester",
        intro:
          "Give your home a thorough top-to-bottom reset with Manchester's trusted deep cleaning specialists. We spend the extra time on areas that regular cleaning routines tend to skip.",
        description:
          "MZ Cleaners' deep cleaning service goes well beyond a standard clean, reaching every corner of your home across Manchester and Greater Manchester. We work through skirting boards, grout lines, cupboards, light fittings, and behind and underneath appliances to lift built-up dust, grease, and grime. It's the ideal choice for a seasonal refresh, pre- or post-event clean, or simply resetting your home to a spotless standard before switching to a regular cleaning schedule.",
        image: "/services_page/foryourhome/Deep cleaning service Manchester.webp",
        benefits: [
          "Detailed room-by-room deep clean",
          "Skirting boards and hard-to-reach areas",
          "Grout lines, cupboards, and behind appliances",
          "Dust and grease removal from light fittings and surfaces",
          "Ideal for one-off refreshes or seasonal cleans",
          "A thorough reset before moving to a regular cleaning plan",
        ],
      }}
    />
  );
}