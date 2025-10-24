import Image from "next/image";

export const Products = ({
  discount,
  cost,
  deliveryCost,
  title,
  description,
  rating,
  reviewsCount,
}: {
  discount: number;
  cost: number;
  deliveryCost: number;
  title: string;
  description: string;
  rating: number;
  reviewsCount: number;
}) => {
  return (
    <div className="bg-white rounded-[24px] flex flex-col max-w-[291px] text-main-200">
      <div className="max-w-[291px] h-[291px] relative">
        <Image
          src="/test/Luna.png"
          alt="FilterIcon"
          fill
          className="object-cover rounded-t-[24px]"
        />
        <button className="absolute top-[16px] right-[16px]">
          <Image
            src="/icon/ui/like.png"
            alt="Like icon"
            width={24}
            height={26}
            className="object-cover"
          />
        </button>
      </div>
      <div className="px-[20px] ">
        <div className="mb-[45px] mt-[18px] ">
          <h2 className="text-[16px] font-semibold">{title}</h2>
          <p className="pt-[8px] text-[15px] font-normal">{description}</p>
          <div className="flex justify-between items-center group relative mt-[16px]">
            <div className="group-hover:opacity-0 duration-500  flex flex-row justify-center items-center">
              <p className="text-[20px] font-medium text-main-100">1 500₽</p>
              {discount ? (
                <p className="text-[12px] ml-[5px] font-medium text-main-200 line-through justify-center items-center text-center">
                  {cost} ₽
                </p>
              ) : (
                <div className="flex flex-row ml-[15px] justify-center items-center">
                  <div className="w-[22px] h-[16px]">
                    <Image
                      src="/icon/ui/DiliveryCar.png"
                      alt="DiliveryCar icon"
                      width={22}
                      height={16}
                    />
                  </div>
                  <p className="text-[11px] font-semibold ml-[5px] text-main-100">
                    {deliveryCost} ₽
                  </p>
                </div>
              )}
            </div>

            <button className="absolute font-medium top-[-9px] right-[125px] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-white texr-[15px]  px-[32px] py-[10px] bg-main-200 rounded-[40px]">
              Заказать
            </button>

            <div className="flex flex-row">
              <div className="w-[20px] h-[20px] mr-[3px]">
                <Image
                  src="/icon/ui/star.png"
                  alt="Like icon"
                  width={20}
                  height={20}
                />
              </div>
              <p className="mr-[3px] text-[15px] font-medium text-main-200">
                {rating}
              </p>
              <p className="text-[15px] font-medium text-main-100">
                ({reviewsCount})
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center mt-[-22px] mb-[22px] min-h-[16px]">
          {discount ? (
            <div className="flex flex-row items-center">
              <div className="w-[22px] h-[16px]">
                <Image
                  src="/icon/ui/DiliveryCar.png"
                  alt="DiliveryCar icon"
                  width={22}
                  height={16}
                />
              </div>
              <p className="text-[11px] font-semibold ml-[5px] text-main-100">
                {deliveryCost} ₽
              </p>
            </div>
          ) : (
            // Пустой блок-заглушка для сохранения высоты
            <div className="h-[16px]" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
