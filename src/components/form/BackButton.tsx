import React from "react";
import Button from "@/components/Shared/NavButton";
import { handleStepChange } from "@/utils/loading/LoadingHandler";

const BackButton: React.FC = () => {
  return (
    <Button
      onClick={() => handleStepChange("prev", 2000)}
      label="Back"
      variant="back"
    />
  );
};

export default BackButton;
