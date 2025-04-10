export interface FormValues {
  fullName: string;
  username: string;
  email: string;
  phoneNumber: string;
  emailAddress: string;
  fieldOfStudy: string;
  yearOfStudy: number;
  positions: string[];
  setFullName: (fullName: string) => void,
  setUsername: (username: string) => void,
  setEmail: (email: string) => void,
  setPhoneNumber: (phoneNumber: number) => void,
  setEmailAddress: (emailAddress: string) => void,
  setFieldOfStudy: (fieldOfStudy: string) => void,
  setYearOfStudy: (yearOfStudy: number) => void,
  setPositions: (position: string) => void;
}
