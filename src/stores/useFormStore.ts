import { create } from "zustand";

interface FormState {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;
  resetStep: () => void;
}

export const useFormStore = create<FormState>((set) => ({
  step: 1,
  nextStep: () => set((state) => ({ step: Math.min(state.step + 1, 5) })),
  prevStep: () => set((state) => ({ step: Math.max(state.step - 1, 1) })),
  setStep: (step) => set(() => ({ step: Math.max(1, Math.min(step, 5)) })),
  resetStep: () => set(() => ({ step: 1 })),
}));