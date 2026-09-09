"use client";

import { useEffect, useState } from "react";

type Review = {
  initials: string;
  name: string;
  location: string;
  text: string;
};

type ReviewsCarouselProps = {
  reviews: Review[];
};

const AUTOPLAY_MS = 4500;

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="w-[calc((100vw-32px))] shrink-0 rounded-[18px] border border-[#c5dff0] bg-white p-8 md:w-[calc((100vw-96px)/2)] lg:w-[calc((100%_-_64px)/3)]">
      <div className="mb-4 mt-2 flex gap-1" aria-label="5 star review">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className="text-[18px] leading-none text-[#f59e0b]" aria-hidden="true">★</span>
        ))}
      </div>
      <p className="mb-8 min-h-[130px] text-[15px] italic leading-[26px] text-[#4a6278]">{review.text}</p>
      <div className="flex items-center gap-4 border-t border-[#c5dff0] pt-6">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2a8fd4] to-[#5bb8f5] text-[15px] font-extrabold text-white">
          {review.initials}
        </div>
        <div>
          <div className="mb-1 text-[15px] font-bold leading-tight text-[#1c2d3e]">{review.name}</div>
          <div className="text-[13px] leading-tight text-[#8fa3b8]">{review.location}</div>
        </div>
      </div>
    </article>
  );
}

export default function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, reviews.length - visibleCount);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrent((previous) => (previous >= maxIndex ? 0 : previous + 1));
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const goTo = (index: number) => {
    setCurrent(Math.max(0, Math.min(index, maxIndex)));
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="reviews-track flex gap-8 transition-transform duration-700 ease-out"
          style={{ "--slide-index": current } as React.CSSProperties}
        >
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => goTo(current - 1)}
          aria-label="Previous review"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c5dff0] bg-white text-[#2a8fd4] transition-colors hover:bg-[#2a8fd4] hover:text-white"
        >
          &#8592;
        </button>
        <div className="flex items-center gap-2" aria-label="Review slides">
          {reviews.slice(0, maxIndex + 1).map((review, index) => (
            <button
              key={review.name}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show review ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${index === current ? "w-6 bg-[#2a8fd4]" : "w-2.5 bg-[#c5dff0]"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => goTo(current + 1)}
          aria-label="Next review"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c5dff0] bg-white text-[#2a8fd4] transition-colors hover:bg-[#2a8fd4] hover:text-white"
        >
          &#8594;
        </button>
      </div>

      <style jsx>{`
        .reviews-track {
          --card-width: calc((100% - 4rem) / 3);
          transform: translateX(calc(var(--slide-index) * -1 * (var(--card-width) + 2rem)));
        }

        @media (max-width: 1023px) {
          .reviews-track {
            --card-width: calc((100% - 2rem) / 2);
          }
        }

        @media (max-width: 767px) {
          .reviews-track {
            --card-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}