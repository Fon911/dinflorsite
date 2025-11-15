"use client";

import Image from "next/image";
import Link from "next/link";

interface BurgerMenuDesktopProps {
  isOpen: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
}

const menuSections = {
  general: [
    { href: "/Help", icon: "/icon/ui/burger/help.png", label: "Помощь" },
    { href: "/Lang", icon: "/icon/ui/burger/lang.png", label: "Русский" },
    {
      href: "/Currency",
      icon: "/icon/ui/burger/val.png",
      label: "Российский рубль",
    },
  ],
  clients: [
    {
      href: "/Profile",
      icon: "/icon/ui/burger/profile.png",
      label: "Профиль",
      auth: true,
    },
    {
      href: "/Login",
      icon: "/icon/ui/burger/profile.png",
      label: "Войти / Зарегистрироваться",
      auth: false,
    },
    {
      href: "/Favorites",
      icon: "/icon/ui/burger/heart.png",
      label: "Избранное",
      auth: true,
    },
    {
      href: "/Orders",
      icon: "/icon/ui/burger/cart.png",
      label: "Заказы",
      auth: true,
    },
    {
      href: "/Events",
      icon: "/icon/ui/burger/event.png",
      label: "Мои события",
      auth: true,
    },
    {
      href: "/Mail",
      icon: "/icon/ui/burger/bell.png",
      label: "Управление рассылками",
      auth: true,
    },
    {
      href: "/Invite",
      icon: "/icon/ui/burger/money.png",
      label: "За каждого друга +500₽",
      auth: true,
    },
    {
      href: "/Business",
      icon: "/icon/ui/burger/case.png",
      label: "Бизнесу",
      auth: true,
    },
    {
      href: "/Corp",
      icon: "/icon/ui/burger/bag.png",
      label: "Корпоративные предложения",
      auth: false,
    },
  ],
  partners: [
    {
      href: "/Partner",
      icon: "/icon/ui/burger/box.png",
      label: "Разместить свои товары",
      auth: true,
    },
    {
      href: "/Seller/Login",
      icon: "/icon/ui/burger/profile.png",
      label: "Войти как магазин",
      auth: false,
    },
    {
      href: "/Seller",
      icon: "/icon/ui/burger/box.png",
      label: "Разместить свои товары",
      auth: false,
    },
  ],
};

export const BurgerMenuDesktop = ({
  isOpen,
  onClose,
  isLoggedIn,
}: BurgerMenuDesktopProps) => {
  const renderLink = (item: any) => {
    if (item.auth && !isLoggedIn) return null;
    return (
      <Link
        key={item.href}
        href={item.href}
        className="text-[17px] flex items-center gap-2 text-main-200 font-normal hover:text-main-100 transition"
      >
        <Image src={item.icon} alt={item.label} width={22} height={22} />
        <p>{item.label}</p>
      </Link>
    );
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 hidden lg:block"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[425px] bg-white shadow-lg transform transition-transform duration-300 z-50 hidden lg:flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center">
          <button
            onClick={onClose}
            className="bg-[#EDEDED] rounded-[6px] w-10 h-10 flex items-center justify-center hover:opacity-70 transition"
          >
            <Image
              src="/icon/ui/burger/CloseBurger.png"
              alt="Close"
              width={24}
              height={24}
            />
          </button>
        </div>

        <nav className="flex flex-col gap-4 p-[37px] overflow-y-auto">
          {menuSections.general.map(renderLink)}

          <div>
            <h2 className="text-[16px] font-bold text-[#727272] uppercase mb-2">
              Клиентам
            </h2>
            <div className="flex flex-col gap-4">
              {menuSections.clients.map(renderLink)}
            </div>
          </div>

          <div>
            <h2 className="text-[16px] font-bold text-[#727272] uppercase mb-2">
              Партнёрам
            </h2>
            <div className="flex flex-col gap-4">
              {menuSections.partners.map(renderLink)}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
