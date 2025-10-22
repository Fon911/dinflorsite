"use client";

interface HeaderBurgerProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export default function HeaderBurger({
  isOpen,
  onClick,
  className,
}: HeaderBurgerProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col justify-center items-center w-8 h-8 ${className || ""}`}
      aria-label="Toggle menu"
    >
      <span
        className={`block w-6 h-0.5 bg-main-200 transition-all duration-300 ${
          isOpen ? "rotate-45 translate-y-1.5" : ""
        }`}
      />
      <span
        className={`block w-6 h-0.5 bg-main-200 mt-1 transition-all duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block w-6 h-0.5 bg-main-200 mt-1 transition-all duration-300 ${
          isOpen ? "-rotate-45 -translate-y-1.5" : ""
        }`}
      />
    </button>
  );
}
