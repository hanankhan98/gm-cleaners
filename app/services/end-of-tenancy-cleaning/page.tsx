import type { Metadata } from "next";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "End of Tenancy Cleaning Manchester | Deposit-Back Clean - MZ Cleaners",
  description:
    "Professional end of tenancy cleaning in Manchester. A landlord-ready clean covering kitchens, bathrooms, floors, and built-in areas to help secure your deposit. Get a free quote today.",
  keywords: [
    "end of tenancy cleaning Manchester",
    "move out cleaning service",
    "landlord clean Manchester",
    "deposit back cleaning",
    "letting agent approved cleaners",
    "rental property cleaning Manchester",
  ],
  alternates: {
    canonical: "https://www.mzcleaners.co.uk/services/end-of-tenancy-cleaning",
  },
  openGraph: {
    title: "End of Tenancy Cleaning Manchester | MZ Cleaners",
    description:
      "A detailed, landlord-ready clean designed to help you leave your rental in excellent condition and secure your deposit back, across Manchester.",
    url: "https://www.mzcleaners.co.uk/services/end-of-tenancy-cleaning",
    siteName: "MZ Cleaners",
    images: [
      {
        url: "/services_page/foryourhome/End of tenancy cleaning Manchester.webp",
        width: 1200,
        height: 630,
        alt: "Professional end of tenancy cleaning service in Manchester by MZ Cleaners",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "End of Tenancy Cleaning Manchester | MZ Cleaners",
    description:
      "Kitchen and bathroom detailing, every room cleaned for handover. Landlord and letting agent approved. Book a free quote today.",
    images: ["/services_page/foryourhome/End of tenancy cleaning Manchester.webp"],
  },
};

export default function EndOfTenancyCleaningPage() {
  return (
    <ServiceDetailPage
      service={{
        title: "End of Tenancy Cleaning Manchester",
        intro:
          "A detailed, landlord-ready clean designed to help you leave your rental in excellent condition and give yourself the best chance of a full deposit back.",
        description:
          "MZ Cleaners' end of tenancy cleaning service is built around what landlords and letting agents actually check during a handover inspection across Manchester and Greater Manchester. We cover kitchens, bathrooms, floors, surfaces, and built-in storage areas in detail, removing limescale, grease, and grime that can otherwise put a deposit at risk. Whether you're a tenant preparing to move out or a landlord getting a property ready for new tenants, our thorough approach is designed to meet the standard letting agents expect.",
        image: "/services_page/foryourhome/End of tenancy cleaning Manchester.webp",
        benefits: [
          "Landlord and letting agent focused checklist",
          "Kitchen and bathroom detailing, including limescale and grease removal",
          "Every room cleaned ready for handover inspection",
          "Built-in cupboards, wardrobes, and storage areas covered",
          "Floors, skirting boards, and surfaces thoroughly cleaned",
          "Helps maximise the chances of a full deposit return",
        ],
      }}
    />
  );
}