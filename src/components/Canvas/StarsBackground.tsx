"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@/components/Canvas/Stars";
import { theme } from "@/styles/colors";

export default function StarsBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        dpr={[1, 2]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <color attach="background" args={[theme.colors.charcoal]} />
        <Stars />
      </Canvas>
    </div>
  );
}