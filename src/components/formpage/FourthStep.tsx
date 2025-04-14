import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { Team } from "@/types/teams";
import { generateGradientColors } from "src/utilities/gradientColors";
import { useStepStore } from "@/stores/useStepStore";
import { useFormStore,  useSessionStorageSync} from "@/stores/useFormStore";

export default function FourthStep() {
  const { nextStep, prevStep } = useStepStore();
  const [selectedTeam, setSelectedTeam] = useState<Team>("web-team");
  const listRef = useRef<HTMLDivElement>(null);
  const {positions, setPositions, teams, setTeams} = useFormStore();
  const infiniteTeams = [...teams, ...teams, ...teams];
  const numTeams = teams.length;
  const startOffset = numTeams;
  const [centerIndex, setCenterIndex] = useState(startOffset);
  const [isCenterClicked, setIsCenterClicked] = useState(false);

  useSessionStorageSync();

  useEffect(() => {
    const selectedIndex = infiniteTeams.indexOf(selectedTeam, startOffset);
    if (selectedIndex !== -1) {
      setCenterIndex(selectedIndex);
    }
  }, [selectedTeam]);

  const gradientColors = generateGradientColors(
    infiniteTeams.length,
    centerIndex,
  );

  useEffect(() => {
    if (listRef.current) {
      const centerItem = listRef.current.children[
        centerIndex
      ] as HTMLDivElement;
      listRef.current.scrollTop =
        centerItem.offsetTop -
        listRef.current.clientHeight / 2 +
        centerItem.clientHeight / 2;
    }
  }, [centerIndex]);

  useEffect(() => {
    if (centerIndex < numTeams) {
      setCenterIndex(centerIndex + numTeams);
    } else if (centerIndex >= numTeams * 2) {
      setCenterIndex(centerIndex - numTeams);
    }
  }, [centerIndex]);

  useEffect(() => {
    const handleWheelScroll = (event: WheelEvent) => {
      if (listRef.current) {
        listRef.current.scrollTop += event.deltaY * 4;
        event.preventDefault();
      }
    };
  
    const currentList = listRef.current;
    if (currentList) {
      currentList.addEventListener("wheel", handleWheelScroll);
    }
  
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp") {
        setCenterIndex((prev) => Math.max(prev - 1, 0));
        setIsCenterClicked(true);
      } else if (event.key === "ArrowDown") {
        setCenterIndex((prev) => Math.min(prev + 1, infiniteTeams.length - 1));
        setIsCenterClicked(true);
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      if (currentList) {
        currentList.removeEventListener("wheel", handleWheelScroll);
      }
      window.removeEventListener("keydown", handleKeyDown)
    };
  }, []);


  useEffect(() => {
    if (listRef.current) {
      const centerItem = listRef.current.children[
        centerIndex
      ] as HTMLDivElement;
      listRef.current.scrollTo({
        top:
          centerItem.offsetTop -
          listRef.current.clientHeight / 2 +
          centerItem.clientHeight / 2,
        behavior: "smooth",
      });
    }
  }, [centerIndex]);

  const handleTeamClick = (team: Team) => {
    const selectedIndex = infiniteTeams.indexOf(team, startOffset);
  
    if (selectedIndex !== centerIndex) {
      setCenterIndex(selectedIndex);
      setIsCenterClicked(false);
    } else {
      if (!isCenterClicked) {
        setPositions(teams.filter((t) => t === team))
        const updatedTeams = teams.filter((t) => t !== team);
        setTeams(updatedTeams);
        setIsCenterClicked(true); 
      }
    }
  };
  

  return (
    <article className="flex h-full flex-row items-center justify-center gap-4 text-white">
      <div
        ref={listRef}
        className="flex h-full w-2/4 flex-col space-y-4 overflow-hidden whitespace-nowrap p-4"
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
              className="w-full cursor-pointer rounded-md p-4 text-center text-7xl font-bold transition-all duration-300"
              style={{
                color: gradientColors[colorIndex],
                opacity,
              }}
              onClick={() => handleTeamClick(team)}
            >
              {team.replace(/-/g, " ")}
            </motion.div>
          );
        })}
      </div>
      <input type="hidden" name="selectedTeam" value={selectedTeam} />
      <div className="mt-6 flex space-x-4">
        <motion.div>
        <p>
          {positions.map((position, index) => (
            <span key={index} style={{ display: 'block' }}>{position}</span>
          ))}
        </p>
        </motion.div>
        <motion.button
          type="button"
          onClick={prevStep}
          whileHover={{ scale: 1.05, y: 0 }}
          whileTap={{ scale: 0.9 }}
          className="rounded-lg border border-gray-500 bg-gray-700 px-5 py-2 text-white shadow-md transition-all hover:bg-gray-600"
        >
          Back
        </motion.button>
        <motion.button
          type="button"
          onClick={nextStep}
          whileHover={{ scale: 1.05, y: 0 }}
          whileTap={{ scale: 0.9 }}
          className="rounded-lg border border-blue-400 bg-blue-500 px-6 py-2 text-white shadow-md transition-all hover:bg-blue-600"
        >
          Next
        </motion.button>
      </div>
    </article>
  );
}
