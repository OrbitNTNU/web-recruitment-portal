import { create } from "zustand";
import { useFormStore } from "@/stores/useFormStore";

interface FunFactState {
  currentFact: string;
  setRandomFact: () => void;
}

export const useFunFactStore = create<FunFactState>((set) => ({
  currentFact: "Join any of these teams!",

  setRandomFact: () => {
    const { allTeams } = useFormStore.getState();

    if (!allTeams.length) return;

    const randomTeam =
      allTeams[Math.floor(Math.random() * allTeams.length)];

    if (!randomTeam) return;

    set({
      currentFact: `${randomTeam.teamName}`,
    });
  },
}));