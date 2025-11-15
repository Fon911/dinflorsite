"use client";

import { useCart } from "@/shared/store";
import { ProductData } from "@/shared/data/products";
import { useRouter } from "next/navigation";

interface AddToCartButtonProps {
  product: ProductData;
  className?: string;
}

export const AddToCartButton = ({
  product,
  className = "",
}: AddToCartButtonProps) => {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(product);
    setTimeout(() => {
      router.push("/Cart");
    }, 100);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`flex-1 bg-main-100 border-main-100 text-white text-[16px] font-semibold py-[14px] rounded-[50px] hover:bg-[#222] transition ${className}`}
    >
      В корзину
    </button>
  );
};

export default AddToCartButton;
