import React from "react";
import { useStepStore } from "@/stores/step-store/useStepStore";
import Button from "@/components/shared/NavButton";

const NextButton: React.FC = () => {
  const { nextStep } = useStepStore();

  return <Button onClick={nextStep} label="Next" variant="next" />;
};

export default NextButton;
