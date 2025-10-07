export interface ApplicationRequestBody {
  name: string;
  personalEmail: string;
  ntnuUsername: string;
  phoneNumber: string;
  fieldOfStudy: string;
  yearOfStudy: number;
  experience: string;
  description: string;
  submissionDate: string;
  saveApplication: boolean;
}