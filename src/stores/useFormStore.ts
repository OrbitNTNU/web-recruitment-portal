import { create } from "zustand";
import { useEffect } from "react";
import type { Team } from "@/types/teams";

interface FormValues {
  fullName: string;
  username: string;
  email: string;
  phoneNumber: number;
  emailAddress: string;
  fieldOfStudy: string;
  yearOfStudy: number;
  positions: Team[];
  comments: string;
  teams: Team[];
  setFullName: (fullName: string) => void;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
  setPhoneNumber: (phoneNumber: number) => void;
  setEmailAddress: (emailAddress: string) => void;
  setFieldOfStudy: (fieldOfStudy: string) => void;
  setYearOfStudy: (yearOfStudy: number) => void;
  setPositions: (positions: Team[]) => void;
  setComments: (comments: string) => void;
  setTeams: (teams: Team[]) => void;
  resetForm: () => void;
}

const loadState = (): Partial<FormValues> => {
  if (typeof window === "undefined") return {}; // Doing this to make sure there are no SSR issues within Next.js

  const savedState = sessionStorage.getItem("formState");
  return savedState ? JSON.parse(savedState) : {};
};

export const useFormStore = create<FormValues>((set) => ({
  fullName: "",
  username: "",
  email: "",
  phoneNumber: 0,
  emailAddress: "",
  fieldOfStudy: "",
  yearOfStudy: 1,
  positions: [],
  comments: "",
  teams: [
    "electronics",
    "dev-ops",
    "web-team",
    "ai-research",
    "cloud-computing",
    "cyber-security",
    "data-science",
    "game-development",
    "iot",
    "mobile-development",
    "blockchain",
    "networking",
    "robotics",
    "software-engineering",
    "system-administration",
    "ui-ux-design",
    "database-management",
    "bioinformatics",
    "embedded-systems",
    "quantum-computing",
  ],
  setFullName: (fullName) => set({ fullName }),
  setUsername: (username) => set({ username }),
  setEmail: (email) => set({ email }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  setEmailAddress: (emailAddress) => set({ emailAddress }),
  setFieldOfStudy: (fieldOfStudy) => set({ fieldOfStudy }),
  setYearOfStudy: (yearOfStudy) => set({ yearOfStudy }),
  setPositions: (positions) => set((state) => ({ positions: [...state.positions, ...positions] })),
  setComments: (comments) => set({ comments }),
  setTeams: (teams) => set({ teams }),
  resetForm: () => set({
    fullName: "",
    username: "",
    email: "",
    phoneNumber: 0,
    emailAddress: "",
    fieldOfStudy: "",
    yearOfStudy: 1,
    positions: [],
    comments: "",
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
