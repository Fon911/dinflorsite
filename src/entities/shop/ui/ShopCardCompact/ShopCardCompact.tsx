"use client";

import Image from "next/image";
import Link from "next/link";

interface ShopCardCompactProps {
  shopId: number;
  shopName: string;
  rating: number;
}

export const ShopCardCompact = ({
  shopId,
  shopName,
  rating,
}: ShopCardCompactProps) => {
  return (
    <Link href={`/Shop/${shopId}`} className="block w-fit">
      <div className="p-[10px] border-[1px] border-main-100 rounded-[24px] flex flex-row items-center w-fit hover:opacity-80 transition-opacity">
        <div className="w-[50px] h-[50px]">
          <Image
            src="/test/Luna.png"
            alt="shop"
            width={50}
            height={50}
            className="object-cover block w-full h-full rounded-[5px]"
          />
        </div>
        <div className="gap-[10px] ml-[10px]">
          <h2 className="text-[15px] font-bold text-main-200">{shopName}</h2>
          <div className="flex flex-row">
            <div className="flex flex-row justify-center items-center gap-[5px]">
              <p className="text-[12px] font-normal text-main-200">Магазин</p>
              <p>·</p>

              <div className="flex flex-row items-center">
                <Image
                  src="/icon/ui/star.png"
                  alt="rating"
                  width={10}
                  height={10}
                  className="object-cover block"
                />
                <p className="text-[12px] font-medium text-main-200">
                  {rating}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-[21px]">
          <Image
            src="/icon/ui/ShopCardArrow.png"
            alt="arrow"
            width={14}
            height={27}
          />
        </div>
      </div>
    </Link>
  );
};
