import React from "react";
import { motion } from "framer-motion";

interface InputFieldProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ id, value, onChange, placeholder }) => {
  return (
    <div>
      <motion.input
        type="text"
        id={id}
        name={id}
        onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
        whileFocus={{
          scale: 1.02,
          boxShadow: "0px 0px 8px #9b6dde",
        }}
        className="mt-2 block w-full rounded-xl border border-purple-300 bg-gray-700 p-3 text-purple-100 placeholder-purple-400 shadow-md transition-all focus:outline-none w-full"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
