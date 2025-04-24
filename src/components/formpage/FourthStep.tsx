import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { Team } from "@/types/teams";
import { generateGradientColors } from "src/utilities/gradientColors";
import { useStepStore } from "@/stores/useStepStore";
import { useFormStore, useSessionStorageSync } from "@/stores/useFormStore";
import Button from "../shared/NavButton";
import StepSlider from "../shared/StepSlider";

export default function FourthStep() {
  const { nextStep, prevStep } = useStepStore();
  const [selectedTeam, setSelectedTeam] = useState<Team>("web-team");
  const listRef = useRef<HTMLDivElement>(null);
  const { positions, setPositions, teams, setTeams } = useFormStore();
  const infiniteTeams = [...teams, ...teams, ...teams];
  const numTeams = teams.length;
  const startOffset = numTeams;
  const [centerIndex, setCenterIndex] = useState(startOffset);
  const [isCenterClicked, setIsCenterClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useSessionStorageSync();

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const selectedIndex = infiniteTeams.indexOf(selectedTeam, startOffset);
    if (selectedIndex !== -1) {
      setCenterIndex(selectedIndex);
    }
  }, [selectedTeam, infiniteTeams, startOffset]);

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
  }, [centerIndex, numTeams]);

  useEffect(() => {
    const handleWheelScroll = (event: WheelEvent) => {
      if (listRef.current && !isMobile) {
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
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobile, infiniteTeams.length]);

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
        setPositions(teams.filter((t) => t === team));
        const updatedTeams = teams.filter((t) => t !== team);
        setTeams(updatedTeams);
        setIsCenterClicked(true);
      }
    }
  };

  //This is to handle touch event on a phone, not fully tested
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.targetTouches[0];
    if (touch) {
      setTouchStart(touch.clientY);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.targetTouches[0];
    if (touch) {
      setTouchEnd(touch.clientY);
    }
  };

  const handleTouchEnd = () => {
    if (touchStart === 0 || touchEnd === 0) return;
    
    if (touchStart - touchEnd > 50) {
      setCenterIndex((prev) => Math.min(prev + 1, infiniteTeams.length - 1));
    } else if (touchEnd - touchStart > 50) {
      setCenterIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <article className="flex h-full flex-col items-center justify-center gap-4 text-white md:flex-row">
      <StepSlider />
      <div
        ref={listRef}
        className="flex h-3/4 w-full flex-col space-y-4 overflow-hidden whitespace-nowrap p-4 md:h-full md:w-2/4"
        style={{ scrollBehavior: "smooth" }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {infiniteTeams.map((team, index) => {
          const colorIndex = index % gradientColors.length;

          const distance = Math.abs(index - centerIndex);
          const maxDistance = numTeams / 16;
          const opacity = Math.max(1 - distance / maxDistance, 0.1);
          const scale = isMobile 
            ? 1 - Math.min(distance / 10, 0.5) 
            : 1;

          return (
            <motion.div
              key={index}
              whileHover={!isMobile ? { scale: 1.05 } : {}}
              whileTap={{ scale: 0.95 }}
              className="w-full cursor-pointer rounded-md p-4 text-center text-4xl font-bold transition-all duration-300 md:text-7xl"
              style={{
                color: gradientColors[colorIndex],
                opacity,
                transform: `scale(${scale})`,
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
              <span key={index} style={{ display: "block" }}>
                {position}
              </span>
            ))}
          </p>
        </motion.div>

        <Button onClick={prevStep} label="Back" variant="back" />
        <Button onClick={nextStep} label="Next" variant="next" />
      </div>
    </article>
  );
}