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
        description: `MZ Cleaners' regular house cleaning service covers the everyday details that make a home feel genuinely cared for, right across Manchester and Greater Manchester. We clean all rooms, surfaces, and floors, along with the areas that quickly collect dust and clutter between visits, so your home stays consistently presentable rather than needing a big catch-up clean every few weeks. Schedules are flexible, whether you need weekly, fortnightly, or a frequency that suits a busy household, and the same reliable standard is delivered every visit.

      A RELIABLE ROUTINE FOR A BUSY HOME

      Regular cleaning works best when it is planned around the way your household actually lives. A weekly visit can help manage busy family homes, pets, cooking, visitors, and everyday foot traffic. A fortnightly visit may suit smaller households or homes that need support between their own cleaning routines. We can discuss the frequency, rooms, and priorities that make sense for your property rather than applying the same checklist to every customer.

      Each visit is organised so the most important areas are consistently covered. We dust and wipe accessible surfaces, clean floors, refresh kitchens and bathrooms, empty agreed bins, and pay attention to the edges and touch points that are easy to overlook. Over time, regular visits help prevent dust, grease, soap residue, and general grime from becoming difficult build-up.

      ROOMS AND EVERYDAY SURFACES

      Living rooms and bedrooms can include dusting furniture, shelves, frames, ledges, lamps, doors, handles, skirting boards, and other agreed surfaces. We vacuum carpets, rugs, stairs, and accessible floor edges, then clean hard flooring according to its material. We work around ordinary furniture and personal belongings, while customers can make the most of the visit by clearing small items from the surfaces and floors they want cleaned.

      Kitchens are cleaned around worktops, splashbacks, sinks, taps, cupboard fronts, handles, appliance exteriors, and floors. We remove everyday crumbs, fingerprints, light grease, and surface marks. Bathrooms are refreshed around toilets, basins, baths, showers, mirrors, taps, tiles, floors, and high-touch points, with attention to soap residue, hair, and light limescale. Heavy build-up, oven interiors, and specialist treatments can be discussed as separate priorities.

      WHAT HAPPENS ON A REGULAR VISIT

      1. We confirm the rooms and priority tasks for the visit, taking account of any changes in your household, access, or schedule.

      2. We remove loose dust and cobwebs, then work through agreed surfaces, furniture, fittings, handles, doors, and skirting boards.

      3. We clean kitchens and bathrooms, focusing on food preparation areas, sinks, taps, sanitaryware, mirrors, and high-touch points.

      4. We vacuum carpets, rugs, stairs, and edges, then clean hard floors with suitable products and controlled moisture.

      5. We complete a final check, return moved items where practical, and note any areas that need extra time or a deeper service.

      CONSISTENT STANDARDS WITH FLEXIBLE PRIORITIES

      Every home has different pressure points. One customer may want extra attention in the kitchen, while another may prioritise pet hair, bathrooms, stairs, or children’s rooms. We can agree a core routine and rotate additional tasks as time allows. Periodic deep cleaning can be added when cupboards, skirting boards, appliances, grout, or hard-to-reach areas need more attention than a maintenance visit normally allows.

      We aim to provide a dependable standard on each visit, but the exact result depends on the property’s size, condition, access, clutter, and time booked. A longer appointment may be appropriate for a larger home or a household with several occupants and pets. Clear priorities help the team use the available time effectively and prevent important rooms from being rushed.

      SUITABLE FOR DIFFERENT HOUSEHOLDS

      Regular house cleaning is useful for working professionals, families, older residents, landlords, pet owners, and anyone who would rather spend their free time on something other than catching up with housework. It can also support people returning from travel, managing a busy schedule, or preparing for regular guests. We clean homes across Manchester and Greater Manchester, subject to service availability and access.

      CARE FOR SURFACES AND BELONGINGS

      We use suitable cloths, vacuum attachments, mop heads, and cleaning solutions for common materials including glass, wood, laminate, vinyl, ceramic, stainless steel, and sealed stone. Please tell us about delicate finishes, valuable items, allergies, pets, newly treated floors, or products that must be avoided. We can discuss lower-odour, eco-friendly, and pet-conscious options where appropriate.

      For safety and access, please secure important documents, jewellery, medication, cash, and fragile personal items before the visit. We do not handle hazardous materials, heavy lifting, unsafe areas, or specialist restoration without prior agreement. A tidy access path allows more cleaning to be completed and reduces the risk of items being damaged or misplaced.

      BOOKING A RECURRING SERVICE

      When requesting a quote, tell us the property type, number of bedrooms and bathrooms, preferred day, frequency, floor types, pets, parking arrangements, and the rooms that matter most. We can then recommend a practical visit length and outline what can be covered consistently. There is no need to wait until the home feels unmanageable: a regular routine is most effective when it begins before heavy build-up develops.

      KEEPING THE ROUTINE WORKABLE

      The most useful recurring schedule is one that fits the household rather than creating extra pressure. Let us know about school runs, work-from-home rooms, shift patterns, visitors, pets, or days when access is difficult. We can agree a dependable core checklist and adjust occasional priorities as the home changes. This keeps the service useful through busy periods without losing attention on kitchens, bathrooms, floors, and the rooms used every day.

      Between visits, small daily habits such as wiping spills, opening bathroom ventilation, and keeping floors clear can help the regular service work more effectively. The team can then spend the booked time on cleaning rather than sorting belongings or dealing with preventable build-up. When a property needs more than maintenance, we can discuss a one-off deep clean and then continue with a recurring schedule.

      MZ Cleaners provides regular house cleaning throughout Manchester and Greater Manchester. Book a free quote to arrange weekly, fortnightly, or another suitable cleaning schedule, and enjoy a home that stays fresher, calmer, and easier to maintain between visits.`,
        image: "/services_page/foryourhome/regularhomecleaning.webp",
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