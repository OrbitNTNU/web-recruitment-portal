import { useFormStore,  useSessionStorageSync } from "@/stores/useFormStore";
import { useStepStore } from "@/stores/useStepStore";
import { motion } from "framer-motion";

export default function SecondStep() {
  const { comments, setComments } = useFormStore();
  const { prevStep, nextStep } = useStepStore();

  useSessionStorageSync();

  return (
    <div className="flex items-center justify-center min-h-screen">
    <motion.article
      initial={{ opacity: 0, scale: 0.8, y: -50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex w-1/3 flex-col items-center justify-center rounded-2xl"
    >
      <motion.label
        htmlFor="Overview"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-lg font-semibold text-white"
      >
       Your Overview:
      </motion.label>

      <div className="mt-6 flex space-x-4">
        <motion.button
          type="button"
          onClick={prevStep}
          whileHover={{
            scale: 1.1,
            y: -2,
            boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
          }}
          whileTap={{ scale: 0.9 }}
          className="rounded-lg border border-gray-500 bg-gray-700 px-5 py-2 text-white shadow-md transition-all hover:bg-gray-600"
        >
          Back
        </motion.button>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.2, y: -4, boxShadow: "0px 0px 20px #38bdf8" }}
          whileTap={{ scale: 0.9 }}
          className="rounded-lg border border-blue-400 bg-blue-500 px-6 py-2 text-white shadow-md transition-all hover:bg-blue-600"
        >
          Apply to Orbit
        </motion.button>
      </div>
    </motion.article>
    </div>
  );
}
