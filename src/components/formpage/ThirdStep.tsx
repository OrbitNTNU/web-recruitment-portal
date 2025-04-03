import { useStepStore } from "@/stores/useStepStore";
import { useFormStore } from "@/stores/useFormStore";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ThirdStep() {
  const { nextStep, prevStep } = useStepStore();
  const { setFieldOfStudy, setYearOfStudy, fieldOfStudy, yearOfStudy} = useFormStore();
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYearOfStudy(Number(event.target.value));
    if (event.target.value !== "Other") {
      setYearOfStudy(0);
    }
  };

  function setCustomValue(value: string): void {
    throw new Error("Function not implemented.");
  }

  return (
  <div className="flex items-center justify-center min-h-screen">
    <motion.article
      initial={{ opacity: 0, scale: 0.8, y: -50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex w-1/3 flex-col items-center justify-center rounded-2xl"
    >
      <motion.label
        htmlFor="study-background"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-lg font-semibold text-white"
      >
        Study Background:
      </motion.label>
      <motion.input
        type="text"
        id="study-background"
        name="study-background"
        onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
        whileFocus={{ scale: 1.05, boxShadow: "0px 0px 10px #38bdf8" }}
        className="mt-2 block w-full rounded-lg border border-gray-600 bg-gray-800 p-2 text-white transition-all focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
         value={fieldOfStudy}
        onChange={(e) => setFieldOfStudy(e.target.value)}
      />

      <motion.label
        htmlFor="years"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="mt-4 block text-sm font-medium text-gray-300"
      >
        Select an option:
      </motion.label>
      <motion.select
        id="years"
        whileFocus={{ scale: 1.05, boxShadow: "0px 0px 10px #38bdf8" }}
        className="block w-full rounded-lg border border-gray-600 bg-gray-800 p-2.5 text-sm text-white transition-all focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
        value={yearOfStudy}
        onChange={handleOptionChange}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>Other</option>
      </motion.select>

      {selectedOption === "Other" && (
        <motion.article
          initial={{ opacity: 0, scale: 0.8, y: -50 }}
          animate={{ opacity: 6, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-25 shadow-2xlrelative flex flex-col items-center justify-center rounded-2xl bg-gray-900 p-8"
        >
          <motion.label
            htmlFor="what-do"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-lg font-semibold text-white"
          >
            What do you do?
          </motion.label>
          <motion.input
            type="number"
            id="So what to you do?"
            name="what-do"
            value={yearOfStudy}
            onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
            whileFocus={{ scale: 1.05, boxShadow: "0px 0px 10px #38bdf8" }}
            className="mt-2 block w-full rounded-lg border border-gray-600 bg-gray-800 p-2 text-white transition-all focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setYearOfStudy(Number(e.target.value))}
          />
        </motion.article>
      )}

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
          type="button"
          onClick={nextStep}
          whileHover={{ scale: 1.2, y: -4, boxShadow: "0px 0px 20px #38bdf8" }}
          whileTap={{ scale: 0.9 }}
          className="rounded-lg border border-blue-400 bg-blue-500 px-6 py-2 text-white shadow-md transition-all hover:bg-blue-600"
        >
          Next
        </motion.button>
      </div>
    </motion.article>
  </div>
  );
}
