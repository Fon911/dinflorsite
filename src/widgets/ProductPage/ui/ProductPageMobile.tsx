"use client";

import { TraitCard } from "@/entities/trait";
import { Reviews } from "@/entities/review";
import {
  ProductPrice,
  ProductRating,
  ProductComposition,
  ProductDescription,
} from "@/entities/product";
import { ShopCardMobile } from "@/entities/shop";
import { AddToCartButton } from "@/features/add-to-cart";
import { BuyNowButton } from "@/features/buy-now";
import { ProductData } from "@/shared/data/products";
import { Trait, traitsData } from "@/shared/data/traits";
import ImageMobile from "./mobile/ImageMobile";

export default function ProductPageMobile({
  product,
}: {
  product: ProductData;
}) {
  // Получаем трейты продукта
  const productTraits = product.traits
    ? traitsData.filter((trait: Trait) => product.traits?.includes(trait.id))
    : [];

  return (
    <div className="relative pb-[90px]">
      <ImageMobile product={product} />
      <div className="px-[15px]">
        <div className="flex flex-col mt-[20px]">
          <ProductPrice cost={product.cost} discount={product.discount} />

          {productTraits.length > 0 && (
            <div className="flex flex-row gap-2 mt-[10px]">
              {productTraits.map((trait: Trait) => (
                <TraitCard key={trait.id} name={trait.name} />
              ))}
            </div>
          )}

          <div className="mt-[22px]">
            <p className="text-[20px] font-bold text-main-200">
              {product.title}
            </p>
          </div>

          <ProductRating
            rating={product.rating}
            reviewsCount={product.reviewsCount}
          />

          <div className="w-full">
            <ShopCardMobile shopId={product.shopId} />
          </div>

          <div className="mt-[20px]">
            <ProductComposition composition={product.composition} />
            <ProductDescription description={product.description} />
            <Reviews productId={product.id} />
          </div>
        </div>
      </div>

      {/* Фиксированные кнопки внизу */}
      <div className="fixed bottom-[34px] left-0 right-0 px-[15px] py-[12px] flex justify-between items-center gap-3 z-50">
        <AddToCartButton productId={product.id} />
        <BuyNowButton productId={product.id} />
      </div>
    </div>
  );
}
