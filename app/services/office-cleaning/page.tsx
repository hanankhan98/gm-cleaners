import type { Metadata } from "next";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Office Cleaning Manchester | Professional Workplace Cleaners - MZ Cleaners",
  description: "Reliable office cleaning in Manchester for desks, floors, kitchens, toilets, meeting rooms, and reception areas. Flexible daily, weekly, and after-hours cleaning.",
  keywords: ["office cleaning Manchester", "commercial office cleaners", "workplace cleaning Manchester", "daily office cleaning", "after-hours office cleaning", "professional office cleaners"],
  alternates: { canonical: "https://www.mzcleaners.co.uk/services/office-cleaning" },
  openGraph: {
    title: "Office Cleaning Manchester | MZ Cleaners",
    description: "Keep your Manchester workplace clean, presentable, and ready for staff and visitors with a flexible professional office cleaning service.",
    url: "https://www.mzcleaners.co.uk/services/office-cleaning",
    siteName: "MZ Cleaners",
    images: [{ url: "/services_page/for_your_busniess/Office cleaning Manchester.jpg", width: 1200, height: 630, alt: "Professional office cleaning service in Manchester" }],
    locale: "en_GB",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Office Cleaning Manchester | MZ Cleaners", description: "Flexible daily, weekly, and after-hours office cleaning across Manchester.", images: ["/services_page/for_your_busniess/Office cleaning Manchester.jpg"] },
};

export default function OfficeCleaningPage() {
  return (
    <ServiceDetailPage
      service={{
        title: "Office Cleaning Manchester",
        intro: "A clean, organised workplace helps your team work comfortably and gives visitors the right first impression. Our Manchester office cleaning service fits around your working day.",
        description: `MZ Cleaners provides reliable office cleaning for businesses across Manchester and Greater Manchester. We clean offices, studios, shared workspaces, meeting rooms, reception areas, staff kitchens, toilets, corridors, and other everyday work environments. Whether you need a small office cleaned once a week or a busy workplace maintained every day, we can discuss a practical schedule around your staff, opening hours, access arrangements, and budget.

      A CLEANER WORKPLACE FOR STAFF AND VISITORS

      Offices collect dust, fingerprints, food crumbs, paper waste, and everyday marks quickly. High-use areas such as door handles, desks, kitchen worktops, shared equipment, and toilets need consistent attention rather than an occasional rushed clean. A planned service helps keep the workplace presentable and means your employees are not left responsible for cleaning tasks that take them away from their normal work.

      We work discreetly and professionally, taking care around computers, documents, furniture, confidential material, and business equipment. Our team can clean before staff arrive, after the working day ends, or at another agreed time that causes minimal disruption. We can also prioritise visible areas before an important meeting, inspection, or client visit when a one-off additional clean is needed.

      WHAT OUR OFFICE CLEANING COVERS

      Work areas can be dusted and wiped according to the surfaces and equipment present. Desks, tables, shelves, ledges, window sills, chairs, skirting boards, doors, handles, switches, and accessible fittings are checked as part of the agreed routine. We avoid disturbing papers or personal belongings unless instructions have been provided, and we can focus on clear surfaces so the cleaning team can work efficiently.

      Floors are vacuumed, swept, or mopped according to the material and level of use. Carpets, rugs, hard floors, entrances, corridors, stairs, and areas beneath accessible furniture all contribute to how clean a workplace feels. Reception areas and meeting rooms receive particular attention because they form part of the first impression for customers, candidates, contractors, and partners visiting your business.

      Staff kitchens and refreshment areas are cleaned around worktops, sinks, taps, cupboard fronts, appliance exteriors, tables, chairs, floors, and waste points. Toilets and washrooms are cleaned and sanitised around toilets, basins, taps, mirrors, dispensers, floors, handles, and other high-touch surfaces. The exact checklist can be adapted to your premises and the facilities your staff use most.

      CLEANING AROUND YOUR OPERATING HOURS

      Businesses have different routines, so we offer scheduling options that can work around them. Early morning cleaning suits offices that want a fresh environment when employees arrive. Evening or after-hours cleaning reduces interruptions during calls, meetings, and customer appointments. Weekly visits can suit smaller offices, while daily or several-times-per-week plans may be appropriate for larger teams and shared facilities.

      Before starting, we discuss keys, alarms, access codes, parking, lifts, stairs, cleaning cupboards, waste arrangements, water access, and any areas that should remain private. We can agree who will provide access and how completed work or urgent issues should be reported. Clear arrangements help each visit run smoothly and reduce the need for staff to supervise routine cleaning.

      A CONSISTENT COMMERCIAL CLEANING ROUTINE

      A dependable office clean is built around repeatable standards. We can agree a regular checklist covering daily priorities, weekly detail, and occasional tasks. Daily work may focus on high-touch points, toilets, kitchens, floors, waste, and visible surfaces. Weekly or periodic attention can include skirting boards, internal glass, less-used rooms, cupboard fronts, meeting-room details, and areas that do not need cleaning every day.

      We can also discuss additional services when the office needs a deeper reset. Carpet cleaning, window cleaning, after-builders cleaning, upholstery care, and sanitisation can be arranged or considered separately depending on the condition of the premises. If your office has specialist equipment, delicate finishes, or security requirements, tell us before the first visit so the method can be planned responsibly.

      HEALTH, HYGIENE, AND PROFESSIONAL PRESENTATION

      Cleanliness supports a more comfortable workplace, although routine cleaning is not a substitute for specialist infection control or medical decontamination. We pay attention to touchpoints such as handles, switches, shared tables, taps, keyboards where appropriate, phones, and kitchen surfaces. We use suitable products for the surface and can discuss lower-odour or eco-friendly options where they fit your requirements.

      Cleaning removes everyday dirt and residue, but it cannot repair damaged flooring, remove every permanent stain, or restore worn furniture. We work carefully and will point out existing damage, access limitations, or surfaces that need specialist treatment rather than using an unnecessarily aggressive method.

      OFFICE CLEANING ACROSS MANCHESTER

      MZ Cleaners supports offices, professional practices, creative studios, small businesses, and shared workplaces across Manchester and Greater Manchester. We can help you choose a useful frequency based on staff numbers, footfall, floor types, facilities, and the standard you want to maintain. A short site discussion or clear description of the premises helps us prepare an accurate quote.

      Tell us the size of your office, preferred cleaning times, number of washrooms and kitchens, access arrangements, and any areas that need special attention. We will help create a straightforward cleaning plan that keeps your workplace ready for the next working day, without unnecessary disruption to your team.`,
        image: "/services_page/for_your_busniess/Office cleaning Manchester.webp",
        benefits: ["Daily, weekly, or scheduled office cleaning", "Desks, floors, kitchens, toilets, and reception areas", "Early morning and after-hours options", "A clear routine adapted to your workplace", "Care around equipment, documents, and furnishings", "Flexible commercial cleaning across Manchester"],
      }}
    />
  );
}
