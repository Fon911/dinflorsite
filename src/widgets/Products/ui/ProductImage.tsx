"use client";
import { ProductData } from "@/shared/data/products";
import Image from "next/image";
import { useState } from "react";

interface ProductImageProps {
  product: ProductData;
}

const ProductImage = ({ product }: ProductImageProps) => {
  const [selectedImage, setSelectedImage] = useState(product.image.mainImage);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Получаем размеры из данных продукта
  const width = product.bucketSize?.width || product.width;
  const height = product.bucketSize?.height || product.height;

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleThumbnailClick = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-row gap-5">
      {/* Левая колонка с миниатюрами */}
      <div className="flex flex-col gap-5">
        {product.image.otherImages.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(image)}
            className={`w-[70px] h-[85px] overflow-hidden rounded-[10px] cursor-pointer hover:opacity-80 transition-opacity ${
              selectedImage === image ? "" : ""
            }`}
          >
            <Image
              src={image}
              alt={`миниатюра ${index + 1}`}
              width={70}
              height={85}
              className="object-cover w-full h-full block"
            />
          </button>
        ))}
      </div>

      {/* Большое изображение */}
      <div className="w-[300px] h-[400px]">
        <button
          onClick={handleImageClick}
          className="w-full h-full relative overflow-hidden rounded-[15px] cursor-pointer"
        >
          <Image
            src={selectedImage}
            alt={product.title}
            width={300}
            height={400}
            className="object-cover w-full h-full block"
          />

          {/* Отображаем размеры только если они есть */}
          {width && height && (
            <div className="absolute bottom-[20px] right-[10px] grid grid-cols-[auto,auto] gap-x-[8px] gap-y-[6px] px-[11px] py-[6px] bg-main-100 rounded-[10px] items-center">
              {/* Ширина */}
              <Image
                src="/icon/ui/width.png"
                alt="ширина"
                width={16}
                height={8}
                className="object-contain justify-self-center"
              />
              <span className="text-[13px] font-normal text-white whitespace-nowrap">
                {width} см
              </span>

              {/* Высота */}
              <Image
                src="/icon/ui/height.png"
                alt="высота"
                width={8}
                height={14}
                className="object-contain justify-self-center"
              />
              <span className="text-[13px] font-normal text-white whitespace-nowrap">
                {height} см
              </span>
            </div>
          )}
        </button>
      </div>

      {/* Модальное окно для полноэкранного просмотра */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10"
          >
            ×
          </button>
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt={product.title}
              width={1200}
              height={1200}
              className="object-contain max-w-full max-h-[90vh]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductImage;
