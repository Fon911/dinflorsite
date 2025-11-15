"use client";

import { useCart } from "@/shared/store";

export const CartInfo = () => {
  const { cartItems, getTotalPrice, getTotalItems } = useCart();
  const fmt = (n: number) => new Intl.NumberFormat("ru-RU").format(n);

  const totalDeliveryCost = cartItems.reduce(
    (sum, item) => sum + item.product.deliveryCost,
    0
  );

  const subtotal = getTotalPrice();
  const total = subtotal + totalDeliveryCost;

  return (
    <div className="flex flex-col gap-[15px]">
      <a className="text-[15px] text-main-100 font-bold cursor-pointer">
        Выбрать адрес доставки
      </a>
      <div className="flex flex-col gap-[8px]">
        <div className="flex flex-row justify-between text-[14px] font-light">
          <p>Товары ({getTotalItems()} шт)</p>
          <p>{fmt(subtotal)} ₽</p>
        </div>
        <div className="flex flex-row justify-between text-[14px] font-light">
          <p>Доставка</p>
          <p>{fmt(totalDeliveryCost)} ₽</p>
        </div>
      </div>
      <p className="text-[20px] text-main-100 font-medium">{fmt(total)} ₽</p>
      <p className="text-[12px] text-main-200 font-normal">
        Доставим в течение 90 минут
      </p>
      <button className="text-[15px] w-full text-white bg-main-100 lg:w-[252px] h-[55px] rounded-[60px] font-semibold hover:bg-[#222] transition">
        Заказать
      </button>
    </div>
  );
};
