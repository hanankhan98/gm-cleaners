import type { Metadata } from "next";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Regular House Cleaning Manchester | Weekly & Fortnightly Cleaners - MZ Cleaners",
  description:
    "Professional regular house cleaning in Manchester. Weekly or fortnightly visits covering all rooms and living areas, built around your routine. Get a free quote today.",
  keywords: [
    "regular house cleaning Manchester",
    "weekly cleaning service Manchester",
    "fortnightly house cleaners",
    "domestic cleaning Manchester",
    "recurring home cleaning service",
    "reliable house cleaners Manchester",
  ],
  alternates: {
    canonical: "https://www.mzcleaners.co.uk/services/regular-house-cleaning",
  },
  openGraph: {
    title: "Regular House Cleaning Manchester | MZ Cleaners",
    description:
      "Keep your home fresh, comfortable, and consistently clean with a reliable weekly or fortnightly service across Manchester and Greater Manchester.",
    url: "https://www.mzcleaners.co.uk/services/regular-house-cleaning",
    siteName: "MZ Cleaners",
    images: [
      {
        url: "/services_page/foryourhome/Regular house cleaning Manchester.webp",
        width: 1200,
        height: 630,
        alt: "Professional regular house cleaning service in Manchester by MZ Cleaners",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regular House Cleaning Manchester | MZ Cleaners",
    description:
      "Weekly or fortnightly visits covering all rooms and main living areas, with flexible cleaning schedules. Book a free quote today.",
    images: ["/services_page/foryourhome/Regular house cleaning Manchester.webp"],
  },
};

export default function RegularHouseCleaningPage() {
  return (
    <ServiceDetailPage
      service={{
        title: "Regular House Cleaning Manchester",
        intro:
          "Keep your home fresh, comfortable, and consistently clean with a reliable weekly or fortnightly service, built around your routine across Manchester.",
        description:
          "MZ Cleaners' regular house cleaning service covers the everyday details that make a home feel genuinely cared for, right across Manchester and Greater Manchester. We clean all rooms, surfaces, and floors, along with the areas that quickly collect dust and clutter between visits, so your home stays consistently presentable rather than needing a big catch-up clean every few weeks. Schedules are flexible, whether you need weekly, fortnightly, or a frequency that suits a busy household, and the same reliable standard is delivered every visit.",
        image: "/services_page/foryourhome/Regular house cleaning Manchester.webp",
        benefits: [
          "Weekly or fortnightly visits",
          "All rooms and main living areas covered",
          "Flexible cleaning schedules to suit your routine",
          "Consistent standard delivered every visit",
          "Ideal for busy households and working professionals",
          "No long-term contracts, cleaning built around you",
        ],
      }}
    />
  );
}