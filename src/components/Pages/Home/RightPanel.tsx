"use client";

import { motion } from "framer-motion";
import type { Team } from "@/types/team";
import { TeamBgImage } from "@/components/Pages/Home/TeamBgImage";

interface RightPanelProps {
  team: Team | null;
  accentColor: string;
}

export function RightPanel({ team, accentColor }: RightPanelProps) {
  return (
    <div className="flex-1 self-start sticky top-24 min-h-[350px] lg:min-h-[500px] max-h-[calc(100vh-7rem)] overflow-hidden rounded-lg">

      <div className="absolute inset-0">
        {team ? (
          <TeamBgImage key={team.teamName} teamName={team.teamName} />
        ) : (
          <img
            src="/shared/social/GroupShotOrbit.jpg"
            alt="Orbit NTNU"
            className="absolute inset-0 w-full h-full object-cover object-top opacity-30"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-charcoal)] via-transparent to-[var(--color-charcoal)]" />
      </div>

      <div className="absolute inset-0 bg-[var(--color-charcoal)]/30" />

      <div className="absolute inset-0 flex items-center px-6 lg:px-14">
        {team ? (
          <motion.div
            key={team.teamID}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col lg:flex-row w-full items-start gap-3 lg:gap-10"
          >
            <div className="flex-1 min-w-0">
              <h2
                className="font-extralight leading-[0.88] tracking-[-0.02em] text-[var(--color-cloud-white)]"
                style={{ fontSize: "clamp(1.8rem, 7vw, 7rem)" }}
              >
                {team.teamName.split(" ").map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h2>
            </div>

            <div className="hidden lg:block h-24 w-px bg-white/10 flex-shrink-0 mt-1" />

            <div className="w-full lg:w-64 xl:w-72 flex-shrink-0 lg:mt-1">
              <span
                className="block text-[9px] tracking-[0.45em] mb-3"
                style={{ color: accentColor }}
              >
                {team.group.toUpperCase()}
              </span>
              <div className="mb-4 h-px w-6" style={{ backgroundColor: accentColor }} />
              {team.description && (
                <p className="text-sm leading-relaxed text-[var(--color-charcoal-light)]/80">
                  {team.description}
                </p>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="overview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col lg:flex-row w-full items-start gap-3 lg:gap-10"
          >
            <div className="flex-1 min-w-0">
              <h2
                className="font-extralight leading-[0.88] tracking-[-0.02em] text-[var(--color-cloud-white)]"
                style={{ fontSize: "clamp(1.8rem, 7vw, 7rem)" }}
              >
                <span className="block">Orbit</span>
                <span className="block">Teams</span>
              </h2>
            </div>

            <div className="hidden lg:block h-24 w-px bg-white/10 flex-shrink-0 mt-1" />

            <div className="w-full lg:w-64 xl:w-72 flex-shrink-0 lg:mt-1">
              <p className="text-sm leading-relaxed text-[var(--color-charcoal-light)]/50">
                Orbit NTNU is built by teams spanning technical engineering, administration, and operations. Select a group to explore what each team works on.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
