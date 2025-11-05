"use client";

import { ProductData } from "@/shared/data/products";
import Image from "next/image";
import { useState } from "react";

export default function ImageMobile({ product }: { product: ProductData }) {
  // Объединяем mainImage и otherImages в один массив
  const images = [product.image.mainImage, ...product.image.otherImages];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Минимальная дистанция свайпа (в пикселях)
  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }

    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <div className="w-full h-[573px] relative overflow-hidden">
        <div className="absolute top-4 right-4 flex z-10 gap-x-[30px]">
          <button>
            <Image src="/icon/ui/share.png" alt="" width={24} height={29} />
          </button>
          <button className="w-[35px] h-[30px]">
            <Image
              src="/icon/ui/like.png"
              alt=""
              width={33}
              height={30}
              className="object-contain w-full h-full"
            />
          </button>
        </div>

        <div
          className="flex h-full transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full h-full flex-shrink-0 relative">
              <Image
                src={image}
                alt={`Изображение ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="absolute bottom-[9px] left-4 px-[18px] py-[3px] rounded-[10px] bg-[#7CA3AA] z-10">
          <p className="text-black text-[13px] font-normal">
            {currentIndex + 1}/{images.length}
          </p>
        </div>
      </div>
    </div>
  );
}
