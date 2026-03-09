import { INPUT_CLASSES, LABEL_CLASSES } from "@/constants/styles";
import { motion } from "framer-motion";
import InfoIcon from "@/components/Pages/Form/InfoIcon";
import { useState } from "react";

interface FormTextareaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  maxLength: number;
  info?: string;
}

const FormTextarea = ({
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
  maxLength,
  info,
}: FormTextareaProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const charCount = value.length;

  return (
    <motion.div className="space-y-2" whileHover={{ scale: 1.01 }}>
      <div className="flex justify-between items-center">
        <label className={`${LABEL_CLASSES} text-[var(--color-cloud-white)] flex items-center gap-2`}>
          {label}
          {info && <InfoIcon text={info} />}
        </label>

        <span
          className={`text-xs transition ${
            isFocused
              ? "text-[var(--color-cloud-white)]"
              : "text-[var(--color-charcoal-light)]"
          }`}
        >
          {charCount}/{maxLength}
        </span>
      </div>

      <textarea
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
          ${INPUT_CLASSES}
        `}
      />
    </motion.div>
  );
};

export default FormTextarea;