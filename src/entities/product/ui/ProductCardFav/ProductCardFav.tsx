"use client";

import { Changer } from "@/features/change-count/ui";
import { ProductData } from "@/shared/data/products";
import { DeleteIcon } from "@/shared/ui/icons";
import Image from "next/image";
import Link from "next/link";

interface ProductCardFavProps {
  product: ProductData;
  quantity?: number;
  showQuantityControls?: boolean;
  onQuantityChange?: (quantity: number) => void;
  onRemove: () => void;
}

export const ProductCardFav = ({
  product,
  quantity = 1,
  showQuantityControls = true,
  onQuantityChange,
  onRemove,
}: ProductCardFavProps) => {
  const finalCost = product.discount
    ? product.cost - product.discount
    : product.cost;

  const fmt = (n: number) => new Intl.NumberFormat("ru-RU").format(n);
  const truncateText = (text: string, maxLength: number) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <div className="px-[17px] py-[12px] justify-between flex items-center flex-row rounded-[25px] bg-gradient-to-r from-[#F4F4F4] to-[#ff46813b] relative">
      {/* Основная кликабельная часть */}
      <Link
        href={`/Products/${product.id}`}
        className="flex flex-row gap-[24px] flex-1 cursor-pointer"
      >
        <div className="lg:w-[140px] lg:h-[185px] w-[100px] h-[185px] flex-shrink-0">
          <Image
            src={product.image.mainImage}
            width={100}
            height={125}
            alt={product.title}
            className="rounded-[25px] w-full h-full object-cover"
          />
        </div>

        <div className="pt-[10px] gap-[10px] flex flex-col">
          <p className="lg:text-[30px] text-[20px] text-main-100 font-bold lg:font-medium">
            {fmt(finalCost)} ₽
          </p>
          {product.discount > 0 && (
            <p className="lg:text-[16px] text-[16px] font-bold lg:font-medium line-through text-[#1E1E1E80]">
              {fmt(product.cost)} ₽
            </p>
          )}
          <p className="text-[20px] lg:text-[16px] font-bold lg:font-medium text-main-200">
            {product.title}
          </p>
          <p className="text-[14px] font-normal text-main-200">
            {truncateText(product.description, 40)}
          </p>

          {/* Счётчик под описанием — только на ПК */}
          {showQuantityControls && onQuantityChange && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="hidden lg:block mt-[6px] w-fit"
            >
              <Changer
                productId={product.id}
                initialQuantity={quantity}
                onQuantityChange={onQuantityChange}
                onRemove={onRemove}
              />
            </div>
          )}
        </div>
      </Link>

      {/* Правая часть */}
      <div className="flex flex-col gap-[10px] items-end">
        {/* На ПК — кнопка удаления */}
        <button
          onClick={(e) => {
            e.preventDefault();
            onRemove();
          }}
          className="hidden lg:block cursor-pointer"
        >
          <DeleteIcon />
        </button>

        {/* На мобильных — вместо кнопки удаления Changer */}
        {showQuantityControls && onQuantityChange && (
          <div onClick={(e) => e.stopPropagation()} className="lg:hidden">
            <Changer
              productId={product.id}
              initialQuantity={quantity}
              onQuantityChange={onQuantityChange}
              onRemove={onRemove}
            />
          </div>
        )}
      </div>
    </div>
  );
};
