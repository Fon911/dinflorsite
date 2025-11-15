"use client";

import { AvatarSettings, EditProfileSettings } from "@/entities/profile";
import { ExitAccount } from "@/features/exit-account";
import { RemoveAccount } from "@/features/remove-account";
import { Layout } from "@/shared/ui";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const ProfilePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Закрытие по клику вне меню
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <Layout>
      <div className="absolute top-[25px] right-[25px] lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <Image
            src="/icon/ui/3ProfileDots.png"
            alt="menu"
            width={7}
            height={30}
          />
        </button>

        {/* Выпадающее окно */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="absolute top-[35px] right-[-25px] w-[100vw] bg-white shadow-md px-[30px] py-[12px] pb-[40px] z-50 h-[164px]"
          >
            {/* Здесь ты сам вставишь нужные элементы */}
            <div className="flex flex-col gap-[25px]">
              <h2 className="text-[20px] mb-[-5px] font-semibold text-main-200">
                Управление аккаунтом
              </h2>
              <ExitAccount />
              <RemoveAccount />
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-[40px] relative">
        {/* Иконка три точки (только мобильная) */}

        {/* Левая часть */}
        <div className="flex flex-col flex-1">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
            <div className="hidden lg:block">
              <h1 className="text-[30px] font-semibold text-main-200">
                Мои данные
              </h1>
              <p className="text-[20px] font-normal text-main-200 mt-[12px]">
                Настройки профиля
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row gap-[20px] lg:gap-[45px] lg:mt-[40px]">
            <EditProfileSettings />
            <AvatarSettings />
          </div>
        </div>

        {/* Правая часть — только для десктопа */}
        <div className="hidden lg:flex flex-col gap-[25px] justify-start">
          <ExitAccount />
          <RemoveAccount />
        </div>
      </div>
    </Layout>
  );
};
