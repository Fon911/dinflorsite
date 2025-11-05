"use client";

import { ProductCard } from "@/entities/product";
import { ShopDescription, ShopInfo, ShopReviews } from "@/entities/shop";
import { productReviewsData, productsData, shopsData } from "@/shared/data";
import { FiltersInputs } from "@/widgets/Catalog";

import Layout from "@/shared/ui/Layout";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
export const ShopPage = () => {
  const { id } = useParams();

  // Получаем магазин по id
  const shop = shopsData.find((p) => p.id === Number(id));

  // Получаем товары магазина по shopId
  const shopProducts = shop
    ? productsData.filter((product) => product.shopId === shop.id)
    : [];

  // Получаем ID всех товаров магазина
  const shopProductIds = shopProducts.map((p) => p.id);

  // Получаем отзывы о товарах этого магазина
  const shopProductReviews = productReviewsData.filter((review) =>
    shopProductIds.includes(review.productId)
  );

  // Состояния для "Показать еще"
  const [visibleProductsCount, setVisibleProductsCount] = useState(8);
  const [visibleReviewsCount, setVisibleReviewsCount] = useState(2);

  const visibleProducts = shopProducts.slice(0, visibleProductsCount);
  const visibleReviews = shopProductReviews.slice(0, visibleReviewsCount);

  const hasMoreProducts = shopProducts.length > visibleProductsCount;
  const hasMoreReviews = shopProductReviews.length > visibleReviewsCount;

  const handleAddToFavorites = () => {
    // TODO: Добавить логику добавления в избранное
    console.log("Add to favorites", id);
  };

  const handleShare = () => {
    // TODO: Добавить логику поделиться
    navigator.clipboard.writeText(window.location.href);
  };

  const rightIcons = (
    <>
      <button
        onClick={handleAddToFavorites}
        className="w-[30px] h-[30px] flex items-center justify-center hover:opacity-70 transition-opacity"
      >
        <Image src="/icon/ui/like.png" alt="Избранное" width={30} height={30} />
      </button>
      <button
        onClick={handleShare}
        className="w-[30px] h-[30px] flex items-center justify-center hover:opacity-70 transition-opacity"
      >
        <Image
          src="/icon/ui/share.png"
          alt="Поделиться"
          width={24}
          height={30}
        />
      </button>
    </>
  );

  if (!shop) {
    return (
      <Layout rightIcons={rightIcons}>
        <div>Магазин не найден</div>
      </Layout>
    );
  }

  return (
    <div>
      <div>
        <Layout rightIcons={rightIcons}>
          {/* Информация о магазине */}
          <ShopInfo shop={shop} />

          {/* Описание магазина */}
          <div className="flex flex-col mt-[50px] items-center justify-center text-center mx-auto">
            <ShopDescription description={shop.description} />
          </div>

          {/* Все товары */}
          <div className="mt-[60px]">
            <h2 className="text-[20px] text-center font-normal mb-[50px]">
              Все товары
            </h2>

            {/* Фильтры */}
            <div className="mb-[30px]">
              <FiltersInputs />
            </div>

            {/* Список товаров */}
            <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
              {visibleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
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

            {/* Кнопка "Показать еще" для товаров */}
            {hasMoreProducts && (
              <div className="flex justify-center mt-[30px] mb-[60px]">
                <button
                  onClick={() => setVisibleProductsCount((prev) => prev + 8)}
                  className="px-[40px] py-[12px] bg-main-200 text-white rounded-[25px] text-[16px] font-medium hover:opacity-80 transition-opacity"
                >
                  Показать еще
                </button>
              </div>
            )}
          </div>

          {/* Отзывы о товарах */}
          {shopProductReviews.length > 0 && (
            <div id="reviews">
              <ShopReviews reviews={visibleReviews} />

              {/* Кнопка "Показать еще" для отзывов */}
              {hasMoreReviews && (
                <div className="flex justify-center mt-[20px]">
                  <button
                    onClick={() => setVisibleReviewsCount((prev) => prev + 2)}
                    className="px-[40px] py-[12px] bg-main-200 text-white rounded-[25px] text-[16px] font-medium hover:opacity-80 transition-opacity"
                  >
                    Показать еще
                  </button>
                </div>
              )}
            </div>
          )}
        </Layout>
      </div>
    </div>
  );
};
