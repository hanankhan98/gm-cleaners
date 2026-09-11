import AnimateOnScroll from "@/components/AnimateOnScroll";
import Link from "next/link";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Comprehensive Insurance Coverage",
      description: "£5M/€5M Public Liability and £10M/€10M Employers Liability coverage for complete peace of mind across commercial and residential properties.",
      microText: "Fully insured commercial cleaning for homes, offices, and business premises.",
      icon: "🛡️",
      borderColor: "border-[#2a8fd4]",
    },
    {
      title: "DBS-Checked & Trained Staff",
      description: "Dependable, background-checked cleaning specialists providing flexible daily, weekly, or overflow support tailored to your schedule.",
      microText: "DBS checked cleaners Manchester businesses and residents can trust.",
      icon: "✅",
      borderColor: "border-[#c5dff0]",
    },
    {
      title: "Exclusive CitySuites Aparthotel Offer",
      description: "Get 20% off your first month of professional cleaning services with zero long-term contracts required.",
      microText: "Flexible office cleaning contracts with a welcome saving for CitySuites Aparthotel.",
      icon: "🎁",
      borderColor: "border-[#c5dff0]",
    },
    {
      title: "Cheapest Local Manchester Rates",
      description: "Unbeatable pricing guaranteed for all Manchester residents without compromising on quality.",
      microText: "Local Manchester cleaning prices with clear quotes and no hidden charges.",
      icon: "💷",
      borderColor: "border-[#c5dff0]",
    },
  ];

  return (
    <section className="relative w-full bg-[#f4f9fd] py-20 md:py-[100px] flex justify-center overflow-hidden">
      <div className="relative max-w-[1440px] w-full px-4 md:px-12 flex flex-col items-center z-10">
        
        {/* Top Tagline */}
        <div className="flex items-center justify-center font-inter font-bold text-[#2a8fd4] text-[11px] text-center tracking-[1.32px] mb-4">
          WHY CHOOSE MZ CLEANERS
        </div>

        {/* Title */}
        <AnimateOnScroll animation="fade-up">
          <h2 className="flex max-w-4xl flex-wrap items-center justify-center font-plus-jakarta-sans font-bold text-[32px] md:text-[44px] text-center tracking-[-0.88px] leading-[1.18] mb-6">
          <span className="text-[#1c2d3e] tracking-[-0.39px] mr-2">Why Manchester Residents &amp; Businesses Choose</span>
          <span className="text-[#2a8fd4] tracking-[-0.39px]">MZ Cleaners</span>
        </h2>
        </AnimateOnScroll>

        {/* Subtitle */}
        <AnimateOnScroll animation="fade-up" delay={100}>
          <p className="font-inter font-normal text-[#4a6278] text-[16px] md:text-[17px] text-center tracking-[0] leading-[1.75] mb-8 max-w-[760px]">
            Professional residential and commercial cleaning across Manchester, backed by trusted teams, transparent local pricing, and flexible support for homes, offices, and business premises.
          </p>

          <AnimateOnScroll animation="fade-up" delay={150} className="mb-8 w-full max-w-[900px]">
            <div className="flex flex-col items-center justify-between gap-4 rounded-[16px] border border-[#b9ddf4] bg-[#eaf4fd] px-5 py-4 text-center md:flex-row md:text-left">
              <div>
                <p className="font-plus-jakarta-sans text-[15px] font-bold text-[#0f4c81]">20% Off First Month for CitySuites Aparthotel</p>
                <p className="mt-1 text-[13px] text-[#4a6278]">Welcome offer with no long-term contract required.</p>
              </div>
              <Link href="/quote" className="shrink-0 rounded-[9px] bg-[#2a8fd4] px-5 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-[#237cbd]">Claim Welcome Offer</Link>
            </div>
          </AnimateOnScroll>
        </AnimateOnScroll>

        {/* Cards Grid */}
        <div className="grid w-full max-w-[1100px] grid-cols-1 gap-6 md:grid-cols-2 lg:gap-[30px]">
          {features.map((feature, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={index * 100} className="w-full">
              <div
                className={`flex flex-col bg-white rounded-[18px] border border-solid ${feature.borderColor} p-[30px] shadow-sm hover:shadow-md transition-shadow h-full`}
              >
              {/* Icon Container */}
              <div className="w-[54px] h-[54px] flex items-center justify-center bg-[#eaf4fd] rounded-[15px] border border-solid border-[#c5dff0] mb-[22px]">
                <div className="font-inter font-normal text-2xl text-[#1c2d3e] text-center flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>

              {/* Card Title */}
              <h3 className="font-plus-jakarta-sans font-bold text-[#1c2d3e] text-[17px] tracking-[0] leading-[normal] mb-[13px]">
                {feature.title}
              </h3>

              {/* Card Description */}
              <p className="font-inter font-normal text-[#4a6278] text-[14.5px] tracking-[0] leading-[24.4px]">
                {feature.description}
              </p>
              <p className="mt-4 border-t border-[#e4eff7] pt-3 text-[12px] font-semibold leading-5 text-[#2a8fd4]">{feature.microText}</p>
            </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fade-up" delay={450} className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-[#b9ddf4] bg-white px-4 py-2 text-[12px] font-bold text-[#0f4c81]">Fully Insured (£5M/€5M &amp; £10M/€10M)</span>
            <span className="rounded-full border border-[#b9ddf4] bg-white px-4 py-2 text-[12px] font-bold text-[#0f4c81]">DBS Checked</span>
          </div>
        </AnimateOnScroll>
      </div>
      
      {/* Decorative Background Elements */}
      <img
        src="/whyChose_left_image.png"
        alt=""
        className="absolute bottom-0 left-0 w-auto h-auto max-w-[200px] md:max-w-[400px] object-contain opacity-80 pointer-events-none"
      />
      <img
        src="/whyChose_rihgt_image.png"
        alt=""
        className="absolute bottom-0 right-0 w-auto h-auto max-w-[200px] md:max-w-[400px] object-contain opacity-80 pointer-events-none"
      />
      <img
        src="/whyChose_top_image.png"
        alt=""
        className="absolute top-0 right-0 w-auto h-auto max-w-[100px] md:max-w-[150px] object-contain opacity-80 pointer-events-none"
      />
    </section>
  );
}
