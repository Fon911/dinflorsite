"use client";

import { useState, useEffect } from "react";
import { LoginNotification } from "./LoginNotification";

interface LoginModalWrapperProps {
  isLoggedIn: boolean;
}

export const LoginModalWrapper = ({ isLoggedIn }: LoginModalWrapperProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Показываем модальное окно только если пользователь не залогинен
    if (!isLoggedIn) {
      setIsOpen(true);
    }
  }, [isLoggedIn]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return <LoginNotification isOpen={isOpen} onClose={handleClose} />;
};
