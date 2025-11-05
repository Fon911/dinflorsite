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

export default function Check({
  title,
  fontSize,
}: {
  title: string;
  fontSize: string;
}) {
  return (
    <div className=" items-center justify-center lg:justify-normal  lg:ml-[0px]">
      <div className="flex items-center gap-[7px]">
        <CheckboxExample />
        <p className={`text-[${fontSize}] font-medium text-main-200`}>
          {title}
        </p>
      </div>
    </div>
  );
}
