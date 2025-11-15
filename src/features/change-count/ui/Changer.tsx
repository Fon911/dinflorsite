"use client";

import { useState } from "react";
import { DeleteModal } from "@/shared/ui/Modal/DeleteModal";

interface ChangerProps {
  productId?: number;
  initialQuantity: number;
  onQuantityChange: (quantity: number) => void;
  onRemove: () => void;
}

export const Changer = ({
  initialQuantity,
  onQuantityChange,
  onRemove,
}: ChangerProps) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDecrease = () => {
    if (quantity === 1) {
      setIsModalOpen(true);
    } else {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const handleConfirmDelete = () => {
    setIsModalOpen(false);
    onRemove();
  };

  return (
    <>
      <div className="inline-flex gap-[12px] px-[11px] py-[1px] bg-main-100 rounded-[30px] text-white text-[16px] font-medium">
        <button onClick={handleDecrease}>-</button>
        <p>{quantity}</p>
        <button onClick={handleIncrease}>+</button>
      </div>

      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};
