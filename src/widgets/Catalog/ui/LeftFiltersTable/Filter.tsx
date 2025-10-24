import Image from "next/image";

export default function Filter({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center gap-[5px] max-w-[70px]">
      <Image
        src="/test/FilterIcon.png"
        alt="FilterIcon"
        width={70}
        height={70}
      />
      <p className="text-[12px] items-center justify-center text-center font-medium text-black">
        {name}
      </p>
    </div>
  );
}
