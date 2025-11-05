"use client";

import { useState } from "react";

interface InputProps {
  placeholder: string;
  type?: "text" | "password" | "email";
  value?: string;
  onChange?: (value: string) => void;
}

export default function Input({
  placeholder,
  type = "text",
  value = "",
  onChange,
}: InputProps) {
  const [focused, setFocused] = useState(false);
  const showLabel = focused || value.length > 0;

  return (
    <div
      className={`border-[1px] lg:w-[568px]  relative  pl-[10px] border-main-100 rounded-[10px]  ${
        showLabel ? "pt-[21px] pb-[9px]" : "py-[15px]"
      } `}
    >
      {showLabel && (
        <p className="absolute top-[4px] left-[10px] text-[10px] font-normal text-[#A4A3A3]">
          {placeholder}
        </p>
      )}
      <input
        type={type}
        value={value}
        placeholder={showLabel ? "" : placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => onChange?.(e.target.value)}
        className="outline-none bg-transparent text-[16px] font-normal text-main-200 w-full"
      />
    </div>
  );
}
