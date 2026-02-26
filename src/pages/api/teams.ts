// src/pages/api/teams.ts

import type { NextApiRequest, NextApiResponse } from "next";
import type { Team } from "@/types/team";

type TeamsApiResponse = {
  result?: {
    data?: {
      json?: Team[];
    };
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Team[]>
) {
  try {
    const response = await fetch(
      "https://lifesupport.orbitntnu.com/api/trpc/teams.getPublicTeamPageInfo"
    );

    if (!response.ok) {
      return res.status(500).json([]);
    }

    const raw: unknown = await response.json();

    let teams: Team[] = [];

    if (
      typeof raw === "object" &&
      raw !== null &&
      "result" in raw
    ) {
      const data = raw as TeamsApiResponse;
      const extracted = data.result?.data?.json;

      if (Array.isArray(extracted)) {
        teams = extracted;
      }
    }

    return res.status(200).json(teams);
  } catch (error) {
    console.error("API route error:", error);
    return res.status(500).json([]);
  }
}