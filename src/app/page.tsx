"use client";

import { filtersData } from "@/shared/data";
import { CardCategory, InputCity } from "@/widgets/Home";
import { Category } from "@/widgets/Home/ui/Category";

export default function Page() {
  return (
    <div className="mb-[130px]">
      <div className="mt-[90px] justify-center items-center flex flex-col">
        <h1 className="text-[32px] font-medium">
          Надежная доставка от 30 минут
        </h1>
        <div className="mt-[48px] gap-[30px] flex flex-row">
          <a
            href="/Catalog"
            className="px-[32px] py-[20px] rounded-[50px] bg-main-100 text-white font-normal text-[20px]"
          >
            Каталог
          </a>
          <a
            href=""
            className="px-[17px] py-[20px] rounded-[50px] bg-main-200 text-white font-normal text-[20px]"
          >
            Связаться с нами
          </a>
        </div>
        <InputCity />
      </div>

      <div className="justify-center items-center flex flex-col">
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
}
