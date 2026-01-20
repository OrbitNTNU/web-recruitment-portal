import {type Position} from "@/types/position";

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
export interface PropsWithPositions {
  applications: ApplicationWithPositions[];
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

export interface Member {
  name: string;
}

export interface Comment {
  comment: string
}