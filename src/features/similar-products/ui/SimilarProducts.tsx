"use client";
import { ProductCard } from "@/entities/product";
import { ProductData } from "@/shared/data/products";
import { getSimilarProducts } from "@/shared/utils/similarProducts";
import { useCallback, useEffect, useRef, useState } from "react";

interface SimilarProductsProps {
  currentProduct: ProductData;
  allProducts: ProductData[];
}

const INITIAL_LOAD = 10; // Начальная загрузка
const LOAD_MORE = 5; // Подгружать по 5 при прокрутке

export const SimilarProducts = ({
  currentProduct,
  allProducts,
}: SimilarProductsProps) => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Получаем все похожие товары один раз
  const similarProducts = getSimilarProducts(currentProduct, allProducts, 50);

  // Обработчик прокрутки для подгрузки товаров
  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const scrollPercentage = (scrollLeft + clientWidth) / scrollWidth;

    // Если прокрутили на 80%, загружаем еще
    if (scrollPercentage > 0.8 && visibleCount < similarProducts.length) {
      setVisibleCount((prev) =>
        Math.min(prev + LOAD_MORE, similarProducts.length)
      );
    }
  }, [visibleCount, similarProducts.length]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  if (similarProducts.length === 0) {
    return null;
  }

  return (
    <div className="mt-[40px]">
      <h2 className="text-[20px] justify-center text-center  lg:text-[20px] font-normal text-main-200 mb-[33px]">
        Похожие товары
      </h2>

      {/* Контейнер с кнопками и каруселью */}
      <div className="relative group">
        {/* Карусель */}
        <div
          ref={scrollContainerRef}
          className="flex gap-[10px] overflow-x-auto pb-4"
          style={{
            scrollBehavior: "smooth",
          }}
        >
          {similarProducts.slice(0, visibleCount).map((product) => (
            <div key={product.id} className="flex-shrink-0 w-[291px]">
              <ProductCard
                id={product.id}
                discount={product.discount}
                cost={product.cost}
                deliveryCost={product.deliveryCost}
                title={product.title}
                description={product.description}
                rating={product.rating}
                reviewsCount={product.reviewsCount}
              />
            </div>
          ))}
        </div>

        {/* Кнопка вправо */}
      </div>
    </div>
  );
};
