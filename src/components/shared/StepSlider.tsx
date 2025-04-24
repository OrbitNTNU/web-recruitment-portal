import { motion } from "framer-motion";
import { useStepStore } from "@/stores/useStepStore";

export default function StepSlider() {
  const { step, setStep } = useStepStore();

  const steps = [
    "Person info",
    "Experience",
    "Study",
    "Teams",
    "Comments",
    "Apply",
  ];

  return (
    <div className="mb-8 flex w-full max-w-md items-center justify-between px-4">
      {steps.map((label, index) => {
        const stepIndex = index + 1;
        const isActive = step === stepIndex;
        const isCompleted = step > stepIndex;

        return (
          <div
            key={label}
            className="relative flex flex-col items-center cursor-pointer group"
            onClick={() => stepIndex <= step && setStep(stepIndex)}
          >
            <motion.div
              className={`z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold transition-colors
                ${
                  isActive
                    ? "border-blue-400 bg-blue-500 text-white"
                    : isCompleted
                    ? "border-green-400 bg-green-500 text-white"
                    : "border-gray-400 bg-gray-700 text-gray-300"
                }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {stepIndex}
            </motion.div>
            <span className="mt-2 text-xs text-white group-hover:text-purple-300">{label}</span>

            {index < steps.length - 1 && (
              <div className="absolute left-1/2 top-5 w-full">
                <div className="mx-auto h-1 w-20 bg-gray-600 group-hover:bg-purple-400" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
