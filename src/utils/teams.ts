import type { Team } from "@/types/team";
import { ACCENT_COLORS } from "@/constants/teamsColor";

export function getAccentColor(groupIndex: number): string {
  return ACCENT_COLORS[groupIndex % ACCENT_COLORS.length]!;
}

export function groupByField(teams: Team[]): Map<string, Team[]> {
  const map = new Map<string, Team[]>();
  for (const team of teams) {
    const key = team.group?.trim() || "General";
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(team);
  }
  return map;
}

export function sortedGroupKeys(grouped: Map<string, Team[]>): string[] {
  return [...grouped.keys()].sort((a, b) => {
    if (a.toLowerCase().includes("board")) return -1;
    if (b.toLowerCase().includes("board")) return 1;
    return a.localeCompare(b);
  });
}

export function toImageSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}
