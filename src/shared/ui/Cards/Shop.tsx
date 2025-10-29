"use client";

import Image from "next/image";

export const Shop = ({
  ShopName,
  DeliveryTime,
  Rating,
  ReviewsCount,
}: {
  ShopName: string;
  DeliveryTime: string;
  Rating: number;
  ReviewsCount: number;
}) => {
  return (
    <div className=" rounded-[10px] max-w-[445px]">
      {/* Верхняя часть с изображениями */}
      <div className="flex gap-[2px]">
        {/* Большое изображение */}
        <div className="flex-1 relative h-[152px] rounded-tl-[10px] overflow-hidden">
          <Image
            src="/test/Luna.png"
            alt="Main"
            fill
            className="object-cover"
          />
        </div>

        {/* Два маленьких изображения */}
        <div className="flex flex-col gap-[2px] flex-[0.4]">
          <div className="relative h-[75px] rounded-tr-[10px] overflow-hidden">
            <Image
              src="/test/Luna.png"
              alt="Small 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[75px]  overflow-hidden">
            <Image
              src="/test/Luna.png"
              alt="Small 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Нижняя часть с информацией */}
      <div className="mt-3 px-[23px] pb-[10px]  flex justify-between items-center">
        <div className="gap-[3px]">
          <h2 className="text-[16px] text-main-200 font-bold">{ShopName}</h2>
          <p className="text-[10px] font-light text-main-200">{DeliveryTime}</p>
          <div className="flex gap-1 text-[14px] text-gray-700 justify-center items-center">
            <Image
              src="/icon/ui/star.png"
              alt="Star"
              width={12}
              height={12}
              className="mr-[22px]"
            />
            <span className="font-medium text-main-200 text-[10px]">
              {Rating} / 5 · {ReviewsCount} оценок
            </span>
          </div>
        </div>

        {/* Сердце */}
        <button>
          <Image src="/icon/ui/like.png" alt="Like" width={24} height={26} />
        </button>
      </div>
    </div>
  );
};

export default Shop;
