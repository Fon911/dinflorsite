"use client";

import { useState } from "react";

type FilterMode = "products" | "shops";

interface ServOrShopProps {
  onModeChange?: (mode: FilterMode) => void;
}

export const ServOrShop = ({ onModeChange }: ServOrShopProps) => {
  const [mode, setMode] = useState<FilterMode>("products");

  const handleModeChange = (newMode: FilterMode) => {
    setMode(newMode);
    onModeChange?.(newMode);
  };

  return (
    <div className="flex flex-col gap-[20px] text-[16px]">
      <div className="flex gap-[16px]">
        <button
          onClick={() => handleModeChange("products")}
          className="relative pb-1"
        >
          <p
            className={`${
              mode === "products" ? "font-bold text-main-200" : "font-normal "
            } transition-all`}
          >
            Все товары
          </p>
          {mode === "products" && (
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#403B3B]" />
          )}
        </button>
        <button
          onClick={() => handleModeChange("shops")}
          className="relative pb-1"
        >
          <p
            className={`${
              mode === "shops" ? "font-bold text-main-200" : "font-normal "
            } transition-all`}
          >
            Магазины
          </p>
          {mode === "shops" && (
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#403B3B]" />
          )}
        </button>
      </div>
      <div>
        <button className="">
          <p>Все товары</p>
        </button>
        <span> / </span>
        <button>
          <p>Цветы</p>
        </button>
      </div>
    </div>
  );
};
