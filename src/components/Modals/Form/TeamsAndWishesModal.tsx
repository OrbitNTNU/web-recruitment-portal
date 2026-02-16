import { motion } from "framer-motion";
import { useFormStore, useSessionStorageSync } from "@/stores/useFormStore";
import { Team } from "@/consts/teams";

const AVAILABLE_TEAMS: Team[] = Object.values(Team);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function TeamsAndWishesModal() {
  const { teams, setTeams } = useFormStore();
  useSessionStorageSync();

  const toggleTeam = (team: Team) => {
    setTeams(
      teams.includes(team) 
        ? teams.filter((t) => t !== team)
        : [...teams, team]
    );
  };

  return (
    <div className="flex min-h-[calc(100vh-180px)] items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl space-y-12"
      >
        <div className="space-y-3 text-center">
          <h1 className="text-[var(--color-strong)]">
            Choose Your Teams
          </h1>
          <p className="text-[var(--color-muted)]">
            Select one or more teams you're interested in
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          {AVAILABLE_TEAMS.map((team) => {
            const isSelected = teams.includes(team);
            const teamLabel = team.replace(/-/g, " ");

            return (
              <motion.button
                key={team}
                type="button"
                variants={item}
                onClick={() => toggleTeam(team)}
                className={`
                  group relative rounded-xl border-2 px-5 py-6 text-sm font-medium
                  transition-all duration-200
                  ${isSelected
                    ? "border-[var(--color-berry-blast)] bg-[var(--color-berry-blast)]/10 text-[var(--color-berry-blast)]"
                    : "border-[var(--color-slate)]/30 bg-[var(--color-night-sky)] text-[var(--color-cloud-white)] hover:border-[var(--color-berry-blast)]/50"
                  }
                `}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`
                  absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center 
                  rounded-full border-2 transition-all duration-200
                  ${isSelected
                    ? "border-[var(--color-berry-blast)] bg-[var(--color-berry-blast)] scale-100"
                    : "border-transparent bg-transparent scale-0"
                  }
                `}>
                  <svg
                    className="h-3.5 w-3.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <span className="capitalize">{teamLabel}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {teams.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-[var(--color-muted)]"
          >
            {teams.length} team{teams.length !== 1 ? "s" : ""} selected
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}