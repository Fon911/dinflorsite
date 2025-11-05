"use client";

import { TraitCard } from "@/entities/trait";
import { ShopCardCompact } from "@/entities/shop/ui/ShopCardCompact";
import { ProductData } from "@/shared/data/products";
import { shopsData } from "@/shared/data/shop";
import { Trait, traitsData } from "@/shared/data/traits";
import Image from "next/image";

const Info = ({ product }: { product: ProductData }) => {
  // Получаем трейты продукта
  const productTraits = product.traits
    ? traitsData.filter((trait: Trait) => product.traits?.includes(trait.id))
    : [];

  // Получаем данные магазина
  const shop = shopsData.find((s) => s.id === product.shopId);

  return (
    <div className="flex flex-col gap-2 max-w-[500px]">
      {productTraits.length > 0 && (
        <div className="flex flex-row gap-2">
          {productTraits.map((trait: Trait) => (
            <TraitCard key={trait.id} name={trait.name} />
          ))}
        </div>
      )}

      <div>
        <h1 className="text-[24px] font-medium text-main-200 mb-[25px]">
          {product.title}
        </h1>
      </div>
      <div className="flex flex-row gap-[2px] items-start mb-[20px]">
        <Image
          src="/icon/ui/star.png"
          alt="rating"
          width={16}
          height={16}
          className="object-cover block"
        />
        <p className="text-[14px] font-medium text-main-200">
          {product.rating}
        </p>
        <p className="text-[14px] font-medium text-main-200">/ 5</p>
        <p className="text-[14px] font-medium text-main-200">
          {product.reviewsCount} оценок
        </p>
      </div>

      {/* Карточка магазина */}
      {shop && (
        <div className="mb-[20px]">
          <ShopCardCompact
            shopId={shop.id}
            shopName={shop.ShopName}
            rating={shop.Rating}
          />
        </div>
      )}

      {/* Состав */}
      {product.composition && product.composition.length > 0 && (
        <div className="mb-[20px]">
          <h2 className="mb-[10px] text-[20px] font-bold text-main-100">
            Состав
          </h2>
          <div className="flex flex-col gap-1">
            {product.composition.map((item, index) => (
              <p key={index} className="text-[16px] font-normal text-main-200">
                {item.name} - {item.count} шт
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Описание */}
      <div className="mb-[20px]">
        <h2 className="mb-[10px] text-[20px] font-bold text-main-100">
          Описание
        </h2>
        <p className="text-[16px] font-normal text-main-200">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default Info;
