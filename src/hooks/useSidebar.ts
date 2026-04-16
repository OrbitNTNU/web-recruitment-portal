import { useMemo, useState } from "react";
import type { Team } from "@/types/team";
import { groupByField, sortedGroupKeys } from "@/utils/teams";

export function useSidebar(teams: Team[]) {
  const grouped = useMemo(() => groupByField(teams), [teams]);
  const groups  = useMemo(() => sortedGroupKeys(grouped), [grouped]);

  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const toggle = (group: string) =>
    setOpenGroup((prev) => (prev === group ? null : group));

  return { grouped, groups, openGroup, toggle };
}
