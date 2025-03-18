import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { Team } from "@/types/teams";
import {generateGradientColors} from "src/utilities/gradientColors"
import { useFormStore } from "@/stores/useFormStore";

export default function FourthStep() {
  const { nextStep, prevStep } = useFormStore();
  const [selectedTeam, setSelectedTeam] = useState<Team>("web-team");
  const listRef = useRef<HTMLDivElement>(null);

  const teams: Team[] = [
    "electronics",
    "dev-ops",
    "web-team",
    "ai-research",
    "cloud-computing",
    "cyber-security",
    "data-science",
    "game-development",
    "iot",
    "mobile-development",
    "blockchain",
    "networking",
    "robotics",
    "software-engineering",
    "system-administration",
    "ui-ux-design",
    "database-management",
    "bioinformatics",
    "embedded-systems",
    "quantum-computing",
  ];

  const infiniteTeams = [...teams, ...teams, ...teams];
  const numTeams = teams.length;
  const startOffset = numTeams;
  const [centerIndex, setCenterIndex] = useState(startOffset);

  useEffect(() => {
    const selectedIndex = infiniteTeams.indexOf(selectedTeam, startOffset);
    if (selectedIndex !== -1) {
      setCenterIndex(selectedIndex);
    }
  }, [selectedTeam]);

  const gradientColors = generateGradientColors(infiniteTeams.length, centerIndex);

  useEffect(() => {
    if (listRef.current) {
      const centerItem = listRef.current.children[centerIndex] as HTMLDivElement;
      listRef.current.scrollTop =
        centerItem.offsetTop - listRef.current.clientHeight / 2 + centerItem.clientHeight / 2;
    }
  }, [centerIndex]);

  const handleTeamClick = (team: Team) => {
    setSelectedTeam(team);
    if (listRef.current) {
      const selectedIndex = infiniteTeams.indexOf(team, startOffset);
      setCenterIndex(selectedIndex);
    }
  };

  useEffect(() => {
    if (centerIndex < numTeams) {
      setCenterIndex(centerIndex + numTeams);
    } else if (centerIndex >= numTeams * 2) {
      setCenterIndex(centerIndex - numTeams);
    }
  }, [centerIndex]);

  return (
    <article className="h-full flex flex-row gap-4 justify-center items-center text-white">
      <div
        ref={listRef}
        className="flex flex-col w-2/4 h-full p-4 overflow-hidden whitespace-nowrap space-y-4"
        style={{ scrollBehavior: "smooth" }}
      >
        {infiniteTeams.map((team, index) => {
          const colorIndex = index % gradientColors.length;

          const distance = Math.abs(index - centerIndex);
          const maxDistance = numTeams / 16;
          const opacity = Math.max(1 - distance / maxDistance, 0.1);

          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-center text-7xl font-bold cursor-pointer p-4 w-full transition-all duration-300 rounded-md"
              style={{
                color: gradientColors[colorIndex],
                opacity
              }}
              onClick={() => handleTeamClick(team)}
            >
              {team.replace(/-/g, " ")}
            </motion.div>
          );
        })}

      </div>
      <input type="hidden" name="selectedTeam" value={selectedTeam} />
      <div className="mt-4 flex ml-40 gap-4">
        <button
          type="button"
          className="px-4 py-2 text-white bg-gray-500 rounded"
          onClick={() => prevStep()}
        >
          Back
        </button>
        <button
          type="button"
          className="px-4 py-2 text-white bg-blue-500 rounded"
          onClick={() => nextStep()}
        >
          Next
        </button>
      </div>
    </article>
  );
}
