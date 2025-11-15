"use client";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
}

export const DeleteModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Удалить товар?",
  message = "Вы действительно хотите удалить этот товар из корзины?",
}: DeleteModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-[24px] p-[32px] max-w-[400px] w-full mx-4 shadow-xl">
        <h2 className="text-[20px] font-semibold text-main-200 mb-[16px]">
          {title}
        </h2>
        <p className="text-[14px] text-main-200 mb-[24px]">{message}</p>

        <div className="flex gap-[12px]">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 text-main-200 rounded-[40px] py-[12px] text-[15px] font-medium hover:bg-gray-300 transition"
          >
            Отмена
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 bg-main-100 text-white rounded-[40px] py-[12px] text-[15px] font-medium hover:bg-[#222] transition"
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};
