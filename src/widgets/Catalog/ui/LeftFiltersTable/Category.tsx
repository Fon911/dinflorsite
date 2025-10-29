"use client";

import Filter from "./Filter";

interface CategoryProps {
  title: string;
  filters: { id: number; name: string }[];
  activeFilter?: { category: string; filter: string | null } | null;
  onFilterClick?: (category: string, filter: string | null) => void;
  onCategoryClick?: (category: string) => void;
}

export const Category = ({ title, filters, activeFilter, onFilterClick, onCategoryClick }: CategoryProps) => {
  const handleFilterClick = (filterName: string) => {
    // Toggle: если кликнули на уже активный фильтр, сбрасываем
    if (activeFilter?.category === title && activeFilter?.filter === filterName) {
      onFilterClick?.(title, null); // Применить только категорию
    } else {
      onFilterClick?.(title, filterName);
    }
  };

  return (
    <div className="mt-[32px]">
      <p
        className="text-[16px] font-bold text-[#403B3B] mb-[12px] cursor-pointer hover:text-main-200 transition-colors"
        onClick={() => onCategoryClick?.(title)}
      >
        {title}
      </p>
      <div className="grid grid-cols-3 gap-[8px]">
        {filters.map((filter, index) => (
          <Filter
            key={`${title}-${filter.id}-${index}`}
            name={filter.name}
            isActive={activeFilter?.category === title && activeFilter?.filter === filter.name}
            onClick={() => handleFilterClick(filter.name)}
          />
        ))}
      </div>
    </div>
  );
};
