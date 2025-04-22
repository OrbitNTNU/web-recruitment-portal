import { useStepStore } from "@/stores/useStepStore";
import { useFormStore, useSessionStorageSync } from "@/stores/useFormStore";
import { motion } from "framer-motion";
import { useState } from "react";
import Button from "../shared/NavButton";
import InputField from "../shared/InputFieldButton";

export default function ThirdStep() {
  const { nextStep, prevStep } = useStepStore();
  const { setFieldOfStudy, setYearOfStudy, fieldOfStudy, yearOfStudy } = useFormStore();
  const [selectedOption, setSelectedOption] = useState<string>("");
  useSessionStorageSync();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.article
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex w-1/3 flex-col items-center justify-center p-10"
      >
        <motion.label
          htmlFor="study-background"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-lg font-medium text-purple-300"
        >
          Study Background:
        </motion.label>

        <InputField
          id="study-background"
          value={fieldOfStudy}
          onChange={(e: { target: { value: string; }; }) => setFieldOfStudy(e.target.value)}
          placeholder="Enter your personal email"
        />

        <motion.label
          htmlFor="years"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="mt-6 block text-sm font-medium text-blue-300"
        >
          Year of study:
        </motion.label>
        <motion.select
          id="years"
          whileFocus={{
            scale: 1.02,
            boxShadow: "0px 0px 8px #9b6dde",
          }}
          className="mt-2 block w-full rounded-xl border border-purple-300 bg-gray-700 p-3 text-purple-100 placeholder-purple-400 shadow-md transition-all focus:outline-none"
          value={yearOfStudy}
          onChange={(e) => setYearOfStudy(Number(e.target.value))}
        >
          <option value="" disabled>Select a year</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </motion.select>

        <div className="mt-8 flex space-x-4">
           <Button onClick={prevStep} label="Back" variant="back" />
           <Button onClick={nextStep} label="Next" variant="next" />
         </div>
      </motion.article>
    </div>
  );
}
