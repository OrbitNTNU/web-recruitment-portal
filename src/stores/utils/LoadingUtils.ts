import { useLoadingStore } from "@/stores/UseLoadingStore";
import { useStepStore } from "@/stores/UseStepStore";

export const triggerLoading = () => {
  const { showLoading } = useLoadingStore.getState();
  showLoading();
};

export const stopLoading = () => {
  const { hideLoading } = useLoadingStore.getState();
  hideLoading();
};

export const triggerLoadingForDuration = (duration = 2000) => {
  const { showLoading, hideLoading } = useLoadingStore.getState();

  showLoading();
  setTimeout(() => hideLoading(), duration);
};

export const handleStepChange = (
  action: "next" | "prev" | "goto",
  step?: number,
  duration = 1800
) => {
  const { showLoading, hideLoading } = useLoadingStore.getState();
  const { nextStep, prevStep, setStep } = useStepStore.getState();

  showLoading();

  setTimeout(() => {
    hideLoading();

    if (action === "next") {
      nextStep();
    } else if (action === "prev") {
      prevStep();
    } else if (action === "goto" && step !== undefined) {
      setStep(step);
    }
  }, duration);
};