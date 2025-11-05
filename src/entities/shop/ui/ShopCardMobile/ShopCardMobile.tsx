"use client";

import Image from "next/image";
import Link from "next/link";

interface ShopCardMobileProps {
  shopName?: string;
  rating?: number;
  shopImage?: string;
  shopId?: number;
}

export const ShopCardMobile = ({
  shopName = "Цветы с Любовью",
  rating = 4.9,
  shopImage = "/test/Luna.png",
  shopId,
}: ShopCardMobileProps) => {
  return (
    <Link href={`/Shop/${shopId}`} className="w-full block">
      <div className="border-[1px] py-[12px] justify-center items-center border-main-100 rounded-[24px] flex flex-row mt-[15px] w-full">
        <div className="w-[50px] h-[50px]">
          <Image
            src={shopImage}
            alt="shop"
            width={50}
            height={50}
            className="object-cover block w-full h-full rounded-[5px]"
          />
        </div>
        <div className="gap-[10px] ml-[10px]">
          <h2 className="text-[15px] font-bold text-main-200">{shopName}</h2>
          <div className="flex flex-row">
            <div className="flex flex-row justify-center items-center">
              <p className="text-[12px] font-normal text-main-200">Магазин</p>
              <p>·</p>

              <div className="flex flex-row items-center">
                <Image
                  src="/icon/ui/star.png"
                  alt="звезда"
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
            alt="стрелка"
            width={14}
            height={27}
          />
        </div>
      </div>
    </Link>
  );
};

export default ShopCardMobile;
