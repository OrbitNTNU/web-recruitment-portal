"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sidebar } from "@/components/Pages/Home/Sidebar";
import { RightPanel } from "@/components/Pages/Home/RightPanel";
import { getAccentColor } from "@/utils/teams";
import { useTeamsSection } from "@/hooks/useTeamsSection";

export function TeamsSection() {
  const {
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
  } = useTeamsSection();

  if (allTeams.length === 0) return null;

  return (
    <section id="teams" className="relative bg-[var(--color-charcoal)] py-28 px-6">
      <div className="mx-auto">
        <div className="mb-10 lg:mb-16 flex items-start justify-left gap-8">
          <div className="text-left">
            <h2 className="mt-5 text-3xl font-light tracking-wide text-[var(--color-cloud-white)] md:text-4xl">
              Our Teams
            </h2>
            <p className="mt-3 mx-auto max-w-xs text-xs leading-relaxed text-[var(--color-charcoal-light)]/45">
              {allTeams.length} teams working in different areas.
            </p>
          </div>
        </div>

        {/* Mobile: nested dropdown accordion */}
        <div className="lg:hidden mb-6">

          {/* ALL TEAMS trigger row */}
          <button
            onClick={toggleDropdown}
            className="w-full flex items-center justify-between py-3 border-t border-white/10"
          >
            <span className="text-[9px] tracking-[0.4em] text-[var(--color-cloud-white)]">
              ALL TEAMS
            </span>
            <div className="flex items-center gap-3">
              <span className="text-[9px] text-[var(--color-cloud-white)]/40">
                {allTeams.length}
              </span>
              <motion.span
                animate={{ rotate: dropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-[10px] text-[var(--color-cloud-white)]/50"
              >
                ▾
              </motion.span>
            </div>
          </button>
          <div className="h-px bg-white/10" />

          {/* Groups + teams nested inside */}
          <AnimatePresence initial={false}>
            {dropdownOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                {groups.map((group, gi) => {
                  const color        = getAccentColor(gi);
                  const teamsInGroup = grouped.get(group)!;
                  const isOpen       = openGroup === group;

                  return (
                    <div key={group}>
                      {/* Group row */}
                      <button
                        onClick={() => toggleGroup(group)}
                        className="w-full flex items-center justify-between py-3 pl-3 transition-opacity"
                      >
                        <span
                          className="text-[9px] tracking-[0.4em] text-[var(--color-cloud-white)] transition-opacity duration-150"
                          style={{ opacity: isOpen ? 1 : 0.45 }}
                        >
                          {group.replace(/_/g, " ").toUpperCase()}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-[10px] text-[var(--color-cloud-white)]"
                          style={{ opacity: isOpen ? 0.7 : 0.3 }}
                        >
                          ▾
                        </motion.span>
                      </button>
                      <div
                        className="h-px transition-all duration-200"
                        style={{
                          backgroundColor: color,
                          opacity: isOpen ? 0.65 : 0.12,
                        }}
                      />

                      {/* Teams inside group */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.18, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            {teamsInGroup.map((team) => (
                              <button
                                key={team.teamID}
                                onClick={() => handleSelect(team)}
                                className="w-full flex items-center justify-between py-2.5 pl-6 border-b border-white/5 last:border-0"
                              >
                                <span className="text-sm font-light text-[var(--color-cloud-white)]/60">
                                  {team.teamName}
                                </span>
                                <div className="h-px w-4 mr-1 opacity-0" style={{ backgroundColor: color }} />
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-start">
          <Sidebar teams={allTeams} selectedTeam={selectedTeam} onSelect={handleSelect} />
          <RightPanel team={selectedTeam} accentColor={accentColor} />
        </div>
      </div>
    </section>
  );
}
