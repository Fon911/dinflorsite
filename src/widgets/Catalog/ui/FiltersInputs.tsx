import FilterInput from "./onecount/FilterInput";

export const FiltersInputs = () => {
  return (
    <div className="flex flex-row gap-[16px] w-full">
      <FilterInput title="Цена" className="w-[13.68%]" showArrow={true} />
      <FilterInput title="Рейтинг" className="w-[16.04%]" showArrow={true} />
      <FilterInput
        title="Цветы в составе"
        className="w-[23.21%]"
        showArrow={true}
      />
      <FilterInput
        title="Уже собран"
        className="w-[11.07%]"
        showArrow={false}
      />
      <FilterInput
        title="Доставка до 90 минут"
        className="w-[32.65%]"
        showArrow={true}
      />
    </div>
  );
};
