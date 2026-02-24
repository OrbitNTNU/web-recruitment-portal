export interface FormValues {
  name: string;
  personalEmail: string;
  ntnuUsername: string;
  phoneNumber: string;
  fieldOfStudy: string;
  yearOfStudy: number;
  experience: string;
  comments: string;
  submissionDate: string;
  saveApplication: boolean;
  setName: (name: string) => void,
  setPersonalEmail: (email: string) => void,
  setNtnuUsername: (ntnuUsername: string) => void,
  setPhoneNumber: (phoneNumber: number) => void,
  setFieldOfStudy: (fieldOfStudy: string) => void,
  setYearOfStudy: (yearOfStudy: number) => void,
  setPositions: (position: string) => void,
  setComments: (comments: string) => void,
  setaExperiene: (experience: string) => void,
  setSubmissionDate: (submissionDate: string) => void,
  setSaveApplication: (saveApplication: boolean) => void
}
