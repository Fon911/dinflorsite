"use client";

import { ProductCard } from "@/entities/product";
import { ShopCard } from "@/entities/shop";
import { productsData, shopsData } from "@/shared/data";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { LeftTable } from "./LeftTable";
import { MobileFilterToggle } from "./MobileFilterToggle";
import { MobileFiltersCarousel } from "./MobileFiltersCarousel";

type FilterMode = "products" | "shops";

export const Services = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<FilterMode>("products");
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [visibleShops, setVisibleShops] = useState(8);
  const [activeFilter, setActiveFilter] = useState<{
    category: string;
    filter: string | null;
  } | null>(null);

  // Инициализация фильтра из URL
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const filterParam = searchParams.get("filter");

    if (categoryParam) {
      setActiveFilter({ category: categoryParam, filter: filterParam });
    }
  }, [searchParams]);

  // Фильтрация товаров на основе выбранного фильтра
  const filteredProducts = useMemo(() => {
    if (!activeFilter || !activeFilter.category) {
      return productsData;
    }

    // Если выбрана только категория
    if (!activeFilter.filter) {
      return productsData.filter(
        (product) => product.category === activeFilter.category
      );
    }

    // Если выбрана категория и фильтр
    return productsData.filter(
      (product) =>
        product.category === activeFilter.category &&
        product.filter === activeFilter.filter
    );
  }, [activeFilter]);

  // Фильтрация магазинов на основе выбранного фильтра
  const filteredShops = useMemo(() => {
    if (!activeFilter || !activeFilter.category) {
      return shopsData;
    }

    // Найти все товары с выбранным фильтром или категорией
    const productsWithFilter = !activeFilter.filter
      ? productsData.filter(
          (product) => product.category === activeFilter.category
        )
      : productsData.filter(
          (product) =>
            product.category === activeFilter.category &&
            product.filter === activeFilter.filter
        );

    // Получить уникальные shopId
    const shopIds = [...new Set(productsWithFilter.map((p) => p.shopId))];

    // Вернуть магазины с этими shopId
    return shopsData.filter((shop) => shopIds.includes(shop.id));
  }, [activeFilter]);

  const handleShowMoreProducts = () => {
    setVisibleProducts((prev) => Math.min(prev + 2, filteredProducts.length));
  };

  const handleShowMoreShops = () => {
    setVisibleShops((prev) => Math.min(prev + 2, filteredShops.length));
  };

  const handleFilterClick = (category: string, filter: string | null) => {
    if (category === "") {
      setActiveFilter(null);
      setVisibleProducts(8);
      setVisibleShops(8);
      // Сброс URL
      router.push("/Catalog", { scroll: false });
    } else {
      setActiveFilter({ category, filter });
      setVisibleProducts(8);
      setVisibleShops(8);

      // Обновить URL
      if (filter) {
        const url = `/Catalog?category=${encodeURIComponent(
          category
        )}&filter=${encodeURIComponent(filter)}`;
        router.push(url, { scroll: false });
      } else {
        // Только категория
        const url = `/Catalog?category=${encodeURIComponent(category)}`;
        router.push(url, { scroll: false });
      }
    }
  };

  const handleCategoryClick = (category: string) => {
    setActiveFilter({ category, filter: null });
    setVisibleProducts(8);
    setVisibleShops(8);
    const url = `/Catalog?category=${encodeURIComponent(category)}`;
    router.push(url, { scroll: false });
  };

  return (
    <div>
      {/* Мобильная версия - переключатель и карусель фильтров */}
      <div className="lg:hidden mb-[24px]">
        <MobileFilterToggle onModeChange={setMode} currentMode={mode} />
        <div className="mt-[16px]">
          <MobileFiltersCarousel
            activeFilter={activeFilter}
            onFilterClick={handleFilterClick}
          />
        </div>
      </div>

      {/* Десктопная версия */}
      <div className="flex gap-8">
        {/* Левая часть - LeftTable */}
        <div className="w-[300px] hidden lg:block">
          <LeftTable
            onModeChange={setMode}
            activeFilter={activeFilter}
            onFilterClick={handleFilterClick}
            onCategoryClick={handleCategoryClick}
            currentMode={mode}
          />
        </div>

        {/* Правая часть */}
        <div className="flex-1">
          {/* Блок товаров */}
          <div
            className={`${
              mode === "products"
                ? "grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[10px] lg:mr-[20px]"
                : "hidden"
            }`}
          >
            {filteredProducts.slice(0, visibleProducts).map((product) => (
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

          {/* Кнопка "Показать ещё" для товаров */}
          {mode === "products" && visibleProducts < filteredProducts.length && (
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
                ? "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-[3px] gap-y-[20px]"
                : "hidden"
            }`}
          >
            {filteredShops.slice(0, visibleShops).map((shop) => (
              <ShopCard
                key={shop.id}
                ShopName={shop.ShopName}
                DeliveryTime={shop.DeliveryTime}
                Rating={shop.Rating}
                ReviewsCount={shop.ReviewsCount}
                shopId={shop.id}
              />
            ))}
          </div>

          {/* Кнопка "Показать ещё" для магазинов */}
          {mode === "shops" && visibleShops < filteredShops.length && (
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
    </div>
  );
};
