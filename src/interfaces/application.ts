import {Position} from "@/interfaces/position";

export interface Application {
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

export interface Props {
  applications: Application[];
}


export interface ApplicationWithPositions {
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
  positions: Position[];

}

export interface Member{
  name: string;
}