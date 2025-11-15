"use client";
import { CartInfo } from "@/entities/cart/ui";
import { ProductCardFav } from "@/entities/product/ui/ProductCardFav";
import { useCart } from "@/shared/store";
import { Layout } from "@/shared/ui";

export const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalItems } =
    useCart();

  if (cartItems.length === 0) {
    return (
      <Layout>
        <h1 className="mb-[23px] text-[20px] font-normal">Корзина</h1>
        <p className="text-[15px] text-main-200 font-light">Корзина пуста</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1 className="mb-[23px] text-[20px] font-normal">Корзина</h1>
      <p className="text-[15px] text-main-200 font-light">
        {getTotalItems()}{" "}
        {getTotalItems() === 1
          ? "товар"
          : getTotalItems() < 5
          ? "товара"
          : "товаров"}
      </p>

      <div className="mt-[20px] flex flex-col lg:grid lg:grid-cols-[75%_20%] gap-[60px]">
        <div className="flex flex-col gap-[16px]">
          {cartItems.map((item) => (
            <ProductCardFav
              key={item.product.id}
              product={item.product}
              quantity={item.quantity}
              showQuantityControls={true}
              onQuantityChange={(quantity) =>
                updateQuantity(item.product.id, quantity)
              }
              onRemove={() => removeFromCart(item.product.id)}
            />
          ))}
        </div>

        <CartInfo />
      </div>
    </Layout>
  );
};
