"use client";

import { useToggle } from "@/shared/hooks/useToggle";
import { DropDownArrow } from "@/shared/ui";
import Image from "next/image";
import HeaderBurger from "./HeaderBurger";

const Header = () => {
  // Отдельные состояния для каждой кнопки
  const deliveryTime = useToggle();
  const deliveryAddress = useToggle();
  const currency = useToggle();
  const language = useToggle();
  const burgerMenu = useToggle();

  return (
    <div className="w-full items-center justify-center bg-white">
      {/* Основной хедер */}
      <div className="px-4 md:px-8 lg:px-[107px] pb-[11px] flex flex-row items-center justify-between pt-[11px]">
        <a href="/">
          <Image
            src="/icon/ui/HeaderIcon.png"
            alt="HeaderIcon"
            width={120}
            height={68}
            priority
            className=" "
          />
        </a>
        {/* Десктопное меню */}
        <div className="hidden lg:flex flex-row">
          <ul className="flex flex-row items-center  font-semibold gap-[50px] text-[15px] text-main-200">
            <li>
              <a href="/Catalog">Каталог</a>
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

        {/* Мобильное меню - селекторы и бургер */}
        <div className="flex lg:hidden items-center gap-4">
          <button onClick={currency.toggle} className="flex items-center gap-1">
            <span className="leading-none font-normal text-[15px] text-main-200">
              RUB
            </span>
            <DropDownArrow isOpen={currency.isOpen} />
          </button>

          <button onClick={language.toggle} className="flex items-center gap-1">
            <Image
              src="/icon/misc/flag-russia.svg"
              alt="Russia"
              width={24}
              height={24}
            />
            <DropDownArrow isOpen={language.isOpen} />
          </button>

          <HeaderBurger
            isOpen={burgerMenu.isOpen}
            onClick={burgerMenu.toggle}
          />
        </div>
      </div>

      {/* Полноэкранное меню для мобильной версии */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-2xl transform transition-transform duration-300 z-50 lg:hidden ${
          burgerMenu.isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-main-200">Меню</h2>
            <button
              onClick={burgerMenu.toggle}
              className="text-4xl text-main-200 w-10 h-10 flex items-center justify-center"
            >
              ×
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            <a href="/Catalog" className="text-lg text-main-200 font-semibold">
              Каталог
            </a>
            <a href="#" className="text-lg text-main-200 font-semibold">
              Тренды
            </a>

            <button
              onClick={deliveryTime.toggle}
              className="flex items-center gap-2 text-left text-main-200"
            >
              <span className="leading-none">Как можно скорее</span>
              <DropDownArrow isOpen={deliveryTime.isOpen} />
            </button>

            <button
              onClick={deliveryAddress.toggle}
              className="flex items-center gap-2 text-left text-main-200"
            >
              <span className="leading-none">Указать адрес доставки</span>
              <DropDownArrow isOpen={deliveryAddress.isOpen} />
            </button>

            <a href="#" className="text-lg text-main-200 font-semibold">
              Скидки
            </a>
            <a href="#" className="text-lg text-main-200 font-semibold">
              Откройте в приложении
            </a>

            <button className="text-white px-[16px] py-[10px] rounded-[20px] bg-main-100 text-center font-semibold mt-4">
              Продавайте на DinFlor
            </button>

            <button className="text-lg text-main-200 font-normal mt-2">
              Войти
            </button>
          </nav>
        </div>
      </div>

      {/* Черная навигационная панель - только десктоп */}
      <div className="hidden lg:flex py-[11px] flex-row bg-black">
        <ul className="font-normal flex flex-row items-center  mx-auto gap-[44px] text-[15px] text-white">
          <li>
            <button
              onClick={deliveryTime.toggle}
              className="flex items-center gap-1"
            >
              <span className="leading-none">Как можно скорее</span>
              <DropDownArrow
                white
                isOpen={deliveryTime.isOpen}
                className="translate-y-[2px]"
              />
            </button>
          </li>

          <li>
            <button
              onClick={deliveryAddress.toggle}
              className="flex items-center gap-1"
            >
              <span className="leading-none">Укажите адрес доставки</span>
              <DropDownArrow
                white
                isOpen={deliveryAddress.isOpen}
                className="translate-y-[2px]"
              />
            </button>
          </li>

          <li>
            <button
              onClick={currency.toggle}
              className="flex items-center gap-1"
            >
              <span className="leading-none">RUB</span>
              <DropDownArrow
                white
                isOpen={currency.isOpen}
                className="translate-y-[2px]"
              />
            </button>
          </li>

          <li>
            <button
              onClick={language.toggle}
              className="flex items-center gap-1"
            >
              <Image
                src="/icon/misc/flag-russia.svg"
                alt="Russia"
                width={24}
                height={24}
                className="translate-y-[-1px]"
              />
              <DropDownArrow
                white
                isOpen={language.isOpen}
                className="translate-y-[2px]"
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
