import Image from "next/image";

export const Category = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:mx-[0px] lg:px-[0px] px-[11px] gap-[16px] w-full lg:max-w-[1200px] max-w-[900px]">
      {/* Цветы и подарки */}
      <div className="relative lg:mx-0 mx-1 ">
        <button className="relative w-full max-w-[400px] h-[384px] lg:w-[445px] lg:max-w-none lg:h-[485px]">
          <Image
            src="/images/bgCategory/FlowerAndGifts.png"
            alt="category"
            width={445}
            height={485}
            className="w-full h-full object-cover rounded-[30px]"
          />
        </button>
        <h2 className="absolute top-[25px] left-1/2 -translate-x-1/2 text-[20px] font-extrabold text-white">
          Цветы и подарки
        </h2>
        <div className="absolute top-[69px] left-[25px]">
          <ul className="text-[16px] font-extrabold text-white">
            <li className="pb-[12px] border-b-[1px] border-[#00000026]">
              <a href="">Авторские букеты</a>
            </li>
            <li className="pt-[12px] pb-[12px] border-b-[1px] border-[#00000026]">
              <a href="">Букеты невесты</a>
            </li>
            <li className="pt-[12px] pb-[12px] border-b-[1px] border-[#00000026]">
              <a href="">Свадебные букеты</a>
            </li>
            <li className="pt-[12px] pb-[12px]">
              <a href="">Мягкие игрушки</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Группа из 4 карточек */}
      <div className="grid grid-cols-2 gap-[20px] gap-y-[40px]  lg:flex lg:gap-[23px]">
        {/* Первая колонка на десктопе */}
        <div className="contents lg:flex lg:flex-col lg:gap-[23px]">
          {/* Вкусное */}
          <button className="relative w-full max-w-[194px] h-[170px] lg:w-[230px] lg:max-w-none lg:h-[230px]">
            <Image
              src="/images/bgCategory/Tasty.png"
              alt="category"
              width={230}
              height={230}
              className="w-full h-full object-cover rounded-[30px] "
            />
            <h2 className="absolute top-[11px] left-1/2 -translate-x-1/2 text-[20px] font-extrabold text-white hidden lg:block">
              Вкусное
            </h2>
            <h2 className="mt-[10px] text-[15px] font-bold text-main-200  lg:hidden">
              Вкусное
            </h2>
            <div className="absolute top-[43px] left-[10px] text-start hidden lg:block">
              <ul className="text-[15px] font-extrabold text-white">
                <li className="pb-[10px] border-b-[1px] border-[#00000026]">
                  <a href="">Свадебные торты</a>
                </li>
                <li className="pt-[10px] pb-[10px] border-b-[1px] border-[#00000026]">
                  <a href="">Детские торты</a>
                </li>
                <li className="pt-[10px] pb-[10px] border-b-[1px] border-[#00000026]">
                  <a href="">Капкейки</a>
                </li>
                <li className="pt-[10px] pb-[10px]">
                  <a href="">Торты</a>
                </li>
              </ul>
            </div>
          </button>

          {/* Воздушные шары */}
          <button className="relative w-full max-w-[194px] h-[170px] lg:w-[230px] lg:max-w-none lg:h-[230px]">
            <Image
              src="/images/bgCategory/Ballon.png"
              alt="category"
              width={230}
              height={230}
              className="w-full h-full object-cover rounded-[30px]"
            />
            <h2 className="absolute top-[11px] left-1/2 -translate-x-1/2 text-[20px] font-extrabold text-white hidden lg:block">
              Воздушные шары
            </h2>
            <h2 className="mt-[10px] text-[15px] font-bold text-main-200  lg:hidden">
              Воздушные шары
            </h2>
          </button>
        </div>

        {/* Вторая колонка на десктопе */}
        <div className="contents  lg:flex lg:flex-col lg:gap-[23px]">
          {/* Картины на холстах */}
          <button className="relative w-full max-w-[194px] h-[170px] lg:w-[230px] lg:max-w-none lg:h-[230px]">
            <Image
              src="/images/bgCategory/Art.png"
              alt="category"
              width={230}
              height={230}
              className="w-full h-full object-cover rounded-[30px]"
            />
            <h2 className="absolute top-[14px] left-1/2 -translate-x-1/2 text-[20px] font-extrabold text-white hidden lg:block">
              Картины на холстах
            </h2>
            <h2 className="mt-[10px] text-[15px] font-bold text-main-200  lg:hidden">
              Картины на холстах
            </h2>
          </button>

          {/* Сертификаты */}
          <button className="relative w-full max-w-[194px] h-[170px] lg:w-[230px] lg:max-w-none lg:h-[230px]">
            <Image
              src="/images/bgCategory/Sertificats.png"
              alt="category"
              width={230}
              height={230}
              className="w-full h-full object-cover rounded-[30px]"
            />
            <h2 className="absolute top-[11px] left-1/2 -translate-x-1/2 text-[20px] font-extrabold text-white hidden lg:block">
              Сертификаты
            </h2>
            <h2 className="mt-[10px] text-[15px] font-bold text-main-200  lg:hidden">
              Сертификаты
            </h2>
          </button>
        </div>
      </div>
    </div>
  );
};
