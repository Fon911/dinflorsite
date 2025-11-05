interface ShopDescriptionProps {
  description?: string;
}

export const ShopDescription = ({ description }: ShopDescriptionProps) => {
  return (
    <div className="text-left lg:text-center mx-auto max-w-[600px]">
      <h2 className="mb-[24px] text-[20px] text-center font-normal ">
        Описание
      </h2>
      <p className="text-[16px] lg:text-center">
        {description ||
          "Цветочная студия Luna - это про красоту и нежность в каждом цветке. Эксклюзивные сборные и моно-букеты ,цветочные композиции в коробках и корзинах , широкий ассортимент мягких игрушек."}
      </p>
    </div>
  );
};
