import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Top 5 Neighbourhoods for Renters in Manchester | MZ Cleaners",
  description:
    "Thinking about renting in Manchester? Explore five popular neighbourhoods, what their properties are like, and what to know before moving in or out.",
  alternates: {
    canonical: "https://mzcleaners.co.uk/blog/top-neighbourhoods-for-renters-manchester",
  },
  openGraph: {
    title: "Top 5 Neighbourhoods for Renters in Manchester | MZ Cleaners",
    description:
      "A practical local guide to five popular Manchester neighbourhoods for renters, from Didsbury and Chorlton to Salford Quays and Stockport.",
    url: "https://mzcleaners.co.uk/blog/top-neighbourhoods-for-renters-manchester",
    siteName: "MZ Cleaners",
    locale: "en_GB",
    type: "article",
  },
};

const areas = [
  "Manchester City Centre",
  "Salford",
  "Trafford",
  "Stockport",
  "Bolton",
  "Bury",
  "Rochdale",
  "Oldham",
  "Tameside",
  "Wigan",
  "Didsbury",
  "Chorlton",
  "Stretford",
  "Eccles",
];

const neighbourhoods = [
  {
    number: "01",
    name: "Didsbury",
    content:
      "Leafy, independent, and a firm favourite with young professionals and families alike. Didsbury has a strong cafe and restaurant scene along Burton Road and School Lane, plus easy tram access into the city centre. Properties here tend to be Victorian conversions and semis, which are beautiful but often have original features such as bay windows, feature fireplaces, and older plumbing. Those details need a bit more care when it comes to move-out cleaning and deposit inspections.",
  },
  {
    number: "02",
    name: "Chorlton",
    content:
      "Just next door to Didsbury, Chorlton has a similar village feel with its own identity. It is known for independent bars, a popular Sunday market, and a slightly younger crowd. Most of the housing stock is Victorian and Edwardian terraces, which is great for character but means letting agents are often thorough about checking skirting boards, sash windows, and original fireplaces during check-out.",
  },
  {
    number: "03",
    name: "Northern Quarter and City Centre",
    content:
      "For anyone who wants to be right in the middle of it, the Northern Quarter and surrounding city-centre developments offer modern high-rise apartments with concierge services, gyms, and rooftop terraces. These flats are usually easier to keep clean day to day, but end-of-tenancy inspections can be detailed. Building management companies often use a thorough inventory checklist, including appliance interiors and less visible corners.",
  },
  {
    number: "04",
    name: "Salford Quays and MediaCityUK",
    content:
      "This newer, waterside part of Greater Manchester is popular with media and tech workers, with the BBC and ITV studios based nearby. Housing is mostly modern apartment blocks, many still under warranty, so move-out standards are usually high and clearly documented in the tenancy agreement. Lifts, communal entrances, balconies, and building access can also be important practical details when arranging a move.",
  },
  {
    number: "05",
    name: "Stockport",
    content:
      "Just south of the city, Stockport has become popular with renters looking for more space for their money. It also has a growing food and culture scene around the Underbanks. Expect a mix of older terraces and newer builds, so move-in and move-out cleaning needs vary more from property to property here than in the more uniform city-centre developments.",
  },
];

export default function ManchesterRentersGuide() {
  return (
    <main className="bg-[#f7fbff] text-[#1c2d3e]">
      <article className="mx-auto max-w-[1060px] px-5 py-12 md:px-10 md:py-20">
        <header className="border-b border-[#dceaf5] pb-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold text-[#2a8fd4]">
            <span>BY MZ CLEANERS</span>
            <span className="text-[#9ab1c4]">|</span>
            <span>Moving &amp; Local Guides</span>
            <span className="text-[#9ab1c4]">|</span>
            <span className="text-[#60788d]">Comments (0)</span>
          </div>
          <h1 className="mt-7 max-w-4xl font-plus-jakarta-sans text-4xl font-bold leading-tight md:text-6xl">
            Top 5 Neighbourhoods for Renters in Manchester
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4a6278] md:text-xl">
            Manchester is one of the UK&apos;s most popular places to rent, with a busy city-centre jobs scene, five universities, and a wide choice of neighbourhoods. If you are deciding where to rent next, or have just moved in and are getting to know the area, here are five neighbourhoods that regularly come up as renter favourites.
          </p>
        </header>

        <div className="grid gap-12 pt-12 md:grid-cols-[minmax(0,1fr)_250px]">
          <div className="space-y-10">
            {neighbourhoods.map((neighbourhood) => (
              <section key={neighbourhood.name} className="border-b border-[#dceaf5] pb-10">
                <div className="mb-3 flex items-baseline gap-4">
                  <span className="font-plus-jakarta-sans text-sm font-bold tracking-[2px] text-[#2a8fd4]">
                    {neighbourhood.number}
                  </span>
                  <h2 className="font-plus-jakarta-sans text-2xl font-bold md:text-3xl">
                    {neighbourhood.name}
                  </h2>
                </div>
                <p className="text-base leading-8 text-[#4a6278]">{neighbourhood.content}</p>
              </section>
            ))}

            <section>
              <h2 className="font-plus-jakarta-sans text-2xl font-bold md:text-3xl">
                Moving into or out of one of these areas?
              </h2>
              <p className="mt-4 text-base leading-8 text-[#4a6278]">
                Wherever you are renting in Manchester, the things letting agents check at the end of a tenancy are often similar: ovens, limescale, carpets, and the small corners a regular clean does not reach. MZ Cleaners provides house cleaning, deep cleaning, end of tenancy cleaning, move-in and move-out cleaning, office and commercial cleaning, carpet cleaning, oven cleaning, window cleaning, and after-builders cleaning across Greater Manchester.
              </p>
              <p className="mt-4 text-base leading-8 text-[#4a6278]">
                Our staff are fully insured, DBS-checked, and reference-verified. We also offer eco-friendly, non-toxic cleaning products suitable for homes with children, pets, or allergies. If you are not happy with the result, our satisfaction guarantee means we will return and put it right free of charge.
              </p>
            </section>
          </div>

          <aside className="h-fit rounded-2xl border border-[#dceaf5] bg-white p-6 shadow-[0_8px_30px_rgba(42,143,212,0.08)] md:sticky md:top-8">
            <h2 className="font-plus-jakarta-sans text-lg font-bold">We cover Greater Manchester</h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[#4a6278]">
              {areas.map((area) => <li key={area}>{area}</li>)}
            </ul>
            <Link
              href="/quote"
              className="mt-6 inline-flex w-full items-center justify-center rounded-[10px] bg-[#2a8fd4] px-5 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-[#237cbd]"
            >
              Get a free quote
            </Link>
            <p className="mt-3 text-center text-xs leading-5 text-[#60788d]">No obligation. We aim to reply within 2 hours.</p>
          </aside>
        </div>
      </article>
    </main>
  );
}
