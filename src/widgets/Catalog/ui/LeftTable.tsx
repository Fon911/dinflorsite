"use client";

import { Category, ServOrShop } from "./LeftFiltersTable";

type FilterMode = "products" | "shops";

interface LeftTableProps {
  onModeChange?: (mode: FilterMode) => void;
}

export const LeftTable = ({ onModeChange }: LeftTableProps) => {
  const categories = [
    {
      id: 1,
      title: "Картины",
      filters: [
        { id: 1, name: "Цветы поштучно" },
        { id: 2, name: "Композиции" },
        { id: 3, name: "Розы" },
        { id: 4, name: "Цветы поштучно" },
        { id: 5, name: "Композиции" },
        { id: 6, name: "Розы" },
        { id: 7, name: "Цветы поштучно" },
        { id: 8, name: "Композиции" },
      ],
    },
    {
      id: 2,
      title: "Игрушки",
      filters: [
        { id: 1, name: "Мягкие" },
        { id: 2, name: "Интерактивные" },
        { id: 3, name: "Для подарка" },
        { id: 4, name: "Для подарка" },
        { id: 5, name: "Для подарка" },
        { id: 6, name: "Для подарка" },
        { id: 7, name: "Для подарка" },
        { id: 8, name: "Для подарка" },
        { id: 9, name: "Для подарка" },
        { id: 10, name: "Для подарка" },
        { id: 11, name: "Для подарка" },
      ],
    },
  ];

  return (
    <div className="w-[258px]">
      <ServOrShop onModeChange={onModeChange} />
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          filters={category.filters}
        />
      ))}
    </div>
  );
};
