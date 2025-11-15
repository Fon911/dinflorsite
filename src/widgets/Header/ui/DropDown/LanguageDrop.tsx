export const LanguageDrop = () => {
  return (
    <div className="w-[176px] h-[233px] bg-white text-black rounded-[5px]">
      <ul className="flex flex-col divide-y divide-gray-200">
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Русский</li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">English</li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Қазақша</li>
      </ul>
    </div>
  );
};
