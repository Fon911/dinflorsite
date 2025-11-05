"use client";
import { ProductReview } from "@/shared/data/productReviews";
import { getTimeAgo } from "@/shared/utils/timeAgo";
import Image from "next/image";
import { useState } from "react";

interface ReviewsCardProps {
  review: ProductReview;
  onImageClick: (image: string) => void;
}

const ReviewsCard = ({ review, onImageClick }: ReviewsCardProps) => {
  return (
    <div className="flex flex-row gap-[10px] lg:gap-[20px] mb-[20px] lg:mb-[30px]">
      <div>
        <div>
          <div className="flex flex-row justify-between gap-[10px]">
            <div className="flex flex-row justify-center items-start gap-[10px]">
              <div className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-full">
                <Image
                  src={review.userAvatar}
                  alt={review.userName}
                  width={60}
                  height={60}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <p className="text-[20px] font-medium text-black">
                  {review.userName}
                </p>
                <p className="text-[13px] font-light text-black">
                  {getTimeAgo(review.createdAt)}
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-[6px]">
              <Image
                src="/icon/ui/star.png"
                alt="rating"
                width={20}
                height={20}
              />
              <p className="text-[16px] font-medium text-[#403B3B]">
                {review.rating}
              </p>
            </div>
          </div>
          <p className="mt-[6px] lg:mt-[20px] text-[16px] font-normal text-[#403B3B]">
            {review.text}
          </p>
        </div>
      </div>
      {review.images.length > 0 && (
        <div className="flex flex-col lg:flex-row gap-[1px] lg:gap-[10px] items-center">
          {review.images.map(
            (image, index) =>
              image && (
                <button
                  key={index}
                  onClick={() => onImageClick(image)}
                  className="w-[61px] h-[61px] lg:w-[100px] lg:h-[100px] cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={image}
                    alt={`review ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover rounded-[10px]"
                  />
                </button>
              )
          )}
        </div>
      )}
    </div>
  );
};

interface ShopReviewsProps {
  reviews: ProductReview[];
}

export const ShopReviews = ({ reviews }: ShopReviewsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-[42px] mb-[42px]">
      <div className="mb-[33px]">
        <h2 className="text-[20px] text-center lg:text-[20px] font-normal text-main-200 mb-[30px]">
          Отзывы покупателей
        </h2>
      </div>
      <div className="max-w-[790px]">
        {reviews.map((review) => (
          <ReviewsCard
            key={review.id}
            review={review}
            onImageClick={handleImageClick}
          />
        ))}
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
              alt="Фото отзыва"
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

export default ShopReviews;
