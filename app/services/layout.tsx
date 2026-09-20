import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domestic & Commercial Cleaning Services | MZ Cleaners",
  description: "Explore our range of professional cleaning services in Manchester including deep cleaning, end of tenancy, and office cleans.",
  alternates: {
    canonical: "https://mzcleaners.co.uk/services", 
  }
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}