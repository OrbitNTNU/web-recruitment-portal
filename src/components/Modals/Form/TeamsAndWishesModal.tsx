"use client";

import { motion, Reorder } from "framer-motion";
import { useEffect, useState } from "react";
import { useFormStore, useSessionStorageSync } from "@/stores/useFormStore";
import type { Team } from "@/types/team";
import { getPublicTeams } from "@/api/teams";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function TeamsAndWishesModal() {
  const { teams, setTeams } = useFormStore();
  useSessionStorageSync();

  const [availableTeams, setAvailableTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const teams = await getPublicTeams();
        setAvailableTeams(teams);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    void load();
  }, []);

  const toggleTeam = (team: Team) => {
    const isSelected = teams.some((t) => t.teamID === team.teamID);

    if (isSelected) {
      const updated = teams.filter((t) => t.teamID !== team.teamID);
      setTeams(updated);
    } else {
      if (teams.length >= 3) return;
      setTeams([...teams, team]);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-180px)] items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-5xl space-y-12"
      >
        <div className="text-center space-y-3">
          <h1 className="text-[var(--color-strong)]">
            Choose & Rank Your Teams
          </h1>
          <p className="text-[var(--color-muted)]">
            Select up to 3 teams and drag to rank them (1 = highest priority)
          </p>
        </div>

        {teams.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-center text-sm text-[var(--color-muted)]">
              Your Selected Teams (Drag to reorder)
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
                  className="flex items-center justify-between rounded-xl bg-[var(--color-night-sky)] border border-[var(--color-berry-blast)]/40 px-5 py-4 cursor-grab active:cursor-grabbing"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[var(--color-berry-blast)] font-bold">
                      {index + 1}
                    </span>
                    <span>{team.teamName}</span>
                  </div>

                  <button
                    onClick={() =>
                      setTeams(
                        teams.filter((t) => t.teamID !== team.teamID)
                      )
                    }
                    className="text-red-400 text-sm hover:opacity-70"
                  >
                    Remove
                  </button>
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </div>
        )}

        {loading ? (
          <div className="text-center text-[var(--color-muted)]">
            Loading teams...
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
          >
            {availableTeams.map((team) => {
              const isSelected = teams.some(
                (t) => t.teamID === team.teamID
              );

              const isDisabled =
                !isSelected && teams.length >= 3;

              return (
                <motion.button
                  type="button"
                  key={team.teamID}
                  variants={item}
                  onClick={() => toggleTeam(team)}
                  disabled={isDisabled}
                  className={`
                    rounded-xl border-2 px-5 py-6 text-sm font-medium transition-all
                    ${isSelected
                      ? "border-[var(--color-berry-blast)] bg-[var(--color-berry-blast)]/10 text-[var(--color-berry-blast)]"
                      : isDisabled
                        ? "opacity-40 cursor-not-allowed border-[var(--color-slate)]/20"
                        : "border-[var(--color-slate)]/30 bg-[var(--color-night-sky)] hover:border-[var(--color-berry-blast)]/50"
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