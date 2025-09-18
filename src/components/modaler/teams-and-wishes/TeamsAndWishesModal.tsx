import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useStepStore } from "@/stores/step-store/useStepStore";
import {
  useFormStore,
  useSessionStorageSync,
} from "@/stores/form-store/useFormStore";

export default function FifthStep() {
  const { nextStep, prevStep } = useStepStore();
  const listRef = useRef<HTMLDivElement>(null);
  const { positions, setPositions, teams, setTeams } = useFormStore();
  const numTeams = teams.length;
  const startOffset = numTeams;
  const [centerIndex, setCenterIndex] = useState(startOffset);
  const [isCenterClicked, setIsCenterClicked] = useState(false);

  useSessionStorageSync();

  return <></>;
}
