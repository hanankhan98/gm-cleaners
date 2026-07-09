import React from "react";
import LeaveReviewForm from "@/components/LeaveReviewForm";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Customer Reviews | MZ Cleaners",
  description: "Read what our customers have to say about our professional cleaning services across Greater Manchester.",
};

const allReviews = [
  {
    initials: "SJ",
    name: "Sarah J.",
    location: "Didsbury, Manchester",
    text: "Absolutely brilliant service from start to finish. MZ Cleaners did our end of tenancy clean and the property looked better than when we first moved in. Got our full deposit back with no issues at all. Highly recommended!",
  },
  {
    initials: "MR",
    name: "Mohammed R.",
    location: "Manchester City Centre",
    text: "We've been using MZ Cleaners for our office for over a year and the standard has been consistently excellent. Professional, punctual, and always thorough. Can't fault them at all genuinely outstanding.",
  },
  {
    initials: "EW",
    name: "Emily W.",
    location: "Chorlton, Manchester",
    text: "Booked a deep clean before moving into our new house. The team were so friendly and worked incredibly hard. Every room was spotless. Great value for money, will absolutely use MZ Cleaners again.",
  },
  {
    initials: "DT",
    name: "David T.",
    location: "Salford",
    text: "Very impressed with the standard of cleaning. They tackled stubborn stains in the bathroom and kitchen that I thought were impossible to remove. The place smells so fresh now.",
  },
  {
    initials: "FA",
    name: "Fatima A.",
    location: "Oldham",
    text: "Reliable, trustworthy, and very detail-oriented. MZ Cleaners takes care of my bi-weekly home cleaning, and I'm always delighted coming back to a sparkling clean house.",
  },
  {
    initials: "JM",
    name: "James M.",
    location: "Trafford",
    text: "Hired them for a post-construction clean after renovating our ground floor. They managed to get rid of all the fine dust and made the place livable again. Excellent work.",
  }
];

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFF] overflow-x-hidden flex flex-col font-inter">
      {/* ================================================================
          HERO SECTION
          ================================================================ */}
      <section className="relative overflow-hidden bg-[#eaf4fd] py-20 lg:py-24 flex flex-col items-center justify-center">
        {/* Decorative Image */}
        <img
          src="/cus_rev.png"
          alt=""
          className="absolute -bottom-10 right-10 w-[180px] h-auto object-cover opacity-60 pointer-events-none z-0"
        />
        
        <div className="relative z-10 px-4 max-w-4xl mx-auto flex flex-col items-center text-center">
          <h4 className="text-[#2a8fd4] text-[12px] font-bold tracking-[1.5px] uppercase mb-4">
            CUSTOMER REVIEWS
          </h4>
          <h1 className="text-[clamp(36px,5vw,56px)] font-bold font-plus-jakarta-sans text-[#1c2d3e] leading-tight mb-6">
            What Our <span className="text-[#2a8fd4]">Customers Say</span>
          </h1>
          <p className="text-[#4a6278] text-[17px] leading-relaxed max-w-[600px]">
            Read honest reviews from our satisfied clients across Greater Manchester. We pride ourselves on delivering 5-star cleaning services.
          </p>
        </div>
      </section>

      {/* ================================================================
          MAIN CONTENT SECTION
          ================================================================ */}
      <section className="py-16 md:py-20 relative max-w-[1440px] mx-auto px-4 md:px-12 w-full">
        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {allReviews.map((review, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-[#c5dff0] rounded-[18px] p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative"
            >
              {/* Floating Quote Icon */}
              <div className="absolute top-[-16px] left-[24px] w-[36px] h-[36px] rounded-full bg-[#2a8fd4] text-white flex items-center justify-center font-serif text-[28px] leading-none pt-2">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-[#F59E0B]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-[#4a6278] text-[15px] leading-[26px] mb-8 flex-1 italic">
                {review.text}
              </p>

              {/* Avatar and Name */}
              <div className="border-t border-[#c5dff0] pt-6 flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-plus-jakarta-sans font-extrabold text-[15px]"
                  style={{
                    background: "linear-gradient(135deg, #2a8fd4, #5bb8f5)",
                  }}
                >
                  {review.initials}
                </div>
                <div>
                  <div className="text-[#1c2d3e] text-[15px] font-bold leading-tight mb-1">
                    {review.name}
                  </div>
                  <div className="text-[#8fa3b8] text-[13px] leading-tight">
                    {review.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#c5dff0] my-16 opacity-50"></div>

        {/* Form Container */}
        <div className="mt-8">
          <LeaveReviewForm />
        </div>
      </section>

      <CTASection />
    </main>
  );
}
