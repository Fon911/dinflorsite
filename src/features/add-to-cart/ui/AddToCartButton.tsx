"use client";

interface AddToCartButtonProps {
  productId: number;
  className?: string;
}

export const AddToCartButton = ({
  productId,
  className = "",
}: AddToCartButtonProps) => {
  const handleAddToCart = () => {
    // TODO: Реализовать логику добавления в корзину
    console.log("Добавлен в корзину продукт с ID:", productId);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`flex-1 bg-main-100 border-main-100 text-white text-[16px] font-semibold py-[14px] rounded-[50px] ${className}`}
    >
      В корзину
    </button>
  );
};

export default AddToCartButton;
