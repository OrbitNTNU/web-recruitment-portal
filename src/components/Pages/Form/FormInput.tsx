import { INPUT_CLASSES, LABEL_CLASSES } from "@/constants/styles";
import { motion } from "framer-motion";
import InfoIcon from "@/components/Pages/Form/InfoIcon";

interface FormInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  icon: React.ReactNode;
  info?: string;
}

const FormInput = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  icon,
  info,
}: FormInputProps) => (
  <motion.div className="space-y-2" whileHover={{ scale: 1.01 }}>
    <label className={`${LABEL_CLASSES} text-[var(--color-cloud-white)]`}>
      {label}
      {info && <InfoIcon text={info} />}
    </label>

    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-charcoal-light)]">
        {icon}
      </div>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`
          ${INPUT_CLASSES}
          pl-11
        `}
      />
    </div>
  </motion.div>
);

export default FormInput;