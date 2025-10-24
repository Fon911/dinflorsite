import Image from "next/image";

export const Category = () => {
  return (
    <div className=" flex flex-row gap-[16px]">
      <div className="relative">
        <button>
          <Image
            src="/images/bgCategory/FlowerAndGifts.png"
            alt="category"
            width={445}
            height={485}
          />
        </button>
        <h2 className="absolute top-[25px] left-[134px] text-[20px] font-extrabold text-white">
          Цветы и подарки
        </h2>
        <div className="absolute top-[69px] left-[25px]">
          <ul className=" text-[16px] font-extrabold text-white">
            <li className="pb-[12px] border-b-[1px] border-[#00000026]">
              <a href="">Авторские букеты</a>
            </li>{" "}
            <li className="pt-[12px] pb-[12px] border-b-[1px] border-[#00000026]">
              <a href="">Букеты невесты</a>
            </li>{" "}
            <li className="pt-[12px] pb-[12px] border-b-[1px] border-[#00000026]">
              <a href="">Свадебные букеты</a>
            </li>{" "}
            <li className="pt-[12px] pb-[12px]">
              <a href="">Мягкие игрушки</a>
            </li>
          </ul>
        </div>
      </div>{" "}
      <div className="gap-[23px] flex flex-col">
        <button className="relative">
          {" "}
          <Image
            src="/images/bgCategory/Tasty.png"
            alt="category"
            width={230}
            height={230}
          />
          <h2 className="absolute top-[11px] left-[72px] text-[20px] font-extrabold text-white">
            Вкусное
          </h2>
          <div className="absolute top-[43px] left-[10px] text-start">
            <ul className=" text-[15px] font-extrabold text-white">
              <li className="pb-[10px] border-b-[1px] border-[#00000026]">
                <a href="">Свадебные торты</a>
              </li>{" "}
              <li className="pt-[10px] pb-[10px] border-b-[1px] border-[#00000026]">
                <a href="">Детские торты</a>
              </li>{" "}
              <li className="pt-[10px] pb-[10px] border-b-[1px] border-[#00000026]">
                <a href="">Капкейки</a>
              </li>{" "}
              <li className="pt-[10px] pb-[10px]">
                <a href="">Торты</a>
              </li>
            </ul>
          </div>
        </button>
        <button className="relative">
          <Image
            src="/images/bgCategory/Ballon.png"
            alt="category"
            width={230}
            height={230}
          />
          <h2 className="absolute top-[11px] left-[23px] text-[20px] font-extrabold text-white">
            Воздушные шары
          </h2>
        </button>
      </div>{" "}
      <div className="gap-[23px] flex flex-col">
        <button className="relative">
          {" "}
          <Image
            src="/images/bgCategory/Art.png"
            alt="category"
            width={230}
            height={230}
          />
          <h2 className="absolute top-[14px] left-[12px] text-[20px] font-extrabold text-white">
            Картины на холстах
          </h2>
        </button>
        <button className="relative">
          {" "}
          <Image
            src="/images/bgCategory/Sertificats.png"
            alt="category"
            width={230}
            height={230}
          />
          <h2 className="absolute top-[11px] left-[43px] text-[20px] font-extrabold text-white">
            Сертификаты
          </h2>
        </button>
      </div>
    </div>
  );
};
