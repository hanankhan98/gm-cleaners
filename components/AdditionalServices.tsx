import { NextPage } from 'next'
import Image from 'next/image'
import AnimateOnScroll from "@/components/AnimateOnScroll"

const services = [
  {
    title: 'Carpet Cleaning',
    description: 'Professional deep carpet cleaning and stain removal to restore your carpets to their best condition.',
    image: '/services_page/additoanal_servies/Carpet cleaning Manchester-3.jpg',
    alt: 'Carpet Cleaning',
  },
  {
    title: 'Oven Cleaning',
    description: 'Specialist oven and hob deep clean, removing all grease, carbon, and residue looking like new again.',
    image: '/services_page/additoanal_servies/Carpet cleaning Manchester-2.jpg',
    alt: 'Oven Cleaning',
  },
  {
    title: 'Window Cleaning',
    description: 'Interior window cleaning leaving glass streak-free, clear, and sparkling inside and out available.',
    image: '/services_page/additoanal_servies/Carpet cleaning Manchester-1.jpg',
    alt: 'Window Cleaning',
  },
  {
    title: 'After-Builders Cleaning',
    description: 'Post-construction cleaning to remove dust, debris, and mess leaving your newly renovated space pristine.',
    image: '/services_page/additoanal_servies/Carpet cleaning Manchester.jpg',
    alt: 'After-Builders Cleaning',
  },
]

const AdditionalServices: NextPage = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 font-inter">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        {/* Badge */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-3 h-0.5 rounded-sm bg-[#2a8fd4]" />
          <span className="font-bold text-[11px] tracking-[1.32px] uppercase text-[#2a8fd4]">
            Additional Services
          </span>
          <div className="w-3 h-0.5 rounded-sm bg-[#2a8fd4]" />
        </div>

        {/* Heading */}
        <AnimateOnScroll animation="fade-up">
          <h2 className="font-plus-jakarta-sans font-bold text-[36px] md:text-[44px] text-center tracking-[-0.88px] leading-[51.92px] text-[#1c2d3e] mb-2">
            Even More Ways We Can Help
          </h2>
        </AnimateOnScroll>

        {/* Subtitle */}
        <p className="font-inter text-[17px] leading-[29.75px] text-[#4a6278] text-center max-w-[560px] mx-auto mb-8">
          Specialist cleaning solutions available across Manchester on request.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
              <div
                className="rounded-[18px] bg-[#f4f9fd] border border-[#c5dff0] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
              {/* Image */}
              <div className="h-[149px] overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  src={service.image}
                  width={276}
                  height={149}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  alt={service.alt}
                />
              </div>

              {/* Content */}
              <div className="px-6 py-5 text-center">
                <h3 className="font-plus-jakarta-sans font-bold text-[15px] text-[#1c2d3e] mb-3">
                  {service.title}
                </h3>
                <p className="font-inter text-[13px] leading-[20.8px] text-[#4a6278]">
                  {service.description}
                </p>
              </div>
            </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdditionalServices
