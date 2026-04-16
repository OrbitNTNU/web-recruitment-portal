import { useState, useMemo } from "react";
import { useFormStore } from "@/stores/useFormStore";
import type { Team } from "@/types/team";
import { groupByField, sortedGroupKeys, getAccentColor } from "@/utils/teams";

export function useTeamsSection() {
  const { allTeams } = useFormStore();
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const grouped = useMemo(() => groupByField(allTeams), [allTeams]);
  const groups  = useMemo(() => sortedGroupKeys(grouped), [grouped]);

  const accentColor = useMemo(() => {
    if (!selectedTeam) return getAccentColor(0);
    const gi = groups.indexOf(selectedTeam.group?.trim() || "General");
    return getAccentColor(Math.max(0, gi));
  }, [selectedTeam, groups]);

  const handleSelect = (team: Team) => {
    setSelectedTeam((prev) => (prev?.teamID === team.teamID ? null : team));
    setDropdownOpen(false);
    setOpenGroup(null);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => {
      if (prev) setOpenGroup(null);
      return !prev;
    });
  };

  const toggleGroup = (group: string) =>
    setOpenGroup((prev) => (prev === group ? null : group));

  return {
    allTeams,
    selectedTeam,
    dropdownOpen,
    openGroup,
    grouped,
    groups,
    accentColor,
    handleSelect,
    toggleDropdown,
    toggleGroup,
  };
}
