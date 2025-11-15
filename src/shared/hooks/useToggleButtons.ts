import { useState } from "react";

export const useToggleButtons = <T extends string>(options: T[]) => {
  const [active, setActive] = useState<T>(options[0]);

  const handleToggle = (option: T) => {
    setActive(option);
  };

  return { active, handleToggle };
};
