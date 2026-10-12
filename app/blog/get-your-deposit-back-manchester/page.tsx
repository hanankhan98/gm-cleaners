import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Get Your Full Deposit Back in Manchester",
  description:
    "Get your full deposit back in Manchester with our renter's guide to DPS, TDS and mydeposits, common deductions and cleaning. Get a free quote today.",
  alternates: {
    canonical: "https://mzcleaners.co.uk/blog/get-your-deposit-back-manchester",
  },
  openGraph: {
    title: "How to Get Your Full Deposit Back in Manchester | MZ Cleaners",
    description:
      "Get your full deposit back in Manchester with our renter's guide to DPS, TDS and mydeposits, common deductions and cleaning. Get a free quote today.",
    url: "https://mzcleaners.co.uk/blog/get-your-deposit-back-manchester",
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

const schemes = [
  {
    name: "Deposit Protection Service (DPS)",
    href: "https://www.depositprotection.com/",
  },
  {
    name: "Tenancy Deposit Scheme (TDS)",
    href: "https://www.tenancydepositscheme.com/",
  },
  {
    name: "mydeposits",
    href: "https://www.mydeposits.co.uk/",
  },
];

const deductions = [
  {
    title: "Cleaning",
    text: "Greasy ovens, limescale in the bathroom, dusty skirting boards and marked walls. If the property is less clean than it was at check-in, the landlord can claim the cost of putting it right.",
  },
  {
    title: "Damage beyond fair wear and tear",
    text: "Burns, stains, broken fittings, holes from picture hooks you didn't have permission for, or chipped worktops.",
  },
  {
    title: "Unpaid rent or bills",
    text: "Any rent still owed at the end of the tenancy can be taken from the deposit, along with bills the tenancy agreement makes you responsible for.",
  },
  {
    title: "Missing items",
    text: "Furniture, appliances, keys or fobs listed on the inventory that aren't there at check-out.",
  },
  {
    title: "Rubbish left behind",
    text: "Bags of rubbish, unwanted furniture or belongings that the landlord has to pay to remove.",
  },
  {
    title: "Garden and outdoor areas",
    text: "Overgrown gardens, weeds or a messy yard, if the tenancy agreement says you're responsible for keeping them tidy.",
  },
];

const steps = [
  {
    title: "Check your deposit is protected",
    text: "Within 30 days of paying, you should receive the prescribed information from your landlord, including which scheme holds your deposit. If you haven't, search the three scheme websites using your details.",
  },
  {
    title: "Keep your check-in inventory safe",
    text: "Read it carefully when you move in. If anything is wrong or missing, such as an existing stain or a cracked tile, tell your landlord or agent in writing straight away and add your own dated photos.",
  },
  {
    title: "Look after the property during your tenancy",
    text: "Report repairs promptly and in writing, ventilate rooms to prevent mould, and keep on top of everyday cleaning so dirt doesn't build up.",
  },
  {
    title: "Read your tenancy agreement before you leave",
    text: "Check what it says about cleaning, the garden, carpets and returning keys, so there are no surprises at check-out.",
  },
  {
    title: "Book your end of tenancy clean early",
    text: "Leave enough time between moving your things out and handing back the keys. Cleaning an empty property is much quicker and more thorough.",
  },
  {
    title: "Take dated photos and videos when you leave",
    text: "Record every room, inside the oven and fridge, the bathroom and any areas mentioned in the inventory. These are your evidence if there's a disagreement later.",
  },
  {
    title: "Attend the check-out inspection if you can",
    text: "Walk round with the agent or inventory clerk and compare the property against the check-in report together.",
  },
  {
    title: "Agree the return and follow up",
    text: "Once you and your landlord agree how much you'll get back, the deposit should be returned within 10 days. If you don't agree, you can use the scheme's free dispute service.",
  },
];

const cleaningChecklist = [
  {
    heading: "Kitchen",
    items: [
      "Degrease the oven inside and out, including the racks, trays and glass door.",
      "Clean the hob, extractor hood and filter.",
      "Empty, defrost and clean the fridge and freezer, and leave the doors ajar.",
      "Wipe inside and outside all cupboards and drawers.",
      "Descale the sink, taps and kettle, and clean the washing machine drawer and seal.",
      "Wipe down tiles, splashbacks and worktops.",
    ],
  },
  {
    heading: "Bathroom",
    items: [
      "Remove limescale from taps, shower heads, screens and tiles.",
      "Clean the toilet thoroughly, including the base and behind it.",
      "Scrub the bath, shower tray and grout, and treat any mould.",
      "Polish mirrors and wipe cabinets inside and out.",
      "Clean the extractor fan cover.",
    ],
  },
  {
    heading: "Living rooms and bedrooms",
    items: [
      "Dust skirting boards, door frames, light switches and sockets.",
      "Wipe marks from walls and doors where it's safe to do so.",
      "Clean inside wardrobes and drawers.",
      "Clean windows inside, window sills and frames.",
      "Vacuum carpets thoroughly, including under furniture and along the edges.",
    ],
  },
  {
    heading: "Final checks",
    items: [
      "Mop all hard floors.",
      "Check light fittings and replace any bulbs that have gone.",
      "Remove all rubbish and personal belongings.",
      "Return every key and fob listed on the inventory.",
    ],
  },
];

const faqs = [
  {
    question: "How long does my landlord have to return my deposit?",
    answer:
      "Once you and your landlord have agreed how much you'll get back, your deposit should be returned within 10 days. If you can't agree, the money stays protected in the scheme until the dispute is resolved.",
  },
  {
    question: "Can my landlord make me pay for a professional clean?",
    answer:
      "In England, the Tenant Fees Act 2019 means a landlord can't make you pay for a professional clean as a condition of your tenancy. They can still deduct reasonable cleaning costs if you leave the property less clean than it was at the start, allowing for fair wear and tear.",
  },
  {
    question: "What counts as fair wear and tear?",
    answer:
      "Fair wear and tear is the natural deterioration that happens with normal, everyday use, such as lightly worn carpets or slightly faded paintwork. Landlords shouldn't charge you for it. Stains, burns, breakages and heavy dirt are usually treated as damage or cleaning issues instead.",
  },
  {
    question: "How do I find out which scheme protects my deposit?",
    answer:
      "Your landlord must give you this information within 30 days of receiving your deposit. If you don't have it, you can search the DPS, TDS and mydeposits websites using your details.",
  },
  {
    question: "Is an end of tenancy clean worth it?",
    answer:
      "Cleaning is one of the most common reasons for deposit deductions, so a thorough clean can make a real difference. A professional end of tenancy clean covers the areas inspectors check most closely, such as ovens, limescale and skirting boards, and saves you time during a busy move.",
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

export default function DepositBackGuide() {
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
            <span>Moving &amp; Local Guides</span>
            <span className="text-[#9ab1c4]">|</span>
            <span className="text-[#60788d]">Comments (0)</span>
          </div>
          <h1 className="mt-7 max-w-4xl font-plus-jakarta-sans text-4xl font-bold leading-tight md:text-6xl">
            How to Get Your Full Deposit Back in Manchester: A Renter&apos;s Guide
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4a6278] md:text-xl">
            Moving out is stressful enough without worrying about your deposit. For most renters it&apos;s a large sum of money, and losing even part of it to deductions can hurt, especially when you&apos;re paying for a new place at the same time.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#4a6278] md:text-xl">
            The good news is that you have real protection. This guide explains how to <strong>get your full deposit back in Manchester</strong>: how deposit protection schemes work, the most common reasons landlords make deductions, and how a proper end of tenancy clean helps you hand back the keys with confidence.
          </p>
        </header>

        <div className="grid gap-12 pt-12 md:grid-cols-[minmax(0,1fr)_250px]">
          <div className="space-y-10">
            <section className="border-b border-[#dceaf5] pb-10">
              <h2 className={h2}>How Tenancy Deposit Protection Works in England</h2>
              <p className={p}>
                If you rent your home on an assured shorthold tenancy that started after 6 April 2007, your landlord must put your deposit in a government-backed tenancy deposit scheme. That applies whether you rent a flat in the city centre or a terrace in Chorlton.
              </p>
              <p className={p}>There are three schemes in England:</p>
              <ul className={`${list} list-disc`}>
                {schemes.map((scheme) => (
                  <li key={scheme.name}>
                    <a href={scheme.href} target="_blank" rel="noopener noreferrer" className={link}>
                      {scheme.name}
                    </a>
                  </li>
                ))}
              </ul>
              <h3 className={h3}>The key rules to know</h3>
              <ul className={`${list} list-disc`}>
                <li>Your landlord must protect your deposit within 30 days of receiving it.</li>
                <li>Within the same 30 days, they must give you the prescribed information, including which scheme holds it and how to get it back.</li>
                <li>Once you agree how much you&apos;ll get back, the deposit should be returned within 10 days.</li>
                <li>If you disagree with a deduction, each scheme offers a free dispute resolution service, and your money stays protected until the dispute is settled.</li>
                <li>If your landlord fails to protect your deposit, you can take them to court, and they may be ordered to pay you up to three times the deposit.</li>
              </ul>
              <p className={p}>
                Renting rules in England change from time to time, so check the{" "}
                <a href="https://www.gov.uk/tenancy-deposit-protection" target="_blank" rel="noopener noreferrer" className={link}>
                  official GOV.UK guidance on tenancy deposit protection
                </a>{" "}
                for the latest details.
              </p>
            </section>

            <section className="border-b border-[#dceaf5] pb-10">
              <h2 className={h2}>Common Reasons Landlords Make Deductions</h2>
              <p className={p}>
                A landlord can only deduct money for genuine costs, and they need evidence to back it up. These are the reasons that come up most often:
              </p>
              <ul className={`${list} list-disc`}>
                {deductions.map((deduction) => (
                  <li key={deduction.title}>
                    <strong>{deduction.title}:</strong> {deduction.text}
                  </li>
                ))}
              </ul>
              <h3 className={h3}>Fair wear and tear vs damage</h3>
              <p className={p}>
                Landlords can&apos;t charge you for fair wear and tear. That means the natural ageing that comes from normal living, like lightly worn carpet in a hallway or paint that has faded in the sun.
              </p>
              <p className={p}>
                Damage and dirt are different. A red wine stain, a burn on the worktop or a thick layer of grease in the oven are things you can be charged for. The check-in inventory is what everything is measured against, so it&apos;s your most important document.
              </p>
            </section>

            <section className="border-b border-[#dceaf5] pb-10">
              <h2 className={h2}>How to Get Your Full Deposit Back in Manchester: Step by Step</h2>
              <p className={p}>Getting your deposit back starts on the day you move in, not the day you leave. Follow these steps:</p>
              <ol className={`${list} list-decimal`}>
                {steps.map((step) => (
                  <li key={step.title}>
                    <strong>{step.title}.</strong> {step.text}
                  </li>
                ))}
              </ol>
            </section>

            <section className="border-b border-[#dceaf5] pb-10">
              <h2 className={h2}>Your End of Tenancy Cleaning Checklist</h2>
              <p className={p}>
                Inspectors compare the property against the check-in report, room by room. Use this checklist to make sure nothing is missed.
              </p>
              {cleaningChecklist.map((group) => (
                <div key={group.heading}>
                  <h3 className={h3}>{group.heading}</h3>
                  <ul className={`${list} list-disc`}>
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
              <p className={p}>
                Ovens and bathrooms take the longest. If they need more than a quick wipe, our{" "}
                <Link href="/services/kitchen-cleaning" className={link}>kitchen cleaning</Link> and{" "}
                <Link href="/services/bathroom-cleaning" className={link}>bathroom cleaning</Link> services focus on exactly these areas.
              </p>
            </section>

            <section className="border-b border-[#dceaf5] pb-10">
              <h2 className={h2}>How a Professional Clean Helps</h2>
              <p className={p}>
                You can clean the property yourself, and plenty of people do. But at the end of a tenancy you&apos;re also packing, moving, and setting up a new home, so the cleaning often gets rushed.
              </p>
              <p className={p}>
                A professional <Link href="/services/end-of-tenancy-cleaning" className={link}>end of tenancy cleaning service</Link> works through a detailed checklist built around what letting agents and inventory clerks look for. It also means you have a clear record of when the property was cleaned and by whom.
              </p>
              <p className={p}>
                It&apos;s worth knowing that, in England, your landlord can&apos;t make you pay for a professional clean as a condition of your tenancy. The aim is simply to return the property as clean as it was when you moved in, and a professional clean is one of the easiest ways to do that.
              </p>
              <blockquote className="mt-6 rounded-2xl border border-[#dceaf5] bg-white p-6 shadow-[0_8px_30px_rgba(42,143,212,0.08)]">
                <p className="text-base italic leading-8 text-[#1c2d3e]">
                  &ldquo;Absolutely brilliant service from start to finish. MZ Cleaners did our end of tenancy clean and the property looked better than when we first moved in. Got our full deposit back with no issues at all. Highly recommended!&rdquo;
                </p>
                <footer className="mt-4 text-sm font-semibold text-[#2a8fd4]">Sarah J., Didsbury, Manchester</footer>
              </blockquote>
              <p className={p}>
                If you&apos;re moving straight into a new place, a{" "}
                <Link href="/services/move-in-cleaning" className={link}>move-in clean</Link> means you can start fresh and have a clean baseline for your next check-in inventory.
              </p>
            </section>

            <section className="border-b border-[#dceaf5] pb-10">
              <h2 className={h2}>What to Do If Your Landlord Won&apos;t Return Your Deposit</h2>
              <p className={p}>If you think a deduction is unfair, don&apos;t panic. Work through these steps:</p>
              <ol className={`${list} list-decimal`}>
                <li>Ask your landlord or agent, in writing, for a breakdown of the deductions and the evidence behind them.</li>
                <li>Compare their claims against your check-in inventory, your check-out photos and any cleaning receipts.</li>
                <li>Try to reach an agreement. Many disagreements are settled at this stage.</li>
                <li>If you still can&apos;t agree, raise a dispute with the scheme that protects your deposit. Their dispute service is free and impartial.</li>
              </ol>
            </section>

            <section className="border-b border-[#dceaf5] pb-10">
              <h2 className={h2}>Why Choose MZ Cleaners</h2>
              <p className={p}>
                MZ Cleaners is based at Suite 112a, 53 Derby Street, Manchester, and we help renters move out across Greater Manchester, from Didsbury and Fallowfield to Salford and Stockport.
              </p>
              <ul className={`${list} list-disc`}>
                <li><strong>DBS-checked staff</strong> you can trust in your home.</li>
                <li><strong>Fully insured</strong> with £5M public liability and £10M employers&apos; liability cover.</li>
                <li><strong>Eco-friendly products</strong> that are safe for children and pets.</li>
                <li><strong>All products and equipment included</strong> at no extra cost.</li>
                <li><strong>Flexible scheduling</strong> including early mornings, evenings and weekends, to fit around your move.</li>
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
              <h2 className={h2}>Get Your Full Deposit Back with a Stress-Free Move</h2>
              <p className={p}>
                Your deposit is your money. Check it&apos;s protected, keep good records, know the difference between wear and tear and damage, and leave the property as clean as you found it. Do that, and you give yourself the best chance to get your full deposit back in Manchester.
              </p>
              <p className={p}>
                If you&apos;d like a hand with the cleaning, MZ Cleaners can help. <Link href="/quote" className={link}>Get your free end of tenancy cleaning quote</Link> and we&apos;ll reply within 2 hours. You can also call us on <strong>+44 7535 048548</strong>.
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
