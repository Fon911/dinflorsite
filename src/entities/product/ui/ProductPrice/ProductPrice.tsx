interface ProductPriceProps {
  cost: number;
  discount?: number;
}

export const ProductPrice = ({ cost, discount }: ProductPriceProps) => {
  const fmt = (n: number) => new Intl.NumberFormat("ru-RU").format(n);
  const finalCost = discount ? cost - discount : cost;

  return (
    <div className="flex items-center gap-1">
      {discount ? (
        <p className="text-[16px] font-medium line-through text-main-200">
          {fmt(cost)} ₽
        </p>
      ) : null}
      <p className="text-[24px] font-bold text-main-100">{fmt(finalCost)} ₽</p>
    </div>
  );
};

export default ProductPrice;
