import Image from "next/image";

interface FilterProps {
  name: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function Filter({ name, isActive, onClick }: FilterProps) {
  return (
    <div
      className={`flex flex-col items-center gap-[5px] max-w-[70px] cursor-pointer transition-all ${
        isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
      }`}
      onClick={onClick}
    >
      <div className={`${isActive ? " rounded-[20px]" : ""}`}>
        <Image
          src="/test/FilterIcon.png"
          alt="FilterIcon"
          width={70}
          height={70}
          className="rounded-[20px]"
        />
      </div>
      <p
        className={`text-[12px] items-center justify-center text-center font-medium ${
          isActive ? "text-main-200" : "text-black"
        }`}
      >
        {name}
      </p>
    </div>
  );
}
