"use client";

import { useToggle } from "@/shared/hooks/useToggle";
import { DropDownArrow } from "@/shared/ui";
import Image from "next/image";
const Header = () => {
  const { isOpen, toggle } = useToggle();
  return (
    <div className=" w-full items-center justify-center">
      <div className="px-[107px] pb-[11px] flex flex-row items-center justify-between pt-[11px]">
        <Image
          src="/icon/ui/HeaderIcon.png" // путь в public
          alt="HeaderIcon"
          width={120} // ширина изображения
          height={68} // высота изображения
          priority // для LCP
        />
        <div className="flex flex-row">
          <ul className="flex flex-row items-center font-semibold gap-[50px] text-[15px] text-main-200">
            <li>
              <a href="#">Каталог</a>
            </li>
            <li>
              <a href="#">Тренды</a>
            </li>
            <li>
              <a href="#">Скидки</a>
            </li>
            <li>
              <a href="#">Откройте в приложении</a>
            </li>
            <li>
              <button className="text-white px-[16px] py-[7px] rounded-[20px] bg-main-100">
                Продавайте на DinFlor
              </button>
            </li>
            <li>
              <button className="font-normal">Войти</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-[11px] flex flex-row bg-black">
        <ul className="font-normal flex flex-row  items-center mx-auto gap-[44px] text-[15px] text-white">
          <li>
            <button onClick={toggle} className="flex items-center gap-1">
              <span className="leading-none">Как можно скорее</span>
              <DropDownArrow
                white
                isOpen={isOpen}
                className="translate-y-[2px]"
              />
            </button>
          </li>

          <li>
            <button onClick={toggle} className="flex items-center gap-1">
              <span className="leading-none">Укажите адрес доставки</span>
              <DropDownArrow
                white
                isOpen={isOpen}
                className="translate-y-[2px]"
              />
            </button>
          </li>
          <li>
            <button>Контакты</button>
          </li>
          <li>
            <button>Помощь</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
