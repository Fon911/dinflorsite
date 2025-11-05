"use client";

import Image from "next/image";
import {
  convertDaysToYearsAndMonths,
  formatNumberWithSpaces,
  getOrderInTimeColor,
} from "../../utils/shopHelpers";
import { ShopTrait } from "../ShopTrait";

interface ShopInfoProps {
  shop: {
    id: number;
    ShopImage: string;
    ShopName: string;
    Rating: number;
    ReviewsCount: number;
    SoldCount: number;
    DaySet: number;
    OrderInTime: number;
    TopShop: boolean;
  };
}

export const ShopInfo = ({ shop }: ShopInfoProps) => {
  // Маппинг данных для карточек ShopTrait
  const shopTraits = [
    // 1. Уровень магазина
    {
      title: shop.TopShop ? "Топ Магазин" : "Магазин",
      subtitle: "Уровень магазина",
      color: shop.TopShop ? "#FF4681" : "#1E1E1E", // main-100 для Топ, main-200 для обычного
      icon: "/icon/ui/Cope.png",
    },
    // 2. Товаров продано
    {
      title: formatNumberWithSpaces(shop.SoldCount),
      subtitle: "товаров продано",
      color: "#1E1E1E",
      icon: "/icon/ui/BlackLike.png",
    },
    // 3. Заказов вовремя (цвет зависит от процента)
    {
      title: `${shop.OrderInTime}%`,
      subtitle: "заказов вовремя",
      color: getOrderInTimeColor(shop.OrderInTime),
      icon: "/icon/ui/BlackCart.png",
    },
    // 4. На площадке (дни конвертируются в годы и месяцы)
    {
      title: convertDaysToYearsAndMonths(shop.DaySet),
      subtitle: "на площадке",
      color: "#1E1E1E",
      icon: "/icon/ui/BlackShop.png",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center gap-[54px] ">
      <div className="flex flex-row gap-[15px] items-center justify-center">
        <div className="w-[95px] h-[95px]">
          <Image
            src={shop.ShopImage}
            alt={shop.ShopName}
            width={95}
            height={95}
            className="rounded-[15px] w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-[10px] ">
          <div>
            <p className="font-bold text-[24px]">{shop.ShopName}</p>
          </div>
          <div className="font-medium text-[14px] flex flex-row items-center gap-[4px]">
            <div className="w-[16px] h-[16px]">
              <Image
                src="/icon/ui/star.png"
                alt=""
                width={16}
                height={16}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-row gap-[2px]">
              <p>{shop.Rating}</p>
              <p>/5</p>
              <p>·</p>
              <p>{formatNumberWithSpaces(shop.ReviewsCount)} оценок</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex grid grid-cols-2 lg:flex-row gap-[10px]">
        {shopTraits.map((trait, index) => (
          <ShopTrait
            key={index}
            title={trait.title}
            subtitle={trait.subtitle}
            color={trait.color}
            icon={trait.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopInfo;
