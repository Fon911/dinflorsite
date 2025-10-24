"use client";

import { useToggle } from "@/shared/hooks/useToggle";
import { DropDownArrow } from "@/shared/ui";

interface FilterInputProps {
  title: string;
  className?: string;
  showArrow?: boolean;
}

export default function FilterInput({
  title,
  className,
  showArrow = true,
}: FilterInputProps) {
  const { isOpen, toggle } = useToggle(false);

  return (
    <button
      onClick={toggle}
      className={`flex items-center px-[16px] py-[13px] bg-white rounded-[50px] transition-all duration-200 ${
        showArrow ? "justify-between" : "justify-center"
      } ${className}`}
    >
      <p className="font-medium text-[15px] text-black">{title}</p>

      {showArrow && <DropDownArrow isOpen={isOpen} white={false} />}
    </button>
  );
}
