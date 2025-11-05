"use client";

interface BuyNowButtonProps {
  productId: number;
  className?: string;
}

export const BuyNowButton = ({
  productId,
  className = "",
}: BuyNowButtonProps) => {
  const handleBuyNow = () => {
    // TODO: Реализовать логику покупки
    console.log("Купить сейчас продукт с ID:", productId);
  };

  return (
    <button
      onClick={handleBuyNow}
      className={`flex-1 bg-white border-main-100 text-black text-[16px] font-semibold py-[14px] rounded-[50px] ${className}`}
    >
      Купить сейчас
    </button>
  );
};

export default BuyNowButton;
