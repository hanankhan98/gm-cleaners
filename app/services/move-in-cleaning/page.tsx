import type { Metadata } from "next";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Move-In Cleaning Manchester | New Home Cleaning Service - MZ Cleaners",
  description:
    "Professional move-in cleaning in Manchester. We sanitise every room, surface, and corner of your new property before you unpack. Get a free quote today.",
  keywords: [
    "move in cleaning Manchester",
    "new home cleaning service",
    "pre move in clean",
    "new property cleaning Manchester",
    "sanitised home clean",
    "professional move in cleaners",
  ],
  alternates: {
    canonical: "https://www.mzcleaners.co.uk/services/move-in-cleaning",
  },
  openGraph: {
    title: "Move-In Cleaning Manchester | MZ Cleaners",
    description:
      "Start your new chapter in a clean, sanitised home before you unpack. Full-property preparation across Manchester and Greater Manchester.",
    url: "https://www.mzcleaners.co.uk/services/move-in-cleaning",
    siteName: "MZ Cleaners",
    images: [
      {
        url: "/services_page/foryourhome/Move in cleaning Manchester.webp",
        width: 1200,
        height: 630,
        alt: "Professional move-in cleaning service in Manchester by MZ Cleaners",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Move-In Cleaning Manchester | MZ Cleaners",
    description:
      "Full-property preparation, surface and floor sanitisation, ready before you unpack. Book a free quote today.",
    images: ["/services_page/foryourhome/Move in cleaning Manchester.webp"],
  },
};

export default function MoveInCleaningPage() {
  return (
    <ServiceDetailPage
      service={{
        title: "Move-In Cleaning Manchester",
        intro:
          "Start your new chapter in a clean, sanitised home before you unpack. Our Manchester team prepares your new property so you can settle in with confidence.",
        description:
          "MZ Cleaners' move-in cleaning service gets your new property in Manchester and Greater Manchester ready before a single box is unpacked. We clean every room, surface, and corner, sanitising kitchens, bathrooms, floors, and storage areas so you're moving into a genuinely fresh space rather than the previous occupants' leftover dust and grime. It's the ideal way to start settled in a home that already feels like your own from day one.",
        image: "/services_page/foryourhome/Move in cleaning Manchester.webp",
        benefits: [
          "Full-property preparation before you move in",
          "Surface and floor sanitisation throughout",
          "Kitchens, bathrooms, and storage areas covered",
          "Removes dust and residue left by previous occupants",
          "Ready before you unpack a single box",
          "Flexible scheduling to fit your moving day",
        ],
      }}
    />
  );
}