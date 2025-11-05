"use client";
import Image from "next/image";
import Link from "next/link";
export const Products = ({
  discount,
  cost,
  deliveryCost,
  title,
  description,
  rating,
  reviewsCount,
  id,
}: {
  discount: number;
  cost: number;
  deliveryCost: number;
  title: string;
  description: string;
  rating: number;
  reviewsCount: number;
  id: number;
}) => {
  const finalCost = discount ? cost - discount : cost;
  const fmt = (n: number) => new Intl.NumberFormat("ru-RU").format(n);
  const deliveryTime = 90; // минуты — можно сделать пропом

  return (
    <div className="bg-white rounded-[24px] flex flex-col w-full max-w-[291px] text-main-200 shadow-sm overflow-hidden">
      {/* Изображение */}
      <div className="relative w-full aspect-square">
        <Image
          src="/test/Luna.png"
          alt={title}
          fill
          className="object-cover rounded-t-[24px]"
        />
        <button className="absolute top-[16px] right-[16px]">
          <Image src="/icon/ui/like.png" alt="Like" width={24} height={26} />
        </button>
      </div>

      {/* Контент */}
      <div className="flex flex-col px-[12px] lg:px-[16px] pb-[16px] pt-[8px] flex-1">
        {/* Цена */}
        <div className="flex items-center gap-1">
          <p className="text-[20px] lg:text-[24px] font-bold text-main-100">
            {fmt(finalCost)} ₽
          </p>
          {discount ? (
            <p className="text-[12px] lg:text-[14px] font-medium line-through text-[#1E1E1E80]">
              {fmt(cost)} ₽
            </p>
          ) : null}
        </div>

        {/* Название и описание */}
        <h2 className="text-[16px] text-main-200 font-semibold mt-[8px]">
          {title}
        </h2>
        <p
          className="text-[12px] lg:text-[14px] text-main-200 leading-tight mt-[4px] overflow-hidden text-ellipsis"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </p>

        <div className="flex items-center justify-between mt-[4px]">
          <div className="flex lg:flex-row flex-col items-end gap-[2px] ">
            <div className="flex flex-row gap-[2px] items-center">
              <div className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] ">
                <Image
                  src="/icon/ui/star.png"
                  alt="star"
                  width={16}
                  height={16}
                />
              </div>
              <p className="text-[14px] lg:text-[16px] text-main-200 font-medium">
                {rating}
              </p>
            </div>
            <p className="text-[10px] text-main-100 font-medium">
              ({reviewsCount})
            </p>
          </div>
          <div className="flex-col items-center">
            <div className="flex items-center gap-[5px]">
              <Image
                src="/icon/ui/clock.png"
                alt="clock"
                width={11}
                height={11}
              />
              <p className="lg:text-[14px] font-semibold text-main-100 text-[10px]">
                {deliveryTime} мин
              </p>
            </div>

            <div className="flex items-center gap-1">
              <Image
                src="/icon/ui/DiliveryCar.png"
                alt="star"
                width={17}
                height={12}
              />
              <p className="lg:text-[14px] font-semibold text-main-100 text-[10px]">
                {deliveryCost} ₽
              </p>
            </div>
          </div>
        </div>

        {/* Кнопка */}

        <Link
          href={`/Products/${id}`}
          className="block w-full bg-main-200 text-white rounded-[40px] py-[10px] mt-[12px] text-[15px] font-medium hover:bg-[#222] transition text-center"
        >
          Заказать
        </Link>
      </div>
    </div>
  );
};

export default Products;
