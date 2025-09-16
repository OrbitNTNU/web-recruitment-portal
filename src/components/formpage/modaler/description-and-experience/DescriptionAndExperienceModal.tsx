import { useFormStore, useSessionStorageSync } from "@/stores/FormStore/useFormStore";
import { useStepStore } from "@/stores/StepStore/useStepStore";
import { motion } from "framer-motion";
import Button from "../../../shared/NavButton";
import StepSlider from "../../../shared/StepSlider";

export default function SecondStep() {
  const { email, emailAddress, setEmail, setEmailAddress } = useFormStore();
  const { experience, setExperience } = useFormStore();
  const { description, setDescription } = useFormStore();
  const { prevStep, nextStep } = useStepStore();
  useSessionStorageSync();
  const {phoneNumber,setPhoneNumber, username,
    setUsername,} = useFormStore();

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
          htmlFor="Email"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-lg font-medium text-purple-300"
        >
          Email
        </motion.label>
        <div className="mt-8 flex w-full justify-center space-x-4">
          <Button
            onClick={prevStep}
            label="Back"
            variant="back"
          />
          <Button
            onClick={nextStep}
            label="Next"
            variant="next"
          />
        </div>
      </motion.article>
    </div>
  );
}