import { useFormStore, useSessionStorageSync } from "@/stores/useFormStore";
import { useStepStore } from "@/stores/useStepStore";
import { motion } from "framer-motion";
import Button from "../../shared/NavButton";
import StepSlider from "../../shared/StepSlider";

export default function SixthStep() {
  const { experience, setExperience } = useFormStore();
  const { prevStep, nextStep } = useStepStore();

  useSessionStorageSync();

  return (
    <div className="flex items-start justify-center min-h-screen pt-10 md:items-center md:pt-0">
      <motion.article
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex w-full max-w-md flex-col items-center justify-center px-4 py-10 sm:p-10"
      >
        <StepSlider />
        <motion.label
          htmlFor="Experience"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-lg font-medium text-purple-300"
        >
          Experience
        </motion.label>
        <motion.textarea
          id="Experience"
          name="Experience"
          onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
          whileFocus={{
            scale: 1.02,
            boxShadow: "0px 0px 8px #9b6dde",
          }}
          className="mt-2 block w-full rounded-xl border border-purple-300 bg-gray-700 p-3 text-purple-100 placeholder-purple-400 shadow-md transition-all focus:outline-none"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          placeholder="I have worked with satellite production prior to Orbit..."
          rows={5}
        />

        <div className="mt-8 flex space-x-4">
          <Button onClick={prevStep} label="Back" variant="back" />
          <Button onClick={nextStep} label="Next" variant="next" />
        </div>
      </motion.article>
    </div>
  );
}
