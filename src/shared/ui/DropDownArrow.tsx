// shared/ui/DropDownArrow.tsx
"use client";
import Image from "next/image";

interface DropDownArrowProps {
  white?: boolean;
  isOpen?: boolean;
  className?: string;
}

export default function DropDownArrow({
  white,
  isOpen,
  className,
}: DropDownArrowProps) {
  return (
    <div className={`flex items-center ${className || ""}`}>
      <Image
        src={`/icon/ui/DropDownArrow${white ? "White" : ""}.svg`}
        alt="DropDownArrow"
        width={16}
        height={8}
        className={`${isOpen ? "rotate-180" : ""} transition-transform`}
      />
    </div>
  );
}
