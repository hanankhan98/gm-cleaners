import type { Metadata } from "next";
import Link from "next/link";

type Area = {
  name: string;
  region: string;
  description: string;
  nearby: string[];
};

const areas: Record<string, Area> = {
  manchester: { name: "Manchester", region: "Manchester city centre and surrounding neighbourhoods", description: "From busy city-centre apartments to family homes near the universities, our local cleaners help Manchester properties stay fresh, hygienic, and ready for everyday life.", nearby: ["City Centre", "Ancoats", "Northern Quarter", "Deansgate", "Castlefield", "Fallowfield"] },
  salford: { name: "Salford", region: "Salford, Salford Quays, MediaCityUK and nearby postcodes", description: "Our Salford cleaning team supports apartments, homes, landlords, and local businesses with dependable cleaning arranged around modern city living and working patterns.", nearby: ["Salford Quays", "MediaCityUK", "Ordsall", "Eccles", "Swinton", "Worsley"] },
  stockport: { name: "Stockport", region: "Stockport and the surrounding residential communities", description: "We provide detailed domestic and commercial cleaning for Stockport properties, including recurring home cleaning, moving cleans, deep cleans, and workplace maintenance.", nearby: ["Edgeley", "Bramhall", "Cheadle", "Heaton Moor", "Marple", "Davenport"] },
  trafford: { name: "Trafford", region: "Trafford and the wider south-west Greater Manchester area", description: "MZ Cleaners delivers flexible cleaning for Trafford homes, offices, shops, and rental properties, with appointments that fit around family routines and business hours.", nearby: ["Stretford", "Urmston", "Altrincham", "Sale", "Timperley", "Hale"] },
  didsbury: { name: "Didsbury", region: "West Didsbury, East Didsbury and nearby south Manchester areas", description: "Our Didsbury cleaners care for apartments, period homes, family properties, and small businesses with detail-led cleaning and straightforward local service.", nearby: ["West Didsbury", "East Didsbury", "Withington", "Burnage", "Fallowfield", "Parrs Wood"] },
  chorlton: { name: "Chorlton", region: "Chorlton-cum-Hardy and neighbouring south Manchester postcodes", description: "We help Chorlton households and businesses maintain clean, comfortable spaces through regular cleaning, one-off deep cleans, and tenancy-ready services.", nearby: ["Chorlton-cum-Hardy", "Whalley Range", "Stretford", "Old Trafford", "Firswood", "Hulme"] },
  sale: { name: "Sale", region: "Sale, Sale Moor and the Trafford border", description: "Our Sale cleaning service gives busy households, landlords, and local workplaces a reliable way to keep their properties presentable, sanitary, and easier to manage.", nearby: ["Sale Moor", "Brooklands", "Ashton upon Mersey", "Timperley", "Stretford", "Urmston"] },
  altrincham: { name: "Altrincham", region: "Altrincham, Timperley, Hale and surrounding areas", description: "From family homes to professional premises, our Altrincham cleaners provide thorough, carefully planned cleaning with flexible appointments and clear communication.", nearby: ["Timperley", "Hale", "Bowdon", "Warrington", "Sale", "Knutsford"] },
  prestwich: { name: "Prestwich", region: "Prestwich, Whitefield and north Manchester communities", description: "MZ Cleaners provides practical home and business cleaning in Prestwich, helping customers maintain high standards without giving up valuable weekends.", nearby: ["Whitefield", "Heaton Park", "Crumpsall", "Broughton", "Bury", "Middleton"] },
  wilmslow: { name: "Wilmslow", region: "Wilmslow and nearby Cheshire and south Manchester locations", description: "Our Wilmslow cleaning team supports homes, offices, and rental properties with consistent cleaning plans built around the way each property is used.", nearby: ["Handforth", "Styal", "Alderley Edge", "Macclesfield", "Cheadle", "Bramhall"] },
};

export function generateStaticParams() {
  return Object.keys(areas).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = areas[slug] ?? areas.manchester;
  return {
    title: `${area.name} Cleaning Services | Domestic & Commercial Cleaners - MZ Cleaners`,
    description: `Professional cleaning services in ${area.name}. MZ Cleaners provides house cleaning, deep cleaning, end of tenancy cleaning and office cleaning across ${area.region}. Get a free quote.`,
    keywords: [`${area.name} cleaning services`, `cleaners in ${area.name}`, `house cleaning ${area.name}`, `deep cleaning ${area.name}`, `commercial cleaning ${area.name}`, `end of tenancy cleaning ${area.name}`],
    alternates: { canonical: `https://www.mzcleaners.co.uk/areas/${slug}` },
    openGraph: { title: `${area.name} Cleaning Services | MZ Cleaners`, description: `Reliable domestic and commercial cleaners serving ${area.region}.`, url: `https://www.mzcleaners.co.uk/areas/${slug}`, siteName: "MZ Cleaners", locale: "en_GB", type: "website" },
  };
}

function getPageSections(area: Area) {
  return [
    { heading: `Professional cleaning services in ${area.name}`, paragraphs: [`${area.description} A clean property should feel comfortable as soon as you walk through the door, but achieving that result consistently takes more than a quick surface tidy. Dust settles in corners, fingerprints build up on doors and switches, grease collects around kitchens, and high-use bathrooms need proper sanitising. Our trained cleaners work methodically through the property so the visible finish and the overlooked details receive the same level of care.`, `MZ Cleaners is a local cleaning company serving ${area.region}. We work with homeowners, tenants, landlords, letting agents, families, professionals, and business owners who want a dependable cleaning service without complicated arrangements. You can book a one-off clean for a specific need or set up a recurring weekly, fortnightly, or monthly schedule. Every visit is planned around the size of the property, its condition, the rooms required, and the outcome you want.`] },
    { heading: `House cleaning for busy ${area.name} homes`, paragraphs: [`Our domestic cleaning service is designed for real homes and real routines. We can clean kitchens, bathrooms, bedrooms, living rooms, hallways, stairs, and other agreed areas, including dusting, vacuuming, mopping, surface wiping, and careful attention to high-touch points. Regular house cleaning helps control everyday dust and grime, while a deeper first visit can reset a home before maintenance cleaning begins. We use suitable products and equipment for the surfaces in your property and can discuss pet-friendly or lower-fragrance options when required.`, `A regular cleaner can be particularly useful for households with demanding jobs, children, pets, limited mobility, or simply too little time. Instead of rushing through chores at the weekend, you have a clear cleaning plan that keeps the property manageable. We aim to arrive prepared, follow an agreed checklist, and leave rooms orderly and hygienic. Our service is also suitable for landlords preparing a property, tenants needing help before an inspection, and homeowners getting ready for guests or a special occasion.`] },
    { heading: `Deep cleaning, moving and tenancy services`, paragraphs: [`When a property needs more than routine maintenance, our deep cleaning service targets built-up dirt and the areas that are commonly missed. Depending on your priorities, this may include detailed kitchen degreasing, bathroom descaling, grout attention, internal doors, skirting boards, reachable high-level surfaces, fixtures, and hard floors. We will confirm the requested scope before the appointment so you know what the service is intended to cover.`, `Our move-in and move-out cleaning services are useful for tenants, landlords, sellers, buyers, and letting agents across ${area.name}. A property that has been thoroughly cleaned is easier to inspect, photograph, market, or settle into. We can focus on kitchens, bathrooms, flooring, cupboards, appliances, and the general presentation of the home. End of tenancy cleaning should be booked with enough time before key handover, especially during busy moving periods, so we can discuss access and any priority rooms in advance.`] },
    { heading: `Commercial and office cleaning in ${area.name}`, paragraphs: [`Clean workspaces support a better experience for staff, customers, visitors, and contractors. We provide commercial cleaning for offices, retail spaces, professional premises, and other agreed workplaces in and around ${area.name}. Services can include entrance and reception cleaning, desk and touchpoint wiping, kitchen and washroom cleaning, vacuuming, mopping, waste handling, and regular presentation checks. We can work before opening, after closing, or at another practical time for your operation.`, `For recurring commercial cleaning, we agree the frequency and areas in advance rather than applying a one-size-fits-all package. A small office may need a short weekly visit, while a busy premises may benefit from daily cleaning and scheduled detail work. Our team can also support one-off deep cleans, post-renovation cleaning, and extra visits before events or inspections. The result is a cleaner, more professional environment without disrupting your working day.`] },
    { heading: `Why local customers choose MZ Cleaners`, paragraphs: [`Customers looking for cleaners in ${area.name} want punctual communication, consistent standards, and a service that respects their property. We build our work around those basics. We listen to what needs attention, explain the cleaning scope, and use a practical checklist for the agreed rooms. Our team takes care around furniture, finishes, belongings, and access instructions, and we are happy to discuss priorities before the first visit.`, `We offer flexible cleaning appointments, professional products, and a clear route to a free quote. Our services cover residential and commercial properties, from regular house cleaning and bathroom cleaning to office cleaning and end of tenancy work. Because every home and workplace is different, the most accurate price comes from understanding the property and the requested service rather than making assumptions from a generic rate.`] },
    { heading: `Areas near ${area.name} we cover`, paragraphs: [`Our cleaning teams also travel to nearby neighbourhoods and postcodes, including ${area.nearby.join(", ")}. Availability can vary by day and appointment type, so please include your full postcode when requesting a quote. This helps us confirm travel arrangements and recommend the most suitable cleaning schedule for your property.`, `If your exact area is not listed, contact us anyway. MZ Cleaners serves customers throughout Manchester and Greater Manchester, and we will confirm whether your postcode is within our current service area.`] },
  ];
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = areas[slug] ?? areas.manchester;
  const sections = getPageSections(area);

  return (
    <main className="bg-white text-[#1a2f45]">
      <section className="bg-[#eaf4f4] px-5 pb-16 pt-28 md:px-12 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-[1100px]">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#148b8b]">MZ Cleaners | Manchester & Greater Manchester</p>
          <h1 className="max-w-4xl font-plus-jakarta-sans text-4xl font-bold leading-tight md:text-6xl">Cleaning Services in {area.name}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#496273]">{area.description} {area.name === "Manchester" && "Book now and ask about our 20% off first clean offer."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/quote" className="rounded-[8px] bg-[#148b8b] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#0f6f70]">Get a free quote</Link>
            <Link href="/contact" className="rounded-[8px] border border-[#148b8b] px-6 py-3 font-semibold text-[#148b8b] transition-colors hover:bg-white">Contact our team</Link>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-[1100px] px-5 py-14 md:px-12 md:py-20">
        {sections.map((section) => (
          <section key={section.heading} className="mb-12 last:mb-0">
            <h2 className="mb-5 font-plus-jakarta-sans text-2xl font-bold md:text-3xl">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 40)} className="mb-5 max-w-4xl text-base leading-8 text-[#496273]">{paragraph}</p>)}
          </section>
        ))}
        <div className="mt-10 border-l-4 border-[#f0a35b] bg-[#fff8ef] px-6 py-5 text-[#496273]"><strong className="text-[#1a2f45]">Manchester first-clean offer:</strong> Customers booking in Manchester can ask our team about the current 20% off first clean deal. Offer availability and terms are confirmed when your quote is prepared.</div>
      </article>
    </main>
  );
}