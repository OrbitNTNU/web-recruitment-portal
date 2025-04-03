import { create } from "zustand";
import type { FormState } from "@/interfaces/formState";

export const useStepStore = create<FormState>((set) => ({
  step: 1,
  nextStep: () => set((state) => ({ step: Math.min(state.step + 1, 6) })),
  prevStep: () => set((state) => ({ step: Math.max(state.step - 1, 1) })),
  setStep: (step) => set(() => ({ step: Math.max(1, Math.min(step, 6)) })),
  resetStep: () => set(() => ({ step: 1 })),
}));