"use client";
import Image from "next/image";

interface DropDownArrowProps {
  white?: boolean;
  isOpen?: boolean;
  className?: string;
  children?: React.ReactNode;
  left?: number;
}

export function DropDownArrow({
  white,
  isOpen,
  children,
  className,
  left = 0,
}: DropDownArrowProps) {
  return (
    <div className={`relative flex items-center ${className || ""}`}>
      <Image
        src={`/icon/ui/DropDownArrow${white ? "White" : "Black"}.svg`}
        alt="DropDownArrow"
        width={16}
        height={8}
        className={`${isOpen ? "rotate-180" : ""} transition-transform`}
      />

      {isOpen && (
        <div
          className="absolute top-[25px] z-[9999]"
          style={{ left: `${left}px` }}
          onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие при клике внутри
        >
          {children}
        </div>
      )}
    </div>
  );
}
