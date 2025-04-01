import { type position } from "./position";

export interface ApplicationValues {
  fullName: string;
  username: string;
  email: string;
  phoneNumber: string;
  emailAddress: string;
  fieldOfStudy: string;
  yearOfStudy: number;
  position: position[];
  previousExperience: string;
  personalInfo: string;
  submissionDate: string;
}
