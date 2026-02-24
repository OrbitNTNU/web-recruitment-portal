import {type Position} from "@/types/position";

export type Application = {
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

export type Props = {
  applications: Application[];
}
export type PropsWithPositions = {
  applications: ApplicationWithPositions[];
}

export type ApplicationWithPositions = {
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

export type Member = {
  name: string;
}

export type Comment = {
  comment: string
}