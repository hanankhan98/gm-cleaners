import type { Metadata } from "next";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Kitchen Cleaning Manchester | Degreasing & Sanitising - MZ Cleaners",
  description:
    "Professional kitchen cleaning in Manchester. We degrease hobs, ovens, and extractor fans, and sanitise worktops, cupboards, sinks, and floors. Get a free quote today.",
  keywords: [
    "kitchen cleaning Manchester",
    "kitchen deep clean Manchester",
    "oven and hob cleaning",
    "kitchen degreasing service",
    "extractor fan cleaning Manchester",
    "professional kitchen cleaners",
  ],
  alternates: {
    canonical: "https://www.mzcleaners.co.uk/services/kitchen-cleaning",
  },
  openGraph: {
    title: "Kitchen Cleaning Manchester | MZ Cleaners",
    description:
      "Bring back the shine with detailed kitchen cleaning across Manchester. Worktops, appliances, cupboards, and floors, degreased and sanitised.",
    url: "https://www.mzcleaners.co.uk/services/kitchen-cleaning",
    siteName: "MZ Cleaners",
    images: [
      {
        url: "/services_page/foryourhome/Kitchen cleaning Manchester.webp",
        width: 1200,
        height: 630,
        alt: "Professional kitchen cleaning service in Manchester by MZ Cleaners",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchen Cleaning Manchester | MZ Cleaners",
    description:
      "Hobs, ovens, and extractor fans degreased. Cupboards, tiles, sinks, and taps sanitised. Book a free quote today.",
    images: ["/services_page/foryourhome/Kitchen cleaning Manchester.webp"],
  },
};

export default function KitchenCleaningPage() {
  return (
    <ServiceDetailPage
      service={{
        title: "Kitchen Cleaning Manchester",
        intro:
          "Bring back the shine with a detailed kitchen clean covering worktops, appliances, cupboards, and floors across Manchester and Greater Manchester.",
        description:
          "MZ Cleaners' kitchen cleaning service tackles the grease, food residue, and limescale that build up in even the most well-kept kitchens. We degrease hobs, ovens, and extractor fans, sanitise worktops, sinks, and taps, and clean cupboards, tiles, and flooring to remove everyday grime. Whether you need a one-off deep clean before a big event or a regular refresh to keep your kitchen hygienic and welcoming, our team covers every surface that matters most.",
        image: "/services_page/foryourhome/Kitchen cleaning Manchester.webp",
        benefits: [
          "Hobs, ovens, and extractor fans degreased",
          "Cupboards, tiles, sinks, and taps cleaned",
          "Detailed degreasing and sanitisation of all surfaces",
          "Worktops and splashbacks left streak-free",
          "Kitchen flooring thoroughly cleaned",
          "Available as a one-off deep clean or regular service",
        ],
      }}
    />
  );
}