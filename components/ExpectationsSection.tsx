import Image from 'next/image';

export default function ExpectationsSection() {
  const steps = [
    {
      number: "1",
      title: "Book Online",
      description: "Choose your service and schedule a time that works best for you.",
    },
    {
      number: "2",
      title: "We Clean",
      description: "Our professional team arrives on time and cleans your space thoroughly.",
    },
    {
      number: "3",
      title: "You Relax",
      description: "Enjoy your sparkling clean home and the peace of mind that comes with it.",
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          {/* Left Image */}
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-[#EAF4FD] rounded-full blur-3xl opacity-50 -z-10 transform -translate-x-10 -translate-y-10"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern Clean House Interior" 
                width={600} 
                height={700}
                className="w-full h-[600px] object-cover"
              />
            </div>

            {/* Floating Element */}
            <div className="absolute top-10 -right-6 lg:-right-10 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-pulse">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <p className="text-[#1C2D3E] font-bold text-sm">Available for Booking</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-[#00B4D8] font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                <span className="w-8 h-0.5 bg-[#00B4D8] rounded-full"></span>
                What To Expect
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1C2D3E] leading-tight">
                A Seamless Cleaning <br /> Experience
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              We've simplified the process so you can get back to what matters most. From booking to the final walkthrough, our streamlined approach ensures a hassle-free experience.
            </p>

            <div className="space-y-6 pt-4">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#EAF4FD] text-[#00B4D8] font-bold text-xl flex items-center justify-center flex-shrink-0 shadow-sm border border-[#00B4D8]/20">
                    {step.number}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-[#1C2D3E]">{step.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
