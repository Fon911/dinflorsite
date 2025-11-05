interface ProductDescriptionProps {
  description: string;
}

export const ProductDescription = ({
  description,
}: ProductDescriptionProps) => {
  return (
    <div className="mt-[20px]">
      <h2 className="mb-[10px] text-[20px] font-bold text-main-100">
        Описание
      </h2>
      <p className="text-[16px] font-normal text-main-200">{description}</p>
    </div>
  );
};

export default ProductDescription;
