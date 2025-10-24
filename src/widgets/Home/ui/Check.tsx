"use client";

import { useState } from "react";

export const CheckboxExample = () => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="flex items-center cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className="w-[18px] h-[18px] border-[1px] border-main-200 rounded cursor-pointer"
      />
    </label>
  );
};

function Check() {
  return (
    <div className="mt-[40px]">
      <div className="flex items-center gap-[7px]">
        <CheckboxExample />
        <p className="text-[20px] font-medium text-main-200">
          Уточнить у получателя
        </p>
      </div>
      <p className="text-[16px] font-Light text-main-200 mt-[10px]">
        Укажите только город, куда хотите отправить подарок, остальное узнаем
        сами
      </p>
    </div>
  );
}

export default Check;
