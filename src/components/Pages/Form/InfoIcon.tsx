import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

const InfoIcon = ({ text }: { text: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative ml-2 flex items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <FaInfoCircle className="text-[13px] text-[var(--color-charcoal-light)] hover:text-[var(--color-cloud-white)] transition cursor-pointer" />

      {open && (
        <div className="absolute left-6 top-1/2 -translate-y-1/2 w-64 text-xs 
          bg-[var(--color-charcoal)]
          border border-[var(--color-dark-gray)]
          rounded-md
          p-3
          text-[var(--color-charcoal-light)]
          shadow-xl
          backdrop-blur-sm
        ">
          {text}
        </div>
      )}
    </div>
  );
};

export default InfoIcon;