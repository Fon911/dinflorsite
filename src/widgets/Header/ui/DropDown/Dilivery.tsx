"use client";
import { Check } from "@/shared/ui";
import Image from "next/image";

interface DiliveryProps {
  onClose?: () => void;
}

export const Dilivery = ({ onClose }: DiliveryProps) => {
  return (
    <div
      className="w-[896px] p-10 relative z-[9999] gap-5 flex flex-col bg-white rounded-[15px]"
      onClick={(e) => e.stopPropagation()}
    >
      <Image
        src="/icon/ui/close.png"
        alt="Close"
        width={24}
        height={24}
        className="absolute top-[20px] right-[20px] cursor-pointer hover:opacity-70 transition"
        onClick={onClose}
      />
      <h2 className="text-[24px] text-left font-bold text-main-200 ">
        Куда доставить
      </h2>
      <div className="relative w-full ">
        {/* Иконка слева */}
        <div>
          <Image
            src="/icon/ui/LocationMarker.png"
            alt="location"
            width={20}
            height={20}
            className="absolute left-3 top-1/2 -translate-y-1/2"
          />
        </div>
        {/* Поле ввода */}
        <input
          type="text"
          placeholder="Введите город"
          className="w-full px-[54px] py-[13px] bg-white rounded-[70px] border-[1px] border-main-100"
        />

        {/* Кнопка справа */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <Image
            src="/icon/ui/redXicon.png"
            alt="clear"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="">
        <Check title="Уточнить у покупателя" fontSize="20px" />
        <p className="text-[16px] text-left font-Light  text-main-200 mt-[10px]">
          Укажите только город, куда хотите отправить подарок, остальное узнаем
          сами
        </p>
      </div>
      <div>
        <div className="w-[816px] h-[350px] bg-black rounded-[15px]" />
      </div>
    </div>
  );
};
