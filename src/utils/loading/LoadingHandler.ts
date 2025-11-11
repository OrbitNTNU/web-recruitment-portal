import { useLoadingStore } from "@/stores/LoadingStore/UseLoadingStore";
import { useStepStore } from "@/stores/StepStore/UseStepStore";

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

export const handleStepChange = (action: "next" | "prev", duration = 1800) => {
  const { showLoading, hideLoading } = useLoadingStore.getState();
  const { nextStep, prevStep } = useStepStore.getState();
  showLoading();

  setTimeout(() => {
    hideLoading();
    if (action === "next") {
      nextStep();
    } else {
      prevStep();
    }
  }, duration);
};
