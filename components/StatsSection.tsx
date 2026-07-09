export default function StatsSection() {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "5k+", label: "Projects Done" },
    { value: "A+", label: "Quality Assured" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <section className="bg-[#00B4D8] py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x md:divide-white/20">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center space-y-2">
              <span className="text-4xl md:text-5xl font-bold text-white">
                {stat.value}
              </span>
              <span className="text-white/90 font-medium text-lg">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
