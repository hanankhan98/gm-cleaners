"use client";

import React, { useState } from "react";

export default function LeaveReviewForm() {
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    review: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRating = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const waMessage = `Hello MZ Cleaners, I would like to leave a review for your service!

👤 Name: ${formData.name}
⭐ Rating: ${formData.rating} out of 5 stars

💬 My Review:
${formData.review}

Thank you for your excellent service!`;

    const encodedMessage = encodeURIComponent(waMessage);
    const whatsappUrl = `https://wa.me/447535048548?text=${encodedMessage}`;
    
    // Open in a new tab
    window.open(whatsappUrl, "_blank");

    // Clear the form
    setFormData({
      name: "",
      rating: 5,
      review: "",
    });
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-[18px] shadow-sm border border-[#c5dff0] w-full max-w-2xl mx-auto">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#1c2d3e] font-plus-jakarta-sans text-center">
        Leave a Review
      </h3>
      <p className="text-[#4a6278] mb-8 font-inter text-center max-w-md mx-auto">
        We would love to hear your feedback! Write your review and submit it directly to us via WhatsApp.
      </p>
      
      <form id="review-form" onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-[#1c2d3e] text-[14px] font-bold mb-2 font-inter">
            Your Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="John Doe"
            className="w-full bg-white outline-none focus:border-[#2a8fd4] transition-colors border border-[#c5dff0] rounded-[10px] py-3 px-4 text-[14px] text-[#4a6278]"
            required
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-[#1c2d3e] text-[14px] font-bold mb-2 font-inter">
            Your Rating
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleRating(star)}
                className="transition-colors bg-transparent border-none p-0 cursor-pointer hover:scale-110"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill={star <= formData.rating ? "#F59E0B" : "transparent"}
                  stroke={star <= formData.rating ? "#F59E0B" : "#cbd5e1"}
                  strokeWidth="1.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Review */}
        <div>
          <label className="block text-[#1c2d3e] text-[14px] font-bold mb-2 font-inter">
            Your Review
          </label>
          <textarea
            name="review"
            value={formData.review}
            onChange={handleChange}
            rows={5}
            placeholder="Tell us about your experience..."
            className="w-full bg-white outline-none focus:border-[#2a8fd4] transition-colors resize-none border border-[#c5dff0] rounded-[10px] py-3 px-4 text-[14px] text-[#4a6278]"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full flex items-center justify-center transition-colors bg-[#2a8fd4] hover:bg-[#1a6daf] text-white rounded-[10px] py-4 font-plus-jakarta-sans font-bold text-[15px]"
        >
          Submit Review to WhatsApp &rarr;
        </button>
      </form>
    </div>
  );
}
