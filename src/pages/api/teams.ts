import type { NextApiRequest, NextApiResponse } from "next";
import type { Team } from "@/types/team";

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

    const data = await response.json();
    const teams = data?.result?.data?.json ?? [];

    return res.status(200).json(teams);
  } catch (error) {
    console.error("API route error:", error);
    return res.status(500).json([]);
  }
}