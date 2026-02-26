import type { Team } from "@/types/team";

export type TeamsApiResponse = {
  result?: {
    data?: {
      json?: Team[];
    };
  };
};