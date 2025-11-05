"use client";
import { CategoryCard } from "@/entities/category";
import { extraFilters } from "@/shared/data";

export const HomeCardMobile = () => {
  return (
    <div className="w-full">
      <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth">
        <div className="flex gap-4 px-4 py-2 w-max">
          {extraFilters.map((filter, i) => (
            <div key={i} className="flex-shrink-0 w-[90px] snap-center">
              <CategoryCard title={filter.name} image={filter.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
