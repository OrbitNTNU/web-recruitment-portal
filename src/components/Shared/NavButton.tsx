import { motion } from "framer-motion";

interface ButtonProps {
  onClick: () => void;
  label: string;
  variant: "back" | "next";
}

const Button = ({ onClick, label, variant }: ButtonProps) => {
  const buttonStyles =
    variant === "back"
      ? "rounded-md border border-purple-600 bg-purple-700 px-5 py-2 text-purple-100 shadow hover:bg-purple-600 w-full max-w-[200px]"
      : "rounded-md border border-blue-600 bg-blue-700 px-6 py-2 text-blue-100 shadow hover:bg-blue-600 w-full max-w-[200px]";

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`${buttonStyles} transition-all`}
    >
      {label}
    </motion.button>
  );
};

export default Button;
