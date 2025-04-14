import { useFormStore, useSessionStorageSync } from "@/stores/useFormStore";
import { useStepStore } from "@/stores/useStepStore";
import { motion } from "framer-motion";

export default function SecondStep() {
  const { fullName, setFullName } = useFormStore();
  const { prevStep, nextStep } = useStepStore();
  useSessionStorageSync();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.article
        initial={{ opacity: 0, scale: 0.8, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex w-1/3 flex-col items-center justify-center"
      >
        <motion.label
          htmlFor="FullName"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-xl font-bold text-pink-200 drop-shadow"
        >
          Full name:
        </motion.label>
        <motion.input
          type="text"
          id="FullName"
          name="FullName"
          onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
          whileFocus={{
            scale: 1.05,
            boxShadow: "0px 0px 15px #c084fc",
          }}
          className="mt-2 block w-full rounded-xl border-2 border-purple-400 bg-purple-100 p-3 text-purple-900 placeholder-purple-400 shadow-inner transition-all focus:outline-none"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your name"
        />

        <div className="mt-6 flex space-x-4">
          <motion.button
            type="button"
            onClick={prevStep}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg border-2 border-pink-400 bg-pink-500 px-5 py-2 text-white shadow-lg hover:bg-pink-400 transition-all"
          >
            Back
          </motion.button>
          <motion.button
            type="button"
            onClick={nextStep}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg border-2 border-blue-400 bg-blue-500 px-6 py-2 text-white shadow-lg hover:bg-blue-400 transition-all"
          >
            Next
          </motion.button>
        </div>
      </motion.article>
    </div>
  );
}
