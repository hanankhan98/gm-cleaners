import Image from "next/image";
import Link from "next/link";

export type ServiceDetail = {
  title: string;
  intro: string;
  description: string;
  image: string;
  benefits: string[];
};

export default function ServiceDetailPage({ service }: { service: ServiceDetail }) {
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
