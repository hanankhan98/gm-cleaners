import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Reliable & Professional",
      description: (
        <>
          Our trained cleaning team shows up on time, <br className="hidden lg:block" />
          every time. We take pride in delivering a <br className="hidden lg:block" />
          consistent, professional service you can <br className="hidden lg:block" />
          depend on.
        </>
      ),
      icon: "🏆",
      borderColor: "border-[#2a8fd4]",
    },
    {
      title: "Fully Insured",
      description: (
        <>
          MZ Cleaners is fully insured with public <br className="hidden lg:block" />
          liability cover, giving you complete peace of <br className="hidden lg:block" />
          mind on every single clean we carry out.
        </>
      ),
      icon: "🛡️",
      borderColor: "border-[#c5dff0]",
    },
    {
      title: "Flexible Scheduling",
      description: (
        <>
          We work around your diary. Early mornings, <br className="hidden lg:block" />
          evenings, weekends, or last-minute slots <br className="hidden lg:block" />
          we find a time that suits you perfectly.
        </>
      ),
      icon: "📅",
      borderColor: "border-[#c5dff0]",
    },
    {
      title: "Competitive Pricing",
      description: (
        <>
          Transparent, fair pricing with no hidden <br className="hidden lg:block" />
          charges. You always know exactly what <br className="hidden lg:block" />
          you're paying for before we begin any work.
        </>
      ),
      icon: "💷",
      borderColor: "border-[#c5dff0]",
    },
    {
      title: "High-Quality Service",
      description: (
        <>
          We don't consider a job done until it meets <br className="hidden lg:block" />
          the highest standard. Outstanding, consistent <br className="hidden lg:block" />
          results on every visit, guaranteed.
        </>
      ),
      icon: "⭐",
      borderColor: "border-[#c5dff0]",
    },
    {
      title: "Safe & Eco-Friendly",
      description: (
        <>
          Professional-grade, eco-friendly cleaning <br className="hidden lg:block" />
          products that are safe for children, pets, and <br className="hidden lg:block" />
          people with allergies or sensitivities.
        </>
      ),
      icon: "🌿",
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
          <h2 className="flex flex-wrap items-center justify-center font-plus-jakarta-sans font-bold text-[32px] md:text-[44px] text-center tracking-[-0.88px] leading-[1.18] mb-6">
          <span className="text-[#1c2d3e] tracking-[-0.39px] mr-2">What Makes Us</span>
          <span className="text-[#2a8fd4] tracking-[-0.39px]">Different</span>
        </h2>
        </AnimateOnScroll>

        {/* Subtitle */}
        <AnimateOnScroll animation="fade-up" delay={100}>
          <p className="font-inter font-normal text-[#4a6278] text-[16px] md:text-[17px] text-center tracking-[0] leading-[1.75] mb-8 md:mb-[60px] max-w-[700px]">
            We don't just clean, we care. Every job is carried out with <br className="hidden md:block" />
            professionalism, attention to detail, and genuine pride in our work.
          </p>
        </AnimateOnScroll>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[30px] w-full max-w-[1440px]">
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
              <p className="font-inter font-normal text-[#4a6278] text-[14.5px] tracking-[0] leading-[24.4px] flex-1">
                {feature.description}
              </p>
            </div>
            </AnimateOnScroll>
          ))}
        </div>
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
