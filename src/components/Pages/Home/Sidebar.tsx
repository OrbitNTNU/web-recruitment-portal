"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Team } from "@/types/team";
import { getAccentColor } from "@/utils/teams";
import { useSidebar } from "@/hooks/useSidebar";

interface Props {
  teams: Team[];
  selectedTeam: Team | null;
  onSelect: (t: Team) => void;
}

export function Sidebar({ teams, selectedTeam, onSelect }: Props) {
  const { grouped, groups, openGroup, toggle } = useSidebar(teams);

  return (
    <aside className="hidden lg:block w-48 shrink-0 pr-8 self-start sticky top-24">
      {groups.map((group, gi) => {
        const color        = getAccentColor(gi);
        const teamsInGroup = grouped.get(group)!;
        const isOpen       = openGroup === group;
        const hasSelected  = teamsInGroup.some((t) => t.teamID === selectedTeam?.teamID);
        const active       = isOpen || hasSelected;

        return (
          <div key={group} className={gi > 0 ? "mt-5" : ""}>
            <button
              onClick={() => toggle(group)}
              className="w-full flex items-center justify-between py-1.5 transition-opacity duration-150 hover:opacity-60"
            >
              <span
                className="text-[8px] tracking-[0.4em] transition-opacity duration-200 text-[var(--color-cloud-white)]"
                style={{ opacity: active ? 1 : 0.75 }}
              >
                {group.replace(/_/g, " ").toUpperCase()}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-[9px] leading-none text-[var(--color-cloud-white)]"
                style={{ opacity: active ? 0.8 : 0.6 }}
              >
                ▾
              </motion.span>
            </button>

            <div
              className="h-px mb-1 transition-all duration-200"
              style={{
                backgroundColor: color,
                opacity: active ? 0.85 : 0.2,
                boxShadow: active ? `0 0 6px ${color}55` : "none",
              }}
            />

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  {teamsInGroup.map((team) => {
                    const isSelected = selectedTeam?.teamID === team.teamID;
                    return (
                      <button
                        key={team.teamID}
                        onClick={() => onSelect(team)}
                        style={{ borderLeftColor: isSelected ? color : "transparent" }}
                        className={`w-full border-l-2 py-2 pl-3 text-left text-sm transition-opacity duration-150 ${
                          isSelected
                            ? "font-semibold text-[var(--color-cloud-white)]"
                            : "font-medium text-[var(--color-cloud-white)]/75 hover:opacity-50"
                        }`}
                      >
                        {team.teamName}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </aside>
  );
}
