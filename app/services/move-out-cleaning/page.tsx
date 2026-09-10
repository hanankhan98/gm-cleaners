import type { Metadata } from "next";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Move-Out Cleaning Manchester | Handover-Ready Clean - MZ Cleaners",
  description:
    "Professional move-out cleaning in Manchester. A thorough, handover-ready clean covering every room for landlords, agents, and new occupants. Get a free quote today.",
  keywords: [
    "move out cleaning Manchester",
    "handover clean Manchester",
    "vacate cleaning service",
    "landlord handover cleaning",
    "property exit clean",
    "professional move out cleaners",
  ],
  alternates: {
    canonical: "https://www.mzcleaners.co.uk/services/move-out-cleaning",
  },
  openGraph: {
    title: "Move-Out Cleaning Manchester | MZ Cleaners",
    description:
      "Leave your property clean, presentable, and ready for its next inspection. Complete handover-ready cleaning across Manchester and Greater Manchester.",
    url: "https://www.mzcleaners.co.uk/services/move-out-cleaning",
    siteName: "MZ Cleaners",
    images: [
      {
        url: "/services_page/foryourhome/Move out cleaning Manchester.webp",
        width: 1200,
        height: 630,
        alt: "Professional move-out cleaning service in Manchester by MZ Cleaners",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Move-Out Cleaning Manchester | MZ Cleaners",
    description:
      "Complete property clean, suitable for landlord handover, with flexible appointment times. Book a free quote today.",
    images: ["/services_page/foryourhome/Move out cleaning Manchester.webp"],
  },
};

export default function MoveOutCleaningPage() {
  return (
    <ServiceDetailPage
      service={{
        title: "Move-Out Cleaning Manchester",
        intro:
          "Leave your property clean, presentable, and ready for its next inspection. Our Manchester team handles the details landlords, agents, and new occupants expect to see.",
        description:
          "MZ Cleaners' move-out cleaning service is designed to make handover simpler and less stressful for properties across Manchester and Greater Manchester. We thoroughly clean kitchens, bathrooms, floors, and every living space, removing built-up dust, marks, and residue so the property is left in excellent condition. Whether you're a tenant vacating a rental or a homeowner preparing for a sale, our detailed approach helps ensure the property is ready for whoever walks through next.",
        image: "/services_page/foryourhome/Move out cleaning Manchester.webp",
        benefits: [
          "Complete property clean, room by room",
          "Suitable for landlord and letting agent handover",
          "Kitchens, bathrooms, and living spaces thoroughly cleaned",
          "Removes marks, dust, and residue before the next occupant",
          "Flexible appointment times to fit your moving schedule",
          "Helps make handover simpler and stress-free",
        ],
      }}
    />
  );
}