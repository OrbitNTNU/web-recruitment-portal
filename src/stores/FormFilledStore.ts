import { create } from "zustand";

interface FormFilledStore {
  isFullNameFilled: boolean;
  isPhoneNumberFilled: boolean;
  isUsernameFilled: boolean;
  setFullNameFilled: (status: boolean) => void;
  setPhoneNumberFilled: (status: boolean) => void;
  setUsernameFilled: (status: boolean) => void;
}

export const useFormFilledStore = create<FormFilledStore>((set) => ({
  isFullNameFilled: false,
  isPhoneNumberFilled: false,
  isUsernameFilled: false,
  
  setFullNameFilled: (status) => set({ isFullNameFilled: status }),
  setPhoneNumberFilled: (status) => set({ isPhoneNumberFilled: status }),
  setUsernameFilled: (status) => set({ isUsernameFilled: status }),
}));
