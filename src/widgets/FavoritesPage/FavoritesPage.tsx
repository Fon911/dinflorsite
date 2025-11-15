"use client";
import { ProductCardFav } from "@/entities/product/ui/ProductCardFav";
import { ShopCardFav } from "@/entities/shop/ui/ShopCardFav";
import { useToggleButtons } from "@/shared/hooks/useToggleButtons";
import { useFavorites } from "@/shared/store";
import { Layout } from "@/shared/ui";

export const FavoritesPage = () => {
  const { active, handleToggle } = useToggleButtons([
    "Товары",
    "Магазины",
  ] as const);
  const { getFavoriteProducts, getFavoriteShops, removeFromFavorites } =
    useFavorites();

  const favoriteProducts = getFavoriteProducts();
  const favoriteShops = getFavoriteShops();

  return (
    <Layout>
      <h1 className="mb-[23px] text-[20px] font-normal">Избранное</h1>

      <div className="flex flex-row gap-[10px]">
        {(["Товары", "Магазины"] as const).map((item) => (
          <button
            key={item}
            onClick={() => handleToggle(item)}
            className={`text-[14px] font-semibold rounded-[30px] w-[190px] h-[40px] transition-all  ${
              active === item
                ? "text-white bg-main-100"
                : "text-main-200 border-[1px] border-main-200"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-[20px] flex flex-col gap-[16px]">
        {active === "Товары" ? (
          favoriteProducts.length > 0 ? (
            favoriteProducts.map((product) => (
              <ProductCardFav
                key={product.id}
                product={product}
                showQuantityControls={false}
                onRemove={() => removeFromFavorites(product.id, "product")}
              />
            ))
          ) : (
            <p className="text-[15px] text-main-200 font-light">
              В избранном пока нет товаров
            </p>
          )
        ) : favoriteShops.length > 0 ? (
          favoriteShops.map((shop) => (
            <ShopCardFav
              key={shop.id}
              shop={shop}
              onRemove={() => removeFromFavorites(shop.id, "shop")}
            />
          ))
        ) : (
          <p className="text-[15px] text-main-200 font-light">
            В избранном пока нет магазинов
          </p>
        )}
      </div>
    </Layout>
  );
};
