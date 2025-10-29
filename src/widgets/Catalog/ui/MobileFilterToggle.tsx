"use client";

import { useState, useEffect } from "react";

type FilterMode = "products" | "shops";

interface MobileFilterToggleProps {
  onModeChange?: (mode: FilterMode) => void;
  currentMode?: FilterMode;
}

export const MobileFilterToggle = ({ onModeChange, currentMode }: MobileFilterToggleProps) => {
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
    <div className="flex justify-center gap-[16px] text-[14px]">
      <button
        onClick={() => handleModeChange("products")}
        className="relative pb-1"
      >
        <p
          className={`${
            mode === "products" ? "font-bold text-main-200" : "font-normal text-gray-700"
          } transition-all`}
        >
          Все товары
        </p>
        {mode === "products" && (
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-main-200" />
        )}
      </button>
      <button
        onClick={() => handleModeChange("shops")}
        className="relative pb-1"
      >
        <p
          className={`${
            mode === "shops" ? "font-bold text-main-200" : "font-normal text-gray-700"
          } transition-all`}
        >
          Магазины
        </p>
        {mode === "shops" && (
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-main-200" />
        )}
      </button>
    </div>
  );
};
