import React from "react";
import { useStepStore } from "@/stores/step-store/useStepStore";
import Button from "@/components/shared/NavButton";

const BackButton: React.FC = () => {
  const { prevStep } = useStepStore();

  return <Button onClick={prevStep} label="Back" variant="back" />;
};

export default BackButton;
