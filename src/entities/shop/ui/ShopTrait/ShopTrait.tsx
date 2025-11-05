"use client ";
import Image from "next/image";

export const ShopTrait = ({
  title,
  subtitle,
  color,
  icon,
}: {
  title: string;
  subtitle: string;
  color: string;
  icon: string;
}) => {
  return (
    <div className="flex flex-row items-center gap-[10px] px-[10px] lg:px-[24px]   h-[53px] lg:h-[70px] bg-[#EFEFEF] rounded-[10px]  lg:rounded-[50px]">
      <Image src={icon} alt="" width={18} height={18} />
      <div className="flex flex-col">
        <p
          className="font-bold text-[16px] whitespace-nowrap"
          style={{ color }}
        >
          {title}
        </p>
        <p className="font-light text-[14px] font-main-200 whitespace-nowrap">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
export default ShopTrait;
