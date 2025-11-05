import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-row mt-[33px] justify-between px-[32px] pt-[21px] pb-[25px] bg-white border-[1px] border-main-100 rounded-[24px]">
      <div className="flex flex-col gap-[10px]">
        <h2 className="text-[20px] font-semibold ">Защита покупателя</h2>
        <p className="text-[12px] font-normal ">
          Если товар не соответствует составу, то вы можете его вернуть или
          получить денежную компенсацию.
        </p>
        <div className="flex flex-row items-center gap-[1px]">
          <Image
            src="/icon/ui/aboutProducts.png"
            alt="return"
            width={15}
            height={10}
          />
          <p className="text-[10px] font-medium text-[#00000080] ">
            Пожаловаться на товар
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <h2 className="text-[20px] font-semibold ">Правила отмены</h2>
        <p className="text-[12px] font-normal ">
          Вы можете бесплатно отменить заказ до начала доставки, деньги
          полностью вам вернутся.
        </p>
      </div>
    </div>
  );
}
