"use client";

import Image from "next/image";

export const ExitAccount = () => {
  return (
    <div className="flex items-center flex-row gap-[15px]">
      <Image
        src="/icon/ui/ExitAccount.png"
        alt="remove"
        width={15}
        height={15}
      />
      <a href="" className="text-[16px] font-normal text-black">
        Выйти из аккаунта
      </a>
    </div>
  );
};
