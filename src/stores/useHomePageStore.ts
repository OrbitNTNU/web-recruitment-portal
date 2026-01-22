import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IntroState {
  hasPlayed: boolean;
  setHasPlayed: (played: boolean) => void;
}

export const useHomePageStore = create<IntroState>()(
  persist(
    (set) => ({
      hasPlayed: false,
      setHasPlayed: (played) => set({ hasPlayed: played }),
    }),
    {
      name: "intro-storage",
    }
  )
);
