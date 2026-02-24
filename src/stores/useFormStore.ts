import { create } from "zustand";
import { useEffect } from "react";
import { type Team } from "@/consts/teams";

interface FormValues {
  fullName: string;
  username: string;
  email: string;
  phoneNumber: string;
  emailAddress: string;
  fieldOfStudy: string;
  yearOfStudy: number;
  positions: [];
  experience: string;
  description: string;
  teams: Team[];
  setFullName: (fullName: string) => void;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
  setPhoneNumber: (phoneNumber: string) => void;
  setEmailAddress: (emailAddress: string) => void;
  setFieldOfStudy: (fieldOfStudy: string) => void;
  setYearOfStudy: (yearOfStudy: number) => void;
  setPositions: (positions: []) => void;
  setExperience: (comments: string) => void;
  setDescription: (description: string) => void;
  setTeams: (teams: Team[]) => void;
  resetForm: () => void;
}


const loadState = (): Partial<FormValues> => {
  if (typeof window === "undefined") return {}; // Doing this to make sure there are no SSR issues within Next.js

  const savedState = sessionStorage.getItem("formState");
  return savedState ? (JSON.parse(savedState) as Partial<FormValues>) : {};
};

export const useFormStore = create<FormValues>((set) => ({
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
  setFullName: (fullName) => set({ fullName }),
  setUsername: (username) => set({ username }),
  setEmail: (email) => set({ email }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  setEmailAddress: (emailAddress) => set({ emailAddress }),
  setFieldOfStudy: (fieldOfStudy) => set({ fieldOfStudy }),
  setYearOfStudy: (yearOfStudy) => set({ yearOfStudy }),
  setPositions: (positions) => set((state) => ({ positions: [...state.positions, ...positions] })),
  setExperience: (experience) => set({ experience }),
  setDescription: (description) => set({ description }),
  setTeams: (teams) => set({ teams }),
  resetForm: () => set({
    fullName: "",
    username: "",
    email: "",
    phoneNumber: "",
    emailAddress: "",
    fieldOfStudy: "",
    yearOfStudy: 1,
    positions: [],
    experience: "",
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
