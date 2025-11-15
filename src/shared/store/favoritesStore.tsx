"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductData } from "../data/products";
import { Shop } from "../data/shop";
import { FavoriteItem } from "../types";

interface FavoritesContextType {
  favoriteItems: FavoriteItem[];
  addToFavorites: (item: ProductData | Shop, type: "product" | "shop") => void;
  removeFromFavorites: (id: number, type: "product" | "shop") => void;
  isFavorite: (id: number, type: "product" | "shop") => boolean;
  getFavoriteProducts: () => ProductData[];
  getFavoriteShops: () => Shop[];
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

const FAVORITES_STORAGE_KEY = "dinflor_favorites";

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteItems, setFavoriteItems] = useState<FavoriteItem[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Загрузка данных из localStorage при монтировании
  useEffect(() => {
    setIsClient(true);
    const storedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (storedFavorites) {
      try {
        setFavoriteItems(JSON.parse(storedFavorites));
      } catch (error) {
        console.error("Error loading favorites from localStorage:", error);
      }
    }
  }, []);

  // Сохранение в localStorage при изменении избранного
  useEffect(() => {
    if (isClient) {
      localStorage.setItem(
        FAVORITES_STORAGE_KEY,
        JSON.stringify(favoriteItems)
      );
    }
  }, [favoriteItems, isClient]);

  const addToFavorites = (
    item: ProductData | Shop,
    type: "product" | "shop"
  ) => {
    setFavoriteItems((prev) => {
      const exists = prev.some((fav) => {
        if (fav.type === type) {
          return fav.data.id === item.id;
        }
        return false;
      });

      if (exists) return prev;

      if (type === "product") {
        return [...prev, { type: "product", data: item as ProductData }];
      } else {
        return [...prev, { type: "shop", data: item as Shop }];
      }
    });
  };

  const removeFromFavorites = (id: number, type: "product" | "shop") => {
    setFavoriteItems((prev) =>
      prev.filter((item) => !(item.type === type && item.data.id === id))
    );
  };

  const isFavorite = (id: number, type: "product" | "shop") => {
    return favoriteItems.some(
      (item) => item.type === type && item.data.id === id
    );
  };

  const getFavoriteProducts = () => {
    return favoriteItems
      .filter((item) => item.type === "product")
      .map((item) => item.data as ProductData);
  };

  const getFavoriteShops = () => {
    return favoriteItems
      .filter((item) => item.type === "shop")
      .map((item) => item.data as Shop);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favoriteItems,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        getFavoriteProducts,
        getFavoriteShops,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }
  return context;
};
