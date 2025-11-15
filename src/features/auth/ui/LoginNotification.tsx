"use client";

import Image from "next/image";
import { useState } from "react";

interface LoginNotificationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginNotification = ({
  isOpen,
  onClose,
}: LoginNotificationProps) => {
  // Переменная для включения/выключения показа уведомления
  // Измените на false, чтобы отключить показ уведомления
  const isEnabled = true;

  const [activeTab, setActiveTab] = useState<"client" | "shop">("client");

  // Если уведомление отключено или закрыто, ничего не показываем
  if (!isEnabled || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Затемнение фона */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Модальное окно */}
      <div className="relative px-[83px] pt-[20px] bg-white rounded-[15px] max-w-[656px] pb-[52px] flex flex-col items-center justify-center">
        <Image
          src="/icon/ui/close.png"
          alt="Close"
          width={24}
          height={24}
          className="absolute top-[20px] right-[20px] cursor-pointer hover:opacity-70 transition"
          onClick={onClose}
        />

        <div className="flex flex-col gap-[20px] mt-[20px] justify-center items-center w-full">
          <h2 className="text-[24px] font-bold text-main-200 text-center">
            Войдите или зарегистрируйтесь
          </h2>

          {/* Переключатель */}
          <div className="flex flex-row gap-[70px] justify-center items-center">
            <button
              onClick={() => setActiveTab("client")}
              className={` font-semibold transition ${
                activeTab === "client"
                  ? "text-main-100 underline text-[20px]"
                  : "text-main-200 opacity-60  text-[15px]"
              }`}
            >
              Вход (клиент)
            </button>

            <button
              onClick={() => setActiveTab("shop")}
              className={` font-semibold transition ${
                activeTab === "shop"
                  ? "text-main-100 underline  text-[20px]"
                  : "text-main-200 opacity-60 text-[15px]"
              }`}
            >
              Вход (магазин)
            </button>
          </div>

          <p className="text-[16px] font-light text-main-200 text-center">
            Напишите ваш номер телефона для входа/регистрации — мы пришлем вам
            код
          </p>

          {/* Инпут */}
          <div className="flex flex-row gap-[10px] items-center rounded-[50px] px-[30px] w-full py-[16px] border-[1px] border-main-100">
            <Image
              src="/icon/ui/russian.png"
              alt="Phone"
              width={18}
              height={13}
            />
            <input
              type="text"
              placeholder="+7 (999) 888-22-22"
              className="text-[16px] font-normal w-full outline-none focus:outline-none focus:ring-0"
            />
          </div>

          <button className="w-full h-[50px] rounded-[50px] bg-main-100 text-[16px] font-bold text-white hover:opacity-80 transition">
            {activeTab === "client"
              ? "Получить СМС с кодом"
              : "Получить код для магазина"}
          </button>
        </div>
      </div>
    </div>
  );
};
