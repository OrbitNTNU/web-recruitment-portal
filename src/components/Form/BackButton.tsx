import React from "react";
import Button from "@/components/Shared/NavButton";
import { handleStepChange } from "@/stores/utils/LoadingUtils";

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
