import { Check } from "@/shared/ui";
import Image from "next/image";

export const InputCity = () => {
  return (
    <div className="">
      <div className="relative mt-[60px] w-[calc(100%-56px)] max-w-[374px] lg:w-[874px] lg:max-w-none mx-auto">
        {/* Иконка слева */}
        <button>
          <Image
            src="/icon/ui/LocationMarker.png"
            alt="location"
            width={20}
            height={20}
            className="absolute left-3 top-1/2 -translate-y-1/2"
          />
        </button>
        {/* Поле ввода */}
        <input
          type="text"
          placeholder="Введите город"
          className="w-full px-[54px] py-[13px] bg-white rounded-[70px] border-[1px] border-main-100"
        />

        {/* Кнопка справа */}
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2"
        >
          <Image
            src="/icon/ui/redXicon.png"
            alt="clear"
            width={20}
            height={20}
          />
        </button>
      </div>
      <div className="mt-[40px] px-[26px]">
        <Check title="Уточнить у покупателя" fontSize="20px" />
        <p className="text-[16px] text-left font-Light  text-main-200 mt-[10px]">
          Укажите только город, куда хотите отправить подарок, остальное узнаем
          сами
        </p>
      </div>
    </div>
  );
};
