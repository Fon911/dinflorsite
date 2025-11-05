"use client";

import { filtersData } from "@/shared/data";
import { CardCategory } from "./CardCategory";
import { InputCity } from "./InputCity";
import { Category } from "./Category";

export const HomePage = () => {
  return (
    <div className="container-1440 mb-[130px]">
      <div className="mt-[90px] justify-center text-center items-center flex flex-col">
        <h1 className="lg:text-[32px] text-[24px] font-bold lg:font-medium">
          Надежная доставка от 30 минут
        </h1>
        <div className="mt-[30px] lg:mt-[48px] gap-[16px] lg:gap-[30px] flex flex-row">
          <a
            href="/Catalog"
            className="lg:px-[32px] px-[29px] py-[10px] lg:py-[20px] rounded-[50px] bg-main-100 text-white font-normal lg:text-[20px] text-[15px]"
          >
            Каталог
          </a>
          <a
            href=""
            className="lg:px-[32px] px-[29px] py-[10px] lg:py-[20px] rounded-[50px] bg-main-200 text-white font-normal lg:text-[20px] text-[15px]"
          >
            Связаться с нами
          </a>
        </div>
        <InputCity />
      </div>

      <div className="justify-center  items-center flex flex-col">
        <h2 className="text-[24px] font-medium mt-[40px]">Категории</h2>

        <div className="mt-[40px]">
          <Category />
        </div>

        <div className="mt-[40px]">
          {filtersData.map((filter) => (
            <CardCategory key={filter.id} categoryName={filter.category} />
          ))}
        </div>
      </div>
    </div>
  );
};
