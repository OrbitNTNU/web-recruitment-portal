"use client";

import { motion } from "framer-motion";
import { useStepStore } from "@/stores/useStepStore";
import { useFormStore } from "@/stores/useFormStore";
import { handleStepChange } from "@/stores/utils/LoadingUtils";

import {
  FaUser,
  FaEnvelope,
  FaUsers,
  FaClipboardCheck,
  FaLock,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";

const STEPS = [
  { label: "Personal", icon: FaUser },
  { label: "Contact", icon: FaEnvelope },
  { label: "Teams", icon: FaUsers },
  { label: "Review", icon: FaClipboardCheck },
] as const;

export default function StepSlider() {
  const { step } = useStepStore();

  const form = useFormStore();

  const completed = [
    Boolean(form.fullName && form.fieldOfStudy && form.yearOfStudy),
    Boolean(form.username && form.email && form.emailAddress && form.phoneNumber),
    Boolean(form.teams.length > 0),
    true,
  ];

  const completedCount = completed.filter(Boolean).length;

  const progress =
    completedCount > 1
      ? ((completedCount - 1) / (STEPS.length - 1)) * 100
      : 0;

  const canAccessStep = (target: number) => {
    if (target <= step) return true;

    for (let i = 0; i < target - 1; i++) {
      if (!completed[i]) return false;
    }

    return true;
  };

  const goNext = () => {
    if (step < STEPS.length && completed[step - 1]) {
      handleStepChange("goto", step + 1, 2000);
    }
  };

  const goBack = () => {
    if (step > 1) {
      handleStepChange("goto", step - 1, 2000);
    }
  };

  return (
    <div className="w-full py-12">
      <div className="mx-auto max-w-2xl px-6">
        <div className="relative flex items-center justify-between">

          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={goBack}
            disabled={step === 1}
            className="flex items-center gap-2 text-sm text-[var(--color-charcoal-light)] hover:text-[var(--color-cloud-white)] disabled:opacity-30"
          >
            <FaChevronLeft size={12} />
          </button>

          <div className="relative flex flex-1 items-start justify-between mx-6">
            <div className="absolute left-0 right-0 top-[20px] h-[1px] bg-[var(--color-dark-gray)]" />
            <motion.div
              className="absolute left-0 top-[20px] h-[1px] bg-[var(--color-cloud-white)]"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            />

            {STEPS.map((item, index) => {
              const stepNumber = index + 1;

              const isActive = step === stepNumber;
              const isCompleted = completed[index];
              const isLocked = !canAccessStep(stepNumber);

              const Icon = item.icon;

              const baseStyle =
                "flex h-10 w-10 items-center justify-center rounded-full text-sm transition-all duration-300";

              const style =
                isActive
                  ? "bg-[var(--color-cloud-white)] text-[var(--color-charcoal)]"
                  : isCompleted
                    ? "bg-[var(--color-dark-gray)] text-[var(--color-cloud-white)]"
                    : "border border-[var(--color-dark-gray)] text-[var(--color-charcoal-light)] bg-[var(--color-charcoal)]";

              return (
                <div
                  key={item.label}
                  className="relative z-10 flex flex-col items-center gap-2"
                >
                  <motion.button
                    type="button"
                    disabled={isLocked}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => {
                      if (!isLocked) {
                        handleStepChange("goto", stepNumber, 2000);
                      }
                    }}
                    whileHover={!isLocked ? { scale: 1.05 } : {}}
                    whileTap={!isLocked ? { scale: 0.95 } : {}}
                    className={`${baseStyle} ${style}`}
                  >
                    {isLocked ? (
                      <FaLock size={11} />
                    ) : isCompleted && !isActive ? (
                      <FaStar size={12} />
                    ) : (
                      <Icon size={12} />
                    )}
                  </motion.button>

                  <span
                    className={`text-[11px] ${isActive || isCompleted
                        ? "text-[var(--color-cloud-white)]"
                        : "text-[var(--color-charcoal-light)]"
                      }`}
                  >
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={goNext}
            disabled={!completed[step - 1] || step === STEPS.length}
            className="flex items-center gap-2 text-sm text-[var(--color-charcoal-light)] hover:text-[var(--color-cloud-white)] disabled:opacity-30"
          >
            <FaChevronRight size={12} />
          </button>

        </div>
      </div>
    </div>
  );
}