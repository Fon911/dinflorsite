"use client";

import Image from "next/image";

export const AvatarSettings = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="lg:w-[165px] lg:h-[165px] w-[70px] h-[70px]">
        <Image
          src="/test/Luna.png"
          alt="avatar"
          width={165}
          height={165}
          className="rounded-full w-full h-full object-cover "
        />
      </div>
      <a
        href=""
        className="hidden lg:block text-[14px] font-medium text-[#403B3B] mt-[7px]"
      >
        Изменить фото
      </a>
    </div>
  );
};
