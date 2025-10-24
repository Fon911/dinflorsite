import Image from "next/image";

export default function Card({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center w-[160px] h-[194px] mr-[54px]">
      <Image
        src="/test/homecardtest.png"
        alt=""
        width={160}
        height={160}
        className="rounded-full"
      />
      <p className="mt-[16px] text-[15px] font-normal mx-auto">{title}</p>
    </div>
  );
}
