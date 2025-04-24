import { create } from "zustand";

interface FormFilledStore {
  isFullNameFilled: boolean;
  isPhoneNumberFilled: boolean;
  isUsernameFilled: boolean;
  setFullNameFilled: (status: boolean) => void;
  setPhoneNumberFilled: (status: boolean) => void;
  setUsernameFilled: (status: boolean) => void;
  isEmailFilled: boolean;
  setEmailAddressFilled: (status: boolean) => void;
}

export const useFormFilledStore = create<FormFilledStore>((set) => ({
  isFullNameFilled: false,
  isPhoneNumberFilled: false,
  isUsernameFilled: false,
  isEmailFilled: false,
  
  setFullNameFilled: (status) => set({ isFullNameFilled: status }),
  setPhoneNumberFilled: (status) => set({ isPhoneNumberFilled: status }),
  setUsernameFilled: (status) => set({ isUsernameFilled: status }),
  setEmailAddressFilled: (status) => set({ isEmailFilled: status }),
}));
