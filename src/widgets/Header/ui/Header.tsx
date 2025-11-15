"use client";

import { useToggle } from "@/shared/hooks/useToggle";
import { DropDownArrow } from "@/shared/ui";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { BurgerMenuDesktop } from "./BurgerMenuDesktop";
import { LanguageDrop } from "./DropDown";
import { DeliveryTime } from "./DropDown/DeliveryTime";
import { Dilivery } from "./DropDown/Dilivery";
import { HeaderMobile } from "./HeaderMobile";

const Header = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  // Отдельные состояния для каждой кнопки
  const deliveryTime = useToggle();
  const deliveryAddress = useToggle();
  const currency = useToggle();
  const language = useToggle();
  const burgerMenuDesktop = useToggle();

  // Refs для dropdown'ов
  const deliveryTimeRef = useRef<HTMLLIElement>(null);
  const deliveryAddressRef = useRef<HTMLLIElement>(null);
  const currencyRef = useRef<HTMLLIElement>(null);
  const languageRef = useRef<HTMLLIElement>(null);

  // Закрытие dropdown'ов при клике вне их
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        deliveryTimeRef.current &&
        !deliveryTimeRef.current.contains(event.target as Node) &&
        deliveryTime.isOpen
      ) {
        deliveryTime.setIsOpen(false);
      }
      if (
        deliveryAddressRef.current &&
        !deliveryAddressRef.current.contains(event.target as Node) &&
        deliveryAddress.isOpen
      ) {
        deliveryAddress.setIsOpen(false);
      }
      if (
        currencyRef.current &&
        !currencyRef.current.contains(event.target as Node) &&
        currency.isOpen
      ) {
        currency.setIsOpen(false);
      }
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target as Node) &&
        language.isOpen
      ) {
        language.setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [deliveryTime, deliveryAddress, currency, language]);

  return (
    <div className="w-full items-center justify-center bg-white">
      {/* Основной хедер */}
      <div className="container-1440 px-4 md:px-8 lg:px-[107px] pb-[11px] flex flex-row items-center justify-between pt-[11px]">
        <Link href="/">
          <Image
            src="/icon/ui/HeaderIcon.png"
            alt="HeaderIcon"
            width={120}
            height={68}
            priority
            className=" "
          />
        </Link>
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
              <div className="flex items-center gap-3 bg-[#EDEDED] rounded-[6px] px-[6px] py-[6px]">
                <Link href="/Profile" className="hover:opacity-70 transition">
                  <Image
                    src="/icon/ui/Profile.png"
                    alt="Профиль"
                    width={24}
                    height={24}
                  />
                </Link>
                <button
                  onClick={burgerMenuDesktop.toggle}
                  className="hover:opacity-70 transition"
                >
                  <Image
                    src="/icon/ui/3ClipPath.png"
                    alt="Меню"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </li>
          </ul>
        </div>

        {/* Мобильное меню - селекторы и бургер */}
        <HeaderMobile />
      </div>

      {/* Бургер меню для десктопа */}
      <BurgerMenuDesktop
        isLoggedIn={isLoggedIn}
        isOpen={burgerMenuDesktop.isOpen}
        onClose={burgerMenuDesktop.toggle}
      />

      {/* Черная навигационная панель - только десктоп */}
      <div className="hidden  lg:flex py-[11px] flex-row bg-black">
        <ul className="container-1440 font-normal flex flex-row items-center justify-center mx-auto gap-[44px] text-[15px] text-white">
          <li ref={deliveryTimeRef}>
            <button
              onClick={deliveryTime.toggle}
              className="flex items-center gap-1"
            >
              <span className="leading-none">Как можно скорее</span>
              <DropDownArrow white isOpen={deliveryTime.isOpen} left={-319}>
                <DeliveryTime onClose={deliveryTime.toggle} />
              </DropDownArrow>
            </button>
          </li>

          <li ref={deliveryAddressRef}>
            <button
              onClick={deliveryAddress.toggle}
              className="flex items-center gap-1"
            >
              <span className="leading-none">Укажите адрес доставки</span>
              <DropDownArrow
                white
                isOpen={deliveryAddress.isOpen}
                className=""
                left={-448}
              >
                <Dilivery onClose={deliveryAddress.toggle} />
              </DropDownArrow>
            </button>
          </li>

          <li ref={currencyRef}>
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

          <li ref={languageRef}>
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
                left={-88}
              >
                <LanguageDrop />
              </DropDownArrow>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
