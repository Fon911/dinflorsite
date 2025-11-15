"use client";

import Image from "next/image";

export const RemoveAccount = () => {
  return (
    <div className="flex flex-row gap-[15px] items-center">
      <Image
        src="/icon/ui/RemoveAccount.png"
        alt="remove"
        width={15}
        height={15}
      />
      <a href="" className="text-[16px] font-normal text-[#B42A00]">
        Удалить аккаунт
      </a>
    </div>
  );
};
