import { Users, Settings, Clock, Shield } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      title: "Trained Staff",
      description: "Our professional cleaners are highly trained, vetted, and dedicated to delivering spotless results every time.",
      icon: Users
    },
    {
      title: "Quality Equipment",
      description: "We use state-of-the-art cleaning equipment and premium products to ensure a deep and lasting clean.",
      icon: Settings
    },
    {
      title: "Fast Service",
      description: "Time is valuable. We pride ourselves on punctual, efficient, and thorough cleaning services.",
      icon: Clock
    },
    {
      title: "100% Safe",
      description: "Your safety is our priority. We use eco-friendly and safe cleaning solutions for your family and pets.",
      icon: Shield
    }
  ];

  return (
    <section className="py-20 bg-[#EAF4FD]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h3 className="text-[#00B4D8] font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2">
            <span className="w-8 h-0.5 bg-[#00B4D8] rounded-full"></span>
            The MZ Cleaners Difference
            <span className="w-8 h-0.5 bg-[#00B4D8] rounded-full"></span>
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C2D3E]">
            Why Choose MZ Cleaners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 group flex gap-6"
            >
              <div className="w-16 h-16 bg-[#00B4D8] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#00B4D8]/30">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-3">
                <h4 className="text-2xl font-bold text-[#1C2D3E]">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
