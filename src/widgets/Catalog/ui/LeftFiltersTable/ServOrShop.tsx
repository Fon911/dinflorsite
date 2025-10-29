"use client";

import { useState, useEffect } from "react";

type FilterMode = "products" | "shops";

interface ServOrShopProps {
  onModeChange?: (mode: FilterMode) => void;
  activeFilter?: { category: string; filter: string | null } | null;
  onResetFilter?: () => void;
  onCategoryClick?: (category: string) => void;
  currentMode?: FilterMode;
}

export const ServOrShop = ({ onModeChange, activeFilter, onResetFilter, onCategoryClick, currentMode }: ServOrShopProps) => {
  const [mode, setMode] = useState<FilterMode>(currentMode || "products");

  useEffect(() => {
    if (currentMode) {
      setMode(currentMode);
    }
  }, [currentMode]);

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
      <div className="text-[14px]">
        <button
          onClick={onResetFilter}
          className="text-gray-700 hover:text-main-200 transition-colors"
        >
          {mode === "shops" ? "Магазины" : "Все товары"}
        </button>
        {activeFilter && activeFilter.category && (
          <>
            <span className="text-gray-400"> / </span>
            <button
              onClick={() => onCategoryClick?.(activeFilter.category)}
              className="text-gray-700 hover:text-main-200 transition-colors"
            >
              {activeFilter.category}
            </button>
            {activeFilter.filter && (
              <>
                <span className="text-gray-400"> / </span>
                <span className="text-main-200 font-medium">{activeFilter.filter}</span>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};
