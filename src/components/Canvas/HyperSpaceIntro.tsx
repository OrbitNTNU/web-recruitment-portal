"use client";

import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { WarpLines } from "@/components/Canvas/WarpLines";

export default function HyperspaceIntro({
  label = "SYSTEM",
}: {
  label?: string;
}) {
  return (
    <div className="relative w-full h-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <color attach="background" args={["black"]} />
        <WarpLines />
      </Canvas>

      <motion.div
        className="
          pointer-events-none
          absolute bottom-6 right-6
          text-[10px] tracking-widest
          text-[var(--color-cloud-white)]
          opacity-80
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        LOADING {label.toUpperCase()}…
      </motion.div>

      <motion.img
        src="/shared/Orbit text Small.png"
        alt="Orbit logo"
        className="
          pointer-events-none
          absolute bottom-6 left-6
          w-32 sm:w-36 md:w-40
          opacity-90
        "
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.9 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}
