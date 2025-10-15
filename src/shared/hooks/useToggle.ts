// shared/hooks/useToggle.ts
"use client";

import { useCallback, useState } from "react";

export const useToggle = (initial: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initial);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  return { isOpen, toggle, setIsOpen };
};
