import React from "react";
import Button from "@/components/shared/NavButton";
import { handleStepChange } from "@/utils/loading/LoadingHandler";

const NextButton: React.FC = () => {
  return <Button onClick={() => handleStepChange("next", 2000)} label="Next" variant="next" />;
};

export default NextButton;
