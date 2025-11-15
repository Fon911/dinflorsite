"use client";

import { Shop } from "@/shared/data/shop";

import { DeleteIcon } from "@/shared/ui/icons";
import Image from "next/image";
import Link from "next/link";

interface ShopCardFavProps {
  shop: Shop;
  onRemove: () => void;
}

export const ShopCardFav = ({ shop, onRemove }: ShopCardFavProps) => {
  const truncateText = (text: string, maxLength: number) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  console.log("ShopCardFav received shop:", shop);

  return (
    <div className="px-[17px] py-[12px] justify-between flex items-center flex-row rounded-[25px] bg-[#F4F4F4] bg-gradient-to-r from-[#F4F4F4] to-[#ff46813b] relative">
      <Link
        href={`/Shop/${shop.id}`}
        className="flex flex-row gap-[24px] flex-1 cursor-pointer"
      >
        <div className="w-[132px] h-[132px] flex-shrink-0">
          <Image
            src={shop.ShopCoverImage.main}
            width={132}
            height={132}
            alt={shop.ShopName}
            className="rounded-[25px] w-full h-full object-cover"
          />
        </div>
        <div className="pt-[10px] gap-[10px] flex items-baseline justify-between lg:justify-center flex-col">
          <div className="flex flex-col gap-[8px]">
            <p className="lg:text-[25px] text-[20px] font-semibold text-main-200">
              {shop.ShopName}
            </p>

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-[4px]">
              <p className="text-[16px] font-normal text-main-200">Магазин</p>
              <p className="hidden lg:block text-[16px] font-normal text-main-200">
                ·
              </p>
              <div className="flex flex-row items-center gap-[4px]">
                <Image
                  src="/icon/ui/star.png"
                  alt="star"
                  width={17}
                  height={17}
                />
                <p className="text-[16px] font-normal text-main-200">
                  {shop.Rating}
                </p>
              </div>
            </div>
          </div>

          <p className="text-[14px] font-normal text-main-200">
            {truncateText(shop.description, 20)}
          </p>
        </div>
      </Link>
      <button
        onClick={(e) => {
          e.preventDefault();
          onRemove();
        }}
        className="cursor-pointer"
      >
        <DeleteIcon />
      </button>
    </div>
  );
};
