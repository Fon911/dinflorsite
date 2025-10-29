"use client";
import Image from "next/image";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  rightIcons?: React.ReactNode;
}

export default function Layout({ children, rightIcons }: LayoutProps) {
  return (
    <div className="relative flex-1 mx-[92px] px-[40px] pb-[46px] pt-[70px] mt-[32px] rounded-[15px] bg-white">
      <button
        onClick={() => window.history.back()}
        className="absolute top-[20px] left-[20px]"
      >
        <Image src="/icon/ui/BackArrow.png" alt="" width={30} height={30} />
      </button>

      {rightIcons && (
        <div className="absolute top-[20px] right-[20px] flex gap-[12px]">
          {rightIcons}
        </div>
      )}

      {children}
    </div>
  );
}
