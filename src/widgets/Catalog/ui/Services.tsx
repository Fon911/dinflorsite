"use client";

import { productsData, shopsData } from "@/shared/data";
import { useState } from "react";
import { Products, Shop } from "./Cards";
import { LeftTable } from "./LeftTable";

type FilterMode = "products" | "shops";

export const Services = () => {
  const [mode, setMode] = useState<FilterMode>("products");
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [visibleShops, setVisibleShops] = useState(8);

  const handleShowMoreProducts = () => {
    setVisibleProducts((prev) => Math.min(prev + 2, productsData.length));
  };

  const handleShowMoreShops = () => {
    setVisibleShops((prev) => Math.min(prev + 2, shopsData.length));
  };

  return (
    <div className="flex gap-8">
      {/* Левая часть - LeftTable */}
      <div className="w-[300px]">
        <LeftTable onModeChange={setMode} />
      </div>

      {/* Правая часть */}
      <div className="flex-1">
        {/* Блок товаров */}
        <div
          className={`${
            mode === "products"
              ? "grid xl:grid-cols-3 2xl:grid-cols-4 mr-[20px] gap-[10px]"
              : "hidden"
          }`}
        >
          {productsData.slice(0, visibleProducts).map((product) => (
            <Products
              key={product.id}
              discount={product.discount}
              cost={product.cost}
              deliveryCost={product.deliveryCost}
              title={product.title}
              description={product.description}
              rating={product.rating}
              reviewsCount={product.reviewsCount}
            />
          ))}
        </div>

        {/* Кнопка "Показать ещё" для товаров */}
        {mode === "products" && visibleProducts < productsData.length && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleShowMoreProducts}
              className="bg-white text-main-200 px-[32px] py-[16px] rounded-[50px] text-[15px] font-semibold"
            >
              Показать ещё
            </button>
          </div>
        )}

        {/* Блок магазинов */}
        <div
          className={`${
            mode === "shops"
              ? "gap-[3px] xl:grid xl:grid-cols-2 2xl:grid-cols-3 gap-y-[20px]"
              : "hidden"
          }`}
        >
          {shopsData.slice(0, visibleShops).map((shop) => (
            <Shop
              key={shop.id}
              ShopName={shop.ShopName}
              DeliveryTime={shop.DeliveryTime}
              Rating={shop.Rating.toString()}
              ReviewsCount={shop.ReviewsCount}
            />
          ))}
        </div>

        {/* Кнопка "Показать ещё" для магазинов */}
        {mode === "shops" && visibleShops < shopsData.length && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleShowMoreShops}
              className="bg-white text-main-200 px-[32px] py-[16px] rounded-[50px] text-[15px] font-semibold"
            >
              Показать ещё
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
