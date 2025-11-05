"use client";
import Image from "next/image";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  rightIcons?: React.ReactNode;
}

export default function Layout({ children, rightIcons }: LayoutProps) {
  return (
    <div className="container-1440 lg:px-[92px]">
      <div
        className="mx-auto relative flex flex-col lg:mb-[130px] lg:px-[30px] mb-[-130px] pb-[130px] 
      w-full h-full  lg:flex-1 px-[18px] 
      lg:pb-[46px] pt-[72px] lg:pt-[70px] lg:mt-[32px] lg:rounded-[15px] bg-white"
      >
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
    </div>
  );
}
