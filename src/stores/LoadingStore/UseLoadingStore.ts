import { create } from "zustand";

interface LoadingState {
  isLoading: boolean;
  showLoading: () => void;
  hideLoading: () => void;
  showForDuration: (duration?: number) => void;
}

export const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: false,

  showLoading: () => set({ isLoading: true }),
  hideLoading: () => set({ isLoading: false }),

  showForDuration: (duration = 2000) => {
    set({ isLoading: true });
    setTimeout(() => set({ isLoading: false }), duration);
  },
}));