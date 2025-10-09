import NextButton from "@/components/Form/NextButton";
import StepSlider from "@/components/Form/StepSlider";
import {
  useFormStore,
  useSessionStorageSync,
} from "@/stores/FormStore/UseFormStore";
import { useStepStore } from "@/stores/StepStore/UseStepStore";
import { motion } from "framer-motion";

export default function PersonalInfoModal() {
  const { fullName, setFullName } = useFormStore();
  const { nextStep } = useStepStore();
  useSessionStorageSync();
  const { setFieldOfStudy, setYearOfStudy, fieldOfStudy, yearOfStudy } =
    useFormStore();
  useSessionStorageSync();

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

        <div className="mt-8 flex w-full justify-center space-x-4">
          <NextButton />
        </div>
      </motion.article>
    </div>
  );
}
