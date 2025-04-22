import { useFormStore, useSessionStorageSync } from "@/stores/useFormStore";
import { useStepStore } from "@/stores/useStepStore";
import { motion } from "framer-motion";
import Button from "../shared/NavButton";
import InputField from "../shared/InputFieldButton"; // Import the InputField component

export default function SecondStep() {
  const { email, emailAddress, setEmail, setEmailAddress } = useFormStore();
  const { prevStep, nextStep } = useStepStore();
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
          htmlFor="Email"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-lg font-medium text-purple-300"
        >
          Email
        </motion.label> 
        <InputField
          id="school-email"
          value={email}
          onChange={(e: { target: { value: string; }; }) => setEmail(e.target.value)}
          placeholder="Enter your school email"
        />

        <div className="mt-8 flex space-x-4">
          <Button onClick={prevStep} label="Back" variant="back" />
          <Button onClick={nextStep} label="Next" variant="next" />
        </div>
      </motion.article>
    </div>
  );
}
