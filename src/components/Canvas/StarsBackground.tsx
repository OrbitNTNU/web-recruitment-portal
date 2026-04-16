"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@/components/Canvas/Stars";
import { ShootingStars } from "@/components/Canvas/ShootingStars";
import { theme } from "@/styles/colors";

export default function StarsBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 85 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <color attach="background" args={[theme.colors.charcoal]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />

        <Stars />
        <ShootingStars />
      </Canvas>
    </div>
  );
}