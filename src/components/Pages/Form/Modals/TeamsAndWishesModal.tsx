"use client";

import { motion, Reorder } from "framer-motion";
import { useFormStore, useSessionStorageSync } from "@/stores/useFormStore";
import type { Team } from "@/types/team";
import InfoIcon from "@/components/Pages/Form/InfoIcon";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.04 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function TeamsAndWishesModal() {
    const { teams, setTeams, allTeams } = useFormStore();
    useSessionStorageSync();

    const loading = allTeams.length === 0;

    const toggleTeam = (team: Team) => {
      const exists = teams.some((t) => t.teamID === team.teamID);

      if (exists) {
        setTeams(teams.filter((t) => t.teamID !== team.teamID));
        return;
      }

      if (teams.length < 3) {
        setTeams([...teams, team]);
      }
    };

    return (
      <div className="flex justify-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-5xl space-y-10"
        >
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <h1 className="text-xl sm:text-2xl font-semibold text-[var(--color-cloud-white)]">
                Choose & Rank Your Teams
              </h1>

              <InfoIcon text="Select up to three teams you are interested in. Drag to rank them by preference." />
            </div>

            <p className="text-sm text-[var(--color-charcoal-light)]">
              Select up to 3 teams and drag them to rank your priorities.
            </p>

            <div className="mx-auto max-w-md text-xs text-[var(--color-charcoal-light)] border border-[var(--color-dark-gray)] rounded-lg p-4 bg-[var(--color-charcoal)]/70 leading-relaxed">
              Ranking helps us understand which teams you are most excited about.
              We try to respect your preferences while balancing team needs.
            </div>
          </div>

          {teams.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-center text-xs sm:text-sm text-[var(--color-charcoal-light)]">
                Drag to reorder your selections
              </h2>

              <Reorder.Group
                axis="y"
                values={teams}
                onReorder={(newOrder) => setTeams(newOrder)}
                className="space-y-3"
              >
                {teams.map((team, index) => (
                  <Reorder.Item
                    key={team.teamID}
                    value={team}
                    className="flex items-center justify-between rounded-lg border border-[var(--color-dark-gray)] bg-[var(--color-charcoal)]/80 px-5 py-4 backdrop-blur-sm cursor-grab active:cursor-grabbing"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-[var(--color-cloud-white)]">
                        {index + 1}.
                      </span>

                      <span className="text-sm text-[var(--color-cloud-white)]">
                        {team.teamName}
                      </span>

                    </div>

                    <button
                      onClick={() =>
                        setTeams(teams.filter((t) => t.teamID !== team.teamID))
                      }
                      className="text-xs text-[var(--color-charcoal-light)] hover:text-[var(--color-cloud-white)] transition"
                    >
                      Remove
                    </button>
                  </Reorder.Item>
                ))}
              </Reorder.Group>
            </div>
          )}

          {loading ? (
            <div className="text-center text-sm text-[var(--color-charcoal-light)]">
              Loading teams...
            </div>
          ) : (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >

              {allTeams.map((team) => {
                const isSelected = teams.some(
                  (t) => t.teamID === team.teamID
                );

                const disabled = !isSelected && teams.length >= 3;

                return (
                  <motion.button
                    key={team.teamID}
                    type="button"
                    variants={item}
                    disabled={disabled}
                    onClick={() => toggleTeam(team)}
                    whileHover={!disabled ? { scale: 1.03 } : {}}
                    className={`
                    rounded-xl border px-4 py-8 text-sm font-medium transition-all
                    ${isSelected
                        ? "border-[var(--color-cloud-white)] bg-[var(--color-dark-gray)] text-[var(--color-cloud-white)]"
                        : disabled
                          ? "opacity-30 cursor-not-allowed border-[var(--color-dark-gray)]"
                          : "border-[var(--color-dark-gray)] bg-[var(--color-charcoal)] text-[var(--color-cloud-white)] hover:border-[var(--color-cloud-white)]"
                      }
                  `}
                  >
                    {team.teamName}
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </motion.div>
      </div>
    );
  }