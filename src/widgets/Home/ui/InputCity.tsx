import Image from "next/image";
import Check from "./Check";

export const InputCity = () => {
  return (
    <div>
      <div className="relative mt-[60px] min-w-[874px] mx-auto">
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
      <Check />
    </div>
  );
};
