import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cleaning Results & Before/After Gallery | MZ Cleaners",
  description: "View recent photos of our house, end of tenancy, and commercial cleaning projects across Greater Manchester.",
  alternates: {
    canonical: "https://mzcleaners.co.uk/gallery", 
  }
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}