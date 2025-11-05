"use client";
import { CategoryCard } from "@/entities/category";
import { extraFilters } from "@/shared/data";
import Image from "next/image";
import { useState } from "react";

export const HomeCard = () => {
  const [startIndex, setStartIndex] = useState(0);
  const maxVisible = 5;

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + maxVisible, extraFilters.length - maxVisible)
    );
  };

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - maxVisible, 0));
  };

  return (
    <section className="flex items-center gap-4 relative max-w-[1228px] mx-auto lg:mx-0">
      {/* Левая стрелка */}
      {startIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-[-50px] top-1/2 -translate-y-1/2 z-10"
        >
          <Image
            src="/icon/ui/homearrow.png"
            alt="prev"
            width={44}
            height={44}
            className="rotate-180"
          />
        </button>
      )}

      {/* Карточки */}
      <div className="overflow-hidden lg:pr-[50px] flex-1">
        <div
          className="flex gap-4 transition-transform duration-500"
          style={{
            transform: `translateX(-${startIndex * (100 / maxVisible)}%)`,
          }}
        >
          {extraFilters.map((filter, i) => (
            <div className="flex-shrink-0 w-[calc(100%/5)]" key={i}>
              <CategoryCard title={filter.name} image={filter.image} />
            </div>
          ))}
        </div>
      </div>

      {/* Правая стрелка */}
      {startIndex + maxVisible < extraFilters.length && (
        <button
          onClick={handleNext}
          className="absolute right-[-50px] top-1/2 -translate-y-1/2 z-10"
        >
          <Image
            src="/icon/ui/homearrow.png"
            alt="next"
            width={44}
            height={44}
          />
        </button>
      )}
    </section>
  );
};
