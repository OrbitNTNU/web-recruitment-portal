import Button from "@/components/Shared/NavButton";
import StepSlider from "@/components/Form/StepSlider";
import {
  useFormStore,
  useSessionStorageSync,
} from "@/stores/FormStore/UseFormStore";
import { useStepStore } from "@/stores/StepStore/UseStepStore";
import { motion } from "framer-motion";
import NextButton from "@/components/Form/NextButton";
import BackButton from "@/components/Form/BackButton";

export default function SecondStep() {
  const { email, emailAddress, setEmail, setEmailAddress } = useFormStore();
  const { experience, setExperience } = useFormStore();
  const { description, setDescription } = useFormStore();
  useSessionStorageSync();
  const { phoneNumber, setPhoneNumber, username, setUsername } = useFormStore();

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
          htmlFor="Email"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-lg font-medium text-purple-300"
        >
          Email
        </motion.label>
        <div className="mt-8 flex w-full justify-center space-x-4">
          <BackButton />
          <NextButton />
        </div>
      </motion.article>
    </div>
  );
}
