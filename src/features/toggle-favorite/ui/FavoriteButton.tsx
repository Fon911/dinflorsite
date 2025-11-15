"use client";

import { ProductData } from "@/shared/data/products";
import { Shop } from "@/shared/data/shop";
import { useFavorites } from "@/shared/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface FavoriteButtonProps {
  id: number;
  type: "product" | "shop";
  data: ProductData | Shop;
  className?: string;
  navigateAfterAdd?: boolean;
  iconWidth?: number;
  iconHeight?: number;
}

export const FavoriteButton = ({
  id,
  type,
  data,
  className = "",

  iconWidth = 24,
  iconHeight = 26,
}: FavoriteButtonProps) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const [isAnimating, setIsAnimating] = useState(false);
  const favorite = isFavorite(id, type);
  const router = useRouter();

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    if (favorite) {
      removeFromFavorites(id, type);
    } else {
      addToFavorites(data, type);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`transition-transform ${
        isAnimating ? "scale-125" : "scale-100"
      } ${className}`}
    >
      <Image
        src={favorite ? "/icon/ui/FIllLIke.png" : "/icon/ui/like.png"}
        alt="Like"
        width={iconWidth}
        height={iconHeight}
        className="transition-opacity duration-300"
      />
    </button>
  );
};
