"use client";

import { motion } from "framer-motion";
import { useStepStore } from "@/stores/useStepStore";
import { handleStepChange } from "@/stores/utils/LoadingUtils";

const STEPS = [
  { label: "Personal Info" },
  { label: "Contact & About" },
  { label: "Teams" },
  { label: "Review" },
] as const;

export default function StepSlider() {
  const { step } = useStepStore();

  return (
    <div className="w-full py-6">
      <div className="mx-auto max-w-2xl px-6">
        <div className="relative flex items-center justify-between">
          <div className="absolute left-8 right-8 top-4 h-[1px] bg-[var(--color-slate)]/20" />
          
          <motion.div
            className="absolute left-8 top-4 h-[1px] bg-[var(--color-berry-blast)]"
            initial={{ width: "0%" }}
            animate={{ 
              width: `calc(${((step - 1) / (STEPS.length - 1)) * 100}% * 0.88)` 
            }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          />

          {STEPS.map((item, index) => {
            const stepNumber = index + 1;
            const isActive = step === stepNumber;
            const isCompleted = step > stepNumber;

            return (
              <div
                key={item.label}
                className="relative flex flex-col items-center gap-2.5 z-10"
              >
                <motion.button
                  type="button"
                  onClick={() => handleStepChange("goto", stepNumber, 2000)}
                  className={`
                    relative flex h-8 w-8 items-center justify-center rounded-full
                    text-xs font-semibold transition-all duration-300
                    ${isActive 
                      ? "bg-[var(--color-berry-blast)] text-white scale-110" 
                      : isCompleted
                        ? "bg-[var(--color-berry-blast)]/20 text-[var(--color-berry-blast)]"
                        : "bg-[var(--color-slate)]/10 text-[var(--color-muted)]"
                    }
                    hover:scale-110
                  `}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isCompleted ? (
                    <motion.svg
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </motion.svg>
                  ) : (
                    <span>{stepNumber}</span>
                  )}
                </motion.button>

                <span
                  className={`
                    text-xs font-medium text-center whitespace-nowrap transition-colors duration-300
                    hidden sm:block
                    ${isActive 
                      ? "text-[var(--color-cloud-white)]" 
                      : isCompleted
                        ? "text-[var(--color-berry-blast)]"
                        : "text-[var(--color-muted)]"
                    }
                  `}
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}