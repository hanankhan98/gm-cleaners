import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServicesSummary() {
  const services = [
    {
      title: "Residential Cleaning",
      description: "Keep your home pristine with our regular and customized residential cleaning services.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
      link: "/services"
    },
    {
      title: "Commercial Cleaning",
      description: "Maintain a professional and healthy workspace for your employees and clients.",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop",
      link: "/services"
    },
    {
      title: "Deep Cleaning",
      description: "A thorough, top-to-bottom clean that reaches the areas regular cleaning misses.",
      image: "https://images.unsplash.com/photo-1527515637-60e5eb44d8fd?q=80&w=2070&auto=format&fit=crop",
      link: "/services"
    }
  ];

  return (
    <section className="py-20 bg-[#EAF4FD]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h3 className="text-[#00B4D8] font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2">
            <span className="w-8 h-0.5 bg-[#00B4D8] rounded-full"></span>
            What We Do
            <span className="w-8 h-0.5 bg-[#00B4D8] rounded-full"></span>
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C2D3E]">
            Our Professional Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow space-y-4">
                <h4 className="text-2xl font-bold text-[#1C2D3E]">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <Link 
                  href={service.link}
                  className="inline-flex items-center gap-2 text-[#00B4D8] font-bold hover:text-[#1C2D3E] transition-colors duration-300 group/link mt-4"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
