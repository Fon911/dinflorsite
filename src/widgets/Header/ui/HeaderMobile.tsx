"use client";

import { useToggle } from "@/shared/hooks/useToggle";
import { DropDownArrow } from "@/shared/ui";
import Image from "next/image";
import HeaderBurger from "./HeaderBurger";
import { BurgerMenuMobile } from "./BurgerMenuMobile";

export const HeaderMobile = () => {
  const currency = useToggle();
  const language = useToggle();
  const burgerMenu = useToggle();

  return (
    <>
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

        <HeaderBurger isOpen={burgerMenu.isOpen} onClick={burgerMenu.toggle} />
      </div>

      {/* Полноэкранное меню для мобильной версии */}
      <BurgerMenuMobile isOpen={burgerMenu.isOpen} onClose={burgerMenu.toggle} />
    </>
  );
};
