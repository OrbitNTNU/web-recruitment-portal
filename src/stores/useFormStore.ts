import { create } from "zustand";
import { useEffect } from "react";
import type { Team } from "@/types/team";

interface FormValues {
  fullName: string;
  username: string;
  email: string;
  phoneNumber: string;
  emailAddress: string;
  fieldOfStudy: string;
  yearOfStudy: number;
  positions: string[];
  experience: string;
  description: string;
  teams: Team[];
  allTeams: Team[];
  teamsLoaded: boolean;

  setFullName: (fullName: string) => void;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
  setPhoneNumber: (phoneNumber: string) => void;
  setEmailAddress: (emailAddress: string) => void;
  setFieldOfStudy: (fieldOfStudy: string) => void;
  setYearOfStudy: (yearOfStudy: number) => void;
  setPositions: (positions: string[]) => void;
  setExperience: (experience: string) => void;
  setDescription: (description: string) => void;
  setTeams: (teams: Team[]) => void;
  setAllTeams: (teams: Team[]) => void;
  fetchTeams: () => Promise<void>;
  
  resetForm: () => void;
}

const loadState = (): Partial<FormValues> => {
  if (typeof window === "undefined") return {};

  const savedState = sessionStorage.getItem("formState");
  return savedState ? JSON.parse(savedState) : {};
};

export const useFormStore = create<FormValues>((set, get) => ({
  fullName: "",
  username: "",
  email: "",
  phoneNumber: "",
  emailAddress: "",
  fieldOfStudy: "",
  yearOfStudy: 1,
  positions: [],
  experience: "",
  description: "",
  teams: [],
  allTeams: [],
  teamsLoaded: false,

  setFullName: (fullName) => set({ fullName }),
  setUsername: (username) => set({ username }),
  setEmail: (email) => set({ email }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  setEmailAddress: (emailAddress) => set({ emailAddress }),
  setFieldOfStudy: (fieldOfStudy) => set({ fieldOfStudy }),
  setYearOfStudy: (yearOfStudy) => set({ yearOfStudy }),
  setPositions: (positions) => set({ positions }),
  setExperience: (experience) => set({ experience }),
  setDescription: (description) => set({ description }),
  setTeams: (teams) => set({ teams }),

  setAllTeams: (teams) => set({ allTeams: teams }),

  fetchTeams: async () => {
    if (get().teamsLoaded) return;

    try {
      const res = await fetch("/api/teams");
      if (!res.ok) throw new Error("Failed to fetch teams");

      const teams = await res.json();

      set({
        allTeams: teams,
        teamsLoaded: true,
      });
    } catch (err) {
      console.error(err);
    }
  },

  resetForm: () =>
    set({
      fullName: "",
      username: "",
      email: "",
      phoneNumber: "",
      emailAddress: "",
      fieldOfStudy: "",
      yearOfStudy: 1,
      positions: [],
      experience: "",
      description: "",
      teams: [],
    }),
}));

export const useSessionStorageSync = () => {
  const formState = useFormStore();

  useEffect(() => {
    const savedState = loadState();
    useFormStore.setState(savedState);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("formState", JSON.stringify(formState));
  }, [formState]);
};