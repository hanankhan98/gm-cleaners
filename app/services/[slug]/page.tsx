import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const services = {
  "regular-house-cleaning": {
    title: "Regular House Cleaning",
    intro: "Keep your home fresh, comfortable, and consistently clean with a reliable weekly or fortnightly service.",
    description: "Our regular house cleaning service covers the everyday details that make a home feel cared for. We clean rooms, surfaces, floors, and the areas that quickly collect dust and clutter, with a schedule built around your routine.",
    image: "/services_page/foryourhome/Regular house cleaning Manchester.jpg",
    benefits: ["Weekly or fortnightly visits", "All rooms and main living areas", "Flexible cleaning schedules"],
  },
  "deep-cleaning": {
    title: "Deep Cleaning",
    intro: "A thorough top-to-bottom clean for the areas that need extra time and attention.",
    description: "Our deep cleaning service reaches beyond the regular routine. We work through corners, skirting boards, grout lines, cupboards, and behind appliances to give your home a detailed reset.",
    image: "/services_page/foryourhome/Deep cleaning service Manchester.jpg",
    benefits: ["Detailed room-by-room cleaning", "Skirting boards and hard-to-reach areas", "Ideal for one-off refreshes"],
  },
  "move-in-cleaning": {
    title: "Move-In Cleaning",
    intro: "Start your new chapter in a clean, sanitised home before you unpack.",
    description: "We prepare your new property by cleaning every room, surface, and corner. Move-in cleaning gives you a fresh start and lets you settle in with confidence.",
    image: "/services_page/foryourhome/Move in cleaning Manchester.jpg",
    benefits: ["Full-property preparation", "Surface and floor sanitisation", "Ready before you unpack"],
  },
  "move-out-cleaning": {
    title: "Move-Out Cleaning",
    intro: "Leave your property clean, presentable, and ready for its next inspection.",
    description: "Our move-out service focuses on the details landlords, agents, and new occupants expect to see. We clean the property thoroughly so handover is simpler and less stressful.",
    image: "/services_page/foryourhome/Move out cleaning Manchester.jpg",
    benefits: ["Complete property clean", "Suitable for landlord handover", "Flexible appointment times"],
  },
  "end-of-tenancy-cleaning": {
    title: "End of Tenancy Cleaning",
    intro: "A detailed landlord-ready clean designed to help you leave your rental in excellent condition.",
    description: "We cover the rooms and details your letting agent is likely to inspect, including kitchens, bathrooms, floors, surfaces, and built-in areas.",
    image: "/services_page/foryourhome/End of tenancy cleaning Manchester.jpg",
    benefits: ["Landlord and agent focused", "Kitchen and bathroom detailing", "Every room cleaned for handover"],
  },
  "kitchen-cleaning": {
    title: "Kitchen Cleaning",
    intro: "Bring back the shine with detailed cleaning for worktops, appliances, cupboards, and floors.",
    description: "Our kitchen cleaning service tackles grease, food residue, limescale, and everyday build-up. We clean the key surfaces and appliances that keep your kitchen hygienic and welcoming.",
    image: "/services_page/foryourhome/Kitchen cleaning Manchester.jpg",
    benefits: ["Hobs, ovens, and extractor fans", "Cupboards, tiles, sinks, and taps", "Detailed degreasing and sanitisation"],
  },
  "bathroom-cleaning": {
    title: "Bathroom Cleaning",
    intro: "Enjoy a hygienic, sparkling bathroom with careful attention to limescale, grout, and fixtures.",
    description: "We clean and sanitise baths, showers, toilets, sinks, mirrors, tiles, and floors. Our bathroom service is designed to leave the whole room fresh and polished.",
    image: "/services_page/foryourhome/Bathroom cleaning Manchester.jpg",
    benefits: ["Limescale and grout cleaning", "Bath, shower, toilet, and sink care", "Mirrors and tiles polished"],
  },
  "dusting-vacuuming-mopping": {
    title: "Dusting, Vacuuming & Mopping",
    intro: "Complete surface and floor care for a cleaner, more comfortable home.",
    description: "This focused service refreshes the surfaces and floors throughout your property. We remove dust, vacuum carpets and rugs, and mop hard flooring with care.",
    image: "/services_page/foryourhome/Dusting vacuuming mopping Manchester.jpg",
    benefits: ["Dusting across every room", "Carpets, rugs, and hard floors", "Skirting boards and light fittings"],
  },
} as const;

type ServiceSlug = keyof typeof services;

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!(slug in services)) {
    notFound();
  }

  const service = services[slug as ServiceSlug];

  return (
    <main className="w-full bg-white font-inter">
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0f4c81] via-[#1a6daf] to-[#2a8fd4] px-4 py-16 text-white md:px-12 md:py-24">
        <div className="relative z-10 mx-auto max-w-[1200px]">
          <div className="mb-5 flex items-center gap-2 text-sm text-white/70">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white">Services</Link>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </div>
          <h1 className="max-w-3xl font-plus-jakarta-sans text-4xl font-bold leading-tight md:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
            {service.intro}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1200px] gap-10 px-4 py-14 md:grid-cols-2 md:px-12 md:py-20">
        <div className="relative min-h-[320px] overflow-hidden rounded-[24px] shadow-[0_12px_40px_rgba(42,143,212,0.18)] md:min-h-[500px]">
          <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
        </div>

        <div className="flex flex-col justify-center">
          <span className="mb-4 text-xs font-bold uppercase tracking-[1.5px] text-[#2a8fd4]">Professional cleaning service</span>
          <h2 className="font-plus-jakarta-sans text-3xl font-bold leading-tight text-[#1c2d3e] md:text-4xl">
            A cleaner home, made simple
          </h2>
          <p className="mt-6 text-base leading-8 text-[#4a6278]">{service.description}</p>

          <ul className="mt-7 space-y-3">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-[#1c2d3e]">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#eaf4fd] text-sm font-bold text-[#2a8fd4]">✓</span>
                {benefit}
              </li>
            ))}
          </ul>

          <Link href="/quote" className="mt-9 inline-flex w-fit items-center rounded-[10px] bg-[#2a8fd4] px-8 py-4 font-plus-jakarta-sans text-[15px] font-bold text-white shadow-[0_4px_18px_rgba(42,143,212,0.32)] transition-colors hover:bg-[#237cbd]">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
