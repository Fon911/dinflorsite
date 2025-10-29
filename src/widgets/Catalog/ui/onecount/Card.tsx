import Image from "next/image";

export default function Card({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <div className="flex flex-col items-center w-[190px] h-[116px] lg:w-[160px] lg:h-[194px]">
      <div className="lg:w-[160px] lg:h-[160px] w-[90px] h-[90px]">
        <Image
          src={image}
          alt=""
          width={160}
          height={160}
          className="w-full h-full rounded-full lg:w-[160px] lg:h-[160px]"
        />
      </div>
      <p className="mt-[10px] lg:mt-[16px] lg:text-[15px] text-[13px] font-semibold lg:font-normal mx-auto">
        {title}
      </p>
    </div>
  );
}
