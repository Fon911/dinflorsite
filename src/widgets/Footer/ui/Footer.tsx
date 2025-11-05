"use client";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#151515] text-white">
      {/* Основной контент футера */}
      <div className="container-1440 px-4 md:px-8  py-8 md:py-12 lg:py-16">
        {/* Мобильная версия - карточка магазинам наверху */}
        <div className="lg:hidden">
          {/* Колонка Магазинам - первая на мобилке */}
          <div className="flex flex-col gap-4 mb-8 bg-[#1F1F1F] p-6 rounded-lg">
            <h3 className="text-white text-[17px] font-semibold">Магазинам</h3>
            <p className="text-white text-[15px] font-normal leading-relaxed">
              Разместите свой магазин бесплатно, находя новых клиентов без
              вложений
            </p>
            <button className="text-white px-[20px] py-[12px] rounded-[25px] bg-main-100 text-[15px] font-semibold hover:bg-opacity-90 transition-all w-fit">
              Добавить
            </button>
          </div>

          {/* Остальные секции */}
          <div className="flex flex-col gap-6">
            {/* Колонка 1 - Ссылки */}
            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="text-white text-[15px] font-normal hover:text-main-100 transition-colors"
              >
                Список продавцов
              </a>
              <a
                href="#"
                className="text-white text-[15px] font-normal hover:text-main-100 transition-colors"
              >
                О нас
              </a>
              <a
                href="#"
                className="text-white text-[15px] font-normal hover:text-main-100 transition-colors"
              >
                Информация о доставке
              </a>
              <a
                href="#"
                className="text-white text-[15px] font-normal hover:text-main-100 transition-colors"
              >
                Политика безопасности
              </a>
              <a
                href="#"
                className="text-white text-[15px] font-normal hover:text-main-100 transition-colors"
              >
                Условия соглашения
              </a>
            </div>

            {/* Колонка 2 - Контакты */}
            <div className="flex flex-col gap-4">
              <a
                href="tel:+74958888888"
                className="text-white text-[15px] font-normal hover:text-main-100 transition-colors"
              >
                +7 (495) 888-88-88
              </a>
              <a
                href="mailto:info@mail.ru"
                className="text-white text-[15px] font-normal hover:text-main-100 transition-colors"
              >
                info@mail.ru
              </a>
              <p className="text-white text-[15px] font-normal">
                г. Калуга, ул. С. Щедрина 15
              </p>
            </div>
          </div>
        </div>

        {/* Десктопная версия */}
        <div className="hidden lg:grid grid-cols-3 gap-[160px]">
          {/* Колонка 1 - Ссылки */}
          <div className="">
            <ul className="text-white text-[15px]  flex flex-col gap-4 font-medium  ">
              <li>
                <a href="#" className="hover:text-main-100 transition-colors">
                  Список продавцов
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-main-100 transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-main-100 transition-colors">
                  Информация о доставке
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-main-100 transition-colors">
                  Политика безопасности
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-main-100 transition-colors">
                  Условия соглашения
                </a>
              </li>
            </ul>
          </div>

          {/* Колонка 2 - Контакты */}
          <ul className="flex flex-col gap-4 text-white text-[15px] font-medium">
            <li>
              <a
                href="tel:+74958888888"
                className=" hover:text-main-100 transition-colors"
              >
                +7 (495) 888-88-88
              </a>
            </li>
            <li>
              <a
                href="mailto:info@mail.ru"
                className=" hover:text-main-100 transition-colors"
              >
                info@mail.ru
              </a>
            </li>
            <li>
              <p className="">г. Калуга, ул. С. Щедрина 15</p>
            </li>
          </ul>

          {/* Колонка 3 - Магазинам */}
          <div className="flex flex-col gap-[18px] bg-[#1F1F1F] rounded-[24px] mt-[-32px] py-[32px] px-[24px]">
            <h3 className="text-white text-[15px] font-semibold">Магазинам</h3>
            <p className="text-white text-[15px] font-normal">
              Разместите свой магазин бесплатно, находя новых клиентов без
              вложений
            </p>
            <button className="text-white px-[24px] py-[13px] rounded-[30px] bg-main-100 text-[15px] font-medium hover:bg-opacity-90 transition-all w-fit">
              Добавить
            </button>
          </div>
        </div>
      </div>

      {/* Нижняя часть футера */}
      <div className="container-1440 px-4 md:px-8 lg:px-[118px] py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-[#696969] text-[15px] font-medium">
            © 2025 DinFlor
          </p>

          {/* Социальные сети */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all"
              aria-label="Telegram"
            >
              {/* Иконка Telegram - добавьте свою */}
              <Image
                src="/icon/social/telegram.png"
                alt="Telegram"
                width={30}
                height={30}
              />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all"
              aria-label="VK"
            >
              {/* Иконка VK - добавьте свою */}
              <Image
                src="/icon/social/vk.png"
                alt="VK"
                width={30}
                height={30}
              />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all"
              aria-label="WhatsApp"
            >
              {/* Иконка WhatsApp - добавьте свою */}
              <Image
                src="/icon/social/whatsapp.png"
                alt="WhatsApp"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
