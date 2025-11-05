"use client";

import { ProductData } from "@/shared/data/products";
import { Trait, traitsData } from "@/shared/data/traits";
import Image from "next/image";

const TraitCard = ({ name }: { name: string }) => {
  return (
    <div className="bg-main-200 rounded-[100px] py-[7px] px-[23px] w-fit">
      <p className="text-[11px] font-extrabold text-white">{name}</p>
    </div>
  );
};

const ShopCard = () => {
  return (
    <button>
      <div className="p-[10px] border-[1px] border-main-100 rounded-[24px] flex flex-row  items-center w-fit">
        <div className="w-[50px] h-[50px]">
          <Image
            src="/test/Luna.png"
            alt="shop"
            width={50}
            height={50}
            className="object-cover block w-full h-full rounded-[5px]"
          />
        </div>
        <div className="gap-[10px] ml-[10px]">
          <h2 className="text-[15px] font-bold text-main-200">
            Цветы с Любовью
          </h2>
          <div className="flex flex-row">
            <div className="flex flex-row justify-center items-center">
              <p className="text-[12px] font-normal text-main-200">Магазин</p>
              <p>·</p>

              <div className="flex flex-row  items-center ">
                <Image
                  src="/icon/ui/star.png"
                  alt="мини 1"
                  width={10}
                  height={10}
                  className="object-cover block"
                />
                <p className="text-[12px] font-medium text-main-200">4.9</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-[21px]">
          <Image
            src="/icon/ui/ShopCardArrow.png"
            alt="like"
            width={14}
            height={27}
          />
        </div>
      </div>
    </button>
  );
};

const Info = ({ product }: { product: ProductData }) => {
  // Получаем трейты продукта
  const productTraits = product.traits
    ? traitsData.filter((trait: Trait) => product.traits?.includes(trait.id))
    : [];

  return (
    <div className="flex flex-col gap-2 max-w-[500px]">
      {productTraits.length > 0 && (
        <div className="flex flex-row gap-2">
          {productTraits.map((trait: Trait) => (
            <TraitCard key={trait.id} name={trait.name} />
          ))}
        </div>
      )}

      <div>
        <h1 className="text-[24px] font-medium text-main-200 mb-[25px]">
          {product.title}
        </h1>
      </div>
      <div className="flex flex-row gap-[2px]  items-start mb-[20px]">
        <Image
          src="/icon/ui/star.png"
          alt="мини 1"
          width={16}
          height={16}
          className="object-cover block"
        />
        <p className="text-[14px] font-medium text-main-200">
          {product.rating}
        </p>
        <p className="text-[14px] font-medium text-main-200">/ 5</p>
        <p className="text-[14px] font-medium text-main-200">
          {product.reviewsCount} оценок
        </p>
      </div>
      <div className="mb-[20px]">
        <ShopCard />
      </div>

      {/* Состав */}
      {product.composition && product.composition.length > 0 && (
        <div className="mb-[20px]">
          <h2 className="mb-[10px] text-[20px] font-bold text-main-100">
            Состав
          </h2>
          <div className="flex flex-col gap-1">
            {product.composition.map((item, index) => (
              <p key={index} className="text-[16px] font-normal text-main-200">
                {item.name} - {item.count} шт
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Описание */}
      <div className="mb-[20px]">
        <h2 className="mb-[10px] text-[20px] font-bold text-main-100">
          Описание
        </h2>
        <p className="text-[16px] font-normal text-main-200">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default Info;
