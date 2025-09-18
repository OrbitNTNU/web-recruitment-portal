import { useLoadingStore } from "@/stores/loading-store/useLoadingStore";

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
  setTimeout(() => {
    hideLoading();
  }, duration);
};
