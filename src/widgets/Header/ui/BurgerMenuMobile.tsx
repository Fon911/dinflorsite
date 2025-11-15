"use client";

import { useToggle } from "@/shared/hooks/useToggle";
import { DropDownArrow } from "@/shared/ui";

interface BurgerMenuMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BurgerMenuMobile = ({
  isOpen,
  onClose,
}: BurgerMenuMobileProps) => {
  const deliveryTime = useToggle();
  const deliveryAddress = useToggle();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full bg-white shadow-2xl transform transition-transform duration-300 z-50 lg:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-main-200">Меню</h2>
          <button
            onClick={onClose}
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

          <a href="/Login" className="text-lg text-main-200 font-normal mt-2">
            Войти
          </a>
        </nav>
      </div>
    </div>
  );
};
