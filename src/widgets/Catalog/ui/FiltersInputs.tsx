import FilterInput from "./onecount/FilterInput";

export const FiltersInputs = () => {
  return (
    <div className="overflow-x-scroll scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0 lg:overflow-visible">
      <div className="flex flex-row gap-[7px] lg:gap-[16px] w-max lg:w-full">
        <FilterInput
          title="Цена"
          className="w-auto lg:w-[13.68%] whitespace-nowrap"
          showArrow={true}
        />
        <FilterInput
          title="Рейтинг"
          className="w-auto lg:w-[16.04%] whitespace-nowrap"
          showArrow={true}
        />
        <FilterInput
          title="Цветы в составе"
          className="w-auto lg:w-[23.21%] whitespace-nowrap"
          showArrow={true}
        />
        <FilterInput
          title="Уже собран"
          className="w-auto lg:w-[11.07%] whitespace-nowrap"
          showArrow={false}
        />
        <FilterInput
          title="Доставка до 90 минут"
          className="w-auto lg:w-[32.65%] whitespace-nowrap"
          showArrow={true}
        />
      </div>
    </div>
  );
};
