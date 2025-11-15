"use client";

import { useEffect, useRef, useState } from "react";
import { DropDownArrow } from "./DropDownArrow";

interface SelectProps {
  label: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  children?: React.ReactNode;
  widthClass?: string;
}

export const Select = ({
  label,
  value = "",
  placeholder = "Не выбрано",
  onChange,
  children,
  widthClass = "lg:w-[568px]",
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("close-select", () => setIsOpen(false)); // 👈 ловим событие
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("close-select", () => setIsOpen(false));
    };
  }, []);

  return (
    <div ref={ref} className={`relative ${widthClass}`}>
      <div
        className={`border border-main-100 rounded-[10px] px-[10px] pt-[21px] pb-[9px] cursor-pointer bg-white ${
          isOpen ? "rounded-b-none border-b-0" : ""
        }`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p className="absolute top-[4px] left-[10px] text-[10px] font-normal text-[#A4A3A3]">
          {label}
        </p>

        <div className="flex justify-between items-center">
          <p
            className={`text-[16px] font-normal ${
              value ? "text-main-200" : "text-[#A4A3A3]"
            }`}
          >
            {value || placeholder}
          </p>
          <DropDownArrow isOpen={isOpen} />
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 top-full w-full bg-white border-x border-b border-main-100 rounded-b-[10px] z-[9999]">
          {children}
        </div>
      )}
    </div>
  );
};
