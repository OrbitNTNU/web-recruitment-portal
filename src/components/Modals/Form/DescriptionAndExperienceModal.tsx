import { motion } from "framer-motion";
import { useFormStore, useSessionStorageSync } from "@/stores/useFormStore";
import { useState } from "react";

const INPUT_CLASSES = `
  rounded-lg border border-[var(--color-slate)]/30 
  bg-[var(--color-night-sky)] px-5 py-3.5 
  text-[var(--color-cloud-white)] placeholder-[var(--color-muted)]
  transition-all duration-200 outline-none
  focus:border-[var(--color-berry-blast)] focus:ring-2 focus:ring-[var(--color-berry-blast)]/20
  hover:border-[var(--color-slate)]/50
`;

const LABEL_CLASSES = "text-sm font-medium text-[var(--color-cloud-white)]";

interface FormInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  icon: React.ReactNode;
}

const FormInput = ({ label, value, onChange, type = "text", placeholder, icon }: FormInputProps) => (
  <motion.div 
    className="space-y-2"
    whileHover={{ x: 2 }}
    transition={{ duration: 0.2 }}
  >
    <label className={LABEL_CLASSES}>{label}</label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-muted)]">
        {icon}
      </div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`${INPUT_CLASSES} pl-11 w-full`}
      />
    </div>
  </motion.div>
);

interface FormTextareaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  maxLength: number;
}

const FormTextarea = ({ label, value, onChange, placeholder, rows = 4, maxLength }: FormTextareaProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const charCount = value.length;
  const isNearLimit = charCount > maxLength * 0.85;
  
  return (
    <motion.div 
      className="space-y-2"
      whileHover={{ x: 2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between items-center">
        <label className={LABEL_CLASSES}>{label}</label>
        <motion.span 
          initial={{ opacity: 0.5 }}
          animate={{ opacity: isFocused ? 1 : 0.5 }}
          className={`text-xs transition-colors duration-200 ${
            isNearLimit && isFocused
              ? 'text-[var(--color-berry-blast)]' 
              : 'text-[var(--color-muted)]'
          }`}
        >
          {charCount}/{maxLength}
        </motion.span>
      </div>
      <textarea
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`${INPUT_CLASSES} resize-none w-full`}
      />
    </motion.div>
  );
};

const CONTACT_FIELDS = [
  {
    label: "NTNU Username",
    key: "username" as const,
    placeholder: "username",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    label: "Primary Email",
    key: "email" as const,
    type: "email" as const,
    placeholder: "you@ntnu.no",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Secondary Email",
    key: "emailAddress" as const,
    type: "email" as const,
    placeholder: "personal@email.com",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Phone Number",
    key: "phoneNumber" as const,
    type: "tel" as const,
    placeholder: "+47 123 45 678",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

export default function DescriptionAndExperienceModal() {
  const {
    username,
    setUsername,
    email,
    setEmail,
    emailAddress,
    setEmailAddress,
    phoneNumber,
    setPhoneNumber,
    description,
    setDescription,
    experience,
    setExperience,
  } = useFormStore();

  useSessionStorageSync();

  const getFieldValue = (key: string) => {
    const values = { username, email, emailAddress, phoneNumber };
    return values[key as keyof typeof values];
  };

  const getFieldSetter = (key: string) => {
    const setters = { 
      username: setUsername, 
      email: setEmail, 
      emailAddress: setEmailAddress, 
      phoneNumber: setPhoneNumber 
    };
    return setters[key as keyof typeof setters];
  };

  return (
    <div className="flex items-center justify-center px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl space-y-8"
      >
        <div className="space-y-2 text-center">
          <h1 className="text-[var(--color-strong)]">
            Contact & Experience
          </h1>
          <p className="text-[var(--color-muted)]">
            Tell us how to reach you and what you bring
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CONTACT_FIELDS.map((field, index) => (
            <motion.div
              key={field.key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <FormInput
                label={field.label}
                value={getFieldValue(field.key)}
                onChange={getFieldSetter(field.key)}
                type={field.type}
                placeholder={field.placeholder}
                icon={field.icon}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="pt-2 space-y-4"
        >
          <FormTextarea 
            label="Short Description" 
            value={description} 
            onChange={setDescription}
            placeholder="Tell us about yourself and what drives you..."
            rows={4}
            maxLength={500}
          />
          <FormTextarea 
            label="Relevant Experience" 
            value={experience} 
            onChange={setExperience}
            placeholder="Share your experience, skills, and projects..."
            rows={4}
            maxLength={1000}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}