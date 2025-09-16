import React from "react";

interface PopupElementProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const PopupElement: React.FC<PopupElementProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl transition-transform duration-200 ease-out animate-[fadeIn_0.2s_ease-out]"
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 shadow hover:bg-gray-200 hover:text-gray-800 transition"
        >
          ✕
        </button>
        <div className="mt-2 text-gray-800">{children}</div>
      </div>
    </div>
  );
};
