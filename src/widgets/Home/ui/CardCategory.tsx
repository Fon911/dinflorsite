"use client";
import { ProductCard } from "@/entities/product";
import { productsData } from "@/shared/data";
import Image from "next/image";
import { useState } from "react";

interface CardCategoryProps {
  categoryName: string;
}

export const CardCategory = ({ categoryName }: CardCategoryProps) => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  // фильтруем все товары по категории (все фильтры внутри включены)
  const categoryProducts = productsData.filter(
    (product) => product.category === categoryName
  );

  const handleShowMoreProducts = () => {
    setVisibleProducts((prev) => Math.min(prev + 2, categoryProducts.length));
  };

  return (
    <div className="justify-center items-center flex flex-col mb-[80px]">
      <h2 className="mb-[40px] text-[24px] font-medium">{categoryName}</h2>

      <div className="grid grid-cols-2  px-[20px] gap-[16px] xl:grid-cols-3 lg:gap-[20px]">
        {categoryProducts.slice(0, visibleProducts).map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            discount={product.discount}
            cost={product.cost}
            deliveryCost={product.deliveryCost}
            title={product.title}
            description={product.description}
            rating={product.rating}
            reviewsCount={product.reviewsCount}
            productData={product}
          />
        ))}
      </div>

      {visibleProducts < categoryProducts.length && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleShowMoreProducts}
            className="bg-white text-main-200 px-[32px] py-[16px] rounded-[50px] text-[15px] font-semibold"
          >
            Показать ещё
          </button>
        </div>
      )}

      <div className=" lg:flex-row gap-[40px] lg:flex hidden flex-col max-w-[913px] py-[40px] rounded-[24px] bg-white mt-[40px] px-[18px]">
        <div>
          <h2 className="text-[24px] font-bold">Печать на холстах</h2>
          <p className="text-[15px] font-normal mt-[15px]">
            Печать на холстах в Калуге Создаём романтику вручную — подберём
            красивое изображение или используем ваше фото.
          </p>
          <button className="bg-main-100  text-white px-[21px] mt-[78px] py-[19px] rounded-[15px] text-[15px] font-semibold">
            Узнать подробнее
          </button>
        </div>
        <div className="relative rounded-[10px]">
          <Image
            src="/test/CardHome.png"
            alt=""
            className="mr-[18px] relative"
            width={278}
            height={227}
          />
          <div className="relative rounded-b-[10px]  bg-[#000000A6] bottom-[48px] ">
            <button className="text-white text-[16px] font-semibold">
              Сделай подарок своей половинке
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
