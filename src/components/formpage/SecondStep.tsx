import { useFormStore, useSessionStorageSync } from "@/stores/useFormStore";
import { useStepStore } from "@/stores/useStepStore";
import { motion } from "framer-motion";
import Button from "../shared/NavButton";
import InputField from "../shared/InputFieldButton";
import StepSlider from "../shared/StepSlider";
import { useFormFilledStore } from "@/stores/FormFilledStore";

export default function SecondStep() {
  const { email, emailAddress, setEmail, setEmailAddress } = useFormStore();
  const { prevStep, nextStep } = useStepStore();
  useSessionStorageSync();
  const {phoneNumber,setPhoneNumber, username,
    setUsername,} = useFormStore();
  const {setPhoneNumberFilled, isPhoneNumberFilled, setUsernameFilled,
    isUsernameFilled, isEmailFilled, setEmailAddressFilled} = useFormFilledStore();

  const handleEmailFilledChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (e.target.value.trim()) {
      setEmailAddressFilled(true);
    } else {
      setEmailAddressFilled(false);
    }
  }

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
    if (e.target.value.trim()) {
      setPhoneNumberFilled(true);
    } else {
      setPhoneNumberFilled(false);
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (e.target.value.trim()) {
      setUsernameFilled(true);
    } else {
      setUsernameFilled(false);
    }
  };

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
        <InputField
          id="school-email"
          value={email}
          onChange={(e: { target: { value: string } }) => setEmail(e.target.value)}
          placeholder="Enter your school email"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="w-full"
        >
          <motion.label
            htmlFor="username"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-lg font-medium text-purple-300"
          >
            NTNU Username
          </motion.label>
          <InputField
            id="Username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your username"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="w-full"
        >
          <motion.label
            htmlFor="phoneNumber"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-lg font-medium text-purple-300"
          >
            Phone Number
          </motion.label>
          <InputField
            id="PhoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Enter your phone number"
          />
        </motion.div>
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