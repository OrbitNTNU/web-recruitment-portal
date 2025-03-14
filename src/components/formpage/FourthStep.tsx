import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

type Team =
  | "electronics"
  | "dev-ops"
  | "web-team"
  | "ai-research"
  | "cloud-computing"
  | "cyber-security"
  | "data-science"
  | "game-development"
  | "iot"
  | "mobile-development"
  | "blockchain"
  | "networking"
  | "robotics"
  | "software-engineering"
  | "system-administration"
  | "ui-ux-design"
  | "database-management"
  | "bioinformatics"
  | "embedded-systems"
  | "quantum-computing";

interface FourthStepProps {
  setStep: (step: number) => void;
}

export default function FourthStep({ setStep }: FourthStepProps) {
  const [selectedTeam, setSelectedTeam] = useState<Team>("web-team");
  const listRef = useRef<HTMLDivElement>(null);

  const teams: Team[] = [
    "electronics", "dev-ops", "web-team", "ai-research", "cloud-computing",
    "cyber-security", "data-science", "game-development", "iot", "mobile-development",
    "blockchain", "networking", "robotics", "software-engineering", "system-administration",
    "ui-ux-design", "database-management", "bioinformatics", "embedded-systems", "quantum-computing"
  ];

  const infiniteTeams = [...teams, ...teams, ...teams];
  const centerIndex = Math.floor(infiniteTeams.length / 3);

  useEffect(() => {
    if (listRef.current) {
      const centerItem = listRef.current.children[centerIndex] as HTMLDivElement;
      listRef.current.scrollLeft = centerItem.offsetLeft - listRef.current.clientWidth / 2 + centerItem.clientWidth / 2;
    }
  }, []);

  const handleTeamClick = (team: Team) => {
    setSelectedTeam(team);
    if (listRef.current) {
      const selectedIndex = infiniteTeams.lastIndexOf(team, centerIndex + teams.length);
      const selectedItem = listRef.current.children[selectedIndex] as HTMLDivElement;
      const scrollPosition = selectedItem.offsetLeft - listRef.current.clientWidth / 2 + selectedItem.clientWidth / 2;
      listRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" });
    }
  };

  return (
    <article className="h-full flex flex-col gap-4 justify-center items-center text-white">
      <label className="text-lg font-bold">Select a Team:</label>
      <div
        ref={listRef}
        className="flex flex-row w-3/4 p-4 overflow-hidden whitespace-nowrap space-x-4"
        style={{ scrollBehavior: "smooth" }}
      >
        {infiniteTeams.map((team, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`text-center text-lg font-bold cursor-pointer p-4 w-auto transition-all duration-300 rounded-md ${
              team === selectedTeam ? "bg-green-500 text-white shadow-lg" : "bg-gray-800 text-gray-200"
            }`}
            onClick={() => handleTeamClick(team)}
          >
            {team.replace(/-/g, " ")}
          </motion.div>
        ))}
      </div>
      <input type="hidden" name="selectedTeam" value={selectedTeam} />
      <div className="mt-4 flex gap-4">
        <button
          type="button"
          className="px-4 py-2 text-white bg-gray-500 rounded"
          onClick={() => setStep(3)}
        >
          Back
        </button>
        <button
          type="button"
          className="px-4 py-2 text-white bg-blue-500 rounded"
          onClick={() => setStep(5)}
        >
          Next
        </button>
      </div>
    </article>
  );
}
