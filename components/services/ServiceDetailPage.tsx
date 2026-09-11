import Image from "next/image";
import Link from "next/link";

export type ServiceDetail = {
  title: string;
  intro: string;
  description: string;
  image: string;
  benefits: string[];
};

function DescriptionBlocks({ description }: { description: string }) {
  return (
    <div className="space-y-7 text-base leading-8 text-[#4a6278]">
      {description.split(/\n\s*\n/).map((block, index) => {
        const lines = block.split("\n").filter((line) => line.trim());
        const heading = lines.length === 1 && lines[0].trim() === lines[0].trim().toUpperCase();

        if (heading) {
          return (
            <h3 key={index} className="border-l-4 border-[#2a8fd4] pl-4 font-plus-jakarta-sans text-xl font-bold leading-8 text-[#1c2d3e]">
              {lines[0]}
            </h3>
          );
        }

        return (
          <div key={index} className="space-y-3">
            {lines.map((line, lineIndex) => {
              const trimmedLine = line.trim();
              const marker = trimmedLine.match(/^(?:[-•]|\d+\.)/);
              const content = marker ? trimmedLine.slice(marker[0].length).trim() : line;

              return marker ? (
                <p key={lineIndex} className="rounded-xl border border-[#dceaf5] bg-[#f7fbff] px-5 py-4 pl-10 [text-indent:-1.25rem]">
                  <span className="font-bold text-[#2a8fd4]">{marker[0]}</span>{" "}
                  {content}
                </p>
              ) : (
                <p key={lineIndex}>{line}</p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

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

      <section className="mx-auto grid max-w-[1200px] items-start gap-10 px-4 py-14 md:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)] md:px-12 md:py-20">
        <div className="relative aspect-[4/3] w-full self-start overflow-hidden rounded-[24px] shadow-[0_12px_40px_rgba(42,143,212,0.18)] md:sticky md:top-[160px] md:max-h-[420px]">
          <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
        </div>

        <div className="flex min-w-0 flex-col">
          <span className="mb-4 text-xs font-bold uppercase tracking-[1.5px] text-[#2a8fd4]">Professional cleaning service</span>
          <h2 className="font-plus-jakarta-sans text-3xl font-bold leading-tight text-[#1c2d3e] md:text-4xl">
            A cleaner home, made simple
          </h2>
          <div className="mt-6">
            <DescriptionBlocks description={service.description} />
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="rounded-xl border border-[#dceaf5] bg-white p-4 text-sm font-semibold leading-6 text-[#1c2d3e] shadow-[0_4px_16px_rgba(42,143,212,0.07)]">
                <span className="mb-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#eaf4fd] text-sm font-bold text-[#2a8fd4]">✓</span>
                {benefit}
              </div>
            ))}
          </div>

          <Link href="/quote" className="mt-9 inline-flex w-fit items-center rounded-[10px] bg-[#2a8fd4] px-8 py-4 font-plus-jakarta-sans text-[15px] font-bold text-white shadow-[0_4px_18px_rgba(42,143,212,0.32)] transition-colors hover:bg-[#237cbd]">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
