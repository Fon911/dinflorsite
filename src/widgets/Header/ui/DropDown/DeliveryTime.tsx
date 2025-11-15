"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface DeliveryTimeProps {
  onClose: () => void;
}

const weekDays = [
  { short: "Сегодня", date: "3" },
  { short: "Завтра", date: "4" },
  { short: "Сб", date: "5" },
  { short: "Сб", date: "5" },
  { short: "Вс", date: "7" },
  { short: "Пн", date: "8" },
];

const timeSlots = [
  "10:00 - 10:30",
  "10:30 - 11:00",
  "11:00 - 11:30",
  "11:30 - 12:00",
  "12:00 - 12:30",
  "12:30 - 13:00",
];

export const DeliveryTime = ({ onClose }: DeliveryTimeProps) => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedTime, setSelectedTime] = useState(timeSlots[0]);
  const [checkWithReceiver, setCheckWithReceiver] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Закрытие dropdown времени при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleSave = () => {
    console.log("Сохранено:", {
      day: weekDays[selectedDay].short,
      time: selectedTime,
      checkWithReceiver,
    });
    onClose();
  };

  return (
    <div
      className="w-[641px] text-left   p-[40px] relative z-[9999] flex flex-col bg-white rounded-[24px] shadow-xl"
      onClick={(e) => e.stopPropagation()} // Предотвращаем всплытие клика
    >
      {/* Close Button */}
      <Image
        src="/icon/ui/close.png"
        alt="Close"
        width={24}
        height={24}
        className="absolute top-[24px] right-[24px] cursor-pointer hover:opacity-70 transition"
        onClick={onClose}
      />

      {/* Title */}
      <h2 className="text-[24px] font-bold text-main-200 mb-[10px]">
        Время доставки
      </h2>

      {/* Subtitle */}
      <p className="text-[12px] font-Light text-main-200 mb-[20px]">
        Часовой пояс GMT+3
      </p>

      {/* Checkbox */}
      <div className="flex items-center gap-[8px] mb-[16px]">
        <input
          type="checkbox"
          id="checkReceiver"
          checked={checkWithReceiver}
          onChange={(e) => setCheckWithReceiver(e.target.checked)}
          className="w-[16px] h-[16px] accent-main-100 border border-main-200 rounded-[5px] cursor-pointer"
        />
        <label
          htmlFor="checkReceiver"
          className="text-[15px] font-bold text-main-200 cursor-pointer select-none"
        >
          Уточнить у получателя
        </label>
      </div>

      {/* Days Selection */}
      <div className="flex gap-[8px] mb-[34px]">
        {weekDays.map((day, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedDay(index);
            }}
            className={`flex flex-col items-center justify-center rounded-[24px] w-[80px] h-[80px] transition ${
              selectedDay === index
                ? "bg-main-100 text-white"
                : "bg-white border border-main-200 text-main-200 hover:bg-gray-50"
            }`}
          >
            <span className="text-[16px] font-bold">{day.short}</span>
            <span className="text-[24px] font-bold">{day.date}</span>
          </button>
        ))}
      </div>

      {/* Time Dropdown */}
      <div className="relative mb-[24px]" ref={dropdownRef}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsDropdownOpen(!isDropdownOpen);
          }}
          className={`w-full flex items-center justify-between border border-main-200 rounded-[10px] px-[16px] py-[12px] text-[15px] font-normal text-main-200 bg-white hover:bg-gray-50 transition
      ${isDropdownOpen ? "rounded-b-none border-b-0" : ""}`}
        >
          <span>{selectedTime} утра</span>
          <Image
            src="/icon/ui/DropDownArrowBlack.svg"
            alt="Arrow"
            width={16}
            height={8}
            className={`${
              isDropdownOpen ? "rotate-180" : ""
            } transition-transform`}
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-[100%] left-0 w-full bg-white border border-main-200 border-t-0 rounded-b-[10px] shadow-lg z-[99999] max-h-[200px] overflow-y-auto">
            {timeSlots.map((time, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedTime(time);
                  setIsDropdownOpen(false);
                }}
                className="w-full text-left px-[16px] py-[12px] text-[15px] font-normal text-main-200 hover:bg-gray-50 transition"
              >
                {time}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Confirm Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleSave();
        }}
        className="w-[252px] h-[50px] bg-main-100 text-white rounded-[50px] text-[15px] font-bold hover:bg-[#e63d73] transition"
      >
        Сохранить
      </button>
    </div>
  );
};
