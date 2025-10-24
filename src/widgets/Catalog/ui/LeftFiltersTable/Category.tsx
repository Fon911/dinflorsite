"use client";

import Filter from "./Filter";

interface CategoryProps {
  title: string;
  filters: { id: number; name: string }[];
}

export const Category = ({ title, filters }: CategoryProps) => {
  return (
    <div className="mt-[32px]">
      <p className="text-[16px] font-bold text-[#403B3B] mb-[12px]">{title}</p>
      <div className="grid grid-cols-3 gap-[8px]">
        {filters.map((filter) => (
          <Filter key={filter.id} name={filter.name} />
        ))}
      </div>
    </div>
  );
};
