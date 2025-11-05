import { Composition } from "@/shared/data/composition";

interface ProductCompositionProps {
  composition?: Composition;
}

export const ProductComposition = ({
  composition,
}: ProductCompositionProps) => {
  if (!composition || composition.length === 0) {
    return null;
  }

  return (
    <div className="mb-[20px]">
      <h2 className="mb-[10px] text-[20px] font-bold text-main-100">Состав</h2>
      <div className="flex flex-col gap-1">
        {composition.map((item, index) => (
          <p key={index} className="text-[16px] font-normal text-main-200">
            {item.name} - {item.count} шт
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProductComposition;
