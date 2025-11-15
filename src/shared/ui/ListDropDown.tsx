"use client";
import Image from "next/image";

interface ListDropDownProps {
  white?: boolean;
  isOpen?: boolean;
  className?: string;
}

export default function ListDropDown({
  white,
  isOpen,
  className,
}: ListDropDownProps) {
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
