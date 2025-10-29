"use client";

import { filtersData } from "@/shared/data";
import Image from "next/image";

interface MobileFiltersCarouselProps {
  activeFilter?: { category: string; filter: string | null } | null;
  onFilterClick?: (category: string, filter: string | null) => void;
}

export const MobileFiltersCarousel = ({
  activeFilter,
  onFilterClick,
}: MobileFiltersCarouselProps) => {
  // Собрать все фильтры из всех категорий в один плоский список
  const allFilters = filtersData.flatMap((category) =>
    category.filters.map((filter) => ({
      category: category.category,
      filterName: filter.name,
    }))
  );

  const handleFilterClick = (category: string, filterName: string) => {
    // Toggle: если кликнули на уже активный фильтр, сбрасываем
    if (
      activeFilter?.category === category &&
      activeFilter?.filter === filterName
    ) {
      onFilterClick?.(category, null); // Применить только категорию
    } else {
      onFilterClick?.(category, filterName);
    }
  };

  return (
    <div className="overflow-x-scroll scrollbar-hide -mx-[15px] px-[15px]">
      <div className="flex gap-[8px] w-max">
        {allFilters.map((item, index) => {
          const isActive =
            activeFilter?.category === item.category &&
            activeFilter?.filter === item.filterName;

          return (
            <div
              key={`${item.category}-${item.filterName}-${index}`}
              className={`flex flex-col items-center gap-[5px] min-w-[70px] cursor-pointer transition-all ${
                isActive ? "opacity-100" : "opacity-70"
              }`}
              onClick={() => handleFilterClick(item.category, item.filterName)}
            >
              <div className={`${isActive ? " rounded-[20px]" : ""}`}>
                <Image
                  src="/test/FilterIcon.png"
                  alt="FilterIcon"
                  width={70}
                  height={70}
                  className="rounded-[20px]"
                />
              </div>
              <p
                className={`text-[12px] text-center font-medium h-[32px] w-[70px] flex items-center justify-center ${
                  isActive ? "text-main-200" : "text-black"
                }`}
              >
                {item.filterName}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
