import { ProductData } from "../data/products";
import { Shop } from "../data/shop";

// Тип для элемента корзины (только Products)
export interface CartItem {
  product: ProductData;
  quantity: number;
}

// Тип для элемента избранного
export type FavoriteItem =
  | { type: "product"; data: ProductData }
  | { type: "shop"; data: Shop };
