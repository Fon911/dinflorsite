"use client";

import { filtersData } from "@/shared/data";
import { Category, ServOrShop } from "./LeftFiltersTable";

type FilterMode = "products" | "shops";

interface LeftTableProps {
  onModeChange?: (mode: FilterMode) => void;
  activeFilter?: { category: string; filter: string | null } | null;
  onFilterClick?: (category: string, filter: string | null) => void;
  onCategoryClick?: (category: string) => void;
  currentMode?: FilterMode;
}

export const LeftTable = ({ onModeChange, activeFilter, onFilterClick, onCategoryClick, currentMode }: LeftTableProps) => {
  const handleResetFilter = () => {
    onFilterClick?.("", null);
  };

  return (
    <div className="w-[258px]">
      <ServOrShop
        onModeChange={onModeChange}
        activeFilter={activeFilter}
        onResetFilter={handleResetFilter}
        onCategoryClick={onCategoryClick}
        currentMode={currentMode}
      />
      {filtersData.map((category) => (
        <Category
          key={category.id}
          title={category.category}
          filters={category.filters.map((filter) => ({
            id: category.id,
            name: filter.name,
          }))}
          activeFilter={activeFilter}
          onFilterClick={onFilterClick}
          onCategoryClick={onCategoryClick}
        />
      ))}
    </div>
  );
};
