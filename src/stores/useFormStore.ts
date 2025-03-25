import { create } from "zustand";

interface FormValues {
  fullName: string;
  username: string;
  email: string;
  phoneNumber: number;
  emailAddress: string;
  fieldOfStudy: string;
  yearOfStudy: number;
  positions: string[];
  setFullName: (fullName: string) => void;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
  setPhoneNumber: (phoneNumber: number) => void;
  setEmailAddress: (emailAddress: string) => void;
  setFieldOfStudy: (fieldOfStudy: string) => void;
  setYearOfStudy: (yearOfStudy: number) => void;
  setPositions: (position: string) => void; 
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
  setFullName: (fullName) => set({ fullName }),
  setUsername: (username) => set({ username }),
  setEmail: (email) => set({ email }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  setEmailAddress: (emailAddress) => set({ emailAddress }),
  setFieldOfStudy: (fieldOfStudy) => set({ fieldOfStudy }),
  setYearOfStudy: (yearOfStudy) => set({ yearOfStudy }),
  setPositions: (position) => 
    set((state) => ({ positions: [...state.positions, position] })),
}));
