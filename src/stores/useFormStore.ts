import { create } from "zustand";
import type { Team } from "@/types/teams";

interface FormValues {
  fullName: string;
  username: string;
  email: string;
  phoneNumber: number;
  emailAddress: string;
  fieldOfStudy: string;
  yearOfStudy: number;
  positions: string[];
  comments: string;
  setFullName: (fullName: string) => void;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
  setPhoneNumber: (phoneNumber: number) => void;
  setEmailAddress: (emailAddress: string) => void;
  setFieldOfStudy: (fieldOfStudy: string) => void;
  setYearOfStudy: (yearOfStudy: number) => void;
  setPositions: (position: Team[]) => void; 
  setComments: (comments: string) => void;
}

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
  setFullName: (fullName) => set({ fullName }),
  setUsername: (username) => set({ username }),
  setEmail: (email) => set({ email }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  setEmailAddress: (emailAddress) => set({ emailAddress }),
  setFieldOfStudy: (fieldOfStudy) => set({ fieldOfStudy }),
  setYearOfStudy: (yearOfStudy) => set({ yearOfStudy }),
  setPositions: (positions: Team[]) => 
    set((state) => ({ positions: [...state.positions, ...positions] })),
  setComments: (comments) => set({ comments }),
}));
