import { useFormFilledStore } from "@/stores/FormFilledStore";
import { useFormStore, useSessionStorageSync } from "@/stores/useFormStore";
import { useStepStore } from "@/stores/useStepStore";
import { motion } from "framer-motion";
import Button from "../shared/NavButton";
import InputField from "../shared/InputFieldButton";
import StepSlider from "../shared/StepSlider";

export default function FirstStep() {
  const {
    fullName,
    setFullName, } = useFormStore();
  const {setFullNameFilled} = useFormFilledStore();
  const {  nextStep } = useStepStore();
  useSessionStorageSync();

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
    if (e.target.value.trim()) {
      setFullNameFilled(true);
    } else {
      setFullNameFilled(false);
    }
  };



  return (
    <div className="flex min-h-screen items-start justify-center pt-10 md:items-center md:pt-0">
      <motion.article
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex w-full max-w-md flex-col items-center justify-center px-4 py-10 sm:p-10"
      >
        <StepSlider />
        <motion.label
          htmlFor="Name"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-lg font-medium text-purple-300"
        >
          Your Full Name
        </motion.label>
        <InputField
          id="FullName"
          value={fullName}
          onChange={handleFullNameChange}
          placeholder="Enter your name"
        />
          <div className="mt-8 flex w-full justify-center space-x-4">
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