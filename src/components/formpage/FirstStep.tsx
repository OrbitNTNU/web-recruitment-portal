import { useFormFilledStore } from "@/stores/FormFilledStore";
import { useFormStore, useSessionStorageSync } from "@/stores/useFormStore";
import { useStepStore } from "@/stores/useStepStore";
import { motion } from "framer-motion";
import { useState } from "react";
import Button from "../shared/NavButton";
import InputField from "../shared/InputFieldButton";
import StepSlider from "../shared/StepSlider";

export default function FirstStep() {
  const {
    fullName,
    setFullName,
    phoneNumber,
    setPhoneNumber,
    username,
    setUsername,
  } = useFormStore();
  const {
    setFullNameFilled,
    isFullNameFilled,
    setPhoneNumberFilled,
    isPhoneNumberFilled,
    setUsernameFilled,
    isUsernameFilled,
  } = useFormFilledStore();
  const { prevStep, nextStep } = useStepStore();
  useSessionStorageSync();

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
    if (e.target.value.trim()) {
      setFullNameFilled(true);
    } else {
      setFullNameFilled(false);
    }
  };

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

        {isFullNameFilled && (
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
        )}

        {isPhoneNumberFilled && isFullNameFilled && (
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
        )}

        {isUsernameFilled && isFullNameFilled && isPhoneNumberFilled && (
          <div className="mt-8 flex w-full justify-center space-x-4">
            <Button 
              onClick={nextStep} 
              label="Next" 
              variant="next"
            />
          </div>
        )}
      </motion.article>
    </div>
  );
}