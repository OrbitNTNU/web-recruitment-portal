import { motion } from "framer-motion";
import { useFormStore, useSessionStorageSync } from "@/stores/useFormStore";

const YEAR_OPTIONS = [1, 2, 3, 4, 5] as const;

const INPUT_CLASSES = `
  w-full rounded-lg border border-[var(--color-slate)]/30 
  bg-[var(--color-night-sky)] px-6 py-4 
  text-[var(--color-cloud-white)] placeholder-[var(--color-muted)]
  transition-all duration-200 outline-none
  focus:border-[var(--color-berry-blast)] focus:ring-2 focus:ring-[var(--color-berry-blast)]/20
  hover:border-[var(--color-slate)]/50
`;

export default function PersonalInformationModal() {
  const {
    fullName,
    setFullName,
    fieldOfStudy,
    setFieldOfStudy,
    yearOfStudy,
    setYearOfStudy,
  } = useFormStore();

  useSessionStorageSync();

  return (
    <div className="flex min-h-[calc(100vh-180px)] items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl space-y-12"
      >
        <div className="space-y-3 text-center">
          <h1 className="text-[var(--color-strong)]">
            Personal Information
          </h1>
          <p className="text-[var(--color-muted)]">
            Let&apos;s start with the basics
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--color-cloud-white)]">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
              className={INPUT_CLASSES}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--color-cloud-white)]">
              Field of Study
            </label>
            <input
              type="text"
              value={fieldOfStudy}
              onChange={(e) => setFieldOfStudy(e.target.value)}
              placeholder="Computer Science"
              className={INPUT_CLASSES}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--color-cloud-white)]">
              Year of Study
            </label>
            <select
              value={yearOfStudy}
              onChange={(e) => setYearOfStudy(Number(e.target.value))}
              className={INPUT_CLASSES}
              required
            >
              {YEAR_OPTIONS.map((year) => (
                <option 
                  key={year} 
                  value={year} 
                  className="bg-[var(--color-night-sky)]"
                >
                  Year {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>
    </div>
  );
}