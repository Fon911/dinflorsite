"use client";

import { ProductData } from "@/shared/data/products";
import { useCart } from "@/shared/store";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ShopData {
  id: number;
  ShopImage: string;
  ShopName: string;
  DeliveryTime: string;
  Rating: number;
  ReviewsCount: number;
}

interface ButtonProps {
  product: ProductData;
  shopsData: ShopData[];
}

export default function Button({ product, shopsData }: ButtonProps) {
  const { addToCart } = useCart();
  const router = useRouter();
  const fmt = (n: number) => new Intl.NumberFormat("ru-RU").format(n);
  const finalCost = product.discount
    ? product.cost - product.discount
    : product.cost;
  const deliveryCost = product.deliveryCost;
  const shop = shopsData.find((shop) => shop.id === product.shopId);
  return (
    <div className="flex flex-col justify-start items-start">
      <div className="flex items-center gap-1">
        {product.discount ? (
          <p className="text-[12px] lg:text-[16px] font-medium line-through text-[#1E1E1E80]">
            {fmt(product.cost)} ₽
          </p>
        ) : null}
        <p className="text-[20px] lg:text-[24px] font-bold text-main-100">
          {fmt(finalCost)} ₽
        </p>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div className="flex items-center gap-1">
          <Image
            src="/icon/ui/DiliveryCar.png"
            alt="dilivery car"
            width={17}
            height={12}
          />
          <p className="lg:text-[11px] font-semibold text-main-100 text-[10px]">
            {deliveryCost} ₽
          </p>
        </div>

        {shop && (
          <div>
            <p className="text-[12px] lg:text-[14px] font-normal text-main-200 ">
              Доставим в течении {shop.DeliveryTime}
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center gap-2 mt-[14px]">
        <button
          onClick={() => {
            addToCart(product);
            setTimeout(() => {
              router.push("/Cart");
            }, 100);
          }}
          className="bg-main-100 text-white py-4 px-[50px] font-semibold text-[16px] rounded-[100px]  transition"
        >
          Добавить в корзину
        </button>
        <button
          onClick={() => {
            addToCart(product);
            setTimeout(() => {
              router.push("/Cart");
            }, 100);
          }}
          className="border-main-100 text-main-100 border-[1px] py-4 px-[70px] font-semibold text-[16px] rounded-[100px]  transition"
        >
          Купить сейчас
        </button>
      </div>
    </div>
  );
}
