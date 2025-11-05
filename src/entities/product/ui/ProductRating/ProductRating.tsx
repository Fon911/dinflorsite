import Image from "next/image";

interface ProductRatingProps {
  rating: number;
  reviewsCount: number;
}

export const ProductRating = ({
  rating,
  reviewsCount,
}: ProductRatingProps) => {
  return (
    <div className="flex flex-row gap-[2px] mt-[15px] items-start">
      <Image
        src="/icon/ui/star.png"
        alt="звезда"
        width={16}
        height={16}
        className="object-cover block"
      />
      <p className="text-[14px] font-medium text-main-200">{rating}</p>
      <p className="text-[14px] font-medium text-main-200">/ 5</p>
      <p className="text-[14px] font-medium text-main-200">
        ({reviewsCount} оценок)
      </p>
    </div>
  );
};

export default ProductRating;
