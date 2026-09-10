import type { Metadata } from "next";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Dusting, Vacuuming & Mopping Manchester | Floor & Surface Cleaning - MZ Cleaners",
  description:
    "Professional dusting, vacuuming, and mopping service in Manchester. We refresh surfaces, carpets, rugs, and hard flooring throughout your home. Get a free quote today.",
  keywords: [
    "dusting vacuuming mopping Manchester",
    "floor cleaning service Manchester",
    "carpet vacuuming Manchester",
    "hard floor mopping",
    "surface dusting service",
    "home floor care Manchester",
  ],
  alternates: {
    canonical: "https://www.mzcleaners.co.uk/services/dusting-vacuuming-mopping",
  },
  openGraph: {
    title: "Dusting, Vacuuming & Mopping Manchester | MZ Cleaners",
    description:
      "Complete surface and floor care for a cleaner, more comfortable home. Dusting, carpet and rug vacuuming, and careful mopping of hard flooring across Manchester.",
    url: "https://www.mzcleaners.co.uk/services/dusting-vacuuming-mopping",
    siteName: "MZ Cleaners",
    images: [
      {
        url: "/services_page/foryourhome/Dusting vacuuming mopping Manchester.webp",
        width: 1200,
        height: 630,
        alt: "Professional dusting, vacuuming and mopping service in Manchester by MZ Cleaners",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dusting, Vacuuming & Mopping Manchester | MZ Cleaners",
    description:
      "Dusting, carpet and rug vacuuming, and careful mopping of hard flooring throughout your home. Book a free quote today.",
    images: ["/services_page/foryourhome/Dusting vacuuming mopping Manchester.webp"],
  },
};

export default function DustingVacuumingMoppingPage() {
  return (
    <ServiceDetailPage
      service={{
        title: "Dusting, Vacuuming & Mopping Manchester",
        intro:
          "Complete surface and floor care for a cleaner, more comfortable home. Our Manchester team refreshes every room, from top surfaces down to the flooring.",
        description:
          "MZ Cleaners' dusting, vacuuming, and mopping service is a focused refresh for the surfaces and floors throughout your property in Manchester and Greater Manchester. We remove built-up dust from furniture, shelves, and fittings, vacuum carpets and rugs to lift embedded dirt, and mop hard flooring with care to leave every room looking and feeling noticeably cleaner. It's a great standalone service for a quick home refresh, or a regular add-on alongside your other cleaning visits.",
        image: "/services_page/foryourhome/Dusting vacuuming mopping Manchester.webp",
        benefits: [
          "Thorough dusting across every room",
          "Carpets, rugs, and hard floors vacuumed and mopped",
          "Skirting boards and light fittings dusted",
          "Furniture, shelves, and surfaces wiped down",
          "Ideal as a standalone refresh or regular add-on",
          "Careful, damage-safe techniques for all flooring types",
        ],
      }}
    />
  );
}