import type { Team } from "@/types/team";
import type { TeamsApiResponse } from "@/types/teamsApiResponse";

export async function getPublicTeams(): Promise<Team[]> {
  const res = await fetch(
    "https://lifesupport.orbitntnu.com/api/trpc/teams.getPublicTeamPageInfo"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch teams");
  }

  const raw: unknown = await res.json();

  if (
    typeof raw === "object" &&
    raw !== null &&
    "result" in raw
  ) {
    const data = raw as TeamsApiResponse;
    const teams = data.result?.data?.json;

    if (Array.isArray(teams)) {
      return teams;
    }
  }

  return [];
}