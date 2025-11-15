"use client";

import { Input } from "@/shared/ui";
import { Select } from "@/shared/ui/Select";
import { useState } from "react";

export const EditProfileSettings = () => {
  const [gender, setGender] = useState("");

  return (
    <div className="flex flex-col mt-[16px] gap-[12px]">
      <Input placeholder="Телефон" />
      <Input placeholder="Имя" />
      <Input placeholder="Email" />

      <div className="flex flex-col gap-[2px] mt-[8px]">
        <h2 className="text-[16px] font-normal text-main-200">
          Подарок на День рождения
        </h2>
        <p className="text-[10px] font-light text-main-200">
          Укажите дату и мы пришлем вам промокод в ваш день рождения
        </p>
      </div>

      <Input placeholder="Дата рождения" />

      {/* ✅ Пол */}
      <Select label="Пол" value={gender} onChange={setGender}>
        <div className="flex flex-col">
          {["Мужской", "Женский"].map((option) => (
            <button
              key={option}
              className={`text-left px-[12px]  py-[8px] text-[16px] text-main-200 ${
                gender === option
                  ? "font-semibold"
                  : "hover:bg-[#fff1f5] rounded-[10px]"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setGender(option); // ✅ можно выбрать тот же вариант
                document.dispatchEvent(new CustomEvent("close-select")); // ✅ закрываем дропдаун
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </Select>
      <button className="w-full lg:w-[348px] h-[41px] bg-main-100 rounded-[40px] text-white font-medium text-[16px]">
        Сохранить
      </button>
    </div>
  );
};
