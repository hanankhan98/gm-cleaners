import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Office Cleaning Manchester: The Complete Checklist",
  description:
    "Use our office cleaning Manchester checklist to keep your workplace clean, healthy and welcoming. Get a free quote from MZ Cleaners within 2 hours.",
  alternates: {
    canonical: "https://mzcleaners.co.uk/blog/office-cleaning-checklist-manchester",
  },
  openGraph: {
    title: "Office Cleaning Manchester: The Complete Checklist | MZ Cleaners",
    description:
      "Use our office cleaning Manchester checklist to keep your workplace clean, healthy and welcoming. Get a free quote from MZ Cleaners within 2 hours.",
    url: "https://mzcleaners.co.uk/blog/office-cleaning-checklist-manchester",
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

const checklist = [
  {
    heading: "Daily tasks",
    items: [
      "Empty all bins and recycling, and replace the liners.",
      "Wipe and sanitise desks, keyboards, mice and phones (where staff are happy for you to do so).",
      "Clean door handles, light switches, lift buttons and handrails.",
      "Clean and restock toilets: sinks, toilets, mirrors, soap, paper towels and toilet roll.",
      "Wipe kitchen worktops, the sink, the kettle, the microwave and the table tops.",
      "Load or empty the dishwasher and wash any leftover mugs.",
      "Vacuum high-traffic carpet areas and sweep or mop hard floors in reception and the kitchen.",
      "Tidy the reception area and meeting rooms, ready for the next day.",
    ],
  },
  {
    heading: "Weekly tasks",
    items: [
      "Vacuum all carpeted areas, including under desks and along the edges of rooms.",
      "Mop all hard floors thoroughly.",
      "Dust shelves, window sills, skirting boards and picture frames.",
      "Clean internal glass, glass partitions and the glass on the front door.",
      "Clear out the fridge and throw away old or unlabelled food.",
      "Wipe down the outside of cupboards, filing cabinets and office equipment such as printers.",
      "Descale taps and shower heads if your building has them.",
    ],
  },
  {
    heading: "Monthly tasks",
    items: [
      "Clean inside the microwave, fridge and dishwasher filter.",
      "Dust high-level areas such as air vents, light fittings and the tops of cupboards.",
      "Spot-clean marks on walls, doors and chairs.",
      "Vacuum upholstered chairs and sofas.",
      "Check for limescale, mould or grime building up in toilets and kitchens.",
    ],
  },
];

const faqs = [
  {
    question: "How often should an office be cleaned?",
    answer:
      "Most offices benefit from daily or several-times-a-week cleaning of bins, toilets, kitchens and high-touch surfaces. Busier offices, or those with regular visitors, usually need daily visits. A deeper clean every few months keeps everything else in good condition.",
  },
  {
    question: "How much does office cleaning cost in Manchester?",
    answer:
      "The cost depends on the size of your office, how often you need cleaning and what tasks are included. The best way to get an accurate price is to ask for a tailored quote. At MZ Cleaners, we'll send you a free quote within 2 hours.",
  },
  {
    question: "Can office cleaning be done outside working hours?",
    answer:
      "Yes. Many businesses prefer cleaning early in the morning, in the evening or at weekends so staff aren't disturbed. MZ Cleaners offers flexible scheduling to fit around your opening hours.",
  },
  {
    question: "Do I need to provide cleaning products and equipment?",
    answer:
      "No. Our cleaners bring all their own products and equipment at no extra cost. Just let us know if you'd like us to use specific products in your office.",
  },
  {
    question: "Are your office cleaners insured and background-checked?",
    answer:
      "Yes. All MZ Cleaners staff are DBS-checked, and we carry £5M public liability and £10M employers' liability insurance. You can ask to see our certificates at any time.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const h2 = "font-plus-jakarta-sans text-2xl font-bold md:text-3xl";
const h3 = "mt-6 font-plus-jakarta-sans text-xl font-bold";
const p = "mt-4 text-base leading-8 text-[#4a6278]";
const list = "mt-4 space-y-2 pl-6 text-base leading-8 text-[#4a6278]";
const link = "font-semibold text-[#2a8fd4] underline underline-offset-4 hover:text-[#237cbd]";

export default function OfficeCleaningChecklist() {
  return (
    <main className="bg-[#f7fbff] text-[#1c2d3e]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <article className="mx-auto max-w-[1060px] px-5 py-12 md:px-10 md:py-20">
        <header className="border-b border-[#dceaf5] pb-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold text-[#2a8fd4]">
            <span>BY MZ CLEANERS</span>
            <span className="text-[#9ab1c4]">|</span>
            <span>Business &amp; Office Guides</span>
            <span className="text-[#9ab1c4]">|</span>
            <span className="text-[#60788d]">Comments (0)</span>
          </div>
          <h1 className="mt-7 max-w-4xl font-plus-jakarta-sans text-4xl font-bold leading-tight md:text-6xl">
            Office Cleaning Manchester: The Complete Checklist for Local Businesses
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4a6278] md:text-xl">
            A messy office does more than look bad. Sticky desks, overflowing bins and a grubby staff kitchen can put off clients, lower team morale and help germs spread when someone comes in with a cold.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#4a6278] md:text-xl">
            If you manage a workplace, you already have plenty to do. This guide to <strong>office cleaning in Manchester</strong> gives you a practical checklist you can use today, whether you run a small studio in Ancoats, a busy team in Salford or a professional practice in Didsbury.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#4a6278] md:text-xl">
            Below you&apos;ll find what to clean daily, weekly and monthly, the areas people most often miss, and how to decide whether to keep cleaning in-house or bring in professionals.
          </p>
        </header>

        <div className="grid gap-12 pt-12 md:grid-cols-[minmax(0,1fr)_250px]">
          <div className="space-y-10">
            <section className="border-b border-[#dceaf5] pb-10">
              <h2 className={h2}>Why Regular Office Cleaning Matters</h2>
              <p className={p}>
                A clean office is about more than appearances. It affects how your team feels, how visitors see your business and how smoothly your working day runs.
              </p>
              <ul className={`${list} list-disc`}>
                <li><strong>Healthier staff:</strong> Shared surfaces such as keyboards, door handles and kettles are touched all day. Cleaning them regularly helps cut down on the spread of everyday bugs.</li>
                <li><strong>Better first impressions:</strong> Clients notice dusty reception desks and stained carpets. A tidy space shows you care about detail.</li>
                <li><strong>A more productive team:</strong> People find it easier to focus in a clear, fresh-smelling space than in a cluttered one.</li>
                <li><strong>Longer-lasting furniture and flooring:</strong> Removing grit and spills early helps carpets, chairs and hard floors last longer.</li>
              </ul>
              <p className={p}>
                There&apos;s a legal side too. Under the Workplace (Health, Safety and Welfare) Regulations 1992, employers must keep workplaces, and the furniture, furnishings and fittings in them, sufficiently clean. For the full details, see the{" "}
                <a
                  href="https://www.hse.gov.uk/pubns/books/l24.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={link}
                >
                  Health and Safety Executive&apos;s workplace guidance
                </a>
                .
              </p>
            </section>

            <section className="border-b border-[#dceaf5] pb-10">
              <h2 className={h2}>Your Office Cleaning Checklist: Daily, Weekly and Monthly Tasks</h2>
              <p className={p}>
                The easiest way to stay on top of cleaning is to split tasks by how often they need doing. Print this office cleaning checklist, stick it in the staff kitchen or share it with your cleaning team.
              </p>
              {checklist.map((group) => (
                <div key={group.heading}>
                  <h3 className={h3}>{group.heading}</h3>
                  <ol className={`${list} list-decimal`}>
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ol>
                </div>
              ))}
              <h3 className={h3}>Every few months</h3>
              <ul className={`${list} list-disc`}>
                <li>
                  Book a full <Link href="/services/deep-cleaning" className={link}>deep clean of your office</Link> to reach the areas day-to-day cleaning can&apos;t cover.
                </li>
                <li>Arrange carpet and upholstery cleaning where needed.</li>
                <li>Clean the insides of the windows and blinds properly.</li>
              </ul>
            </section>

            <section className="border-b border-[#dceaf5] pb-10">
              <h2 className={h2}>Areas Most Offices Forget to Clean</h2>
              <p className={p}>Even well-kept offices have blind spots. These are the areas we find are most often missed:</p>
              <ul className={`${list} list-disc`}>
                <li>
                  <strong>The staff kitchen:</strong> Fridge handles, kettle bases and tap levers pick up germs quickly. A focused <Link href="/services/kitchen-cleaning" className={link}>kitchen cleaning service</Link> can bring a neglected kitchen back up to standard.
                </li>
                <li><strong>Meeting room tables and chairs:</strong> These are used by lots of different people but often only wiped when they look dirty.</li>
                <li><strong>Shared tech:</strong> Conference phones, remote controls, touchscreens and shared headsets.</li>
                <li><strong>Under desks:</strong> Dust, crumbs and cables collect here, out of sight.</li>
                <li><strong>Bin surfaces:</strong> Emptying a bin isn&apos;t the same as cleaning it. Wipe the inside and outside regularly to stop smells.</li>
                <li><strong>Water coolers and coffee machines:</strong> Follow the maker&apos;s cleaning instructions and set a schedule.</li>
              </ul>
            </section>

            <section className="border-b border-[#dceaf5] pb-10">
              <h2 className={h2}>In-House Cleaning or Professional Office Cleaning in Manchester?</h2>
              <p className={p}>
                Some small offices get by with staff sharing a cleaning rota. That can work for light tidying, but it often slips when people get busy, and it takes your team away from their real jobs.
              </p>
              <h3 className={h3}>When a rota might be enough</h3>
              <ul className={`${list} list-disc`}>
                <li>You have a very small team in a small space.</li>
                <li>Visitors rarely come to the office.</li>
                <li>You only need light daily tidying.</li>
              </ul>
              <h3 className={h3}>When professional cleaners make sense</h3>
              <ul className={`${list} list-disc`}>
                <li>You have clients or customers visiting regularly.</li>
                <li>Your team is growing, or you share a building with other businesses.</li>
                <li>Cleaning keeps getting skipped or causing friction between colleagues.</li>
                <li>You need consistent standards and someone accountable for them.</li>
              </ul>
              <p className={p}>
                Professional <Link href="/services/office-cleaning" className={link}>office cleaning services</Link> give you a trained team that follows a set checklist, brings its own equipment and works around your hours. For larger or multi-use buildings, <Link href="/services/commercial-premises" className={link}>commercial premises cleaning</Link> can cover shared areas, stairwells and entrances too.
              </p>
            </section>

            <section className="border-b border-[#dceaf5] pb-10">
              <h2 className={h2}>How to Choose the Right Office Cleaners in Manchester</h2>
              <p className={p}>Not all cleaning companies work the same way. Before you sign up, go through these questions:</p>
              <ol className={`${list} list-decimal`}>
                <li><strong>Are the cleaners vetted?</strong> Ask whether staff are DBS-checked, especially if they&apos;ll have keys or work out of hours.</li>
                <li><strong>Are they properly insured?</strong> Check for public liability and employers&apos; liability cover, and ask to see the certificates.</li>
                <li><strong>Can they work around you?</strong> Early mornings, evenings or weekends mean cleaning doesn&apos;t disrupt your team.</li>
                <li><strong>What products do they use?</strong> Eco-friendly products are kinder to staff with allergies or sensitivities.</li>
                <li><strong>What happens if something is missed?</strong> A good company will come back and put it right.</li>
                <li>
                  <strong>Is the agreement flexible?</strong> Look for <Link href="/services/weekly-monthly-contracts" className={link}>weekly and monthly cleaning contracts</Link> that can grow or shrink with your needs.
                </li>
                <li><strong>Do they give a clear quote?</strong> You should know exactly what&apos;s included before any work starts.</li>
              </ol>
            </section>

            <section className="border-b border-[#dceaf5] pb-10">
              <h2 className={h2}>Tips to Keep Your Office Clean Between Visits</h2>
              <p className={p}>Even with regular cleaners, small daily habits make a big difference. Share these with your team:</p>
              <ul className={`${list} list-disc`}>
                <li>Keep a clear-desk policy at the end of each day so surfaces can be cleaned properly.</li>
                <li>Put hand sanitiser at entrances, in kitchens and in meeting rooms.</li>
                <li>Label food in the fridge and agree a weekly clear-out day.</li>
                <li>Wash your own mugs, or load them straight into the dishwasher.</li>
                <li>Place doormats at entrances to catch Manchester rain and grit before it reaches the carpets.</li>
                <li>Report spills straight away so they don&apos;t stain.</li>
              </ul>
            </section>

            <section className="border-b border-[#dceaf5] pb-10">
              <h2 className={h2}>Why Choose MZ Cleaners</h2>
              <p className={p}>
                MZ Cleaners is based at Suite 112a, 53 Derby Street, Manchester, and we clean offices and workplaces across Greater Manchester, from Trafford and Stockport to Chorlton, Fallowfield and Oldham.
              </p>
              <ul className={`${list} list-disc`}>
                <li><strong>DBS-checked staff</strong> you can trust with your keys and your premises.</li>
                <li><strong>Fully insured</strong> with £5M public liability and £10M employers&apos; liability cover.</li>
                <li><strong>Eco-friendly products</strong> that are safe for people and pets.</li>
                <li><strong>All products and equipment included</strong> at no extra cost.</li>
                <li><strong>Flexible scheduling</strong> including early mornings, evenings and weekends.</li>
                <li><strong>A free return visit</strong> if anything is missed.</li>
                <li><strong>A free quote within 2 hours</strong>, with no obligation.</li>
              </ul>
            </section>

            <section className="border-b border-[#dceaf5] pb-10">
              <h2 className={h2}>Frequently Asked Questions</h2>
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className={h3}>{faq.question}</h3>
                  <p className={p}>{faq.answer}</p>
                </div>
              ))}
            </section>

            <section>
              <h2 className={h2}>Keep Your Workplace Spotless with Office Cleaning in Manchester</h2>
              <p className={p}>
                A clean office keeps your team healthier, makes a better impression on clients and saves you time worrying about who&apos;s emptying the bins. Use the checklist above to set clear standards, and don&apos;t forget the easy-to-miss spots like the kitchen, shared tech and under desks.
              </p>
              <p className={p}>
                If you&apos;d rather hand the job to a trusted local team, MZ Cleaners can help. For reliable <strong>office cleaning in Manchester</strong>, <Link href="/quote" className={link}>get your free quote today</Link>. We&apos;ll reply within 2 hours. You can also call us on <strong>+44 7535 048548</strong>.
              </p>
            </section>
          </div>

          <aside className="h-fit rounded-2xl border border-[#dceaf5] bg-white p-6 shadow-[0_8px_30px_rgba(42,143,212,0.08)] md:sticky md:top-[160px]">
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
