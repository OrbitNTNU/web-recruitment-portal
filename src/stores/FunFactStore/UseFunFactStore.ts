import { create } from "zustand";

interface FunFactState {
  facts: string[];
  currentFact: string;
  setRandomFact: () => void;
}

export const useFunFactStore = create<FunFactState>((set, get) => ({
  facts: [
    "Orbit is the best technical organisation",
    "Orbit makes cube-satellites",
    "Orbit is the biggest student organisation at NTNU.",
    "Orbit is cool.",
    "Orbit has a member names August, isn't that cool?."
  ],
  currentFact: "The Earth orbits the Sun at 30 km/s.",

  setRandomFact: () => {
    const { facts } = get();
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    set({ currentFact: randomFact });
  },
}));
