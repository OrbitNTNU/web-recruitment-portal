"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useStepStore } from "@/stores/useStepStore";
import { handleStepChange } from "@/stores/utils/LoadingUtils";

export default function StepSlider() {
  const { step, setStep } = useStepStore();

  const steps = [
    { label: "Personal Information", img: "/other/steps/half-moon.png" },
    { label: "Description", img: "/other/steps/half-moon2.png" },
    { label: "Teams and Wishes", img: "/other/steps/half-moon3.png" },
    { label: "Summary", img: "/other/steps/full-moon.png" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center border-t border-[var(--color-slate)] bg-[var(--color-background)] py-6">
      <div className="flex w-full max-w-2xl items-center justify-between px-8">
        {steps.map((item, index) => {
          const stepIndex = index + 1;
          const isActive = step === stepIndex;
          const isCompleted = step > stepIndex;

          return (
            <div
              key={item.label}
              className="group relative flex flex-col items-center"
            >
              <motion.div
                className={`z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "border-[var(--color-cloud-white)]"
                    : isCompleted
                      ? "border-[var(--color-sky-mint)]"
                      : "border-[var(--color-slate)]"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleStepChange("goto", stepIndex, 2000)}
                animate={
                  isActive
                    ? {
                        x: [0, -2, 2, -1, 1, 0], 
                        transition: {
                          duration: 0.6,
                          ease: "easeInOut",
                          repeat: Infinity,
                        },
                      }
                    : { x: 0 }
                }
              >
                <Image
                  src={item.img}
                  alt={item.label}
                  width={24}
                  height={24}
                  className={`opacity-90 ${
                    isActive
                      ? "brightness-125"
                      : isCompleted
                        ? "brightness-110"
                        : "brightness-75"
                  }`}
                />
              </motion.div>

              <span
                className={`mt-2 text-[0.7rem] text-center ${
                  isActive
                    ? "text-[var(--color-strong)]"
                    : isCompleted
                      ? "text-[var(--color-sky-mint)]"
                      : "text-[var(--color-muted)]"
                }`}
              >
                {item.label}
              </span>

              {index < steps.length - 1 && (
                <motion.div
                  className="absolute left-1/2 top-5 w-20"
                  initial={{ opacity: 0.3 }}
                  animate={{
                    backgroundColor: isCompleted
                      ? "var(--color-sky-mint)"
                      : "var(--color-slate)",
                    opacity: isCompleted ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.4 }}
                  style={{
                    height: "1px",
                    transform: "translateX(50%)",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
